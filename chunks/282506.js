let i;
var s = n(570140),
  a = n(519938),
  r = n(317770),
  l = n(317381),
  o = n(928518),
  c = n(199902),
  d = n(592125),
  u = n(819640),
  _ = n(131951),
  h = n(366050),
  E = n(19780),
  I = n(944486),
  m = n(914010),
  g = n(979651),
  p = n(981631),
  T = n(65154);

function S() {
  var e;
  let t = i;
  if (null == t || !h.Z.isOpen(t))
return !1;
  s.Z.wait(() => a.xv(t)), null === (e = E.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), i = null;
}

function C() {
  let e = E.Z.getChannelId(),
t = i === e;
  return function() {
let e = E.Z.getChannelId(),
  t = I.Z.getChannelId();
if (!_.Z.supports(T.AN.VIDEO) || o.Z.getWindowOpen(p.KJ3.CHANNEL_CALL_POPOUT))
  return !0;
let n = c.Z.getAllActiveStreams().length > 0,
  i = null != e && Object.values(g.Z.getVideoVoiceStatesForChannel(e)).some(e => {
    let {
      userId: t
    } = e;
    return !_.Z.isLocalVideoDisabled(t);
  });
if (!(i || n))
  return !0;
let s = u.Z.hasLayers();
return !(s && u.Z.getLayers().includes(p.S9g.RTC_DEBUG)) && (!!s || e === t || !1);
  }() ? S() : (!t && S(), null != e && function(e) {
var t;
let n = d.Z.getChannel(e);
if (null == n || h.Z.isOpen(e))
  return !1;
s.Z.wait(() => a.bA(n.id, p.NYg.VIDEO, {
  channel: n
})), null === (t = E.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), i = e;
  }(e));
}
class f extends r.Z {
  _initialize() {
I.Z.addChangeListener(C), m.Z.addChangeListener(C), E.Z.addChangeListener(C), g.Z.addChangeListener(C), u.Z.addChangeListener(C), c.Z.addChangeListener(C), o.Z.addChangeListener(C), _.Z.addChangeListener(C), l.ZP.addChangeListener(C);
  }
  _terminate() {
I.Z.removeChangeListener(C), m.Z.removeChangeListener(C), E.Z.removeChangeListener(C), g.Z.removeChangeListener(C), u.Z.removeChangeListener(C), c.Z.removeChangeListener(C), o.Z.removeChangeListener(C), _.Z.removeChangeListener(C), l.ZP.removeChangeListener(C);
  }
}
t.Z = new f();