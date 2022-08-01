import React from "react"
//@ts-ignore
import style from "./index.module.less"

import { useDispatch, useSelector } from "react-redux"

import { changeLanguageAction } from "@/store/actions/i18n"

import { RootState } from "@/store"

import { i18nType } from "@/store/reducers/i18n"

import { Select } from "antd"

import { useTranslation } from "react-i18next"

import { useLocation, useParams, useSearchParams } from "react-router-dom"

const Header: React.FC = () => {
  const { Option } = Select

  const currentLanguage = useSelector<RootState, i18nType>(state => state.i18n)

  const dispatch = useDispatch()

  const { t } = useTranslation()
  const handleChangeLanguage = (value: string) => {
    dispatch(changeLanguageAction(value))
  }

  const location = useLocation()
  console.log(location)

  return (
    <div className={style.headerText}>
      <div>{t("header.logoText")}</div>
      <div>
        <Select
          size="small"
          defaultValue={currentLanguage.language}
          onChange={handleChangeLanguage}
        >
          <Option key="zh">中文</Option>
          <Option key="en">英文</Option>
        </Select>
      </div>
    </div>
  )
}

export default Header
