n(653041);
var r = n(981631);
let i = [],
  a = !1;

function o() {
  let e = window.navigator.connection;
  return null == e ? {
type: r.IWh.UNKNOWN,
effectiveSpeed: r.IyS.UNKNOWN
  } : {
type: null != e.type ? e.type : r.IWh.UNKNOWN,
effectiveSpeed: e.effectiveType
  };
}

function s() {
  let e = o();
  i.forEach(t => t(e));
}
t.Z = {
  addOnlineCallback(e) {
window.addEventListener('online', e);
  },
  removeOnlineCallback(e) {
window.removeEventListener('online', e);
  },
  addOfflineCallback(e) {
window.addEventListener('offline', e);
  },
  removeOfflineCallback(e) {
window.removeEventListener('offline', e);
  },
  addChangeCallback(e) {
var t;
t = e, i.push(t),
  function() {
    if (!0 === a)
      return;
    let e = window.navigator.connection;
    null != e && (a = !0, e.addEventListener('change', s));
  }();
  },
  removeChangeCallback(e) {
! function(e) {
  let t = i.indexOf(e); -
  1 !== t && (i.splice(t, 1), ! function() {
    if (!1 === a)
      return;
    let e = window.navigator.connection;
    null != e && 0 === i.length && null != e && (e.removeEventListener('change', s), a = !1);
  }());
}(e);
  },
  getNetworkInformation: () => Promise.resolve(o()),
  isOnline() {
let e = navigator.onLine;
return void 0 === e || e;
  }
};