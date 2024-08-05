let i;
var a = n(570140),
  s = n(519938),
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
  a.Z.wait(() => s.xv(t)), null === (e = E.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), i = null;
}

function f() {
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
let a = u.Z.hasLayers();
return !(a && u.Z.getLayers().includes(p.S9g.RTC_DEBUG)) && (!!a || e === t || !1);
  }() ? S() : (!t && S(), null != e && function(e) {
var t;
let n = d.Z.getChannel(e);
if (null == n || h.Z.isOpen(e))
  return !1;
a.Z.wait(() => s.bA(n.id, p.NYg.VIDEO, {
  channel: n
})), null === (t = E.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), i = e;
  }(e));
}
class C extends r.Z {
  _initialize() {
I.Z.addChangeListener(f), m.Z.addChangeListener(f), E.Z.addChangeListener(f), g.Z.addChangeListener(f), u.Z.addChangeListener(f), c.Z.addChangeListener(f), o.Z.addChangeListener(f), _.Z.addChangeListener(f), l.ZP.addChangeListener(f);
  }
  _terminate() {
I.Z.removeChangeListener(f), m.Z.removeChangeListener(f), E.Z.removeChangeListener(f), g.Z.removeChangeListener(f), u.Z.removeChangeListener(f), c.Z.removeChangeListener(f), o.Z.removeChangeListener(f), _.Z.removeChangeListener(f), l.ZP.removeChangeListener(f);
  }
}
t.Z = new C();