n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(782690),
    d = n(873546),
    f = n(149765),
    _ = n(442837),
    h = n(481060),
    p = n(430742),
    m = n(393238),
    g = n(607070),
    E = n(100527),
    v = n(906732),
    I = n(998698),
    S = n(271668),
    T = n(404295),
    b = n(326133),
    y = n(570220),
    A = n(28546),
    N = n(805680),
    C = n(151574),
    R = n(368844),
    O = n(41776),
    D = n(849522),
    L = n(780291),
    x = n(913663),
    w = n(268350),
    M = n(378233),
    P = n(665906),
    k = n(695346),
    U = n(271383),
    G = n(496675),
    B = n(944486),
    Z = n(398327),
    F = n(117530),
    V = n(594174),
    j = n(459273),
    H = n(700785),
    Y = n(358085),
    W = n(746877),
    K = n(541716),
    z = n(667829),
    q = n(562267),
    Q = n(376918),
    X = n(760196),
    J = n(258696),
    $ = n(303628),
    ee = n(472243),
    et = n(872635),
    en = n(676108),
    er = n(981631),
    ei = n(665692),
    ea = n(957825),
    es = n(703130);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, eo, el, eu, ec, ed, ef, e_, eh, ep, em, eg, eE, ev;
        let { textValue: eI, richValue: eS, className: eT, innerClassName: eb, editorClassName: ey, id: eA, required: eN, disabled: eC, placeholder: eR, accessibilityLabel: eO, channel: eD, type: eL, focused: ex, renderAttachButton: ew, renderApplicationCommandIcon: eM, pendingReply: eP, onChange: ek, onResize: eU, onBlur: eG, onFocus: eB, onKeyDown: eZ, onSubmit: eF, promptToUpload: eV, highlighted: ej, canMentionRoles: eH, canMentionChannels: eY, maxCharacterCount: eW, showRemainingCharsAfterCount: eK, allowNewLines: ez = !0, characterCountClassName: eq, 'aria-describedby': eQ, 'aria-labelledby': eX, setEditorRef: eJ, autoCompletePosition: e$, children: e0, disableThemedBackground: e1 = !1, emojiPickerCloseOnModalOuterClick: e2, parentModalKey: e3, onCommandSentinelTyped: e4 } = e;
        u()(null != eL, 'chat input type must be set');
        let { analyticsLocations: e6 } = (0, v.ZP)(E.Z.CHANNEL_TEXT_AREA),
            e5 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e7 = i.useRef(null),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null);
        null == eJ || eJ(e8.current);
        let tt = (0, T.h9)(eD.id, 'ChannelTextAreaContainer'),
            [tn, tr] = i.useState(!tt);
        (0, m.P)(e5, (e) => {
            let { width: t } = e;
            return tr(!tt && (null == t || t > 450));
        });
        let { activeCommand: ti, activeCommandSection: ta } = (0, _.cj)([I.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eL.commands) || void 0 === e ? void 0 : e.enabled) ? I.Z.getActiveCommand(eD.id) : null,
                    activeCommandSection: (null === (t = eL.commands) || void 0 === t ? void 0 : t.enabled) ? I.Z.getActiveCommandSection(eD.id) : null
                };
            }),
            {
                isLurking: ts,
                isPendingMember: to,
                disabled: tl,
                canAttachFiles: tu,
                canCreateThreads: tc,
                canEveryoneSendMessages: td
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, _.e7)([O.Z], () => null != i && O.Z.isLurking(i), [i]),
                    s = (0, _.e7)([U.ZP, V.default], () => {
                        var e, t;
                        let n = V.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = U.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, _.cj)(
                        [G.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = G.Z.computePermissions(e),
                                u = f.e$(l, er.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, er.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, er.Plq.SEND_MESSAGES)),
                                d = c && f.e$(l, er.Plq.ATTACH_FILES),
                                _ = null != n,
                                h = (0, P.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || h,
                                canAttachFiles: !0 === t.attachments && (o || s || d || _),
                                canCreateThreads: u,
                                canEveryoneSendMessages: H.Uu(er.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eD, eL, ti, eC),
            tf = eL.toolbarType === K.O.STATIC,
            t_ = !k.dN.useSetting() && !(0, Y.isAndroidWeb)() && null != window.ResizeObserver,
            th = !t_ || !(null === (a = eL.commands) || void 0 === a ? void 0 : a.enabled) || !ex || eI !== ei.GI,
            tp = (0, D.Z)(),
            { isSubmitButtonEnabled: tm, fontSize: tg } = (0, _.cj)([g.Z], () => ({
                fontSize: g.Z.fontSize,
                isSubmitButtonEnabled: g.Z.isSubmitButtonEnabled
            })),
            tE = (0, _.e7)([Z.Z], () => Z.Z.isEnabled()),
            tv = i.useRef(eI);
        tv.current = eI;
        let tI = i.useCallback(
            (e, t, n) => {
                var r;
                t === ei.GI && '' === tv.current && (null === (r = eL.commands) || void 0 === r ? void 0 : r.enabled) && (null == e4 || e4()), null == ek || ek(e, t, n);
            },
            [ek, e4, null === (l = eL.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, A.RO)(ea.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, A.RO)(ea.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, A.RO)(ea.X1.STICKER, e);
                }, [t, e]);
            (0, j.yp)({
                event: er.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, j.yp)({
                    event: er.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, j.yp)({
                    event: er.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eL, tl);
        let { eventEmitter: tS, handleEditorSelectionChanged: tT } = (function (e, t, n) {
                let [r] = i.useState(() => new o.EventEmitter());
                return (
                    i.useEffect(() => {
                        r.emit('text-changed', t, n);
                    }, [t, n, r]),
                    {
                        eventEmitter: r,
                        handleEditorSelectionChanged: (t) => {
                            null != e.current && r.emit('selection-changed', t);
                        }
                    }
                );
            })(e8, eI, eS),
            {
                submitting: tb,
                submit: ty,
                handleSubmit: tA
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, f, _) => {
                            var m, g, E;
                            if (o) return;
                            l(!0);
                            let v = null !== (g = null === (m = x.Z.getStickerPreview(s, t.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== g ? g : [],
                                I = null !== (E = F.Z.getUploads(s, t.drafts.type)) && void 0 !== E ? E : [];
                            if (null == c && !f && !_ && (0, R.CB)(I, s)) {
                                l(!1),
                                    (0, h.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('18895'), n.e('32525')]).then(n.bind(n, 273602));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                threadId: s,
                                                attachments: I,
                                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                            });
                                    });
                                return;
                            }
                            e({
                                value: i,
                                uploads: I,
                                stickers: v,
                                command: c,
                                commandOptionValues: d,
                                isGif: f
                            }).then((e) => {
                                var n, r, i, o;
                                let { shouldClear: u, shouldRefocus: c } = e;
                                let d = ((n = u), (r = t), null !== (o = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== o && o),
                                    f = null != a.current;
                                if (d) {
                                    if (s !== B.Z.getChannelId()) p.Z.saveDraft(s, '', t.drafts.type);
                                    else f && a.current.clearValue();
                                }
                                f && (l(!1), (0, A._Q)(), c && a.current.focus());
                            });
                        },
                        [a, e, o, t, s]
                    );
                return {
                    submitting: o,
                    submit: u,
                    handleSubmit: i.useCallback((e) => {
                        var t;
                        null == a || null === (t = a.current) || void 0 === t || t.submit(e);
                    }, [])
                };
            })(eF, eL, e8, eD.id),
            {
                autocompleteRef: tN,
                handleMaybeShowAutocomplete: tC,
                handleHideAutocomplete: tR
            } = (function () {
                let e = i.useRef(null),
                    t = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
                    }, []),
                    n = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
                    }, []);
                return {
                    autocompleteRef: e,
                    handleMaybeShowAutocomplete: t,
                    handleHideAutocomplete: n
                };
            })();
        let tO =
            ((ep = ty),
            (em = eL),
            (eg = e8),
            i.useCallback(
                (e) => {
                    var t, n;
                    em === K.I.CREATE_FORUM_POST ? null === (n = eg.current) || void 0 === n || n.insertGIF(e) : ep(e.url, void 0, void 0, !0), (0, A._Q)(), null === (t = eg.current) || void 0 === t || t.focus();
                },
                [eg, ep, em]
            ));
        let tD =
                ((eE = e8),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = eE.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, A._Q)();
                    },
                    [eE]
                )),
            tL = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, v.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, M.Hc)(i, r, a, s.drafts.type)
                                ? ((0, Q._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != x.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, w.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, A._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: e8,
                disabled: tl,
                textValue: eI,
                channelId: eD.id,
                chatInputType: eL,
                submit: eF
            });
        let tx =
                ((ev = e8),
                i.useCallback(
                    (e) => {
                        let t = ev.current;
                        null != e && null != t && t.insertSound(e), (0, A._Q)(), null == t || t.focus();
                    },
                    [ev]
                )),
            tw = i.useCallback(() => {
                var e;
                return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tM, handleResize: tP } = (function (e) {
                let [t, n] = i.useState(0);
                return {
                    editorHeight: t,
                    handleResize: i.useCallback(
                        (t) => {
                            n(null != t ? t : 0), null == e || e(t);
                        },
                        [e]
                    )
                };
            })(eU),
            {
                handleTab: tk,
                handleEnter: tU,
                handleMoveSelection: tG
            } = (function (e, t, n) {
                let r = i.useCallback(() => {
                        var r, i;
                        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
                    }, [n]),
                    a = i.useCallback(() => {
                        var r, i;
                        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
                    }, [n]);
                return {
                    handleTab: r,
                    handleEnter: a,
                    handleMoveSelection: i.useCallback(
                        (r) => {
                            var i, a;
                            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(r)) || !1;
                        },
                        [n]
                    )
                };
            })(tN, e7, th),
            {
                expressionPickerView: tB,
                shouldHideExpressionPicker: tZ,
                handleAutocompleteVisibilityChange: tF,
                handleOuterClick: tV
            } = (function (e, t, n) {
                let [r, a] = (0, A.Iu)((e) => [e.activeView, e.activeViewType], c.Z);
                i.useEffect(
                    () => () => {
                        (0, A._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, A._Q)();
                        },
                        [t]
                    ),
                    o = i.useCallback(() => {
                        var e;
                        null == r && (null === (e = n.current) || void 0 === e || e.handleOuterClick());
                    }, [r]),
                    l = null == r || null == a || a !== e;
                return {
                    expressionPickerView: r,
                    shouldHideExpressionPicker: l,
                    handleAutocompleteVisibilityChange: s,
                    handleOuterClick: o
                };
            })(eL, tS, e8);
        (0, W.S)(tS, eD.guild_id, eD.id);
        let tj = null != eP,
            tH = (tl && !((ts || to) && td)) || (tb && (null === (eo = eL.submit) || void 0 === eo ? void 0 : eo.useDisabledStylesOnSubmit)),
            tY = null;
        null != ti ? (tY = null == eM ? void 0 : eM(ti, ta, es.attachButton)) : (!tl || tc) && (tY = null == ew ? void 0 : ew(tj, es.attachButton));
        let tW = t_ && null != eS && !tl && eL.showCharacterCount && null == ti,
            tK = t_ && !__OVERLAY__ && null != eS && null == ti && eL.toolbarType !== K.O.NONE,
            tz = (function (e, t, n, r) {
                var i, a;
                let s = k.up.useSetting(),
                    o = (0, _.e7)([x.Z], () => x.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eD, eL, eS, tN),
            tq = (0, X.c)({
                channel: eD,
                type: eL,
                activeCommand: ti,
                pendingReply: eP
            }),
            tQ = !!(null === (el = eL.emojis) || void 0 === el ? void 0 : el.button) && tM <= 44;
        return (0, r.jsx)(y.f6, {
            value: tS,
            children: (0, r.jsxs)(v.Gt, {
                value: e6,
                children: [
                    tK && tf
                        ? (0, r.jsx)(en.Z, {
                              editorRef: e8,
                              options: eL.markdown,
                              channel: eD
                          })
                        : tK
                          ? (0, r.jsx)(et.Z, {
                                ref: te,
                                editorRef: e8,
                                containerRef: e9,
                                options: eL.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e5,
                        className: s()(eT, {
                            [es.channelTextArea]: !0,
                            [es.channelTextAreaDisabled]: tH,
                            [es.highlighted]: ej,
                            [es.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)(X.Z, { bars: tq }),
                            (0, r.jsxs)('div', {
                                ref: e9,
                                onScroll: tw,
                                className: s()(eb, {
                                    [es.scrollableContainer]: !0,
                                    [es.themedBackground]: !e1,
                                    [es.hasStackedBar]: tq.stacked.length > 0
                                }),
                                children: [
                                    (0, r.jsx)(q.Z, {
                                        channelId: eD.id,
                                        chatInputType: eL
                                    }),
                                    eL.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)($.Z, {
                                              channelId: eD.id,
                                              type: eL,
                                              canAttachFiles: tu
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(es.inner, {
                                            [es.innerDisabled]: tH,
                                            [es.sansAttachButton]: eL !== K.I.EDIT && (null != tY || (tH && null == tY) || ts),
                                            [es.sansAttachButtonCreateThread]: eL === K.I.THREAD_CREATION,
                                            [es.sansAttachButtonCreatePost]: eL === K.I.CREATE_FORUM_POST || eL === K.I.FORWARD_MESSAGE_INPUT,
                                            [es.sansAttachButtonUserProfileReply]: eL === K.I.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: tV,
                                        children: [
                                            tY,
                                            (0, r.jsx)(h.FocusRing, {
                                                ringTarget: e5,
                                                ringClassName: es.focusRing,
                                                children: (0, r.jsx)(z.Z, {
                                                    ref: e8,
                                                    id: eA,
                                                    focused: ex,
                                                    useSlate: t_,
                                                    textValue: eI,
                                                    richValue: eS,
                                                    disabled: tl,
                                                    placeholder: eR,
                                                    required: eN,
                                                    accessibilityLabel: eO,
                                                    isPreviewing: (ts || to) && td,
                                                    channel: eD,
                                                    type: eL,
                                                    canPasteFiles: tu,
                                                    uploadPromptCharacterCount: er.en1,
                                                    maxCharacterCount: null != eW ? eW : tp,
                                                    allowNewLines: ez,
                                                    'aria-describedby': eQ,
                                                    onChange: tI,
                                                    onResize: tP,
                                                    onBlur: eG,
                                                    onFocus: eB,
                                                    onKeyDown: eZ,
                                                    onSubmit: ty,
                                                    onTab: tk,
                                                    onEnter: tU,
                                                    onMoveSelection: tG,
                                                    onSelectionChanged: tT,
                                                    onMaybeShowAutocomplete: tC,
                                                    onHideAutocomplete: tR,
                                                    promptToUpload: eV,
                                                    fontSize: tg,
                                                    spellcheckEnabled: tE,
                                                    canOnlyUseTextCommands: tj,
                                                    className: s()(
                                                        {
                                                            [es.textAreaThreadCreation]: eL === K.I.THREAD_CREATION,
                                                            [es.profileBioInput]: eL === K.I.PROFILE_BIO_INPUT,
                                                            [es.overlayInlineReply]: eL === K.I.OVERLAY_INLINE_REPLY
                                                        },
                                                        ey
                                                    ),
                                                    'aria-labelledby': eX
                                                })
                                            }),
                                            (0, r.jsx)(J.Z, {
                                                type: eL,
                                                disabled: tl,
                                                channel: eD,
                                                handleSubmit: tA,
                                                isEmpty: 0 === eI.trim().length,
                                                showAllButtons: tn
                                            })
                                        ]
                                    })
                                ]
                            }),
                            th
                                ? null
                                : (0, r.jsx)(S.Z, {
                                      ref: e7,
                                      channel: eD,
                                      canOnlyUseTextCommands: tj
                                  }),
                            (0, r.jsx)(b.Z, {
                                ref: tN,
                                channel: eD,
                                canMentionRoles: eH,
                                canMentionChannels: eY,
                                useNewSlashCommands: t_,
                                canOnlyUseTextCommands: tj,
                                canSendStickers: null === (eu = eL.stickers) || void 0 === eu ? void 0 : eu.allowSending,
                                textValue: eI,
                                focused: ex,
                                expressionPickerView: tB,
                                type: eL,
                                targetRef: e5,
                                editorRef: e8,
                                onSendMessage: ty,
                                onSendSticker: tL,
                                onVisibilityChange: tF,
                                editorHeight: tM,
                                setValue: (e, t) => (null == tI ? void 0 : tI(null, e, t)),
                                position: e$
                            }),
                            (0, r.jsx)(L.Z, {
                                textValue: eI,
                                editorHeight: tM
                            }),
                            tW
                                ? (0, r.jsx)(ee.Z, {
                                      type: eL,
                                      textValue: eI,
                                      className: s()(eq, { [es.indentCharacterCount]: tQ }),
                                      maxCharacterCount: eW,
                                      showRemainingCharsAfterCount: eK
                                  })
                                : null,
                            tz
                                ? (0, r.jsx)(C.Z, {
                                      editorRef: e8,
                                      channel: eD,
                                      isEditorFocused: ex,
                                      onSelectSticker: tL,
                                      submitButtonVisible: (null === (ec = eL.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (e_ = null === (ed = eL.submit) || void 0 === ed ? void 0 : ed.ignorePreference) && void 0 !== e_ ? e_ : tm),
                                      stickerIconVisible: null !== (eh = null === (ef = eL.stickers) || void 0 === ef ? void 0 : ef.button) && void 0 !== eh && eh
                                  })
                                : null,
                            e0
                        ]
                    }),
                    tZ
                        ? null
                        : (0, r.jsx)(N.Z, {
                              positionTargetRef: e5,
                              type: eL,
                              onSelectGIF: tO,
                              onSelectEmoji: tD,
                              onSelectSticker: tL,
                              onSelectSound: tx,
                              channel: eD,
                              closeOnModalOuterClick: e2,
                              parentModalKey: e3,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: es.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
