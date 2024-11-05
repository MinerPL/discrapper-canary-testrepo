n.r(e);
var o = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(230711),
    i = n(782568),
    d = n(880257),
    s = n(187819),
    c = n(63063),
    u = n(247206),
    I = n(981631),
    _ = n(526761),
    m = n(388032),
    E = n(754812),
    h = n(444812);
e.default = (t) => {
    let { channelId: e, messageId: f, transitionState: C, onClose: g } = t,
        v = (0, d.Z)(),
        A = (0, s._p)({ location: 'explicit-media-learn-more' }),
        R = l.useCallback(
            (t) => {
                (0, u.aP)({
                    action: t,
                    channelId: e,
                    messageId: f
                });
            },
            [e, f]
        );
    return (
        l.useEffect(() => {
            (0, u.aP)({
                action: u.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: f
            });
        }, [e, f]),
        (0, o.jsxs)(r.ModalRoot, {
            transitionState: C,
            'aria-label': m.intl.string(m.t.xdm3XF),
            children: [
                (0, o.jsx)(r.ModalHeader, {
                    separator: !1,
                    className: E.modalHeader,
                    children: (0, o.jsx)('img', {
                        src: h,
                        alt: m.intl.string(m.t.id3fND),
                        className: E.headerImg
                    })
                }),
                (0, o.jsxs)(r.ModalContent, {
                    className: E.modalBody,
                    children: [
                        (0, o.jsx)(r.Heading, {
                            variant: 'heading-lg/bold',
                            className: E.modalInteriorHeader,
                            children: m.intl.string(m.t.sGW77u)
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: v ? m.intl.string(m.t.XW3vjo) : m.intl.string(m.t.i4daNj)
                        }),
                        (0, o.jsxs)('div', {
                            className: E.buttonContainer,
                            children: [
                                v
                                    ? (0, o.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: function () {
                                              R(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), A ? a.Z.open(I.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: _.to.EXPLICIT_MEDIA_REDACTION_V2 }) : a.Z.open(I.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: _.to.EXPLICIT_MEDIA_REDACTION }), g();
                                          },
                                          fullWidth: !0,
                                          children: m.intl.string(m.t['9D+zGR'])
                                      })
                                    : (0, o.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: () => {
                                              (0, i.Z)(c.Z.getArticleURL(I.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: m.intl.string(m.t.hvVgAQ)
                                      }),
                                (0, o.jsx)(r.Button, {
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: function () {
                                        g(), R(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: m.intl.string(m.t.bmbHPD)
                                }),
                                (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: m.intl.format(m.t.Ge0HUl, {
                                        handleFalsePositiveHook: () => {
                                            g(),
                                                R(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, r.openModalLazy)(async () => {
                                                    let { default: t } = await n(788679);
                                                    return (n) =>
                                                        (0, o.jsx)(t, {
                                                            channelId: e,
                                                            messageId: f,
                                                            ...n
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
