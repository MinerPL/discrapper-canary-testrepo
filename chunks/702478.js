"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("153832"),
  i = s("640358"),
  r = s("442837"),
  o = s("544891"),
  d = s("524437"),
  u = s("692547"),
  c = s("481060"),
  E = s("841470"),
  _ = s("605236"),
  I = s("142497"),
  T = s("706454"),
  S = s("650774"),
  f = s("430824"),
  m = s("499150"),
  N = s("41542"),
  g = s("26290"),
  h = s("626135"),
  C = s("771212"),
  R = s("434404"),
  x = s("146596"),
  L = s("559368"),
  O = s("999382"),
  A = s("981631"),
  p = s("921944"),
  M = s("190378"),
  D = s("689938"),
  v = s("376417"),
  j = s("287837"),
  G = s("573189"),
  U = s("899947"),
  P = s("117831"),
  b = s("996737"),
  B = s("21846"),
  y = s("280632"),
  F = s("44234"),
  H = s("117428");
let k = function(e, t, s) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      l = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (l = D.default.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : l = D.default.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({
      percentage: (0, i.truncateAndLocalizeNumber)(Math.abs(t), s)
    }), {
      localizedNumber: null != e ? "".concat((0, i.truncateAndLocalizeNumber)(e, s)).concat(a ? "%" : "") : D.default.Messages.NOT_AVAILABLE,
      subtext: l,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  w = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || e === A.AbortCodes.NOT_ENOUGH_GUILD_MEMBERS ? (0, a.jsx)(c.FormErrorBlock, {
      icon: N.default,
      className: v.notEnoughMembersError,
      backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: D.default.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
    }) : null == e ? null : (0, a.jsx)(c.FormErrorBlock, {
      backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: D.default.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
    })
  };

function V(e) {
  h.default.track(A.AnalyticEvents.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
    guild_id: e
  });
  let t = null == e ? A.RelativeMarketingURLs.DEVELOPER_PORTAL : A.RelativeMarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
    s = (0, n.v4)();
  return o.HTTP.post({
    url: A.Endpoints.HANDOFF,
    body: {
      key: s
    },
    oldFormErrors: !0
  }).then(e => {
    let a = e.body.handoff_token;
    window.open(A.MarketingURLs.DEVELOPER_PORTAL_LOGIN_HANDOFF(s, a, t))
  }, () => {
    window.open(t)
  })
}
let Y = () => {
  let [e, t] = l.useState(!1), s = (0, r.useStateFromStores)([O.default], () => O.default.getGuildId());
  return (0, a.jsx)(c.Button, {
    className: v.developerPortalCta,
    onClick: () => {
      t(!0), V(s).then(() => {
        t(!1)
      })
    },
    submitting: e,
    children: D.default.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
  })
};

