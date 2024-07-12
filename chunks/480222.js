var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(442837),
  l = n(481060),
  o = n(607070),
  c = n(207796),
  d = n(420212),
  u = n(689938),
  _ = n(576513);
let h = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};
t.Z = function(e) {
  let {
children: t,
onClose: n
  } = e, E = s.useCallback(() => {
(0, c.fH)(c.v0.DISCOVERY), null == n || n();
  }, [n]);
  s.useEffect(() => {
let e = e => {
  e.key === d.vn.ESCAPE && E();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [E]);
  let I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
m = (0, a.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  config: h,
  delay: 500,
  immediate: I
});
  return (0, i.jsxs)('div', {
className: _.container,
children: [
  (0, i.jsx)('div', {
    className: _.saveContainer,
    children: (0, i.jsx)(l.Button, {
      onClick: E,
      look: l.ButtonLooks.OUTLINED,
      color: l.ButtonColors.PRIMARY,
      children: u.Z.Messages.SAVE
    })
  }),
  (0, i.jsx)(a.animated.div, {
    style: {
      opacity: m.opacity,
      transform: m.opacity.to([
        0,
        1
      ], [
        40,
        0
      ]).to(e => 'translateY('.concat(e, 'px)'))
    },
    className: _.contentWrapper,
    children: (0, i.jsx)(l.Scroller, {
      fade: !0,
      className: _.content,
      children: t
    })
  })
]
  });
};