n.r(t),
    n.d(t, {
        ForwardModal: function () {
            return O;
        }
    }),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(392711),
    i = n(106351),
    r = n(442837),
    o = n(481060),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    h = n(849522),
    _ = n(359110),
    f = n(987509),
    E = n(72214),
    g = n(131704),
    m = n(592125),
    S = n(375954),
    A = n(934415),
    I = n(572004),
    p = n(823379),
    C = n(859155),
    N = n(822869),
    L = n(346610),
    b = n(895442),
    v = n(757853),
    T = n(912332),
    x = n(646746),
    Z = n(819727),
    y = n(689938),
    M = n(619499),
    P = n(621054);
function R(e) {
    let { message: t, forwardOptions: n, sendLabel: s, canSend: _, selectedDestinations: E, isSending: S, onSend: A, showPreview: I } = e,
        C = (0, h.Z)(),
        L = E.map(f.hl).find(p.lm),
        b = (0, r.e7)([m.Z], () => m.Z.getChannel(L), [L]),
        v = a.useMemo(
            () =>
                null != b
                    ? b
                    : (0, g.kt)({
                          id: '1',
                          type: i.d.DM
                      }),
            [b]
        ),
        Z = (0, N.Ad)(),
        [P, R] = a.useState(() => (0, u.H2)()),
        { textValue: O, richValue: D } = P,
        [w, G] = a.useState(!1),
        j = a.useCallback(() => G(!0), []),
        U = a.useCallback(() => G(!1), []),
        k = a.useCallback(
            (e, n, l) => {
                R({
                    textValue: n,
                    richValue: l
                }),
                    Z(t.channel_id, t.id);
            },
            [Z, t]
        ),
        F = a.useCallback(() => {
            A(O);
        }, [O, A]),
        H = a.useCallback(
            () =>
                !_ || O.length > C
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (F(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [F, O, C, _]
        );
    return (0, l.jsxs)(o.ModalFooter, {
        className: M.footerWithMessage,
        children: [
            I &&
                (0, l.jsx)('div', {
                    className: M.forwardPreviewWrapper,
                    children: (0, l.jsx)(x.O, {
                        message: t,
                        forwardOptions: n
                    })
                }),
            (0, l.jsxs)('div', {
                className: M.footerButtons,
                children: [
                    (0, l.jsx)(d.Z, {
                        innerClassName: M.messageInput,
                        onChange: k,
                        placeholder: y.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                        channel: v,
                        textValue: O,
                        richValue: D,
                        type: c.I.FORWARD_MESSAGE_INPUT,
                        onBlur: U,
                        onFocus: j,
                        focused: w,
                        onSubmit: H,
                        parentModalKey: T.so,
                        autoCompletePosition: 'bottom',
                        emojiPickerCloseOnModalOuterClick: !0
                    }),
                    (0, l.jsx)(o.Button, {
                        className: M.sendWithMessage,
                        submitting: S,
                        disabled: !_ || O.length > C,
                        onClick: F,
                        children: s
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { channelId: t, messageId: i, initialSelectedDestinations: c, forwardOptions: u, onClose: d, onRequestSent: h, ...g } = e,
        { hasOneTapSendButton: O, hasMessageInput: D, hasPreview: w } = (0, L.yk)({ location: 'ForwardModal' }),
        G = a.useMemo(() => (0, f.dL)(t), [t]),
        [j, U] = a.useState(!1),
        k = (0, r.e7)([S.Z], () => S.Z.getMessage(t, i), [t, i]),
        F = (0, r.e7)([m.Z], () => m.Z.getChannel(t), [t]),
        H = (0, N.ZF)(),
        W = (0, N.mh)(),
        B = a.useRef(0),
        z = a.useRef(0),
        [Q, K] = a.useState(c),
        V = Q.length,
        q = V >= Z.G,
        [Y, X] = a.useState(''),
        J = a.useCallback(
            (e) => {
                X(e), (z.current += 1), '' !== e && W(t, i);
            },
            [t, i, W]
        ),
        $ = (0, E.s)({
            searchText: Y,
            selectedDestinations: Q,
            originDestination: G,
            includeMissingDMs: !0
        }),
        ee = a.useCallback(() => {
            (0, N.sF)({
                channelId: t,
                messageId: i,
                numDestinationChanges: B.current,
                numQueryChanges: z.current
            }),
                d();
        }, [t, i, d]),
        et = a.useCallback(() => {
            var e;
            let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
            if (null == n) return;
            let l = (0, A.wR)(n, t, i);
            (0, o.showToast)((0, o.createToast)(y.Z.Messages.COPIED_LINK, o.ToastType.LINK)), (0, I.JG)(l), (0, N.xp)(t, i);
        }, [t, i]),
        en = a.useCallback(() => {
            X('');
        }, [X]),
        el = a.useRef(null);
    a.useEffect(() => {
        if ('' === Y) {
            var e;
            null === (e = el.current) || void 0 === e || e.focus();
        }
    }, [Y]);
    let ea = a.useMemo(
            () =>
                (0, s.throttle)(
                    () => {
                        (0, o.showToast)((0, o.createToast)(y.Z.Messages.MESSAGE_FORWARD_SUCCESS, o.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        es = a.useCallback(
            (e) => {
                H(t, i, '' !== Y),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return q ? t : (X(''), (B.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (B.current += 1), l;
                    });
            },
            [t, q, i, Y, H]
        ),
        ei = a.useCallback(
            async function (e) {
                let { withMessage: a, transitionToDestination: s, closeAfterSend: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = S.Z.getMessage(t, i);
                if (null == c) {
                    (0, o.showToast)((0, o.createToast)(y.Z.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE));
                    return;
                }
                U(!0);
                let d = (await Promise.all(e.map(f.qx))).filter(p.lm);
                if (
                    (0, b.Z)(c, d) &&
                    !(await new Promise((e) => {
                        (0, o.openModalLazy)(async () => {
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
                r && (0, T.mc)(), null == h || h(), s && (0, _.Kh)(d[0]);
                let E = await C.Z.sendForwards(c, d, {
                        ...u,
                        withMessage: a
                    }),
                    g = d.some((e) => {
                        let t = m.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    E.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, N.gP)({
                        channelId: t,
                        messageId: i,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: d.length,
                        numDestinationChanges: B.current,
                        numQueryChanges: z.current,
                        anyDestinationHasSlowmode: g
                    }),
                        ea();
                    return;
                }
                (0, N.gP)({
                    channelId: t,
                    messageId: i,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: d.length,
                    numDestinationChanges: B.current,
                    numQueryChanges: z.current,
                    anyDestinationHasSlowmode: g
                });
                let A = e.filter((e, t) => 'rejected' === E[t].status);
                (0, T.Np)({
                    messageId: i,
                    channelId: t,
                    failedDestinations: A,
                    forwardOptions: u
                });
            },
            [t, u, i, h, ea]
        ),
        er = a.useCallback(
            (e) => {
                ei(Q, {
                    withMessage: e,
                    transitionToDestination: 1 === Q.length,
                    closeAfterSend: !0
                });
            },
            [ei, Q]
        ),
        eo = a.useCallback(() => er(), [er]),
        ec = a.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ei([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ei]
        );
    if (null == k || null == F) return null;
    let eu =
            $.length > 0
                ? (0, l.jsx)(v.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: $,
                      rowMode: O ? v.G.SEND : v.G.TOGGLE,
                      message: k,
                      originChannel: F,
                      handleToggleDestination: O ? ec : es,
                      selectedDestinations: Q,
                      disableSelection: q
                  })
                : (0, l.jsxs)(o.ModalContent, {
                      className: M.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: M.noResultsImg,
                              src: P,
                              alt: ''
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: y.Z.Messages.SEARCH_NO_RESULTS
                          })
                      ]
                  }),
        ed = V <= 1 ? y.Z.Messages.SEND : y.Z.Messages.MESSAGES_SEND_SEPARATELY.format({ count: V });
    return (0, l.jsxs)(o.ModalRoot, {
        className: M.modal,
        'aria-label': y.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
        ...g,
        children: [
            (0, l.jsxs)(o.ModalHeader, {
                className: M.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: M.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: M.title,
                                children: (0, l.jsx)(o.HeadingLevel, {
                                    component: (0, l.jsx)(o.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: y.Z.Messages.MESSAGE_ACTION_FORWARD_TO
                                    }),
                                    children: q
                                        ? (0, l.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: y.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({ count: Z.G })
                                          })
                                        : (O || D) &&
                                          (0, l.jsx)(o.Heading, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: y.Z.Messages.MESSAGE_FORWARD_SUBTITLE
                                          })
                                })
                            }),
                            (0, l.jsx)(o.ModalCloseButton, {
                                className: M.closeButton,
                                onClick: ee
                            })
                        ]
                    }),
                    O &&
                        w &&
                        (0, l.jsx)('div', {
                            className: M.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(x.O, {
                                message: k,
                                forwardOptions: u
                            })
                        }),
                    (0, l.jsx)(o.SearchBar, {
                        ref: el,
                        size: o.SearchBar.Sizes.MEDIUM,
                        query: Y,
                        onChange: J,
                        onClear: en,
                        placeholder: y.Z.Messages.SEARCH,
                        'aria-label': y.Z.Messages.SEARCH,
                        autoFocus: !0
                    })
                ]
            }),
            eu,
            !O &&
                (D
                    ? (0, l.jsx)(R, {
                          message: k,
                          forwardOptions: u,
                          sendLabel: ed,
                          canSend: V > 0,
                          selectedDestinations: Q,
                          isSending: j,
                          onSend: er,
                          showPreview: w
                      })
                    : (0, l.jsxs)(o.ModalFooter, {
                          className: M.footer,
                          children: [
                              (0, l.jsx)(o.Button, {
                                  submitting: j,
                                  disabled: 0 === V,
                                  onClick: eo,
                                  children: ed
                              }),
                              (0, l.jsx)(o.Button, {
                                  onClick: et,
                                  look: o.Button.Looks.OUTLINED,
                                  color: o.Button.Colors.PRIMARY,
                                  children: y.Z.Messages.COPY_LINK
                              })
                          ]
                      }))
        ]
    });
}
