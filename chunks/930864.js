n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return Z;
        }
    }),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(392711),
    i = n(442837),
    r = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    h = n(592125),
    _ = n(375954),
    f = n(934415),
    E = n(572004),
    g = n(823379),
    m = n(859155),
    S = n(822869),
    A = n(346610),
    I = n(895442),
    p = n(757853),
    C = n(388275),
    N = n(912332),
    L = n(646746),
    v = n(819727),
    b = n(689938),
    x = n(463061),
    T = n(621054);
function Z(e) {
    let { channelId: t, messageId: Z, initialSelectedDestinations: M, forwardOptions: y, onClose: P, onRequestSent: R, ...O } = e,
        { hasOneTapSendButton: D, hasMessageInput: w, hasPreview: G } = (0, A.yk)({ location: 'ForwardModal' }),
        j = a.useMemo(() => (0, u.dL)(t), [t]),
        [F, U] = a.useState(!1),
        k = (0, i.e7)([_.Z], () => _.Z.getMessage(t, Z), [t, Z]),
        W = (0, i.e7)([h.Z], () => h.Z.getChannel(t), [t]),
        H = (0, S.ZF)(),
        B = (0, S.mh)(),
        z = a.useRef(0),
        Q = a.useRef(0),
        [V, K] = a.useState(M),
        q = V.length,
        Y = q >= v.G,
        [X, J] = a.useState(''),
        $ = a.useCallback(
            (e) => {
                J(e), (Q.current += 1), '' !== e && B(t, Z);
            },
            [t, Z, B]
        ),
        ee = (0, d.s)({
            searchText: X,
            selectedDestinations: V,
            originDestination: j,
            includeMissingDMs: !0
        }),
        et = a.useCallback(() => {
            (0, S.sF)({
                channelId: t,
                messageId: Z,
                numDestinationChanges: z.current,
                numQueryChanges: Q.current
            }),
                P();
        }, [t, Z, P]),
        en = a.useCallback(() => {
            var e;
            let n = null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id,
                l = (0, f.wR)(n, t, Z);
            (0, r.showToast)((0, r.createToast)(b.Z.Messages.COPIED_LINK, r.ToastType.LINK)), (0, E.JG)(l), (0, S.xp)(t, Z);
        }, [t, Z]),
        el = a.useCallback(() => {
            J('');
        }, [J]),
        ea = a.useRef(null);
    a.useEffect(() => {
        if ('' === X) {
            var e;
            null === (e = ea.current) || void 0 === e || e.focus();
        }
    }, [X]);
    let es = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, r.showToast)((0, r.createToast)(b.Z.Messages.MESSAGE_FORWARD_SUCCESS, r.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        ei = a.useCallback(
            (e) => {
                H(t, Z, '' !== X),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return Y ? t : (J(''), (z.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (z.current += 1), l;
                    });
            },
            [t, Y, Z, X, H]
        ),
        er = a.useCallback(
            async function (e) {
                let { withMessage: a, transitionToDestination: s, closeAfterSend: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = _.Z.getMessage(t, Z);
                if (null == d) {
                    (0, r.showToast)((0, r.createToast)(b.Z.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE));
                    return;
                }
                U(!0);
                let f = (await Promise.all(e.map(u.qx))).filter(g.lm);
                if (
                    (0, I.Z)(d, f) &&
                    !(await new Promise((e) => {
                        (0, r.openModalLazy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(t, {
                                    ...n,
                                    onConfirm: () => e(!0),
                                    onBack: () => e(!1)
                                });
                        });
                    }))
                ) {
                    U(!1);
                    return;
                }
                i && (0, N.mc)(), null == R || R(), s && (await o.Z.fetchMessages({ channelId: f[0] }), (0, c.Kh)(f[0]));
                let E = await m.Z.sendForwards(d, f, {
                        ...y,
                        withMessage: a
                    }),
                    A = f.some((e) => {
                        let t = h.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    E.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, S.gP)({
                        channelId: t,
                        messageId: Z,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: f.length,
                        numDestinationChanges: z.current,
                        numQueryChanges: Q.current,
                        anyDestinationHasSlowmode: A
                    }),
                        es();
                    return;
                }
                (0, S.gP)({
                    channelId: t,
                    messageId: Z,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: f.length,
                    numDestinationChanges: z.current,
                    numQueryChanges: Q.current,
                    anyDestinationHasSlowmode: A
                });
                let p = e.filter((e, t) => 'rejected' === E[t].status);
                (0, N.Np)({
                    messageId: Z,
                    channelId: t,
                    failedDestinations: p,
                    forwardOptions: y
                });
            },
            [t, y, Z, R, es]
        ),
        eo = a.useCallback(
            (e) => {
                er(V, {
                    withMessage: e,
                    transitionToDestination: 1 === V.length,
                    closeAfterSend: !0
                });
            },
            [er, V]
        ),
        ec = a.useCallback(() => eo(), [eo]),
        eu = a.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                er([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [er]
        );
    if (null == k || null == W) return null;
    let ed =
            ee.length > 0
                ? (0, l.jsx)(p.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ee,
                      rowMode: D ? p.G.SEND : p.G.TOGGLE,
                      message: k,
                      originChannel: W,
                      handleToggleDestination: D ? eu : ei,
                      selectedDestinations: V,
                      disableSelection: Y
                  })
                : (0, l.jsxs)(r.ModalContent, {
                      className: x.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: x.noResultsImg,
                              src: T,
                              alt: ''
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: b.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        eh = q <= 1 ? b.Z.Messages.SEND : b.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: q });
    return (0, l.jsxs)(r.ModalRoot, {
        className: x.modal,
        'aria-label': b.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...O,
        children: [
            (0, l.jsxs)(r.ModalHeader, {
                className: x.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: x.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: x.title,
                                children: (0, l.jsx)(r.HeadingLevel, {
                                    component: (0, l.jsx)(r.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: b.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: Y
                                        ? (0, l.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: b.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: v.G })
                                          })
                                        : (D || w) &&
                                          (0, l.jsx)(r.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: b.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(r.ModalCloseButton, {
                                className: x.closeButton,
                                onClick: et
                            })
                        ]
                    }),
                    D &&
                        G &&
                        (0, l.jsx)('div', {
                            className: x.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(L.O, {
                                message: k,
                                forwardOptions: y
                            })
                        }),
                    (0, l.jsx)(r.SearchBar, {
                        ref: ea,
                        size: r.SearchBar.Sizes.MEDIUM,
                        query: X,
                        onChange: $,
                        onClear: el,
                        placeholder: b.Z.Messages.SEARCH,
                        'aria-label': b.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            ed,
            !D &&
                (w
                    ? (0, l.jsx)(C.n, {
                          message: k,
                          forwardOptions: y,
                          sendLabel: eh,
                          canSend: q > 0,
                          selectedDestinations: V,
                          isSending: F,
                          onSend: eo,
                          showPreview: G
                      })
                    : (0, l.jsxs)(r.ModalFooter, {
                          className: x.footer,
                          children: [
                              (0, l.jsx)(r.Button, {
                                  submitting: F,
                                  disabled: 0 === q,
                                  onClick: ec,
                                  children: eh
                              }),
                              (0, l.jsx)(r.Button, {
                                  onClick: en,
                                  look: r.Button.Looks.OUTLINED,
                                  color: r.Button.Colors.PRIMARY,
                                  children: b.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
