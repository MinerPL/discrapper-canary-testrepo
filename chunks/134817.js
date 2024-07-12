s.r(n);
var a = s(735250),
  c = s(470079),
  t = s(512722),
  i = s.n(t),
  l = s(442837),
  o = s(233787),
  r = s(594174),
  d = s(74538),
  u = s(689938);
class E extends c.Component {
  render() {
let {
  user: e,
  transitionState: n,
  onClose: s
} = this.props;
return (0, a.jsxs)(o.Z, {
  transitionState: n,
  'aria-label': u.Z.Messages.PREMIUM_REQUIRED,
  children: [
    (0, a.jsx)(o.Z.Header, {
      onClose: () => s(!1),
      children: u.Z.Messages.PREMIUM_REQUIRED
    }),
    (0, a.jsx)(o.Z.Content, {
      type: o.Z.Types.UPGRADE,
      children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.Z.Messages.PREMIUM_UPGRADE_REQUIRED_BODY : u.Z.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY
    }),
    (0, a.jsx)(o.Z.Footer, {
      primary: {
        onClick: () => s(!0),
        label: u.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
      }
    })
  ]
});
  }
}
n.default = l.ZP.connectStores([r.default], () => {
  let e = r.default.getCurrentUser();
  return i()(null != e, 'PremiumRequiredModal: user cannot be null'), {
user: e
  };
})(E);