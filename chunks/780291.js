"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(606992),
  a = n(314897),
  l = n(944486),
  u = n(843693),
  _ = n(576125),
  d = n(112843),
  c = n(524484),
  E = n(981631),
  I = n(675654);

function T(e) {
  var t, n;
  let {
    editorHeight: i,
    textValue: _
  } = e, c = r.useRef(_), T = (0, o.Z)({
    editorHeight: i
  }), h = (0, d.Z)(), S = (0, s.e7)([u.ZP, a.default, l.Z], () => {
    var e;
    return u.ZP.isComboing(a.default.getId(), null !== (e = l.Z.getChannelId()) && void 0 !== e ? e : E.lds)
  }), f = null !== (t = null == T ? void 0 : T.left) && void 0 !== t ? t : 0, N = (null !== (n = null == T ? void 0 : T.top) && void 0 !== n ? n : 0) - 16, A = r.useMemo(() => .05 > Math.random(), [0 === _.length]);
  return r.useEffect(() => {
    0 !== _.length && _ !== c.current && S && (h.fire(f, N, A ? {
      sprite: I.vv
    } : null), c.current = _)
  }, [_, S, f, N, A, h]), null
}

function h(e) {
  return (0, i.jsx)(_.Z, {
    confettiLocation: c.Hn.CHAT_INPUT,
    children: (0, i.jsx)(T, {
      ...e
    })
  })
}