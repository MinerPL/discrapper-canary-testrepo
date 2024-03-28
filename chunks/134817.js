"use strict";
s.r(t);
var l = s("735250"),
  n = s("470079"),
  a = s("512722"),
  r = s.n(a),
  o = s("442837"),
  i = s("233787"),
  u = s("594174"),
  c = s("74538"),
  d = s("689938");
class f extends n.Component {
  render() {
    let {
      user: e,
      transitionState: t,
      onClose: s
    } = this.props;
    return (0, l.jsxs)(i.default, {
      transitionState: t,
      "aria-label": d.default.Messages.PREMIUM_REQUIRED,
      children: [(0, l.jsx)(i.default.Header, {
        onClose: () => s(!1),
        children: d.default.Messages.PREMIUM_REQUIRED
      }), (0, l.jsx)(i.default.Content, {
        type: i.default.Types.UPGRADE,
        children: c.default.isPremium(e) && !c.default.canInstallPremiumApplications(e) ? d.default.Messages.PREMIUM_UPGRADE_REQUIRED_BODY : d.default.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY
      }), (0, l.jsx)(i.default.Footer, {
        primary: {
          onClick: () => s(!0),
          label: d.default.Messages.PREMIUM_REQUIRED_GET_NITRO
        }
      })]
    })
  }
}
t.default = o.default.connectStores([u.default], () => {
  let e = u.default.getCurrentUser();
  return r()(null != e, "PremiumRequiredModal: user cannot be null"), {
    user: e
  }
})(f)