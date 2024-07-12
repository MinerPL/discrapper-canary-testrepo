n.d(t, {
  j: function() {
return i;
  }
});
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(338545),
  c = n(481060),
  d = n(855981),
  _ = n(55543),
  E = n(806519),
  f = n(426590);
(r = i || (i = {}))[r.UPDATE = 0] = 'UPDATE', r[r.NEW = 1] = 'NEW';
let h = {
  config: {
friction: 26,
tension: 700,
mass: 1
  },
  initial: {
scale: 1,
opacity: 1
  },
  from: {
scale: 0.6,
opacity: 0
  },
  enter: {
scale: 1,
opacity: 1
  },
  leave: {
scale: 0.6,
opacity: 0
  }
};
t.Z = o.memo(function(e) {
  let {
className: t,
disabled: n = !1,
innerClassName: r,
childClassName: i,
iconClassName: o,
icon: s,
children: p,
onClick: m,
isActive: I,
onMouseEnter: T,
onMouseLeave: g,
onFocus: S,
onBlur: A,
pulse: N,
sparkle: v,
notification: O,
'aria-label': R,
'aria-expanded': C,
'aria-haspopup': y,
'aria-controls': D
  } = e, L = (0, u.useTransition)(null != p, {
...h,
keys: e => e ? 'children' : 'icon'
  }), b = e => {
let {
  component: t
} = e;
return null != O ? (0, a.jsxs)('div', {
  className: f.buttonContent,
  children: [
    (0, a.jsx)(E.ZP, {
      className: f.iconMask,
      mask: E.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
      width: 24,
      height: 24,
      children: t
    }),
    (0, a.jsx)('span', {
      className: f.notificationDot
    })
  ]
}) : t;
  };
  return (0, a.jsxs)(c.Button, {
look: c.Button.Looks.BLANK,
size: c.Button.Sizes.NONE,
'aria-label': R,
'aria-expanded': C,
'aria-haspopup': y,
'aria-controls': D,
disabled: n,
className: l()(t, {
  [f.active]: I
}),
innerClassName: l()(f.button, r, {
  [f.pulseButton]: N
}),
onClick: m,
onMouseEnter: T,
onMouseLeave: g,
onFocus: S,
onBlur: A,
focusProps: {
  offset: {
    top: 4,
    bottom: 4
  }
},
children: [
  L((e, t, n) => {
    let {
      key: r
    } = n;
    return t ? (0, a.jsx)(u.animated.div, {
      style: e,
      className: l()(f.buttonWrapper, i),
      children: b({
        component: p
      })
    }, r) : null != s ? (0, a.jsx)(u.animated.div, {
      style: e,
      className: l()(f.buttonWrapper, i),
      children: b({
        component: (0, a.jsx)(s, {
          className: l()(f.icon, o, {
            [f.pulseIcon]: N
          }),
          color: 'currentColor'
        })
      })
    }, r) : void 0;
  }),
  v && (0, a.jsxs)('div', {
    className: f.sparkleContainer,
    children: [
      (0, a.jsx)(_.Z, {
        className: f.sparkleStar
      }),
      (0, a.jsx)(d.Z, {
        className: f.sparklePlus
      })
    ]
  })
]
  });
});