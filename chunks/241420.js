"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120");
var s = i("735250"),
  l = i("470079"),
  d = i("481060"),
  a = i("610697"),
  n = i("619914"),
  r = i("695346"),
  u = i("63063"),
  S = i("88658"),
  c = i("981631"),
  T = i("689938"),
  o = i("852471");

function I(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: i,
    isGuildActivityRestricted: l,
    handleActivityRestrictedGuildChange: r,
    isGuildActivityJoiningRestricted: S,
    handleActivityJoiningRestrictedGuildChange: I,
    isGuildMessageRequestRestricted: _,
    handleMessageRequestRestrictedGuildChange: A,
    guild: g,
    transitionState: E,
    onClose: R
  } = e, G = (0, a.default)(), N = "".concat(T.default.Messages.PRIVACY_SETTINGS, "—").concat(null != g ? g.toString() : "??"), f = g.hasFeature(c.GuildFeatures.HUB), C = (0, n.useUserIsRecentGamesExperimentEnabled)({
    location: "28tk0bf_5",
    autoTrackExposure: !0
  });
  return (0, s.jsxs)(d.ModalRoot, {
    transitionState: E,
    size: d.ModalSize.SMALL,
    "aria-label": N,
    children: [(0, s.jsx)(d.ModalHeader, {
      children: (0, s.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        children: N
      })
    }), (0, s.jsxs)(d.ModalContent, {
      className: o.content,
      children: [(0, s.jsx)(d.FormItem, {
        children: (0, s.jsx)(d.FormSwitch, {
          value: !t,
          note: f ? T.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : T.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: i,
          hideBorder: !0,
          children: T.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }), (0, s.jsx)(d.FormDivider, {
        className: o.divider
      }), !G && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.FormItem, {
          children: (0, s.jsx)(d.FormSwitch, {
            value: !_,
            note: f ? T.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: u.default.getArticleURL(c.HelpdeskArticles.MESSAGE_REQUESTS)
            }) : T.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: u.default.getArticleURL(c.HelpdeskArticles.MESSAGE_REQUESTS)
            }),
            onChange: A,
            disabled: t,
            hideBorder: !0,
            children: T.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }), (0, s.jsx)(d.FormDivider, {
          className: o.divider
        })]
      }), (0, s.jsx)(d.FormItem, {
        children: (0, s.jsx)(d.FormSwitch, {
          value: !l,
          onChange: r,
          hideBorder: !0,
          note: C ? T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC_V2.format({
            helpdeskArticle: u.default.getArticleURL(c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }) : T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
            helpdeskArticle: u.default.getArticleURL(c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: C ? T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_V2 : T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
        })
      }), (0, s.jsx)(d.FormDivider, {
        className: o.divider
      }), (0, s.jsx)(d.FormItem, {
        children: (0, s.jsx)(d.FormSwitch, {
          value: !S,
          onChange: I,
          hideBorder: !0,
          note: T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: u.default.getArticleURL(c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: T.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }), (0, s.jsxs)(d.FormItem, {
        className: o.disclaimer,
        children: [(0, s.jsx)(d.FormDivider, {
          className: o.divider
        }), (0, s.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: T.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
            policyLink: "https://discord.com/safety/360043709612-our-policies"
          })
        })]
      })]
    }), (0, s.jsx)(d.ModalFooter, {
      children: (0, s.jsx)(d.Button, {
        onClick: () => R(),
        children: T.default.Messages.DONE
      })
    })]
  })
}

function _(e) {
  let {
    guild: t,
    transitionState: i,
    onClose: d
  } = e, a = t.id, n = r.RestrictedGuildIds.useSetting().includes(a), u = r.MessageRequestRestrictedGuildIds.useSetting().includes(a), c = r.ActivityRestrictedGuilds.useSetting().includes(a), T = r.ActivityJoiningRestrictedGuilds.useSetting().includes(a), o = l.useCallback(e => {
    let t = new Set((0, S.getSanitizedRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), r.RestrictedGuildIds.updateSetting(Array.from(t))
  }, [a]), _ = l.useCallback(e => {
    let t = new Set((0, S.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), r.ActivityRestrictedGuilds.updateSetting([...t])
  }, [a]), A = l.useCallback(e => {
    let t = new Set((0, S.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), r.ActivityJoiningRestrictedGuilds.updateSetting([...t])
  }, [a]), g = l.useCallback(e => {
    let t = new Set((0, S.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), r.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t))
  }, [a]);
  return (0, s.jsx)(I, {
    isGuildRestricted: n,
    handleRestrictedGuildChange: o,
    isGuildActivityRestricted: c,
    handleActivityRestrictedGuildChange: _,
    isGuildActivityJoiningRestricted: T,
    handleActivityJoiningRestrictedGuildChange: A,
    isGuildMessageRequestRestricted: u,
    handleMessageRequestRestrictedGuildChange: g,
    guild: t,
    transitionState: i,
    onClose: d
  })
}