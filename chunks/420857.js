"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a, l, n = s("37983"),
  i = s("884691"),
  r = s("627445"),
  o = s.n(r),
  d = s("866227"),
  u = s.n(d),
  c = s("77078"),
  E = s("434014"),
  _ = s("488499"),
  I = s("860598"),
  T = s("445940"),
  S = s("578706"),
  f = s("381546"),
  m = s("68238"),
  N = s("717559"),
  g = s("207353"),
  h = s("215393"),
  C = s("397056"),
  R = s("782340"),
  x = s("189723");
(a = l || (l = {})).DROPDOWN = "DROPDOWN", a.PERIOD = "PERIOD", a.AMOUNT = "AMOUNT ", a.STATUS = "STATUS ";
let L = e => {
  let {
    dateUtc: t
  } = e;
  return (0, n.jsx)(c.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: u(t).utc().format("MMMM YYYY")
  })
};

function O(e) {
  let {
    item: t
  } = e, {
    ppgStatus: s,
    payoutStatus: a,
    ppgDeferralReasons: l,
    periodEndDate: i
  } = (0, N.getStatusForPeriod)(t), r = null != i ? u(i).add(15, "days").toISOString() : void 0, o = (0, E.formatNextPaymentDate)(r, "MMM D");
  switch (s) {
    case C.PaymentPayoutGroupStatuses.OPEN:
      return (0, n.jsxs)(n.Fragment, {
        children: [null != o ? R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, n.jsx)(I.default, {
          className: x.statusScheduledIcon
        })]
      });
    case C.PaymentPayoutGroupStatuses.CANCELED:
      return (0, n.jsxs)(n.Fragment, {
        children: [R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, n.jsx)(f.default, {
          className: x.statusErrorIcon
        })]
      });
    case C.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED:
      if ((null == l ? void 0 : l.includes(C.PaymentPayoutGroupDeferralReasons.PAYOUT_SEIZED)) === !0) return (0, n.jsxs)(n.Fragment, {
        children: [R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, n.jsx)(f.default, {
          className: x.statusErrorIcon
        })]
      });
      return (0, n.jsxs)(n.Fragment, {
        children: [R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, n.jsx)(T.default, {
          className: x.statusDeferredIcon
        })]
      })
  }
  switch (a) {
    case C.PayoutStatuses.MANUAL:
    case C.PayoutStatuses.OPEN:
    case C.PayoutStatuses.PENDING:
    case C.PayoutStatuses.PROCESSING:
    case C.PayoutStatuses.SUBMITTED:
    case C.PayoutStatuses.PENDING_FUNDS:
    case C.PayoutStatuses.CANCELED:
    case C.PayoutStatuses.ERROR:
      return (0, n.jsxs)(n.Fragment, {
        children: [null != o ? R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, n.jsx)(I.default, {
          className: x.statusScheduledIcon
        })]
      });
    case C.PayoutStatuses.PAID:
      return (0, n.jsxs)(n.Fragment, {
        children: [R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, n.jsx)(S.default, {
          className: x.statusPaidIcon
        })]
      });
    case C.PayoutStatuses.DEFERRED:
    case C.PayoutStatuses.DEFERRED_INTERNAL:
    case C.PayoutStatuses.REJECTED:
    case C.PayoutStatuses.RISK_REVIEW:
      return (0, n.jsxs)(n.Fragment, {
        children: [_.default.getStatusErrorText(a), (0, n.jsx)(f.default, {
          className: x.statusErrorIcon
        })]
      })
  }
  return null
}
let A = (0, g.createCurrencyAmountColumn)({
    key: "AMOUNT ",
    cellClassName: x.amountColumn,
    renderHeader() {
      let e = (0, n.jsx)(c.Tooltip, {
        text: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
        children: e => (0, n.jsx)(m.default, {
          className: x.amountDisclaimer,
          ...e
        })
      });
      return (0, n.jsxs)(g.HeaderCell, {
        children: [R.default.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE, e]
      })
    },
    getAmount: e => e.amount
  }),
  p = (0, h.createExpandableTableColumns)([(0, h.createExpandableColumn)({
    key: "PERIOD",
    cellClassName: x.periodColumn,
    renderHeader: () => (0, n.jsx)(g.HeaderCell, {
      children: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD
    }),
    renderContent: e => (0, n.jsx)(L, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, t) {
      o(null != t, "CellProps should always be provided");
      let {
        ListingIdLabel: s
      } = t;
      return (0, n.jsx)(s, {
        listingId: e.listingId
      })
    }
  }), (0, h.createExpandableColumn)({
    ...A,
    renderContent: A.render,
    renderExpandedContent: (e, t) => A.render(e, t)
  }), (0, g.createColumn)({
    key: "STATUS ",
    cellClassName: x.statusColumn,
    renderHeader() {
      let e = (0, n.jsx)(c.Tooltip, {
        text: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
        children: e => (0, n.jsx)(m.default, {
          className: x.statusDisclaimer,
          ...e
        })
      });
      return (0, n.jsxs)(g.HeaderCell, {
        children: [R.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, e]
      })
    },
    renderContent: e => (0, n.jsx)(g.Cell, {
      className: x.statusCell,
      children: (0, n.jsx)(O, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function M(e) {
  let {
    ListingIdLabel: t,
    payoutsByPeriod: s
  } = e, {
    cellProps: a,
    data: l
  } = (0, h.useExpandableRows)(s, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var s;
      return {
        key: e.key + t,
        listingId: t,
        amount: null === (s = e.ppgs[t]) || void 0 === s ? void 0 : s.amount
      }
    })
  }), r = i.useMemo(() => ({
    ListingIdLabel: t,
    ...a
  }), [a, t]);
  return (0, n.jsx)(g.default, {
    columns: p,
    data: l,
    cellProps: r
  })
}