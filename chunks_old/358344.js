"use strict";
t.r(r), t.d(r, {
  default: function() {
    return y
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("65597"),
  s = t("872717"),
  c = t("77078"),
  d = t("850068"),
  u = t("364735"),
  h = t("357957"),
  p = t("811199"),
  m = t("699412"),
  g = t("961295");
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

function y() {
  let [e, r] = n.useState("pm_card_us"), t = (0, l.useStateFromStores)([h.default], () => h.default.paymentSources), i = Object.values(t), u = async () => {
    let r = e;
    "" === r && (r = "pm_card_us"), await s.HTTP.post({
      url: "/debug/payment-source",
      body: {
        token: r
      }
    }), await (0, d.fetchPaymentSources)()
  }, y = async () => {
    await s.HTTP.del("/debug/payment-source"), await (0, d.fetchPaymentSources)()
  };
  return n.useEffect(() => {
    (0, d.fetchPaymentSources)()
  }, []), (0, a.jsx)(c.ScrollerThin, {
    className: o(m.panel),
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
          onClick: u,
          children: "Create Stripe Credit Card"
        }), i.length > 0 && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: y,
          children: "Delete All Payment Sources"
        })]
      }), (0, a.jsx)(c.Text, {
        style: {
          marginTop: "16px",
          marginBottom: "16px"
        },
        variant: "text-md/normal",
        children: "Existing Payment Sources"
      }), i.map(e => (0, a.jsx)(b, {
        paymentSource: e
      }, e.id))]
    })
  })
}

function b(e) {
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