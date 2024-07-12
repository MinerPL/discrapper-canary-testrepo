n.d(t, {
  ZP: function() {
return V;
  },
  fp: function() {
return w;
  },
  k0: function() {
return F;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(392711),
  o = n(442837),
  c = n(481060),
  d = n(230711),
  u = n(497321),
  _ = n(367907),
  I = n(933557),
  E = n(471445),
  T = n(688465),
  m = n(154285),
  N = n(655006),
  S = n(191471),
  h = n(467319),
  g = n(241559),
  C = n(592125),
  x = n(496675),
  p = n(246946),
  R = n(594174),
  f = n(474333),
  L = n(626135),
  O = n(63063),
  A = n(78451),
  M = n(434404),
  D = n(999382),
  v = n(2150),
  j = n(181339),
  Z = n(193544),
  b = n(717251),
  U = n(981631),
  G = n(689938),
  P = n(75454);

function B(e) {
  let {
guild: t
  } = e, n = t.canHaveRaidActivityAlerts(), i = (0, o.e7)([x.Z], () => null != t && x.Z.can(U.Plq.MANAGE_GUILD, t), [t]), {
enableRaidAlerts: r
  } = N.l.useExperiment({
guildId: t.id,
location: '1a2662_1'
  }, {
autoTrackExposure: i
  }), l = (0, h.a)(t.id), d = (0, o.e7)([C.Z], () => C.Z.getChannel(t.safetyAlertsChannelId), [t.safetyAlertsChannelId]), u = (0, I.ZP)(d), m = null != d, g = a.useMemo(() => {
let e = (null == d ? void 0 : d.type) != null ? (0, E.Th)(d.type) : null;
return null != e ? e : c.TextIcon;
  }, [d]);

  function p() {
if (!!r)
  (0, S.K)(t.id);
  }
  return i ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.FormDivider, {
    className: P.divider
  }),
  (0, s.jsxs)('div', {
    className: P.setupContainer,
    children: [
      (0, s.jsxs)('div', {
        className: P.switchItemTextContent,
        children: [
          (0, s.jsxs)(c.Text, {
            color: 'header-primary',
            variant: 'text-md/semibold',
            children: [
              G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_TITLE,
              ' ',
              (0, s.jsx)(T.Z, {
                className: P.betaTag
              })
            ]
          }),
          (0, s.jsx)(c.Text, {
            color: 'header-secondary',
            variant: 'text-sm/normal',
            children: G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_DESCRIPTION
          })
        ]
      }),
      (0, s.jsx)(b.Z, {
        title: (0, s.jsxs)('div', {
          className: P.settingsRowHeader,
          children: [
            (0, s.jsx)(c.ShieldUserIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 20,
              height: 20
            }),
            (0, s.jsx)(c.Text, {
              color: 'text-normal',
              variant: 'text-sm/medium',
              children: G.Z.Messages.GUILD_ANTIRAID_SAFETY_JOIN_RAIDS_TITLE
            })
          ]
        }),
        highlightColor: v.q.GREEN,
        action: r ? (0, s.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          children: n ? G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MANAGE_ACTION : G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_SETUP_ACTION
        }) : (0, s.jsx)(c.Text, {
          color: 'text-muted',
          variant: 'text-sm/medium',
          children: G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_NO_EXPERIMENT_ACTION
        }),
        onClick: r ? p : void 0,
        subsection: r ? (0, s.jsxs)('div', {
          className: P.settingsRowSubsection,
          children: [
            (0, s.jsxs)('div', {
              className: P.settingsRowSubsectionItem,
              children: [
                (0, s.jsx)(c.Text, {
                  color: 'text-normal',
                  variant: 'text-xs/semibold',
                  children: G.Z.Messages.GUILD_ANTIRAID_SETTING_PROTECTION_LABEL
                }),
                (0, s.jsx)(c.Text, {
                  color: 'text-muted',
                  variant: 'text-xs/medium',
                  children: m && n ? G.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED_ALERTS : G.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED
                })
              ]
            }),
            (0, s.jsx)('div', {
              className: P.settingsRowSubsectionItem,
              children: m && n ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(c.Text, {
                    color: 'text-normal',
                    variant: 'text-xs/semibold',
                    children: G.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_LABEL
                  }),
                  (0, s.jsxs)(c.Text, {
                    color: 'text-muted',
                    variant: 'text-xs/medium',
                    className: P.channelContainer,
                    children: [
                      (0, s.jsx)(g, {
                        className: P.channelIcon,
                        size: 'xxs',
                        color: 'currentColor'
                      }),
                      ' ',
                      u
                    ]
                  })
                ]
              }) : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(c.Text, {
                    color: 'text-normal',
                    variant: 'text-xs/semibold',
                    children: G.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE_LABEL
                  }),
                  (0, s.jsx)(c.Text, {
                    color: 'text-muted',
                    variant: 'text-xs/medium',
                    children: G.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE
                  })
                ]
              })
            })
          ]
        }) : null
      }),
      !m && r ? (0, s.jsx)(f.Z, {
        messageType: f.Q.INFO,
        textVariant: 'text-xs/normal',
        children: G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ENABLE_TIP.format({
          onClick: p
        })
      }) : null,
      l ? (0, s.jsx)(b.Z, {
        title: (0, s.jsxs)('div', {
          className: P.settingsRowHeader,
          children: [
            (0, s.jsx)(c.ShieldAtIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 20,
              height: 20
            }),
            (0, s.jsx)(c.Text, {
              color: 'text-normal',
              variant: 'text-sm/medium',
              children: G.Z.Messages.GUILD_ANTIRAID_SAFETY_MENTION_RAIDS_TITLE
            })
          ]
        }),
        highlightColor: v.q.GREEN,
        action: (0, s.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          onClick: function() {
            L.default.track(U.rMx.GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED, {
              ...(0, _.hH)(t.id)
            }), M.Z.setSection(U.pNK.GUILD_AUTOMOD, U.KsC.AUTOMOD_MENTION_SPAM);
          },
          children: (0, s.jsxs)('div', {
            className: P.setupAutomodButton,
            children: [
              G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_IN_AUTOMOD_ACTION,
              (0, s.jsx)(c.DoorExitIcon, {
                size: 'xs',
                color: 'currentColor',
                className: P.setupAutomodIcon
              })
            ]
          })
        })
      }) : null
    ]
  })
]
  }) : null;
}

