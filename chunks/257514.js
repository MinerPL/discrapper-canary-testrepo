s.r(t),
    s.d(t, {
        default: function () {
            return L;
        }
    }),
    s(47120);
var a,
    n,
    C = s(735250),
    i = s(470079),
    _ = s(481060),
    o = s(355467),
    l = s(100527),
    r = s(906732),
    I = s(313201),
    N = s(740492),
    c = s(626135),
    A = s(171246),
    d = s(225715),
    S = s(635840),
    O = s(981631),
    E = s(689938),
    T = s(122843);
let u = (e) => {
    let [t, s] = i.useState(!1),
        [a, n] = i.useState(null);
    return {
        cancelSubscription: async (t) => {
            try {
                return s(!0), await o.EO(t, e), !0;
            } catch (e) {
                n(e);
            } finally {
                s(!1);
            }
        },
        error: a,
        submitting: t
    };
};
function L(e) {
    let { transitionState: t, application: s, storeListing: a, subscription: n, guild: o, onClose: L } = e,
        P = (0, I.Dt)(),
        { analyticsLocations: R } = (0, r.ZP)(l.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        { cancelSubscription: U, error: h, submitting: m } = u(R),
        [x, B] = i.useState(0),
        p = async () => {
            (await U(n.id)) && (N.ZP.disableApplicationSubscriptionCancellationSurvey ? L() : B(1));
        };
    i.useEffect(() => {
        c.default.track(O.rMx.CANCELLATION_FLOW_STARTED, { location_stack: R });
    }, [R]);
    let M = (0, A.KW)(a.skuFlags);
    return (0, C.jsx)(_.ModalRoot, {
        transitionState: t,
        className: T.modal,
        'aria-labelledby': P,
        children: (0, C.jsxs)(_.Slides, {
            activeSlide: x,
            width: 440,
            children: [
                (0, C.jsx)(_.Slide, {
                    id: 0,
                    children: (0, C.jsxs)('div', {
                        className: T.slideContainer,
                        children: [
                            null != h ? (0, C.jsx)(_.FormErrorBlock, { children: h.message }) : null,
                            (0, C.jsxs)(_.ModalContent, {
                                className: T.content,
                                children: [
                                    (0, C.jsx)(_.Spacer, { size: 16 }),
                                    (0, C.jsxs)(d.q$, {
                                        children: [
                                            (0, C.jsx)(d.CW, { application: s }),
                                            (0, C.jsx)(d.r0, {
                                                id: P,
                                                children: E.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({ tier: a.summary })
                                            }),
                                            (0, C.jsx)(d.s$, {}),
                                            (0, C.jsx)(d.K9, {
                                                title: E.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_HEADER,
                                                description: M
                                                    ? E.Z.Messages.APPLICATION_CANCEL_USER_SUBSCRIPTION_MODAL_DESCRIPTION.format({ timestamp: n.currentPeriodEnd.getTime() })
                                                    : E.Z.Messages.APPLICATION_CANCEL_GUILD_SUBSCRIPTION_MODAL_DESCRIPTION.format({
                                                          timestamp: n.currentPeriodEnd.getTime(),
                                                          guildName: null == o ? void 0 : o.name
                                                      })
                                            }),
                                            (0, C.jsx)(d.G9, {
                                                applicationId: a.applicationId,
                                                storeListingBenefits: a.benefits
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, C.jsxs)(_.ModalFooter, {
                                className: T.footer,
                                children: [
                                    (0, C.jsx)(_.Button, {
                                        color: _.Button.Colors.RED,
                                        onClick: p,
                                        submitting: m,
                                        children: E.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
                                    }),
                                    (0, C.jsx)(_.Button, {
                                        look: _.Button.Looks.LINK,
                                        color: _.Button.Colors.PRIMARY,
                                        className: T.goBackButton,
                                        onClick: L,
                                        children: E.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, C.jsx)(_.Slide, {
                    id: 1,
                    children: (0, C.jsx)('div', {
                        className: T.slideContainer,
                        children: (0, C.jsx)(S.Z, {
                            application: s,
                            subscriptionId: n.id,
                            onClose: L
                        })
                    })
                })
            ]
        })
    });
}
((n = a || (a = {}))[(n.CANCEL = 0)] = 'CANCEL'), (n[(n.SURVEY = 1)] = 'SURVEY');