function W(e) {
  let {
    guildId: t
  } = e, {
    hasAccessRate: s,
    accessRate: n
  } = (0, r.useStateFromStoresObject)([L.default], () => L.default.getMemberInsights(t)), i = (0, r.useStateFromStores)([S.default], () => {
    var e;
    return null !== (e = S.default.getMemberCount()) && void 0 !== e ? e : 0
  }), {
    showAccessRate: o
  } = (0, C.useGuildAccessRateInsightExperiment)(t, !s);
  if (l.useEffect(() => {
      o && ((0, _.requestMarkDismissibleContentAsShown)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW, {
        dismissAction: p.ContentDismissActionType.AUTO
      }))
    }, [o]), !o || !s || null == n) return null;
  let E = 10 * Math.ceil((1 - n) * 10),
    I = H,
    T = null,
    f = null;
  return n >= .9 ? (I = H, T = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: v.ratingVeryGood,
      children: e
    }, t)
  }), f = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({
    accessRate: 10
  })) : n >= (i > 1e4 ? .7 : .8) ? (I = y, T = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: v.ratingGood,
      children: e
    }, t)
  }), f = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : n >= .5 ? (I = F, T = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: v.ratingNeutral,
      children: e
    }, t)
  }), f = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : (I = B, T = D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: v.ratingBad,
      children: e
    }, t)
  }), f = 100 === E ? D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  }) : D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({
    accessRate: E
  })), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(c.Heading, {
      variant: "heading-md/semibold",
      className: v.insightsTitle,
      children: [D.default.Messages.MEMBER_INSIGHTS_SERVER_ACCESS, (0, a.jsx)(g.TextBadge, {
        text: D.default.Messages.BETA,
        color: u.default.unsafe_rawColors.BRAND_500.css,
        className: v.betaTag
      })]
    }), (0, a.jsxs)("div", {
      className: v.memberInsightsContainer,
      children: [(0, a.jsxs)("div", {
        className: v.insightsHeader,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: v.insightsIcon,
          src: I
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: v.title,
            children: T
          }), (0, a.jsxs)(c.Text, {
            className: v.description,
            variant: "text-sm/normal",
            children: [f, (0, a.jsx)(c.TooltipContainer, {
              text: D.default.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
              className: v.insightsTooltip,
              children: (0, a.jsx)(N.default, {
                className: v.insightsTooltipIcon
              })
            })]
          })]
        })]
      }), n < .9 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: v.divider
        }), (0, a.jsx)(c.Text, {
          className: v.tips,
          variant: "text-sm/semibold",
          children: D.default.Messages.MEMBER_INSIGHTS_TIPS.format()
        }), (0, a.jsxs)("div", {
          className: v.insightsActions,
          children: [(0, a.jsxs)("div", {
            className: v.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: U
            }), (0, a.jsx)(c.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: D.default.Messages.ACCESS_RATE_ACTION_SIMPLIFY
            })]
          }), (0, a.jsx)("div", {
            className: v.dividerInline
          }), (0, a.jsxs)("div", {
            className: v.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: P
            }), (0, a.jsx)(c.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: D.default.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
            })]
          }), (0, a.jsx)("div", {
            className: v.dividerInline
          }), (0, a.jsxs)("div", {
            className: v.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: G
            }), (0, a.jsx)(c.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: D.default.Messages.ACCESS_RATE_ACTION_BOTS.format({
                integrationsHook: (e, t) => (0, a.jsx)(m.default, {
                  onClick: () => R.default.setSection(A.GuildSettingsSections.INTEGRATIONS),
                  className: v.link,
                  children: e
                }, t)
              })
            })]
          }), (0, a.jsx)("div", {
            className: v.dividerInline
          }), (0, a.jsxs)("div", {
            className: v.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: j
            }), (0, a.jsx)(c.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: D.default.Messages.ACCESS_RATE_ACTION_AUDIT
            })]
          })]
        })]
      }) : (0, a.jsx)("div", {
        className: v.insightsActions,
        children: (0, a.jsxs)("div", {
          className: v.insightAction,
          children: [(0, a.jsx)("img", {
            alt: "",
            className: v.actionIcon,
            src: b
          }), (0, a.jsx)(c.Text, {
            className: v.actionText,
            variant: "text-sm/normal",
            children: D.default.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
              insightsHook: (e, s) => (0, a.jsx)(m.default, {
                onClick: () => V(t),
                className: v.link,
                children: e
              }, s)
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: v.divider
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      className: v.insightsTitle,
      children: D.default.Messages.SERVER_INSIGHTS
    })]
  })
}
t.default = () => {
  let e = (0, r.useStateFromStores)([O.default], () => O.default.getGuildId()),
    t = (0, r.useStateFromStores)([S.default], () => S.default.getMemberCount(e)),
    s = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(e)),
    n = (0, r.useStateFromStores)([T.default], () => T.default.locale),
    {
      analytics: i,
      errorCode: o
    } = (0, r.useStateFromStoresObject)([L.default], () => ({
      analytics: null != e ? L.default.getOverviewAnalytics(e) : null,
      errorCode: L.default.getError()
    })),
    d = null == t || null == s || null != t && t < 500 && null != s && !s.hasFeature(A.GuildFeatures.PARTNERED) && !s.hasFeature(A.GuildFeatures.VERIFIED);
  l.useEffect(() => {
    null != e && !d && ((0, x.fetchEngagementOverview)(e), (0, x.fetchGrowthActivationOverview)(e), (0, x.fetchGrowthActivationRetention)(e))
  }, [e, d]), l.useEffect(() => {
    (0, I.hideHotspot)(M.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
  }, []);
  let u = null != i ? (0, a.jsx)("div", {
    className: v.__invalid_guildAnalyticsOverviewWrapper,
    children: (0, a.jsxs)("div", {
      className: v.overviewData,
      children: [(0, a.jsx)(E.default, {
        title: D.default.Messages.WEEKLY_VISITORS,
        tooltipText: D.default.Messages.VISITORS_INFO,
        ...k(i.visitors, i.visitorsChange, n)
      }), (0, a.jsx)(E.default, {
        title: D.default.Messages.WEEKLY_COMMUNICATORS,
        tooltipText: D.default.Messages.COMMUNICATORS_INFO,
        ...k(i.communicators, i.communicatorsChange, n)
      }), (0, a.jsx)(E.default, {
        title: D.default.Messages.WEEKLY_NEW_MEMBERS,
        ...k(i.newMembers, i.newMembersChange, n)
      }), (0, a.jsx)(E.default, {
        title: D.default.Messages.WEEKLY_NEW_MEMBER_RETENTION,
        tooltipText: D.default.Messages.NEW_MEMBER_RETENTION_INFO,
        ...k(i.pctRetained, i.pctRetainedChange, n, !0)
      })]
    })
  }) : null;
  return (0, a.jsxs)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: D.default.Messages.SERVER_INSIGHTS,
    children: [(0, a.jsx)(c.FormText, {
      type: c.FormTextTypes.DESCRIPTION,
      children: D.default.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
    }), w(o, d), null != e ? (0, a.jsx)(W, {
      guildId: e
    }) : null, (0, a.jsxs)("div", {
      className: v.developerPortalCtaWrapper,
      children: [(0, a.jsx)("div", {
        className: v.placeholderImage
      }), (0, a.jsx)(c.Text, {
        className: v.developerPortalCtaText,
        variant: "text-sm/normal",
        children: D.default.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
      }), (0, a.jsx)(Y, {})]
    }), u]
  })
}