import React, { useState } from "react"
import { Card, Form, Input, Col, Row, Button, Table } from "antd"

import useColumns from "./columns"
import RollNumber from "@/components/RollNumber"
import CountUp from "react-countup"

const Index: React.FC = () => {
  const [form] = Form.useForm()
  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values, "validateFields")
  }

  const handleReset = () => {
    form.resetFields()
  }

  const onFinishFailed = (val: any) => {
    console.log("onFinishFailedmval", val)
  }

  const onShowChange = (val: any) => {
    console.log(val, "onShowChange")
  }

  const dataSource = [
    {
      name: "z",
      register_funds: "哈哈哈",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    },
    {
      name: "zt",
      register_funds: "哈哈哈1",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    },
    {
      name: "ztz",
      register_funds: "哈哈哈2",
      acreage: "1111",
      register_address: "zzz",
      company_address: "akjsdhkahskdhaksdakjsdhkahskdhaksdakjsdhkahskdhaksd",
      afunction: "121212",
      bfunction: "asdasdasdasd",
      cfunction: "asdasdasdasdasd"
    }
  ]

  const title = (
    <div>
      <Row>
        <Form
          name="basic"
          autoComplete="off"
          layout="inline"
          form={form}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={[20, 15]}>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="培训机构" name="username1">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="客户经理" name="username2">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="培训机构名称" name="username3">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="努涅" name="username4">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={12} xl={8} xxl={6}>
              <Form.Item label="查询" name="username5">
                <Input allowClear />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row gutter={[10, 10]} style={{ marginTop: "15px" }} justify="end">
        <Col>
          <Button type="primary" onClick={onFinish}>
            查询
          </Button>
        </Col>
        <Col>
          <Button onClick={handleReset}>清除</Button>
        </Col>
      </Row>
    </div>
  )
  return (
    <Card style={{ height: "100%", borderRadius: "6px" }} title={title}>
      <Table
        rowKey={record => record.name}
        dataSource={dataSource}
        columns={useColumns()}
        scroll={{ x: 500 }}
        pagination={{
          total: 50,
          showSizeChanger: true,
          showTotal: (total: any) => `共 ${total} 条`,
          pageSizeOptions: [10, 15, 20, 30],
          current: 1,
          onChange: onShowChange
        }}
      ></Table>
    </Card>
  )
}

export default Index
