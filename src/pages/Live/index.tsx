import React, { useEffect, useRef, useState } from "react"
//@ts-ignore
import style from "./index.module.css"
import { Button, Input, Row } from "antd"
import "xgplayer"
//@ts-ignore
import HlsJsPlayer from "xgplayer-hls.js"
let index = 1
const Index: React.FC = () => {
  const [player, setPlayer] = useState<any>(null)
  const [inputvalue, setinputvalue] = useState<any>("")

  useEffect(() => {
    if (!player) {
      const player = new HlsJsPlayer({
        id: "playerasdasdasd",
        url: "https://l.cztvcloud.com/channels/lantian/SXxinchang1/720p.m3u8",
        isLive: true,
        autoplay: true,
        playsinline: true,
        danmu: {
          //弹幕数组
          comments: [
            {
              duration: 10000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
              id: "1", //弹幕id，需唯一
              start: 3000, //弹幕出现时间，毫秒
              prior: true, //该条弹幕优先显示，默认false
              color: true, //该条弹幕为彩色弹幕，默认false
              txt: "我是幕1", //弹幕文字内容
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "16px",
                border: "solid 1px #ff9500",
                borderRadius: "10px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }
            }
          ]
        }
      })
      setPlayer(player)
    }
  }, [])

  const handleChange = (val: any) => {
    setinputvalue(val.target.value)
  }
  return (
    <Row>
      <div id="playerasdasdasd"></div>
      <Input value={inputvalue} onChange={handleChange}></Input>
      <Button
        onClick={() => {
          index++
          console.log(index, "index")
          player.danmu.sendComment({
            duration: 10000, //弹幕持续显示时间,毫秒(最低为5000毫秒)
            id: index, //弹幕id，需唯一
            // start: 3000, //弹幕出现时间，毫秒
            // prior: true, //该条弹幕优先显示，默认false
            color: true, //该条弹幕为彩色弹幕，默认false
            txt: inputvalue, //弹幕文字内容
            style: {
              //弹幕自定义样式
              color: "#ff9500",
              fontSize: "16px",
              border: "solid 1px #ff9500",
              borderRadius: "10px",
              padding: "5px 11px",
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }
          })
          setinputvalue("")
        }}
      >
        发送
      </Button>
    </Row>
  )
}

export default Index
