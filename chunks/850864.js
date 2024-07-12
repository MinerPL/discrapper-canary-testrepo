n.d(t, {
  T: function() {
return ei;
  },
  Z: function() {
return es;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(399606),
  o = n(780384),
  c = n(481060),
  d = n(852860),
  u = n(367907),
  _ = n(471445),
  I = n(603211),
  E = n(710344),
  T = n(807582),
  m = n(26323),
  N = n(307707),
  S = n(734893),
  h = n(305762),
  g = n(150512),
  C = n(516129),
  x = n(813197),
  p = n(210887),
  R = n(314897),
  f = n(592125),
  L = n(984933),
  O = n(430824),
  A = n(709586),
  M = n(768581),
  D = n(700785),
  v = n(434404),
  j = n(999382),
  Z = n(8426),
  b = n(969632),
  U = n(535907),
  G = n(981631),
  P = n(30513),
  B = n(486324),
  y = n(200299),
  F = n(689938),
  w = n(941868),
  k = n(91716),
  H = n(470264),
  V = n(710043),
  Y = n(847950);

function W(e) {
  let {
guildId: t,
welcomeMessage: i
  } = e, o = a.useCallback(() => {
if (null != t)
  return (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('36371').then(n.bind(n, 893626));
    return n => (0, s.jsx)(e, {
      ...n,
      guildId: t,
      welcomeMessage: i,
      onSave: e => (0, Z._N)(e)
    });
  });
  }, [
t,
i
  ]), d = (0, l.e7)([R.default], () => R.default.getId());
  return (0, S.pw)(i) ? (0, s.jsx)(c.Button, {
size: c.Button.Sizes.SMALL,
onClick: o,
children: (0, s.jsx)(c.Text, {
  variant: 'text-sm/medium',
  children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
})
  }) : (0, s.jsxs)(c.Clickable, {
className: w.editWelcomeSection,
onClick: o,
children: [
  (0, s.jsx)(g.Z, {
    guildId: t,
    welcomeMessage: {
      authorIds: i.authorIds.length > 0 ? i.authorIds : [d],
      message: i.message
    }
  }),
  (0, s.jsx)(c.Tooltip, {
    text: F.Z.Messages.EDIT,
    children: e => (0, s.jsxs)('div', {
      ...e,
      className: r()(w.actionItemEditButton, w.editWelcomeButton),
      children: [
        (0, s.jsx)(c.PencilIcon, {
          size: 'md',
          color: 'currentColor'
        }),
        (0, s.jsx)(c.HiddenVisually, {
          children: F.Z.Messages.EDIT
        })
      ]
    })
  })
]
  });
}

function z(e) {
  var t, i, o, d, u;
  let {
guildId: E,
action: T,
actionIndex: m,
onChange: g,
onDelete: C,
onDragStart: x,
onDragComplete: p,
onDragReset: R
  } = e, L = (0, l.e7)([f.Z], () => f.Z.getChannel(T.channelId)), A = (0, l.e7)([O.Z], () => O.Z.getGuild(E)), {
customEmoji: D,
unicodeEmoji: v
  } = (0, N.Z)(null === (t = T.emoji) || void 0 === t ? void 0 : t.id, null === (i = T.emoji) || void 0 === i ? void 0 : i.name), j = null == T.emoji || null != D || null != v, Z = M.ZP.getNewMemberActionIconURL({
channelId: T.channelId,
icon: T.icon
  }), b = null;
  null != L && (0, S.kb)(L) ? !j && (b = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : b = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
drag: U,
dragSourcePosition: G,
drop: P,
setIsDraggable: B
  } = (0, I.Z)({
type: 'NEW_MEMBER_ACTION',
index: m,
optionId: T.channelId,
onDragStart: x,
onDragComplete: p,
onDragReset: R
  }), y = a.useCallback(() => {
if (null != E)
  return (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('14653').then(n.bind(n, 380716));
    return t => (0, s.jsx)(e, {
      ...t,
      guildId: E,
      action: T,
      onSave: (e, t, n) => g(m, e, t, n),
      onDelete: () => C(m)
    });
  });
  }, [
E,
T,
m,
g,
C
  ]);
  if (null == L || null == A)
return null;
  let k = null !== (u = (0, _.KS)(L)) && void 0 !== u ? u : c.TextIcon;
  return (0, s.jsxs)('div', {
className: r()(w.actionItemContainer),
children: [
  (0, s.jsxs)('div', {
    className: r()(w.actionItem, {
      [w.dropIndicatorBefore]: null != G && m < G,
      [w.dropIndicatorAfter]: null != G && m > G,
      [w.actionItemError]: null != b
    }),
    ref: e => U(P(e)),
    children: [
      (0, s.jsx)('div', {
        className: w.dragContainer,
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        children: (0, s.jsx)(c.DragIcon, {
          size: 'xs',
          color: 'currentColor',
          className: w.dragIcon
        })
      }),
      null != Z ? (0, s.jsx)('div', {
        className: w.iconWrapper,
        children: (0, s.jsx)('img', {
          src: Z,
          className: w.icon,
          width: 48,
          height: 48,
          alt: '',
          'aria-hidden': !0
        })
      }) : (0, s.jsx)('div', {
        className: w.actionItemEmojiWrapper,
        children: (0, s.jsx)(h.Z, {
          emojiId: null === (o = T.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (d = T.emoji) || void 0 === d ? void 0 : d.name,
          size: h.R.MEDIUM,
          defaultComponent: (0, s.jsx)(k, {})
        })
      }),
      (0, s.jsxs)('div', {
        className: w.actionItemText,
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-md/semibold',
            color: 'header-primary',
            children: T.title
          }),
          (0, s.jsx)(c.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            children: F.Z.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
              channelName: L.name
            })
          })
        ]
      }),
      (0, s.jsx)(c.Tooltip, {
        text: F.Z.Messages.EDIT,
        children: e => (0, s.jsxs)(c.Button, {
          ...e,
          className: w.actionItemEditButton,
          innerClassName: w.actionItemEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: y,
          children: [
            (0, s.jsx)(c.PencilIcon, {
              size: 'md',
              color: 'currentColor'
            }),
            (0, s.jsx)(c.HiddenVisually, {
              children: F.Z.Messages.EDIT
            })
          ]
        })
      })
    ]
  }),
  null != b && (0, s.jsx)(c.Text, {
    variant: 'text-xs/medium',
    color: 'text-danger',
    children: b
  })
]
  });
}

