t(47120);
var a = t(735250),
  r = t(470079),
  i = t(481060),
  s = t(467138),
  o = t(246364),
  l = t(983736),
  c = t(5056),
  d = t(565321),
  u = t(297619),
  m = t(456935),
  _ = t(446945),
  f = t(700833),
  C = t(592286),
  h = t(689938);
n.Z = function(e) {
  let {
guild: n,
submittedGuildJoinRequestsCount: t,
onFormFieldUpdate: x,
hideVerificationLevelField: p,
isClanContext: g,
formDescription: T,
onFieldsSave: E,
onDescriptionSave: I
  } = e, b = r.useRef(!1), [N, v] = r.useState(null), [y, S] = r.useState(e.formFields);
  r.useEffect(() => S(e.formFields), [e.formFields]);
  let A = r.useRef(e.formFields),
M = r.useMemo(() => y.filter(l.kT), [y]),
j = r.useMemo(() => y.filter(l._C), [y]),
R = j.length,
L = r.useMemo(() => y.length === C.nx, [y]),
O = r.useMemo(() => y.some(o.J), [y]),
Z = r.useMemo(() => y.some(e => !(0, o.J)(e)), [y]),
k = R > 0,
D = (0, s.e)(n.id) || g,
P = r.useCallback(() => {
  (0, i.showToast)((0, i.createToast)(h.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
}, []),
w = r.useCallback(async e => {
  if (!b.current) {
    b.current = !0, g && (e = e.filter(e => e.field_type !== o.QJ.TERMS));
    try {
      await E(n.id, e), x(), S(e), A.current = e;
    } catch (e) {
      throw S(A.current), e;
    } finally {
      null != N && v(null), b.current = !1;
    }
  }
}, [
  N,
  n.id,
  x,
  E,
  g
]),
F = r.useCallback(async e => {
  let n = e.field_type === o.QJ.TERMS ? [
    e,
    ...y
  ] : [
    ...y,
    e
  ];
  await w(n);
}, [
  y,
  w
]),
G = r.useCallback(async (e, n) => {
  if (y[e] === n)
    return;
  let t = [...y];
  t[e] = n, await w(t);
}, [
  y,
  w
]),
B = r.useCallback(async (e, n, t) => {
  let a = y.indexOf(e),
    r = [...y];
  if (null != n && n !== a && (r.splice(a, 1), r.splice(n, 0, e), S(r)), t)
    try {
      await w(r), null !== N && v(null);
    } catch (e) {
      P();
    }
  else
    N !== n && v(n);
}, [
  N,
  y,
  w,
  P
]),
U = r.useCallback(async e => {
  try {
    await w([
      ...y.slice(0, e),
      ...y.slice(e + 1)
    ]);
  } catch (e) {
    P();
  }
}, [
  y,
  w,
  P
]),
H = (0, a.jsxs)(a.Fragment, {
  children: [
    !p && (0, a.jsx)(m.ZP, {
      guild: n
    }),
    (0, a.jsx)(d.Z, {
      formDescription: T,
      guildId: n.id,
      onSave: I
    }),
    !O && !L && (0, a.jsx)(u.Z, {
      addFormField: F,
      guild: n
    }),
    M.map(e => (0, f.a0)({
      dropHoveredIndex: N,
      formField: e,
      guild: n,
      index: y.indexOf(e),
      isDragEnabled: !1,
      submittedGuildJoinRequestsCount: t,
      removeFormField: U,
      updateFormField: G,
      updateFormFieldOrder: B,
      canRemove: !0,
      actionsLocation: g ? 'side' : 'footer'
    }))
  ]
});
  return D ? (0, a.jsxs)(a.Fragment, {
children: [
  !g && H,
  !Z && (0, a.jsx)(c.Z, {
    addFormField: F,
    showManualApprovalWarning: !g && !k,
    guild: n,
    showHeader: !g
  }),
  j.map(e => (0, f.a0)({
    dropHoveredIndex: N,
    formField: e,
    guild: n,
    index: y.indexOf(e),
    isDragEnabled: k,
    submittedGuildJoinRequestsCount: t,
    removeFormField: U,
    updateFormField: G,
    updateFormFieldOrder: B,
    canRemove: !(g && j.length <= 1),
    actionsLocation: g ? 'side' : 'footer'
  })),
  Z && !L && (0, a.jsx)(_.Z, {
    addFormField: F,
    guild: n
  })
]
  }) : H;
};