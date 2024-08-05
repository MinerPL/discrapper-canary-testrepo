n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(748780),
  o = n(399606),
  c = n(481060),
  u = n(607070),
  d = n(933557),
  h = n(471445),
  p = n(592125),
  m = n(271383),
  _ = n(526120),
  f = n(734893),
  E = n(655359),
  g = n(931261),
  C = n(305762),
  I = n(689938),
  x = n(987531);

function T(e) {
  let {
action: t
  } = e, n = (0, o.e7)([p.Z], () => p.Z.getChannel(t.channelId)), a = (0, d.ZP)(n, !0);
  return null == n ? (0, i.jsx)(c.Text, {
variant: 'text-xxs/normal',
color: 'header-secondary',
children: I.Z.Messages.IN_CHANNEL.format({
  channelName: I.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
})
  }) : (0, i.jsx)(c.Text, {
variant: 'text-xxs/normal',
color: 'header-secondary',
children: I.Z.Messages.IN_CHANNEL.format({
  channelName: a
})
  });
}

function N(e) {
  var t;
  let {
channelId: n,
emojiId: a,
emojiName: s
  } = e, l = (0, o.e7)([p.Z], () => p.Z.getChannel(n));
  if (null == l)
return null;
  let r = null !== (t = (0, h.KS)(l)) && void 0 !== t ? t : c.TextIcon;
  return (0, i.jsx)(C.Z, {
emojiId: a,
emojiName: s,
size: C.R.MEDIUM,
defaultComponent: (0, i.jsx)(r, {
  className: x.channelIcon
})
  });
}

function v(e) {
  var t, n, s, d;
  let {
guildId: h,
channel: p,
className: m
  } = e, {
channelAction: g,
completed: C
  } = (0, E.P3)(h, p), v = (0, E.K_)(h, null == g ? void 0 : g.channelId), S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), Z = (null == g ? void 0 : g.actionType) === f.oi.VIEW, A = (0, c.useToken)(c.tokens.colors.WHITE), [M, b] = a.useState(!1), [R] = a.useState(new r.Z.Value(0)), [j] = a.useState(new r.Z.Value(0));
  a.useEffect(() => {
C ? r.Z.timing(R, {
  toValue: 0,
  duration: S ? 1 : 350,
  easing: r.Z.Easing.quad,
  delay: Z ? 0 : 500
}).start(() => b(!0)) : r.Z.timing(R, {
  toValue: 1,
  duration: S ? 1 : 350,
  easing: r.Z.Easing.quad,
  delay: 400
}).start();
  }, [
C,
R,
Z,
S
  ]), a.useEffect(() => {
C && M && r.Z.timing(j, {
  toValue: 1,
  duration: S ? 0 : 350,
  easing: r.Z.Easing.quad,
  delay: 400
}).start();
  }, [
C,
j,
M,
S
  ]);
  let L = a.useCallback(() => {
null != v && (0, _.gp)(h, v.channelId);
  }, [
h,
v
  ]);
  return null == g || Z && !M ? null : (0, i.jsx)('div', {
className: l()(x.container, m),
children: M && null != v ? (0, i.jsx)(r.Z.div, {
  style: {
    marginBottom: j.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        -60,
        0
      ]
    })
  },
  children: (0, i.jsxs)(c.Clickable, {
    className: l()(x.banner, x.clickable),
    onClick: L,
    children: [
      (0, i.jsx)(N, {
        channelId: v.channelId,
        emojiId: null === (t = v.emoji) || void 0 === t ? void 0 : t.id,
        emojiName: null == v ? void 0 : null === (n = v.emoji) || void 0 === n ? void 0 : n.name
      }),
      (0, i.jsxs)('div', {
        className: x.text,
        children: [
          (0, i.jsx)(c.Text, {
            variant: 'text-md/semibold',
            color: 'header-primary',
            children: I.Z.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
              step: v.title
            })
          }),
          (0, i.jsx)(T, {
            action: v
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: x.iconCircle,
        children: (0, i.jsx)(c.ArrowSmallRightIcon, {
          size: 'xs',
          color: A.hex(),
          className: x.nextIcon
        })
      })
    ]
  })
}) : (0, i.jsxs)(r.Z.div, {
  className: x.banner,
  style: {
    marginBottom: R.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        -60,
        0
      ]
    })
  },
  children: [
    (0, i.jsx)(N, {
      channelId: g.channelId,
      emojiId: null === (s = g.emoji) || void 0 === s ? void 0 : s.id,
      emojiName: null == g ? void 0 : null === (d = g.emoji) || void 0 === d ? void 0 : d.name
    }),
    (0, i.jsxs)('div', {
      className: x.text,
      children: [
        (0, i.jsx)(c.Text, {
          variant: 'text-md/semibold',
          color: 'header-primary',
          children: g.title
        }),
        (0, i.jsx)(c.Text, {
          variant: 'text-xxs/normal',
          color: 'text-muted',
          children: I.Z.Messages.MEMBER_ACTION_CHAT
        })
      ]
    }),
    C ? (0, i.jsx)(c.CircleCheckIcon, {
      size: 'custom',
      color: 'currentColor',
      className: x.completed,
      secondaryColor: A.hex(),
      width: 20,
      height: 20
    }) : null
  ]
})
  });
}

function S(e) {
  let {
guildId: t,
channel: n,
className: a
  } = e, s = (0, g.g)(t), l = (0, o.e7)([m.ZP], () => {
var e;
return (null === (e = m.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
  });
  return (0, E.PE)(t) || l || !s ? null : (0, i.jsx)(v, {
guildId: t,
channel: n,
className: a
  });
}