function K(e) {
  let {
guildId: t
  } = e, n = (0, l.Wu)([b.Z], () => {
var e;
return null !== (e = b.Z.getSettings().newMemberActions) && void 0 !== e ? e : [];
  }), i = a.useCallback((e, n) => {
if (null == t)
  return;
(0, Z.vR)(e);
let s = b.Z.getSettings();
if (null == s)
  return;
let {
  channelId: a
} = e;
(0, Z.oo)(t, s, !0).then(() => {
  null != n && (0, Z.ad)(t, a, n, !0);
});
  }, [t]), r = a.useCallback((e, s, a, i) => {
var r;
if (null == t)
  return;
let l = null === (r = n[e]) || void 0 === r ? void 0 : r.channelId;
if (null == l)
  return;
let o = b.Z.getSettings();
null != o && ((0, Z.el)(l, s), (0, Z.oo)(t, o, !0).then(() => {
  (0, Z.ad)(t, l, a, i);
}));
  }, [
n,
t
  ]), o = a.useCallback(e => {
var t;
let s = null === (t = n[e]) || void 0 === t ? void 0 : t.channelId;
null != s && (0, Z.Hr)(s);
  }, [n]), c = n.map(e => ({
...e,
id: e.channelId
  })), d = a.useCallback(e => {
if (null == t)
  return;
(0, Z.hS)(e);
let n = b.Z.getSettings();
null != n && (0, Z.oo)(t, n, !0);
  }, [t]), {
handleDragStart: u,
handleDragReset: _,
handleDragComplete: I
  } = (0, E.Z)(c, d);
  return null == t ? null : (0, s.jsxs)('div', {
className: w.section,
children: [
  n.map((e, n) => (0, s.jsx)(z, {
    guildId: t,
    action: e,
    actionIndex: n,
    onChange: r,
    onDelete: o,
    onDragStart: u,
    onDragReset: _,
    onDragComplete: I
  }, e.channelId)),
  (0, s.jsx)(q, {}),
  n.length < S.O9 && (0, s.jsx)(X, {
    guildId: t,
    onAddAction: i
  })
]
  });
}

