const menuList = {
  yl: [],
  px: [],
  gv: [
    {
      label: "模板示例All",
      key: "yanglao",
      icon: "icon-yanglao",
      path: "yanglao"
    },
    {
      label: "模板示例",
      key: "compress",
      icon: "icon-yonghu",
      path: "compress"
    },
    {
      label: "培训机构",
      key: "cultivate",
      icon: "icon-peixun",
      path: "cultivate"
    },
    {
      label: "直播",
      key: "live",
      icon: "icon-biaoqian",
      path: "live"
    },
    {
      label: "护理员管理",
      key: "caregivers",
      icon: "icon-icon_huliyuanguanli",
      path: "caregivers"
    },

    {
      label: "学习资料管理",
      key: "exercise",
      icon: "icon-xuexiziliao",
      children: [
        {
          label: "题库管理",
          key: "question",
          icon: "icon-dati",
          path: "exercise/question"
        },
        {
          label: "录播管理",
          key: "recorded",
          icon: "icon-shipin",
          path: "exercise/recorded"
        },
        {
          label: "模拟试卷",
          key: "test",
          icon: "icon-monishijuan",
          path: "exercise/test"
        }
      ]
    },
    {
      label: "系统管理",
      key: "basic",
      icon: "icon-xitongguanli",
      children: [
        {
          label: "基础设置",
          key: "set",
          icon: "icon-jichushezhi",
          path: "basic/set"
        },
        {
          label: "标签管理",
          key: "label",
          icon: "icon-biaoqian",
          path: "basic/label"
        }
      ]
    }
  ]
}

export interface menuItemType {
  label: string
  key: string
  icon: any
  path?: string
  children?: menuItemType[]
}

export default menuList
