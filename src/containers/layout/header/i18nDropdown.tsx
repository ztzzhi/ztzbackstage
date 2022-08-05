import React from "react"
import { changeLanguageAction } from "@/store/actions/i18n"

import { useDispatch, useSelector } from "react-redux"

import { RootState } from "@/store"

import { i18nType } from "@/store/reducers/i18n"

import { Menu, Dropdown } from "antd"

const i18nDropdown: React.FC = () => {
  const currentLanguage = useSelector<RootState, i18nType>(state => state.i18n)
  const dispatch = useDispatch()
  const handleChangeLanguage = (value: any) => {
    dispatch(changeLanguageAction(value.key))
  }
  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleChangeLanguage}
          selectedKeys={[currentLanguage.language]}
          items={[
            {
              label: "🇨🇳简体中文",
              key: "zh"
            },
            {
              label: "🇺🇸English",
              key: "en"
            }
          ]}
        ></Menu>
      }
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
          className="css-c4d79v"
        />
      </svg>
    </Dropdown>
  )
}

export default i18nDropdown
