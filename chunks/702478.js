"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(772848),
  a = t(640358),
  r = t(442837),
  o = t(544891),
  c = t(704215),
  d = t(692547),
  u = t(481060),
  E = t(841470),
  _ = t(605236),
  I = t(142497),
  T = t(706454),
  N = t(650774),
  m = t(430824),
  S = t(499150),
  h = t(41542),
  g = t(626135),
  x = t(771212),
  C = t(434404),
  R = t(146596),
  L = t(559368),
  O = t(999382),
  A = t(981631),
  p = t(921944),
  M = t(190378),
  f = t(689938),
  v = t(480330),
  D = t(287837),
  Z = t(573189),
  j = t(899947),
  U = t(117831),
  G = t(996737),
  P = t(21846),
  b = t(280632),
  B = t(44234),
  y = t(117428);
let F = function(e, s, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = null;
    return null == s || Number.isNaN(s) ? (null == s || Number.isNaN(s)) && null != e && (i = f.Z.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : i = f.Z.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({
      percentage: (0, a.o)(Math.abs(s), t)
    }), {
      localizedNumber: null != e ? "".concat((0, a.o)(e, t)).concat(n ? "%" : "") : f.Z.Messages.NOT_AVAILABLE,
      subtext: i,
      isTrendingUp: s > 0,
      isTrendingDown: s < 0
    }
  },
  w = function(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return s || e === A.evJ.NOT_ENOUGH_GUILD_MEMBERS ? (0, n.jsx)(u.FormErrorBlock, {
      icon: h.Z,
      className: v.notEnoughMembersError,
      backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: f.Z.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
    }) : null == e ? null : (0, n.jsx)(u.FormErrorBlock, {
      backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: f.Z.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
    })
  };

function k(e) {
  g.default.track(A.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
    guild_id: e
  });
  let s = null == e ? A.E07.DEVELOPER_PORTAL : A.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
    t = (0, l.Z)();
  return o.tn.post({
    url: A.ANM.HANDOFF,
    body: {
      key: t
    },
    oldFormErrors: !0
  }).then(e => {
    let n = e.body.handoff_token;
    window.open(A.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, s))
  }, () => {
    window.open(s)
  })
}
let H = () => {
  let [e, s] = i.useState(!1), t = (0, r.e7)([O.Z], () => O.Z.getGuildId());
  return (0, n.jsx)(u.Button, {
    className: v.developerPortalCta,
    onClick: () => {
      s(!0), k(t).then(() => {
        s(!1)
      })
    },
    submitting: e,
    children: f.Z.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
  })
};

