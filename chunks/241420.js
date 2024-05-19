"use strict";
s.r(t), s.d(t, {
  ConnectedPrivacySettings: function() {
    return g
  },
  PrivacySettingSurfaces: function() {
    return i
  },
  PrivacySettings: function() {
    return A
  },
  default: function() {
    return R
  }
}), s("47120");
var i, n, r = s("735250"),
  a = s("470079"),
  d = s("481060"),
  l = s("610697"),
  u = s("619914"),
  c = s("695346"),
  S = s("626135"),
  E = s("63063"),
  T = s("88658"),
  _ = s("981631"),
  o = s("703115"),
  I = s("689938"),
  C = s("858686");

function A(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: s,
    isGuildActivityRestricted: i,
    handleActivityRestrictedGuildChange: n,
    isGuildActivityJoiningRestricted: a,
    handleActivityJoiningRestrictedGuildChange: c,
    isGuildMessageRequestRestricted: S,
    handleMessageRequestRestrictedGuildChange: T,
    guild: o
  } = e, A = (0, l.default)(), R = o.hasFeature(_.GuildFeatures.HUB), g = (0, u.useUserIsRecentGamesExperimentEnabled)({
    location: "28tk0bf_5",
    autoTrackExposure: !0
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.FormItem, {
      children: (0, r.jsx)(d.FormSwitch, {
        value: !t,
        note: R ? I.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : I.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
        onChange: s,
        hideBorder: !0,
        children: I.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
      })
    }), (0, r.jsx)(d.FormDivider, {
      className: C.divider
    }), !A && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.FormItem, {
        children: (0, r.jsx)(d.FormSwitch, {
          value: !S,
          note: R ? I.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
            helpdeskArticle: E.default.getArticleURL(_.HelpdeskArticles.MESSAGE_REQUESTS)
          }) : I.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
            helpdeskArticle: E.default.getArticleURL(_.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          onChange: T,
          disabled: t,
          hideBorder: !0,
          children: I.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
        })
      }), (0, r.jsx)(d.FormDivider, {
        className: C.divider
      })]
    }), (0, r.jsx)(d.FormItem, {
      children: (0, r.jsx)(d.FormSwitch, {
        value: !i,
        onChange: n,
        hideBorder: !0,
        note: g ? I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC_V2.format({
          helpdeskArticle: E.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }) : I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
          helpdeskArticle: E.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: g ? I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_V2 : I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
      })
    }), (0, r.jsx)(d.FormDivider, {
      className: C.divider
    }), (0, r.jsx)(d.FormItem, {
      children: (0, r.jsx)(d.FormSwitch, {
        value: !a,
        onChange: c,
        hideBorder: !0,
        note: I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
          helpdeskArticle: E.default.getArticleURL(_.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
        }),
        children: I.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
      })
    }), (0, r.jsxs)(d.FormItem, {
      className: C.disclaimer,
      children: [(0, r.jsx)(d.FormDivider, {
        className: C.divider
      }), (0, r.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
          policyLink: "https://discord.com/safety/360043709612-our-policies"
        })
      })]
    })]
  })
}

function R(e) {
  let {
    guild: t,
    transitionState: s,
    onClose: i
  } = e, n = "".concat(I.default.Messages.PRIVACY_SETTINGS, "—").concat(null != t ? t.toString() : "??");
  return (0, r.jsxs)(d.ModalRoot, {
    transitionState: s,
    size: d.ModalSize.SMALL,
    "aria-label": n,
    children: [(0, r.jsx)(d.ModalHeader, {
      children: (0, r.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        children: n
      })
    }), (0, r.jsx)(d.ModalContent, {
      className: C.content,
      children: (0, r.jsx)(g, {
        guild: t,
        ingress: "server_privacy_modal"
      })
    }), (0, r.jsx)(d.ModalFooter, {
      children: (0, r.jsx)(d.Button, {
        onClick: () => i(),
        children: I.default.Messages.DONE
      })
    })]
  })
}

function g(e) {
  let {
    guild: t,
    ingress: s = "server_privacy_modal"
  } = e, i = t.id, n = c.RestrictedGuildIds.useSetting().includes(i), d = c.MessageRequestRestrictedGuildIds.useSetting().includes(i), l = c.ActivityRestrictedGuilds.useSetting().includes(i), u = c.ActivityJoiningRestrictedGuilds.useSetting().includes(i), E = a.useCallback(e => {
    let t = new Set((0, T.getSanitizedRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), c.RestrictedGuildIds.updateSetting(Array.from(t)), S.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: o.UserGuildPrivacySettingsAction.DIRECT_MESSAGES_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), I = a.useCallback(e => {
    let t = new Set((0, T.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), c.ActivityRestrictedGuilds.updateSetting([...t]), S.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: o.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), C = a.useCallback(e => {
    let t = new Set((0, T.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), c.ActivityJoiningRestrictedGuilds.updateSetting([...t]), S.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: o.UserGuildPrivacySettingsAction.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]), R = a.useCallback(e => {
    let t = new Set((0, T.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(i) : t.add(i), c.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t)), S.default.track(_.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: o.UserGuildPrivacySettingsAction.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
      ingress: s,
      guild_id: i
    })
  }, [i, s]);
  return (0, r.jsx)(A, {
    isGuildRestricted: n,
    handleRestrictedGuildChange: E,
    isGuildActivityRestricted: l,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: u,
    handleActivityJoiningRestrictedGuildChange: C,
    isGuildMessageRequestRestricted: d,
    handleMessageRequestRestrictedGuildChange: R,
    guild: t
  })
}(n = i || (i = {})).USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety", n.SERVER_PRIVACY_MODAL = "server_privacy_modal"