function q() {
  return (0, s.jsx)('div', {
className: w.actionItemContainer,
children: (0, s.jsxs)('div', {
  className: w.actionItem,
  children: [
    (0, s.jsx)('div', {
      className: w.actionItemEmojiWrapper,
      children: (0, s.jsx)(c.BookCheckIcon, {
        size: 'custom',
        color: 'currentColor',
        height: 20,
        width: 22
      })
    }),
    (0, s.jsx)('div', {
      className: w.actionItemText,
      children: (0, s.jsx)(c.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
      })
    })
  ]
})
  });
}

function X(e) {
  let {
guildId: t,
onAddAction: i
  } = e, r = a.useCallback(() => {
if (null != t)
  return (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('14653').then(n.bind(n, 380716));
    return n => (0, s.jsx)(e, {
      ...n,
      guildId: t,
      onSave: i
    });
  });
  }, [
t,
i
  ]);
  return (0, s.jsxs)(c.Clickable, {
className: w.addActionItem,
onClick: r,
children: [
  (0, s.jsx)(c.CirclePlusIcon, {
    size: 'xs',
    color: 'currentColor'
  }),
  (0, s.jsx)(c.Text, {
    variant: 'text-md/normal',
    color: 'none',
    children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
  })
]
  });
}

function Q() {
  return (0, s.jsxs)('div', {
className: w.badExample,
children: [
  (0, s.jsx)(c.Text, {
    variant: 'eyebrow',
    color: 'header-secondary',
    children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
  }),
  (0, s.jsxs)('div', {
    className: w.example,
    children: [
      (0, s.jsx)('div', {
        className: w.badExampleIcon,
        children: (0, s.jsx)(c.CloseSmallIcon, {
          size: 'md',
          color: 'currentColor'
        })
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-md/semibold',
            color: 'header-primary',
            children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
          }),
          (0, s.jsx)(c.Text, {
            variant: 'text-xs/medium',
            color: 'text-muted',
            children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
          })
        ]
      })
    ]
  })
]
  });
}

function J(e) {
  var t;
  let {
guildId: i
  } = e, r = (0, l.e7)([O.Z], () => O.Z.getGuild(i)), o = null !== (t = null == r ? void 0 : r.hasFeature(G.oNc.BANNER)) && void 0 !== t && t, d = a.useCallback((e, t) => {
if (null != i) {
  if (null == e || void 0 === t) {
    v.Z.saveGuild(i, {
      homeHeader: null
    });
    return;
  }
  (0, c.openModalLazy)(async () => {
    let {
      default: a
    } = await n.e('22872').then(n.bind(n, 850085));
    return n => (0, s.jsx)(a, {
      imgURI: e,
      file: t,
      onCrop: e => v.Z.saveGuild(i, {
        homeHeader: e
      }),
      uploadType: B.pC.HOME_HEADER,
      ...n
    });
  });
}
  }, [i]), _ = a.useCallback(e => {
e.preventDefault(), e.stopPropagation(), null != r && ((0, u.yw)(G.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
  location: {
    section: G.jXE.GUILD_SETTINGS_ONBOARDING,
    object: G.qAy.LEARN_MORE
  },
  guild_id: null == r ? void 0 : r.id,
  location_stack: []
}), (0, m.Z)({
  analyticsLocations: [],
  analyticsSourceLocation: {
    section: G.jXE.GUILD_SETTINGS_ONBOARDING,
    object: G.qAy.ONBOARDING_EDIT,
    page: G.ZY5.GUILD_SETTINGS
  },
  guild: r,
  perks: (0, P.XO)()
}));
  }, [r]);
  if (null == r)
