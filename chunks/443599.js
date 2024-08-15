n.d(t, {
  m: function() {
return o;
  }
}), n(653041);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(185625),
  s = n(186023);
async function o(e, t, n, o) {
  let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
c = arguments.length > 6 ? arguments[6] : void 0,
d = (0, i.getInteractingModalContext)();
  try {
let _, E = u ? await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
  f = [];
let h = e => {
    f.push(e);
  },
  p = e => {
    _ = e, null == n || n();
  };
(0, i.openModal)(t => (0, r.jsx)(s.Z, {
  menu: E,
  reportType: e,
  modalProps: t,
  onNavigate: h,
  onSubmit: p,
  isAuthenticated: u,
  emailToken: c
}), {
  onCloseCallback: () => {
    (0, a.k8)(e, f, _), null == o || o(), l && (0, a.X)(e, null != _ ? _ : null);
  }
}, d);
  } catch {}
}