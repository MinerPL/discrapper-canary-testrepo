var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(594174),
  E = s(285952),
  u = s(418632),
  T = s(689938),
  I = s(619735);
class S extends a.Component {
  renderNotice() {
let {
  isClaimed: e,
  unclaimedNotice: t,
  unverifiedNotice: s
} = this.props;
return e ? null != s ? s : T.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT : null != t ? t : T.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT;
  }
  renderPrimaryAction() {
return this.props.isClaimed ? this.props.hasEmail ? (0, n.jsx)(E.Z.Child, {
  grow: 0,
  shrink: 0,
  children: (0, n.jsx)(u.Z, {})
}) : (0, n.jsx)(d.Button, {
  size: d.Button.Sizes.MEDIUM,
  color: d.Button.Colors.BRAND,
  onClick: this.openChangeEmailModal,
  children: T.Z.Messages.ADD_EMAIL_SHORT
}) : (0, n.jsx)(E.Z.Child, {
  grow: 0,
  shrink: 0,
  children: (0, n.jsx)(d.Button, {
    size: d.Button.Sizes.MEDIUM,
    color: d.Button.Colors.BRAND,
    onClick: this.openClaimAccountModal,
    children: T.Z.Messages.CLAIM_ACCOUNT
  })
});
  }
  renderSecondaryAction() {
return this.props.isClaimed && this.props.hasEmail ? (0, n.jsx)(E.Z.Child, {
  grow: 0,
  shrink: 0,
  children: (0, n.jsx)(d.Button, {
    color: d.Button.Colors.PRIMARY,
    look: d.Button.Looks.LINK,
    onClick: this.openChangeEmailModal,
    children: T.Z.Messages.CHANGE_EMAIL_SHORT
  })
}) : null;
  }
  openClaimAccountModal() {
(0, d.openModalLazy)(async () => {
  let {
    default: e
  } = await s.e('1677').then(s.bind(s, 324239));
  return t => (0, n.jsx)(e, {
    ...t
  });
});
  }
  openChangeEmailModal() {
(0, d.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    s.e('9343'),
    s.e('45863')
  ]).then(s.bind(s, 642298));
  return t => (0, n.jsx)(e, {
    ...t
  });
});
  }
  render() {
let {
  className: e,
  isClaimed: t,
  isVerified: s
} = this.props;
return t && s ? null : (0, n.jsx)(d.Card, {
  className: r()(I.wrapper, e),
  children: (0, n.jsxs)(E.Z, {
    align: E.Z.Align.CENTER,
    children: [
      (0, n.jsx)(E.Z.Child, {
        className: I.image,
        grow: 0,
        shrink: 0
      }),
      (0, n.jsxs)(E.Z.Child, {
        children: [
          (0, n.jsx)(d.Text, {
            variant: 'text-sm/normal',
            children: this.renderNotice()
          }),
          (0, n.jsxs)(E.Z, {
            justify: E.Z.Justify.CENTER,
            className: I.content,
            children: [
              this.renderPrimaryAction(),
              this.renderSecondaryAction()
            ]
          })
        ]
      })
    ]
  })
});
  }
}
t.Z = c.ZP.connectStores([_.default], () => {
  let e = _.default.getCurrentUser();
  return l()(null != e, 'EmailNotice: currentUser cannot be undefined'), {
isClaimed: e.isClaimed(),
isVerified: e.verified,
hasEmail: null != e.email
  };
})(S);