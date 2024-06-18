"use strict";
n(724458);
var i = n(259443),
  r = n(579806),
  s = n(77450),
  o = n(998502);
let a = new i.Y("ProcessUtilsElectron");
class l extends s.h {
  setupReportingTimer() {
    var e, t;
    let n = null === r.Z || void 0 === r.Z ? void 0 : null === (e = r.Z.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
    if (null == n) {
      a.log("setMemoryInformation not available.");
      return
    }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && a.error("usedJSHeapSize is not available.");
    setInterval(() => {
      var e, t, i;
      let r = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
      n({
        memoryUsageKB: null !== (i = this.lastMemoryUsageKB) && void 0 !== i ? i : 0,
        usedJSHeapSizeKB: Math.ceil(r / 1024)
      })
    }, 1e4)
  }
  getProcessUptime() {
    var e, t;
    return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
  }
  getCurrentCPUUsagePercent() {
    var e, t;
    return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
  }
  getCumulativeCPUUsage() {
    var e, t;
    return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCumulativeCPUUsage) || void 0 === e ? void 0 : e.call(t)
  }
  getCurrentMemoryUsageKB() {
    let e = l.getCurrentMemoryUsageKBCore();
    return this.lastMemoryUsageKB = e, e
  }
  static getCurrentMemoryUsageKBCore() {
    try {
      let e = o.ZP.getDiscordMemoryUsage();
      if (null == e) return 0;
      let t = Object.values(e).reduce((e, t) => e + t, 0);
      return Math.ceil(t / 1024)
    } catch (e) {
      return 0
    }
  }
  getMemoryUsageDetails() {
    return o.ZP.getDiscordMemoryUsage()
  }
  getMemoryUsageElectronRenderer() {
    try {
      return o.ZP.getDiscordMemoryUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryUsageElectronRendererUsedHeapSize() {
    var e, t;
    return null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
  }
  constructor() {
    var e, t, n, i, s;
    super(), n = this, s = void 0, (i = "lastMemoryUsageKB") in n ? Object.defineProperty(n, i, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : n[i] = s, this.cpuCoreCount = null === r.Z || void 0 === r.Z ? void 0 : null === (t = r.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t), this.setupReportingTimer()
  }
}
t.Z = new l