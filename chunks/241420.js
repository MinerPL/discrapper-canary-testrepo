"use strict";
i.r(t), i.d(t, {
  default: function() {
    return I
  }
}), i("47120");
var s = i("735250"),
  d = i("470079"),
  l = i("481060"),
  a = i("610697"),
  n = i("695346"),
  r = i("63063"),
  u = i("88658"),
  S = i("981631"),
  c = i("689938"),
  o = i("451214");

function T(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: i,
    isGuildActivityRestricted: d,
    handleActivityRestrictedGuildChange: n,
    isGuildActivityJoiningRestricted: u,
    handleActivityJoiningRestrictedGuildChange: T,
    isGuildMessageRequestRestricted: I,
    handleMessageRequestRestrictedGuildChange: _,
    guild: g,
    transitionState: A,
    onClose: E
  } = e, R = (0, a.default)(), G = "".concat(c.default.Messages.PRIVACY_SETTINGS, "—").concat(null != g ? g.toString() : "??"), N = g.hasFeature(S.GuildFeatures.HUB);
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: A,
    size: l.ModalSize.SMALL,
    "aria-label": G,
    children: [(0, s.jsx)(l.ModalHeader, {
      children: (0, s.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: G
      })
    }), (0, s.jsxs)(l.ModalContent, {
      className: o.content,
      children: [(0, s.jsx)(l.FormItem, {
        children: (0, s.jsx)(l.FormSwitch, {
          value: !t,
          note: N ? c.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : c.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: i,
          hideBorder: !0,
          children: c.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }), (0, s.jsx)(l.FormDivider, {
        className: o.divider
      }), !R && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(l.FormItem, {
          children: (0, s.jsx)(l.FormSwitch, {
            value: !I,
            note: N ? c.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: r.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
            }) : c.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: r.default.getArticleURL(S.HelpdeskArticles.MESSAGE_REQUESTS)
            }),
            onChange: _,
            disabled: t,
            hideBorder: !0,
            children: c.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }), (0, s.jsx)(l.FormDivider, {
          className: o.divider
        })]
      }), (0, s.jsx)(l.FormItem, {
        children: (0, s.jsx)(l.FormSwitch, {
          value: !d,
          onChange: n,
          hideBorder: !0,
          note: c.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
            helpdeskArticle: r.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: c.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
        })
      }), (0, s.jsx)(l.FormDivider, {
        className: o.divider
      }), (0, s.jsx)(l.FormItem, {
        children: (0, s.jsx)(l.FormSwitch, {
          value: !u,
          onChange: T,
          hideBorder: !0,
          note: c.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: r.default.getArticleURL(S.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: c.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }), (0, s.jsxs)(l.FormItem, {
        className: o.disclaimer,
        children: [(0, s.jsx)(l.FormDivider, {
          className: o.divider
        }), (0, s.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: c.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
            policyLink: "https://discord.com/safety/360043709612-our-policies"
          })
        })]
      })]
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        onClick: () => E(),
        children: c.default.Messages.DONE
      })
    })]
  })
}

function I(e) {
  let {
    guild: t,
    transitionState: i,
    onClose: l
  } = e, a = t.id, r = n.RestrictedGuildIds.useSetting().includes(a), S = n.MessageRequestRestrictedGuildIds.useSetting().includes(a), c = n.ActivityRestrictedGuilds.useSetting().includes(a), o = n.ActivityJoiningRestrictedGuilds.useSetting().includes(a), I = d.useCallback(e => {
    let t = new Set((0, u.getSanitizedRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), n.RestrictedGuildIds.updateSetting(Array.from(t))
  }, [a]), _ = d.useCallback(e => {
    let t = new Set((0, u.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), n.ActivityRestrictedGuilds.updateSetting([...t])
  }, [a]), g = d.useCallback(e => {
    let t = new Set((0, u.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), n.ActivityJoiningRestrictedGuilds.updateSetting([...t])
  }, [a]), A = d.useCallback(e => {
    let t = new Set((0, u.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(a) : t.add(a), n.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t))
  }, [a]);
  return (0, s.jsx)(T, {
    isGuildRestricted: r,
    handleRestrictedGuildChange: I,
    isGuildActivityRestricted: c,
    handleActivityRestrictedGuildChange: _,
    isGuildActivityJoiningRestricted: o,
    handleActivityJoiningRestrictedGuildChange: g,
    isGuildMessageRequestRestricted: S,
    handleMessageRequestRestrictedGuildChange: A,
    guild: t,
    transitionState: i,
    onClose: l
  })
}