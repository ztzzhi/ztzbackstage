import React, { useEffect } from "react"
import HeaderSelf from "./header/header"
import MenuSelf from "./menu/menu"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
//@ts-ignore
import style from "./index.module.less"
import "./index.less"
import RouterBefore from "../../router/routerBefore"
const { Header, Sider, Content } = Layout
const Index: React.FC = () => {
  return (
    <div>
      <Layout className={style.admin}>
        <Header className={style.header}>
          <HeaderSelf>
            <div className="horizontalMenu">
              <MenuSelf mode="horizontal"></MenuSelf>
            </div>
          </HeaderSelf>
        </Header>
        <Layout className={style.content}>
          <Sider className="inlineMenu">
            <MenuSelf mode="inline"></MenuSelf>
          </Sider>
          <Content className={style.mainContent}>
            <div className={style.mainContentRound}>
              <RouterBefore>
                <Outlet></Outlet>
              </RouterBefore>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Index
