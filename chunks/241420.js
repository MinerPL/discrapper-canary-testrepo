t.r(s), t.d(s, {
  ConnectedPrivacySettings: function() {
return A;
  },
  PrivacySettingSurfaces: function() {
return n;
  },
  PrivacySettings: function() {
return C;
  },
  default: function() {
return m;
  }
}), t(47120);
var n, a, i = t(735250),
  r = t(470079),
  o = t(481060),
  l = t(921801),
  c = t(695346),
  d = t(626135),
  _ = t(63063),
  E = t(88658),
  u = t(981631),
  I = t(703115),
  T = t(726985),
  S = t(689938),
  N = t(205548);

function C(e) {
  let {
isGuildRestricted: s,
handleRestrictedGuildChange: t,
isGuildActivityRestricted: n,
handleActivityRestrictedGuildChange: a,
isGuildActivityJoiningRestricted: r,
handleActivityJoiningRestrictedGuildChange: c,
isGuildMessageRequestRestricted: d,
handleMessageRequestRestrictedGuildChange: E,
guild: I
  } = e, C = I.hasFeature(u.oNc.HUB);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(l.F, {
    setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS,
    children: [
      (0, i.jsx)(o.FormItem, {
        children: (0, i.jsx)(o.FormSwitch, {
          value: !s,
          note: C ? S.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : S.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: t,
          hideBorder: !0,
          children: S.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }),
      (0, i.jsx)(o.FormDivider, {
        className: N.divider
      })
    ]
  }),
  (0, i.jsx)(l.F, {
    setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS,
    children: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(o.FormItem, {
          children: (0, i.jsx)(o.FormSwitch, {
            value: !d,
            note: C ? S.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: _.Z.getArticleURL(u.BhN.MESSAGE_REQUESTS)
            }) : S.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: _.Z.getArticleURL(u.BhN.MESSAGE_REQUESTS)
            }),
            onChange: E,
            disabled: s,
            hideBorder: !0,
            children: S.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }),
        (0, i.jsx)(o.FormDivider, {
          className: N.divider
        })
      ]
    })
  }),
  (0, i.jsx)(l.F, {
    setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS,
    children: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(o.FormItem, {
          children: (0, i.jsx)(o.FormSwitch, {
            value: !n,
            onChange: a,
            hideBorder: !0,
            note: S.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
              helpdeskArticle: _.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS)
            }),
            children: S.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
          })
        }),
        (0, i.jsx)(o.FormDivider, {
          className: N.divider
        })
      ]
    })
  }),
  (0, i.jsxs)(l.F, {
    setting: T.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING,
    children: [
      (0, i.jsx)(o.FormItem, {
        children: (0, i.jsx)(o.FormSwitch, {
          value: !r,
          onChange: c,
          hideBorder: !0,
          note: S.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: _.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS)
          }),
          children: S.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }),
      (0, i.jsx)(o.FormDivider, {
        className: N.divider
      })
    ]
  }),
  (0, i.jsx)(o.FormItem, {
    className: N.disclaimer,
    children: (0, i.jsx)(o.Text, {
      color: 'header-secondary',
      variant: 'text-sm/normal',
      children: S.Z.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
        policyLink: 'https://discord.com/safety/360043709612-our-policies'
      })
    })
  })
]
  });
}

function m(e) {
  let {
guild: s,
transitionState: t,
onClose: n
  } = e, a = ''.concat(S.Z.Messages.PRIVACY_SETTINGS, '\u2014').concat(null != s ? s.toString() : '??');
  return (0, i.jsxs)(o.ModalRoot, {
transitionState: t,
size: o.ModalSize.SMALL,
'aria-label': a,
children: [
  (0, i.jsx)(o.ModalHeader, {
    children: (0, i.jsx)(o.Heading, {
      variant: 'heading-lg/semibold',
      children: a
    })
  }),
  (0, i.jsx)(o.ModalContent, {
    className: N.content,
    children: (0, i.jsx)(A, {
      guild: s,
      ingress: 'server_privacy_modal'
    })
  }),
  (0, i.jsx)(o.ModalFooter, {
    children: (0, i.jsx)(o.Button, {
      onClick: () => n(),
      children: S.Z.Messages.DONE
    })
  })
]
  });
}

function A(e) {
  let {
guild: s,
ingress: t = 'server_privacy_modal'
  } = e, n = s.id, a = c.h2.useSetting().includes(n), o = c.zA.useSetting().includes(n), l = c.SE.useSetting().includes(n), _ = c.iH.useSetting().includes(n), T = r.useCallback(e => {
let s = new Set((0, E.YK)());
e ? s.delete(n) : s.add(n), c.h2.updateSetting(Array.from(s)), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: I.Y.DIRECT_MESSAGES_TOGGLE,
  ingress: t,
  guild_id: n
});
  }, [
n,
t
  ]), S = r.useCallback(e => {
let s = new Set((0, E._o)());
e ? s.delete(n) : s.add(n), c.SE.updateSetting([...s]), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: I.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
  ingress: t,
  guild_id: n
});
  }, [
n,
t
  ]), N = r.useCallback(e => {
let s = new Set((0, E.rr)());
e ? s.delete(n) : s.add(n), c.iH.updateSetting([...s]), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: I.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
  ingress: t,
  guild_id: n
});
  }, [
n,
t
  ]), m = r.useCallback(e => {
let s = new Set((0, E.gl)());
e ? s.delete(n) : s.add(n), c.zA.updateSetting(Array.from(s)), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: I.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
  ingress: t,
  guild_id: n
});
  }, [
n,
t
  ]);
  return (0, i.jsx)(C, {
isGuildRestricted: a,
handleRestrictedGuildChange: T,
isGuildActivityRestricted: l,
handleActivityRestrictedGuildChange: S,
isGuildActivityJoiningRestricted: _,
handleActivityJoiningRestrictedGuildChange: N,
isGuildMessageRequestRestricted: o,
handleMessageRequestRestrictedGuildChange: m,
guild: s
  });
}
(a = n || (n = {})).USER_SETTINGS_PRIVACY_SAFETY = 'user_settings_privacy_safety', a.SERVER_PRIVACY_MODAL = 'server_privacy_modal';