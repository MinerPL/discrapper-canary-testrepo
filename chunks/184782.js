n.r(l), n(653041);
var a = n(735250),
  i = n(470079),
  s = n(442837),
  o = n(481060),
  t = n(596454),
  c = n(471445),
  r = n(339085),
  d = n(633302),
  u = n(703656),
  m = n(592125),
  h = n(430824),
  j = n(496675),
  x = n(940627),
  E = n(346656),
  _ = n(153124),
  p = n(259580),
  N = n(806519),
  C = n(626135),
  g = n(524329),
  Z = n(995532),
  k = n(845606),
  f = n(981631),
  I = n(231338),
  S = n(689938),
  v = n(906981);
let M = e => {
  var l;
  let {
channelData: n,
onClose: i,
trackOptionClick: h
  } = e, x = (0, s.e7)([m.Z], () => m.Z.getChannel(n.channel_id)), E = (0, s.e7)([j.Z], () => null != x && j.Z.can(I.Pl.VIEW_CHANNEL, x)), _ = (0, s.e7)([r.Z], () => null != n.emoji_id ? r.Z.getCustomEmojiById(n.emoji_id) : null, [n.emoji_id]), N = null != n.emoji_name ? d.ZP.getByName(d.ZP.convertSurrogateToName(n.emoji_name, !1)) : null, C = null !== (l = (0, c.KS)(x)) && void 0 !== l ? l : o.TextIcon;
  return null != x && E ? (0, a.jsxs)(o.Clickable, {
className: v.optionContainer,
onClick: () => {
  h(), i(), (0, u.XU)(x.guild_id, x.id);
},
children: [
  null != _ || null != N ? (0, a.jsx)(t.Z, {
    emojiName: null != n.emoji_id ? null == _ ? void 0 : _.name : n.emoji_name,
    animated: null != _ && _.animated,
    emojiId: null == _ ? void 0 : _.id,
    autoplay: !0,
    className: v.optionEmoji
  }) : (0, a.jsx)(C, {
    className: v.channelIcon
  }),
  (0, a.jsxs)('div', {
    className: v.optionTextContainer,
    children: [
      (0, a.jsx)(o.Text, {
        variant: 'text-md/normal',
        className: v.channelDescription,
        children: n.description
      }),
      (0, a.jsxs)(o.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: [
          (0, a.jsx)(C, {
            className: v.channelTitleIcon,
            size: 'xxs',
            color: 'currentColor'
          }),
          (0, a.jsx)('span', {
            children: x.name
          })
        ]
      })
    ]
  }),
  (0, a.jsx)(p.Z, {
    direction: p.Z.Directions.RIGHT,
    className: v.optionArrow
  })
]
  }) : null;
};
l.default = e => {
  var l;
  let {
onClose: n,
transitionState: t,
guildId: c,
isPreview: r
  } = e, d = (0, s.e7)([h.Z], () => h.Z.getGuild(c)), {
welcomeScreen: u,
fetching: m,
hasError: j
  } = (0, s.cj)([Z.Z], () => ({
welcomeScreen: Z.Z.get(c),
fetching: Z.Z.isFetching(),
hasError: Z.Z.hasError()
  })), p = (0, _.Dt)();
  i.useEffect(() => {
null == u && (0, g.RM)(c);
  }, [
c,
u
  ]), i.useEffect(() => {
!1 === m && !0 === j && null == u && n();
  }, [
m,
j,
n,
u
  ]), i.useEffect(() => {
u === Z.a && !1 === m && n();
  }, [
n,
u,
m
  ]), i.useEffect(() => {
!0 !== r && C.default.track(f.rMx.OPEN_MODAL, {
  type: k._,
  guild_id: c
});
  }, [
c,
r
  ]);
  let I = i.useCallback(e => {
var l;
if (null == u || !0 === r)
  return;
let n = [],
  a = [],
  i = !1;
null === (l = u.welcome_channels) || void 0 === l || l.forEach(e => {
  n.push(e.description), a.push(e.channel_id), null != e.emoji_id && (i = !0);
}), C.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
  index: e,
  guild_id: c,
  options: n,
  options_channel_ids: a,
  guild_description: u.description,
  has_custom_emojis: i
});
  }, [
c,
r,
u
  ]);
  return null == d ? null : null == u ? (0, a.jsx)(o.ModalRoot, {
transitionState: t,
className: v.main,
'aria-label': S.Z.Messages.LOADING,
children: (0, a.jsx)(o.Spinner, {
  type: o.Spinner.Type.SPINNING_CIRCLE
})
  }) : (0, a.jsxs)(o.ModalRoot, {
transitionState: t,
className: v.main,
'aria-labelledby': p,
children: [
  (0, a.jsx)(o.ModalCloseButton, {
    onClick: n,
    className: v.close
  }),
  (0, a.jsx)(N.ZP, {
    mask: N.ZP.Masks.SQUIRCLE,
    width: 64,
    height: 64,
    className: v.guildIcon,
    children: (0, a.jsx)(E.Z, {
      size: E.Z.Sizes.LARGER,
      guild: d,
      active: !0,
      animate: !0,
      tabIndex: -1
    })
  }),
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xl/semibold',
    className: v.header,
    id: p,
    children: S.Z.Messages.WELCOME_SCREEN_TITLE.format({
      guildName: d.name,
      guildNameHook: (e, l) => (0, a.jsxs)('span', {
        children: [
          (0, a.jsx)(x.Z, {
            guild: d,
            className: v.headerGuildBadge,
            flowerStarClassName: v.flowerStar,
            tooltipColor: o.Tooltip.Colors.PRIMARY
          }),
          (0, a.jsx)('strong', {
            className: v.headerGuildName,
            children: e
          })
        ]
      }, l)
    })
  }),
  null != u.description ? (0, a.jsx)(o.Text, {
    variant: 'text-sm/normal',
    color: 'header-secondary',
    className: v.guildDescription,
    children: u.description
  }) : null,
  (0, a.jsx)(o.FormTitle, {
    className: v.choiceHeader,
    children: S.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER
  }),
  (0, a.jsx)('div', {
    className: v.options,
    children: null === (l = u.welcome_channels) || void 0 === l ? void 0 : l.map((e, l) => (0, a.jsx)(M, {
      channelData: e,
      trackOptionClick: () => I(l),
      onClose: n
    }, ''.concat(e.channel_id, '-').concat(l)))
  }),
  (0, a.jsx)(o.Button, {
    look: o.Button.Looks.LINK,
    color: v.skipColor,
    className: v.skip,
    onClick: n,
    children: S.Z.Messages.WELCOME_SCREEN_SKIP
  })
]
  });
};