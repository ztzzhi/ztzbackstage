/* eslint-disable prettier/prettier */
/**
FP: "FP", 首次绘制时间 白屏时间
FCP: "FCP", 首次内容绘制时间 首屏时间
TTFB: "TTFB", 收到第一字节耗时
TTI: "TTI", html加载耗时
DCL: "DCL", domContentLoaded
ONLOAD: "ONLOAD", onload
DNS: "DNS", DNS查询耗时
TCP: "TCP", TCP建立连接耗时
DOM: "DOM" DOM解析耗时

stayTime : 所有页面停留总时长
*/
import { init } from "@mitojs/browser"
class ztzCollection {
  constructor() {
    this.perColection = {
      FP: null,
      FCP: null,
      TTFB: null,
      TTI: null,
      DCL: null,
      ONLOAD: null,
      DNS: null,
      TCP: null,
      DOM: null
    }
    this.userBehavior = {
      stayTime: null
    }
    this.stayTimeBegin = null
    this.MitoInstance = null
  }
  onLoad () {
    this.getPerformance()
    this.getUserBehavior()
    window.onbeforeunload = () => {
      let stayTimeEnd = window.performance.now()
      let stayTime = (stayTimeEnd - this.stayTimeBegin).toFixed(2) / 1000
      this.userBehavior.stayTime = stayTime
      localStorage.setItem("ztzcollection", JSON.stringify({ perColection: this.perColection, userBehavior: this.userBehavior }))
    }
  }

  getPerformance () {
    let isFirstScreen = window.sessionStorage.getItem("ztz_firstScreen") == null
    this.stayTimeBegin = window.performance.now()
    if (!isFirstScreen) return
    window.sessionStorage.setItem("ztz_firstScreen", "not")
    if (window.performance && window.performance.getEntries) {
      var perfEntries = window.performance.getEntries()
      let t = perfEntries[0]
      this.perColection.DNS =
        (t.domainLookupEnd - t.domainLookupStart).toFixed(2) * 1
      this.perColection.TCP = (t.connectEnd - t.connectStart).toFixed(2) * 1
      this.perColection.TTFB = (t.responseStart - t.requestStart).toFixed(2) * 1
      this.perColection.DOM = (t.domInteractive - t.responseEnd).toFixed(2) * 1
      this.perColection.TTI = (t.domInteractive - t.fetchStart).toFixed(2) * 1
      this.perColection.DCL =
        (t.domContentLoadedEventEnd - t.fetchStart).toFixed(2) * 1
      this.perColection.ONLOAD =
        (t.loadEventStart).toFixed(2) * 1
      for (var key in perfEntries) {
        if (
          perfEntries[key].name &&
          perfEntries[key].name === "first-contentful-paint" &&
          perfEntries[key].startTime
        ) {
          var fcp = perfEntries[key].startTime.toFixed(2) * 1
          this.perColection.FCP = fcp
        }
        if (
          perfEntries[key].name &&
          perfEntries[key].name === "first-paint" &&
          perfEntries[key].startTime
        ) {
          var fp = perfEntries[key].startTime.toFixed(2) * 1
          this.perColection.FP = fp
        }
      }
    }

  }

  getUserBehavior () {
    this.MitoInstance = init({
      dsn: "https://test.com/yourServer",
      apikey: "ztzPC",
      maxBreadcrumbs: 100,
      beforeDataReport () {
        return false
      },
      beforePushBreadcrumb (breadcrumb, hint) {
        // 大于100条数据立马上传 清空stack 然后没有大于100条在页面关闭时上传
        console.log(hint, 'hint');
        return hint
      }
    })
  }
  static Instance = new ztzCollection()
}

export default ztzCollection
