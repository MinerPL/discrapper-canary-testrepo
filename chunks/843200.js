var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(600164),
    E = t(594174),
    u = t(418632),
    I = t(689938),
    T = t(116536);
class S extends a.Component {
    renderNotice() {
        let { isClaimed: e, unclaimedNotice: s, unverifiedNotice: t } = this.props;
        return e ? (null != t ? t : I.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT) : null != s ? s : I.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT;
    }
    renderPrimaryAction() {
        return this.props.isClaimed
            ? this.props.hasEmail
                ? (0, n.jsx)(_.Z.Child, {
                      grow: 0,
                      shrink: 0,
                      children: (0, n.jsx)(u.Z, {})
                  })
                : (0, n.jsx)(d.Button, {
                      size: d.Button.Sizes.MEDIUM,
                      color: d.Button.Colors.BRAND,
                      onClick: this.openChangeEmailModal,
                      children: I.Z.Messages.ADD_EMAIL_SHORT
                  })
            : (0, n.jsx)(_.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, n.jsx)(d.Button, {
                      size: d.Button.Sizes.MEDIUM,
                      color: d.Button.Colors.BRAND,
                      onClick: this.openClaimAccountModal,
                      children: I.Z.Messages.CLAIM_ACCOUNT
                  })
              });
    }
    renderSecondaryAction() {
        return this.props.isClaimed && this.props.hasEmail
            ? (0, n.jsx)(_.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, n.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      look: d.Button.Looks.LINK,
                      onClick: this.openChangeEmailModal,
                      children: I.Z.Messages.CHANGE_EMAIL_SHORT
                  })
              })
            : null;
    }
    openClaimAccountModal() {
        (0, d.openModalLazy)(async () => {
            let { default: e } = await t.e('1677').then(t.bind(t, 324239));
            return (s) => (0, n.jsx)(e, { ...s });
        });
    }
    openChangeEmailModal() {
        (0, d.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
            return (s) => (0, n.jsx)(e, { ...s });
        });
    }
    render() {
        let { className: e, isClaimed: s, isVerified: t } = this.props;
        return s && t
            ? null
            : (0, n.jsx)(d.Card, {
                  className: r()(T.wrapper, e),
                  children: (0, n.jsxs)(_.Z, {
                      align: _.Z.Align.CENTER,
                      children: [
                          (0, n.jsx)(_.Z.Child, {
                              className: T.image,
                              grow: 0,
                              shrink: 0
                          }),
                          (0, n.jsxs)(_.Z.Child, {
                              children: [
                                  (0, n.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: this.renderNotice()
                                  }),
                                  (0, n.jsxs)(_.Z, {
                                      justify: _.Z.Justify.CENTER,
                                      className: T.content,
                                      children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                                  })
                              ]
                          })
                      ]
                  })
              });
    }
}
s.Z = c.ZP.connectStores([E.default], () => {
    let e = E.default.getCurrentUser();
    return (
        l()(null != e, 'EmailNotice: currentUser cannot be undefined'),
        {
            isClaimed: e.isClaimed(),
            isVerified: e.verified,
            hasEmail: null != e.email
        }
    );
})(S);
