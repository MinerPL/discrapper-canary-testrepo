let i;
n.d(t, {
  Z: function() {
return s;
  }
});
var a = n(145597);

function s(e, t) {
  if (__OVERLAY__) {
let e = t.getGame(),
  n = (0, a.QF)();
return null == e || null == n ? null : (null == i ? void 0 : i.id) === e.id && (null == i ? void 0 : i.pid) === n ? i : i = {
  id: e.id,
  pid: n,
  pidPath: [],
  nativeProcessObserverId: 0,
  hidden: !1,
  elevated: !1,
  name: e.name,
  lastFocused: 0,
  exePath: '',
  exeName: '',
  cmdLine: '',
  processName: '',
  distributor: null,
  windowHandle: null,
  fullscreenType: 0
};
  }
  return e.getVisibleGame();
}