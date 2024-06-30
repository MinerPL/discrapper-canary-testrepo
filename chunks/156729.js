s(47120);
var n, a = s(735250), i = s(470079), r = s(120356), o = s.n(r), l = s(873546), c = s(442837), d = s(481060), _ = s(570140), E = s(355467), u = s(117938), T = s(46141), I = s(351402), S = s(823379), N = s(464179), C = s(211667), m = s(244526), A = s(689938), h = s(191150);
function g(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
let O = 'isDefault';
class p extends (n = i.PureComponent) {
    componentWillUnmount() {
        _.Z.wait(() => {
            (0, E._H)(), (0, E.w7)();
        });
    }
    renderError() {
        let {
            updateError: e,
            removeError: t
        } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError() ? null != t ? (0, a.jsx)(d.FormErrorBlock, {
            className: h.formError,
            children: t.message
        }) : null : (0, a.jsx)(d.FormErrorBlock, {
            className: h.formError,
            children: e.message
        });
    }
    renderBillingAddressSection() {
        let {billingAddress: e} = this.state, {
                updateError: t,
                paymentSource: s
            } = this.props, n = (0, u.L)(s);
        return (0, a.jsxs)('div', {
            className: h.addressSection,
            children: [
                (0, a.jsx)(d.Text, {
                    className: h.sectionHeader,
                    variant: 'text-sm/normal',
                    children: A.Z.Messages.BILLING_ADDRESS
                }),
                (0, a.jsx)(N.ZP, {
                    ...e,
                    mode: N.ZP.Modes.EDIT,
                    layout: n,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t
                })
            ]
        });
    }
    renderCardExpirationSection() {
        let {
            expiresMonth: e,
            expiresYear: t
        } = this.state;
        if (null == e || null == t)
            return null;
        let s = ''.concat(e.toString().padStart(2, '0'), '/').concat(t.toString().padStart(2, '0').slice(-2));
        return (0, a.jsxs)('div', {
            className: h.addressSection,
            children: [
                (0, a.jsx)(d.Text, {
                    className: h.sectionHeader,
                    variant: 'text-sm/normal',
                    children: A.Z.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION
                }),
                (0, a.jsx)(C.Z, {
                    expirationDate: s,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError
                })
            ]
        });
    }
    renderActions() {
        let {
                submitting: e,
                removing: t,
                isForSubscription: s
            } = this.props, {
                billingAddressValid: n,
                expirationValid: i
            } = this.state;
        return (0, a.jsxs)('div', {
            className: h.formActions,
            children: [
                (0, a.jsx)('div', {
                    className: h.__invalid_leftAlignedButtons,
                    children: (0, a.jsxs)('div', {
                        className: h.disabledTooltipWrapper,
                        children: [
                            s ? (0, a.jsx)(d.Tooltip, {
                                text: A.Z.Messages.PAYMENT_SOURCE_DELETE_DISABLED_TOOLTIP,
                                children: e => (0, a.jsx)('div', {
                                    'aria-hidden': !0,
                                    className: h.disabledTooltipTarget,
                                    ...e
                                })
                            }) : null,
                            (0, a.jsx)(d.Button, {
                                type: 'button',
                                disabled: s || e,
                                submitting: t,
                                onClick: this.handleDelete,
                                look: d.Button.Looks.OUTLINED,
                                color: d.Button.Colors.RED,
                                size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                                children: l.tq ? A.Z.Messages.DELETE : A.Z.Messages.PAYMENT_SOURCE_DELETE
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: h.rightAlignedButtons,
                    children: [
                        (0, a.jsx)(d.Button, {
                            type: 'button',
                            disabled: e || t,
                            onClick: this.handleCancel,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                            children: A.Z.Messages.CANCEL
                        }),
                        (0, a.jsx)(d.Button, {
                            submitting: e,
                            disabled: !n || t || !i,
                            type: 'submit',
                            color: d.Button.Colors.GREEN,
                            size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                            children: A.Z.Messages.SAVE
                        })
                    ]
                })
            ]
        });
    }
    render() {
        let {
                paymentSource: e,
                isDefault: t,
                locale: s,
                className: n,
                isForSubscription: i
            } = this.props, {isDefault: r} = this.state, l = e instanceof T.qo;
        return (0, a.jsx)(d.Card, {
            editable: !0,
            className: o()(h.card, n),
            children: (0, a.jsxs)('form', {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, a.jsxs)('div', {
                        className: h.__invalid_paymentSection,
                        children: [
                            (0, a.jsx)(m.Z, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: i,
                                locale: s,
                                showLabels: !0,
                                showPaymentSourceIcon: !0
                            }),
                            e.invalid ? (0, a.jsx)('div', {
                                className: h.errorSubText,
                                children: A.Z.Messages.PAYMENT_SOURCE_INVALID_HELP
                            }) : null,
                            (0, a.jsx)('div', {
                                className: h.subText,
                                children: l ? A.Z.Messages.PAYMENT_SOURCE_EDIT_HELP_PAYPAL.format({ paypalURL: 'https://www.paypal.com' }) : A.Z.Messages.PAYMENT_SOURCE_EDIT_HELP_CARD
                            })
                        ]
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, a.jsx)(d.Checkbox, {
                        name: O,
                        value: r,
                        onChange: (e, t) => this.handleFieldChange(t, O),
                        type: d.Checkbox.Types.INVERTED,
                        className: h.defaultSection,
                        children: (0, a.jsx)(d.Text, {
                            className: h.defaultCheckboxLabel,
                            variant: 'text-sm/normal',
                            children: A.Z.Messages.PAYMENT_SOURCE_MAKE_DEFAULT
                        })
                    }),
                    (0, a.jsx)(d.FormDivider, {}),
                    this.renderActions()
                ]
            })
        });
    }
    constructor(e) {
        var t, s, n, a, i, r, o;
        super(e), g(this, 'handleSubmit', e => {
            if (e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(S.lm).length)
                this.props.onCancel();
            else {
                let {
                    billingAddress: e,
                    isDefault: t,
                    expiresMonth: s,
                    expiresYear: n
                } = this.state;
                this.props.onSubmit(this.props.paymentSource.id, {
                    billingAddress: e,
                    expiresMonth: s,
                    expiresYear: n,
                    isDefault: t
                });
            }
        }), g(this, 'handleCancel', () => {
            this.props.onCancel();
        }), g(this, 'handleDelete', () => {
            let {
                onDelete: e,
                paymentSource: t
            } = this.props;
            e(t.id);
        }), g(this, 'handleAddressUpdate', (e, t, s) => {
            this.setState({
                billingAddress: e,
                billingAddressValid: t,
                dirtyFields: {
                    ...this.state.dirtyFields,
                    billingAddress: s
                }
            });
        }), g(this, 'handleExpirationDateUpdate', (e, t) => {
            let {expirationDate: s} = e;
            if (this.setState({ expirationValid: t }), null == s || '' === s)
                return;
            let [n, a] = s.split('/');
            this.handleFieldChange(Number(n), 'expiresMonth'), this.handleFieldChange(Number(''.concat(new Date().getFullYear().toString().slice(0, 2)).concat(a)), 'expiresYear');
        }), g(this, 'handleFieldChange', (e, t) => {
            null != t && this.setState({
                [t]: e,
                dirtyFields: {
                    ...this.state.dirtyFields,
                    [t]: !0
                }
            });
        });
        let {
                paymentSource: l,
                isDefault: c
            } = e, d = l.billingAddress;
        this.state = {
            billingAddress: {
                name: null !== (t = d.name) && void 0 !== t ? t : '',
                line1: null !== (s = d.line1) && void 0 !== s ? s : '',
                line2: null !== (n = d.line2) && void 0 !== n ? n : '',
                country: null !== (a = d.country) && void 0 !== a ? a : '',
                state: null !== (i = d.state) && void 0 !== i ? i : '',
                city: null !== (r = d.city) && void 0 !== r ? r : '',
                postalCode: null !== (o = d.postalCode) && void 0 !== o ? o : ''
            },
            expiresMonth: l instanceof T.dm ? l.expiresMonth : void 0,
            expiresYear: l instanceof T.dm ? l.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: c,
            expirationValid: !0,
            dirtyFields: {}
        };
    }
}
g(p, 'defaultProps', {
    onDelete: () => {
    },
    onSubmit: () => {
    },
    onCancel: () => {
    }
}), t.Z = c.ZP.connectStores([I.Z], () => ({
    updateError: I.Z.editSourceError,
    removeError: I.Z.removeSourceError
}))(p);
