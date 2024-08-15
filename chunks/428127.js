n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(338545),
  o = n(442837),
  c = n(692547),
  u = n(481060),
  d = n(492162),
  h = n(237583),
  p = n(451478),
  _ = n(934415),
  f = n(968847),
  g = n(689938),
  m = n(192116);
let C = {
  friction: 30,
  tension: 300
};

function I(e) {
  var t;
  let {
guildChannels: n,
jumpToVoiceChannels: r
  } = e, s = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, d.Z)(n.id), p = l.useCallback(e => {
e.preventDefault(), e.stopPropagation(), r();
  }, [r]), f = null !== (t = null == s ? void 0 : s.getChannelRecords()) && void 0 !== t ? t : [], C = (0, _.c4)({
channels: f,
selectedChannelId: null,
selectedVoiceChannelId: null,
voiceStates: o
  });
  return (0, i.jsxs)(u.Clickable, {
className: a()(m.bar),
onClick: p,
children: [
  (0, i.jsx)(u.VoiceNormalIcon, {
    size: 'custom',
    className: m.voiceChannelsIcon,
    width: 14,
    height: 14,
    color: c.Z.unsafe_rawColors.GREEN_330.css
  }),
  (0, i.jsx)(u.Text, {
    variant: 'text-xs/semibold',
    color: 'text-positive',
    className: m.barText,
    children: g.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
      count: C.length
    })
  }),
  (0, i.jsx)(h.Z, {
    guildId: n.id,
    className: m.voiceChannelsUsers,
    users: C.slice(0, 4),
    renderMoreUsers: () => null,
    max: 4,
    size: u.AvatarSizes.SIZE_16
  })
]
  });
}

function E(e) {
  let {
position: t,
guildChannels: n,
guildChannelsVersion: r,
jumpToVoiceChannels: c,
jumpToChannel: d
  } = e, {
bottomBar: h,
topBar: _
  } = (0, o.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)), E = (0, o.e7)([p.Z], () => p.Z.isFocused()), {
mode: N,
mentionCount: x,
targetChannelId: S
  } = 'bottom' === t ? h : _, Z = N === f.x.HIDDEN, v = (0, u.useSpring)({
to: {
  transform: Z ? 'bottom' === t ? 'translateY(180%)' : 'translateY(-180%)' : 'translateY(0%)'
},
config: C
  }, E ? 'respect-motion-settings' : 'animate-never'), T = l.useCallback(e => {
e.preventDefault(), e.stopPropagation(), null != S && d(S);
  }, [
d,
S
  ]);
  return (0, i.jsx)('div', {
className: a()(m.container, {
  [m.top]: 'top' === t,
  [m.bottom]: 'bottom' === t
}),
children: (0, i.jsx)(s.animated.div, {
  className: m.containerPadding,
  style: v,
  'aria-hidden': Z,
  children: N === f.x.HIDDEN ? (0, i.jsx)('div', {
    className: a()(m.bar, m.emptyBar)
  }) : N === f.x.UNREAD ? (0, i.jsxs)(u.Clickable, {
    className: m.bar,
    onClick: T,
    children: [
      'bottom' === t ? (0, i.jsx)(u.ChevronSmallDownIcon, {
        size: 'custom',
        color: 'currentColor',
        className: m.unreadIcon,
        height: 14,
        width: 14
      }) : (0, i.jsx)(u.ChevronSmallUpIcon, {
        size: 'custom',
        color: 'currentColor',
        className: m.unreadIcon,
        height: 14,
        width: 14
      }),
      (0, i.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-normal',
        className: m.barText,
        children: g.Z.Messages.NEW_UNREADS
      })
    ]
  }) : N === f.x.MENTIONS ? (0, i.jsx)(u.Clickable, {
    className: a()(m.bar, m.mentionsBar),
    onClick: T,
    children: (0, i.jsx)(u.Text, {
      variant: 'text-xs/semibold',
      color: 'status-danger-text',
      className: m.barText,
      children: g.Z.Messages.NEW_MENTIONS_COUNT.format({
        count: x
      })
    })
  }) : N === f.x.VOICE_CHANNELS ? (0, i.jsx)(I, {
    jumpToVoiceChannels: c,
    guildChannels: n,
    guildChannelsVersion: r
  }) : void 0
})
  });
}