a(411104), a(47120);
var t = a(735250), s = a(470079), r = a(120356), l = a.n(r), i = a(512722), o = a.n(i), c = a(442837), u = a(481060), d = a(850840), _ = a(63063), I = a(74538), E = a(981631), T = a(474936), A = a(689938), N = a(112468);
function P(e, n, a) {
    return n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = a, e;
}
class M extends s.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let a = this.hasAcceptedNeccessaryTerms(e, n), t = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        t !== a && this.props.onChange(t);
    }
    hasAcceptedNeccessaryTerms(e, n) {
        return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
    }
    formatInterval(e) {
        if (e === T.rV.YEAR)
            return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        if (e === T.rV.MONTH)
            return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        throw Error('Invalid interval type: '.concat(e));
    }
    render() {
        let {
                eulaId: e,
                applicationName: n,
                hasPreviouslyAcceptedEULA: s,
                forceShow: r,
                disabled: i,
                className: c,
                checkboxClassname: d,
                checkboxLabelClassname: T,
                finePrint: P,
                showPricingLink: M,
                showWithdrawalWaiver: p,
                isTrial: R,
                isDiscount: L,
                subscriptionPlan: f,
                finePrintClassname: C
            } = this.props, {
                hasAcceptedEULA: m,
                hasAcceptedWithdrawalWaiver: S
            } = this.state;
        return (o()(!R || null != f, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), r || null != e && !s || p) ? (0, t.jsxs)('div', {
            className: c,
            children: [
                p && (0, t.jsx)(u.FormTitle, {
                    className: N.formTitle,
                    children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER
                }),
                null != e && (r || !s) ? (0, t.jsx)(u.Checkbox, {
                    type: u.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: this.handleToggleEULAAcceptance,
                    disabled: i,
                    className: N.checkbox,
                    children: (0, t.jsx)('div', {
                        className: N.checkboxLabel,
                        children: A.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                            applicationName: n,
                            onClick: n => {
                                (0, u.openModalLazy)(async () => {
                                    let {default: n} = await a.e('51868').then(a.bind(a, 796504));
                                    return a => (0, t.jsx)(n, {
                                        eulaId: e,
                                        ...a
                                    });
                                }), n.preventDefault();
                            }
                        })
                    })
                }) : null,
                null == P ? null : (0, t.jsx)('div', {
                    className: l()(N.finePrint, C),
                    children: P
                }),
                p ? (0, t.jsxs)('div', {
                    className: c,
                    children: [
                        (0, t.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: S,
                            onChange: this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: i,
                            className: l()(N.checkbox, d),
                            children: (0, t.jsx)('div', {
                                className: l()(N.checkboxLabel, T),
                                children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                            })
                        }),
                        (0, t.jsx)('div', {
                            className: N.finePrint,
                            children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                        })
                    ]
                }) : null,
                M && (0, t.jsxs)('div', {
                    className: N.finePrint,
                    children: [
                        '*',
                        A.Z.Messages.BILLING_HOW_PRICING_WORKS.format({ documentationLink: _.Z.getArticleURL(E.BhN.LOCALIZED_PRICING) })
                    ]
                }),
                R && null != f && (0, t.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: A.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                        buttonText: (0, I.W_)(null, f),
                        interval: this.formatInterval(null == f ? void 0 : f.interval),
                        cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                    })
                }),
                L && null != f && (0, t.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'interactive-normal',
                    children: A.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                        buttonText: (0, I.W_)(null, f),
                        interval: this.formatInterval(null == f ? void 0 : f.interval),
                        cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                    })
                })
            ]
        }) : null;
    }
    constructor(...e) {
        super(...e), P(this, 'state', {
            hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
            hasAcceptedWithdrawalWaiver: !1
        }), P(this, 'handleToggleEUWithdralWaiverAcceptance', (e, n) => {
            this.setState({ hasAcceptedWithdrawalWaiver: n });
        }), P(this, 'handleToggleEULAAcceptance', (e, n) => {
            this.setState({ hasAcceptedEULA: n });
        });
    }
}
n.Z = c.ZP.connectStores([d.Z], e => {
    let {eulaId: n} = e;
    return { hasPreviouslyAcceptedEULA: null != n && d.Z.hasAcceptedEULA(n) };
})(M);
