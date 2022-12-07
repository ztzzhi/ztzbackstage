import React from "react"
import { Menu } from "antd"
import menuList, { menuItemType } from "./menuList"
import { createFromIconfontCN } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom"
import type { MenuProps } from "antd"
//@ts-ignore
import style from "./index.module.less"

const Index = (props: any) => {
  const navigate = useNavigate()
  const handleClick = ({ domEvent }: any) => {
    const documentTitle = domEvent!.target.innerText
    document.title = documentTitle
  }
  const selectKey = useLocation().pathname.split("/")
  const openKeys = useLocation().pathname.split("/").slice(2)
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_3135910_afa4enq3jwv.js"
  })
  interface IMenuItem extends menuItemType {
    onClick?: (...set: any) => any
  }

  type IMenuProps = MenuProps["items"]

  const handleMenuList = (menuList: menuItemType[]): IMenuProps => {
    return menuList.map((item: IMenuItem) => {
      if (item.children) {
        return {
          ...item,
          children: handleMenuList(item.children),
          icon: (
            <IconFont
              type={item.icon as string}
              style={{ marginRight: "6px" }}
            />
          )
        }
      } else {
        return {
          ...item,
          onClick: () => {
            item.path && navigate(item.path)
          },
          icon: (
            <IconFont
              type={item.icon as string}
              style={{ marginRight: "6px" }}
            />
          )
        }
      }
    })
  }
  const menuListArr = handleMenuList(menuList.gv)

  return (
    <div className={style["left-nav"]}>
      <Menu
        defaultSelectedKeys={[""]}
        selectedKeys={selectKey}
        defaultOpenKeys={openKeys}
        mode={props.mode ? props.mode : "inline"}
        theme="dark"
        // className={style["left-nav-menu"]}
        onClick={handleClick}
        items={menuListArr}
      >
        {/* {createMenu(menuList.gv)} */}
      </Menu>
    </div>
  )
}

export default Index
