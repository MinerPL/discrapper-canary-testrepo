"use strict";
let i;
n.d(t, {
  az: function() {
    return c
  },
  d2: function() {
    return d
  },
  eH: function() {
    return _
  },
  oe: function() {
    return E
  }
}), n(47120);
var r, s, o = n(657610),
  a = n(544891),
  l = n(981631);
(s = r || (r = {})).REQUIRES_PAYMENT_METHOD = "requires_payment_method", s.REQUIRES_CONFIRMATION = "requires_confirmation", s.REQUIRES_ACTION = "requires_action", s.PROCESSING = "processing", s.CANCELED = "canceled", s.SUCCEEDED = "succeeded";
let u = e => {
    let t = t => "You passed an invalid expiration date ".concat(e) + "".concat(null != t ? t : "") + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
      n = e.split(/[.\-/\s]+/g);
    2 !== n.length && t();
    let i = n.map(e => {
        let i = parseInt(e);
        return isNaN(i) && t("".concat(n, " is not a number.")), i < 1 && t("".concat(i, " is less than one.")), i
      }),
      [r, s] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
    return r > 12 && t("Month must be a number 1-12, not ".concat(r, ".")), s < 100 && (s += 2e3), [r, s]
  },
  _ = e => {
    let t, n;
    try {
      [t, n] = u(e)
    } catch (e) {
      return !1
    }
    let i = new Date(n, t),
      r = new Date;
    return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r
  };

function d() {
  return null != i ? Promise.resolve(i) : (0, o.loadStripe)(l.Ai1.STRIPE.KEY).then(e => (i = e, e))
}

function c(e) {
  var t, n, i, r, s, o, a, l;
  let {
    billing_details: u
  } = e, _ = null !== (t = u.address) && void 0 !== t ? t : {}, d = {
    name: null !== (n = u.name) && void 0 !== n ? n : "",
    line1: null !== (i = _.line1) && void 0 !== i ? i : "",
    line2: null !== (r = _.line2) && void 0 !== r ? r : "",
    city: null !== (s = _.city) && void 0 !== s ? s : "",
    state: null !== (o = _.state) && void 0 !== o ? o : "",
    country: null !== (a = _.country) && void 0 !== a ? a : "",
    postalCode: null !== (l = _.postal_code) && void 0 !== l ? l : ""
  };
  return {
    token: e.id,
    billingAddressInfo: d
  }
}
async function E(e) {
  try {
    let {
      stripe_payment_intent_client_secret: t
    } = (await a.tn.get({
      url: l.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
      oldFormErrors: !0
    })).body, n = await d();
    if (null == n) return {
      error: "unable to load stripe"
    };
    let {
      error: i,
      paymentIntent: r
    } = await n.retrievePaymentIntent(t);
    if (null != i) return {
      error: i.message
    };
    if (null == r) return {
      error: "payment intent does not exist"
    };
    let s = {};
    switch ("requires_payment_method" === r.status && null != r.last_payment_error && null != r.last_payment_error.payment_method && (s.payment_method = r.last_payment_error.payment_method.id), r.status) {
      case "requires_payment_method":
      case "requires_confirmation":
      case "requires_action":
        let {
          error: o
        } = await n.confirmCardPayment(t, s);
        if (null != o) return {
          error: o.message
        };
        return {};
      case "succeeded":
      case "processing":
        return {};
      default:
        return {
          error: "Invalid Payment Intent status: ".concat(r.status)
        }
    }
  } catch (e) {
    return {
      error: e.message
    }
  }
}