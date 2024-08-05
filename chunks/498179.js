n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(283595),
  l = n(55563),
  o = n(780570),
  c = n(701560),
  u = n(785547);

function d(e) {
  let {
application: t,
fullWidth: n = !1,
size: d = a.Button.Sizes.LARGE,
color: _,
customDisabledColor: E,
hideNotLaunchable: I,
tooltipPosition: m,
onClick: T,
className: h,
source: N,
hover: C,
innerClassName: f
  } = e, p = {
fullWidth: n,
size: d,
color: _,
customDisabledColor: E,
tooltipPosition: m,
onClick: T,
className: h,
hover: C,
innerClassName: f
  }, g = (0, s.e7)([r.Z], () => r.Z.getActiveLibraryApplication(t.id)), S = null != g ? g.sku.id : null, A = null != S ? S : t.primarySkuId, R = (0, s.e7)([l.Z], () => null != A && !l.Z.didFetchingSkuFail(A));
  return null != g && (0, o.Je)(g) ? (0, i.jsx)(u.Z, {
...p,
libraryApplication: g,
source: N
  }) : R ? (0, i.jsx)('div', {
children: 'deprecated!'
  }) : (0, i.jsx)(c.Z, {
...p,
hideNotLaunchable: I,
applicationId: t.id
  });
}