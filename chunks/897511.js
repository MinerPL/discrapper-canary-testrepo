"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  },
  triggerBrowserDownload: function() {
    return I
  }
}), a("315314"), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var o = a("735250"),
  n = a("470079"),
  s = a("544891"),
  l = a("481060"),
  r = a("464179"),
  d = a("479531"),
  i = a("117938"),
  u = a("981631"),
  c = a("689938"),
  _ = a("121788");

function I(e, t) {
  let a = URL.createObjectURL(t),
    o = document.createElement("a");
  o.href = a, o.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(a)
}
async function y(e, t, a) {
  let o = u.Endpoints.BILLING_INVOICE_PDF,
    n = t ? {
      name: a.name,
      line_1: a.line1,
      line_2: a.line2,
      city: a.city,
      state: a.state,
      postal_code: a.postalCode,
      country: a.country
    } : null,
    l = await s.HTTP.post({
      url: o,
      body: {
        payment_id: e,
        billing_address_override: t ? n : null
      },
      oldFormErrors: !0,
      binary: !0
    });
  return I(e, l.body), !0
}

function N(e) {
  let {
    payment: t,
    paymentSource: a,
    ...s
  } = e, u = {
    name: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: "",
    country: a.country
  }, [I, N] = n.useState(u), [L, E] = n.useState(!1), [S, O] = n.useState(!1), [T, f] = n.useState(!1), [p, g] = n.useState("");
  async function m() {
    f(!0);
    try {
      await y(M, L, I)
    } catch (a) {
      var e;
      let t = JSON.parse(await a.body.text());
      g(null !== (e = new d.default({
        ...a,
        body: t
      }).getAnyErrorMessage()) && void 0 !== e ? e : c.default.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR)
    } finally {
      f(!1)
    }
  }
  let D = i.getOverrideBillingAddressLayout,
    M = t.id,
    h = (0, o.jsx)("div", {
      children: (0, o.jsx)(l.FormSwitch, {
        value: L,
        note: c.default.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
        onChange: E,
        children: c.default.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE
      })
    }),
    C = L ? (0, o.jsx)(r.default, {
      ...I,
      mode: r.default.Modes.CREATE,
      layout: D,
      onBillingAddressChange: function(e, t) {
        N(e), O(t)
      },
      error: null
    }) : null;
  return (0, o.jsxs)(l.ModalRoot, {
    className: _.modal,
    size: l.ModalSize.DYNAMIC,
    ...s,
    children: [(0, o.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: c.default.Messages.BILLING_DOWNLOAD_INVOICE
      })
    }), (0, o.jsxs)(l.ModalContent, {
      className: _.body,
      children: [h, C]
    }), (0, o.jsxs)(l.ModalFooter, {
      children: [(0, o.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.GREEN,
        disabled: L && !S,
        onClick: m,
        submitting: T,
        autoFocus: !0,
        children: c.default.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON
      }), (0, o.jsx)(l.Text, {
        color: "text-danger",
        className: _.error,
        variant: "text-sm/semibold",
        children: p
      })]
    })]
  })
}