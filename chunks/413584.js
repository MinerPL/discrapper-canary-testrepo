n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(348327),
  o = n.n(l),
  c = n(225857),
  d = n(290843),
  u = n(442837),
  _ = n(481060),
  I = n(239091),
  E = n(596454),
  T = n(607070),
  m = n(933557),
  N = n(471445),
  S = n(339085),
  h = n(565138),
  g = n(372769),
  C = n(621923),
  x = n(690221),
  p = n(524329),
  R = n(575258),
  f = n(514698),
  L = n(592125),
  O = n(4912),
  A = n(626135),
  M = n(700785),
  D = n(434404),
  v = n(92160),
  j = n(981631),
  Z = n(231338),
  b = n(689938),
  U = n(534888);
let G = 'WELCOME_CHANNEL',
  P = e => {
var t;
let i, {
    guildId: l,
    welcomeChannel: o,
    onEdit: T,
    onChannelReorder: h,
    isDropHovered: g,
    index: x
  } = e,
  [p, R] = a.useState(!1),
  A = a.useRef(null),
  D = (0, u.e7)([L.Z], () => L.Z.getChannel(o.channel_id)),
  v = (0, u.e7)([S.Z], () => null != o.emoji_id ? S.Z.getUsableCustomEmojiById(o.emoji_id) : null),
  P = null != D && M.Uu(j.Plq.VIEW_CHANNEL, D),
  B = null !== (t = (0, N.KS)(D)) && void 0 !== t ? t : _.TextIcon,
  y = (0, m.ZP)(D, !1),
  {
    homeSettingsEnabled: F
  } = (0, C.kZ)(l),
  [, w] = (0, c.c)({
    type: G,
    item: {
      channel: o,
      index: x
    },
    end: (e, t) => {
      null != e && !t.didDrop() && h(e.channel, null, !0);
    }
  }),
  [, k] = (0, d.L)({
    accept: G,
    hover: e => {
      h(e.channel, x, !1);
    },
    drop: e => {
      h(e.channel, x, !0);
    }
  });
return a.useLayoutEffect(() => (w(k(A)), () => {
  w(null), k(null);
}), [
  w,
  k
]), i = P ? null != v || null != o.emoji_name ? (0, s.jsx)(E.Z, {
  emojiId: null == v ? void 0 : v.id,
  emojiName: null != v ? v.name : o.emoji_name,
  animated: !!(null == v ? void 0 : v.animated)
}) : (0, s.jsx)(B, {
  size: 'md',
  color: 'currentColor',
  className: U.channelIcon
}) : (0, s.jsx)(O.Z, {
  width: 24,
  height: 24,
  className: U.warningIcon
}), (0, s.jsxs)('div', {
  className: r()(U.welcomeChannel, {
    [U.dragging]: g
  }),
  ref: A,
  'data-dnd-name': o.description,
  onContextMenu: e => {
    (0, I.jW)(e, async () => {
      let {
        default: e
      } = await n.e('68535').then(n.bind(n, 602320));
      return t => (0, s.jsx)(e, {
        ...t,
        guildId: l,
        welcomeChannel: o,
        onChannelReorder: h,
        setShowConfirmModal: R,
        onEdit: T,
        index: x
      });
    });
  },
  children: [
    i,
    (0, s.jsxs)('div', {
      className: U.channelDescriptionWrapper,
      children: [
        (0, s.jsx)(_.Text, {
          variant: 'text-md/semibold',
          color: 'header-primary',
          children: o.description
        }),
        (0, s.jsxs)(_.Text, {
          className: P ? void 0 : U.channelWarning,
          variant: 'text-xs/normal',
          color: 'header-secondary',
          children: [
            (0, s.jsx)(B, {
              className: U.channelTitleIcon,
              size: 'xxs',
              color: 'currentColor'
            }),
            (0, s.jsx)('span', {
              children: P ? y : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INVALID_CHANNEL
            })
          ]
        })
      ]
    }),
    (0, s.jsx)(_.Button, {
      color: _.Button.Colors.PRIMARY,
      size: _.Button.Sizes.SMALL,
      disabled: F,
      onClick: () => (0, _.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('39143').then(n.bind(n, 737868));
        return t => (0, s.jsx)(e, {
          ...t,
          welcomeChannel: o,
          guildId: l,
          onSave: T
        });
      }, {
        onCloseRequest: () => Z.Vq
      }),
      children: b.Z.Messages.EDIT
    }),
    p && (0, s.jsx)(f.Z, {
      onConfirm: () => T(),
      onCancel: () => R(!1),
      channelId: o.channel_id
    })
  ]
});
  };
