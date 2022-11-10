import React, { useState, useEffect, useRef } from "react"

import "./index.less"
import axios from "axios"
const timer: any = 0
const Index: React.FC = () => {
  const [list, setList] = useState<any>([])
  const [page, setPage] = useState(1)
  const myRef = useRef<any>()
  useEffect(() => {
    getList()
    // 监听窗口改变，执行handleFooterHeight
    window.addEventListener("resize", debounce(handleResize, 200))
    // 销毁监听
    return () =>
      window.removeEventListener("resize", debounce(handleResize, 200))
  }, [])

  // 防抖
  const debounce = (fn: any, time: number) => {
    let timeout: any = null
    return (...set: any) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn(...set)
      }, time)
    }
  }

  useEffect(() => {
    clearInterval(timer)
    handleResize()
    // timer = setInterval(() => {
    //   getList(page + 1)
    // }, 5000)
  }, [list])

  const handleResize = () => {
    const current = document.body.clientWidth
    if (current < 800) {
      WaterFull({
        el: ".container",
        item: "item",
        column: 2,
        gap: 10
      })
    } else if (current >= 800 && current < 1200) {
      WaterFull({
        el: ".container",
        item: "item",
        column: 4,
        gap: 10
      })
    } else if (current >= 1200 && current < 1600) {
      WaterFull({
        el: ".container",
        item: "item",
        column: 6,
        gap: 10
      })
    } else {
      WaterFull({
        el: ".container",
        item: "item",
        column: 8,
        gap: 10
      })
    }
  }

  const getList = (page?: number) => {
    axios
      .get(
        "https://www.myutils.cn:7001/v1/meiye/list?page=" + (page ? page : 1)
      )
      .then((res: any) => {
        setList([...list, ...res.data.result])
      })
  }

  const waitImgLoaded = async (root: any) => {
    const imgs =
      root instanceof HTMLImageElement ? [root] : root.querySelectorAll("img")
    return await Promise.all(
      Array.from(imgs).map(
        (img: any) =>
          new Promise(resolve =>
            img.addEventListener("load", () => resolve(img))
          )
      )
    )
  }

  const WaterFull = (options: any) => {
    const $el = document.querySelector(options.el)
    const $bottomHeight = options.bottomHeight ? options.bottomHeight : 50
    $el.style.visibility = "hidden"
    const $column = options.column
    const $gap = options.gap
    const itemArr = document.getElementsByClassName("item")

    // 高度低的下面优先放图片
    const heightArr: any = []
    // 获取container的宽度
    const FatherWidth = $el.offsetWidth
    // 计算没个item合适的宽度
    const itemWidth = (FatherWidth - $gap * ($column - 1)) / $column
    // 循环是前 this.$column 个 组成一个heightArr数组 后面的在heightArr数组中找出高度最低的然后累加高度 然后把当前item添加到该高度对应的图片的位置下面
    for (let i = 0; i < itemArr.length; i++) {
      const item: any = itemArr[i]
      item.style.width = itemWidth + "px"

      if (i < $column) {
        item.style.top = "0px"
        item.style.left = i * (itemWidth + $gap) + "px"
        heightArr.push(item.offsetHeight)
      } else {
        // 大于colomn的开始找heightArr高度最低的一项 然后追加到他的后面
        const minItem = Math.min(...heightArr)
        const index = heightArr.findIndex((item: any) => item == minItem)
        item.style.top = heightArr[index] + $gap + $bottomHeight + "px"
        item.style.left = itemWidth * index + index * $gap + "px"
        heightArr[index] =
          heightArr[index] + item.offsetHeight + $bottomHeight + $gap
      }
    }
    $el.style.visibility = "visible"
  }

  return (
    <div className="wrap">
      <div className="container" ref={myRef}>
        {list.map((item: any) => {
          return (
            <div
              className="item"
              key={item.id}
              style={{
                width: item.width * 0.13 + "px",
                height: item.height * 0.13 + "px"
              }}
            >
              <img src={item.image} alt="" />
              <div className="footer">
                <img
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fys_img%2F00%2F05%2F09%2F8LfaQcDrWd.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652518659&t=f06d009f034e3c425495fa4d40268278"
                  alt=""
                />
                <span className="spanclass">殊路同归</span>
                <img
                  className="heart"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F56b1aee877066cd0705ca939fb5eb259b367cbbf5ac44-hppIGS_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652518851&t=efede53bfeb47c9e383c55d381d2a791"
                  alt=""
                />
                <span className="clicknum">2W</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index
