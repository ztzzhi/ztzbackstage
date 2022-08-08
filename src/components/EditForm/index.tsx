import { Form, Input, DatePicker, InputNumber, Switch, Select } from "antd"

const { RangePicker } = DatePicker

const { Option } = Select

interface Iprops {
  form: any
  formConfigArray?: IItemArray[]
}
interface IItemArray {
  name: string
  label: string
  type?: string
  option?: IOption[]
  config?: object
  valuePropName?: string //比如switch使用的是checked而不是value控制的状态 这时我们可以通过valuePropName把状态绑定到对应的属性上
  checked?: boolean
  rules?: any
}

interface IOption {
  label: string
  value: string | number
}

export default function TableComponent(props: Iprops) {
  const getComponents = (item: IItemArray) => {
    const value = item.type ? item.type : "Input"
    switch (value) {
      case "Search":
        return <Input.Search {...item.config}></Input.Search>
        break
      case "InputNumber":
        return <InputNumber {...item.config}></InputNumber>
        break
      case "Select":
        return (
          <Select {...item.config}>
            {item.option &&
              item.option.map(mini => {
                return (
                  <Option value={mini.value} key={mini.value}>
                    {mini.label}
                  </Option>
                )
              })}
          </Select>
        )
        break
      case "Switch":
        return <Switch {...item.config}></Switch>
        break
      case "DatePicker":
        return (
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            {...item.config}
          ></DatePicker>
        )
        break
      case "RangePicker":
        return (
          <RangePicker
            format="YYYY-MM-DD HH:mm:ss"
            {...item.config}
          ></RangePicker>
        )
        break
      default:
        return <Input {...item.config}></Input>
        break
    }
  }
  // sm={24} md={24} lg={12} xl={8} xxl={6}
  return (
    <Form
      form={props.form}
      labelAlign="right"
      labelCol={{ sm: 24, md: 24, lg: 6, xl: 6, xxl: 6 }}
      wrapperCol={{ sm: 24, md: 24, lg: 14, xl: 14, xxl: 14 }}
    >
      {props.formConfigArray &&
        props.formConfigArray.map((item, index) => {
          return (
            <Form.Item
              key={index}
              name={item.name}
              label={item.label}
              valuePropName={item.valuePropName}
              rules={item.rules}
            >
              {getComponents(item)}
            </Form.Item>
          )
        })}
    </Form>
  )
}
