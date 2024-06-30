s(47120);
var n, a = s(735250), i = s(470079), r = s(512722), o = s.n(r), l = s(442837), c = s(481060), d = s(893776), _ = s(468026), E = s(594174), u = s(689938);
function T(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class I extends (n = i.Component) {
    render() {
        let {
            color: e,
            look: t,
            size: s
        } = this.props;
        return (0, a.jsx)(c.Button, {
            look: t,
            size: s,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: u.Z.Messages.RESEND_VERIFICATION_EMAIL
        });
    }
    constructor(...e) {
        super(...e), T(this, 'state', { isSendingVerificationEmail: !1 }), T(this, 'handleResendVerification', () => {
            let {
                currentUser: e,
                onClick: t
            } = this.props;
            null == t || t(), this.setState({ isSendingVerificationEmail: !0 }, () => {
                d.Z.verifyResend().then(() => (0, c.openModal)(t => (0, a.jsx)(c.ConfirmModal, {
                    header: u.Z.Messages.VERIFICATION_EMAIL_TITLE,
                    confirmText: u.Z.Messages.OKAY,
                    confirmButtonColor: c.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: u.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: e.email })
                    })
                }))).catch(e => {
                    let {body: t} = e, s = u.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                    null != t && t.email && (s = t.email), (0, c.openModal)(e => (0, a.jsx)(_.default, {
                        title: u.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                        body: s,
                        ...e
                    }));
                }).then(() => this.setState({ isSendingVerificationEmail: !1 }));
            });
        });
    }
}
T(I, 'defaultProps', {
    size: c.Button.Sizes.MEDIUM,
    color: c.Button.Colors.BRAND
}), t.Z = l.ZP.connectStores([E.default], () => {
    let e = E.default.getCurrentUser();
    return o()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
})(I);
