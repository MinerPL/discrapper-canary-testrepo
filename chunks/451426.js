s.d(n, {
    Z: function () {
        return I;
    }
}),
    s(47120);
var a = s(735250),
    t = s(470079),
    l = s(442837),
    i = s(481060),
    o = s(570140),
    r = s(600164),
    c = s(103879),
    d = s(236289),
    _ = s(788080),
    E = s(613734),
    N = s(981631),
    u = s(689938),
    x = s(260768),
    A = s(220613);
function I(e) {
    let { className: n, onClose: s, onNext: I, onBack: C } = e,
        S = (0, l.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: T } = (0, E.YG)(null != S ? S : N.lds),
        m = (0, _.c7)(null == T ? void 0 : T.description),
        h = (0, l.e7)([d.Z], () => d.Z.getIsSubmitting()),
        M = (0, l.e7)([d.Z], () => d.Z.getAppealSignal()),
        L = (0, l.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [g, O] = t.useState(!1),
        [p, j] = t.useState(''),
        P = t.useCallback((e) => {
            o.Z.dispatch({
                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                userInput: e
            });
        }, []),
        b = t.useCallback(async () => {
            if (null !== S)
                try {
                    j(''), await c.uR(S, M, L), null == I || I();
                } catch (n) {
                    var e;
                    j((0, _.Zs)(null === (e = n.body) || void 0 === e ? void 0 : e.code));
                }
        }, [S, M, L, I]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.ModalHeader, {
                direction: r.Z.Direction.VERTICAL,
                className: A.header,
                separator: !1,
                children: [
                    (0, a.jsx)(i.Heading, {
                        className: A.title,
                        variant: 'heading-xl/semibold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
                    }),
                    (0, a.jsx)(i.Text, {
                        className: A.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
                    }),
                    null != s &&
                        (0, a.jsx)(i.ModalCloseButton, {
                            className: A.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, a.jsxs)(i.ModalContent, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, a.jsx)('ul', {
                        className: x.listContainer,
                        children: [(0, _.ox)(M), L]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, a.jsx)(
                                    'li',
                                    {
                                        className: x.listItem,
                                        children: (0, a.jsx)(i.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            children: e
                                        })
                                    },
                                    n
                                )
                            )
                    }),
                    (0, a.jsx)('div', {
                        className: x.anchorContainer,
                        children: (0, a.jsx)(i.Anchor, {
                            onClick: () => O((e) => !e),
                            children: (0, a.jsx)(i.Heading, {
                                variant: 'heading-md/normal',
                                color: 'text-link',
                                children: L.length > 0 ? u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
                            })
                        })
                    }),
                    g &&
                        (0, a.jsx)('div', {
                            className: x.inputContainer,
                            children: (0, a.jsx)(i.TextArea, {
                                value: L,
                                onChange: P
                            })
                        }),
                    (0, a.jsx)('div', {
                        className: A.policyContainer,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-md/semibold',
                            children: m
                        })
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: x.footerText,
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
                    })
                ]
            }),
            (0, a.jsxs)(i.ModalFooter, {
                direction: r.Z.Direction.VERTICAL,
                children: [
                    '' !== p &&
                        (0, a.jsx)(i.Text, {
                            className: x.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: p
                        }),
                    (0, a.jsxs)('div', {
                        className: x.buttonContainer,
                        children: [
                            (0, a.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: C,
                                disabled: h,
                                children: u.Z.Messages.BACK
                            }),
                            (0, a.jsx)(i.Button, {
                                onClick: b,
                                color: i.Button.Colors.RED,
                                submitting: h,
                                children: u.Z.Messages.SUBMIT
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
