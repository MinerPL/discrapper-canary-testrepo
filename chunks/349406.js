"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var i = s("37983"),
  n = s("884691"),
  a = s("77078"),
  d = s("916650"),
  u = s("845579"),
  l = s("701909"),
  r = s("241088"),
  c = s("49111"),
  S = s("782340"),
  o = s("168245");

function T(e) {
  let {
    isGuildRestricted: t,
    handleRestrictedGuildChange: s,
    isGuildActivityRestricted: n,
    handleActivityRestrictedGuildChange: u,
    isGuildActivityJoiningRestricted: r,
    handleActivityJoiningRestrictedGuildChange: T,
    isGuildMessageRequestRestricted: E,
    handleMessageRequestRestrictedGuildChange: I,
    guild: _,
    transitionState: N,
    onClose: R
  } = e, g = (0, d.default)(), A = "".concat(S.default.Messages.PRIVACY_SETTINGS, "—").concat(null != _ ? _.toString() : "??"), C = _.hasFeature(c.GuildFeatures.HUB);
  return (0, i.jsxs)(a.ModalRoot, {
    transitionState: N,
    size: a.ModalSize.SMALL,
    "aria-label": A,
    children: [(0, i.jsx)(a.ModalHeader, {
      children: (0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: A
      })
    }), (0, i.jsxs)(a.ModalContent, {
      className: o.content,
      children: [(0, i.jsx)(a.FormItem, {
        children: (0, i.jsx)(a.FormSwitch, {
          value: !t,
          note: C ? S.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB : S.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,
          onChange: s,
          hideBorder: !0,
          children: S.default.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES
        })
      }), (0, i.jsx)(a.FormDivider, {
        className: o.divider
      }), !g && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.FormItem, {
          children: (0, i.jsx)(a.FormSwitch, {
            value: !E,
            note: C ? S.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({
              helpdeskArticle: l.default.getArticleURL(c.HelpdeskArticles.MESSAGE_REQUESTS)
            }) : S.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({
              helpdeskArticle: l.default.getArticleURL(c.HelpdeskArticles.MESSAGE_REQUESTS)
            }),
            onChange: I,
            disabled: t,
            hideBorder: !0,
            children: S.default.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS
          })
        }), (0, i.jsx)(a.FormDivider, {
          className: o.divider
        })]
      }), (0, i.jsx)(a.FormItem, {
        children: (0, i.jsx)(a.FormSwitch, {
          value: !n,
          onChange: u,
          hideBorder: !0,
          note: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({
            helpdeskArticle: l.default.getArticleURL(c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS
        })
      }), (0, i.jsx)(a.FormDivider, {
        className: o.divider
      }), (0, i.jsx)(a.FormItem, {
        children: (0, i.jsx)(a.FormSwitch, {
          value: !r,
          onChange: T,
          hideBorder: !0,
          note: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({
            helpdeskArticle: l.default.getArticleURL(c.HelpdeskArticles.ACTIVITY_STATUS_SETTINGS)
          }),
          children: S.default.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING
        })
      }), (0, i.jsxs)(a.FormItem, {
        className: o.disclaimer,
        children: [(0, i.jsx)(a.FormDivider, {
          className: o.divider
        }), (0, i.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: S.default.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({
            policyLink: "https://discord.com/safety/360043709612-our-policies"
          })
        })]
      })]
    }), (0, i.jsx)(a.ModalFooter, {
      children: (0, i.jsx)(a.Button, {
        onClick: () => R(),
        children: S.default.Messages.DONE
      })
    })]
  })
}

function E(e) {
  let {
    guild: t,
    transitionState: s,
    onClose: a
  } = e, d = t.id, l = u.RestrictedGuildIds.useSetting().includes(d), c = u.MessageRequestRestrictedGuildIds.useSetting().includes(d), S = u.ActivityRestrictedGuilds.useSetting().includes(d), o = u.ActivityJoiningRestrictedGuilds.useSetting().includes(d), E = n.useCallback(e => {
    let t = new Set((0, r.getSanitizedRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.RestrictedGuildIds.updateSetting(Array.from(t))
  }, [d]), I = n.useCallback(e => {
    let t = new Set((0, r.getSanitizedActivityRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.ActivityRestrictedGuilds.updateSetting([...t])
  }, [d]), _ = n.useCallback(e => {
    let t = new Set((0, r.getSanitizedActivityJoiningRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.ActivityJoiningRestrictedGuilds.updateSetting([...t])
  }, [d]), N = n.useCallback(e => {
    let t = new Set((0, r.getSanitizedMessageRequestRestrictedGuilds)());
    e ? t.delete(d) : t.add(d), u.MessageRequestRestrictedGuildIds.updateSetting(Array.from(t))
  }, [d]);
  return (0, i.jsx)(T, {
    isGuildRestricted: l,
    handleRestrictedGuildChange: E,
    isGuildActivityRestricted: S,
    handleActivityRestrictedGuildChange: I,
    isGuildActivityJoiningRestricted: o,
    handleActivityJoiningRestrictedGuildChange: _,
    isGuildMessageRequestRestricted: c,
    handleMessageRequestRestrictedGuildChange: N,
    guild: t,
    transitionState: s,
    onClose: a
  })
}