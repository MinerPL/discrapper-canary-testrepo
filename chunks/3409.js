t.d(a, {
    fL: function () {
        return eT;
    },
    kx: function () {
        return ep;
    },
    vP: function () {
        return eh;
    }
}),
    t(47120),
    t(411104);
var s = t(735250),
    n = t(470079),
    l = t(160612),
    r = t(512722),
    o = t.n(r),
    i = t(442837),
    c = t(481060),
    u = t(570140),
    d = t(355467),
    E = t(873115),
    A = t(976255),
    N = t(801937),
    m = t(282164),
    _ = t(738342),
    p = t(915271),
    h = t(228666),
    T = t(723484),
    C = t(122192),
    S = t(581813),
    I = t(870630),
    P = t(710845),
    R = t(598),
    f = t(409813),
    M = t(51499),
    b = t(586585),
    O = t(614277),
    y = t(737143),
    g = t(35248),
    L = t(698708),
    v = t(351402),
    D = t(975060),
    x = t(505649),
    Z = t(853872),
    Y = t(882712),
    U = t(358085),
    H = t(622999),
    j = t(176919),
    B = t(185139),
    F = t(559725),
    k = t(439041),
    w = t(850228),
    G = t(231338),
    W = t(689938),
    V = t(260173),
    Q = t(83644);
let K = new P.Z('AddPaymentStep.tsx'),
    z = [f.h8.PAYMENT_TYPE],
    X = [f.h8.PAYMENT_TYPE, f.h8.CREDIT_CARD_INFORMATION, f.h8.ADDRESS],
    q = [f.h8.PAYMENT_TYPE, f.h8.PAYPAL_INFORMATION, f.h8.ADDRESS],
    J = [f.h8.PAYMENT_TYPE, f.h8.VENMO_INFORMATION, f.h8.ADDRESS],
    $ = [f.h8.PAYMENT_TYPE, f.h8.SOFORT_INFORMATION, f.h8.ADDRESS];
