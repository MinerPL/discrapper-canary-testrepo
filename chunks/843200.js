"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("594174"),
  S = s("285952"),
  E = s("418632"),
  T = s("689938"),
  _ = s("193661");
class f extends n.Component {
  renderNotice() {
    let {
      isClaimed: e,
      unclaimedNotice: t,
      unverifiedNotice: s
    } = this.props;
    return e ? null != s ? s : T.default.Messages.NOTICE_UNVERIFIED_ACCOUNT : null != t ? t : T.default.Messages.NOTICE_UNCLAIMED_ACCOUNT
  }
  renderPrimaryAction() {
    return this.props.isClaimed ? this.props.hasEmail ? (0, a.jsx)(S.default.Child, {
      grow: 0,
      shrink: 0,
      children: (0, a.jsx)(E.default, {})
    }) : (0, a.jsx)(u.Button, {
      size: u.Button.Sizes.MEDIUM,
      color: u.Button.Colors.BRAND,
      onClick: this.openChangeEmailModal,
      children: T.default.Messages.ADD_EMAIL_SHORT
    }) : (0, a.jsx)(S.default.Child, {
      grow: 0,
      shrink: 0,
      children: (0, a.jsx)(u.Button, {
        size: u.Button.Sizes.MEDIUM,
        color: u.Button.Colors.BRAND,
        onClick: this.openClaimAccountModal,
        children: T.default.Messages.CLAIM_ACCOUNT
      })
    })
  }
  renderSecondaryAction() {
    return this.props.isClaimed && this.props.hasEmail ? (0, a.jsx)(S.default.Child, {
      grow: 0,
      shrink: 0,
      children: (0, a.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        onClick: this.openChangeEmailModal,
        children: T.default.Messages.CHANGE_EMAIL_SHORT
      })
    }) : null
  }
  openClaimAccountModal() {
    (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("31093")]).then(s.bind(s, "324239"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }
  openChangeEmailModal() {
    (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("9343")]).then(s.bind(s, "642298"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }
  render() {
    let {
      className: e,
      isClaimed: t,
      isVerified: s
    } = this.props;
    return t && s ? null : (0, a.jsx)(u.Card, {
      className: i()(_.wrapper, e),
      children: (0, a.jsxs)(S.default, {
        align: S.default.Align.CENTER,
        children: [(0, a.jsx)(S.default.Child, {
          className: _.image,
          grow: 0,
          shrink: 0
        }), (0, a.jsxs)(S.default.Child, {
          children: [(0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: this.renderNotice()
          }), (0, a.jsxs)(S.default, {
            justify: S.default.Justify.CENTER,
            className: _.content,
            children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
          })]
        })]
      })
    })
  }
}
t.default = d.default.connectStores([c.default], () => {
  let e = c.default.getCurrentUser();
  return o()(null != e, "EmailNotice: currentUser cannot be undefined"), {
    isClaimed: e.isClaimed(),
    isVerified: e.verified,
    hasEmail: null != e.email
  }
})(f)