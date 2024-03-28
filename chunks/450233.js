"use strict";
s.r(t), s.d(t, {
  MessageStyles: function() {
    return l
  }
});
var a, i, r, n, l, o, u = s("735250"),
  d = s("470079"),
  c = s("442837"),
  _ = s("570140"),
  E = s("16084"),
  T = s("855775"),
  I = s("689938");
(a = l || (l = {})).SHORT = "SHORT", a.LONG = "LONG";
class R extends(o = d.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (t) {
      case "SHORT":
        return I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && _.default.wait(() => E.clearPurchaseError())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: s
    } = this.props;
    return null == t ? null : (0, u.jsx)("div", {
      className: e,
      children: this.getText(t, s)
    })
  }
}
n = {
  messageStyle: "LONG"
}, (r = "defaultProps") in(i = R) ? Object.defineProperty(i, r, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = n, t.default = c.default.connectStores([T.default], () => ({
  purchaseError: T.default.error
}))(R)