import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"
import ReactEcharts from "echarts-for-react"
import { Chart } from "@antv/g2"
import { Row, Col } from "antd"
type EChartsOption = echarts.EChartsOption
export default function Index() {
  const echartsRef = useRef<any>()

  const initial = () => {
    const data = [
      { type: "1-3秒", value: 0.16 },
      { type: "4-10秒", value: 0.125 },
      { type: "11-30秒", value: 0.24 },
      { type: "31-60秒", value: 0.19 },
      { type: "1-3分", value: 0.22 },
      { type: "3-10分", value: 0.05 },
      { type: "10-30分", value: 0.01 },
      { type: "30+分", value: 0.015 }
    ]
    const chart = new Chart({
      container: "chartsG2",
      autoFit: true,
      height: 500
    })

    chart.data(data)
    chart.scale("value", {
      nice: true
    })
    chart.axis("type", {
      tickLine: null
    })

    chart.axis("value", {
      label: {
        formatter: val => {
          return +val * 100 + "%"
        }
      }
    })
    chart.tooltip({
      showMarkers: false
    })
    chart.interaction("element-active")

    chart.legend(false)
    chart
      .interval({
        background: {
          style: {
            radius: 8
          }
        }
      })
      .position("type*value")
      .color("type", val => {
        if (val === "10-30分" || val === "30+分") {
          return "#ff4d4f"
        }
        return "#2194ff"
      })
      .label("value", {
        offset: 10
      })

    chart.render()
  }

  useEffect(() => {
    echartsRef.current.resize()
    initial()
  }, [])

  const getOption = () => {
    const option: EChartsOption = {
      title: {
        text: "Stacked Area Chart"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        top: "40",
        align: "left"
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      grid: {
        top: "20%"
        // containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top"
          },
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    return option
  }
  return (
    <Row gutter={[10, 15]}>
      <Col span={12}>
        <ReactEcharts
          ref={echartsRef}
          style={{ width: "100%", height: "500px" }}
          option={getOption()}
        ></ReactEcharts>
      </Col>
      <Col span={12}>
        <div id="chartsG2"></div>
      </Col>
    </Row>
  )
}
