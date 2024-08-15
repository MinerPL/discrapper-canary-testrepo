n.d(t, {
  ZP: function() {
return j;
  },
  fp: function() {
return M;
  },
  k0: function() {
return A;
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
  _ = n(688465),
  I = n(241559),
  E = n(777036),
  T = n(496675),
  m = n(246946),
  N = n(594174),
  S = n(63063),
  h = n(78451),
  g = n(434404),
  C = n(999382),
  x = n(181339),
  p = n(193544),
  R = n(981631),
  f = n(689938),
  L = n(14020);

function O(e) {
  let {
guild: t
  } = e, n = (0, o.e7)([T.Z], () => null != t && T.Z.can(R.Plq.MANAGE_GUILD, t), [t]), i = a.useCallback(async e => {
let {
  value: n
} = e;
try {
  await g.Z.saveGuild(t.id, {
    verificationLevel: n
  }), g.Z.updateGuild({
    verificationLevel: n
  });
} catch (e) {
  (0, c.showToast)((0, c.createToast)(f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
}
  }, [t]), r = a.useMemo(() => {
let e = (0, h.IF)(null == t ? void 0 : t.hasFeature(R.oNc.COMMUNITY)).map(e => ({
  ...e,
  tooltipPosition: 'left'
}));
return (0, h.LJ)(e);
  }, [t]), l = a.useMemo(() => r.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [
t,
r
  ]);
  return (0, s.jsxs)('div', {
className: L.setupContainer,
children: [
  (0, s.jsxs)('div', {
    className: L.switchItemTextContent,
    children: [
      (0, s.jsx)(c.Text, {
        color: 'header-primary',
        variant: 'text-md/semibold',
        children: f.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }),
      (0, s.jsx)(c.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: f.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      })
    ]
  }),
  (0, s.jsx)(p.Z, {
    changeTitle: f.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
    value: null == l ? void 0 : l.value,
    options: r,
    disabled: !n,
    onChange: i
  })
]
  });
}

function A(e) {
  let {
guild: t,
className: n,
withDivider: i = !0
  } = e, l = (0, o.e7)([T.Z], () => null != t && T.Z.can(R.Plq.MANAGE_GUILD, t), [t]), d = a.useCallback(async e => {
let {
  value: n
} = e;
try {
  await g.Z.saveGuild(t.id, {
    explicitContentFilter: n
  }), g.Z.updateGuild({
    explicitContentFilter: n
  });
} catch (e) {
  (0, c.showToast)((0, c.createToast)(f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE));
}
  }, [t.id]), u = a.useMemo(() => {
let e = (0, h.MF)(null == t ? void 0 : t.hasFeature(R.oNc.COMMUNITY)).map(e => ({
  ...e,
  tooltipPosition: 'left'
}));
return (0, h.LJ)(e);
  }, [t]), _ = a.useMemo(() => u.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [
t,
u
  ]);
  return (0, s.jsxs)(s.Fragment, {
children: [
  i && (0, s.jsx)(c.FormDivider, {
    className: L.divider
  }),
  (0, s.jsxs)('div', {
    className: r()(L.setupContainer, n),
    children: [
      (0, s.jsxs)('div', {
        className: L.switchItemTextContent,
        children: [
          (0, s.jsx)(c.Text, {
            color: 'header-primary',
            variant: 'text-md/semibold',
            children: f.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
          }),
          (0, s.jsx)(c.Text, {
            color: 'header-secondary',
            variant: 'text-sm/normal',
            children: f.Z.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
              helpdeskArticle: S.Z.getArticleURL(R.BhN.SAFE_DIRECT_MESSAGING)
            })
          })
        ]
      }),
      (0, s.jsx)(p.Z, {
        changeTitle: f.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
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
async function M(e, t) {
  if (e.hasFeature(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t)
return;
  let n = e.features;
  return t ? n.add(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await g.Z.saveGuild(e.id, {
features: n
  });
}

function D(e) {
  let {
guild: t
  } = e, n = (0, o.e7)([T.Z], () => null != t && T.Z.can(R.Plq.MANAGE_GUILD, t), [t]), i = t.hasFeature(R.oNc.COMMUNITY), r = (0, I.n2)(t.id), [l, d] = a.useState(t.hasFeature(R.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = a.useCallback(async e => {
d(e), await M(t, e);
  }, [t]);
  return i || !r ? null : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: L.setupContainer,
    children: [
      (0, s.jsx)(c.FormSwitch, {
        value: l,
        onChange: u,
        className: L.switchItem,
        disabled: !n,
        hideBorder: !0,
        children: (0, s.jsxs)('div', {
          className: L.switchItemTextContent,
          children: [
            (0, s.jsxs)(c.Text, {
              color: 'header-primary',
              variant: 'text-md/semibold',
              children: [
                f.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE,
                (0, s.jsx)(_.Z, {
                  className: L.betaTag
                })
              ]
            }),
            (0, s.jsx)(c.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: f.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
            })
          ]
        })
      }),
      (0, s.jsx)(E.Z, {
        messageType: E.Q.INFO,
        textVariant: 'text-xs/normal',
        children: f.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
      })
    ]
  }),
  (0, s.jsx)(c.FormDivider, {
    className: L.divider
  })
]
  });
}

function v(e) {
  let {
guild: t,
mfaLevel: n
  } = e, i = (0, o.e7)([T.Z], () => null != t && T.Z.can(R.Plq.MANAGE_GUILD, t), [t]), r = (0, o.e7)([N.default], () => N.default.getCurrentUser()), {
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
  ]), I = n === R.BpS.ELEVATED, m = (0, l.throttle)(async e => {
if (!!u && !_)
  await g.Z.updateMFALevel({
    guildId: t.id,
    level: e ? R.BpS.ELEVATED : R.BpS.NONE,
    isEnabled: !e
  });
  }, 1000);
  return i ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.FormDivider, {
    className: L.divider
  }),
  (0, s.jsxs)('div', {
    className: L.setupContainer,
    children: [
      (0, s.jsx)(c.FormSwitch, {
        value: I,
        onChange: m,
        className: L.switchItem,
        disabled: !u,
        hideBorder: !0,
        children: (0, s.jsxs)('div', {
          className: L.switchItemTextContent,
          children: [
            (0, s.jsx)(c.Text, {
              color: 'header-primary',
              variant: 'text-md/semibold',
              children: f.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
            }),
            (0, s.jsx)(c.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: f.Z.Messages.GUILD_SETTINGS_REQ_MFA_BODY
            })
          ]
        })
      }),
      _ && (0, s.jsx)(E.Z, {
        messageType: E.Q.INFO,
        textVariant: 'text-xs/normal',
        children: f.Z.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
          onClick: function() {
            d.Z.open(R.oAB.ACCOUNT);
          }
        })
      })
    ]
  })
]
  }) : null;
}

function j() {
  let {
guild: e,
mfaLevel: t
  } = (0, o.cj)([C.Z], () => C.Z.getProps(), []), n = (0, o.e7)([m.Z], () => m.Z.enabled, []);
  return null == e ? null : n ? (0, s.jsx)(u.Z, {}) : (0, s.jsxs)(c.FormSection, {
title: f.Z.Messages.SAFETY_SETUP,
tag: c.FormTitleTags.H1,
titleClassName: L.headerContainer,
children: [
  (0, s.jsx)(D, {
    guild: e
  }),
  (0, s.jsx)(O, {
    guild: e
  }),
  (0, s.jsx)(v, {
    guild: e,
    mfaLevel: t
  }),
  (0, s.jsx)(A, {
    guild: e
  }),
  (0, s.jsx)(c.FormDivider, {
    className: L.divider
  }),
  (0, s.jsx)('div', {
    className: r()(L.setupContainer),
    children: (0, s.jsx)(x.w, {
      guild: e
    })
  })
]
  });
}