n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(923928),
  l = n(468026),
  u = n(503856),
  c = n(209590),
  d = n(689938);
let _ = () => {
o.Z.clearSuppressWarning();
  },
  E = () => {
o.Z.clearSuppressWarning(!0);
  };
t.Z = () => {
  let e = i.useRef(null);

  function t() {
null !== e.current && ((0, s.closeModal)(e.current), e.current = null);
  }
  let [o, f] = (0, a.Wu)([c.Z], () => [
c.Z.shouldShowWarning(),
c.Z.isAFKChannel()
  ], []), h = i.useCallback(() => {
let t = '',
  n = '';
f ? (t = d.Z.Messages.SUPPRESSED_AFK_TITLE, n = d.Z.Messages.SUPPRESSED_AFK_BODY) : (t = d.Z.Messages.SUPPRESSED, n = d.Z.Messages.SUPPRESSED_PERMISSION_BODY), e.current = (0, s.openModal)(e => (0, r.jsx)(l.default, {
  title: t,
  body: n,
  onConfirm: _,
  confirmText: d.Z.Messages.OKAY,
  secondaryConfirmText: d.Z.Messages.DONT_SHOW_AGAIN,
  onConfirmSecondary: E,
  ...e
}));
  }, [f]), p = i.useCallback(() => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('41281').then(n.bind(n, 669732));
  return t => (0, r.jsx)(e, {
    ...t,
    showHideSuppressWarning: !0
  });
}).then(t => {
  null != t && (e.current = t);
});
  }, []);
  return i.useEffect(() => (o && (0, u.p)() ? p() : o ? h() : t(), () => {
t();
  }), [
o,
h,
p
  ]), null;
};