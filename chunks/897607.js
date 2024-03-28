"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("392711"),
  l = n.n(s),
  i = n("481060"),
  r = n("463395"),
  o = n("820486"),
  u = n("131951"),
  d = n("65154");
let c = new Set(["DisplayPort"]),
  f = !1;

function E() {
  let e;
  if (f) return;
  let t = u.default.getInputDeviceId(),
    s = u.default.getOutputDeviceId();
  if (o.default.getState().neverShowModal || l().isEmpty(o.default.lastDeviceConnected)) return;
  let E = (0, o.extractDisplayName)(u.default.getInputDevices()[t]),
    h = (0, o.extractDisplayName)(u.default.getOutputDevices()[s]);
  if (l().some(o.default.lastDeviceConnected, e => c.has(e.displayName) || e.displayName === E || e.displayName === h)) return;
  let _ = l().some(o.default.lastDeviceConnected, e => r.default.isCertified(o.default.inputDevices[e.displayName]) || r.default.isCertified(o.default.outputDevices[e.displayName]));
  if ((t === d.DEFAULT_DEVICE_ID && o.default.lastInputSystemDevice.justChanged || s === d.DEFAULT_DEVICE_ID && o.default.lastOutputSystemDevice.justChanged) && !_) return;
  let C = l().first(Object.keys(o.default.lastDeviceConnected)),
    m = null != C && "" !== C ? o.default.lastDeviceConnected[C] : null;
  null != m && (o.default.initialized && null != C && (r.default.isCertified(o.default.inputDevices[C]) ? e = r.default.getCertifiedDevice(o.default.inputDevices[C]) : r.default.isCertified(o.default.outputDevices[C]) && (e = r.default.getCertifiedDevice(o.default.outputDevices[C]))), f = !0, (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("83536")]).then(n.bind(n, "43991"));
    return n => {
      let {
        transitionState: s,
        onClose: l
      } = n;
      return (0, a.jsx)(t, {
        device: m,
        certifiedDeviceMetadata: e,
        transitionState: s,
        onClose: () => (f = !1, l())
      })
    }
  }))
}
t.default = {
  init() {
    o.default.addChangeListener(E)
  }
}