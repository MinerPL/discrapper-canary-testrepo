"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  r = a("442837"),
  l = a("481060"),
  o = a("873115"),
  u = a("618541"),
  c = a("975060"),
  i = a("912454"),
  d = a("689938"),
  E = a("979616");
class p extends s.PureComponent {
  componentDidMount() {
    null != this.props.venmoClient && o.tokenizeVenmo()
  }
  componentWillUnmount() {
    o.teardownVenmo().then(() => o.createVenmoClient())
  }
  render() {
    let {
      venmoUsername: e,
      className: t,
      venmoClient: a
    } = this.props, s = null != e && "" !== e;
    return (0, n.jsxs)("div", {
      className: t,
      children: [(0, n.jsx)(i.default, {
        type: i.default.Types.VENMO,
        size: i.IconSizes.MEDIUM,
        className: E.venmoIcon
      }), s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: E.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
            venmoUsername: e
          })
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          className: E.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        className: E.connectionInstructions,
        children: null == a ? d.default.Messages.PAYMENT_SOURCE_VENMO_LOADING : d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
t.default = r.default.connectStores([u.default, c.default], () => ({
  venmoUsername: c.default.venmoUsername,
  venmoClient: u.default.getVenmoClient()
}))(p)