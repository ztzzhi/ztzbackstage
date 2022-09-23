import React, { useState, useEffect, useRef } from "react"
import {
  Card,
  Input,
  Button,
  Select,
  Form,
  Modal,
  message,
  Row,
  Col
} from "antd"
import Table from "../../components/TableNoSelection"
import useColumns from "./columns"

import {
  getCultivate,
  cultivateVerify,
  cultivateResetPasswd
} from "../../api/member"
import { ExclamationCircleOutlined } from "@ant-design/icons"

const { Option } = Select
const { Search, TextArea } = Input
const { confirm } = Modal

export default function Cultivate() {
  const [list, setList] = useState([])
  const sortableGoods = useRef<any>()
  const [condition, setCondition] = useState<{
    name?: string
    page?: number
    pageSize?: number
    status?: string
  }>({})
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [form] = Form.useForm()
  const reasonRef: any = useRef(null)
  useEffect(() => {
    getList()
  }, [])

  // const initSort = (data: any) => {
  //   const tab = document.getElementsByClassName("goodsTable")
  //   const el: any = tab[0].getElementsByClassName("ant-table-tbody")[0]
  //   Sortable.create(el, {
  //     animation: 100, //动画参数
  //     filter: ".ant-table-measure-row",
  //     onEnd: function (evt: any) {
  //       const newArr = JSON.parse(JSON.stringify(data))
  //       const beginIndex = evt.oldIndex - 1
  //       const endIndex = evt.newIndex - 1
  //       console.log(beginIndex, endIndex)
  //       newArr.splice(endIndex, 0, newArr.splice(beginIndex, 1)[0])
  //       console.log(newArr, "newArr")
  //     }
  //   })
  // }

  const getList = async (param = {}) => {
    const result: any = await getCultivate(param)
    const { data, code } = result
    if (code === 0) {
      setList(data.data)
      setLoading(false)
      setTotal(data?.total)
      // initSort(data.data)
    }
  }

  // 关键词搜索查询
  const search = (value: string) => {
    setCondition({ ...condition, name: value })
    getList({ ...condition, name: value })
  }

  // 条件重置
  const reset = () => {
    form.resetFields()
    // 默认列表显示10条数据
    getList({ pageSize: 10 })
  }

  // 下拉框选中事件
  const changeSelect = (value: string) => {
    console.log(value, "value")

    setCondition({ ...condition, status: value })
    getList({ ...condition, status: value })
  }

  // 设置每页分页的条数
  const getPageSize = (page: number, size: number) => {
    setCondition({ ...condition, page, pageSize: size })
    getList({ ...condition, page, pageSize: size })
  }

  // 审核拒绝理由
  const getReason = (e: any) => {
    reasonRef.current = e.target.value
  }

  // 通过审核
  const showPassConfirm = (record: any) => {
    confirm({
      title: "培训机构审核确认通过?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        const result: any = await cultivateVerify(record.id, { status: 2 })
        if (result?.code === 0) {
          message.success("审核已通过", 2)
          setTimeout(() => {
            const newDatas = list.map((item: any) => {
              if (item.id === record.id) {
                item.status = 2
              }
              return item
            })
            setList(newDatas as any)
          }, 1000)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  // 审核拒绝
  const showRefuseConfirm = (record: any) => {
    confirm({
      title: "培训机构审核确认不通过?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <TextArea
          rows={4}
          onChange={getReason}
          ref={reasonRef}
          placeholder="请输入拒绝理由, 限制100字"
          maxLength={100}
        />
      ),
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        const reasonTxt = reasonRef.current.resizableTextArea.props.value
        if (reasonTxt.length === 0) {
          message.error("请输入拒绝理由", 1)
          return new Promise((_, reject) => {
            reject()
          })
        }
        // 处理请求接口
        const result: any = await cultivateVerify(record.id, {
          status: 3,
          reason: reasonTxt
        })
        if (result?.code === 0) {
          message.success("审核已拒绝", 2)
          setTimeout(() => {
            const newDatas = list.map((item: any) => {
              if (item.id === record.id) {
                item.status = 3
                item.reason = reasonTxt
              }
              return item
            })
            setList(newDatas as any)
          }, 1000)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  // 重置密码
  const resetPasswd = (record: any) => {
    confirm({
      title: "确认重置密码?",
      icon: <ExclamationCircleOutlined />,
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        const result: any = await cultivateResetPasswd(record.id)
        if (result?.code === 0) {
          message.success("密码重置成功", 2)
        }
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  return (
    <Card
      title={
        <Form form={form} layout="inline">
          <Row gutter={[20, 15]}>
            <Col>
              <Form.Item label="培训机构" name="agency_name">
                <Search
                  placeholder="请输入培训机构名称"
                  allowClear
                  onSearch={search}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="审核状态" name="state">
                <Select
                  onChange={changeSelect}
                  placeholder="选择审核状态"
                  allowClear
                  style={{ width: 180 }}
                >
                  <Option value="1">待审核</Option>
                  <Option value="2">审核通过</Option>
                  <Option value="3">审核不通过</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item style={{ marginLeft: "10%" }}>
                <Button type="primary" onClick={reset}>
                  重置
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      }
    >
      <div className="goodsTable" ref={sortableGoods}>
        <Table
          dataSource={list}
          columns={useColumns({
            showPassConfirm,
            showRefuseConfirm,
            resetPasswd
          })}
          pagesize={getPageSize}
          loading={loading}
          total={total}
          page={condition.page}
        />
      </div>
    </Card>
  )
}
