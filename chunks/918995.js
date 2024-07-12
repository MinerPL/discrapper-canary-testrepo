s.r(n), s(47120);
var a = s(735250),
  c = s(470079),
  t = s(481060),
  i = s(233787),
  l = s(689938);

function o(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = s, e;
}
class r extends c.Component {
  render() {
let {
  transitionState: e
} = this.props;
return (0, a.jsxs)(i.Z, {
  transitionState: e,
  'aria-label': l.Z.Messages.PREMIUM_NOT_CLAIMED,
  children: [
    (0, a.jsx)(i.Z.Header, {
      children: l.Z.Messages.PREMIUM_NOT_CLAIMED
    }),
    (0, a.jsx)(i.Z.Content, {
      type: i.Z.Types.UNCLAIMED,
      children: l.Z.Messages.PREMIUM_NOT_CLAIMED_BODY
    }),
    (0, a.jsx)(i.Z.Footer, {
      secondary: {
        onClick: this.cancel,
        label: l.Z.Messages.NEVERMIND
      },
      primary: {
        onClick: this.claimAccount,
        label: l.Z.Messages.CLAIM_ACCOUNT
      }
    })
  ]
});
  }
  constructor(...e) {
super(...e), o(this, 'cancel', () => {
  let {
    onClose: e
  } = this.props;
  null == e || e();
}), o(this, 'claimAccount', () => {
  let {
    onClose: e
  } = this.props;
  null == e || e(), (0, t.openModalLazy)(async () => {
    let {
      default: e
    } = await s.e('60827').then(s.bind(s, 324239));
    return n => (0, a.jsx)(e, {
      ...n
    });
  });
});
  }
}
n.default = r;