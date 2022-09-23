import { Button, Card, Form, Input, InputNumber, message, Space } from "antd"
import React from "react"
// import { UserOutlined } from "@ant-design/icons"

import { useLocation, useNavigate } from "react-router-dom"
import { cultivateEdit } from "../../api/member"

export default function Index() {
  const navigate = useNavigate()
  const { state }: { state: any } = useLocation()
  console.log(state, "state")
  const formSubmit = async (value: any) => {
    const result: any = await cultivateEdit(state.id, value)
    if (result?.code === 0) {
      message.success("编辑成功", 2)
      setTimeout(() => {
        navigate(-1)
      }, 2000)
    }
  }
  return (
    <Card title="机构编辑" size="small">
      <Form
        labelCol={{ md: 4 }}
        wrapperCol={{ md: 8 }}
        onFinish={formSubmit}
        initialValues={{
          name: state.name,
          company_address: state.company_address,
          register_funds: state.register_funds,
          acreage: state.acreage,
          register_address: state.register_address,
          run_scope: state.run_scope,
          legal_deputy: state.legal_deputy,
          phone: state.phone,
          license_number: state.license_number,
          issuance_time: state.issuance_time,
          valid_time: state.valid_time,
          service_type: state.service_type
        }}
      >
        <Form.Item
          name="name"
          label="机构名称"
          rules={[{ required: true, message: "机构名称不能为空" }]}
        >
          <Input placeholder="请输入机构名称" />
        </Form.Item>
        <Form.Item
          label="经营（公司）地址"
          name="company_address"
          rules={[{ required: true, message: "经营地址不能为空" }]}
        >
          <Input placeholder="请输入经营地址" />
        </Form.Item>
        <Form.Item label="注册资金（万元）" name="register_funds">
          <InputNumber
            placeholder="请输入注册资金"
            // addonbefore={<UserOutlined />}
            style={{ width: "100%" }}
            min={1}
          />
        </Form.Item>

        <Form.Item label="注册地址" name="register_address">
          <Input placeholder="请输入注册地址" />
        </Form.Item>

        <Form.Item
          label="经营范围"
          name="run_scope"
          rules={[{ required: true, message: "经营范围不能为空" }]}
        >
          <Input placeholder="请输入经营范围" />
        </Form.Item>

        <Form.Item
          label="法定代表人"
          name="legal_deputy"
          rules={[{ required: true, message: "法定代表人不能为空" }]}
        >
          <Input placeholder="请输入法定代表人" />
        </Form.Item>

        <Form.Item
          label="联系方式"
          name="phone"
          rules={[{ required: true, message: "联系方式不能为空" }]}
        >
          <Input placeholder="请输入联系方式" />
        </Form.Item>

        <Form.Item
          label="许可证号"
          name="license_number"
          rules={[{ required: true, message: "注册资金不能为空" }]}
        >
          <Input placeholder="请输入许可证号" />
        </Form.Item>

        <Form.Item label="发证时间" name="issuance_time">
          <Input placeholder="请输入发证时间" />
        </Form.Item>

        <Form.Item label="有效期" name="valid_time">
          <Input placeholder="请输入有效期" />
        </Form.Item>

        <Form.Item label="培训类别" name="service_type">
          <Input placeholder="请输入培训类别" />
        </Form.Item>

        <Form.Item label="面积" name="acreage">
          <Input placeholder="请输入面积" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4 }}>
          <Space size="middle">
            <Button type="primary" htmlType="submit">
              保存提交
            </Button>
            <Button type="dashed" onClick={() => navigate(-1)}>
              返回列表
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}
