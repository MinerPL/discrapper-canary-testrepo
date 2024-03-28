"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  r = a("481060"),
  l = a("710845"),
  o = a("285952"),
  u = a("912454"),
  c = a("358085"),
  i = a("622999"),
  d = a("981631"),
  E = a("689938");

function p(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = new l.default("PaymentRequest");
class m extends s.Component {
  componentDidMount() {
    (0, i.getStripe)().then(e => {
      this.initPaymentRequest(e)
    })
  }
  render() {
    let {
      canMakePayment: e
    } = this.state;
    if (null == e) return (0, n.jsx)(r.Button, {
      submitting: !0,
      look: r.Button.Looks.FILLED
    });
    if (!1 === e) return (0, n.jsx)(r.Button, {
      disabled: !0,
      look: r.Button.Looks.FILLED,
      children: E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_UNSUPPORTED
    });
    let t = (0, c.isAndroidChrome)(),
      a = t ? E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GPAY : E.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GENERIC,
      s = t ? u.default.Types.G_PAY : u.default.Types.PAYMENT_REQUEST,
      {
        className: l,
        iconClassName: i
      } = this.props;
    return (0, n.jsx)(r.Button, {
      onClick: this.handleOnClick,
      className: l,
      children: (0, n.jsxs)(o.default, {
        align: o.default.Align.CENTER,
        children: [(0, n.jsx)(u.default, {
          className: i,
          type: s
        }), a]
      })
    }, d.PaymentSourceTypes.PAYMENT_REQUEST)
  }
  constructor(...e) {
    super(...e), p(this, "state", {}), p(this, "initPaymentRequest", async e => {
      if (null == e) return;
      let t = e.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: this.props.paymentLabel,
            amount: 0,
            pending: !0
          },
          requestPayerName: !0
        }),
        {
          onStripePaymentMethodReceived: a
        } = this.props;
      t.on("paymentmethod", e => {
        let {
          complete: t,
          paymentMethod: n
        } = e;
        a(n), t("success")
      }), t.on("cancel", () => {
        a(null)
      });
      let n = await t.canMakePayment();
      f.info("PaymentRequest availablity check", n), this.setState({
        canMakePayment: !!n,
        paymentRequest: t
      })
    }), p(this, "handleOnClick", () => {
      let {
        onChooseType: e
      } = this.props;
      e(d.PaymentSourceTypes.PAYMENT_REQUEST);
      let {
        paymentRequest: t
      } = this.state;
      null != t && t.show()
    })
  }
}
t.default = m