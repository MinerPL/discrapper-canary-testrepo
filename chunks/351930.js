"use strict";
t.r(r), t.d(r, {
  default: function() {
    return k
  }
}), t("47120"), t("411104");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("399606"),
  s = t("544891"),
  c = t("481060"),
  d = t("355467"),
  u = t("78839"),
  h = t("246992"),
  p = t("981631"),
  m = t("779869"),
  g = t("534477");
let f = [{
    label: "Nitro Monthly",
    value: "511651880837840896"
  }, {
    label: "Nitro Yearly",
    value: "511651885459963904"
  }, {
    label: "Nitro Classic Monthly",
    value: "511651871736201216"
  }, {
    label: "Nitro Classic Yearly",
    value: "511651876987469824"
  }, {
    label: "Basic Monthly",
    value: "978380692553465866"
  }, {
    label: "Basic Yearly",
    value: "1024422698568122368"
  }],
  b = {
    [p.SubscriptionStatusTypes.UNPAID]: "Unpaid",
    [p.SubscriptionStatusTypes.ACTIVE]: "Active",
    [p.SubscriptionStatusTypes.PAST_DUE]: "Past Due",
    [p.SubscriptionStatusTypes.CANCELED]: "Canceled",
    [p.SubscriptionStatusTypes.ENDED]: "Ended",
    [p.SubscriptionStatusTypes.ACCOUNT_HOLD]: "Account Hold",
    [p.SubscriptionStatusTypes.BILLING_RETRY]: "Billing Retry",
    [p.SubscriptionStatusTypes.PAUSED]: "Paused",
    [p.SubscriptionStatusTypes.PAUSE_PENDING]: "Pause Pending"
  },
  y = [{
    label: "Unpaid",
    value: p.SubscriptionStatusTypes.UNPAID
  }, {
    label: "Active",
    value: p.SubscriptionStatusTypes.ACTIVE
  }, {
    label: "Past Due",
    value: p.SubscriptionStatusTypes.PAST_DUE
  }, {
    label: "Canceled",
    value: p.SubscriptionStatusTypes.CANCELED
  }, {
    label: "Ended",
    value: p.SubscriptionStatusTypes.ENDED
  }, {
    label: "Account Hold",
    value: p.SubscriptionStatusTypes.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: p.SubscriptionStatusTypes.BILLING_RETRY
  }, {
    label: "Paused",
    value: p.SubscriptionStatusTypes.PAUSED
  }, {
    label: "Pause Pending",
    value: p.SubscriptionStatusTypes.PAUSE_PENDING
  }],
  x = {
    "511651880837840896": "Nitro Monthly",
    "511651885459963904": "Nitro Yearly",
    "511651871736201216": "Nitro Classic Monthly",
    "511651876987469824": "Nitro Classic Yearly",
    "978380692553465866": "Basic Monthly",
    "1024422698568122368": "Basic Yearly"
  };

function k() {
  let [e, r] = n.useState("511651880837840896"), t = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumSubscription()), i = async () => {
    await s.HTTP.post({
      url: "/debug/subscription",
      body: {
        plan_id: e
      }
    }), await (0, d.fetchSubscriptions)()
  }, p = async () => {
    await s.HTTP.del("/debug/subscription"), await (0, d.fetchSubscriptions)()
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: o()(m.panel),
    children: (0, a.jsxs)("div", {
      className: g.panelInner,
      children: [(0, a.jsx)(c.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: "Manage Subscription"
      }), (0, a.jsxs)("section", {
        className: g.buttons,
        children: [null == t && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: " Subscription Type"
          }), (0, a.jsx)(c.Select, {
            serialize: e => e,
            isSelected: r => r === e,
            options: f,
            select: r,
            popoutLayerContext: h.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: i,
            children: "Create Subscription"
          })]
        }), (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: p,
          children: "Delete Subscription"
        })]
      }), null != t && (0, a.jsx)(v, {
        subscription: t
      })]
    })
  })
}

function v(e) {
  let {
    subscription: r
  } = e, t = e => {
    if (null == e && (e = r.status), e in b) return b[e];
    throw Error("Unknown status")
  }, n = async e => {
    await s.HTTP.patch({
      url: "/debug/subscription",
      body: {
        subscription_status: e
      }
    })
  }, i = r.planIdFromItems in {
    "978380692553465866": !0,
    "1024422698568122368": !0
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Text, {
      style: {
        marginTop: "15px"
      },
      variant: "text-md/normal",
      children: "Existing Subscription"
    }), (0, a.jsxs)("div", {
      className: o()(g.card, i ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
      children: [(0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: [" Subscription Type: ", (() => {
          let e = r.planIdFromItems;
          if (null == e) throw Error("No plan id");
          if (e in x) return x[e];
          throw Error("Unknown plan id")
        })(), " "]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: [" Subscription ID ", r.id, " "]
      }), (0, a.jsxs)(c.Text, {
        style: {
          marginBottom: "15px"
        },
        variant: "text-md/normal",
        children: ["Subscription Status: ", t()]
      }), (0, a.jsx)(c.Select, {
        serialize: e => t(e),
        isSelected: e => e === r.status,
        options: y,
        select: n,
        popoutLayerContext: h.devToolsLayerContext
      })]
    })]
  })
}