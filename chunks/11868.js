l.d(n, {
  Qt: function() {
return b;
  }
});
var s = l(735250),
  t = l(470079),
  a = l(120356),
  i = l.n(a),
  o = l(442837),
  r = l(481060),
  u = l(447543),
  c = l(287734),
  d = l(372769),
  m = l(955415),
  N = l(922482),
  v = l(601964),
  C = l(592125),
  p = l(430824),
  h = l(15274),
  E = l(924301),
  g = l(725436),
  I = l(978227),
  x = l(236373),
  j = l(854698),
  L = l(405613),
  f = l(95291),
  S = l(742593),
  T = l(217804),
  _ = l(139712),
  B = l(765305),
  Z = l(689938),
  k = l(831024);
let R = (e, n) => l => {
l.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(l);
  },
  D = (e, n) => l => {
let s = C.Z.getChannel(e.channel_id);
null != s && (l.stopPropagation(), (0, N.Cq)(s), null == n || n(l));
  },
  b = (e, n) => {
switch (null == e ? void 0 : e.entity_type) {
  case B.WX.STAGE_INSTANCE:
    return D(e, n);
  case B.WX.VOICE:
    return R(e, n);
}
return () => {};
  },
  A = (e, n) => n && [
B.WX.STAGE_INSTANCE,
B.WX.VOICE
  ].includes(null == e ? void 0 : e.entity_type),
  M = t.memo(function(e) {
var n;
let {
  guild: l,
  guildScheduledEvent: a,
  channel: i,
  isMember: c
} = e, N = (0, o.e7)([p.Z], () => {
  var e;
  return null == l ? null : null !== (e = p.Z.getGuild(l.id)) && void 0 !== e ? e : new v.ZP(l);
}, [l]), C = (0, T.u)(a, i), h = t.useCallback(e => {
  c && null != a && (e.stopPropagation(), (0, u.B)(a));
}, [
  c,
  a
]), E = t.useCallback(e => {
  b(a)(e);
}, [a]);
if (null == N)
  return null;
let I = null == C ? void 0 : C.IconComponent,
  x = (0, s.jsxs)(s.Fragment, {
    children: [
      null != I && (0, s.jsx)(I, {
        size: 'xs',
        color: 'currentColor',
        className: k.channelIcon
      }),
      (0, s.jsx)(r.Text, {
        className: k.channelDescription,
        variant: 'text-xs/normal',
        children: (0, g.m)(null !== (n = null == C ? void 0 : C.locationName) && void 0 !== n ? n : '', !0)
      })
    ]
  });
return (0, s.jsxs)('div', {
  className: k.inviteDetailsContainer,
  children: [
    (0, s.jsx)(m.Z.Icon, {
      guild: N,
      onClick: h
    }),
    (0, s.jsxs)('div', {
      className: k.verticalContainer,
      children: [
        (0, s.jsxs)('div', {
          className: k.guildChannelInfoContainer,
          children: [
            (0, s.jsx)(d.Z, {
              guild: N,
              tooltipPosition: 'top',
              tooltipColor: r.Tooltip.Colors.PRIMARY,
              size: 16,
              className: k.guildBadge
            }),
            (0, s.jsx)(r.Clickable, {
              className: k.guildNameClickable,
              onClick: h,
              children: (0, s.jsx)(r.Heading, {
                className: c ? k.guildNameLinkable : k.guildName,
                variant: 'text-sm/medium',
                children: N.name
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: k.channelInfoContainer,
          children: A(a, c) ? (0, s.jsx)(r.Clickable, {
            className: k.channelLocationLink,
            onClick: E,
            children: x
          }) : x
        })
      ]
    })
  ]
});
  }),
  P = t.memo(function(e) {
let {
  guildId: n,
  guildScheduledEventId: l,
  recurrenceId: t,
  isActive: a,
  isEnded: i,
  isMember: u,
  isExternal: c,
  onAcceptInstantInvite: d,
  onTransitionToInviteChannel: m
} = e, N = (0, o.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(l, t), [
  l,
  t
]), v = e => {
  e.stopPropagation(), u ? a && m() : d();
};
return u ? a ? (0, s.jsx)(r.Button, {
  className: k.button,
  size: r.Button.Sizes.SMALL,
  onClick: e => {
    !c && v(e);
  },
  color: c ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
  children: c ? Z.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : Z.Z.Messages.JOIN_GUILD
}) : i ? (0, s.jsx)(r.Button, {
  className: k.button,
  size: r.Button.Sizes.SMALL,
  disabled: !0,
  color: r.Button.Colors.PRIMARY,
  look: r.Button.Looks.OUTLINED,
  children: Z.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
}) : (0, s.jsxs)(r.Button, {
  className: k.button,
  innerClassName: k.innerButton,
  size: r.Button.Sizes.SMALL,
  color: r.Button.Colors.PRIMARY,
  look: N ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
  onClick: e => {
    e.stopPropagation(), (0, _.Z)(l, t, n);
  },
  children: [
    N ? (0, s.jsx)(r.CheckmarkLargeIcon, {
      size: 'xs',
      color: 'currentColor',
      className: k.buttonIcon
    }) : (0, s.jsx)(r.BellIcon, {
      size: 'xs',
      color: 'currentColor',
      className: k.buttonIcon
    }),
    Z.Z.Messages.INDICATE_RSVP
  ]
}) : (0, s.jsx)(r.Button, {
  className: k.button,
  size: r.Button.Sizes.SMALL,
  onClick: v,
  color: r.Button.Colors.GREEN,
  children: Z.Z.Messages.JOIN_GUILD
});
  }),
  y = t.memo(function(e) {
var n;
let {
  guildScheduledEvent: l,
  guild: a,
  channel: o,
  isMember: u,
  recurrenceId: c,
  onAcceptInstantInvite: d,
  onTransitionToInviteChannel: N
} = e, v = null != c ? c : null != l ? (0, j.DK)(l) : null, C = (null == l ? void 0 : l.recurrence_rule) == null || null == v || (0, j.Rp)((0, x.KV)(null == l ? void 0 : l.recurrence_rule), v), p = (0, I.Z)(l), g = t.useCallback(() => {
  u && null != l && (0, h.bO)({
    eventId: l.id,
    recurrenceId: v
  });
}, [
  u,
  l,
  v
]);
if (null == l || !C)
  return null;
let T = (0, E.xt)(l),
  _ = (0, E.Z2)(l),
  Z = l.entity_type === B.WX.EXTERNAL;
return (0, s.jsx)(m.Z, {
  className: i()({
    [k.clickable]: u
  }),
  children: (0, s.jsxs)(r.Clickable, {
    onClick: g,
    children: [
      null != l.image && (0, s.jsx)(f.Z, {
        source: (0, L.Z)(l),
        className: k.banner
      }),
      (0, s.jsx)(S.ZP, {
        name: l.name,
        description: null !== (n = l.description) && void 0 !== n ? n : void 0,
        descriptionClassName: k.eventDescription,
        guildId: l.guild_id,
        creator: p,
        guildEvent: l,
        eventPreview: l,
        recurrenceId: v
      }),
      (0, s.jsxs)('div', {
        className: k.footerContainer,
        children: [
          (0, s.jsx)(M, {
            guild: a,
            channel: o,
            guildScheduledEvent: l,
            isMember: u
          }),
          (0, s.jsx)(P, {
            isActive: T,
            isEnded: _,
            isMember: u,
            guildId: l.guild_id,
            guildScheduledEventId: l.id,
            recurrenceId: v,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: N,
            isExternal: Z
          })
        ]
      })
    ]
  })
});
  });
n.ZP = y;