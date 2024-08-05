n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(143927),
  l = n(442837),
  u = n(114101),
  c = n(481060),
  d = n(28546),
  _ = n(581883),
  E = n(459273),
  f = n(443603),
  h = n(981631),
  p = n(957825),
  m = n(689938),
  I = n(497471);
t.Z = i.memo(i.forwardRef(function(e, t) {
  let {
disabled: n,
type: a
  } = e, [T, g] = i.useState(!1), S = (0, l.e7)([_.Z], () => {
var e, t;
return T && Object.values(null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
  }), [A, N, v] = (0, d.Iu)(e => [
e.activeView,
e.activeViewType,
e.pickerId
  ], o.Z), O = i.useRef(0), R = i.useCallback(() => {
g(!0), clearTimeout(O.current), O.current = setTimeout(() => {
  g(!1), O.current = 0;
}, 2000);
  }, []);
  (0, E.yp)({
event: h.CkL.FAVORITE_GIF,
handler: R
  });
  let C = i.useCallback(() => {
  (0, d.RO)(p.X1.GIF, a);
}, [a]),
{
  Component: y,
  events: D,
  play: L
} = (0, u.V)();
  if (n)
return null;
  let b = A === p.X1.GIF && N === a;
  return (0, r.jsx)(c.Tooltip, {
text: S ? m.Z.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
forceOpen: !0,
children: e => (0, r.jsx)('div', {
  ref: t,
  className: s()(p.CT, I.buttonContainer),
  ...e,
  children: (0, r.jsx)(f.Z, {
    innerClassName: I.button,
    onMouseEnter: D.onMouseEnter,
    onMouseLeave: D.onMouseLeave,
    onClick: () => {
      C(), L();
    },
    isActive: b,
    pulse: T,
    'aria-label': m.Z.Messages.GIF_BUTTON_LABEL,
    'aria-expanded': b,
    'aria-haspopup': 'dialog',
    'aria-controls': v,
    children: (0, r.jsx)(y, {
      color: 'currentColor'
    })
  })
})
  });
}));