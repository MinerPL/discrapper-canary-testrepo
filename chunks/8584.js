"use strict";
t.d(s, {
  av: function() {
    return P
  },
  bL: function() {
    return D
  },
  kA: function() {
    return Z
  }
}), t(653041), t(47120);
var n, i, l = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(913527),
  d = t.n(c),
  u = t(442837),
  E = t(481060),
  _ = t(766434),
  I = t(151011),
  T = t(441674),
  N = t(696202),
  m = t(41542),
  S = t(964309),
  h = t(692437),
  g = t(937615),
  x = t(289393),
  C = t(264451),
  R = t(759178),
  L = t(462087),
  O = t(685201),
  A = t(981631),
  p = t(198139),
  M = t(689938),
  f = t(225278);
(i = n || (n = {})).DROPDOWN = "dropdown", i.PERIOD = "period", i.SUBSCRIBERS = "subscribers", i.AMOUNT = "amount", i.STATUS = "status";
let v = (e, s, t, n) => {
    let i = null != n ? d()(n).add(15, "days").toISOString() : void 0,
      a = (0, C.Zo)(i, "MMM D");
    switch (e) {
      case p.x_.OPEN:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != a ? M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: a
          }) : M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(L.Z, {
            className: f.statusScheduledIcon
          })]
        });
      case p.x_.CANCELED:
        return (0, l.jsxs)(l.Fragment, {
          children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(N.Z, {
            className: f.statusErrorIcon
          })]
        });
      case p.x_.PAYOUT_DEFERRED:
        if ((null == t ? void 0 : t.includes(p.XL.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
          children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(N.Z, {
            className: f.statusErrorIcon
          })]
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(O.Z, {
            className: f.statusDeferredIcon
          })]
        })
    }
    switch (s) {
      case p.jw.MANUAL:
      case p.jw.OPEN:
      case p.jw.PENDING:
      case p.jw.PROCESSING:
      case p.jw.SUBMITTED:
      case p.jw.PENDING_FUNDS:
      case p.jw.CANCELED:
      case p.jw.ERROR:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != a ? M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: a
          }) : M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(L.Z, {
            className: f.statusScheduledIcon
          })]
        });
      case p.jw.PAID:
        return (0, l.jsxs)(l.Fragment, {
          children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(T.Z, {
            className: f.statusPaidIcon
          })]
        });
      case p.jw.DEFERRED:
      case p.jw.DEFERRED_INTERNAL:
      case p.jw.REJECTED:
      case p.jw.RISK_REVIEW:
        return (0, l.jsxs)(l.Fragment, {
          children: [R.Z.getStatusErrorText(s), (0, l.jsx)(N.Z, {
            className: f.statusErrorIcon
          })]
        })
    }
    return null
  },
  D = e => {
    let {
      children: s,
      className: t
    } = e;
    return (0, l.jsx)("div", {
      className: o()(f.cell, t),
      children: s
    })
  },
  Z = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)("div", {
      className: f.cell,
      children: (0, g.T4)(null != s ? s : 0, A.pKx.USD)
    })
  },
  j = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)(D, {
      className: f.statusCell,
      children: null != s ? s : "-"
    })
  },
  U = e => {
    let {
      children: s
    } = e;
    return (0, l.jsx)(D, {
      className: f.periodCell,
      children: d()(s).utc().format("MMMM YYYY")
    })
  },
  G = e => {
    var s;
    let {
      listingId: t
    } = e, n = (0, u.e7)([x.Z], () => x.Z.getSubscriptionListing(t)), i = null !== (s = null == n ? void 0 : n.name) && void 0 !== s ? s : "[".concat(M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIER_DELETED, "]");
    return (0, l.jsx)(D, {
      children: i
    })
  },
  P = e => {
    let {
      children: s
    } = e;
    return (0, l.jsxs)(D, {
      className: f.subscribersCell,
      children: [null != s ? s : "-", " ", (0, l.jsx)(S.Z, {
        className: f.subscribersIcon,
        "aria-hidden": !0
      })]
    })
  },
  b = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
      children: e => (0, l.jsx)(m.Z, {
        className: f.amountDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT, " ", e]
    })
  },
  B = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
      children: e => (0, l.jsx)(m.Z, {
        className: f.statusDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, " ", e]
    })
  },
  y = [{
    key: "dropdown",
    cellClassName: f.toggleExpandColumn,
    renderHeader: () => null,
    render(e, s) {
      let {
        expandedRows: t,
        onToggleExpandRow: n
      } = s, i = t.has(e.key);
      return (0, l.jsx)(E.Clickable, {
        className: o()(f.cell, f.toggleExpandCell),
        onClick: () => n(e.key),
        children: (0, l.jsx)(h.Z, {
          className: o()(f.caretIcon, {
            [f.caretDownIcon]: i
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: f.periodColumn,
    renderHeader: () => M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD,
    render(e, s) {
      let {
        expandedRows: t
      } = s, n = [(0, l.jsx)(U, {
        children: e.periodStartingAt
      }, e.key)];
      if (t.has(e.key))
        for (let s in e.ppgs) n.push((0, l.jsx)(G, {
          listingId: s
        }, s));
      return n
    }
  }, {
    key: "amount",
    cellClassName: o()(f.amountColumn, f.cellAlignRight),
    renderHeader: () => (0, l.jsx)(b, {}),
    render(e, s) {
      let {
        expandedRows: t
      } = s, n = [(0, l.jsx)(Z, {
        children: e.amount
      }, e.key)];
      if (t.has(e.key))
        for (let s in e.ppgs) {
          let t = e.ppgs[s];
          n.push((0, l.jsx)(Z, {
            children: null == t ? void 0 : t.amount
          }, s))
        }
      return n
    }
  }, {
    key: "status",
    cellClassName: o()(f.statusColumn, f.cellAlignRight),
    renderHeader: () => (0, l.jsx)(B, {}),
    render(e) {
      let {
        ppgStatus: s,
        payoutStatus: t,
        ppgDeferralReasons: n,
        periodEndDate: i
      } = (0, _.j0)(e);
      return (0, l.jsx)(j, {
        children: v(s, t, n, i)
      })
    }
  }];
s.ZP = e => {
  let {
    payoutsByPeriod: s
  } = e, [t, n] = a.useState(new Set);
  return (0, l.jsx)("div", {
    className: f.tableContainer,
    children: (0, l.jsx)(I.Z, {
      columns: y,
      data: s,
      className: f.table,
      rowClassName: f.row,
      headerClassName: f.header,
      cellProps: {
        onToggleExpandRow: e => {
          n(s => {
            let t = new Set(s);
            return t.has(e) ? t.delete(e) : t.add(e), t
          })
        },
        expandedRows: t
      }
    })
  })
}