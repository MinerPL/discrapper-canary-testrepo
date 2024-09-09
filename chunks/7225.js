l.r(n),
    l.d(n, {
        default: function () {
            return T;
        }
    }),
    l(47120);
var i,
    t,
    s = l(735250),
    a = l(470079),
    r = l(442837),
    o = l(481060),
    d = l(728345),
    u = l(812206),
    c = l(886176),
    m = l(270144),
    p = l(572004),
    v = l(504211),
    h = l(283836),
    S = l(507608),
    x = l(981631),
    g = l(272242),
    I = l(689938),
    N = l(437561);
function T(e) {
    let { onClose: n, transitionState: l, appId: i, onlySubscribeServerSubForGuildId: t } = e,
        T = (0, r.e7)([u.Z], () => u.Z.getApplication(i), [i]),
        [j, R] = a.useState(() => (u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 })),
        f = a.useRef(null),
        [b, O] = a.useState(!0),
        k = () => {
            var e;
            (null === (e = f.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? O(!1) : O(!0);
        };
    a.useEffect(() => {
        0 === j.status &&
            (R({ status: 1 }),
            d.Z.fetchApplication(i)
                .then(() => {
                    R({ status: 2 });
                })
                .catch((e) => {
                    R({
                        status: 3,
                        error: e.message
                    });
                }));
    }, [i, j.status]);
    let { subscriptions: E, otps: P } = (0, h.q)(i);
    if (((0, m.FE)(i, null == T ? void 0 : T.primarySkuId, { refetchOnMount: !0 }), null == T)) return null;
    let M = I.Z.Messages.STOREFRONT_TITLE.format({ appName: T.name });
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: l,
        'aria-label': M,
        size: o.ModalSize.DYNAMIC,
        className: N.modal,
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                className: N.modalHeader,
                children: [
                    (0, s.jsxs)('div', {
                        className: N.modalTitle,
                        children: [
                            (0, s.jsx)(c.Z, {}),
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                children: M
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: N.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, s.jsx)(o.Button, {
                                    look: o.ButtonLooks.BLANK,
                                    size: o.ButtonSizes.ICON,
                                    color: o.ButtonColors.TRANSPARENT,
                                    'aria-label': I.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(i, g.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(e), (0, o.showToast)((0, o.createToast)(I.Z.Messages.COPIED_LINK, o.ToastType.SUCCESS)), (0, v.X)(i, v.B.STORE_MODAL);
                                    },
                                    children: (0, s.jsx)(o.LinkIcon, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: 'var(--white)'
                                    })
                                }),
                            (0, s.jsx)(o.ModalCloseButton, {
                                onClick: n,
                                className: N.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(o.ModalContent, {
                scrollerRef: (e) => {
                    null != e && ((f.current = e), k());
                },
                onScroll: k,
                children: (0, s.jsx)(S.AF, {
                    app: T,
                    onlySubscribeServerSubForGuildId: t,
                    subscriptions: E,
                    otps: P
                })
            }),
            (0, s.jsx)('div', {
                className: N.containerScrollGradient,
                'data-shown': b
            })
        ]
    });
}
((t = i || (i = {}))[(t.NONE = 0)] = 'NONE'), (t[(t.FETCHING = 1)] = 'FETCHING'), (t[(t.FETCHED = 2)] = 'FETCHED'), (t[(t.ERROR = 3)] = 'ERROR');
