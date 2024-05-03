"use strict";
r.r(t), r.d(t, {
  default: function() {
    return b
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("399606"),
  s = r("544891"),
  c = r("481060"),
  d = r("355467"),
  u = r("244526"),
  h = r("853872"),
  m = r("246992"),
  p = r("893048"),
  g = r("403466");
let f = [{
  label: "VISA",
  value: "pm_card_us"
}, {
  label: "Mastercard",
  value: "pm_card_mastercard"
}, {
  label: "Canadian Visa",
  value: "pm_card_ca"
}, {
  label: "Mexican Visa",
  value: "pm_card_mx"
}, {
  label: "German Visa",
  value: "pm_card_de"
}, {
  label: "Brazilian Visa",
  value: "pm_card_br"
}, {
  label: "UK Visa",
  value: "pm_card_gb"
}, {
  label: "Japanese Visa",
  value: "pm_card_jp"
}, {
  label: "Malaysia Visa",
  value: "pm_card_my"
}, {
  label: "Polish Visa",
  value: "pm_card_pl"
}];

function b() {
  let [e, t] = i.useState("pm_card_us"), r = Object.values((0, o.useStateFromStores)([h.default], () => h.default.paymentSources)), l = async () => {
    let t = e;
    "" === t && (t = "pm_card_us"), await s.HTTP.post({
      url: "/debug/payment-source",
      body: {
        token: t
      }
    }), await (0, d.fetchPaymentSources)()
  }, u = async () => {
    await s.HTTP.del("/debug/payment-source"), await (0, d.fetchPaymentSources)()
  };
  return i.useEffect(() => {
    (0, d.fetchPaymentSources)()
  }, []), (0, a.jsx)(c.ScrollerThin, {
    className: n()(p.panel),
    children: (0, a.jsxs)("div", {
      className: g.panelInner,
      children: [(0, a.jsxs)(c.Text, {
        style: {
          marginBottom: "16px"
        },
        variant: "text-lg/bold",
        children: [" ", "Manage Payment Sources", " "]
      }), (0, a.jsxs)("div", {
        className: g.buttons,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: " Card Type "
        }), (0, a.jsx)(c.Select, {
          serialize: e => e,
          isSelected: t => t === e,
          options: f,
          select: t,
          popoutLayerContext: m.devToolsLayerContext
        }), (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: l,
          children: "Create Stripe Credit Card"
        }), r.length > 0 && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: u,
          children: "Delete All Payment Sources"
        })]
      }), (0, a.jsx)(c.Text, {
        style: {
          marginTop: "16px",
          marginBottom: "16px"
        },
        variant: "text-md/normal",
        children: "Existing Payment Sources"
      }), r.map(e => (0, a.jsx)(y, {
        paymentSource: e
      }, e.id))]
    })
  })
}

function y(e) {
  let {
    paymentSource: t
  } = e;
  return (0, a.jsxs)("div", {
    className: g.inputRow,
    children: [(0, a.jsx)(u.default, {
      locale: "en-US",
      paymentSource: t,
      showDefaultLabel: !0,
      showPaymentSourceIcon: !0
    }, t.id), (0, a.jsx)("img", {
      alt: t.country,
      style: {
        marginRight: 5,
        height: 25
      },
      src: k(t.country)
    })]
  })
}
let x = ["AN", "MI", "TP"],
  k = e => {
    if (null == e) return "";
    if (x.includes(e)) return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
    let t = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
    return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(t, ".svg")
  }