n.d(t, {
  X: function() {
return E;
  },
  Z: function() {
return g;
  }
});
var s = n(735250);
n(470079);
var r = n(481060),
  i = n(565138),
  a = n(372769),
  l = n(742593),
  o = n(390072),
  c = n(601964),
  u = n(230224),
  d = n(689938),
  _ = n(649928);

function h(e) {
  var t;
  let {
guildScheduledEvent: n,
channel: i,
onAcceptInvite: a,
isSubmitting: c
  } = e;
  return (0, s.jsxs)('div', {
className: _.guildEventCard,
children: [
  (0, s.jsx)(l.ZP, {
    name: n.name,
    description: null !== (t = n.description) && void 0 !== t ? t : void 0,
    headerVariant: 'heading-md/medium',
    descriptionClassName: _.__invalid_channelDescription,
    guildId: n.guild_id,
    guildEvent: n,
    eventPreview: n
  }),
  null != i && (0, s.jsx)('div', {
    className: _.channelInfo,
    children: (0, s.jsx)(o.Z, {
      guildScheduledEvent: n,
      channel: i
    })
  }),
  (0, s.jsx)(r.Button, {
    className: _.acceptButton,
    color: r.Button.Colors.GREEN,
    onClick: a,
    submitting: c,
    children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
  })
]
  });
}

function E(e) {
  var t;
  let {
invite: n
  } = e, l = null != n.guild ? new c.ZP(n.guild) : null;
  if (null == l)
return null;
  let o = null !== (t = l.description) && void 0 !== t ? t : '';
  return (0, s.jsxs)('div', {
className: _.guildInfoCard,
children: [
  (0, s.jsx)(r.Heading, {
    className: _.presentedBy,
    variant: 'text-sm/medium',
    children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER
  }),
  (0, s.jsxs)('div', {
    className: _.guildContainer,
    children: [
      (0, s.jsx)(i.Z, {
        guild: l,
        active: !0,
        size: i.Z.Sizes.MEDIUM
      }),
      (0, s.jsxs)('div', {
        className: _.guildDetailsContanier,
        children: [
          (0, s.jsxs)(r.Text, {
            className: _.guildName,
            color: 'header-primary',
            variant: 'text-sm/medium',
            tag: 'span',
            children: [
              l.name,
              (0, s.jsx)(a.Z, {
                guild: l,
                className: _.guildBadge,
                tooltipPosition: 'left'
              })
            ]
          }),
          (0, s.jsx)(u.V6, {
            invite: n,
            textClassName: _.guildInfoMemberCountText,
            className: _.guildInfoMemberCount
          })
        ]
      })
    ]
  }),
  o.length > 0 && (0, s.jsx)('details', {
    className: _.guildDescriptionContainer,
    children: (0, s.jsx)(r.Text, {
      color: 'header-secondary',
      variant: 'text-sm/normal',
      children: o
    })
  })
]
  });
}

function g(e) {
  let {
invite: t,
channel: n,
isSubmitting: r,
onAcceptInvite: i
  } = e, {
guild_scheduled_event: a
  } = t;
  return null != a ? (0, s.jsx)(h, {
guildScheduledEvent: a,
channel: n,
isSubmitting: r,
onAcceptInvite: i
  }) : null;
}