function y(e) {
  let {
guild: t
  } = e, n = (0, o.e7)([x.Z], () => null != t && x.Z.can(U.Plq.MANAGE_GUILD, t), [t]), i = a.useCallback(async e => {
let {
  value: n
} = e;
try {
  await M.Z.saveGuild(t.id, {
    verificationLevel: n
  }), M.Z.updateGuild({
    verificationLevel: n
  });
} catch (e) {
  (0, c.showToast)((0, c.createToast)(G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
}
  }, [t]), r = a.useMemo(() => {
let e = (0, A.IF)(null == t ? void 0 : t.hasFeature(U.oNc.COMMUNITY)).map(e => ({
  ...e,
  tooltipPosition: 'left'
}));
return (0, A.LJ)(e);
  }, [t]), l = a.useMemo(() => r.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [
t,
r
  ]);
  return (0, s.jsxs)('div', {
className: P.setupContainer,
children: [
  (0, s.jsxs)('div', {
    className: P.switchItemTextContent,
    children: [
      (0, s.jsx)(c.Text, {
        color: 'header-primary',
        variant: 'text-md/semibold',
        children: G.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }),
      (0, s.jsx)(c.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: G.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      })
    ]
  }),
  (0, s.jsx)(Z.Z, {
    changeTitle: G.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
    value: null == l ? void 0 : l.value,
    options: r,
    disabled: !n,
    onChange: i
  })
]
  });
}

function F(e) {
  let {
guild: t,
className: n,
withDivider: i = !0
  } = e, l = (0, o.e7)([x.Z], () => null != t && x.Z.can(U.Plq.MANAGE_GUILD, t), [t]), d = a.useCallback(async e => {
let {
  value: n
} = e;
try {
  await M.Z.saveGuild(t.id, {
    explicitContentFilter: n
  }), M.Z.updateGuild({
    explicitContentFilter: n
  });
} catch (e) {
  (0, c.showToast)((0, c.createToast)(G.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
}
  }, [t.id]), u = a.useMemo(() => {
let e = (0, A.MF)(null == t ? void 0 : t.hasFeature(U.oNc.COMMUNITY)).map(e => ({
  ...e,
  tooltipPosition: 'left'
}));
return (0, A.LJ)(e);
  }, [t]), _ = a.useMemo(() => u.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [
t,
u
  ]);
  return (0, s.jsxs)(s.Fragment, {
children: [
  i && (0, s.jsx)(c.FormDivider, {
    className: P.divider
  }),
  (0, s.jsxs)('div', {
    className: r()(P.setupContainer, n),
    children: [
      (0, s.jsxs)('div', {
        className: P.switchItemTextContent,
        children: [
          (0, s.jsx)(c.Text, {
            color: 'header-primary',
            variant: 'text-md/semibold',
            children: G.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
          }),
          (0, s.jsx)(c.Text, {
            color: 'header-secondary',
            variant: 'text-sm/normal',
            children: G.Z.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
              helpdeskArticle: O.Z.getArticleURL(U.BhN.SAFE_DIRECT_MESSAGING)
            })
          })
        ]
      }),
      (0, s.jsx)(Z.Z, {
        changeTitle: G.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
        value: null == _ ? void 0 : _.value,
        options: u,
        disabled: !l,
        onChange: d
      })
    ]
  })
]
  });
}
async function w(e, t) {
  if (e.hasFeature(U.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t)
return;
  let n = e.features;
  return t ? n.add(U.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(U.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await M.Z.saveGuild(e.id, {
features: n
  });
}

function k(e) {
  let {
guild: t
  } = e, n = (0, o.e7)([x.Z], () => null != t && x.Z.can(U.Plq.MANAGE_GUILD, t), [t]), i = t.hasFeature(U.oNc.COMMUNITY), r = (0, g.n2)(t.id), [l, d] = a.useState(t.hasFeature(U.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = a.useCallback(async e => {
d(e), await w(t, e);
  }, [t]);
  return i || !r ? null : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: P.setupContainer,
    children: [
      (0, s.jsx)(c.FormSwitch, {
        value: l,
        onChange: u,
        className: P.switchItem,
        disabled: !n,
        hideBorder: !0,
        children: (0, s.jsxs)('div', {
          className: P.switchItemTextContent,
          children: [
            (0, s.jsxs)(c.Text, {
              color: 'header-primary',
              variant: 'text-md/semibold',
              children: [
                G.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE,
                (0, s.jsx)(T.Z, {
                  className: P.betaTag
                })
              ]
            }),
            (0, s.jsx)(c.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: G.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
            })
          ]
        })
      }),
      (0, s.jsx)(f.Z, {
        messageType: f.Q.INFO,
        textVariant: 'text-xs/normal',
        children: G.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
      })
    ]
  }),
  (0, s.jsx)(c.FormDivider, {
    className: P.divider
  })
]
  });
}

