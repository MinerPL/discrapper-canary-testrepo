n.d(t, {
  y: function() {
return S;
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  l = n.n(s),
  a = n(481060),
  o = n(565138),
  u = n(601964),
  d = n(598077),
  c = n(727218),
  _ = n(154921),
  E = n(806519),
  h = n(689938),
  p = n(248188);
let f = e => {
var t;
let {
  speaker: n,
  guildId: r,
  isEmbed: s
} = e, l = new d.Z(n.user);
return (0, i.jsxs)('div', {
  className: p.speaker,
  children: [
    (0, i.jsx)(a.Avatar, {
      src: l.getAvatarURL(r, s ? 16 : 24),
      size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
      'aria-label': ''.concat(n.nick, '-avatar'),
      className: s ? null : p.avatar
    }),
    (0, i.jsx)(_.Z, {
      size: s ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
      color: _.Z.Colors.HEADER_SECONDARY,
      className: p.username,
      children: null !== (t = n.nick) && void 0 !== t ? t : l.username
    })
  ]
});
  },
  S = e => {
let {
  guild: t,
  onlineCount: n
} = e;
if (null == t)
  return null;
let r = new u.ZP(t),
  {
    name: s,
    description: l
  } = r;
return (0, i.jsxs)('div', {
  children: [
    (0, i.jsx)(c.Z, {
      muted: !0,
      uppercase: !0,
      className: p.alignStart,
      children: h.Z.Messages.STAGE_INVITE_GUILD_HEADER
    }),
    (0, i.jsxs)('div', {
      className: p.guild,
      children: [
        (0, i.jsx)(E.ZP, {
          mask: E.ZP.Masks.SQUIRCLE,
          width: 40,
          height: 40,
          children: (0, i.jsx)(o.Z, {
            guild: r,
            size: o.Z.Sizes.MEDIUM,
            active: !0
          })
        }),
        (0, i.jsxs)('div', {
          className: p.guildInfo,
          children: [
            (0, i.jsx)(a.Heading, {
              variant: 'heading-sm/semibold',
              children: s
            }),
            (0, i.jsxs)('div', {
              className: p.speaker,
              children: [
                (0, i.jsx)('div', {
                  className: p.dot
                }),
                null != n && n > 0 ? (0, i.jsx)(a.Text, {
                  variant: 'text-sm/normal',
                  children: h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                    membersOnline: n
                  })
                }) : null
              ]
            })
          ]
        })
      ]
    }),
    null != l && '' !== l && (0, i.jsx)(a.Text, {
      color: 'header-secondary',
      className: p.alignStart,
      variant: 'text-sm/normal',
      children: l
    })
  ]
});
  };
t.Z = e => {
  var t;
  let {
stageInstance: n,
guild: s,
isCard: d = !1,
isEmbed: S = !1,
onClick: m
  } = e, I = r.useMemo(() => null == s ? null : s instanceof u.ZP ? s : new u.ZP(s), [s]);
  if (null == n || null == I)
return null;
  let {
topic: b,
speaker_count: g,
participant_count: C
  } = n, O = null !== (t = n.members) && void 0 !== t ? t : [], A = S ? O.slice(0, 3) : O, v = g - A.length;
  return S && (v += O.length - A.length), (0, i.jsxs)('div', {
children: [
  (0, i.jsxs)('div', {
    className: p.flex,
    children: [
      (0, i.jsxs)('div', {
        className: p.flex,
        children: [
          (0, i.jsx)(a.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 24,
            width: 24,
            className: p.live
          }),
          (0, i.jsx)(a.Heading, {
            variant: 'eyebrow',
            className: l()(p.__invalid_label, p.live),
            children: h.Z.Messages.STAGE_CHANNEL_LIVE_NOW
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: p.background,
        children: [
          (0, i.jsx)(a.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 16,
            width: 16,
            className: p.listeners
          }),
          (0, i.jsx)(a.Heading, {
            className: l()(p.__invalid_label, p.listeners),
            variant: 'heading-sm/semibold',
            children: C
          })
        ]
      })
    ]
  }),
  S && (0, i.jsxs)('div', {
    className: l()(p.guild, {
      [p.embed]: S
    }),
    children: [
      (0, i.jsx)(E.ZP, {
        mask: E.ZP.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children: (0, i.jsx)(o.Z, {
          guild: I,
          size: o.Z.Sizes.MINI,
          active: !0
        })
      }),
      (0, i.jsx)(a.Text, {
        color: 'header-secondary',
        className: p.__invalid_label,
        variant: 'text-sm/normal',
        children: I.name
      })
    ]
  }),
  (0, i.jsx)(c.Z, {
    size: d || S ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_20,
    className: l()(p.header, {
      [p.embed]: S
    }),
    children: b
  }),
  (0, i.jsxs)('div', {
    className: l()(p.members, {
      [p.embed]: S
    }),
    children: [
      A.length > 0 && (0, i.jsxs)('div', {
        className: p.speakers,
        children: [
          A.map(e => (0, i.jsx)(f, {
            speaker: e,
            guildId: I.id,
            isEmbed: S
          }, e.user.id)),
          v > 0 ? (0, i.jsxs)('div', {
            className: p.speaker,
            children: [
              (0, i.jsx)('div', {
                className: l()(p.icon, {
                  [p.embed]: S
                }),
                children: (0, i.jsx)(a.MicrophoneIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  height: S ? 12 : 14,
                  className: p.listeners
                })
              }),
              (0, i.jsxs)(_.Z, {
                size: S ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
                color: _.Z.Colors.HEADER_SECONDARY,
                children: [
                  '+',
                  h.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                    count: v
                  })
                ]
              })
            ]
          }) : null
        ]
      }),
      S && (0, i.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: m,
        className: p.joinButton,
        children: h.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
      })
    ]
  })
]
  });
};