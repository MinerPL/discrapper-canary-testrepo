n.d(t, {
  D: function() {
return T;
  },
  Z: function() {
return v;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(780384),
  r = n(481060),
  o = n(239091),
  c = n(37234),
  d = n(410030),
  u = n(44315),
  h = n(769654),
  p = n(346656),
  m = n(51144),
  _ = n(162267),
  f = n(228168),
  E = n(981631),
  C = n(689938),
  g = n(735393),
  I = n(401298);
let x = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function T(e) {
  let {
user: t,
guild: a,
nick: c,
theme: d,
onSelect: h
  } = e, _ = t.hasAvatarForGuild(a.id);
  return (0, i.jsxs)(r.Clickable, {
focusProps: {
  offset: {
    right: 8
  }
},
className: g.listRow,
onClick: h,
onContextMenu: e => {
  (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('96427'),
      n.e('33053'),
      n.e('50654'),
      n.e('7654'),
      n.e('73331'),
      n.e('44156'),
      n.e('71700'),
      n.e('85552'),
      n.e('58227'),
      n.e('10926'),
      n.e('22036'),
      n.e('55400'),
      n.e('33213'),
      n.e('24273')
    ]).then(n.bind(n, 545135));
    return t => (0, i.jsx)(e, {
      ...t,
      guild: a
    });
  });
},
children: [
  (0, i.jsx)(p.Z, {
    tabIndex: -1,
    guild: a,
    showBadge: !0,
    className: l()(g.listAvatar, null == a.icon ? I.guildAvatarWithoutIcon : null),
    badgeStrokeColor: (0, u.Lq)((0, s.wj)(d) ? E.Ilk.PRIMARY_600 : E.Ilk.WHITE_500),
    badgeTooltipColor: r.TooltipColors.PRIMARY,
    badgeTooltipDelay: f.vB,
    size: p.Z.Sizes.MEDIUM,
    active: !0
  }),
  (0, i.jsxs)('div', {
    className: g.listRowContent,
    children: [
      (0, i.jsx)('div', {
        className: g.listName,
        children: a.toString()
      }),
      _ || null != c ? (0, i.jsxs)('div', {
        className: I.guildNick,
        children: [
          _ && (0, i.jsx)(r.Avatar, {
            src: t.getAvatarURL(a.id, x),
            size: r.AvatarSizes.SIZE_16,
            className: I.guildAvatar,
            'aria-hidden': !0
          }),
          null != c ? c : m.ZP.getName(t)
        ]
      }) : null
    ]
  })
]
  });
}

function v(e) {
  let {
user: t,
onClose: n
  } = e, {
mutualGuilds: a
  } = (0, _.Z)(t.id), l = (0, d.ZP)(), s = e => {
(0, h.X)(e), n(), (0, c.xf)();
  };
  return (0, i.jsx)(r.ScrollerThin, {
className: g.listScroller,
fade: !0,
children: null == a ? (0, i.jsx)('div', {
  className: g.empty,
  children: (0, i.jsx)(r.Spinner, {})
}) : 0 === a.length ? (0, i.jsxs)('div', {
  className: g.empty,
  children: [
    (0, i.jsx)('div', {
      className: g.emptyIconGuilds
    }),
    (0, i.jsx)('div', {
      className: g.emptyText,
      children: C.Z.Messages.NO_MUTUAL_GUILDS
    })
  ]
}) : a.map(e => {
  let {
    guild: n,
    nick: a
  } = e;
  return (0, i.jsx)(T, {
    user: t,
    guild: n,
    nick: a,
    theme: l,
    onSelect: () => s(n.id)
  }, n.id);
})
  });
}