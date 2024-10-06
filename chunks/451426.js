s.d(n, {
    Z: function () {
        return I;
    }
}),
    s(47120);
var a = s(735250),
    t = s(470079),
    i = s(442837),
    l = s(481060),
    o = s(570140),
    r = s(600164),
    c = s(103879),
    d = s(236289),
    _ = s(788080),
    E = s(613734),
    N = s(981631),
    u = s(689938),
    A = s(6063),
    x = s(487043);
function I(e) {
    let { className: n, isDsaEligible: s, onClose: I, onNext: m, onBack: S } = e,
        C = (0, i.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: T } = (0, E.YG)(null != C ? C : N.lds),
        h = (0, _.c7)(null == T ? void 0 : T.description),
        L = (0, i.e7)([d.Z], () => d.Z.getIsSubmitting()),
        M = (0, i.e7)([d.Z], () => d.Z.getAppealSignal()),
        p = (0, i.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [P, O] = t.useState(!1),
        [g, j] = t.useState(''),
        b = t.useCallback((e) => {
            o.Z.dispatch({
                type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
                userInput: e
            });
        }, []),
        Z = t.useCallback(async () => {
            if (null !== C)
                try {
                    j(''), await c.uR(C, M, p), null == m || m();
                } catch (n) {
                    var e;
                    j((0, _.Zs)(null === (e = n.body) || void 0 === e ? void 0 : e.code));
                }
        }, [C, M, p, m]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: r.Z.Direction.VERTICAL,
                className: x.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        className: x.title,
                        variant: 'heading-xl/semibold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
                    }),
                    (0, a.jsx)(l.Text, {
                        className: x.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
                    }),
                    null != I &&
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: I
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: n,
                paddingFix: !1,
                children: [
                    (0, a.jsx)('ul', {
                        className: A.listContainer,
                        children: [(0, _.ox)(M), p]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, a.jsx)(
                                    'li',
                                    {
                                        className: A.listItem,
                                        children: (0, a.jsx)(l.Text, {
                                            tag: 'span',
                                            variant: 'text-md/normal',
                                            children: e
                                        })
                                    },
                                    n
                                )
                            )
                    }),
                    s &&
                        (0, a.jsx)('div', {
                            className: A.anchorContainer,
                            children: (0, a.jsx)(l.Anchor, {
                                onClick: () => O((e) => !e),
                                children: (0, a.jsx)(l.Heading, {
                                    variant: 'heading-md/normal',
                                    color: 'text-link',
                                    children: p.length > 0 ? u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
                                })
                            })
                        }),
                    P &&
                        s &&
                        (0, a.jsx)('div', {
                            className: A.inputContainer,
                            children: (0, a.jsx)(l.TextArea, {
                                value: p,
                                onChange: b
                            })
                        }),
                    (0, a.jsx)('div', {
                        className: x.policyContainer,
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: h
                        })
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: A.footerText,
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalFooter, {
                direction: r.Z.Direction.VERTICAL,
                children: [
                    '' !== g &&
                        (0, a.jsx)(l.Text, {
                            className: A.errorText,
                            variant: 'text-lg/normal',
                            color: 'text-danger',
                            children: g
                        }),
                    (0, a.jsxs)('div', {
                        className: A.buttonContainer,
                        children: [
                            (0, a.jsx)(l.Button, {
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                onClick: S,
                                disabled: L,
                                children: u.Z.Messages.BACK
                            }),
                            (0, a.jsx)(l.Button, {
                                onClick: Z,
                                color: l.Button.Colors.RED,
                                submitting: L,
                                children: u.Z.Messages.SUBMIT
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
