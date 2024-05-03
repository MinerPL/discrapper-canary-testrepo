"use strict";
s.r(t), s.d(t, {
  Cell: function() {
    return v
  },
  CurrencyAmountCell: function() {
    return G
  },
  SubscribersCell: function() {
    return b
  }
}), s("653041"), s("47120");
var a, l, n = s("735250"),
  i = s("470079"),
  r = s("120356"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("442837"),
  E = s("481060"),
  _ = s("766434"),
  I = s("151011"),
  T = s("441674"),
  S = s("696202"),
  f = s("41542"),
  m = s("964309"),
  N = s("692437"),
  g = s("937615"),
  h = s("289393"),
  C = s("264451"),
  R = s("759178"),
  x = s("462087"),
  L = s("685201"),
  O = s("981631"),
  A = s("198139"),
  p = s("689938"),
  M = s("99265");
(l = a || (a = {})).DROPDOWN = "dropdown", l.PERIOD = "period", l.SUBSCRIBERS = "subscribers", l.AMOUNT = "amount", l.STATUS = "status";
let D = (e, t, s, a) => {
    let l = null != a ? u()(a).add(15, "days").toISOString() : void 0,
      i = (0, C.formatNextPaymentDate)(l, "MMM D");
    switch (e) {
      case A.PaymentPayoutGroupStatuses.OPEN:
        return (0, n.jsxs)(n.Fragment, {
          children: [null != i ? p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: i
          }) : p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, n.jsx)(x.default, {
            className: M.statusScheduledIcon
          })]
        });
      case A.PaymentPayoutGroupStatuses.CANCELED:
        return (0, n.jsxs)(n.Fragment, {
          children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, n.jsx)(S.default, {
            className: M.statusErrorIcon
          })]
        });
      case A.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED:
        if ((null == s ? void 0 : s.includes(A.PaymentPayoutGroupDeferralReasons.PAYOUT_SEIZED)) === !0) return (0, n.jsxs)(n.Fragment, {
          children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, n.jsx)(S.default, {
            className: M.statusErrorIcon
          })]
        });
        return (0, n.jsxs)(n.Fragment, {
          children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, n.jsx)(L.default, {
            className: M.statusDeferredIcon
          })]
        })
    }
    switch (t) {
      case A.PayoutStatuses.MANUAL:
      case A.PayoutStatuses.OPEN:
      case A.PayoutStatuses.PENDING:
      case A.PayoutStatuses.PROCESSING:
      case A.PayoutStatuses.SUBMITTED:
      case A.PayoutStatuses.PENDING_FUNDS:
      case A.PayoutStatuses.CANCELED:
      case A.PayoutStatuses.ERROR:
        return (0, n.jsxs)(n.Fragment, {
          children: [null != i ? p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: i
          }) : p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, n.jsx)(x.default, {
            className: M.statusScheduledIcon
          })]
        });
      case A.PayoutStatuses.PAID:
        return (0, n.jsxs)(n.Fragment, {
          children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, n.jsx)(T.default, {
            className: M.statusPaidIcon
          })]
        });
      case A.PayoutStatuses.DEFERRED:
      case A.PayoutStatuses.DEFERRED_INTERNAL:
      case A.PayoutStatuses.REJECTED:
      case A.PayoutStatuses.RISK_REVIEW:
        return (0, n.jsxs)(n.Fragment, {
          children: [R.default.getStatusErrorText(t), (0, n.jsx)(S.default, {
            className: M.statusErrorIcon
          })]
        })
    }
    return null
  },
  v = e => {
    let {
      children: t,
      className: s
    } = e;
    return (0, n.jsx)("div", {
      className: o()(M.cell, s),
      children: t
    })
  },
  G = e => {
    let {
      children: t
    } = e;
    return (0, n.jsx)("div", {
      className: M.cell,
      children: (0, g.formatPrice)(null != t ? t : 0, O.CurrencyCodes.USD)
    })
  },
  j = e => {
    let {
      children: t
    } = e;
    return (0, n.jsx)(v, {
      className: M.statusCell,
      children: null != t ? t : "-"
    })
  },
  U = e => {
    let {
      children: t
    } = e;
    return (0, n.jsx)(v, {
      className: M.periodCell,
      children: u()(t).utc().format("MMMM YYYY")
    })
  },
  P = e => {
    var t;
    let {
      listingId: s
    } = e, a = (0, c.useStateFromStores)([h.default], () => h.default.getSubscriptionListing(s)), l = null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "[".concat(p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIER_DELETED, "]");
    return (0, n.jsx)(v, {
      children: l
    })
  },
  b = e => {
    let {
      children: t
    } = e;
    return (0, n.jsxs)(v, {
      className: M.subscribersCell,
      children: [null != t ? t : "-", " ", (0, n.jsx)(m.default, {
        className: M.subscribersIcon,
        "aria-hidden": !0
      })]
    })
  },
  B = () => {
    let e = (0, n.jsx)(E.Tooltip, {
      text: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
      children: e => (0, n.jsx)(f.default, {
        className: M.amountDisclaimer,
        ...e
      })
    });
    return (0, n.jsxs)(n.Fragment, {
      children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT, " ", e]
    })
  },
  y = () => {
    let e = (0, n.jsx)(E.Tooltip, {
      text: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
      children: e => (0, n.jsx)(f.default, {
        className: M.statusDisclaimer,
        ...e
      })
    });
    return (0, n.jsxs)(n.Fragment, {
      children: [p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, " ", e]
    })
  },
  F = [{
    key: "dropdown",
    cellClassName: M.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: s,
        onToggleExpandRow: a
      } = t, l = s.has(e.key);
      return (0, n.jsx)(E.Clickable, {
        className: o()(M.cell, M.toggleExpandCell),
        onClick: () => a(e.key),
        children: (0, n.jsx)(N.default, {
          className: o()(M.caretIcon, {
            [M.caretDownIcon]: l
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: M.periodColumn,
    renderHeader: () => p.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD,
    render(e, t) {
      let {
        expandedRows: s
      } = t, a = [(0, n.jsx)(U, {
        children: e.periodStartingAt
      }, e.key)];
      if (s.has(e.key))
        for (let t in e.ppgs) a.push((0, n.jsx)(P, {
          listingId: t
        }, t));
      return a
    }
  }, {
    key: "amount",
    cellClassName: o()(M.amountColumn, M.cellAlignRight),
    renderHeader: () => (0, n.jsx)(B, {}),
    render(e, t) {
      let {
        expandedRows: s
      } = t, a = [(0, n.jsx)(G, {
        children: e.amount
      }, e.key)];
      if (s.has(e.key))
        for (let t in e.ppgs) {
          let s = e.ppgs[t];
          a.push((0, n.jsx)(G, {
            children: null == s ? void 0 : s.amount
          }, t))
        }
      return a
    }
  }, {
    key: "status",
    cellClassName: o()(M.statusColumn, M.cellAlignRight),
    renderHeader: () => (0, n.jsx)(y, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: s,
        ppgDeferralReasons: a,
        periodEndDate: l
      } = (0, _.getStatusForPeriod)(e);
      return (0, n.jsx)(j, {
        children: D(t, s, a, l)
      })
    }
  }];
t.default = e => {
  let {
    payoutsByPeriod: t
  } = e, [s, a] = i.useState(new Set);
  return (0, n.jsx)("div", {
    className: M.tableContainer,
    children: (0, n.jsx)(I.default, {
      columns: F,
      data: t,
      className: M.table,
      rowClassName: M.row,
      headerClassName: M.header,
      cellProps: {
        onToggleExpandRow: e => {
          a(t => {
            let s = new Set(t);
            return s.has(e) ? s.delete(e) : s.add(e), s
          })
        },
        expandedRows: s
      }
    })
  })
}