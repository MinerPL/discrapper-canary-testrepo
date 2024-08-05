n.d(t, {
  W: function() {
return h;
  },
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(318374),
  o = n(565138),
  l = n(769654),
  u = n(914010),
  c = n(938475),
  d = n(652853),
  _ = n(373826),
  E = n(228168),
  f = n(692184);
let h = 3;

function p(e) {
  let {
user: t,
guild: n,
channel: p,
onClose: m
  } = e, {
profileType: I
  } = (0, d.z)(), T = (0, i.e7)([u.Z], () => u.Z.getGuildId()), g = (0, i.Wu)([c.ZP], () => c.ZP.getVoiceStatesForChannel(p).map(e => {
let {
  user: t
} = e;
return t;
  }));
  return (0, r.jsxs)('div', {
className: f.voiceChannel,
children: [
  (0, r.jsxs)('div', {
    className: f.voiceChannelDetails,
    children: [
      (0, r.jsx)(o.Z, {
        guild: n,
        size: o.Z.Sizes.SMOL,
        className: f.guildIcon
      }),
      (0, r.jsx)(a.ChevronSmallRightIcon, {
        size: 'xxs',
        color: a.tokens.colors.INTERACTIVE_NORMAL
      }),
      (0, r.jsxs)('div', {
        className: f.voiceChannelInfo,
        children: [
          (0, r.jsx)(a.VoiceNormalIcon, {
            size: 'xs',
            color: a.tokens.colors.INTERACTIVE_NORMAL
          }),
          (0, r.jsx)(_.Z, {
            variant: 'text-xs/normal',
            color: 'interactive-normal',
            text: p.name,
            onClick: n.id === T ? void 0 : () => {
              (0, l.X)(n.id), null == m || m();
            }
          })
        ]
      })
    ]
  }),
  (0, r.jsx)(s.Z, {
    users: g,
    guildId: n.id,
    channelId: p.id,
    maxUsers: h,
    size: a.AvatarSizes.SIZE_16,
    disableUsernameTooltip: !0,
    disableUserPopout: I !== E.y0.FULL_SIZE || (e => e === t.id),
    overflowCountVariant: 'text-xs/normal'
  })
]
  });
}