s.r(t), s.d(t, {
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
}), s(47120);
var n, a, i = s(735250),
  r = s(470079),
  o = s(481060),
  l = s(921801),
  c = s(695346),
  d = s(626135),
  _ = s(63063),
  E = s(88658),
  u = s(981631),
  T = s(703115),
  I = s(726985),
  S = s(689938),
  N = s(116752);

function C(e) {
  let {
isGuildRestricted: t,
handleRestrictedGuildChange: s,
isGuildActivityRestricted: n,
handleActivityRestrictedGuildChange: a,
isGuildActivityJoiningRestricted: r,
handleActivityJoiningRestrictedGuildChange: c,
isGuildMessageRequestRestricted: d,
handleMessageRequestRestrictedGuildChange: E,
guild: T
  } = e, C = T.hasFeature(u.oNc.HUB);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(l.F, {
    setting: I.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS,
    children: [
      (0, i.jsx)(o.FormItem, {
        children: (0, i.jsx)(o.FormSwitch, {
          value: !t,
          note: C ? S.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : S.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: s,
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
    setting: I.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS,
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
            disabled: t,
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
    setting: I.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS,
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
    setting: I.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING,
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
guild: t,
transitionState: s,
onClose: n
  } = e, a = ''.concat(S.Z.Messages.PRIVACY_SETTINGS, '\u2014').concat(null != t ? t.toString() : '??');
  return (0, i.jsxs)(o.ModalRoot, {
transitionState: s,
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
      guild: t,
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
guild: t,
ingress: s = 'server_privacy_modal'
  } = e, n = t.id, a = c.h2.useSetting().includes(n), o = c.zA.useSetting().includes(n), l = c.SE.useSetting().includes(n), _ = c.iH.useSetting().includes(n), I = r.useCallback(e => {
let t = new Set((0, E.YK)());
e ? t.delete(n) : t.add(n), c.h2.updateSetting(Array.from(t)), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: T.Y.DIRECT_MESSAGES_TOGGLE,
  ingress: s,
  guild_id: n
});
  }, [
n,
s
  ]), S = r.useCallback(e => {
let t = new Set((0, E._o)());
e ? t.delete(n) : t.add(n), c.SE.updateSetting([...t]), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: T.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
  ingress: s,
  guild_id: n
});
  }, [
n,
s
  ]), N = r.useCallback(e => {
let t = new Set((0, E.rr)());
e ? t.delete(n) : t.add(n), c.iH.updateSetting([...t]), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: T.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
  ingress: s,
  guild_id: n
});
  }, [
n,
s
  ]), m = r.useCallback(e => {
let t = new Set((0, E.gl)());
e ? t.delete(n) : t.add(n), c.zA.updateSetting(Array.from(t)), d.default.track(u.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
  action: T.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
  ingress: s,
  guild_id: n
});
  }, [
n,
s
  ]);
  return (0, i.jsx)(C, {
isGuildRestricted: a,
handleRestrictedGuildChange: I,
isGuildActivityRestricted: l,
handleActivityRestrictedGuildChange: S,
isGuildActivityJoiningRestricted: _,
handleActivityJoiningRestrictedGuildChange: N,
isGuildMessageRequestRestricted: o,
handleMessageRequestRestrictedGuildChange: m,
guild: t
  });
}
(a = n || (n = {})).USER_SETTINGS_PRIVACY_SAFETY = 'user_settings_privacy_safety', a.SERVER_PRIVACY_MODAL = 'server_privacy_modal';