t.Z = e => {
  var t;
  let {
guild: i,
showCreateModal: r
  } = e, {
welcomeSettings: l,
originalWelcomeSettings: c
  } = (0, u.e7)([R.Z], () => R.Z.getSettingsProps()), d = (0, u.e7)([T.Z], () => T.Z.useReducedMotion), [I, E] = a.useState(null), [m, N] = a.useState(!1), [S, f] = a.useState(!1), {
description: L,
channels: M,
enabled: G
  } = l, {
homeSettingsEnabled: B
  } = (0, C.kZ)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : j.lds), y = () => {
if (null != i)
  L !== c.description && ((0, p.Es)(i.id, {
    description: null == L ? void 0 : L.trim()
  }), N(!0));
  }, F = e => {
if (null != i)
  !o()(e, c.channels) && ((0, p.Es)(i.id, {
    channels: e
  }), N(!0));
  }, w = e => {
if (null != i)
  e !== c.enabled && ((0, p.Es)(i.id, {
    enabled: e
  }), f(!d), N(!0));
  }, k = e => {
if (null == e)
  return;
let t = [
  ...null != M ? M : [],
  e
];
(0, p.VP)({
  channels: t
}), F(t);
  }, H = e => t => {
let n = [...null != M ? M : []];
null == t ? n.splice(e, 1) : n[e] = t, (0, p.VP)({
  channels: n
}), F(n), 0 === n.length && G && ((0, p.VP)({
  enabled: !1
}), w(!1));
  }, V = (e, t, n) => {
if (null == M)
  return;
let s = M.indexOf(e),
  a = [...M];
null != t && t !== s && (a.splice(s, 1), a.splice(t, 0, e), (0, p.VP)({
  channels: a
})), n ? (F(a), E(null)) : E(t);
  }, Y = a.useRef(!1);
  a.useEffect(() => (null != i && r && (0, _.openModalLazy)(async () => {
let {
  default: e
} = await n.e('39143').then(n.bind(n, 737868));
return t => (0, s.jsx)(e, {
  ...t,
  guildId: i.id,
  onSave: k
});
  }, {
onCloseRequest: () => Z.Vq
  }), () => {
Y.current = !0;
  }), []), a.useEffect(() => () => {
if (Y.current && m) {
  let e = [],
    t = [],
    n = !1;
  null == M || M.forEach(s => {
    e.push(s.description), t.push(s.channel_id), null != s.emoji_id && (n = !0);
  }), A.default.track(j.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
    guild_id: null == i ? void 0 : i.id,
    options: e,
    options_channel_ids: t,
    guild_description: L,
    has_custom_emojis: n,
    is_enabled: G
  });
}
  }, [
m,
M,
L,
G,
i,
Y
  ]), a.useEffect(() => () => (0, p.sm)(), []);
  let W = a.useCallback(() => {
null != i && D.Z.open(i.id, j.pNK.ONBOARDING);
  }, [i]);
  return null == i ? null : (0, s.jsxs)(_.FormSection, {
title: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
tag: _.FormTitleTags.H1,
children: [
  B && (0, s.jsx)('div', {
    className: U.notice,
    children: (0, s.jsxs)(_.Text, {
      variant: 'text-md/normal',
      children: [
        (0, s.jsx)(O.Z, {
          className: U.noticeIcon
        }),
        b.Z.Messages.WELCOME_SCREEN_DEPRECATED.format({
          onboardingLink: e => (0, s.jsx)(x.Z, {
            onClick: W,
            children: e
          })
        })
      ]
    })
  }),
  (0, s.jsx)(_.Text, {
    className: U.__invalid_description,
    variant: 'text-sm/normal',
    children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SETTINGS_TEXT
  }),
  (0, s.jsx)(v.Z, {
    enabled: G,
    onPreview: (null == M ? void 0 : M.length) === 0 ? void 0 : () => {
      null != i && (0, _.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e('90542').then(n.bind(n, 184782));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: i.id,
          isPreview: !0
        });
      });
    },
    onToggle: G || (null == M ? void 0 : M.length) !== 0 ? () => {
      w(!G);
    } : void 0,
    animateStatus: S,
    firstLine: G ? b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PROGRESS_WILL_SAVE,
    secondLine: G ? b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED_SECOND_LINE : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLE_REMINDER
  }),
  (0, s.jsxs)('div', {
    className: U.previewContainer,
    children: [
      (0, s.jsxs)('div', {
        className: U.welcomeHeader,
        children: [
          (0, s.jsx)(h.Z, {
            size: h.Z.Sizes.LARGER,
            className: U.icon,
            guild: i,
            animate: !0,
            tabIndex: -1
          }),
          (0, s.jsx)(_.Heading, {
            className: U.welcomeTitle,
            variant: 'heading-xl/semibold',
            children: b.Z.Messages.WELCOME_SCREEN_TITLE.format({
              guildName: i.name,
              guildNameHook: (e, t) => (0, s.jsxs)('span', {
                children: [
                  (0, s.jsx)(g.Z, {
                    guild: i,
                    className: U.headerGuildBadge,
                    flowerStarClassName: U.flowerStar
                  }),
                  (0, s.jsx)('strong', {
                    children: e
                  })
                ]
              }, t)
            })
          }),
          (0, s.jsx)('div', {
            className: U.descriptionWrapper,
            children: (0, s.jsx)(_.TextArea, {
              className: U.descriptionInput,
              placeholder: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_DESCRIPTION_PLACEHOLDER,
              onChange: e => {
                (0, p.VP)({
                  description: e
                });
              },
              onBlur: () => {
                y();
              },
              onKeyDown: e => {
                e.keyCode === j.yXg.ENTER && e.preventDefault();
              },
              value: L,
              maxLength: 140,
              disabled: B
            })
          })
        ]
      }),
      (0, s.jsx)(_.FormDivider, {
        className: U.divider
      }),
      (0, s.jsxs)('div', {
        className: U.welcomeChannels,
        children: [
          (0, s.jsx)(_.FormTitle, {
            children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_TITLE
          }),
          (0, s.jsx)(_.Text, {
            variant: 'text-sm/normal',
            className: U.addChannelSubtext,
            children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_DESCRIPTION
          }),
          null == M ? void 0 : M.map((e, t) => (0, s.jsx)(P, {
            guildId: i.id,
            welcomeChannel: e,
            onEdit: H(t),
            onChannelReorder: V,
            isDropHovered: t === I,
            index: t
          }, t)),
          (null == M || M.length < 5) && (0, s.jsx)(_.Button, {
            onClick: () => (0, _.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e('39143').then(n.bind(n, 737868));
              return t => (0, s.jsx)(e, {
                ...t,
                guildId: i.id,
                onSave: k
              });
            }, {
              onCloseRequest: () => Z.Vq
            }),
            className: U.addChannelButton,
            disabled: B,
            color: _.Button.Colors.PRIMARY,
            children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ADD_RECOMMENDED_CHANNEL
          })
        ]
      })
    ]
  })
]
  });
};