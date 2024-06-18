"use strict";
n(653041);
var i = n(981631);
let r = [],
  s = !1;

function o() {
  let e = window.navigator.connection;
  return null == e ? {
    type: i.IWh.UNKNOWN,
    effectiveSpeed: i.IyS.UNKNOWN
  } : {
    type: null != e.type ? e.type : i.IWh.UNKNOWN,
    effectiveSpeed: e.effectiveType
  }
}

function a() {
  let e = o();
  r.forEach(t => t(e))
}
t.Z = {
  addOnlineCallback(e) {
    window.addEventListener("online", e)
  },
  removeOnlineCallback(e) {
    window.removeEventListener("online", e)
  },
  addOfflineCallback(e) {
    window.addEventListener("offline", e)
  },
  removeOfflineCallback(e) {
    window.removeEventListener("offline", e)
  },
  addChangeCallback(e) {
    var t;
    t = e, r.push(t),
      function() {
        if (!0 === s) return;
        let e = window.navigator.connection;
        null != e && (s = !0, e.addEventListener("change", a))
      }()
  },
  removeChangeCallback(e) {
    ! function(e) {
      let t = r.indexOf(e); - 1 !== t && (r.splice(t, 1), ! function() {
        if (!1 === s) return;
        let e = window.navigator.connection;
        null != e && 0 === r.length && null != e && (e.removeEventListener("change", a), s = !1)
      }())
    }(e)
  },
  getNetworkInformation: () => Promise.resolve(o()),
  isOnline() {
    let e = navigator.onLine;
    return void 0 === e || e
  }
}