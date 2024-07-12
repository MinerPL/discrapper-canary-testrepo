var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(442837),
  o = n(692547),
  u = n(481060),
  _ = n(706454),
  l = n(930153),
  T = n(113434),
  E = n(524824),
  I = n(330039),
  c = n(260370);
t.Z = function(e) {
  let {
className: t,
color: n = o.Z.colors.WHITE,
quest: a,
isInventory: d
  } = e, R = (0, i.e7)([_.default], () => _.default.locale), {
percentComplete: m
  } = (0, T.Rf)(a), S = (0, T.Jf)(a), g = null != S ? S.completedRatio : m, N = null != S ? ''.concat(null == S ? void 0 : S.progress, '/').concat(null == S ? void 0 : S.target) : (0, l.T3)(R, g, {
roundingMode: 'floor'
  }), C = 100 * g, A = (0, E.r)(a);
  return A && !d ? (0, s.jsx)(I.Z, {}) : (0, s.jsxs)('div', {
className: r()(c.wrapper, t),
style: {
  color: n.css
},
children: [
  (0, s.jsxs)('div', {
    className: c.percentCompleteWrapper,
    children: [
      (0, s.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        className: c.percentCompleteLabel,
        color: 'none',
        children: N
      }),
      (0, s.jsx)('div', {
        className: c.percentCompleteLabelOffset,
        style: {
          width: ''.concat(100 - C, '%')
        }
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: c.progressBar,
    role: 'progressbar',
    'aria-valuenow': C,
    children: (0, s.jsx)('div', {
      className: c.progressBarFill,
      style: {
        width: ''.concat(C, '%')
      }
    })
  }),
  A && (0, s.jsx)(I.Z, {
    isInventory: d
  })
]
  });
};