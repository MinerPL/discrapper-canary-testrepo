var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(481060),
  l = n(425493),
  o = n(207796),
  c = n(420212),
  d = n(689938),
  u = n(352385);
let _ = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};
t.Z = function(e) {
  let {
children: t,
hasChanges: n,
onClose: E,
onSave: h,
onReset: m
  } = e, I = a.useCallback(() => {
(0, o.fH)(o.v0.DISCOVERY), null == E || E();
  }, [E]), g = a.useCallback(() => {
null == h || h(), null == I || I();
  }, [
h,
I
  ]), p = a.useCallback(() => {
null == m || m();
  }, [m]);
  a.useEffect(() => {
let e = e => {
  e.key === c.vn.ESCAPE && !n && I();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [
I,
n
  ]);
  let T = (0, r.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  config: _,
  delay: 500
}),
S = (0, r.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: n ? 1 : 0
  },
  config: _,
  delay: 500
});
  return (0, i.jsxs)('div', {
className: u.container,
children: [
  (0, i.jsx)('div', {
    className: u.saveContainer,
    children: (0, i.jsx)(l.Z, {
      className: u.closeButton,
      closeAction: I,
      keybind: 'ESC'
    })
  }),
  (0, i.jsxs)(s.animated.div, {
    style: {
      opacity: T.opacity,
      transform: T.opacity.to([
        0,
        1
      ], [
        40,
        0
      ]).to(e => 'translateY('.concat(e, 'px)'))
    },
    className: u.contentWrapper,
    children: [
      (0, i.jsx)(r.Scroller, {
        fade: !0,
        className: u.content,
        children: t
      }),
      (0, i.jsxs)(s.animated.div, {
        style: {
          opacity: S.opacity,
          transform: S.opacity.to([
            0,
            1
          ], [
            40,
            0
          ]).to(e => 'translateY('.concat(e, 'px)')),
          display: S.opacity.to([
            0,
            1
          ], [
            0,
            40
          ]).to(e => e > 0 ? 'flex' : 'none')
        },
        className: u.saveToolbar,
        children: [
          (0, i.jsx)(r.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: u.saveToolbarText,
            children: d.Z.Messages.CLAN_DISCOVERY_UNSAVED_CHANGES
          }),
          (0, i.jsxs)('div', {
            className: u.saveToolbarActions,
            children: [
              (0, i.jsx)(r.Button, {
                onClick: p,
                size: r.ButtonSizes.SMALL,
                look: r.ButtonLooks.BLANK,
                color: r.ButtonColors.WHITE,
                children: d.Z.Messages.RESET
              }),
              (0, i.jsx)(r.Button, {
                onClick: g,
                size: r.ButtonSizes.SMALL,
                look: r.ButtonLooks.FILLED,
                color: r.ButtonColors.BRAND,
                children: d.Z.Messages.SAVE_CHANGES
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
};