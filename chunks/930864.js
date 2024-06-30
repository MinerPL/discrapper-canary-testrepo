n.r(t), n.d(t, {
    ForwardModal: function () {
        return C;
    }
}), n(47120);
var l = n(735250), a = n(470079), i = n(442837), s = n(481060), r = n(359110), c = n(987509), o = n(72214), u = n(592125), d = n(375954), _ = n(934415), h = n(572004), E = n(823379), f = n(859155), S = n(822869), g = n(757853), I = n(912332), A = n(819727), p = n(689938), m = n(971892), b = n(621054);
function C(e) {
    let {
            channelId: t,
            messageId: n,
            initialSelectedDestinations: C,
            forwardOptions: L,
            onClose: N,
            onRequestSent: T,
            ...Z
        } = e, [y, x] = a.useState(''), v = a.useMemo(() => (0, c.dL)(t), [t]), [R, M] = a.useState(C), [P, D] = a.useState(!1), O = R.length, F = O >= A.G, G = (0, i.e7)([d.Z], () => d.Z.getMessage(t, n), [
            t,
            n
        ]), U = (0, i.e7)([u.Z], () => u.Z.getChannel(t), [t]), j = (0, o.s)({
            searchText: y,
            selectedDestinations: R,
            originDestination: v,
            includeMissingDMs: !0
        }), k = a.useCallback(() => {
            (0, S.sF)(t, n), N();
        }, [
            t,
            n,
            N
        ]), H = a.useCallback(() => {
            var e;
            let l = null === (e = u.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
            if (null == l)
                return;
            let a = (0, _.wR)(l, t, n);
            (0, s.showToast)((0, s.createToast)(p.Z.Messages.COPIED_LINK, s.ToastType.LINK)), (0, h.JG)(a);
        }, [
            t,
            n
        ]), Q = a.useCallback(() => {
            x('');
        }, [x]), w = a.useRef(null);
    a.useEffect(() => {
        if ('' === y) {
            var e;
            null === (e = w.current) || void 0 === e || e.focus();
        }
    }, [y]);
    let z = a.useCallback(e => {
            M(t => {
                let n = t.findIndex(t => {
                    let {
                        type: n,
                        id: l
                    } = t;
                    return n === e.type && l === e.id;
                });
                if (-1 === n)
                    return F ? t : (x(''), [
                        e,
                        ...t
                    ]);
                let l = [...t];
                return l.splice(n, 1), l;
            });
        }, [F]), W = a.useCallback(async () => {
            let e = d.Z.getMessage(t, n);
            if (null == e) {
                (0, s.showToast)((0, s.createToast)(p.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
                return;
            }
            D(!0);
            let l = (await Promise.all(R.map(c.qx))).filter(E.lm);
            (0, I.mc)(), null == T || T(), 1 === l.length && (0, r.Kh)(l[0]);
            let a = await f.Z.sendForwards(e, l, L);
            if (a.every(e => {
                    let {status: t} = e;
                    return 'fulfilled' === t;
                })) {
                (0, S.gP)(t, n, !1, l.length), (0, s.showToast)((0, s.createToast)(p.Z.Messages.MESSAGE_FORWARD_SUCCESS, s.ToastType.FORWARD));
                return;
            }
            (0, S.gP)(t, n, !0, l.length);
            let i = R.filter((e, t) => 'rejected' === a[t].status);
            (0, I.Np)({
                messageId: n,
                channelId: t,
                failedDestinations: i,
                forwardOptions: L
            });
        }, [
            t,
            L,
            n,
            R,
            T
        ]);
    if (null == G || null == U)
        return null;
    let B = j.length > 0 ? (0, l.jsx)(g.F, {
            paddingBottom: 16,
            paddingTop: 16,
            rowData: j,
            message: G,
            originChannel: U,
            handleToggleDestination: z,
            selectedDestinations: R,
            disableSelection: F
        }) : (0, l.jsxs)(s.ModalContent, {
            className: m.noResults,
            children: [
                (0, l.jsx)('img', {
                    className: m.noResultsImg,
                    src: b,
                    alt: ''
                }),
                (0, l.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: p.Z.Messages.SEARCH_NO_RESULTS
                })
            ]
        }), K = O <= 1 ? p.Z.Messages.SEND : p.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: O });
    return (0, l.jsxs)(s.ModalRoot, {
        className: m.modal,
        'aria-label': p.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...Z,
        children: [
            (0, l.jsxs)(s.ModalHeader, {
                className: m.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: m.titleLine,
                        children: [
                            (0, l.jsxs)('div', {
                                className: m.title,
                                children: [
                                    (0, l.jsx)(s.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: p.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    F ? (0, l.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-warning',
                                        children: p.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: A.G })
                                    }) : null
                                ]
                            }),
                            (0, l.jsx)(s.ModalCloseButton, {
                                className: m.closeButton,
                                onClick: k
                            })
                        ]
                    }),
                    (0, l.jsx)(s.SearchBar, {
                        ref: w,
                        size: s.SearchBar.Sizes.MEDIUM,
                        query: y,
                        onChange: x,
                        onClear: Q,
                        placeholder: p.Z.Messages.SEARCH,
                        'aria-label': p.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            B,
            (0, l.jsxs)(s.ModalFooter, {
                className: m.footer,
                children: [
                    (0, l.jsx)(s.Button, {
                        submitting: P,
                        disabled: 0 === O,
                        onClick: W,
                        children: K
                    }),
                    (0, l.jsx)(s.Button, {
                        onClick: H,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        children: p.Z.Messages.COPY_LINK
                    })
                ]
            })
        ]
    });
}
