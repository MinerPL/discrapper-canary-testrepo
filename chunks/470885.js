"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("913144"),
  l = n("600965"),
  i = n("316272"),
  r = n("191225"),
  o = n("292687"),
  u = n("373469"),
  d = n("42203"),
  c = n("778588"),
  f = n("42887"),
  E = n("449501"),
  h = n("945956"),
  _ = n("18494"),
  C = n("162771"),
  S = n("800762"),
  I = n("49111"),
  m = n("353927");

function p() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = h.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function T() {
  let e = h.default.getChannelId(),
    t = a === e;
  return function() {
    let e = h.default.getChannelId(),
      t = _.default.getChannelId(),
      n = f.default.supports(m.Features.VIDEO);
    if (!n) return !0;
    let a = o.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
    if (a) return !0;
    let s = u.default.getAllActiveStreams().length > 0,
      l = null != e && Object.values(S.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(l || s)) return !0;
    let i = c.default.hasLayers(),
      r = i && c.default.getLayers().includes(I.Layers.RTC_DEBUG);
    if (r) return !1;
    if (i) return !0;
    let d = e === t;
    return !!d || !1
  }() ? p() : (!t && p(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(n.id, I.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = h.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class g extends i.default {
  _initialize() {
    _.default.addChangeListener(T), C.default.addChangeListener(T), h.default.addChangeListener(T), S.default.addChangeListener(T), c.default.addChangeListener(T), u.default.addChangeListener(T), o.default.addChangeListener(T), f.default.addChangeListener(T), r.default.addChangeListener(T)
  }
  _terminate() {
    _.default.removeChangeListener(T), C.default.removeChangeListener(T), h.default.removeChangeListener(T), S.default.removeChangeListener(T), c.default.removeChangeListener(T), u.default.removeChangeListener(T), o.default.removeChangeListener(T), f.default.removeChangeListener(T), r.default.removeChangeListener(T)
  }
}
var A = new g