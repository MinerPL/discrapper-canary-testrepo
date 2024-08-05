a.r(s);
var n = a(735250),
  t = a(470079),
  c = a(512722),
  i = a.n(c),
  l = a(442837),
  o = a(233787),
  r = a(594174),
  d = a(74538),
  u = a(689938);
class E extends t.Component {
  render() {
let {
  user: e,
  transitionState: s,
  onClose: a
} = this.props;
return (0, n.jsxs)(o.Z, {
  transitionState: s,
  'aria-label': u.Z.Messages.PREMIUM_REQUIRED,
  children: [
    (0, n.jsx)(o.Z.Header, {
      onClose: () => a(!1),
      children: u.Z.Messages.PREMIUM_REQUIRED
    }),
    (0, n.jsx)(o.Z.Content, {
      type: o.Z.Types.UPGRADE,
      children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.Z.Messages.PREMIUM_UPGRADE_REQUIRED_BODY : u.Z.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY
    }),
    (0, n.jsx)(o.Z.Footer, {
      primary: {
        onClick: () => a(!0),
        label: u.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
      }
    })
  ]
});
  }
}
s.default = l.ZP.connectStores([r.default], () => {
  let e = r.default.getCurrentUser();
  return i()(null != e, 'PremiumRequiredModal: user cannot be null'), {
user: e
  };
})(E);