return null;
  let I = (0, s.jsx)(C.Z, {
image: r.homeHeader,
makeURL: e => null != e ? M.ZP.getGuildHomeHeaderURL({
  id: r.id,
  homeHeader: e
}) : null,
disabled: !o,
onChange: d,
hint: F.Z.Messages.CHANGE_HOME_HEADER,
enabled: o,
maxFileSizeBytes: y.B
  });
  return o ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: w.sectionHeader,
    children: [
      (0, s.jsx)(c.Heading, {
        className: w.header,
        variant: 'heading-lg/extrabold',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }),
      (0, s.jsx)(T.Z, {
        className: w.boostIndicator,
        guild: r,
        guildFeature: G.oNc.BANNER,
        onClick: _
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: w.section,
    children: [
      (0, s.jsxs)('div', {
        className: w.homeBannerExplainer,
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: F.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
          }),
          (0, s.jsxs)(c.Button, {
            color: c.ButtonColors.BRAND,
            className: w.uploadButton,
            children: [
              F.Z.Messages.UPLOAD_BACKGROUND,
              (0, s.jsx)(x.ZP, {
                onChange: d,
                maxFileSizeBytes: y.B
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('div', {
        children: I
      })
    ]
  })
]
  }) : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: w.sectionHeader,
    children: [
      (0, s.jsx)(c.Heading, {
        className: w.header,
        variant: 'heading-lg/extrabold',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }),
      (0, s.jsx)(T.Z, {
        className: w.boostIndicator,
        guild: r,
        guildFeature: G.oNc.BANNER,
        onClick: _
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: w.section,
    children: [
      (0, s.jsxs)('div', {
        className: w.homeBannerExplainer,
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: F.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
          }),
          (0, s.jsxs)(c.ShinyButton, {
            className: w.upsellButton,
            innerClassName: w.upsellButtonInner,
            color: c.Button.Colors.GREEN,
            onClick: _,
            children: [
              (0, s.jsx)(A.Z, {
                height: 16,
                width: 16
              }),
              (0, s.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: F.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('div', {
        children: (0, s.jsx)(c.Clickable, {
          'aria-hidden': !0,
          tabIndex: -1,
          onClick: _,
          children: I
        })
      })
    ]
  })
]
  });
}

function $(e) {
  let {
guildId: t,
resourceChannel: i,
index: o,
onDragComplete: d,
onDragStart: u,
onDragReset: _
  } = e, E = (0, l.e7)([O.Z], () => O.Z.getGuild(t)), {
title: T,
channelId: m,
description: N
  } = i, h = f.Z.getChannel(m), g = null;
  (null == h || !(0, S.k3)(h)) && (g = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let C = null == N || 0 === N.length,
x = M.ZP.getResourceChannelIconURL({
  channelId: i.channelId,
  icon: i.icon
}),
{
  drag: p,
  dragSourcePosition: R,
  drop: L,
  setIsDraggable: A
} = (0, I.Z)({
  type: 'RESOURCE_CHANNEL',
  optionId: i.channelId,
  index: o,
  onDragStart: u,
  onDragComplete: d,
  onDragReset: _
}),
D = a.useCallback(e => {
  (0, Z.XG)(i.channelId, e);
}, [i.channelId]),
v = a.useCallback((e, n) => {
  if (null == t)
    return;
  let s = b.Z.getSettings();
  null != s && ((0, Z.XG)(i.channelId, e), (0, Z.oo)(t, s).then(() => {
    (0, Z.mM)(t, e.channelId, n);
  }));
}, [
  t,
  i
]),
j = a.useCallback(() => {
  if (null != t)
    return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('84725').then(n.bind(n, 462499));
      return n => (0, s.jsx)(e, {
        ...n,
        guildId: t,
        resourceChannel: i,
        onSave: D,
        onDelete: () => (0, Z.Hz)(i.channelId),
        onIconUpload: v
      });
    });
}, [
  t,
  i,
  D,
  v
]);
  return null == E || null == h ? null : (0, s.jsxs)('div', {
className: r()(w.resourceChannelContainer),
children: [
  (0, s.jsxs)('div', {
    className: r()(w.resourceChannel, {
      [w.dropIndicatorBefore]: null != R && o < R,
      [w.dropIndicatorAfter]: null != R && o > R,
      [w.resourceChannelError]: null != g
    }),
    ref: e => p(L(e)),
    children: [
      (0, s.jsx)('div', {
        className: w.dragContainer,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: (0, s.jsx)(c.DragIcon, {
          size: 'xs',
          color: 'currentColor',
          className: w.dragIcon
        })
      }),
      null != x && (0, s.jsx)('div', {
        className: w.iconWrapper,
        children: (0, s.jsx)('img', {
          src: x,
          className: w.icon,
          width: 32,
          height: 32,
          alt: '',
          'aria-hidden': !0
        })
      }),
      (0, s.jsxs)('div', {
        className: w.resourceChannelContent,
        children: [
          (0, s.jsx)(c.Text, {
            className: w.resourceChannelTitle,
            variant: 'text-md/semibold',
            color: 'header-primary',
            children: T
          }),
          !C && (0, s.jsx)(c.Text, {
            className: w.resourceChannelDescription,
            variant: 'text-xs/medium',
            color: 'text-muted',
            lineClamp: 1,
            children: N
          })
        ]
      }),
      (0, s.jsx)(c.Tooltip, {
        text: F.Z.Messages.EDIT,
        children: e => (0, s.jsxs)(c.Button, {
          ...e,
          className: w.resourceChannelEditButton,
          innerClassName: w.resourceChannelEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: j,
          children: [
            (0, s.jsx)(c.PencilIcon, {
              size: 'md',
              color: 'currentColor'
            }),
            (0, s.jsx)(c.HiddenVisually, {
              children: F.Z.Messages.EDIT
            })
          ]
        })
      })
    ]
  }),
  null != g && (0, s.jsx)(c.Text, {
    variant: 'text-xs/medium',
    color: 'text-danger',
    children: g
  })
]
  });
}

function ee(e) {
  var t;
  let {
channel: n,
isLast: i
  } = e, r = a.useCallback(() => {
(0, Z.r2)({
  channelId: n.id,
  title: n.name,
  description: '',
  emoji: null,
  icon: null
});
  }, [n]), l = null !== (t = (0, _.KS)(n)) && void 0 !== t ? t : c.TextIcon;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: w.suggestedChannel,
    children: [
      (0, s.jsx)(l, {
        className: w.suggestedChannelIcon
      }),
      (0, s.jsx)(c.Text, {
        className: w.suggestedChannelText,
        variant: 'text-sm/normal',
        children: n.name
      }),
      (0, s.jsx)(c.Button, {
        className: w.suggestedChannelButton,
        size: c.Button.Sizes.MIN,
        onClick: r,
        children: (0, s.jsx)(c.Text, {
          variant: 'text-sm/semibold',
          color: 'always-white',
          children: F.Z.Messages.ADD
        })
      })
    ]
  }),
  i && (0, s.jsx)('div', {
    className: w.suggestedSeparator
  })
]
  });
}

