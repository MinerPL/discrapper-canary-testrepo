n.d(l, {
  Qt: function() {
return M;
  }
});
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(442837),
  o = n(481060),
  u = n(447543),
  c = n(287734),
  d = n(922482),
  m = n(601964),
  N = n(592125),
  v = n(430824),
  h = n(940627),
  C = n(197409),
  p = n(15274),
  x = n(924301),
  g = n(725436),
  I = n(978227),
  j = n(236373),
  E = n(854698),
  L = n(405613),
  f = n(95291),
  B = n(742593),
  k = n(217804),
  Z = n(139712),
  _ = n(765305),
  S = n(689938),
  b = n(120254);
let T = (e, l) => n => {
n.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n);
  },
  A = (e, l) => n => {
let s = N.Z.getChannel(e.channel_id);
null != s && (n.stopPropagation(), (0, d.Cq)(s), null == l || l(n));
  },
  M = (e, l) => {
switch (null == e ? void 0 : e.entity_type) {
  case _.WX.STAGE_INSTANCE:
    return A(e, l);
  case _.WX.VOICE:
    return T(e, l);
}
return () => {};
  },
  y = (e, l) => l && [
_.WX.STAGE_INSTANCE,
_.WX.VOICE
  ].includes(null == e ? void 0 : e.entity_type),
  D = t.memo(function(e) {
var l;
let {
  guild: n,
  guildScheduledEvent: a,
  channel: i,
  isMember: c
} = e, d = (0, r.e7)([v.Z], () => {
  var e;
  return null == n ? null : null !== (e = v.Z.getGuild(n.id)) && void 0 !== e ? e : new m.ZP(n);
}, [n]), N = (0, k.u)(a, i), p = t.useCallback(e => {
  c && null != a && (e.stopPropagation(), (0, u.B)(a));
}, [
  c,
  a
]), x = t.useCallback(e => {
  M(a)(e);
}, [a]);
if (null == d)
  return null;
let I = null == N ? void 0 : N.IconComponent,
  j = (0, s.jsxs)(s.Fragment, {
    children: [
      null != I && (0, s.jsx)(I, {
        size: 'xs',
        color: 'currentColor',
        className: b.channelIcon
      }),
      (0, s.jsx)(o.Text, {
        className: b.channelDescription,
        variant: 'text-xs/normal',
        children: (0, g.m)(null !== (l = null == N ? void 0 : N.locationName) && void 0 !== l ? l : '', !0)
      })
    ]
  });
return (0, s.jsxs)('div', {
  className: b.inviteDetailsContainer,
  children: [
    (0, s.jsx)(C.Z.Icon, {
      guild: d,
      onClick: p
    }),
    (0, s.jsxs)('div', {
      className: b.verticalContainer,
      children: [
        (0, s.jsxs)('div', {
          className: b.guildChannelInfoContainer,
          children: [
            (0, s.jsx)(h.Z, {
              guild: d,
              tooltipPosition: 'top',
              tooltipColor: o.Tooltip.Colors.PRIMARY,
              size: 16,
              className: b.guildBadge
            }),
            (0, s.jsx)(o.Clickable, {
              className: b.guildNameClickable,
              onClick: p,
              children: (0, s.jsx)(o.Heading, {
                className: c ? b.guildNameLinkable : b.guildName,
                variant: 'text-sm/medium',
                children: d.name
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: b.channelInfoContainer,
          children: y(a, c) ? (0, s.jsx)(o.Clickable, {
            className: b.channelLocationLink,
            onClick: x,
            children: j
          }) : j
        })
      ]
    })
  ]
});
  }),
  z = t.memo(function(e) {
let {
  guildId: l,
  guildScheduledEventId: n,
  recurrenceId: t,
  isActive: a,
  isEnded: i,
  isMember: u,
  isExternal: c,
  onAcceptInstantInvite: d,
  onTransitionToInviteChannel: m
} = e, N = (0, r.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(n, t), [
  n,
  t
]), v = e => {
  e.stopPropagation(), u ? a && m() : d();
};
return u ? a ? (0, s.jsx)(o.Button, {
  className: b.button,
  size: o.Button.Sizes.SMALL,
  onClick: e => {
    !c && v(e);
  },
  color: c ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
  children: c ? S.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : S.Z.Messages.JOIN_GUILD
}) : i ? (0, s.jsx)(o.Button, {
  className: b.button,
  size: o.Button.Sizes.SMALL,
  disabled: !0,
  color: o.Button.Colors.PRIMARY,
  look: o.Button.Looks.OUTLINED,
  children: S.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
}) : (0, s.jsxs)(o.Button, {
  className: b.button,
  innerClassName: b.innerButton,
  size: o.Button.Sizes.SMALL,
  color: o.Button.Colors.PRIMARY,
  look: N ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
  onClick: e => {
    e.stopPropagation(), (0, Z.Z)(n, t, l);
  },
  children: [
    N ? (0, s.jsx)(o.CheckmarkLargeIcon, {
      size: 'xs',
      color: 'currentColor',
      className: b.buttonIcon
    }) : (0, s.jsx)(o.BellIcon, {
      size: 'xs',
      color: 'currentColor',
      className: b.buttonIcon
    }),
    S.Z.Messages.INDICATE_RSVP
  ]
}) : (0, s.jsx)(o.Button, {
  className: b.button,
  size: o.Button.Sizes.SMALL,
  onClick: v,
  color: o.Button.Colors.GREEN,
  children: S.Z.Messages.JOIN_GUILD
});
  }),
  P = t.memo(function(e) {
var l;
let {
  guildScheduledEvent: n,
  guild: a,
  channel: r,
  isMember: u,
  recurrenceId: c,
  onAcceptInstantInvite: d,
  onTransitionToInviteChannel: m
} = e, N = null != c ? c : null != n ? (0, E.DK)(n) : null, v = (null == n ? void 0 : n.recurrence_rule) == null || null == N || (0, E.Rp)((0, j.KV)(null == n ? void 0 : n.recurrence_rule), N), h = (0, I.Z)(n), g = t.useCallback(() => {
  u && null != n && (0, p.bO)({
    eventId: n.id,
    recurrenceId: N
  });
}, [
  u,
  n,
  N
]);
if (null == n || !v)
  return null;
let k = (0, x.xt)(n),
  Z = (0, x.Z2)(n),
  S = n.entity_type === _.WX.EXTERNAL;
return (0, s.jsx)(C.Z, {
  className: i()({
    [b.clickable]: u
  }),
  children: (0, s.jsxs)(o.Clickable, {
    onClick: g,
    children: [
      null != n.image && (0, s.jsx)(f.Z, {
        source: (0, L.Z)(n),
        className: b.banner
      }),
      (0, s.jsx)(B.ZP, {
        name: n.name,
        description: null !== (l = n.description) && void 0 !== l ? l : void 0,
        descriptionClassName: b.eventDescription,
        guildId: n.guild_id,
        creator: h,
        guildEvent: n,
        eventPreview: n,
        recurrenceId: N
      }),
      (0, s.jsxs)('div', {
        className: b.footerContainer,
        children: [
          (0, s.jsx)(D, {
            guild: a,
            channel: r,
            guildScheduledEvent: n,
            isMember: u
          }),
          (0, s.jsx)(z, {
            isActive: k,
            isEnded: Z,
            isMember: u,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: N,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: m,
            isExternal: S
          })
        ]
      })
    ]
  })
});
  });
l.ZP = P;