function V(e) {
  let {
    guildId: s
  } = e, {
    hasAccessRate: t,
    accessRate: l
  } = (0, r.cj)([L.Z], () => L.Z.getMemberInsights(s)), a = (0, r.e7)([N.Z], () => {
    var e;
    return null !== (e = N.Z.getMemberCount()) && void 0 !== e ? e : 0
  }), {
    showAccessRate: o
  } = (0, x.eA)(s, !t);
  if (i.useEffect(() => {
      o && ((0, _.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, _.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, {
        dismissAction: p.L.AUTO
      }))
    }, [o]), !o || !t || null == l) return null;
  let E = 10 * Math.ceil((1 - l) * 10),
    I = y,
    T = null,
    m = null;
  return l >= .9 ? (I = y, T = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: v.ratingVeryGood,
      children: e
    }, s)
  }), m = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({
    accessRate: 10
  })) : l >= (a > 1e4 ? .7 : .8) ? (I = b, T = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: v.ratingGood,
      children: e
    }, s)
  }), m = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : l >= .5 ? (I = B, T = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: v.ratingNeutral,
      children: e
    }, s)
  }), m = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : (I = P, T = f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: v.ratingBad,
      children: e
    }, s)
  }), m = 100 === E ? f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  }) : f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({
    accessRate: E
  })), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.Heading, {
      variant: "heading-md/semibold",
      className: v.insightsTitle,
      children: [f.Z.Messages.MEMBER_INSIGHTS_SERVER_ACCESS, (0, n.jsx)(u.TextBadge, {
        text: f.Z.Messages.BETA,
        color: d.Z.unsafe_rawColors.BRAND_500.css,
        className: v.betaTag
      })]
    }), (0, n.jsxs)("div", {
      className: v.memberInsightsContainer,
      children: [(0, n.jsxs)("div", {
        className: v.insightsHeader,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: v.insightsIcon,
          src: I
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: v.title,
            children: T
          }), (0, n.jsxs)(u.Text, {
            className: v.description,
            variant: "text-sm/normal",
            children: [m, (0, n.jsx)(u.TooltipContainer, {
              text: f.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
              className: v.insightsTooltip,
              children: (0, n.jsx)(h.Z, {
                className: v.insightsTooltipIcon
              })
            })]
          })]
        })]
      }), l < .9 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: v.divider
        }), (0, n.jsx)(u.Text, {
          className: v.tips,
          variant: "text-sm/semibold",
          children: f.Z.Messages.MEMBER_INSIGHTS_TIPS.format()
        }), (0, n.jsxs)("div", {
          className: v.insightsActions,
          children: [(0, n.jsxs)("div", {
            className: v.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: j
            }), (0, n.jsx)(u.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: f.Z.Messages.ACCESS_RATE_ACTION_SIMPLIFY
            })]
          }), (0, n.jsx)("div", {
            className: v.dividerInline
          }), (0, n.jsxs)("div", {
            className: v.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: U
            }), (0, n.jsx)(u.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: f.Z.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
            })]
          }), (0, n.jsx)("div", {
            className: v.dividerInline
          }), (0, n.jsxs)("div", {
            className: v.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: Z
            }), (0, n.jsx)(u.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: f.Z.Messages.ACCESS_RATE_ACTION_BOTS.format({
                integrationsHook: (e, s) => (0, n.jsx)(S.Z, {
                  onClick: () => C.Z.setSection(A.pNK.INTEGRATIONS),
                  className: v.link,
                  children: e
                }, s)
              })
            })]
          }), (0, n.jsx)("div", {
            className: v.dividerInline
          }), (0, n.jsxs)("div", {
            className: v.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: v.actionIcon,
              src: D
            }), (0, n.jsx)(u.Text, {
              className: v.actionText,
              variant: "text-sm/normal",
              children: f.Z.Messages.ACCESS_RATE_ACTION_AUDIT
            })]
          })]
        })]
      }) : (0, n.jsx)("div", {
        className: v.insightsActions,
        children: (0, n.jsxs)("div", {
          className: v.insightAction,
          children: [(0, n.jsx)("img", {
            alt: "",
            className: v.actionIcon,
            src: G
          }), (0, n.jsx)(u.Text, {
            className: v.actionText,
            variant: "text-sm/normal",
            children: f.Z.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
              insightsHook: (e, t) => (0, n.jsx)(S.Z, {
                onClick: () => k(s),
                className: v.link,
                children: e
              }, t)
            })
          })]
        })
      })]
    }), (0, n.jsx)("div", {
      className: v.divider
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: v.insightsTitle,
      children: f.Z.Messages.SERVER_INSIGHTS
    })]
  })
}
s.Z = () => {
  let e = (0, r.e7)([O.Z], () => O.Z.getGuildId()),
    s = (0, r.e7)([N.Z], () => N.Z.getMemberCount(e)),
    t = (0, r.e7)([m.Z], () => m.Z.getGuild(e)),
    l = (0, r.e7)([T.default], () => T.default.locale),
    {
      analytics: a,
      errorCode: o
    } = (0, r.cj)([L.Z], () => ({
      analytics: null != e ? L.Z.getOverviewAnalytics(e) : null,
      errorCode: L.Z.getError()
    })),
    c = null == s || null == t || null != s && s < 500 && null != t && !t.hasFeature(A.oNc.PARTNERED) && !t.hasFeature(A.oNc.VERIFIED);
  i.useEffect(() => {
    null != e && !c && ((0, R.Vk)(e), (0, R.SR)(e), (0, R.xl)(e))
  }, [e, c]), i.useEffect(() => {
    (0, I.Kw)(M.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
  }, []);
  let d = null != a ? (0, n.jsx)("div", {
    className: v.__invalid_guildAnalyticsOverviewWrapper,
    children: (0, n.jsxs)("div", {
      className: v.overviewData,
      children: [(0, n.jsx)(E.Z, {
        title: f.Z.Messages.WEEKLY_VISITORS,
        tooltipText: f.Z.Messages.VISITORS_INFO,
        ...F(a.visitors, a.visitorsChange, l)
      }), (0, n.jsx)(E.Z, {
        title: f.Z.Messages.WEEKLY_COMMUNICATORS,
        tooltipText: f.Z.Messages.COMMUNICATORS_INFO,
        ...F(a.communicators, a.communicatorsChange, l)
      }), (0, n.jsx)(E.Z, {
        title: f.Z.Messages.WEEKLY_NEW_MEMBERS,
        ...F(a.newMembers, a.newMembersChange, l)
      }), (0, n.jsx)(E.Z, {
        title: f.Z.Messages.WEEKLY_NEW_MEMBER_RETENTION,
        tooltipText: f.Z.Messages.NEW_MEMBER_RETENTION_INFO,
        ...F(a.pctRetained, a.pctRetainedChange, l, !0)
      })]
    })
  }) : null;
  return (0, n.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: f.Z.Messages.SERVER_INSIGHTS,
    children: [(0, n.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      children: f.Z.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
    }), w(o, c), null != e ? (0, n.jsx)(V, {
      guildId: e
    }) : null, (0, n.jsxs)("div", {
      className: v.developerPortalCtaWrapper,
      children: [(0, n.jsx)("div", {
        className: v.placeholderImage
      }), (0, n.jsx)(u.Text, {
        className: v.developerPortalCtaText,
        variant: "text-sm/normal",
        children: f.Z.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
      }), (0, n.jsx)(H, {})]
    }), d]
  })
}