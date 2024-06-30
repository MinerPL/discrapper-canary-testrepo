s.r(e), s(47120);
var a, n, i = s(735250), o = s(470079), c = s(442837), r = s(481060), l = s(355467), u = s(505649), d = s(626135), T = s(937615), A = s(622999), h = s(981631), N = s(689938), _ = s(491275);
function M(t, e, s) {
    return e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = s, t;
}
(n = a || (a = {}))[n.START = 0] = 'START', n[n.FAIL = 1] = 'FAIL', n[n.SUCCESS = 2] = 'SUCCESS', n[n.CANCELED = 3] = 'CANCELED';
class I extends o.Component {
    componentDidMount() {
        d.default.track(h.rMx.OPEN_MODAL, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        d.default.track(h.rMx.MODAL_DISMISSED, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    getTitle() {
        let {step: t} = this.state;
        switch (t) {
        case 0:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE;
        case 2:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_SUCCESS;
        case 3:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_CANCELED;
        default:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_FAIL;
        }
    }
    getImageStyle() {
        let {step: t} = this.state;
        switch (t) {
        case 0:
            return _.authenticationRequiredImage;
        case 2:
            return _.authenticationSuccessImage;
        default:
            return _.authenticationFailImage;
        }
    }
    getMessage() {
        let {step: t} = this.state, {pendingPayment: e} = this.props;
        switch (t) {
        case 0:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_START.format({
                price: (0, T.T4)(e.amount, e.currency),
                item: e.description
            });
        case 2:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_SUCCESS;
        case 3:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_CANCELED.format({ item: e.description });
        default:
            return N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_FAIL;
        }
    }
    renderButtons() {
        let {step: t} = this.state, {disableAuthentication: e} = this.props;
        if (0 === t)
            return (0, i.jsxs)(o.Fragment, {
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.BRAND,
                        disabled: e,
                        onClick: this.handleAuthenticate,
                        children: N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON
                    }),
                    (0, i.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.NONE,
                        color: r.Button.Colors.PRIMARY,
                        onClick: this.cancelPayment,
                        className: _.cancelButton,
                        children: N.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON_CANCEL_PAYMENT
                    })
                ]
            });
        return (0, i.jsx)(r.Button, {
            color: r.ButtonColors.BRAND,
            onClick: this.close,
            children: N.Z.Messages.CLOSE
        });
    }
    render() {
        let {transitionState: t} = this.props;
        return (0, i.jsxs)(r.ModalRoot, {
            transitionState: t,
            className: _.modal,
            size: r.ModalSize.SMALL,
            'aria-label': this.getTitle(),
            children: [
                (0, i.jsxs)(r.ModalHeader, {
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            children: (0, i.jsx)('span', {
                                className: _.__invalid_modalTitle,
                                children: this.getTitle()
                            })
                        }),
                        (0, i.jsx)(r.ModalCloseButton, {
                            className: _.closeIcon,
                            onClick: this.close
                        })
                    ]
                }),
                (0, i.jsxs)(r.ModalContent, {
                    className: _.content,
                    children: [
                        (0, i.jsx)('div', { className: this.getImageStyle() }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: this.getMessage()
                        })
                    ]
                }),
                (0, i.jsx)(r.ModalFooter, {
                    className: _.__invalid_footer,
                    children: this.renderButtons()
                })
            ]
        });
    }
    constructor(...t) {
        super(...t), M(this, 'state', { step: 0 }), M(this, 'close', async () => {
            let {step: t} = this.state, {
                    onClose: e,
                    pendingPayment: s
                } = this.props;
            0 === t && await (0, l.UY)(s.id), e();
        }), M(this, 'cancelPayment', async () => {
            let {pendingPayment: t} = this.props;
            try {
                await (0, l.UY)(t.id);
            } catch (t) {
                throw this.setState({ step: 3 }), t;
            }
            this.setState({ step: 3 });
        }), M(this, 'handleAuthenticate', async () => {
            let {pendingPayment: t} = this.props, {error: e} = await (0, A.oe)(t.id);
            null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
        });
    }
}
e.default = c.ZP.connectStores([u.Z], () => ({ disableAuthentication: u.Z.isAwaitingAuthentication }))(I);
