"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("825055"),
  i = s("682864"),
  r = s("964309"),
  o = s("937615"),
  d = s("730647"),
  u = s("584825"),
  c = s("723047"),
  E = s("997519"),
  _ = s("146710"),
  I = s("146610"),
  T = s("8584"),
  S = s("791382"),
  f = s("277369"),
  m = s("215124"),
  N = s("981631"),
  g = s("689938"),
  h = s("809043");

function C(e) {
  let {
    payoutsByPeriod: t,
    team: s
  } = e, n = (0, c.useRoleSubscriptionSettingsDisabled)() ? null : g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: null != s ? N.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s.id) : null
  });
  return 0 === t.length ? (0, a.jsxs)(l.FormText, {
    type: l.FormText.Types.DESCRIPTION,
    children: [g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", n]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: [g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", n]
    }), (0, a.jsx)(i.default, {
      size: 16
    }), (0, a.jsx)(T.default, {
      payoutsByPeriod: t
    })]
  })
}

function R(e) {
  let {
    guildId: t,
    totalPayoutsForPeriod: s
  } = e, l = (0, u.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  });
  return null == s && 0 === l.length ? null : (0, a.jsx)(I.default, {
    totalPayoutsForPeriod: s,
    guildId: t,
    className: h.currentMonthEarningsTable
  })
}
let x = e => {
  var t, s;
  let {
    guildId: d,
    application: u
  } = e, {
    loading: I,
    team: T,
    currentPeriod: x,
    allPeriods: L,
    metrics: O
  } = (0, E.default)(d, u), A = (0, _.useRoleSubscriptionInsightsAccess)(d), p = (0, c.useRoleSubscriptionSettingsDisabled)();
  return I ? (0, a.jsx)(l.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [A && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.default, {
        children: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({
          insightsURL: N.MarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(d)
        })
      }), (0, a.jsx)(i.default, {
        size: 32
      })]
    }), (0, a.jsxs)(l.FormSection, {
      title: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
      className: h.formSection,
      children: [(0, a.jsx)(i.default, {
        size: 8
      }), (0, a.jsxs)("div", {
        className: h.metricsContainer,
        children: [(0, a.jsx)(S.default, {
          label: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, o.formatPrice)(null !== (t = O.revenue) && void 0 !== t ? t : 0, N.CurrencyCodes.USD),
          additionalContent: (0, a.jsx)(S.MetricTrend, {
            value: O.revenuePctChange,
            isPercent: !0
          })
        }), (0, a.jsx)(S.default, {
          label: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
          value: (0, a.jsxs)(a.Fragment, {
            children: [null !== (s = O.subscribers) && void 0 !== s ? s : "-", " ", (0, a.jsx)(r.default, {
              className: h.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, a.jsx)(S.MetricTrend, {
            value: O.subscriberChange
          })
        })]
      }), (0, a.jsx)(R, {
        guildId: d,
        totalPayoutsForPeriod: x
      })]
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      className: h.formSection,
      children: (0, a.jsx)(C, {
        payoutsByPeriod: L,
        team: T
      })
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: p,
      className: h.formSection,
      children: (0, a.jsx)(f.default, {
        guildId: d,
        application: u
      })
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: h.formSection,
      children: (0, a.jsx)(m.default, {
        guildId: d,
        allPeriods: L
      })
    })]
  })
};

function L(e) {
  return (0, a.jsx)(d.GroupListingsFetchContextProvider, {
    guildId: e.guildId,
    children: (0, a.jsx)(x, {
      ...e
    })
  })
}