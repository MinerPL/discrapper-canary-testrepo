t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(484614),
    o = t(313201),
    l = t(518638),
    c = t(689938),
    d = t(486664);
function _(e) {
    let { onClose: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(i.ModalHeader, {
                separator: !1,
                className: d.errorHeader,
                children: [
                    (0, n.jsx)('div', { className: d.errorArt }),
                    (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: c.Z.Messages.GENERIC_ERROR_TITLE
                    })
                ]
            }),
            (0, n.jsx)(i.ModalContent, {
                className: d.errorBody,
                children: (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    className: d.bodyText,
                    children: c.Z.Messages.GENERIC_ERROR_BODY
                })
            }),
            (0, n.jsx)(i.ModalFooter, {
                children: (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.BRAND,
                    onClick: s,
                    children: c.Z.Messages.CLOSE
                })
            })
        ]
    });
}
s.Z = function (e) {
    let { onClose: s, onClaim: t, code: u, outboundPromotion: E, transitionState: T } = e,
        [S, I] = a.useState(null),
        N = (0, o.Dt)();
    return (
        a.useEffect(() => {
            null == u &&
                (0, l.A2)(E.id)
                    .then((e) => t(e))
                    .catch((e) => {
                        var s;
                        return I(null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code);
                    });
        }, [u, E.id, t]),
        (0, n.jsx)(i.ModalRoot, {
            transitionState: T,
            'aria-labelledby': N,
            children:
                null != S
                    ? (0, n.jsx)(_, { onClose: s })
                    : null == u
                      ? (0, n.jsx)(i.ModalContent, { children: (0, n.jsx)(i.Spinner, { className: d.loading }) })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(i.ModalHeader, {
                                    separator: !1,
                                    className: d.headerContainer,
                                    children: [
                                        (0, n.jsx)('div', { className: d.art }),
                                        (0, n.jsx)(i.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: c.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                                        })
                                    ]
                                }),
                                (0, n.jsxs)(i.ModalContent, {
                                    children: [
                                        (0, n.jsx)(i.Text, {
                                            variant: 'text-md/normal',
                                            className: d.bodyText,
                                            children: E.outboundRedemptionModalBody
                                        }),
                                        (0, n.jsx)(i.FormDivider, { className: d.formDivider }),
                                        (0, n.jsxs)(i.FormSection, {
                                            title: c.Z.Messages.REDEMPTION_CODE,
                                            className: d.formSection,
                                            children: [
                                                (0, n.jsx)(r.Z, {
                                                    value: u,
                                                    buttonColor: i.Button.Colors.BRAND,
                                                    buttonLook: i.Button.Looks.FILLED,
                                                    delay: 1000,
                                                    inputClassName: d.textInput
                                                }),
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: d.confirmationText,
                                                    children: c.Z.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsxs)(i.ModalFooter, {
                                    children: [
                                        (0, n.jsx)(i.Button, {
                                            color: i.Button.Colors.BRAND,
                                            onClick: () => {
                                                let e = (0, l.BU)(u, E);
                                                window.open(e, '_blank');
                                            },
                                            children: c.Z.Messages.REDEEM
                                        }),
                                        (0, n.jsx)(i.Button, {
                                            onClick: s,
                                            look: i.Button.Looks.LINK,
                                            color: d.maybeLaterButton,
                                            children: c.Z.Messages.MAYBE_LATER
                                        })
                                    ]
                                })
                            ]
                        })
        })
    );
};