function H(e) {
  let {
guild: t,
mfaLevel: n
  } = e, i = (0, o.e7)([x.Z], () => null != t && x.Z.can(U.Plq.MANAGE_GUILD, t), [t]), r = (0, o.e7)([R.default], () => R.default.getCurrentUser()), {
isGuildOwnerWithMFA: u,
showMFAUserTooltip: _
  } = a.useMemo(() => null == r ? {
canChangeMFALevel: !1,
showMFAUserTooltip: !1
  } : {
isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(r),
showMFAUserTooltip: !r.mfaEnabled && t.isOwner(r)
  }, [
r,
t
  ]), I = n === U.BpS.ELEVATED, E = (0, l.throttle)(async e => {
if (!!u && !_)
  await M.Z.updateMFALevel({
    guildId: t.id,
    level: e ? U.BpS.ELEVATED : U.BpS.NONE,
    isEnabled: !e
  });
  }, 1000);
  return i ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.FormDivider, {
    className: P.divider
  }),
  (0, s.jsxs)('div', {
    className: P.setupContainer,
    children: [
      (0, s.jsx)(c.FormSwitch, {
        value: I,
        onChange: E,
        className: P.switchItem,
        disabled: !u,
        hideBorder: !0,
        children: (0, s.jsxs)('div', {
          className: P.switchItemTextContent,
          children: [
            (0, s.jsx)(c.Text, {
              color: 'header-primary',
              variant: 'text-md/semibold',
              children: G.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
            }),
            (0, s.jsx)(c.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: G.Z.Messages.GUILD_SETTINGS_REQ_MFA_BODY
            })
          ]
        })
      }),
      _ && (0, s.jsx)(f.Z, {
        messageType: f.Q.INFO,
        textVariant: 'text-xs/normal',
        children: G.Z.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
          onClick: function() {
            d.Z.open(U.oAB.ACCOUNT);
          }
        })
      })
    ]
  })
]
  }) : null;
}

function V() {
  var e;
  let {
guild: t,
mfaLevel: n
  } = (0, o.cj)([D.Z], () => D.Z.getProps(), []), a = (0, o.e7)([p.Z], () => p.Z.enabled, []), {
showAlertMode: i
  } = (0, m.sw)(null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : U.lds);
  return null == t ? null : a ? (0, s.jsx)(u.Z, {}) : (0, s.jsxs)(c.FormSection, {
title: G.Z.Messages.SAFETY_SETUP,
tag: c.FormTitleTags.H1,
titleClassName: P.headerContainer,
children: [
  (0, s.jsx)(k, {
    guild: t
  }),
  (0, s.jsx)(y, {
    guild: t
  }),
  (0, s.jsx)(H, {
    guild: t,
    mfaLevel: n
  }),
  (0, s.jsx)(F, {
    guild: t
  }),
  i ? (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(c.FormDivider, {
        className: P.divider
      }),
      (0, s.jsx)('div', {
        className: r()(P.setupContainer),
        children: (0, s.jsx)(j.w, {
          guild: t
        })
      })
    ]
  }) : (0, s.jsx)(B, {
    guild: t
  })
]
  });
}