import React from "react"
//@ts-ignore
import style from "./index.module.less"
import I18nDropdown from "./i18nDropdown"

import { useTranslation } from "react-i18next"

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={style.headerText}>
      <div>{t("header.logoText")}</div>
      <div className="action">
        <I18nDropdown></I18nDropdown>
      </div>
    </div>
  )
}

export default Header
