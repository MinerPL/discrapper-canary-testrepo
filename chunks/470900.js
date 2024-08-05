n.d(t, {
  D: function() {
return T;
  },
  Z: function() {
return N;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(780384),
  r = n(481060),
  o = n(239091),
  c = n(37234),
  u = n(410030),
  d = n(44315),
  h = n(565138),
  p = n(769654),
  m = n(51144),
  _ = n(162267),
  f = n(228168),
  E = n(981631),
  g = n(689938),
  C = n(735393),
  I = n(401298);
let x = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);

function T(e) {
  let {
user: t,
guild: a,
nick: c,
theme: u,
onSelect: p
  } = e, _ = t.hasAvatarForGuild(a.id);
  return (0, i.jsxs)(r.Clickable, {
focusProps: {
  offset: {
    right: 8
  }
},
className: C.listRow,
onClick: p,
onContextMenu: e => {
  (0, o.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('96427'),
      n.e('23755'),
      n.e('89350'),
      n.e('11751'),
      n.e('29549'),
      n.e('33053'),
      n.e('31605'),
      n.e('50654'),
      n.e('65840'),
      n.e('7654'),
      n.e('90508'),
      n.e('67847'),
      n.e('44156'),
      n.e('59743'),
      n.e('71700'),
      n.e('85552'),
      n.e('51760'),
      n.e('58227'),
      n.e('1187'),
      n.e('10926'),
      n.e('22036'),
      n.e('92557'),
      n.e('64679'),
      n.e('89622'),
      n.e('84739'),
      n.e('33213'),
      n.e('56845')
    ]).then(n.bind(n, 545135));
    return t => (0, i.jsx)(e, {
      ...t,
      guild: a
    });
  });
},
children: [
  (0, i.jsx)(h.Z, {
    tabIndex: -1,
    guild: a,
    showBadge: !0,
    className: s()(C.listAvatar, null == a.icon ? I.guildAvatarWithoutIcon : null),
    badgeStrokeColor: (0, d.Lq)((0, l.wj)(u) ? E.Ilk.PRIMARY_600 : E.Ilk.WHITE_500),
    badgeTooltipColor: r.TooltipColors.PRIMARY,
    badgeTooltipDelay: f.vB,
    size: h.Z.Sizes.MEDIUM,
    active: !0
  }),
  (0, i.jsxs)('div', {
    className: C.listRowContent,
    children: [
      (0, i.jsx)('div', {
        className: C.listName,
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

function N(e) {
  let {
user: t,
onClose: n
  } = e, {
mutualGuilds: a
  } = (0, _.Z)(t.id), s = (0, u.ZP)(), l = e => {
(0, p.X)(e), n(), (0, c.xf)();
  };
  return (0, i.jsx)(r.ScrollerThin, {
className: C.listScroller,
fade: !0,
children: null == a ? (0, i.jsx)('div', {
  className: C.empty,
  children: (0, i.jsx)(r.Spinner, {})
}) : 0 === a.length ? (0, i.jsxs)('div', {
  className: C.empty,
  children: [
    (0, i.jsx)('div', {
      className: C.emptyIconGuilds
    }),
    (0, i.jsx)('div', {
      className: C.emptyText,
      children: g.Z.Messages.NO_MUTUAL_GUILDS
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
    theme: s,
    onSelect: () => l(n.id)
  }, n.id);
})
  });
}