function et(e) {
  let {
guildId: t
  } = e, n = (0, l.e7)([O.Z], () => O.Z.getGuild(t)), i = (0, l.Wu)([b.Z], () => {
var e, t;
return null !== (t = null === (e = b.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== t ? t : [];
  }), r = (0, l.Wu)([b.Z], () => b.Z.getDismissedSuggestedChannelIds(t)), o = (0, l.e7)([L.ZP], () => null == t ? [] : L.ZP.getSelectableChannels(t)).filter(e => !r.includes(e.channel.id) && !i.includes(e.channel.id) && e.channel.type === G.d4z.GUILD_TEXT && D.Uu(G.Plq.VIEW_CHANNEL, e.channel) && !D.Uu(G.Plq.SEND_MESSAGES, e.channel) && e.channel.id !== (null == n ? void 0 : n.rulesChannelId)).slice(0, 5), d = a.useCallback(() => {
let e = o.map(e => e.channel.id);
(0, Z.q6)(t, e);
  }, [
t,
o
  ]);
  return o.length <= 0 || i.length >= S.x3 ? null : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: w.suggestedChannelsSection,
    children: [
      (0, s.jsx)(c.Text, {
        variant: 'text-md/semibold',
        children: F.Z.Messages.RECOMMENDED
      }),
      (0, s.jsxs)('div', {
        className: w.suggestedChannelsHeader,
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-xs/medium',
            color: 'text-muted',
            children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
          }),
          (0, s.jsxs)(c.Clickable, {
            className: w.suggestedChannelsDismiss,
            onClick: d,
            children: [
              (0, s.jsx)(c.CheckmarkLargeIcon, {
                size: 'md',
                color: 'currentColor',
                className: w.suggestedChannelsDismissCheck
              }),
              (0, s.jsx)(c.Text, {
                variant: 'text-xs/semibold',
                color: 'text-brand',
                children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('div', {
        className: w.suggestedChannels,
        children: o.map((e, t) => (0, s.jsx)(ee, {
          channel: e.channel,
          isLast: t < o.length - 1
        }, e.channel.id))
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: w.sectionSeparator
  })
]
  });
}

function en(e) {
  let {
guildId: t
  } = e, i = (0, l.Wu)([b.Z], () => {
var e;
return null !== (e = b.Z.getSettings().resourceChannels) && void 0 !== e ? e : [];
  }), r = i.map(e => ({
...e,
id: e.channelId
  })), {
handleDragStart: o,
handleDragReset: d,
handleDragComplete: u
  } = (0, E.Z)(r, Z.lq), _ = a.useCallback((e, n) => {
if (null == t)
  return;
let s = b.Z.getSettings();
null != s && ((0, Z.r2)(e), (0, Z.oo)(t, s).then(() => {
  (0, Z.mM)(t, e.channelId, n);
}));
  }, [t]), I = a.useCallback(() => {
if (null != t)
  return (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('84725').then(n.bind(n, 462499));
    return n => (0, s.jsx)(e, {
      ...n,
      guildId: t,
      onSave: Z.r2,
      onIconUpload: _
    });
  });
  }, [
t,
_
  ]);
  return (0, s.jsxs)('div', {
className: w.editResources,
children: [
  i.map((e, n) => (0, s.jsx)($, {
    guildId: t,
    resourceChannel: e,
    index: n,
    onDragStart: o,
    onDragReset: d,
    onDragComplete: u
  }, e.channelId)),
  i.length < S.x3 && (0, s.jsxs)(c.Clickable, {
    className: w.addActionItem,
    onClick: I,
    children: [
      (0, s.jsx)(c.CirclePlusIcon, {
        size: 'xs',
        color: 'currentColor'
      }),
      (0, s.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'none',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })
    ]
  })
]
  });
}

function es(e) {
  let {
saveOnClose: t
  } = e, n = (0, l.e7)([j.Z], () => j.Z.getGuildId());
  return null == n ? null : (0, s.jsx)(ea, {
guildId: n,
saveOnClose: t
  });
}

function ea(e) {
  let {
saveOnClose: t,
guildId: n
  } = e, i = (0, l.cj)([b.Z], () => {
var e;
return null !== (e = b.Z.getSettings().welcomeMessage) && void 0 !== e ? e : U.z;
  }), [r, d] = a.useState('new'), u = [{
  value: 'new',
  name: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
},
{
  value: 'existing',
  name: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
}
  ], _ = (0, l.e7)([p.Z], () => p.Z.theme);
  return a.useEffect(() => () => {
if (null == n)
  return;
let e = b.Z.getSettings();
(0, Z.oo)(n, e);
  }, [
t,
n
  ]), (0, s.jsxs)('div', {
className: w.page,
children: [
  (0, s.jsxs)('div', {
    className: w.leftColumn,
    children: [
      (0, s.jsx)(c.Heading, {
        className: w.header,
        variant: 'heading-lg/extrabold',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }),
      (0, s.jsx)('div', {
        className: w.descriptionSection,
        children: (0, s.jsx)(c.Text, {
          variant: 'text-sm/medium',
          color: 'header-secondary',
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }),
      (0, s.jsx)('div', {
        className: w.section,
        children: (0, s.jsx)(W, {
          guildId: n,
          welcomeMessage: i
        })
      }),
      (0, s.jsx)('div', {
        className: w.sectionSeparator
      }),
      (0, s.jsx)(c.Heading, {
        className: w.header,
        variant: 'heading-lg/extrabold',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }),
      (0, s.jsx)('div', {
        className: w.descriptionSection,
        children: (0, s.jsx)(c.Text, {
          variant: 'text-sm/medium',
          color: 'header-secondary',
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }),
      (0, s.jsx)('div', {
        className: w.section,
        children: (0, s.jsx)(Q, {})
      }),
      (0, s.jsx)(K, {
        guildId: n
      }),
      (0, s.jsx)('div', {
        className: w.sectionSeparator
      }),
      (0, s.jsx)(c.Heading, {
        className: w.header,
        variant: 'heading-lg/extrabold',
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }),
      (0, s.jsxs)('div', {
        className: w.descriptionSection,
        children: [
          (0, s.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'header-secondary',
            children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
          }),
          (0, s.jsxs)('ul', {
            className: w.bulletList,
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(c.Text, {
                  tag: 'span',
                  variant: 'text-sm/medium',
                  color: 'header-secondary',
                  children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
                })
              }),
              (0, s.jsx)('li', {
                children: (0, s.jsx)(c.Text, {
                  tag: 'span',
                  variant: 'text-sm/medium',
                  color: 'header-secondary',
                  children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
                })
              }),
              (0, s.jsx)('li', {
                children: (0, s.jsx)(c.Text, {
                  tag: 'span',
                  variant: 'text-sm/medium',
                  color: 'header-secondary',
                  children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
                })
              })
            ]
          })
        ]
      }),
      (0, s.jsxs)('div', {
        className: w.section,
        children: [
          (0, s.jsx)(et, {
            guildId: n
          }),
          (0, s.jsx)(en, {
            guildId: n
          })
        ]
      }),
      (0, s.jsx)('div', {
        className: w.sectionSeparator
      }),
      (0, s.jsx)(J, {
        guildId: n
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: w.rightColumn,
    children: [
      (0, s.jsx)('div', {
        className: w.centeredSection,
        children: (0, s.jsx)(c.Text, {
          variant: 'text-sm/medium',
          color: 'header-secondary',
          children: F.Z.Messages.EXAMPLE
        })
      }),
      (0, s.jsx)('img', {
        className: w.previewImage,
        src: (0, o.ap)(_) ? 'existing' === r ? H : Y : 'existing' === r ? k : V,
        alt: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }),
      (0, s.jsx)(c.SegmentedControl, {
        options: u,
        value: r,
        onChange: e => {
          let {
            value: t
          } = e;
          return d(String(t));
        },
        look: 'pill'
      })
    ]
  })
]
  });
}

function ei() {
  let e = (0, l.e7)([j.Z], () => j.Z.getGuild()),
t = (0, l.e7)([b.Z], () => b.Z.getSettings()),
n = (0, l.e7)([b.Z], () => b.Z.getSubmitting());
  return null == e ? null : (0, s.jsx)(d.Z, {
onSave: () => {
  try {
    (0, Z.oo)(e.id, t);
  } catch {}
},
onReset: Z.bj,
submitting: n,
onSaveText: F.Z.Messages.SAVE
  });
}