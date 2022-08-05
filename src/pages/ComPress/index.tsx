import React, { useState, useEffect } from "react"
import Table from "@/components/Table"
import EditForm from "@/components/EditForm"
import SearchForm from "@/components/SearchForm"
import useColumns from "./columns"
import { getCultivate } from "@/api/member"
import { formSearchArray, formEditArray } from "./formConfig"
import { Modal, Form, Card } from "antd"
import moment from "moment"

const { confirm } = Modal
interface IApi {
  page?: number
  pageSize?: number
}

const Index: React.FC = () => {
  const [formSearch] = Form.useForm()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [visible, setVisible] = useState(false)
  const [initParams, setInitParams] = useState({
    page: 1,
    pageSize: 10
  })
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
  }, [])

  const getList = async (params: IApi = initParams) => {
    const { data } = await getCultivate(params)
    setList(data.data)
    setTotal(data.total)
    setLoading(false)
  }

  const pageSizeChange = (page: number, pageSize: number) => {
    getList({ ...initParams, page, pageSize })
    setInitParams({ ...initParams, page, pageSize })
  }
  const selectRows = (val: any) => {
    console.log("selectRows", val)
  }

  const showPassConfirm = () => {
    confirm({
      title: "123"
    })
  }
  const showRefuseConfirm = () => {
    console.log(456)
  }
  const resetPasswd = () => {
    confirm({
      title: "重置登录密码"
    })
  }

  const getFieldsSearchValue = (val: any) => {
    console.log(val)
  }
  const handleEdit = (record: any) => {
    setVisible(true)
    form.setFieldsValue({
      ...record,
      created_at: moment(record.created_at, "YYYY-MM-DD HH:mm:ss"),
      beignAndEnd: [
        moment("2022-10-3", "YYYY-MM-DD HH:mm:ss"),
        moment("2022-11-20", "YYYY-MM-DD HH:mm:ss")
      ],
      selected: [2],
      status: record.status == 1 ? true : false
    })
  }

  return (
    <div>
      <Card
        title={
          <div>
            <SearchForm
              formConfigArray={formSearchArray}
              form={formSearch}
              getFieldsValue={getFieldsSearchValue}
            ></SearchForm>
          </div>
        }
      >
        <Table
          dataSource={list}
          columns={useColumns({
            showPassConfirm,
            showRefuseConfirm,
            resetPasswd,
            handleEdit
          })}
          total={total}
          page={initParams.page}
          loading={loading}
          selectRows={selectRows}
          onChange={pageSizeChange}
        ></Table>
        <Modal
          title="编辑功能展示"
          width={600}
          visible={visible}
          maskClosable={false}
          onOk={() => {
            console.log(form.getFieldsValue())
          }}
          onCancel={() => {
            form.resetFields()
            setVisible(false)
          }}
        >
          <EditForm formConfigArray={formEditArray} form={form}></EditForm>
        </Modal>
      </Card>
    </div>
  )
}

export default Index
