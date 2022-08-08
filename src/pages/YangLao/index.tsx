import React, { useState, useEffect } from "react"
import { Card, Form, Input, Col, Row, Button, Skeleton, Space } from "antd"

import useColumns from "./columns"
import QueryForm from "@/components/QueryForm"
import PageContainer from "@/components/PageContainer/PageContainer"
import Table from "@/components/Table"
import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
  ProFormSwitch,
  ProFormSelect,
  ProFormDateTimeRangePicker,
  ProFormDateTimePicker,
  ProFormDateRangePicker
} from "@ant-design/pro-components"

import { getCultivate } from "../../api/member"

import TableOrder from "@/components/TableOrder/TableOrder"

const Index: React.FC = () => {
  // QueryFilter使用
  const [formSearch] = Form.useForm()
  // table组件使用
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [condition, setCondition] = useState<{
    name?: string
    page: number
    pageSize: number
    status?: string
  }>({
    page: 1,
    pageSize: 10
  })

  useEffect(() => {
    getList()
  }, [])

  const getList = async (param = {}) => {
    const result: any = await getCultivate(param)
    const { data, code } = result
    if (code === 0) {
      setList(data.data)
      setLoading(false)
      setTotal(data?.total)
    }
  }

  const onFinish = (val: any) => {
    console.log(val)
  }

  // 设置每页分页的条数
  const getPageSize = (page: number, size: number) => {
    setCondition({ ...condition, page, pageSize: size })
    getList({ ...condition, page, pageSize: size })
  }

  return (
    <>
      <PageContainer
        title="即卡卡的"
        extra={
          <Space>
            <Button>sss</Button>
            <Button>s11ss</Button>
          </Space>
        }
      >
        <QueryForm onFinish={onFinish} form={formSearch}>
          <ProFormText name="name" label="应用名称" />
          <ProFormDatePicker name="createDate" label="创建时间" />
          <ProFormText name="status" label="应用状态" />
          <ProFormDatePicker name="replyDate" label="响应日期" />
          <ProFormDateTimePicker name="startDate" label="创建时间" />
          <ProFormSelect
            name="select"
            label="选择器"
            mode="single"
            // showSearch
            options={[
              { label: "123", value: "1" },
              { label: "1234", value: "2" }
            ]}
          />
          <ProFormDateRangePicker name="endDate" label="结束时间" />
          {/* <ProFormSwitch name="ProFormSwitch" label="结束时间" /> */}
          <ProFormDateTimeRangePicker
            name="ProFormDateTimeRangePicker"
            label="结束时间"
          />
        </QueryForm>
        {/* <TablePro></TablePro> */}
        <Table
          dataSource={list}
          columns={useColumns({
            page: condition.page,
            pageSize: condition.pageSize
          })}
          onChange={getPageSize}
          loading={loading}
          total={total}
          page={condition.page}
        />
      </PageContainer>
    </>
  )
}

export default Index