f.h8.PAYMENT_TYPE, f.h8.PAYMENT_REQUEST_INFORMATION, f.h8.ADDRESS;
let ee = [f.h8.PAYMENT_TYPE, f.h8.PRZELEWY24_INFORMATION, f.h8.ADDRESS],
    ea = [f.h8.PAYMENT_TYPE, f.h8.EPS_INFORMATION, f.h8.ADDRESS],
    et = [f.h8.PAYMENT_TYPE, f.h8.IDEAL_INFORMATION, f.h8.ADDRESS],
    es = [f.h8.PAYMENT_TYPE, f.h8.CASH_APP_INFORMATION, f.h8.ADDRESS],
    en = [f.h8.PAYMENT_TYPE, f.h8.ADDRESS],
    el = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    er = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eo(e) {
    let { onChooseType: a, onPaymentRequestSourceReceived: t, onPaymentRequestSourceFailed: n, analyticsLocation: l, isEligibleForTrial: r } = e;
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(N.Z, {
            onChooseType: a,
            allowStripeRequestPayments: !U.isPlatformEmbedded,
            onStripePaymentMethodReceived: async (e) => {
                if (((0, A.Xt)(e), null == e)) {
                    n();
                    return;
                }
                try {
                    let a = await (0, d.i6)(e, void 0, l),
                        { billingAddressInfo: s } = (0, H.az)(e);
                    t(a, s);
                } catch (e) {}
            },
            isEligibleForTrial: r
        })
    });
}
function ei(e) {
    let { onCardInfoChange: a } = e,
        t = (0, i.e7)([D.Z], () => D.Z.error);
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(C.j, {
            billingError: t,
            onCardInfoChange: a
        })
    });
}
function ec() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(m.Z, {})
    });
}
function eu() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(p.Z, {})
    });
}
function ed() {
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(w.Z, {})
    });
}
function eE() {
    let e = (0, i.e7)([v.Z], () => v.Z.isBusy),
        a = (0, i.e7)([D.Z], () => D.Z.stripePaymentMethod);
    return (0, s.jsx)(S.k, {
        className: V.body,
        stripePaymentMethod: a,
        submitting: e
    });
}
function eA(e) {
    let { billingAddressInfo: a, onBillingAddressChange: t, paymentSourceType: n } = e,
        l = (0, i.e7)([D.Z], () => D.Z.error);
    return (0, s.jsx)('div', {
        className: V.body,
        children: (0, s.jsx)(h.P, {
            billingAddressInfo: a,
            billingError: l,
            onBillingAddressChange: t,
            paymentSourceType: n
        })
    });
}
function eN() {
    return (0, s.jsx)(T.F, { className: V.body });
}
function em(e) {
    return () => (null != D.Z.error && (0, A.fw)(), e());
}
function e_(e) {
    let { onPrimary: a, onBack: t, ...n } = e,
        l = a;
    null != a && (l = em(a));
    let r = t;
    return (
        null != t && (r = em(t)),
        (0, s.jsx)(b.Z, {
            ...n,
            onPrimary: l,
            onBack: r
        })
    );
}
function ep(e) {
    let { breadcrumbSteps: a } = e,
        { step: t, setStep: s, paymentSources: n, paymentSourceId: l, setPaymentSourceId: r, purchaseError: i, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, R.usePaymentContext)(),
        E = {
            ...eT(),
            paymentSources: n,
            paymentSourceId: l,
            setPaymentSourceId: r,
            purchaseError: i,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        o()(t, 'Step should be set here'),
        eh({
            paymentModalArgs: E,
            initialStep: f.h8.PAYMENT_TYPE,
            prependSteps: [f.h8.PROMOTION_INFO],
            appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
            breadcrumpSteps: a,
            currentBreadcrumpStep: t,
            onReturn: () => s(f.h8.REVIEW),
            onComplete: () => s(f.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eh(e) {
    let a,
        t,
        r,
        u,
        { paymentModalArgs: N, initialStep: m, prependSteps: p, appendSteps: h, onReturn: T, onComplete: C, onStepChange: S, breadcrumpSteps: P, currentBreadcrumpStep: v, header: x, analyticsLocation: Y, hideBreadcrumbs: U = !1, usePaymentModalStep: H = !1, isEligibleForTrial: j = !1, allowDesktopRedirectPurchase: w = !1, toastContent: el, overwriteSubscriptionPaymentSource: er = !1 } = e,
        em = {
            steps: [...p, ...X, ...h],
            methodType: G.He.CARD
        },
        ep = {
            steps: [...p, ...z, ...h],
            methodType: G.He.PAYMENT_REQUEST
        },
        eh = {
            steps: [...p, ...q, ...h],
            methodType: G.He.PAYPAL
        },
        eT = {
            steps: [...p, ...J, ...h],
            methodType: G.He.VENMO
        },
        eC = {
            steps: [...p, ...z, ...h]
        },
        eS = {
            steps: [...p, ...$, ...h],
            methodType: G.He.SOFORT
        },
        eI = {
            steps: [...p, ...ee, ...h],
            methodType: G.He.PRZELEWY24
        },
        eP = {
            steps: [...p, ...ea, ...h],
            methodType: G.He.EPS
        },
        eR = {
            steps: [...p, ...et, ...h],
            methodType: G.He.IDEAL
        },
        ef = {
            steps: [...p, ...es, ...h],
            methodType: G.He.CASH_APP
        },
        [eM, eb] = n.useState(m),
        [eO, ey] = n.useState(
            (function (e) {
                switch (e) {
                    case f.h8.CREDIT_CARD_INFORMATION:
                        return em;
                    case f.h8.CASH_APP_INFORMATION:
                        return ef;
                    default:
                        return { steps: [f.h8.ADD_PAYMENT_STEPS] };
                }
            })(m)
        ),
        { stripe: eg } = (0, R.usePaymentContext)(),
        eL = (0, i.e7)([D.Z], () => D.Z.redirectedPaymentSourceId),
        ev = (0, i.e7)([k.Z], () => k.Z.cashAppPayComponent);
    function eD(e) {
        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eb(e),
            a &&
                S({
                    currentStep: eM,
                    toStep: e
                });
    }
    n.useEffect(() => {
        (() => {
            if (null == eL) return;
            let e = Z.Z.getPaymentSource(eL);
            if (null != e) e8(e), ek(!1);
        })();
    }, [eL]);
    let { setPaymentSourceId: ex, creditCardState: eZ, setCreditCardState: eY, tokenState: eU, setTokenState: eH, isSubmittingCurrentStep: ej, billingAddressState: eB, setBillingAddressState: eF, setIsSubmittingCurrentStep: ek, hasRedirectURL: ew, setHasRedirectURL: eG, braintreeEmail: eW, braintreeNonce: eV, venmoUsername: eQ, adyenPaymentData: eK, isAuthenticating: ez, epsBankState: eX, setEpsBankState: eq, idealBankState: eJ, setIdealBankState: e$, p24BankState: e0, setP24BankState: e1 } = N;
    function e8(e) {
        var a;
        ex(e.id), (a = e), (0, c.showToast)((0, c.createToast)(void 0 !== el ? el : W.Z.Messages.PAYMENT_SOURCE_ADD_SUCCESS_TOAST, c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), C(eM, a), eD(m, !1);
    }
    let e2 = (0, y.q1)().enabled && w;
    switch (eM) {
        case f.h8.PAYMENT_TYPE:
            (a = (0, s.jsx)(eo, {
                onChooseType: (e) => {
                    switch (e) {
                        case G.He.CARD:
                            e2 ? eD(f.h8.AWAITING_BROWSER_CHECKOUT) : (ey(em), eD(f.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case G.He.PAYPAL:
                            ey(eh), eD(f.h8.PAYPAL_INFORMATION);
                            break;
                        case G.He.VENMO:
                            ey(eT), eD(f.h8.VENMO_INFORMATION);
                            break;
                        case G.He.PAYMENT_REQUEST:
                            ey(ep), eD(f.h8.PAYMENT_REQUEST_INFORMATION);
                            break;
                        case G.He.SOFORT:
                            ey(eS), eD(f.h8.SOFORT_INFORMATION);
                            break;
                        case G.He.PRZELEWY24:
                            ey(eI), eD(f.h8.PRZELEWY24_INFORMATION);
                            break;
                        case G.He.EPS:
                            ey(eP), eD(f.h8.EPS_INFORMATION);
                            break;
                        case G.He.IDEAL:
                            ey(eR), eD(f.h8.IDEAL_INFORMATION);
                            break;
                        case G.He.CASH_APP:
                            ey(ef), eD(f.h8.CASH_APP_INFORMATION);
                            break;
                        case G.He.GIROPAY:
                        case G.He.PAYSAFE_CARD:
                        case G.He.GCASH:
                        case G.He.GRABPAY_MY:
                        case G.He.MOMO_WALLET:
                        case G.He.KAKAOPAY:
                        case G.He.GOPAY_WALLET:
                        case G.He.BANCONTACT:
                            ey({
                                steps: [...p, ...en, ...h],
                                methodType: e
                            }),
                                eD(f.h8.ADDRESS);
                    }
                    null != D.Z.error && (0, A.fw)();
                },
                onPaymentRequestSourceReceived: (e, a) => {
                    eF((e) => ({
                        ...e,
                        info: a
                    })),
                        ey(ep),
                        e8(e);
                },
                onPaymentRequestSourceFailed: () => {
                    ey(eC), eD(f.h8.PAYMENT_TYPE);
                },
                analyticsLocation: Y,
                isEligibleForTrial: j
            })),
                (t = (0, s.jsx)(e_, { onBack: T }));
            break;
        case f.h8.CREDIT_CARD_INFORMATION:
            let e4 = async (e) => {
                ek(!0);
                try {
                    let a = await (0, d.qv)(eg, e);
                    eH({ token: a }), eD(f.h8.ADDRESS);
                } catch (e) {
                    var a;
                    K.error(null !== (a = e.message) && void 0 !== a ? a : JSON.stringify(e));
                } finally {
                    ek(!1);
                }
            };
            (a = (0, s.jsx)(ei, {
                onCardInfoChange: (e, a) => {
                    eY({
                        info: e,
                        isValid: a
                    }),
                        eF((a) => ({
                            ...a,
                            info: {
                                ...a.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (t = (0, s.jsx)(l.ElementsConsumer, {
                    children: (e) => {
                        let { elements: a } = e;
                        return (0, s.jsx)(e_, {
                            onBack: () => eD(f.h8.PAYMENT_TYPE),
                            primaryCTA: b.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.Z.Messages.NEXT,
                            primarySubmitting: ej,
                            primaryDisabled: !eZ.isValid,
                            onPrimary: () => e4(a)
                        });
                    }
                }));
            break;
        case f.h8.AWAITING_BROWSER_CHECKOUT:
            (a = (0, s.jsx)('div', {
                className: V.body,
                children: (0, s.jsx)(g.M, {
                    onPurchaseComplete: () => C(eM),
                    onHandoffFailure: () => {
                        ey(em), eD(f.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (t = (0, s.jsx)(g.a, {
                    onPrimaryClick: () => {
                        ey(em), eD(f.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ey(eC), eD(f.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case f.h8.SOFORT_INFORMATION:
            let e7 = eB.info;
            (a = (0, s.jsx)('div', {
                className: V.body,
                children: (0, s.jsx)(_.Z, {
                    billingAddressInfo: e7,
                    onChange: (e) => {
                        eF({
                            info: {
                                ...e7,
                                ...e
                            },
                            isValid: !1
                        });
                    },
                    error: D.Z.error
                })
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: '' === e7.name || '' === e7.email || void 0 === e7.email,
                    onPrimary: () => eD(f.h8.ADDRESS)
                }));
            break;
        case f.h8.EPS_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eF({
                        info: {
                            ...eB.info,
                            name: e
                        },
                        isValid: eB.isValid
                    }),
                onEPSBankChange: (e) => eq(e),
                epsBankValue: eX,
                billingAddressInfo: eB.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eX || '' === eX || '' === eB.info.name,
                    onPrimary: () => eD(f.h8.ADDRESS)
                }));
            break;
        case f.h8.IDEAL_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eF({
                        info: {
                            ...eB.info,
                            name: e
                        },
                        isValid: eB.isValid
                    }),
                onIdealBankChange: (e) => e$(e),
                idealBankValue: eJ,
                billingAddressInfo: eB.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eJ || '' === eJ || '' === eB.info.name,
                    onPrimary: () => eD(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PRZELEWY24_INFORMATION:
            (a = (0, s.jsx)(I.Z, {
                type: G.He.PRZELEWY24,
                onNameChange: (e) =>
                    eF({
                        info: {
                            ...eB.info,
                            name: e
                        },
                        isValid: eB.isValid
                    }),
                onEmailChange: (e) =>
                    eF({
                        info: {
                            ...eB.info,
                            email: e
                        },
                        isValid: eB.isValid
                    }),
                onP24BankChange: (e) => {
                    e1(e);
                },
                p24BankValue: e0,
                billingAddressInfo: eB.info
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primaryDisabled: void 0 === eB.info.name || '' === eB.info.name || void 0 === eB.info.email || '' === eB.info.email || void 0 === e0 || '' === e0,
                    onPrimary: () => eD(f.h8.ADDRESS)
                }));
            break;
        case f.h8.PAYPAL_INFORMATION:
            let e5 = 0 !== eW.length && null != eV;
            (a = (0, s.jsx)(ec, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e5 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                    onPrimary: () => (e5 ? eD(f.h8.ADDRESS) : (0, E.i0)())
                }));
            break;
        case f.h8.VENMO_INFORMATION:
            let e9 = 0 !== eQ.length && null != eV;
            (a = (0, s.jsx)(eu, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e9 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
                    onPrimary: () => (e9 ? eD(f.h8.ADDRESS) : (0, E.og)())
                }));
            break;
        case f.h8.PAYMENT_REQUEST_INFORMATION:
            (a = (0, s.jsx)(eE, {})), (t = (0, s.jsx)(e_, { onBack: () => eD(f.h8.PAYMENT_TYPE) }));
            break;
        case f.h8.CASH_APP_INFORMATION:
            let e6 = null != eK;
            (a = (0, s.jsx)(ed, {})),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(f.h8.PAYMENT_TYPE),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: e6 ? W.Z.Messages.NEXT : W.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
                    onPrimary: () => (e6 ? eD(f.h8.ADDRESS) : (0, F.cp)()),
                    primaryDisabled: !(null != ev)
                }));
            break;
        case f.h8.ADDRESS:
            let e3 = async () => {
                ek(!0);
                let e = eO.methodType;
                switch (e) {
                    case G.He.CARD:
                        try {
                            let e = await (0, d.f0)(eg, eU.token, eB.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.VENMO:
                    case G.He.PAYPAL:
                        try {
                            o()(null != eV, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eV, eB.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.SOFORT:
                        try {
                            let e = await (0, d.av)(eg, eB.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eg, eX, eB.info, Y);
                            e8(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eg, eJ, eB.info, Y);
                            e8(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.PRZELEWY24:
                        try {
                            if (void 0 === e0) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eg, { p24Bank: e0 }, eB.info, Y);
                            e8(e);
                        } catch {}
                        break;
                    case G.He.PAYSAFE_CARD:
                    case G.He.GRABPAY_MY:
                        try {
                            let a = await (0, d.sF)(eB.info, e, Y);
                            e8(a);
                        } catch {}
                        break;
                    case G.He.GCASH:
                    case G.He.MOMO_WALLET:
                    case G.He.KAKAOPAY:
                    case G.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: a } = await (0, d.Dk)(eB.info, e, Y);
                            eG(a);
                        } catch {}
                        break;
                    case G.He.GIROPAY:
                    case G.He.BANCONTACT:
                        try {
                            let a = await (0, d.GV)(eg, eB.info, e, Y);
                            e8(a);
                        } catch {}
                        break;
                    case G.He.CASH_APP:
                        try {
                            o()(null != eK, 'Missing adyenPaymentData');
                            let { paymentSource: a } = await (0, d.Dk)(eB.info, e, Y, eK, er);
                            o()(null != a, 'Cash App Pay Payment Source missing'), e8(a);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !ew && ek(!1);
            };
            switch (eO.methodType) {
                case G.He.CARD:
                    (u = f.h8.CREDIT_CARD_INFORMATION), (r = G.He.CARD);
                    break;
                case G.He.PAYPAL:
                    (u = f.h8.PAYPAL_INFORMATION), (r = G.He.PAYPAL);
                    break;
                case G.He.VENMO:
                    (u = f.h8.VENMO_INFORMATION), (r = G.He.VENMO);
                    break;
                case G.He.GIROPAY:
                    (u = f.h8.PAYMENT_TYPE), (r = G.He.GIROPAY);
                    break;
                case G.He.SOFORT:
                    (u = f.h8.SOFORT_INFORMATION), (r = G.He.SOFORT);
                    break;
                case G.He.PAYSAFE_CARD:
                case G.He.GCASH:
                case G.He.GRABPAY_MY:
                case G.He.MOMO_WALLET:
                case G.He.KAKAOPAY:
                case G.He.GOPAY_WALLET:
                case G.He.BANCONTACT:
                    (u = f.h8.PAYMENT_TYPE), (r = eO.methodType);
                    break;
                case G.He.EPS:
                    (u = f.h8.EPS_INFORMATION), (r = G.He.EPS);
                    break;
                case G.He.IDEAL:
                    (u = f.h8.IDEAL_INFORMATION), (r = G.He.IDEAL);
                    break;
                case G.He.PRZELEWY24:
                    (u = f.h8.PRZELEWY24_INFORMATION), (r = G.He.PRZELEWY24);
                    break;
                case G.He.CASH_APP:
                    (u = f.h8.CASH_APP_INFORMATION), (r = G.He.CASH_APP);
                    break;
                default:
                    (u = f.h8.PAYMENT_TYPE), (r = G.He.CARD);
            }
            (a = (0, s.jsx)(eA, {
                billingAddressInfo: eB.info,
                onBillingAddressChange: (e, a) => {
                    eF({
                        info: {
                            ...eB.info,
                            ...e
                        },
                        isValid: a
                    });
                },
                paymentSourceType: r
            })),
                (t = (0, s.jsx)(e_, {
                    onBack: () => eD(u),
                    primaryCTA: b.Z.CTAType.CONTINUE,
                    primaryText: W.Z.Messages.NEXT,
                    primarySubmitting: ej,
                    primaryDisabled: !eB.isValid || ez,
                    onPrimary: e3
                }));
            break;
        case f.h8.AWAITING_AUTHENTICATION:
            a = (0, s.jsx)(eN, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eM));
    }
    let ae = (0, s.jsx)(c.Sequencer, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: eM,
            steps: eO.steps,
            sideMargin: 20,
            children: a
        }),
        aa = eM === f.h8.PAYMENT_TYPE && 0 === p.length ? null : t;
    return H
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(L.Z, { className: V.paymentModalError }),
                  j &&
                      (0, s.jsx)(M.Z, {
                          className: V.paymentModalBreadcrumbs,
                          isEligibleForTrial: j
                      }),
                  (0, s.jsx)(O.C3, { children: ae }),
                  (0, s.jsx)(O.O3, { children: aa })
              ]
          })
        : (0, s.jsx)(B.Z, {
              steps: null != P ? P : eO.steps,
              currentStep: null != v ? v : eM,
              paymentError: N.paymentError,
              header: x,
              hideBreadcrumbs: U,
              body: ae,
              footer: aa
          });
}
function eT(e) {
    let {
        defaultPaymentSourceId: a,
        paymentSources: t,
        hasFetchedPaymentSources: s
    } = (0, i.cj)([Z.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : Z.Z.defaultPaymentSourceId,
        paymentSources: Z.Z.paymentSources,
        hasFetchedPaymentSources: Z.Z.hasFetchedPaymentSources
    }));
    n.useEffect(() => {
        null == k.Z.cashAppPayComponent && (0, F.eI)(), (0, E.eI)(), !s && (0, d.tZ)();
    }, []);
    let [l, r] = n.useState(a);
    null != a && null == l && r(a);
    let [o, c] = n.useState(() => ({
            info: el,
            isValid: !1
        })),
        [N, m] = n.useState(() => ({
            info: er,
            isValid: !1
        })),
        [_, p] = n.useState(''),
        [h, T] = n.useState(''),
        [C, S] = n.useState(''),
        [I, P] = n.useState(() => ({ token: null })),
        [R, f, M, b, O] = (0, i.Wu)([D.Z], () => [D.Z.braintreeEmail, D.Z.braintreeNonce, D.Z.error, D.Z.venmoUsername, D.Z.adyenPaymentData]),
        [y, g] = (0, i.Wu)([x.Z], () => [x.Z.error, x.Z.isAwaitingAuthentication]);
    n.useEffect(() => {
        let e = (e) => {
            let { billingAddress: a } = e;
            m({
                info: a,
                isValid: a.country.length > 0
            });
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, A.fw)();
            }
        );
    }, []);
    let [L, v] = n.useState(!1),
        [U, H] = n.useState(!1),
        [B, w] = n.useState(null),
        G = n.useRef(null),
        W = (0, i.e7)([x.Z], () => x.Z.isAwaitingAuthentication),
        [V, Q] = (0, i.Wu)([Y.Z], () => [Y.Z.purchaseTokenAuthState, Y.Z.purchaseTokenHash]);
    return (
        n.useEffect(() => {
            null != B && null != G.current && G.current.scrollIntoView({ behavior: 'smooth' });
        }, [B]),
        {
            paymentSources: t,
            paymentSourceId: l,
            hasFetchedPaymentSources: s,
            setPaymentSourceId: r,
            creditCardState: o,
            setCreditCardState: c,
            tokenState: I,
            setTokenState: P,
            billingAddressState: N,
            setBillingAddressState: m,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: v,
            hasRedirectURL: U,
            setHasRedirectURL: H,
            braintreeEmail: R,
            braintreeNonce: f,
            venmoUsername: b,
            adyenPaymentData: O,
            paymentError: null != y ? y : M,
            paymentAuthenticationState: g ? j.wr.PENDING : null != y ? j.wr.ERROR : j.wr.NONE,
            purchaseError: B,
            setPurchaseError: w,
            purchaseErrorBlockRef: G,
            isAuthenticating: W,
            purchaseTokenAuthState: V,
            purchaseTokenHash: Q,
            epsBankState: h,
            setEpsBankState: T,
            idealBankState: C,
            setIdealBankState: S,
            p24BankState: _,
            setP24BankState: p
        }
    );
}
