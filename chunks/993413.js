s.d(n, {
  Z: function() {
return _;
  }
}), s(757143);
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(481060),
  a = s(403182),
  c = s(587446),
  o = s(504983),
  u = s(410728);

function d(e) {
  let {
errors: n
  } = e;
  return (0, l.jsx)(l.Fragment, {
children: n.map((e, n) => (0, l.jsx)(r.Text, {
  variant: 'text-xs/normal',
  color: 'text-danger',
  className: u.errorMessage,
  children: e.replace(/[0-9.,]+ ?kb/g, e => {
    let n = 1024 * parseInt(e, 10);
    return isNaN(n) ? e : (0, a.Ng)(n);
  })
}, n))
  });
}

function _(e) {
  let {
title: n,
titleIcon: s,
titleId: t,
description: a,
children: _,
className: m,
errors: E,
disabled: I = !1,
hideDivider: p = !1,
showBorder: N = !1,
borderType: T,
hasBackground: x = !1,
forcedDivider: S = !1,
showPremiumIcon: h = !1
  } = e;
  return (0, l.jsx)('div', {
className: i()(u.customizationSection, m, {
  [u.disabled]: I,
  [u.hideDivider]: p,
  [u.showBorder]: N,
  [u.withDivider]: S
}),
children: (0, l.jsxs)(o.Z, {
  className: u.customizationSectionBorder,
  backgroundClassName: u.customizationSectionBackground,
  isShown: N,
  type: T,
  hasBackground: x,
  children: [
    (0, l.jsxs)(r.FormTitle, {
      className: u.title,
      id: t,
      children: [
        n,
        h && (0, l.jsx)(c.Z, {}),
        s
      ]
    }),
    null != a ? (0, l.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: u.sectionDescription,
      children: a
    }) : null,
    _,
    null != E && (0, l.jsx)(d, {
      errors: E
    })
  ]
})
  });
}