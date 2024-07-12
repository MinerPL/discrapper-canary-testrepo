let r, i;
n.d(t, {
  o: function() {
return p;
  }
}), n(47120);
var a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(846519),
  c = n(481060),
  d = n(626135),
  _ = n(572004),
  E = n(981631),
  f = n(689938),
  h = n(732021);

function p(e) {
  var t;
  let {
className: n,
copyValue: s,
copyMetaData: p,
copyTooltip: m,
copyTooltipDelay: I = 500,
children: T,
disableCopy: g,
showCopyIcon: S,
'aria-label': A,
onCopy: N
  } = e, [v, O] = o.useState(0), [R, C] = o.useState(!1), [y, D] = o.useState(!1);
  if (o.useEffect(() => (r = new u.V7(), i = new u.V7(), function() {
  r.stop(), i.stop();
}), []), !_.wS || g)
return (0, a.jsx)(a.Fragment, {
  children: T
});
  let L = [
  f.Z.Messages.COPY_SUCCESS_1,
  f.Z.Messages.COPY_SUCCESS_2,
  f.Z.Messages.COPY_SUCCESS_3,
  f.Z.Messages.COPY_SUCCESS_4,
  f.Z.Messages.COPY_SUCCESS_5,
  f.Z.Messages.COPY_SUCCESS_6,
  f.Z.Messages.COPY_SUCCESS_7,
  f.Z.Messages.COPY_SUCCESS_8,
  f.Z.Messages.COPY_SUCCESS_9,
  f.Z.Messages.COPY_SUCCESS_10,
  f.Z.Messages.COPY_SUCCESS_11
],
b = Math.min(Math.max(v - 1, 0), L.length - 1),
M = null !== (t = L[b]) && void 0 !== t ? t : L[0],
P = v >= L.length - 1,
U = P ? c.TooltipColors.RED : c.TooltipColors.GREEN,
w = R ? U : c.TooltipColors.PRIMARY,
x = () => {
  r.stop(), D(!1);
},
G = e => {
  null == N || N(), (0, _.JG)(s), d.default.track(E.rMx.TEXT_COPIED, {
    type: p
  }), 'function' == typeof e && e(), !y && O(v + 1), D(!0), C(!0), r.start(1000, () => D(!1)), i.start(2000, () => O(0));
};
  return (0, a.jsx)(c.Tooltip, {
delay: I,
color: w,
forceOpen: y,
text: R ? (0, a.jsx)(c.Shaker, {
  isShaking: P,
  children: M
}) : m,
onAnimationRest: (e, t) => {
  !y && R && t.phase === E.UkZ.LEAVE && C(!1);
},
'aria-label': m,
children: e => {
  let {
    onClick: t,
    onMouseEnter: r,
    ...i
  } = e;
  return (0, a.jsx)(c.Clickable, {
    ...i,
    className: h.clickTarget,
    'aria-label': A,
    onMouseEnter: () => {
      R ? x() : 'function' == typeof r && r();
    },
    onClick: () => {
      G(t);
    },
    children: (0, a.jsxs)('div', {
      className: l()(n, h.copiableWrapper),
      children: [
        (0, a.jsx)('div', {
          className: h.childWrapper,
          children: T
        }),
        S ? (0, a.jsx)('div', {
          className: h.__invalid_copyIconWrapper,
          children: (0, a.jsx)(c.CopyIcon, {
            size: 'sm',
            color: 'currentColor',
            className: h.copyIcon
          })
        }) : null
      ]
    })
  });
}
  });
}