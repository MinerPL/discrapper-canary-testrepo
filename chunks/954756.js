s.d(t, {
  Z: function() {
return T;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(809206),
  o = s(852860),
  l = s(164946),
  c = s(350327),
  d = s(25990),
  _ = s(647699),
  E = s(155433),
  u = s(689938);

function T() {
  let e = (0, i.e7)([d.Z], () => d.Z.getIsSubmitDisabled()),
t = (0, i.e7)([d.Z], () => d.Z.getErrors()),
[s, T] = a.useState(!1),
I = a.useMemo(() => (null == t ? void 0 : t.message) != null ? null == t ? void 0 : t.message : Object.keys(null != t ? t : {}).length > 0 ? u.Z.Messages.USER_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [t]),
S = a.useCallback(async () => {
  var e, t, s;
  T(!0);
  let n = d.Z.getAllPending(),
    a = (0, l.ED)(n),
    i = (0, l.g9)(n),
    o = !0;
  if (Object.keys(a).length > 0) {
    let s = await (0, r.Mn)(a);
    o = o && null !== (t = null == s ? void 0 : s.ok) && void 0 !== t && t, (null == s ? void 0 : s.ok) ? (0, r.si)() : (null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.username) != null && (0, E.P)();
  }
  if (Object.keys(i).length > 0) {
    let e = await (0, c.Z)(i);
    o = o && null !== (s = null == e ? void 0 : e.ok) && void 0 !== s && s, (null == e ? void 0 : e.ok) ? (0, c.pG)() : (0, _.r)();
  }
  o && (0, r.b9)(), T(!1);
}, []),
N = a.useCallback(() => {
  (0, r.W3)();
}, []);
  return (0, n.jsx)(o.Z, {
submitting: s,
onSave: S,
onReset: N,
disabled: e,
errorMessage: null != I ? I : void 0
  });
}