t.d(n, {
  Z: function() {
return b;
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(913527),
  r = t.n(o),
  c = t(442837),
  d = t(481060),
  u = t(139387),
  I = t(726542),
  m = t(339085),
  _ = t(434404),
  N = t(598077),
  E = t(430824),
  T = t(246946),
  h = t(285952),
  p = t(259580),
  g = t(531087),
  C = t(768581),
  f = t(709054),
  x = t(486199),
  O = t(981631),
  S = t(689938),
  A = t(935003),
  R = t(549856);

function b(e) {
  let n, {
  guild: t,
  integration: s,
  editedIntegration: o,
  isExpanded: b,
  onToggleExpand: Z,
  onDisable: v,
  onEnable: M
} = e,
L = (0, c.e7)([E.Z], () => E.Z.getRoles(t.id)),
[j, D] = a.useState(!1),
P = (0, c.e7)([T.Z], () => T.Z.hidePersonalInformation),
B = a.useCallback(() => {
  D(!0), M(s);
}, [
  s,
  M
]),
y = a.useCallback(() => {
  !s.syncing && (0, d.openModal)(e => {
    let n = 0 === s.expire_behavior ? S.Z.Messages.REMOVE_SYNCED_ROLE : S.Z.Messages.KICK_FROM_SERVER;
    return (0, i.jsx)(d.ConfirmModal, {
      ...e,
      header: S.Z.Messages.DISABLE_INTEGRATION_TITLE,
      confirmText: n,
      cancelText: S.Z.Messages.CANCEL,
      onConfirm: () => v(s),
      children: (0, i.jsx)(d.Text, {
        variant: 'text-md/normal',
        children: s.type === O.ABu.YOUTUBE ? S.Z.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : S.Z.Messages.DISABLE_INTEGRATION_TWITCH_BODY
      })
    });
  });
}, [
  s,
  v
]),
G = a.useCallback(() => {
  _.Z.syncIntegration(t.id, s.id);
}, [
  t.id,
  s.id
]),
k = a.useCallback(() => {
  null != s.role_id && (_.Z.setSection(O.pNK.ROLES), _.Z.selectRole(s.role_id));
}, [s.role_id]),
{
  serviceName: U,
  channelURL: H,
  expireBehaviorLabel: w,
  syncLabel: W,
  subscribersText: F
} = a.useMemo(() => {
  var e, n, t, i, a;
  let l = null !== (t = null === (n = I.Z.get(s.type)) || void 0 === n ? void 0 : null === (e = n.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(n, s.account)) && void 0 !== t ? t : '';
  switch (s.type) {
    case O.ABu.YOUTUBE:
      return {
        serviceName: S.Z.Messages.INTEGRATIONS_YOUTUBE,
          expireBehaviorLabel: S.Z.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR,
          syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_MEMBERS,
          subscribersText: S.Z.Messages.NUM_MEMBERS.format({
            subscribers: null !== (i = s.subscriber_count) && void 0 !== i ? i : 0
          }),
          channelURL: l
      };
    case O.ABu.TWITCH:
    default:
      return {
        serviceName: S.Z.Messages.INTEGRATIONS_TWITCH,
          expireBehaviorLabel: S.Z.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR,
          syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_SUBS,
          subscribersText: S.Z.Messages.NUM_SUBSCRIBERS.format({
            subscribers: null !== (a = s.subscriber_count) && void 0 !== a ? a : 0
          }),
          channelURL: l
      };
  }
}, [
  s.account,
  s.subscriber_count,
  s.type
]),
{
  roleLink: V,
  syncDescriptionText: K
} = a.useMemo(() => {
  let e, n;
  let t = null != s.role_id ? L[s.role_id] : null;
  e = null != t ? (0, i.jsx)(d.Anchor, {
    onClick: k,
    children: t.name
  }) : S.Z.Messages.NONE;
  let a = I.Z.get(s.type);
  return {
    roleLink: e,
    syncDescriptionText: n = s.revoked && null != a ? S.Z.Messages.SYNC_REVOKED.format({
      user: s.user,
      platformName: a.name
    }) : S.Z.Messages.INTEGRATIONS_LAST_SYNC.format({
      datetime: r()(s.synced_at).calendar()
    })
  };
}, [
  L,
  k,
  s.revoked,
  s.role_id,
  s.synced_at,
  s.type,
  s.user
]),
Y = a.useMemo(() => {
  let e = m.Z.getGuildEmoji(t.id),
    n = Object.values(L).filter(e => null != e.tags && e.tags.integration_id === s.id).map(e => e.id);
  return s.enable_emoticons ? e.sort((e, n) => e.name.localeCompare(n.name)).filter(e => null != s.role_id && (null == e ? void 0 : e.roles.some(e => n.includes(e)))) : [];
}, [
  t.id,
  L,
  s.enable_emoticons,
  s.id,
  s.role_id
]);
  if (a.useEffect(() => {
  (null == o ? void 0 : o.id) === s.id && (null == o ? void 0 : o.enabled) === !0 && D(!1);
}, [
  o,
  s.id
]), s.enabled && null != s.user)
n = [{
  icon: d.ClockIcon,
  text: P ? S.Z.Messages.INTEGRATION_ADDED_DATE.format({
    timestamp: f.default.extractTimestamp(s.id)
  }) : S.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
    user: null != s.user ? new N.Z(s.user).tag : null,
    timestamp: f.default.extractTimestamp(s.id)
  })
}];
  else {
let e = new URL(H);
n = [{
  text: S.Z.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
    serviceName: U,
    accountUrl: H,
    accountUrlText: e.hostname + e.pathname
  })
}];
  }
  let z = (0, i.jsxs)(h.Z, {
  className: A.header,
  align: h.Z.Align.CENTER,
  children: [
    (0, i.jsx)(x.Z, {
      name: ''.concat(s.name),
      detailsClassName: A.description,
      details: n
    }),
    s.enabled ? (0, i.jsx)(h.Z.Child, {
      shrink: 0,
      grow: 0,
      children: (0, i.jsx)(p.Z, {
        className: A.expandIcon,
        expanded: b && !j,
        'aria-hidden': !0
      })
    }) : (0, i.jsx)(h.Z.Child, {
      shrink: 0,
      grow: 0,
      children: (0, i.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.PRIMARY,
        onClick: B,
        disabled: j,
        children: j ? (0, i.jsx)(g.Z, {
          width: 24,
          height: 24
        }) : (0, i.jsx)(i.Fragment, {
          children: S.Z.Messages.INTEGRATIONS_ENABLE
        })
      })
    })
  ]
}),
q = null;
  return b && !j && null != o && (q = (0, i.jsxs)(h.Z, {
className: A.body,
direction: h.Z.Direction.VERTICAL,
children: [
  (0, i.jsx)(d.FormDivider, {
    className: A.topDivider
  }),
  function(e) {
    let {
      integration: n,
      labelText: t,
      subscribersText: a,
      descriptionText: s,
      roleLink: l,
      onSync: o
    } = e;
    return (0, i.jsxs)(h.Z, {
      children: [
        (0, i.jsxs)(h.Z.Child, {
          basis: '50%',
          children: [
            (0, i.jsx)(d.FormTitle, {
              className: R.marginBottom8,
              children: S.Z.Messages.FORM_LABEL_SYNCED_ROLE
            }),
            (0, i.jsx)(d.Text, {
              className: A.syncedRole,
              color: 'header-primary',
              variant: 'text-sm/normal',
              children: l
            })
          ]
        }),
        (0, i.jsxs)(h.Z.Child, {
          basis: '50%',
          children: [
            (0, i.jsx)(d.FormTitle, {
              className: R.marginBottom8,
              children: t
            }),
            (0, i.jsxs)(h.Z, {
              justify: h.Z.Justify.BETWEEN,
              children: [
                (0, i.jsxs)(h.Z, {
                  direction: h.Z.Direction.VERTICAL,
                  children: [
                    (0, i.jsx)(d.Text, {
                      color: 'header-primary',
                      variant: 'text-sm/normal',
                      children: a
                    }),
                    (0, i.jsx)(d.Text, {
                      color: 'header-secondary',
                      variant: 'text-xs/normal',
                      children: s
                    })
                  ]
                }),
                (0, i.jsx)(d.Button, {
                  size: d.Button.Sizes.SMALL,
                  look: d.Button.Looks.FILLED,
                  color: d.Button.Colors.PRIMARY,
                  disabled: n.syncing || n.revoked,
                  onClick: o,
                  children: n.syncing ? (0, i.jsx)(g.Z, {
                    width: 24,
                    height: 24
                  }) : (0, i.jsx)(i.Fragment, {
                    children: S.Z.Messages.SYNC
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }({
    integration: o,
    labelText: W,
    subscribersText: F,
    descriptionText: K,
    roleLink: V,
    onSync: G
  }),
  (0, i.jsx)(d.FormDivider, {
    className: A.midDivider
  }),
  function(e) {
    let {
      integration: n,
      labelText: t,
      onBehaviorChange: a,
      onGracePeriodChange: s
    } = e;
    return (0, i.jsxs)(h.Z, {
      children: [
        (0, i.jsxs)(h.Z.Child, {
          basis: '50%',
          children: [
            (0, i.jsx)(d.FormTitle, {
              className: R.marginBottom8,
              children: t
            }),
            (0, i.jsx)(d.SingleSelect, {
              placeholder: t,
              value: ''.concat(n.expire_behavior),
              options: [{
                  value: '0',
                  label: S.Z.Messages.REMOVE_SYNCED_ROLE
                },
                {
                  value: '1',
                  label: S.Z.Messages.KICK_FROM_SERVER
                }
              ],
              isDisabled: n.syncing,
              onChange: e => a(parseInt(e))
            })
          ]
        }),
        (0, i.jsxs)(h.Z.Child, {
          basis: '50%',
          children: [
            (0, i.jsx)(d.FormTitle, {
              className: R.marginBottom8,
              children: S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
            }),
            (0, i.jsx)(d.SingleSelect, {
              placeholder: S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
              maxVisibleItems: 5,
              value: ''.concat(n.expire_grace_period),
              options: [
                1,
                3,
                7,
                14,
                30
              ].map(e => ({
                value: ''.concat(e),
                label: S.Z.Messages.N_DAYS.format({
                  days: e
                })
              })),
              onChange: e => s(parseInt(e)),
              isDisabled: n.syncing
            })
          ]
        })
      ]
    });
  }({
    integration: o,
    labelText: w,
    onBehaviorChange: function(e) {
      u.Z.updateIntegration({
        expireBehavior: e
      });
    },
    onGracePeriodChange: function(e) {
      u.Z.updateIntegration({
        expireGracePeriod: e
      });
    }
  }),
  s.type === O.ABu.TWITCH ? function(e) {
    let {
      integration: n,
      emojis: t,
      onToggle: a
    } = e;
    return (0, i.jsxs)(h.Z, {
      direction: h.Z.Direction.VERTICAL,
      children: [
        (0, i.jsx)(d.Checkbox, {
          type: d.Checkbox.Types.INVERTED,
          className: l()(R.marginTop20, R.marginBottom8),
          value: n.enable_emoticons,
          disabled: n.syncing,
          onChange: e => {
            let {
              currentTarget: n
            } = e;
            return a(n.checked);
          },
          children: (0, i.jsx)(d.FormText, {
            children: S.Z.Messages.ENABLE_TWITCH_EMOJI_SYNC
          })
        }),
        (0, i.jsx)(h.Z, {
          wrap: h.Z.Wrap.WRAP,
          className: A.__invalid_twitchEmojis,
          children: t.map((e, n) => (0, i.jsx)(d.Tooltip, {
            text: e.name,
            children: n => (0, i.jsx)('img', {
              alt: S.Z.Messages.IMG_ALT_EMOJI.format({
                name: e.name
              }),
              draggable: !1,
              className: l()(A.emoji, 'emoji', 'jumboable'),
              src: C.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              }),
              ...n
            }, e.name)
          }, n))
        })
      ]
    });
  }({
    integration: o,
    emojis: Y,
    onToggle: function(e) {
      u.Z.updateIntegration({
        enableEmoticons: e
      });
    }
  }) : null,
  (0, i.jsx)(d.FormDivider, {
    className: A.bottomDivider
  }),
  (0, i.jsx)(h.Z, {
    children: (0, i.jsx)(d.Button, {
      className: A.disableButton,
      size: d.Button.Sizes.SMALL,
      color: d.Button.Colors.RED,
      look: d.Button.Looks.LINK,
      onClick: y,
      children: S.Z.Messages.INTEGRATIONS_DISABLE
    })
  })
]
  })), (0, i.jsx)(d.Card, {
editable: !0,
className: A.card,
children: (0, i.jsxs)(h.Z, {
  direction: h.Z.Direction.VERTICAL,
  children: [
    s.enabled ? (0, i.jsx)(d.Clickable, {
      className: A.expandableHeader,
      'aria-expanded': b && !j,
      onClick: Z,
      children: z
    }) : z,
    q
  ]
})
  });
}