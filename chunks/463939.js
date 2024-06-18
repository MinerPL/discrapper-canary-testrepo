"use strict";
t.d(s, {
  Z: function() {
    return f
  }
});
var n, i, l = t(735250),
  a = t(470079),
  r = t(512722),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(481060),
  E = t(264451),
  _ = t(759178),
  I = t(462087),
  T = t(685201),
  N = t(441674),
  m = t(696202),
  S = t(41542),
  h = t(766434),
  g = t(755930),
  x = t(334820),
  C = t(198139),
  R = t(689938),
  L = t(501575);
(n = i || (i = {})).DROPDOWN = "DROPDOWN", n.PERIOD = "PERIOD", n.AMOUNT = "AMOUNT ", n.STATUS = "STATUS ";
let O = e => {
  let {
    dateUtc: s
  } = e;
  return (0, l.jsx)(u.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: d()(s).utc().format("MMMM YYYY")
  })
};

function A(e) {
  let {
    item: s
  } = e, {
    ppgStatus: t,
    payoutStatus: n,
    ppgDeferralReasons: i,
    periodEndDate: a
  } = (0, h.j0)(s), r = null != a ? d()(a).add(15, "days").toISOString() : void 0, o = (0, E.Zo)(r, "MMM D");
  switch (t) {
    case C.x_.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(I.Z, {
          className: L.statusScheduledIcon
        })]
      });
    case C.x_.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(m.Z, {
          className: L.statusErrorIcon
        })]
      });
    case C.x_.PAYOUT_DEFERRED:
      if ((null == i ? void 0 : i.includes(C.XL.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
        children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(m.Z, {
          className: L.statusErrorIcon
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(T.Z, {
          className: L.statusDeferredIcon
        })]
      })
  }
  switch (n) {
    case C.jw.MANUAL:
    case C.jw.OPEN:
    case C.jw.PENDING:
    case C.jw.PROCESSING:
    case C.jw.SUBMITTED:
    case C.jw.PENDING_FUNDS:
    case C.jw.CANCELED:
    case C.jw.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
          payoutDate: o
        }) : R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(I.Z, {
          className: L.statusScheduledIcon
        })]
      });
    case C.jw.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(N.Z, {
          className: L.statusPaidIcon
        })]
      });
    case C.jw.DEFERRED:
    case C.jw.DEFERRED_INTERNAL:
    case C.jw.REJECTED:
    case C.jw.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [_.Z.getStatusErrorText(n), (0, l.jsx)(m.Z, {
          className: L.statusErrorIcon
        })]
      })
  }
  return null
}
let p = (0, g.i$)({
    key: "AMOUNT ",
    cellClassName: L.amountColumn,
    renderHeader() {
      let e = (0, l.jsx)(u.Tooltip, {
        text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
        children: e => (0, l.jsx)(S.Z, {
          className: L.amountDisclaimer,
          ...e
        })
      });
      return (0, l.jsxs)(g.qN, {
        children: [R.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE, e]
      })
    },
    getAmount: e => e.amount
  }),
  M = (0, x.rM)([(0, x.Fd)({
    key: "PERIOD",
    cellClassName: L.periodColumn,
    renderHeader: () => (0, l.jsx)(g.qN, {
      children: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD
    }),
    renderContent: e => (0, l.jsx)(O, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, s) {
      o()(null != s, "CellProps should always be provided");
      let {
        ListingIdLabel: t
      } = s;
      return (0, l.jsx)(t, {
        listingId: e.listingId
      })
    }
  }), (0, x.Fd)({
    ...p,
    renderContent: p.render,
    renderExpandedContent: (e, s) => p.render(e, s)
  }), (0, g.wy)({
    key: "STATUS ",
    cellClassName: L.statusColumn,
    renderHeader() {
      let e = (0, l.jsx)(u.Tooltip, {
        text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
        children: e => (0, l.jsx)(S.Z, {
          className: L.statusDisclaimer,
          ...e
        })
      });
      return (0, l.jsxs)(g.qN, {
        children: [R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, e]
      })
    },
    renderContent: e => (0, l.jsx)(g.bL, {
      className: L.statusCell,
      children: (0, l.jsx)(A, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function f(e) {
  let {
    ListingIdLabel: s,
    payoutsByPeriod: t
  } = e, {
    cellProps: n,
    data: i
  } = (0, x.GN)(t, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(s => {
      var t;
      return {
        key: e.key + s,
        listingId: s,
        amount: null === (t = e.ppgs[s]) || void 0 === t ? void 0 : t.amount
      }
    })
  }), r = a.useMemo(() => ({
    ListingIdLabel: s,
    ...n
  }), [n, s]);
  return (0, l.jsx)(g.ZP, {
    columns: M,
    data: i,
    cellProps: r
  })
}