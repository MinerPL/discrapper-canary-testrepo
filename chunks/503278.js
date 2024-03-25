"use strict";
s.r(t), s.d(t, {
  MessageStyles: function() {
    return r
  },
  default: function() {
    return E
  }
});
var a, r, i = s("37983"),
  n = s("884691"),
  l = s("446674"),
  o = s("913144"),
  u = s("465527"),
  d = s("622839"),
  c = s("782340");
(a = r || (r = {})).SHORT = "SHORT", a.LONG = "LONG";
class _ extends n.PureComponent {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (t) {
      case "SHORT":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && o.default.wait(() => u.clearPurchaseError())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: s
    } = this.props;
    return null == t ? null : (0, i.jsx)("div", {
      className: e,
      children: this.getText(t, s)
    })
  }
}
_.defaultProps = {
  messageStyle: "LONG"
};
var E = l.default.connectStores([d.default], () => ({
  purchaseError: d.default.error
}))(_)