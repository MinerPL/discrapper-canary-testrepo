t.r(e),
    t.d(e, {
        default: function () {
            return E;
        }
    }),
    t(47120);
var o,
    s,
    n = t(735250),
    c = t(470079),
    i = t(442837),
    r = t(481060),
    l = t(728345),
    d = t(812206),
    u = t(886176),
    p = t(572004),
    f = t(504211),
    _ = t(283836),
    m = t(507608),
    N = t(981631),
    T = t(272242),
    h = t(689938),
    C = t(213891);
function E(a) {
    let { onClose: e, transitionState: t, appId: o, guildId: s } = a,
        E = (0, i.e7)([d.Z], () => d.Z.getApplication(o), [o]),
        [S, g] = c.useState(() => (d.Z.isFetchingApplication(o) ? { status: 1 } : { status: 0 })),
        x = c.useRef(null),
        [R, I] = c.useState(!0),
        O = () => {
            var a;
            (null === (a = x.current) || void 0 === a ? void 0 : a.isScrolledToBottom()) === !0 ? I(!1) : I(!0);
        };
    c.useEffect(() => {
        0 === S.status &&
            (g({ status: 1 }),
            l.ZP.fetchApplication(o)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((a) => {
                    g({
                        status: 3,
                        error: a.message
                    });
                }));
    }, [o, S.status]);
    let { subscriptions: b, otps: j } = (0, _.q)(o);
    if (null == E) return null;
    let k = h.Z.Messages.STOREFRONT_TITLE.format({ appName: E.name });
    return (0, n.jsxs)(r.ModalRoot, {
        transitionState: t,
        'aria-label': k,
        size: r.ModalSize.DYNAMIC,
        className: C.modal,
        children: [
            (0, n.jsxs)(r.ModalHeader, {
                className: C.modalHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: C.modalTitle,
                        children: [
                            (0, n.jsx)(u.Z, {}),
                            (0, n.jsx)(r.Heading, {
                                variant: 'heading-md/semibold',
                                children: k
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: C.modalHeaderLinks,
                        children: [
                            p.wS &&
                                (0, n.jsx)(r.Button, {
                                    look: r.ButtonLooks.BLANK,
                                    size: r.ButtonSizes.ICON,
                                    color: r.ButtonColors.TRANSPARENT,
                                    'aria-label': h.Z.Messages.COPY_LINK,
                                    onClick: () => {
                                        let a = ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(o, T.ApplicationDirectoryProfileSections.STORE));
                                        (0, p.JG)(a), (0, r.showToast)((0, r.createToast)(h.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS)), (0, f.X)(o, f.B.STORE_MODAL);
                                    },
                                    children: (0, n.jsx)(r.LinkIcon, { size: 'sm' })
                                }),
                            (0, n.jsx)(r.ModalCloseButton, {
                                onClick: e,
                                className: C.modalCloseBtn
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(r.ModalContent, {
                scrollerRef: (a) => {
                    null != a && ((x.current = a), O());
                },
                onScroll: O,
                children: (0, n.jsx)(m.AF, {
                    app: E,
                    guildId: s,
                    subscriptions: b,
                    otps: j
                })
            }),
            (0, n.jsx)('div', {
                className: C.containerScrollGradient,
                'data-shown': R
            })
        ]
    });
}
((s = o || (o = {}))[(s.NONE = 0)] = 'NONE'), (s[(s.FETCHING = 1)] = 'FETCHING'), (s[(s.FETCHED = 2)] = 'FETCHED'), (s[(s.ERROR = 3)] = 'ERROR');
