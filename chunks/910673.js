a.r(t);
var n = a(735250),
    o = a(470079),
    r = a(481060),
    s = a(230711),
    l = a(782568),
    i = a(880257),
    d = a(187819),
    E = a(63063),
    _ = a(163268),
    c = a(981631),
    u = a(526761),
    I = a(689938),
    C = a(754812),
    R = a(444812);
t.default = (e) => {
    let { channelId: t, messageId: T, transitionState: A, onClose: N } = e,
        M = (0, i.Z)(),
        O = (0, d._p)({
            location: 'explicit-media-learn-more',
            autoTrackExposure: !1
        }),
        h = o.useCallback(
            (e) => {
                (0, _.aP)({
                    action: e,
                    channelId: t,
                    messageId: T
                });
            },
            [t, T]
        );
    return (
        o.useEffect(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: T
            });
        }, [t, T]),
        (0, n.jsxs)(r.ModalRoot, {
            transitionState: A,
            'aria-label': I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
                (0, n.jsx)(r.ModalHeader, {
                    separator: !1,
                    className: C.modalHeader,
                    children: (0, n.jsx)('img', {
                        src: R,
                        alt: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                        className: C.headerImg
                    })
                }),
                (0, n.jsxs)(r.ModalContent, {
                    className: C.modalBody,
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: 'heading-lg/bold',
                            className: C.modalInteriorHeader,
                            children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: M ? I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }),
                        (0, n.jsxs)('div', {
                            className: C.buttonContainer,
                            children: [
                                M
                                    ? (0, n.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: function () {
                                              h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), s.Z.open(c.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: O ? u.to.EXPLICIT_MEDIA_REDACTION_V2 : u.to.EXPLICIT_MEDIA_REDACTION }), N();
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                                      })
                                    : (0, n.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: () => {
                                              (0, l.Z)(E.Z.getArticleURL(c.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.LEARN_MORE
                                      }),
                                (0, n.jsx)(r.Button, {
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: function () {
                                        N(), h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                                }),
                                (0, n.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                        handleFalsePositiveHook: () => {
                                            N(),
                                                h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, r.openModalLazy)(async () => {
                                                    let { default: e } = await a(788679);
                                                    return (a) =>
                                                        (0, n.jsx)(e, {
                                                            channelId: t,
                                                            messageId: T,
                                                            ...a
                                                        });
                                                });
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
