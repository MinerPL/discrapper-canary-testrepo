"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("399606"),
  r = s("481060"),
  o = s("623624"),
  d = s("678558"),
  u = s("430824"),
  c = s("346656"),
  S = s("709586"),
  E = s("267642"),
  T = s("981631"),
  _ = s("689938"),
  f = s("748367");
t.default = function(e) {
  let {
    className: t,
    guildId: s,
    boostingVariant: n
  } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(s), [s]);
  return null == m ? (0, a.jsx)("div", {
    className: l()(t, f.guildContainer),
    children: (0, a.jsx)("div", {
      className: f.guildInfoContainer,
      children: (0, a.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
      })
    })
  }) : (0, a.jsxs)("div", {
    className: l()(t, f.guildContainer),
    children: [(0, a.jsx)(c.default, {
      className: f.__invalid_guildIcon,
      guild: m,
      size: c.default.Sizes.LARGER
    }), (0, a.jsxs)("div", {
      className: f.guildInfoContainer,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: m.name
      }), (0, a.jsxs)("div", {
        className: f.guildBoostStatsContainer,
        children: [(0, a.jsx)(S.default, {
          className: f.guildBoostBadge,
          width: 16,
          height: 16
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: m.premiumSubscriberCount
          })
        }), (0, a.jsx)("div", {
          className: f.separator
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, E.getTierName)(m.premiumTier, {
            useLevels: !1
          })
        })]
      })]
    }), n ? (0, a.jsx)(d.default, {
      guild: m,
      analyticsLocation: {
        page: T.AnalyticsPages.GUILD_BOOSTING_USER_SETTINGS,
        section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: T.AnalyticsObjects.BUTTON_CTA,
        objectType: T.AnalyticsObjectTypes.BUY
      },
      pauseAnimation: !0,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      buttonText: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
    }) : (0, a.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        (0, o.openGuildBoostingMarketingModal)({
          guildId: m.id,
          location: {
            section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      },
      size: r.Button.Sizes.MEDIUM,
      children: _.default.Messages.NAVIGATE_TO_GUILD
    })]
  })
}