import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Space, Button } from "antd"

export default function useColumns({
  showPassConfirm,
  showRefuseConfirm,
  resetPasswd
}: any) {
  const { t } = useTranslation()
  return [
    {
      title: t("header.nameOfTrainingInstitution"),
      width: 120,
      align: "center",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "注册资金(万元)",
      width: 120,
      align: "center",
      dataIndex: "register_funds",
      key: "register_funds"
    },
    {
      title: "面积(平方米)",
      width: 120,
      align: "center",
      dataIndex: "acreage",
      key: "acreage"
    },
    {
      title: "注册地址",
      width: 180,
      align: "center",
      dataIndex: "register_address",
      key: "register_address",
      ellipsis: true
    },
    {
      title: "经营地址",
      width: 180,
      align: "center",
      dataIndex: "company_address",
      key: "company_address",
      ellipsis: true
    },
    {
      title: "经营范围",
      width: 180,
      align: "center",
      dataIndex: "run_scope",
      key: "run_scope",
      ellipsis: true
    },
    {
      title: "法人代表",
      width: 100,
      align: "center",
      dataIndex: "legal_deputy",
      key: "legal_deputy"
    },
    {
      title: "联系方式",
      width: 120,
      align: "center",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "许可证号",
      width: 150,
      align: "center",
      dataIndex: "license_number",
      key: "license_number",
      ellipsis: true
    },
    {
      title: "发证时间",
      width: 110,
      align: "center",
      dataIndex: "issuance_time",
      key: "issuance_time"
    },
    {
      title: "有效期",
      width: 110,
      align: "center",
      dataIndex: "valid_time",
      key: "valid_time"
    },
    {
      title: "培训类别",
      width: 120,
      align: "center",
      dataIndex: "service_type",
      key: "service_type"
    },
    {
      title: "申请时间",
      width: 160,
      align: "center",
      dataIndex: "created_at",
      key: "created_at"
    },
    {
      title: "申请状态",
      width: 110,
      align: "center",
      dataIndex: "status",
      key: "status",
      render: (text: any) =>
        text === 1 ? "待审核" : text === 2 ? "审核通过" : "审核拒绝"
    },
    {
      title: "审核备注",
      width: 150,
      align: "center",
      dataIndex: "reason",
      key: "reason",
      ellipsis: true
    },
    {
      title: "操作",
      key: "operation",
      align: "center",
      fixed: "right",
      width: 150,
      render: (record: any) => (
        <Space size={6} direction="vertical">
          <Button type="link">
            <Link to={`/cultivate/edit/${record.id}`} state={record}>
              编辑
            </Link>
          </Button>
          {record?.status === 1 ? (
            <>
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  showPassConfirm(record)
                }}
              >
                通过
              </Button>
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  showRefuseConfirm(record)
                }}
                ghost
              >
                不通过
              </Button>
            </>
          ) : (
            ""
          )}

          {record.status === 2 ? (
            <Button type="primary" danger onClick={() => resetPasswd(record)}>
              重置登录密码
            </Button>
          ) : (
            ""
          )}
        </Space>
      )
    }
  ]
}
