import { QueryFilter } from "@ant-design/pro-components"
import { FormInstance } from "antd/es/form"
interface Iprops {
  onFinish: (...set: any) => any
  form: FormInstance
  children: React.ReactNode
}
// select  mode 选项 "multiple" | "tags" | "single"
export default function QueryForm(props: Iprops) {
  return (
    <QueryFilter
      className="extraFilterClass"
      split
      preserve={false}
      labelWidth="auto"
      form={props.form}
      defaultCollapsed={false}
      onFinish={props.onFinish}
    >
      {props.children}
    </QueryFilter>
  )
}
