import React from "react"
import "./index.less"
import I18nDropdown from "./i18nDropdown"

import { useTranslation } from "react-i18next"

const Header = (props: any) => {
  const { t } = useTranslation()
  return (
    <div className="headerText">
      <div className="centerLeft">{t("header.logoText")}</div>
      <div className="centerCenter">{props.children}</div>
      <div className="action centerRight">
        <I18nDropdown></I18nDropdown>
      </div>
    </div>
  )
}

export default Header
