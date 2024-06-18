"use strict";
t.d(s, {
  Z: function() {
    return L
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(825055),
  a = t(964309),
  r = t(937615),
  o = t(730647),
  c = t(584825),
  d = t(723047),
  u = t(997519),
  E = t(146710),
  _ = t(146610),
  I = t(8584),
  T = t(791382),
  N = t(277369),
  m = t(215124),
  S = t(981631),
  h = t(689938),
  g = t(91685);

function x(e) {
  let {
    payoutsByPeriod: s,
    team: t
  } = e, l = (0, d.mY)() ? null : h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: null != t ? S.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) : null
  });
  return 0 === s.length ? (0, n.jsxs)(i.FormText, {
    type: i.FormText.Types.DESCRIPTION,
    children: [h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", l]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.FormText, {
      type: i.FormText.Types.DESCRIPTION,
      children: [h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", l]
    }), (0, n.jsx)(i.Spacer, {
      size: 16
    }), (0, n.jsx)(I.ZP, {
      payoutsByPeriod: s
    })]
  })
}

function C(e) {
  let {
    guildId: s,
    totalPayoutsForPeriod: t
  } = e, i = (0, c.qi)(s, {
    includeSoftDeleted: !0
  });
  return null == t && 0 === i.length ? null : (0, n.jsx)(_.Z, {
    totalPayoutsForPeriod: t,
    guildId: s,
    className: g.currentMonthEarningsTable
  })
}
let R = e => {
  var s, t;
  let {
    guildId: o,
    application: c
  } = e, {
    loading: _,
    team: I,
    currentPeriod: R,
    allPeriods: L,
    metrics: O
  } = (0, u.Z)(o, c), A = (0, E.u)(o), p = (0, d.mY)();
  return _ ? (0, n.jsx)(i.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
    children: [A && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.Z, {
        children: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({
          insightsURL: S.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(o)
        })
      }), (0, n.jsx)(i.Spacer, {
        size: 32
      })]
    }), (0, n.jsxs)(i.FormSection, {
      title: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
      className: g.formSection,
      children: [(0, n.jsx)(i.Spacer, {
        size: 8
      }), (0, n.jsxs)("div", {
        className: g.metricsContainer,
        children: [(0, n.jsx)(T.Z, {
          label: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, r.T4)(null !== (s = O.revenue) && void 0 !== s ? s : 0, S.pKx.USD),
          additionalContent: (0, n.jsx)(T.H, {
            value: O.revenuePctChange,
            isPercent: !0
          })
        }), (0, n.jsx)(T.Z, {
          label: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
          value: (0, n.jsxs)(n.Fragment, {
            children: [null !== (t = O.subscribers) && void 0 !== t ? t : "-", " ", (0, n.jsx)(a.Z, {
              className: g.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, n.jsx)(T.H, {
            value: O.subscriberChange
          })
        })]
      }), (0, n.jsx)(C, {
        guildId: o,
        totalPayoutsForPeriod: R
      })]
    }), (0, n.jsx)(i.FormSection, {
      title: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      className: g.formSection,
      children: (0, n.jsx)(x, {
        payoutsByPeriod: L,
        team: I
      })
    }), (0, n.jsx)(i.FormSection, {
      title: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: p,
      className: g.formSection,
      children: (0, n.jsx)(N.Z, {
        guildId: o,
        application: c
      })
    }), (0, n.jsx)(i.FormSection, {
      title: h.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: g.formSection,
      children: (0, n.jsx)(m.Z, {
        guildId: o,
        allPeriods: L
      })
    })]
  })
};

function L(e) {
  return (0, n.jsx)(o.l, {
    guildId: e.guildId,
    children: (0, n.jsx)(R, {
      ...e
    })
  })
}