t.d(s, {
  Z: function() {
return I;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(809206),
  o = t(852860),
  l = t(164946),
  c = t(350327),
  d = t(25990),
  _ = t(647699),
  E = t(155433),
  u = t(689938);

function I() {
  let e = (0, i.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
s = (0, i.e7)([d.Z], () => d.Z.getErrors()),
[t, I] = a.useState(!1),
T = a.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? u.Z.Messages.USER_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]),
S = a.useCallback(async () => {
  var e, s, t;
  I(!0);
  let n = d.Z.getAllPending(),
    a = (0, l.ED)(n),
    i = (0, l.g9)(n),
    o = !0;
  if (Object.keys(a).length > 0) {
    let t = await (0, r.Mn)(a);
    o = o && null !== (s = null == t ? void 0 : t.ok) && void 0 !== s && s, (null == t ? void 0 : t.ok) ? (0, r.si)() : (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null && (0, E.P)();
  }
  if (Object.keys(i).length > 0) {
    let e = await (0, c.Z)(i);
    o = o && null !== (t = null == e ? void 0 : e.ok) && void 0 !== t && t, (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, _.r)();
  }
  o && (0, r.b9)(), I(!1);
}, []),
N = a.useCallback(() => {
  (0, r.W3)();
}, []);
  return (0, n.jsx)(o.Z, {
submitting: t,
onSave: S,
onReset: N,
disabled: e,
errorMessage: null != T ? T : void 0
  });
}