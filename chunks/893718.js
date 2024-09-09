n(47120), n(411104);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(143927),
    d = n(873546),
    _ = n(149765),
    E = n(442837),
    f = n(481060),
    h = n(430742),
    p = n(393238),
    I = n(607070),
    m = n(100527),
    T = n(906732),
    S = n(998698),
    g = n(271668),
    A = n(931981),
    N = n(326133),
    O = n(570220),
    R = n(28546),
    v = n(805680),
    C = n(151574),
    y = n(368844),
    L = n(41776),
    D = n(849522),
    b = n(780291),
    M = n(913663),
    P = n(268350),
    U = n(378233),
    w = n(665906),
    x = n(695346),
    G = n(271383),
    k = n(496675),
    B = n(944486),
    F = n(398327),
    V = n(117530),
    H = n(594174),
    Z = n(459273),
    Y = n(700785),
    j = n(358085),
    W = n(746877),
    K = n(541716),
    z = n(667829),
    q = n(562267),
    Q = n(376918),
    X = n(760196),
    $ = n(258696),
    J = n(303628),
    ee = n(472243),
    et = n(872635),
    en = n(676108),
    er = n(981631),
    ei = n(665692),
    ea = n(957825),
    es = n(305489);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, eo, el, eu, ec, ed, e_, eE, ef, eh, ep, eI, em, eT;
        let { textValue: eS, richValue: eg, className: eA, innerClassName: eN, editorClassName: eO, id: eR, required: ev, disabled: eC, placeholder: ey, accessibilityLabel: eL, channel: eD, type: eb, focused: eM, renderAttachButton: eP, renderApplicationCommandIcon: eU, pendingReply: ew, onChange: ex, onResize: eG, onBlur: ek, onFocus: eB, onKeyDown: eF, onSubmit: eV, promptToUpload: eH, highlighted: eZ, canMentionRoles: eY, canMentionChannels: ej, maxCharacterCount: eW, showRemainingCharsAfterCount: eK, allowNewLines: ez = !0, characterCountClassName: eq, 'aria-describedby': eQ, 'aria-labelledby': eX, setEditorRef: e$, autoCompletePosition: eJ, children: e0, disableThemedBackground: e1 = !1, emojiPickerCloseOnModalOuterClick: e2, parentModalKey: e3, onCommandSentinelTyped: e4 } = e;
        u()(null != eb, 'chat input type must be set');
        let { analyticsLocations: e5 } = (0, T.ZP)(m.Z.CHANNEL_TEXT_AREA),
            e6 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e7 = i.useRef(null),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null);
        null == e$ || e$(e8.current);
        let [tt, tn] = i.useState(!0);
        (0, p.P)(e6, (e) => {
            let { width: t } = e;
            return tn(null == t || t > 450);
        });
        let { activeCommand: tr, activeCommandSection: ti } = (0, E.cj)([S.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eb.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(eD.id) : null,
                    activeCommandSection: (null === (t = eb.commands) || void 0 === t ? void 0 : t.enabled) ? S.Z.getActiveCommandSection(eD.id) : null
                };
            }),
            {
                isLurking: ta,
                isPendingMember: ts,
                disabled: to,
                canAttachFiles: tl,
                canCreateThreads: tu,
                canEveryoneSendMessages: tc
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, E.e7)([L.Z], () => null != i && L.Z.isLurking(i), [i]),
                    s = (0, E.e7)([G.ZP, H.default], () => {
                        var e, t;
                        let n = H.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = G.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, E.cj)(
                        [k.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = k.Z.computePermissions(e),
                                u = _.e$(l, er.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, er.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, er.Plq.SEND_MESSAGES)),
                                d = c && _.e$(l, er.Plq.ATTACH_FILES),
                                E = null != n,
                                f = (0, w.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || f,
                                canAttachFiles: !0 === t.attachments && (o || s || d || E),
                                canCreateThreads: u,
                                canEveryoneSendMessages: Y.Uu(er.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eD, eb, tr, eC),
            td = eb.toolbarType === K.O.STATIC,
            t_ = !x.dN.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
            tE = !t_ || !(null === (a = eb.commands) || void 0 === a ? void 0 : a.enabled) || !eM || eS !== ei.GI,
            tf = (0, D.Z)(),
            { isSubmitButtonEnabled: th, fontSize: tp } = (0, E.cj)([I.Z], () => ({
                fontSize: I.Z.fontSize,
                isSubmitButtonEnabled: I.Z.isSubmitButtonEnabled
            })),
            tI = (0, E.e7)([F.Z], () => F.Z.isEnabled()),
            tm = i.useRef(eS);
        tm.current = eS;
        let tT = i.useCallback(
            (e, t, n) => {
                var r;
                t === ei.GI && '' === tm.current && (null === (r = eb.commands) || void 0 === r ? void 0 : r.enabled) && (null == e4 || e4()), null == ex || ex(e, t, n);
            },
            [ex, e4, null === (l = eb.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, R.RO)(ea.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, R.RO)(ea.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, R.RO)(ea.X1.STICKER, e);
                }, [t, e]);
            (0, Z.yp)({
                event: er.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, Z.yp)({
                    event: er.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, Z.yp)({
                    event: er.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eb, to);
        let { eventEmitter: tS, handleEditorSelectionChanged: tg } = (function (e, t, n) {
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
            })(e8, eS, eg),
            {
                submitting: tA,
                submit: tN,
                handleSubmit: tO
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, _, E) => {
                            var p, I, m;
                            if (o) return;
                            l(!0);
                            let T = null !== (I = null === (p = M.Z.getStickerPreview(s, t.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== I ? I : [],
                                S = null !== (m = V.Z.getUploads(s, t.drafts.type)) && void 0 !== m ? m : [];
                            if (null == c && !_ && !E && (0, y.CB)(S, s)) {
                                l(!1),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('18895'), n.e('53289')]).then(n.bind(n, 273602));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                threadId: s,
                                                attachments: S,
                                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                            });
                                    });
                                return;
                            }
                            e({
                                value: i,
                                uploads: S,
                                stickers: T,
                                command: c,
                                commandOptionValues: d,
                                isGif: _
                            }).then((e) => {
                                var n, r, i, o;
                                let { shouldClear: u, shouldRefocus: c } = e;
                                let d = ((n = u), (r = t), null !== (o = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== o && o),
                                    _ = null != a.current;
                                if (d) {
                                    if (s !== B.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
                                    else _ && a.current.clearValue();
                                }
                                _ && (l(!1), (0, R._Q)(), c && a.current.focus());
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
            })(eV, eb, e8, eD.id),
            {
                autocompleteRef: tR,
                handleMaybeShowAutocomplete: tv,
                handleHideAutocomplete: tC
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
        let ty =
            ((eh = tN),
            (ep = eb),
            (eI = e8),
            i.useCallback(
                (e) => {
                    var t, n;
                    ep === K.I.CREATE_FORUM_POST ? null === (n = eI.current) || void 0 === n || n.insertGIF(e) : eh(e.url, void 0, void 0, !0), (0, R._Q)(), null === (t = eI.current) || void 0 === t || t.focus();
                },
                [eI, eh, ep]
            ));
        let tL =
                ((em = e8),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = em.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, R._Q)();
                    },
                    [em]
                )),
            tD = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, T.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, U.Hc)(i, r, a, s.drafts.type)
                                ? ((0, Q._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != M.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, P.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, R._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: e8,
                disabled: to,
                textValue: eS,
                channelId: eD.id,
                chatInputType: eb,
                submit: eV
            });
        let tb =
                ((eT = e8),
                i.useCallback(
                    (e) => {
                        let t = eT.current;
                        null != e && null != t && t.insertSound(e), (0, R._Q)();
                    },
                    [eT]
                )),
            tM = i.useCallback(() => {
                var e;
                return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tP, handleResize: tU } = (function (e) {
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
            })(eG),
            {
                handleTab: tw,
                handleEnter: tx,
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
            })(tR, e7, tE),
            {
                expressionPickerView: tk,
                shouldHideExpressionPicker: tB,
                handleAutocompleteVisibilityChange: tF,
                handleOuterClick: tV
            } = (function (e, t, n) {
                let [r, a] = (0, R.Iu)((e) => [e.activeView, e.activeViewType], c.Z);
                i.useEffect(
                    () => () => {
                        (0, R._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, R._Q)();
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
            })(eb, tS, e8);
        (0, W.S)(tS, eD.guild_id, eD.id);
        let tH = null != ew,
            tZ = (to && !((ta || ts) && tc)) || (tA && (null === (eo = eb.submit) || void 0 === eo ? void 0 : eo.useDisabledStylesOnSubmit)),
            tY = null;
        null != tr ? (tY = null == eU ? void 0 : eU(tr, ti, es.attachButton)) : (!to || tu) && (tY = null == eP ? void 0 : eP(tH, es.attachButton));
        let tj = t_ && null != eg && !to && eb.showCharacterCount && null == tr,
            tW = t_ && !__OVERLAY__ && null != eg && null == tr && eb.toolbarType !== K.O.NONE,
            tK = (function (e, t, n, r) {
                var i, a;
                let s = x.up.useSetting(),
                    o = (0, E.e7)([M.Z], () => M.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eD, eb, eg, tR),
            tz = (0, A.e)(eD),
            tq = null != tr || null != ew || tz,
            tQ = !!(null === (el = eb.emojis) || void 0 === el ? void 0 : el.button) && tP <= 44;
        return (0, r.jsx)(O.f6, {
            value: tS,
            children: (0, r.jsxs)(T.Gt, {
                value: e5,
                children: [
                    tW && td
                        ? (0, r.jsx)(en.Z, {
                              editorRef: e8,
                              options: eb.markdown,
                              channel: eD
                          })
                        : tW
                          ? (0, r.jsx)(et.Z, {
                                ref: te,
                                editorRef: e8,
                                containerRef: e9,
                                options: eb.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e6,
                        className: s()(eA, {
                            [es.channelTextArea]: !0,
                            [es.channelTextAreaDisabled]: tZ,
                            [es.highlighted]: eZ,
                            [es.textAreaMobileThemed]: d.tq
                        }),
                        onMouseDown: tV,
                        children: [
                            (0, r.jsx)(X.Z, {
                                type: eb,
                                channel: eD,
                                activeCommand: tr,
                                pendingReply: ew
                            }),
                            (0, r.jsxs)('div', {
                                ref: e9,
                                onScroll: tM,
                                className: s()(eN, {
                                    [es.scrollableContainer]: !0,
                                    [es.themedBackground]: !e1,
                                    [es.hasConnectedBar]: tq
                                }),
                                children: [
                                    (0, r.jsx)(q.Z, {
                                        channelId: eD.id,
                                        chatInputType: eb
                                    }),
                                    eb.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(J.Z, {
                                              channelId: eD.id,
                                              type: eb,
                                              canAttachFiles: tl
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(es.inner, {
                                            [es.innerDisabled]: tZ,
                                            [es.sansAttachButton]: eb !== K.I.EDIT && (null != tY || (tZ && null == tY) || ta),
                                            [es.sansAttachButtonCreateThread]: eb === K.I.THREAD_CREATION,
                                            [es.sansAttachButtonCreatePost]: eb === K.I.CREATE_FORUM_POST || eb === K.I.FORWARD_MESSAGE_INPUT,
                                            [es.sansAttachButtonUserProfileReply]: eb === K.I.USER_PROFILE_REPLY
                                        }),
                                        children: [
                                            tY,
                                            (0, r.jsx)(f.FocusRing, {
                                                ringTarget: e6,
                                                ringClassName: es.focusRing,
                                                children: (0, r.jsx)(z.Z, {
                                                    ref: e8,
                                                    id: eR,
                                                    focused: eM,
                                                    useSlate: t_,
                                                    textValue: eS,
                                                    richValue: eg,
                                                    disabled: to,
                                                    placeholder: ey,
                                                    required: ev,
                                                    accessibilityLabel: eL,
                                                    isPreviewing: (ta || ts) && tc,
                                                    channel: eD,
                                                    type: eb,
                                                    canPasteFiles: tl,
                                                    uploadPromptCharacterCount: er.en1,
                                                    maxCharacterCount: null != eW ? eW : tf,
                                                    allowNewLines: ez,
                                                    'aria-describedby': eQ,
                                                    onChange: tT,
                                                    onResize: tU,
                                                    onBlur: ek,
                                                    onFocus: eB,
                                                    onKeyDown: eF,
                                                    onSubmit: tN,
                                                    onTab: tw,
                                                    onEnter: tx,
                                                    onMoveSelection: tG,
                                                    onSelectionChanged: tg,
                                                    onMaybeShowAutocomplete: tv,
                                                    onHideAutocomplete: tC,
                                                    promptToUpload: eH,
                                                    fontSize: tp,
                                                    spellcheckEnabled: tI,
                                                    canOnlyUseTextCommands: tH,
                                                    className: s()(
                                                        {
                                                            [es.textAreaThreadCreation]: eb === K.I.THREAD_CREATION,
                                                            [es.profileBioInput]: eb === K.I.PROFILE_BIO_INPUT
                                                        },
                                                        eO
                                                    ),
                                                    'aria-labelledby': eX
                                                })
                                            }),
                                            (0, r.jsx)($.Z, {
                                                type: eb,
                                                disabled: to,
                                                channel: eD,
                                                handleSubmit: tO,
                                                isEmpty: 0 === eS.trim().length,
                                                showAllButtons: tt
                                            })
                                        ]
                                    })
                                ]
                            }),
                            tE
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      ref: e7,
                                      channel: eD,
                                      canOnlyUseTextCommands: tH
                                  }),
                            (0, r.jsx)(N.Z, {
                                ref: tR,
                                channel: eD,
                                canMentionRoles: eY,
                                canMentionChannels: ej,
                                useNewSlashCommands: t_,
                                canOnlyUseTextCommands: tH,
                                canSendStickers: null === (eu = eb.stickers) || void 0 === eu ? void 0 : eu.allowSending,
                                textValue: eS,
                                focused: eM,
                                expressionPickerView: tk,
                                type: eb,
                                targetRef: e6,
                                editorRef: e8,
                                onSendMessage: tN,
                                onSendSticker: tD,
                                onVisibilityChange: tF,
                                editorHeight: tP,
                                setValue: (e, t) => (null == tT ? void 0 : tT(null, e, t)),
                                position: eJ
                            }),
                            (0, r.jsx)(b.Z, {
                                textValue: eS,
                                editorHeight: tP
                            }),
                            tj
                                ? (0, r.jsx)(ee.Z, {
                                      type: eb,
                                      textValue: eS,
                                      className: s()(eq, { [es.indentCharacterCount]: tQ }),
                                      maxCharacterCount: eW,
                                      showRemainingCharsAfterCount: eK
                                  })
                                : null,
                            tK
                                ? (0, r.jsx)(C.Z, {
                                      editorRef: e8,
                                      channel: eD,
                                      isEditorFocused: eM,
                                      onSelectSticker: tD,
                                      submitButtonVisible: (null === (ec = eb.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (eE = null === (ed = eb.submit) || void 0 === ed ? void 0 : ed.ignorePreference) && void 0 !== eE ? eE : th),
                                      stickerIconVisible: null !== (ef = null === (e_ = eb.stickers) || void 0 === e_ ? void 0 : e_.button) && void 0 !== ef && ef
                                  })
                                : null,
                            e0
                        ]
                    }),
                    tB
                        ? null
                        : (0, r.jsx)(v.Z, {
                              positionTargetRef: e6,
                              type: eb,
                              onSelectGIF: ty,
                              onSelectEmoji: tL,
                              onSelectSticker: tD,
                              onSelectSound: tb,
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
