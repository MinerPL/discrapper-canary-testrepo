t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(484614),
    o = t(313201),
    l = t(430492),
    c = t(518638),
    d = t(689938),
    _ = t(287420);
s.Z = function (e) {
    let { onClose: s, onClaim: t, code: E, outboundPromotion: u, transitionState: I } = e,
        [T, S] = a.useState(null),
        N = (0, o.Dt)();
    return (
        a.useEffect(() => {
            null == E &&
                (0, c.A2)(u.id)
                    .then((e) => t(e))
                    .catch((e) => {
                        var s;
                        return S(null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code);
                    });
        }, [E, u.id, t]),
        (0, n.jsx)(i.ModalRoot, {
            transitionState: I,
            'aria-labelledby': N,
            children:
                null != T
                    ? (0, n.jsx)(l.L1, {
                          onClose: s,
                          errorCode: T
                      })
                    : null == E
                      ? (0, n.jsx)(i.ModalContent, { children: (0, n.jsx)(i.Spinner, { className: _.loading }) })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(i.ModalHeader, {
                                    separator: !1,
                                    className: _.headerContainer,
                                    children: [
                                        (0, n.jsx)('div', { className: _.art }),
                                        (0, n.jsx)(i.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: d.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                                        })
                                    ]
                                }),
                                (0, n.jsxs)(i.ModalContent, {
                                    children: [
                                        (0, n.jsx)(i.Text, {
                                            variant: 'text-md/normal',
                                            className: _.bodyText,
                                            children: u.outboundRedemptionModalBody
                                        }),
                                        (0, n.jsx)(i.FormDivider, { className: _.formDivider }),
                                        (0, n.jsxs)(i.FormSection, {
                                            title: d.Z.Messages.REDEMPTION_CODE,
                                            className: _.formSection,
                                            children: [
                                                (0, n.jsx)(r.Z, {
                                                    value: E,
                                                    buttonColor: i.Button.Colors.BRAND,
                                                    buttonLook: i.Button.Looks.FILLED,
                                                    delay: 1000,
                                                    inputClassName: _.textInput
                                                }),
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: _.confirmationText,
                                                    children: d.Z.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
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
                                                let e = (0, c.BU)(E, u);
                                                window.open(e, '_blank');
                                            },
                                            children: d.Z.Messages.REDEEM
                                        }),
                                        (0, n.jsx)(i.Button, {
                                            onClick: s,
                                            look: i.Button.Looks.LINK,
                                            color: _.maybeLaterButton,
                                            children: d.Z.Messages.MAYBE_LATER
                                        })
                                    ]
                                })
                            ]
                        })
        })
    );
};
