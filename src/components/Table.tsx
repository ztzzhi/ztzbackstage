import React, { useState } from "react"
import { Table } from "antd"

interface Iprops {
  dataSource: any[]
  columns: any[]
  total: number
  page: number
  loading: boolean
  isSelection?: boolean
  selectRows?: (...set: any) => void
  pageSizeChange: (...set: any) => void
}

export default function TableComponent(props: Iprops) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys)
    if (props.isSelection && typeof props.selectRows === "function") {
      props.selectRows(selectedRowKeys)
    }
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const onShowChange = (page: number, size: number) => {
    props.pageSizeChange(page, size)
  }

  return props.isSelection ? (
    <Table
      rowKey="id"
      rowSelection={rowSelection}
      rowClassName={(_, index) => (index % 2 === 1 ? "tableBac" : "")}
      dataSource={props.dataSource}
      columns={props.columns}
      pagination={{
        total: props.total,
        showSizeChanger: true,
        showQuickJumper: props.total > 50 ? true : false,
        showTotal: total => `共 ${total} 条`,
        pageSizeOptions: [10, 15, 20, 30],
        current: props.page,
        onChange: onShowChange
      }}
      loading={props.loading}
      scroll={{ x: 500 }}
    />
  ) : (
    <Table
      rowKey="id"
      rowClassName={(_, index) => (index % 2 === 1 ? "tableBac" : "")}
      dataSource={props.dataSource}
      columns={props.columns}
      pagination={{
        total: props.total,
        showSizeChanger: true,
        showQuickJumper: props.total > 50 ? true : false,
        showTotal: total => `共 ${total} 条`,
        pageSizeOptions: [10, 15, 20, 30],
        current: props.page,
        onChange: onShowChange
      }}
      loading={props.loading}
      scroll={{ x: 500 }}
    />
  )
}
