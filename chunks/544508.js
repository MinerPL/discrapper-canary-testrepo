s(47120), s(757143);
var n = s(735250),
    i = s(470079),
    a = s(120356),
    r = s.n(a),
    o = s(567526),
    l = s(399606),
    u = s(481060),
    c = s(607070),
    d = s(745510),
    E = s(78675),
    _ = s(899007),
    g = s(51144),
    m = s(346585),
    S = s(81259),
    I = s(119848),
    T = s(801461),
    N = s(228168),
    O = s(689938),
    h = s(740080),
    f = s(733469);
let M = i.forwardRef(function (e, t) {
    let { style: s, value: i, placeholder: a, maxLength: o, onFocus: l, onChange: c } = e;
    return (0, n.jsx)(u.TextArea, {
        className: r()(h.userCardInput, s),
        autosize: !0,
        error: null,
        showCharacterCount: !1,
        spellCheck: !1,
        showRemainingCharacterCount: !1,
        value: i,
        placeholder: a,
        rows: 1,
        maxLength: o,
        onChange: c,
        onFocus: l,
        onKeyDown: (e) => {
            'Enter' === e.key && e.preventDefault();
        },
        inputRef: t
    });
});
t.Z = i.forwardRef(function (e, t) {
    let { user: s, error: a, formValues: L, displayProfile: x, onChangeFormValue: C, onFocusDisplayName: R, onFocusUsername: A, editState: v, footerNotice: P, usernameSuggestionLoading: p, oneClickFlow: y } = e,
        { username: Z, globalName: U } = L,
        G = i.useRef(null),
        b = i.useRef(null),
        j = i.useMemo(() => s.merge({ discriminator: '0000' }), [s]),
        [D, W] = (0, u.useSpring)(() => ({
            opacity: 0,
            y: 5
        }));
    i.useEffect(() => {
        W({
            y: 0,
            opacity: 1,
            from: {
                y: 5,
                opacity: 0
            }
        });
    }, [W, v]),
        i.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e, t, s;
                    null === (t = b.current) || void 0 === t || t.setSelection(0, null === (e = b.current) || void 0 === e ? void 0 : e.value.length), null === (s = b.current) || void 0 === s || s.focus();
                },
                focusUsername: () => {
                    var e, t, s;
                    null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (s = G.current) || void 0 === s || s.focus();
                }
            }),
            []
        );
    let k = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        { createMultipleConfettiAt: F } = i.useContext(d.h),
        w = null == x ? void 0 : x.getLegacyUsername();
    return (
        i.useEffect(() => {
            if (!k && v === T.Wq.PREVIEW && !!s.username.includes(T.nA))
                F(
                    window.innerWidth / 2 + 150,
                    0,
                    {
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 0,
                                y: -180
                            },
                            maxValue: {
                                x: 500,
                                y: 180
                            }
                        }
                    },
                    15
                ),
                    F(
                        window.innerWidth / 2 - 150,
                        0,
                        {
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -500,
                                    y: -180
                                },
                                maxValue: {
                                    x: 0,
                                    y: 180
                                }
                            }
                        },
                        15
                    );
        }, [F, v, s, k]),
        (0, n.jsxs)('div', {
            className: r()(h.userCardContainer, { [h.shinyCard]: v === T.Wq.PREVIEW }),
            children: [
                (0, n.jsxs)('div', {
                    className: h.profileCard,
                    children: [
                        (0, n.jsx)(E.Z, {
                            user: j,
                            displayProfile: x,
                            profileType: N.y0.PANEL
                        }),
                        (0, n.jsx)(_.Z, {
                            user: j,
                            displayProfile: x,
                            profileType: N.y0.PANEL
                        }),
                        v === T.Wq.PREVIEW &&
                            null != w &&
                            (0, n.jsx)('div', {
                                className: h.legacyUsernameBadgeContainer,
                                children: (0, n.jsx)(u.Tooltip, {
                                    position: 'top',
                                    text: O.Z.Messages.ORIGINALLY_KNOWN_AS.format({ legacyUsername: w }),
                                    spacing: 12,
                                    children: (e) =>
                                        (0, n.jsx)(u.Anchor, {
                                            ...e,
                                            onClick: e.onClick,
                                            children: (0, n.jsx)('img', {
                                                className: h.legacyUsernameBadge,
                                                alt: '',
                                                src: f
                                            })
                                        })
                                })
                            })
                    ]
                }),
                v !== T.Wq.PREVIEW &&
                    (0, n.jsxs)(o.animated.div, {
                        style: {
                            opacity: D.opacity,
                            y: D.y
                        },
                        className: h.inputContainer,
                        children: [
                            v === T.Wq.EDIT_DISPLAY_NAME &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            className: h.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: O.Z.Messages.DISPLAY_NAME
                                        }),
                                        (0, n.jsx)(M, {
                                            style: r()(h.displayNameHeight, h['heading-xl/bold']),
                                            value: null != U ? U : '',
                                            placeholder: g.ZP.getName(s),
                                            maxLength: T.hy,
                                            onChange: (e) => C({ globalName: e }),
                                            onFocus: R,
                                            ref: b
                                        })
                                    ]
                                }),
                            (v === T.Wq.EDIT_USERNAME || v === T.Wq.SUGGESTION) &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            className: h.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: O.Z.Messages.USERNAME
                                        }),
                                        (0, n.jsx)(M, {
                                            style: r()(h.userCardHeight, h.lowercaseUsername, h['heading-lg/medium']),
                                            value: null != Z ? Z : '',
                                            placeholder: s.username,
                                            maxLength: T.hy,
                                            onChange: (e) => C({ username: e.replace('@', '') }),
                                            onFocus: A,
                                            ref: G
                                        })
                                    ]
                                }),
                            (0, n.jsx)('div', {
                                className: h.messageContainer,
                                children: (() => {
                                    if (null != a)
                                        return (0, n.jsx)(S.Z, {
                                            type: 'error',
                                            children: a
                                        });
                                    if (null != P) {
                                        if (v !== T.Wq.SUGGESTION)
                                            return (0, n.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: P
                                            });
                                        if (!p)
                                            return (0, n.jsx)(S.Z, {
                                                type: 'success',
                                                children: P
                                            });
                                    }
                                    return null == P && null == a && (v === T.Wq.EDIT_USERNAME || v === T.Wq.SUGGESTION)
                                        ? (0, n.jsx)(I.Z, {
                                              username: Z,
                                              oneClickFlow: y
                                          })
                                        : null;
                                })()
                            })
                        ]
                    }),
                v === T.Wq.PREVIEW &&
                    (0, n.jsxs)('div', {
                        className: h.userCard,
                        children: [
                            (0, n.jsx)(u.Heading, {
                                color: 'header-primary',
                                variant: 'heading-xl/bold',
                                children: g.ZP.getName(s)
                            }),
                            (0, n.jsx)(u.Heading, {
                                color: 'text-normal',
                                variant: 'heading-lg/medium',
                                children: s.username
                            }),
                            (0, n.jsx)(u.Text, {
                                className: h.memberText,
                                color: 'text-muted',
                                variant: 'text-sm/medium',
                                children: O.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: (0, m.K9)(s.id) })
                            })
                        ]
                    })
            ]
        })
    );
});
