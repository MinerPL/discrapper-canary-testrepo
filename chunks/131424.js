"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("65597"),
  r = s("77078"),
  o = s("95039"),
  d = s("617917"),
  u = s("305961"),
  c = s("476263"),
  S = s("118503"),
  E = s("427459"),
  T = s("49111"),
  f = s("782340"),
  _ = s("605566"),
  m = function(e) {
    let {
      className: t,
      guildId: s,
      boostingVariant: n
    } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(s), [s]);
    return null == m ? (0, a.jsx)("div", {
      className: l(t, _.guildContainer),
      children: (0, a.jsx)("div", {
        className: _.guildInfoContainer,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/bold",
          children: f.default.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
        })
      })
    }) : (0, a.jsxs)("div", {
      className: l(t, _.guildContainer),
      children: [(0, a.jsx)(c.default, {
        className: _.guildIcon,
        guild: m,
        size: c.default.Sizes.LARGER
      }), (0, a.jsxs)("div", {
        className: _.guildInfoContainer,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-lg/bold",
          children: m.name
        }), (0, a.jsxs)("div", {
          className: _.guildBoostStatsContainer,
          children: [(0, a.jsx)(S.default, {
            className: _.guildBoostBadge,
            width: 16,
            height: 16
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/bold",
            color: "text-muted",
            children: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
              subscriptions: m.premiumSubscriberCount
            })
          }), (0, a.jsx)("div", {
            className: _.separator
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
        buttonText: f.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
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
        children: f.default.Messages.NAVIGATE_TO_GUILD
      })]
    })
  }