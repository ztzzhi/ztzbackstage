import { useState, useEffect } from "react"
import "./index.less"
interface Iprops {
  endVal: string
  duration?: number
}

export default function DescriptionsComponent(props: Iprops) {
  const [endVal, setEndVal] = useState<string>("0".repeat(props.endVal.length))
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    handleNumber()
  }, [props.endVal])

  const handleNumber = () => {
    if (typeof props.endVal === "string") {
      setEndVal(props.endVal)
    } else if (typeof props.endVal === "number") {
      setEndVal(props.endVal + "")
    } else {
      throw new Error("endVal 类型错误 应该传入 string or number 类型")
    }
  }

  const transform = (index: any) => {
    return `translate(0%, -${parseInt(endVal[index]) * 100}%)`
  }

  return (
    <div className="numberContainer">
      {endVal.split("").map((single, index) => {
        return (
          <div
            className="outcontainer"
            style={{
              transform: transform(index)
            }}
            key={index}
          >
            {numberArr.map((item, key) => {
              return (
                <i className="flyi" key={key}>
                  {item}
                </i>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
