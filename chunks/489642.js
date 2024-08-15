n.d(t, {
  Z: function() {
return N;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(873546),
  l = n(481060),
  u = n(648996),
  c = n(51144),
  d = n(785717),
  _ = n(659101),
  E = n(689938),
  f = n(235302),
  h = n(390965),
  p = n(752266),
  m = n(60541),
  I = n(230797),
  T = n(612830),
  g = n(293173);
let S = [
  n(198087),
  h,
  I,
  m,
  T,
  p,
  g
];

function A(e) {
  let {
userId: t
  } = e, [n, a] = i.useState(!1);
  return i.useLayoutEffect(() => {
!n && a(!0);
  }, [n]), (0, r.jsx)('div', {
className: f.wumpusWrapper,
children: (0, r.jsxs)('div', {
  className: s()(f.wumpus, {
    [f.wumpusShown]: n
  }),
  children: [
    (0, r.jsx)('img', {
      className: f.wumpusImage,
      alt: E.Z.Messages.IMG_ALT_ICON.format({
        name: E.Z.Messages.WUMPUS
      }),
      src: S[parseInt(t.slice(-6), 10) % S.length]
    }),
    (0, r.jsxs)(l.Text, {
      variant: 'text-sm/normal',
      children: [
        E.Z.Messages.USER_POPOUT_WUMPUS_TOOLTIP,
        '???'
      ]
    })
  ]
})
  });
}

function N(e) {
  let {
user: t,
setNote: n,
canDM: i,
onClose: a
  } = e, {
trackUserProfileAction: s
  } = (0, d.KZ)(), l = i && (0, c.EO)(t) && !t.bot;
  return (0, r.jsxs)(_.Z, {
className: f.section,
lastSection: !0,
children: [
  l && i ? (0, r.jsx)(A, {
    userId: t.id
  }) : null,
  i ? (0, r.jsx)(u.Z, {
    className: f.messageInputContainer,
    inputClassName: f.messageInput,
    user: t,
    autoFocus: !o.tq && !n,
    onSend: () => {
      s({
        action: 'SEND_DIRECT_MESSAGE'
      }), null == a || a();
    }
  }) : null
]
  });
}