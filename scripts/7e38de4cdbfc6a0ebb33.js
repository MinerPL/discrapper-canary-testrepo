(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53827"], {
        107681: function(e, t, a) {
            "use strict";
            e.exports = a.p + "93ddb0353236900986d8.png"
        },
        259707: function(e, t, a) {
            "use strict";
            e.exports = a.p + "80fd3641042d437f5b2b.png"
        },
        907572: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FriendsIcon: function() {
                    return n
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: r
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
                        className: r
                    })]
                })
            }
        },
        775955: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = l.default.unsafe_rawColors.WHITE_500.css,
                    backgroundColor: r = l.default.unsafe_rawColors.BRAND_500.css,
                    ...o
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(o),
                    width: t,
                    height: a,
                    viewBox: "0 0 14 14",
                    children: [(0, s.jsx)("path", {
                        fill: r,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"
                    }), (0, s.jsx)("path", {
                        d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
                        fill: n
                    })]
                })
            }
        },
        22658: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useUsernameSuggestion: function() {
                    return o
                }
            }), a("222007"), a("506083");
            var s = a("884691"),
                l = a("65597"),
                i = a("913144"),
                n = a("255403"),
                r = a("2581");
            let o = e => {
                let [t, a] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.usernameSuggestion(), r.default.usernameSuggestionLoading()]);
                return s.useEffect(() => (r.default.wasSuggestionsFetched() ? i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !1
                }) : n.default.fetchSuggestions(e).finally(() => {
                    i.default.dispatch({
                        type: "POMELO_SUGGESTIONS_FETCH",
                        usernameSuggestionLoading: !1
                    })
                }), () => {
                    n.default.resetSuggestions()
                }), []), {
                    usernameSuggestion: t,
                    usernameSuggestionLoading: a
                }
            }
        },
        386244: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: i = "currentColor",
                    foreground: n,
                    ...r
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#clip0_3283_145261)",
                        children: (0, s.jsx)("path", {
                            d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                            fill: i,
                            className: n
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: "clip0_3283_145261",
                            children: (0, s.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
        },
        253989: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: i = "currentColor",
                    foreground: n,
                    ...r
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 23 23",
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
                        fill: i,
                        className: n
                    })
                })
            }
        },
        892845: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                i = a("627445"),
                n = a.n(i),
                r = a("759843"),
                o = a("65597"),
                d = a("77078"),
                u = a("327037"),
                c = a("152584"),
                E = a("599417"),
                f = a("506885"),
                m = a("697218"),
                S = a("945330"),
                _ = a("599110"),
                I = a("158998"),
                h = a("255403"),
                N = a("2581"),
                M = a("415133"),
                T = a("22658"),
                g = a("998957"),
                O = a("426149"),
                L = a("767282"),
                x = a("935583"),
                C = a("15881"),
                P = a("49111"),
                p = a("782340"),
                v = a("968414");

            function R(e) {
                let t, {
                        source: a,
                        transitionState: i,
                        onClose: R,
                        oneClickFlow: j = !1
                    } = e,
                    [y, D] = l.useState(j ? C.PomeloModalSlides.SUGGESTIONS : C.PomeloModalSlides.INFO),
                    [U, G] = l.useState(!1),
                    [F, w] = l.useState(null),
                    [B, b] = l.useState(j ? x.EditState.SUGGESTION : x.EditState.NONE),
                    [k, H] = l.useState(!1),
                    [W, V] = l.useState(!1),
                    X = l.useRef(null),
                    z = (0, o.default)([N.default], () => N.default.isCurrentUsernameInvalid()),
                    Y = (0, o.default)([m.default], () => {
                        let e = m.default.getCurrentUser();
                        return n(null != e, "PomeloModal: user cannot be undefined"), e
                    }),
                    {
                        usernameSuggestion: Z,
                        usernameSuggestionLoading: K
                    } = (0, T.useUsernameSuggestion)(j ? x.TIMEOUT_TIME : void 0);
                l.useEffect(() => {
                    B === x.EditState.EDIT_USERNAME && V(!0), _.default.track(P.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
                        source: a,
                        step: B
                    })
                }, [B, a]), l.useEffect(() => {
                    !W && !k && null != Z && Z.length > 0 && q(e => ({
                        ...e,
                        username: Z
                    }))
                }, [Z, W, k]);
                let [Q, q] = l.useState({
                    username: (0, M.getDefaultPomelo)(Y),
                    globalName: I.default.getName(Y)
                }), J = e => {
                    w(null), null != e.username && H(!0), q(t => ({
                        ...t,
                        ...e
                    }))
                }, $ = l.useMemo(() => [{
                    slideId: C.PomeloModalSlides.INFO,
                    next: C.PomeloModalSlides.EDIT_SCREEN,
                    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
                }, {
                    slideId: C.PomeloModalSlides.EDIT_SCREEN,
                    next: C.PomeloModalSlides.FINISH_LATER,
                    back: C.PomeloModalSlides.INFO,
                    footerButtons: [B === x.EditState.PREVIEW ? "GOT_IT" : "BACK", B === x.EditState.PREVIEW ? "GOT_IT" : B === x.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
                }, {
                    slideId: C.PomeloModalSlides.FINISH_LATER,
                    back: C.PomeloModalSlides.EDIT_SCREEN
                }, {
                    slideId: C.PomeloModalSlides.SUGGESTIONS,
                    footerButtons: [B === x.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
                }, {
                    slideId: C.PomeloModalSlides.FINISH_LATER
                }], [B]), ee = $.length, et = l.useCallback(async () => {
                    if (Q.globalName.length <= 0) {
                        let e = p.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                            minNum: 1,
                            maxNum: 32
                        });
                        w(e), _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: e,
                            display_name_error: !0,
                            location: "modal"
                        });
                        return
                    }
                    if (I.default.getGlobalName(Y) === Q.globalName) {
                        b(x.EditState.EDIT_USERNAME);
                        return
                    }
                    try {
                        w(null), G(!0), await (0, c.saveAccountRequest)({
                            global_name: Q.globalName
                        }), b(x.EditState.EDIT_USERNAME)
                    } catch (a) {
                        let e = new E.default(a),
                            t = e.getAnyErrorMessage();
                        _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            display_name_error: !0,
                            location: "modal"
                        }), w(t)
                    } finally {
                        G(!1)
                    }
                }, [Y, Q]), ea = l.useCallback(async () => {
                    try {
                        w(null), G(!0), await h.default.createPomelo({
                            username: (0, M.formatPomeloForEditing)(Q.username)
                        }, j), await (0, u.fetchProfile)(Y.id), b(x.EditState.PREVIEW)
                    } catch (a) {
                        let e = new E.default(a),
                            t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : p.default.Messages.ERROR_GENERIC_TITLE;
                        w(t), _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            username_error: !0,
                            location: "modal",
                            one_click_flow: j
                        })
                    } finally {
                        G(!1)
                    }
                }, [Q, Y.id, j]), es = z || (0, M.shouldSkipToEditUsername)(Y), el = l.useCallback(() => {
                    b(es ? x.EditState.EDIT_USERNAME : x.EditState.EDIT_DISPLAY_NAME), D($[Math.min(ee - 1, y + 1)].slideId)
                }, [y, $, ee, es]), ei = l.useCallback(() => {
                    w(null), y === C.PomeloModalSlides.EDIT_SCREEN ? B === x.EditState.EDIT_USERNAME ? es ? (b(x.EditState.NONE), D($[Math.max(0, y - 1)].slideId)) : b(x.EditState.EDIT_DISPLAY_NAME) : B === x.EditState.EDIT_DISPLAY_NAME ? (b(x.EditState.NONE), D($[Math.max(0, y - 1)].slideId)) : B === x.EditState.PREVIEW && b(x.EditState.EDIT_USERNAME) : D($[Math.max(0, y - 1)].slideId)
                }, [$, y, B, es]), en = l.useCallback(() => {
                    D(C.PomeloModalSlides.FINISH_LATER)
                }, []), er = l.useMemo(() => {
                    if (y === C.PomeloModalSlides.EDIT_SCREEN && B === x.EditState.EDIT_DISPLAY_NAME) return et;
                    if (y === C.PomeloModalSlides.EDIT_SCREEN && B === x.EditState.EDIT_USERNAME) return ea;
                    if (y === C.PomeloModalSlides.SUGGESTIONS && B === x.EditState.SUGGESTION) return ea;
                    else return el
                }, [y, B, et, ea, el]), eo = l.useMemo(() => {
                    var e, t;
                    return A(null !== (t = null === (e = $.find(e => e.slideId === y)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
                        handleNext: er,
                        handleBack: ei,
                        handleRemindMeLater: en,
                        onClose: R
                    }, U, K, k)
                }, [ei, en, er, R, $, y, U, K, k]), ed = l.useMemo(() => (0, M.getUserAvatarURLForPomelo)(Y), [Y]);
                l.useLayoutEffect(() => {
                    (0, f.default)(Y.id, ed)
                }, [Y, ed]), l.useEffect(() => {
                    var e, t;
                    switch (B) {
                        case x.EditState.EDIT_DISPLAY_NAME:
                            null === (e = X.current) || void 0 === e || e.focusDisplayName();
                            break;
                        case x.EditState.EDIT_USERNAME:
                        case x.EditState.SUGGESTION:
                            null === (t = X.current) || void 0 === t || t.focusUsername()
                    }
                }, [B]);
                return !k && null == F && (B === x.EditState.EDIT_USERNAME ? t = p.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                    source: Y.username
                }) : B === x.EditState.SUGGESTION && (K || null != Z) && (t = p.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(d.ModalRoot, {
                    className: v.modalRoot,
                    impression: {
                        impressionName: r.ImpressionNames.POMELO_LANDING,
                        impressionProperties: {
                            source: a,
                            impression_group: r.ImpressionGroups.POMELO_FLOW,
                            one_click_flow: j
                        }
                    },
                    transitionState: i,
                    size: d.ModalSize.DYNAMIC,
                    children: [(0, s.jsx)(d.Button, {
                        onClick: R,
                        size: d.Button.Sizes.MIN,
                        look: d.Button.Looks.BLANK,
                        className: v.closeContainer,
                        "aria-label": p.default.Messages.CLOSE,
                        children: (0, s.jsx)(S.default, {
                            width: 15,
                            height: 15,
                            className: v.close
                        })
                    }), (0, s.jsx)(d.ModalContent, {
                        className: v.contentContainer,
                        children: (0, s.jsxs)(d.Slides, {
                            activeSlide: y,
                            width: 480,
                            children: [(0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.INFO,
                                children: (0, s.jsx)(L.default, {
                                    user: Y
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.EDIT_SCREEN,
                                children: (0, s.jsx)(g.default, {
                                    user: Y,
                                    error: F,
                                    editState: B,
                                    userRef: X,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => b(x.EditState.EDIT_USERNAME),
                                    onFocusDisplayName: () => b(x.EditState.EDIT_DISPLAY_NAME),
                                    onClose: R
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.FINISH_LATER,
                                children: (0, s.jsx)(O.default, {
                                    onClose: R
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.SUGGESTIONS,
                                children: (0, s.jsx)(g.default, {
                                    user: Y,
                                    error: F,
                                    editState: B,
                                    userRef: X,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => b(x.EditState.SUGGESTION),
                                    onFocusDisplayName: () => b(x.EditState.EDIT_DISPLAY_NAME),
                                    onClose: R,
                                    usernameSuggestionLoading: K,
                                    oneClickFlow: j
                                })
                            })]
                        })
                    }), eo]
                })
            }
            let A = (e, t, a, l, i) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
                className: v.footer,
                children: [(0, s.jsxs)("div", {
                    className: v.inline,
                    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(d.Button, {
                        className: v.unfilledButton,
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.BLANK,
                        color: d.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children: p.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
                    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.NEXT
                    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.SUBMIT
                    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: p.default.Messages.GET_STARTED
                    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: p.default.Messages.GOT_IT
                    }), e.includes("UPDATE") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        disabled: l && !i,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.UPDATE
                    })]
                }), e.includes("BACK") && (0, s.jsx)(d.Button, {
                    className: v.unfilledButton,
                    type: "button",
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.BLANK,
                    color: d.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: p.default.Messages.BACK
                })]
            })
        },
        500645: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            }), a("794252");
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                n = a("506838"),
                r = a("669491"),
                o = a("77078"),
                d = a("775955"),
                u = a("381546"),
                c = a("341923");
            let E = () => (0, s.jsx)(d.default, {
                    width: 13,
                    height: 13,
                    backgroundColor: r.default.colors.TEXT_POSITIVE.css
                }),
                f = () => (0, s.jsx)(u.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_DANGER.css
                }),
                m = () => (0, s.jsx)(u.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_WARNING.css
                });

            function S(e) {
                let t = (0, n.match)(e.type).with("info", () => (0, s.jsx)(m, {})).with("error", () => (0, s.jsx)(f, {})).with("success", () => (0, s.jsx)(E, {})).otherwise(() => null);
                return (0, s.jsxs)(s.Fragment, {
                    children: [t, (0, s.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        className: i(c.formMessage, {
                            [c.formMessageNegative]: "error" === e.type,
                            [c.formMessagePositive]: "success" === e.type
                        }),
                        children: e.children
                    })]
                })
            }
        },
        998957: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                i = a("907002"),
                n = a("77078"),
                r = a("79112"),
                o = a("217513"),
                d = a("701909"),
                u = a("158998"),
                c = a("303270"),
                E = a("935583"),
                f = a("49111"),
                m = a("782340"),
                S = a("341923");

            function _(e) {
                let {
                    userRef: t,
                    usernameSuggestionLoading: a = !1,
                    oneClickFlow: _ = !1,
                    ...I
                } = e, {
                    user: h,
                    editState: N,
                    onClose: M
                } = I, T = (0, o.default)(h.id), g = function(e, t, a) {
                    switch (e) {
                        case E.EditState.EDIT_USERNAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            };
                        case E.EditState.EDIT_DISPLAY_NAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                            };
                        case E.EditState.PREVIEW:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                                    displayName: t
                                }), subtitle: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                                    onClick: () => {
                                        a(), r.default.open(f.UserSettingsSections.ACCOUNT)
                                    }
                                })
                            };
                        case E.EditState.SUGGESTION:
                            return {
                                header: m.default.Messages.POMELO_ACTION_LABEL_OCF, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(), link: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                                    helpdeskArticle: d.default.getArticleURL(f.HelpdeskArticles.POMELO_FAQ)
                                })
                            };
                        default:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            }
                    }
                }(N, u.default.getName(h), M), [O, L] = (0, i.useSpring)(() => ({
                    opacity: 0,
                    y: 10
                }));
                return l.useEffect(() => {
                    L({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 10,
                            opacity: 0
                        }
                    })
                }, [L, N]), (0, s.jsxs)("div", {
                    className: S.displayNameContainer,
                    children: [(0, s.jsxs)(i.animated.div, {
                        style: {
                            opacity: O.opacity,
                            y: O.y
                        },
                        children: [(0, s.jsx)(n.Heading, {
                            className: S.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: g.header
                        }), (0, s.jsxs)("div", {
                            className: S.subtitle,
                            children: [(0, s.jsx)(n.Heading, {
                                color: "header-secondary",
                                variant: "heading-sm/medium",
                                children: g.subtitle
                            }), null != g.link && (0, s.jsx)(n.Text, {
                                className: S.link,
                                color: "header-secondary",
                                variant: "text-sm/medium",
                                children: g.link
                            })]
                        })]
                    }), (0, s.jsx)(c.default, {
                        ...I,
                        displayProfile: T,
                        ref: t,
                        usernameSuggestionLoading: a,
                        oneClickFlow: _
                    })]
                })
            }
        },
        303270: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            }), a("222007"), a("781738");
            var s = a("37983"),
                l = a("884691"),
                i = a("414456"),
                n = a.n(i),
                r = a("907002"),
                o = a("65597"),
                d = a("77078"),
                u = a("206230"),
                c = a("526887"),
                E = a("289918"),
                f = a("935409"),
                m = a("158998"),
                S = a("415133"),
                _ = a("500645"),
                I = a("925922"),
                h = a("935583"),
                N = a("590456"),
                M = a("782340"),
                T = a("341923"),
                g = a("107681");
            let O = l.forwardRef(function(e, t) {
                let {
                    style: a,
                    value: l,
                    placeholder: i,
                    maxLength: r,
                    onFocus: o,
                    onChange: u
                } = e;
                return (0, s.jsx)(d.TextArea, {
                    className: n(T.userCardInput, a),
                    autosize: !0,
                    error: null,
                    showCharacterCount: !1,
                    spellCheck: !1,
                    showRemainingCharacterCount: !1,
                    value: l,
                    placeholder: i,
                    rows: 1,
                    maxLength: r,
                    onChange: u,
                    onFocus: o,
                    onKeyDown: e => {
                        "Enter" === e.key && e.preventDefault()
                    },
                    inputRef: t
                })
            });
            var L = l.forwardRef(function(e, t) {
                let {
                    user: a,
                    error: i,
                    formValues: L,
                    displayProfile: x,
                    onChangeFormValue: C,
                    onFocusDisplayName: P,
                    onFocusUsername: p,
                    editState: v,
                    footerNotice: R,
                    usernameSuggestionLoading: A,
                    oneClickFlow: j
                } = e, {
                    username: y,
                    globalName: D
                } = L, U = l.useRef(null), G = l.useRef(null), F = l.useMemo(() => a.merge({
                    discriminator: "0000"
                }), [a]), [w, B] = (0, r.useSpring)(() => ({
                    opacity: 0,
                    y: 5
                }));
                l.useEffect(() => {
                    B({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 5,
                            opacity: 0
                        }
                    })
                }, [B, v]), l.useImperativeHandle(t, () => ({
                    focusDisplayName: () => {
                        var e, t, a;
                        null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (a = G.current) || void 0 === a || a.focus()
                    },
                    focusUsername: () => {
                        var e, t, a;
                        null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (a = U.current) || void 0 === a || a.focus()
                    }
                }), []);
                let b = (0, o.default)([u.default], () => u.default.useReducedMotion),
                    {
                        createMultipleConfettiAt: k
                    } = l.useContext(c.ConfettiCannonContext),
                    H = null == x ? void 0 : x.getLegacyUsername();
                return l.useEffect(() => {
                    if (!b && v === h.EditState.PREVIEW) a.username.includes(h.POMELO_KEYWORD) && (k(window.innerWidth / 2 + 150, 0, {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 0,
                                y: -180
                            },
                            maxValue: {
                                x: 500,
                                y: 180
                            }
                        }
                    }, 15), k(window.innerWidth / 2 - 150, 0, {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -180
                            },
                            maxValue: {
                                x: 0,
                                y: 180
                            }
                        }
                    }, 15))
                }, [k, v, a, b]), (0, s.jsxs)("div", {
                    className: n(T.userCardContainer, {
                        [T.shinyCard]: v === h.EditState.PREVIEW
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: T.profileCard,
                        children: [(0, s.jsx)(E.default, {
                            displayProfile: x,
                            user: F,
                            allowEdit: !1,
                            guildId: void 0,
                            profileType: N.UserProfileTypes.POMELO_POPOUT,
                            showPremiumBadgeUpsell: !1
                        }), (0, s.jsx)(f.UserPopoutAvatar, {
                            user: F,
                            displayProfile: x,
                            isMobile: !1,
                            status: null,
                            onClose: void 0,
                            disableUserProfileLink: !0,
                            hasBanner: !1,
                            profileType: N.UserProfileTypes.POMELO_POPOUT,
                            animateOnHover: !1
                        }), v === h.EditState.PREVIEW && null != H && (0, s.jsx)("div", {
                            className: T.legacyUsernameBadgeContainer,
                            children: (0, s.jsx)(d.Tooltip, {
                                position: "top",
                                text: M.default.Messages.ORIGINALLY_KNOWN_AS.format({
                                    legacyUsername: H
                                }),
                                spacing: 12,
                                children: e => (0, s.jsx)(d.Anchor, {
                                    ...e,
                                    onClick: e.onClick,
                                    children: (0, s.jsx)("img", {
                                        className: T.legacyUsernameBadge,
                                        alt: "",
                                        src: g
                                    })
                                })
                            })
                        })]
                    }), v !== h.EditState.PREVIEW && (0, s.jsxs)(r.animated.div, {
                        style: {
                            opacity: w.opacity,
                            y: w.y
                        },
                        className: T.inputContainer,
                        children: [v === h.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(d.Text, {
                                className: T.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: M.default.Messages.DISPLAY_NAME
                            }), (0, s.jsx)(O, {
                                style: n(T.displayNameHeight, T["heading-xl/bold"]),
                                value: null != D ? D : "",
                                placeholder: m.default.getName(a),
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => C({
                                    globalName: e
                                }),
                                onFocus: P,
                                ref: G
                            })]
                        }), (v === h.EditState.EDIT_USERNAME || v === h.EditState.SUGGESTION) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(d.Text, {
                                className: T.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: M.default.Messages.USERNAME
                            }), (0, s.jsx)(O, {
                                style: n(T.userCardHeight, T.lowercaseUsername, T["heading-lg/medium"]),
                                value: null != y ? y : "",
                                placeholder: a.username,
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => C({
                                    username: e.replace("@", "")
                                }),
                                onFocus: p,
                                ref: U
                            })]
                        }), (0, s.jsx)("div", {
                            className: T.messageContainer,
                            children: (() => {
                                if (null != i) return (0, s.jsx)(_.default, {
                                    type: "error",
                                    children: i
                                });
                                if (null != R) {
                                    if (v !== h.EditState.SUGGESTION) return (0, s.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: R
                                    });
                                    if (!A) return (0, s.jsx)(_.default, {
                                        type: "success",
                                        children: R
                                    })
                                }
                                return null == R && null == i && (v === h.EditState.EDIT_USERNAME || v === h.EditState.SUGGESTION) ? (0, s.jsx)(I.default, {
                                    username: y,
                                    oneClickFlow: j
                                }) : null
                            })()
                        })]
                    }), v === h.EditState.PREVIEW && (0, s.jsxs)("div", {
                        className: T.userCard,
                        children: [(0, s.jsx)(d.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.default.getName(a)
                        }), (0, s.jsx)(d.Heading, {
                            color: "text-normal",
                            variant: "heading-lg/medium",
                            children: a.username
                        }), (0, s.jsx)(d.Text, {
                            className: T.memberText,
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: M.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                date: (0, S.getMemberSince)(a.id)
                            })
                        })]
                    })]
                })
            })
        },
        426149: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("79112"),
                n = a("49111"),
                r = a("782340"),
                o = a("341923");

            function d(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: o.infoContainer,
                    children: [(0, s.jsx)(l.Heading, {
                        className: o.finishTitle,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
                    }), (0, s.jsx)(l.Text, {
                        className: o.subtitleFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
                    }), (0, s.jsx)(l.Text, {
                        className: o.promptFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                            onClick: () => {
                                t(), i.default.open(n.UserSettingsSections.ACCOUNT)
                            }
                        })
                    }), (0, s.jsx)(l.Button, {
                        className: o.button,
                        type: "button",
                        size: l.Button.Sizes.SMALL,
                        onClick: t,
                        children: r.default.Messages.INVITES_DISABLED_CONFIRMATION
                    })]
                })
            }
        },
        767282: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                n = a("77078"),
                r = a("564875"),
                o = a("701909"),
                d = a("386244"),
                u = a("253989"),
                c = a("49111"),
                E = a("782340"),
                f = a("341923"),
                m = a("259707");

            function S(e) {
                let {
                    user: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: f.infoContainer,
                    children: [(0, s.jsx)("img", {
                        className: f.infoPicture,
                        alt: "",
                        src: m
                    }), (0, s.jsx)(n.Heading, {
                        className: f.title,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                            n: t.tag
                        })
                    }), (0, s.jsx)(n.Text, {
                        className: f.subtitleInfo,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
                    }), (0, s.jsx)(n.Text, {
                        className: f.prompt,
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                            helpdeskArticle: o.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
                        })
                    }), (0, s.jsxs)("div", {
                        className: i([f.infoItem, f.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
                            children: (0, s.jsx)(r.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
                        })]
                    }), (0, s.jsxs)("div", {
                        className: i([f.infoItem, f.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
                            children: (0, s.jsx)(d.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
                        })]
                    }), (0, s.jsxs)("div", {
                        className: f.infoItem,
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
                            children: (0, s.jsx)(u.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({
                                username: t.tag
                            })
                        })]
                    })]
                })
            }
        },
        15881: function(e, t, a) {
            "use strict";
            var s, l;
            a.r(t), a.d(t, {
                PomeloModalSlides: function() {
                    return s
                }
            }), (l = s || (s = {}))[l.INFO = 0] = "INFO", l[l.EDIT_SCREEN = 1] = "EDIT_SCREEN", l[l.FINISH_LATER = 2] = "FINISH_LATER", l[l.SUGGESTIONS = 3] = "SUGGESTIONS"
        },
        925922: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("794252");
            var s = a("37983");
            a("884691");
            var l = a("506838"),
                i = a("644417"),
                n = a("415133"),
                r = a("44984"),
                o = a("500645");

            function d(e) {
                let {
                    username: t,
                    oneClickFlow: a = !1
                } = e, d = (0, r.useUsernameLiveCheck)((0, n.formatPomeloForEditing)(t), !0, !1, a);
                if (null == d) return null;
                let u = (0, l.match)(d.type).with(i.NameValidationState.RATE_LIMIT, () => "info").with(i.NameValidationState.ERROR, () => "error").with(i.NameValidationState.AVAILABLE, () => "success").with(i.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
                return null == u ? null : (0, s.jsx)(o.default, {
                    type: u,
                    children: d.message
                })
            }
        },
        564875: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("907572"),
                n = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                fill: l,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, s.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon, void 0, {
                    size: 16
                })
        }
    }
]);