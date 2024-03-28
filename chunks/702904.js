"use strict";
t.r(r), t.d(r, {
  default: function() {
    return b
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("399606"),
  s = t("544891"),
  c = t("481060"),
  d = t("355467"),
  u = t("244526"),
  h = t("853872"),
  p = t("246992"),
  m = t("779869"),
  g = t("534477");
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
  let [e, r] = n.useState("pm_card_us"), t = Object.values((0, l.useStateFromStores)([h.default], () => h.default.paymentSources)), i = async () => {
    let r = e;
    "" === r && (r = "pm_card_us"), await s.HTTP.post({
      url: "/debug/payment-source",
      body: {
        token: r
      }
    }), await (0, d.fetchPaymentSources)()
  }, u = async () => {
    await s.HTTP.del("/debug/payment-source"), await (0, d.fetchPaymentSources)()
  };
  return n.useEffect(() => {
    (0, d.fetchPaymentSources)()
  }, []), (0, a.jsx)(c.ScrollerThin, {
    className: o()(m.panel),
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
          isSelected: r => r === e,
          options: f,
          select: r,
          popoutLayerContext: p.devToolsLayerContext
        }), (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: i,
          children: "Create Stripe Credit Card"
        }), t.length > 0 && (0, a.jsx)(c.Button, {
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
      }), t.map(e => (0, a.jsx)(y, {
        paymentSource: e
      }, e.id))]
    })
  })
}

function y(e) {
  let {
    paymentSource: r
  } = e;
  return (0, a.jsxs)("div", {
    className: g.inputRow,
    children: [(0, a.jsx)(u.default, {
      locale: "en-US",
      paymentSource: r
    }, r.id), (0, a.jsx)("img", {
      alt: r.country,
      style: {
        marginRight: 5,
        height: 25
      },
      src: k(r.country)
    })]
  })
}
let x = ["AN", "MI", "TP"],
  k = e => {
    if (null == e) return "";
    if (x.includes(e)) return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
    let r = e.toUpperCase().split("").map(e => (127397 + e.charCodeAt(0)).toString(16)).join("-");
    return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(r, ".svg")
  }