import { DownOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import type { ProColumns } from "@ant-design/pro-components"
import { ProTable, TableDropdown } from "@ant-design/pro-components"
import { Button, Tooltip } from "antd"
import React, { useEffect } from "react"

const valueEnum = {
  0: "close",
  1: "running",
  2: "online",
  3: "error"
}

export type TableListItem = {
  key: number
  name: string
  containers: number
  creator: string
  status: string
  createdAt: number
  memo: string
}
const tableListDataSource: TableListItem[] = []

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"]

for (let i = 0; i < 35; i += 1) {
  tableListDataSource.push({
    key: i,
    name: "AppName",
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    // @ts-ignore
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? "很长很长很长很长很长很长很长的文字要展示但是要留下尾巴"
        : "简短备注文案"
  })
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: "应用名称",
    dataIndex: "name",
    fixed: "left",
    align: "center",
    width: 100,
    render: _ => <a>{_}</a>
  },
  {
    title: "容器数量",
    dataIndex: "containers",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "status",
    align: "center",
    initialValue: "all",
    valueEnum: {
      all: { text: "全部", status: "Default" },
      close: { text: "关闭", status: "Default" },
      running: { text: "运行中", status: "Processing" },
      online: { text: "已上线", status: "Success" },
      error: { text: "异常", status: "Error" }
    }
  },
  {
    title: "创建者",
    align: "center",
    dataIndex: "creator",
    valueEnum: {
      all: { text: "全部" },
      付小小: { text: "付小小" },
      曲丽丽: { text: "曲丽丽" },
      林东东: { text: "林东东" },
      陈帅帅: { text: "陈帅帅" },
      兼某某: { text: "兼某某" }
    }
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
    // sorter: (a, b) => a.createdAt - b.createdAt
  },
  {
    align: "center",
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),

    key: "since",
    dataIndex: "createdAt",
    valueType: "date"
    // sorter: (a, b) => a.createdAt - b.createdAt
  },

  {
    align: "center",
    title: "备注",
    dataIndex: "memo",
    ellipsis: true,
    copyable: true
  },
  {
    title: "操作",
    width: 180,
    fixed: "right",
    key: "option",
    valueType: "option",
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      // <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        onSelect={e => {
          console.log(e)
        }}
        menus={[
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" }
        ]}
      />
    ]
  }
]

export default () => {
  useEffect(() => {
    window.addEventListener("resize", handleResize, false)
    return () => {
      window.removeEventListener("resize", handleResize, false)
    }
  }, [])

  const handleResize = () => {
    const RootDOM = document.querySelector("#root")
    if (RootDOM) {
      // @ts-ignore
      console.log(RootDOM.clientHeight())
    }
    console.log(RootDOM, "RootDOM")
  }
  return (
    <ProTable<TableListItem>
      className="ProTableClass"
      dataSource={tableListDataSource}
      rowKey="key"
      options={{
        density: true,
        fullScreen: true,
        reload: false,
        setting: true
      }}
      pagination={{
        showQuickJumper: true
      }}
      scroll={{ x: 1800, y: 300 }}
      columns={columns}
      search={false}
      dateFormatter="string"
      // headerTitle="表格标题"
      toolBarRender={() => [
        // <Button key="show">查看日志</Button>,
        <Button key="out">导出数据</Button>,
        <Button type="primary" key="primary">
          新建容器
        </Button>
      ]}
    />
  )
}
