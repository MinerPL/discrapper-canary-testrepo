n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(143927),
  l = n(532772),
  u = n(570220),
  c = n(28546),
  d = n(443603),
  _ = n(957825),
  E = n(689938),
  f = n(305489);
t.Z = i.memo(i.forwardRef(function(e, t) {
  let {
disabled: n,
type: a
  } = e, [h, p] = (0, c.Iu)(e => [
e.activeView,
e.pickerId
  ], o.Z), m = i.useContext(u.ZP), [I, T] = i.useState(!1), g = h === _.X1.STICKER, S = i.useCallback(() => {
(0, c.RO)(_.X1.STICKER, a);
  }, [a]);
  i.useEffect(() => {
let e = () => {
    requestAnimationFrame(() => {
      T(!0);
    });
  },
  t = () => {
    requestAnimationFrame(() => {
      T(!1);
    });
  };
return m.addListener('sticker-suggestions-shown', e), m.addListener('sticker-suggestions-hidden', t), () => {
  m.removeListener('sticker-suggestions-shown', e), m.removeListener('sticker-suggestions-hidden', t);
};
  }, [m]);
  let {
Component: A,
events: N,
play: v
  } = (0, l.z)();
  return n ? null : (0, r.jsx)('div', {
className: s()(_.CT, f.buttonContainer),
ref: t,
children: (0, r.jsx)(d.Z, {
  innerClassName: s()(f.button, f.stickerButton, {
    [f.stickerButtonTilted]: I && !g
  }),
  ...N,
  onClick: () => {
    S(), v();
  },
  isActive: g,
  'aria-label': E.Z.Messages.STICKER_BUTTON_LABEL,
  'aria-expanded': g,
  'aria-haspopup': 'dialog',
  'aria-controls': p,
  sparkle: !1,
  notification: null,
  children: (0, r.jsx)(A, {
    color: 'currentColor'
  })
})
  });
}));