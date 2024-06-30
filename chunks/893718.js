n(47120), n(411104);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(836560), l = n(512722), u = n.n(l), c = n(143927), d = n(873546), _ = n(149765), E = n(442837), f = n(481060), h = n(430742), p = n(607070), m = n(100527), I = n(906732), T = n(998698), g = n(271668), S = n(931981), A = n(326133), N = n(570220), v = n(28546), O = n(805680), R = n(151574), C = n(368844), y = n(41776), D = n(849522), L = n(780291), b = n(913663), M = n(268350), P = n(378233), U = n(665906), w = n(695346), x = n(271383), G = n(496675), k = n(944486), B = n(398327), F = n(117530), V = n(594174), H = n(459273), Z = n(700785), Y = n(358085), j = n(746877), W = n(541716), K = n(667829), z = n(562267), q = n(376918), Q = n(760196), X = n(258696), $ = n(303628), J = n(472243), ee = n(872635), et = n(676108), en = n(981631), er = n(665692), ei = n(957825), ea = n(573809);
t.Z = i.memo(i.forwardRef(function (e, t) {
    var a, l, eo, es, el, eu, ec, ed, e_, eE, ef, eh, ep, em;
    let {
        textValue: eI,
        richValue: eT,
        className: eg,
        innerClassName: eS,
        editorClassName: eA,
        id: eN,
        required: ev,
        disabled: eO,
        placeholder: eR,
        accessibilityLabel: eC,
        channel: ey,
        type: eD,
        focused: eL,
        renderAttachButton: eb,
        renderApplicationCommandIcon: eM,
        pendingReply: eP,
        onChange: eU,
        onResize: ew,
        onBlur: ex,
        onFocus: eG,
        onKeyDown: ek,
        onSubmit: eB,
        promptToUpload: eF,
        highlighted: eV,
        canMentionRoles: eH,
        canMentionChannels: eZ,
        maxCharacterCount: eY,
        showRemainingCharsAfterCount: ej,
        allowNewLines: eW = !0,
        characterCountClassName: eK,
        'aria-describedby': ez,
        'aria-labelledby': eq,
        setEditorRef: eQ,
        autoCompletePosition: eX,
        children: e$,
        disableThemedBackground: eJ = !1,
        emojiPickerCloseOnModalOuterClick: e0,
        parentModalKey: e1
    } = e;
    u()(null != eD, 'chat input type must be set');
    let {analyticsLocations: e2} = (0, I.ZP)(m.Z.CHANNEL_TEXT_AREA), e3 = function (e) {
            let t = i.useRef(null);
            if (null != e && 'function' == typeof e)
                throw Error('Only Ref objects are supported');
            return null == e ? t : e;
        }(t), e4 = i.useRef(null), e5 = i.useRef(null), e6 = i.useRef(null), e7 = i.useRef(null);
    null == eQ || eQ(e5.current);
    let {
            activeCommand: e8,
            activeCommandSection: e9
        } = (0, E.cj)([T.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = eD.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand(ey.id) : null,
                activeCommandSection: (null === (t = eD.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection(ey.id) : null
            };
        }), {
            isLurking: te,
            isPendingMember: tt,
            disabled: tn,
            canAttachFiles: tr,
            canCreateThreads: ti,
            canEveryoneSendMessages: ta
        } = function (e, t, n, r) {
            let i = e.getGuildId(), a = (0, E.e7)([y.Z], () => null != i && y.Z.isLurking(i), [i]), o = (0, E.e7)([
                    x.ZP,
                    V.default
                ], () => {
                    var e, t;
                    let n = V.default.getCurrentUser();
                    return null !== (t = null != i && null != n ? null === (e = x.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
                }), s = (0, E.cj)([G.Z], () => {
                    var i, a;
                    let s = e.isPrivate(), l = G.Z.computePermissions(e), u = _.e$(l, en.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, en.Plq.CREATE_PRIVATE_THREADS), c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, en.Plq.SEND_MESSAGES)), d = c && _.e$(l, en.Plq.ATTACH_FILES), E = null != n, f = (0, U.xl)(e);
                    return {
                        disabled: r || o || !s && !c || f,
                        canAttachFiles: !0 === t.attachments && (s || o || d || E),
                        canCreateThreads: u,
                        canEveryoneSendMessages: Z.Uu(en.Plq.SEND_MESSAGES, e)
                    };
                }, [
                    e,
                    t.permissions.requireCreateTherads,
                    t.permissions.requireSendMessages,
                    t.attachments,
                    n,
                    r,
                    o
                ]);
            return {
                isLurking: a,
                isPendingMember: o,
                ...s
            };
        }(ey, eD, e8, eO), to = eD.toolbarType === W.O.STATIC, ts = !w.dN.useSetting() && !(0, Y.isAndroidWeb)() && null != window.ResizeObserver, tl = !ts || !(null === (a = eD.commands) || void 0 === a ? void 0 : a.enabled) || !eL || eI !== er.GI, tu = (0, D.Z)(), {
            isSubmitButtonEnabled: tc,
            fontSize: td
        } = (0, E.cj)([p.Z], () => ({
            fontSize: p.Z.fontSize,
            isSubmitButtonEnabled: p.Z.isSubmitButtonEnabled
        })), t_ = (0, E.e7)([B.Z], () => B.Z.isEnabled());
    !function (e, t) {
        let n = i.useCallback(() => {
                if (!t)
                    (0, v.RO)(ei.X1.EMOJI, e);
            }, [
                t,
                e
            ]), r = i.useCallback(() => {
                var n;
                if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending))
                    (0, v.RO)(ei.X1.GIF, e);
            }, [
                t,
                e
            ]), a = i.useCallback(() => {
                var n;
                if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending))
                    (0, v.RO)(ei.X1.STICKER, e);
            }, [
                t,
                e
            ]);
        (0, H.yp)({
            event: en.CkL.TOGGLE_EMOJI_POPOUT,
            handler: n
        }), (0, H.yp)({
            event: en.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }), (0, H.yp)({
            event: en.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
    }(eD, tn);
    let {
            eventEmitter: tE,
            handleEditorSelectionChanged: tf
        } = function (e, t, n) {
            let [r] = i.useState(() => new s.EventEmitter());
            return i.useEffect(() => {
                r.emit('text-changed', t, n);
            }, [
                t,
                n,
                r
            ]), {
                eventEmitter: r,
                handleEditorSelectionChanged: t => {
                    null != e.current && r.emit('selection-changed', t);
                }
            };
        }(e5, eI, eT), {
            submitting: th,
            submit: tp,
            handleSubmit: tm
        } = function (e, t, a, o) {
            let [s, l] = i.useState(!1), u = i.useCallback((i, c, d, _, E) => {
                    var p, m, I;
                    if (s)
                        return;
                    l(!0);
                    let T = null !== (m = null === (p = b.Z.getStickerPreview(o, t.drafts.type)) || void 0 === p ? void 0 : p.map(e => e.id)) && void 0 !== m ? m : [], g = null !== (I = F.Z.getUploads(o, t.drafts.type)) && void 0 !== I ? I : [];
                    if (null == c && !_ && !E && (0, C.CB)(g, o)) {
                        l(!1), (0, f.openModalLazy)(async () => {
                            let {default: e} = await Promise.all([
                                n.e('23755'),
                                n.e('90508'),
                                n.e('22173'),
                                n.e('53289')
                            ]).then(n.bind(n, 273602));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                threadId: o,
                                attachments: g,
                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                            });
                        });
                        return;
                    }
                    e({
                        value: i,
                        uploads: g,
                        stickers: T,
                        command: c,
                        commandOptionValues: d,
                        isGif: _
                    }).then(e => {
                        var n, r, i, s;
                        let {
                            shouldClear: u,
                            shouldRefocus: c
                        } = e;
                        let d = (n = u, r = t, null !== (s = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== s && s), _ = null != a.current;
                        if (d) {
                            if (o !== k.Z.getChannelId())
                                h.Z.saveDraft(o, '', t.drafts.type);
                            else
                                _ && a.current.clearValue();
                        }
                        _ && (l(!1), (0, v._Q)(), c && a.current.focus());
                    });
                }, [
                    a,
                    e,
                    s,
                    t,
                    o
                ]);
            return {
                submitting: s,
                submit: u,
                handleSubmit: i.useCallback(e => {
                    var t;
                    null == a || null === (t = a.current) || void 0 === t || t.submit(e);
                }, [])
            };
        }(eB, eD, e5, ey.id), {
            autocompleteRef: tI,
            handleMaybeShowAutocomplete: tT,
            handleHideAutocomplete: tg
        } = function () {
            let e = i.useRef(null), t = i.useCallback(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
                }, []), n = i.useCallback(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
                }, []);
            return {
                autocompleteRef: e,
                handleMaybeShowAutocomplete: t,
                handleHideAutocomplete: n
            };
        }();
    let tS = (eE = tp, ef = eD, eh = e5, i.useCallback(e => {
        var t, n;
        ef === W.I.CREATE_FORUM_POST ? null === (n = eh.current) || void 0 === n || n.insertGIF(e) : eE(e.url, void 0, void 0, !0), (0, v._Q)(), null === (t = eh.current) || void 0 === t || t.focus();
    }, [
        eh,
        eE,
        ef
    ]));
    let tA = (ep = e5, i.useCallback(function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = ep.current;
            null != e && null != r && r.insertEmoji(e, t, n), t && (0, v._Q)();
        }, [ep])), tN = function (e) {
            let {
                    editorRef: t,
                    disabled: n,
                    textValue: r,
                    channelId: a,
                    chatInputType: o,
                    submit: s
                } = e, {analyticsLocations: l} = (0, I.ZP)();
            return i.useCallback((e, i) => {
                var u, c;
                !n && ((0, P.Hc)(i, r, a, o.drafts.type) ? ((0, q._H)({
                    sticker: e,
                    stickerSelectLocation: i,
                    isReplacement: null != b.Z.getStickerPreview(a, o.drafts.type),
                    analyticsLocations: l
                }), (0, M.eu)(a, e, o.drafts.type)) : (s({
                    value: '',
                    uploads: void 0,
                    stickers: [e.id]
                }), null === (c = t.current) || void 0 === c || c.clearValue()), (0, v._Q)(), null === (u = t.current) || void 0 === u || u.focus());
            }, [
                n,
                r,
                a,
                o.drafts.type,
                t,
                l,
                s
            ]);
        }({
            editorRef: e5,
            disabled: tn,
            textValue: eI,
            channelId: ey.id,
            chatInputType: eD,
            submit: eB
        });
    let tv = (em = e5, i.useCallback(e => {
            let t = em.current;
            null != e && null != t && t.insertSound(e), (0, v._Q)();
        }, [em])), tO = i.useCallback(() => {
            var e;
            return null == e7 ? void 0 : null === (e = e7.current) || void 0 === e ? void 0 : e.hide();
        }, []), {
            editorHeight: tR,
            handleResize: tC
        } = function (e) {
            let [t, n] = i.useState(0);
            return {
                editorHeight: t,
                handleResize: i.useCallback(t => {
                    n(null != t ? t : 0), null == e || e(t);
                }, [e])
            };
        }(ew), {
            handleTab: ty,
            handleEnter: tD,
            handleMoveSelection: tL
        } = function (e, t, n) {
            let r = i.useCallback(() => {
                    var r, i;
                    return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
                }, [n]), a = i.useCallback(() => {
                    var r, i;
                    return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
                }, [n]);
            return {
                handleTab: r,
                handleEnter: a,
                handleMoveSelection: i.useCallback(r => {
                    var i, a;
                    return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(r)) || !1;
                }, [n])
            };
        }(tI, e4, tl), {
            expressionPickerView: tb,
            shouldHideExpressionPicker: tM,
            handleAutocompleteVisibilityChange: tP,
            handleOuterClick: tU
        } = function (e, t, n) {
            let [r, a] = (0, v.Iu)(e => [
                e.activeView,
                e.activeViewType
            ], c.Z);
            i.useEffect(() => () => {
                (0, v._Q)(e);
            }, [e]);
            let o = i.useCallback(e => {
                    t.emit('autocomplete-visibility-change', e), e && (0, v._Q)();
                }, [t]), s = i.useCallback(() => {
                    var e;
                    null == r && (null === (e = n.current) || void 0 === e || e.handleOuterClick());
                }, [r]), l = null == r || null == a || a !== e;
            return {
                expressionPickerView: r,
                shouldHideExpressionPicker: l,
                handleAutocompleteVisibilityChange: o,
                handleOuterClick: s
            };
        }(eD, tE, e5);
    (0, j.S)(tE, ey.guild_id, ey.id);
    let tw = null != eP, tx = tn && !((te || tt) && ta) || th && (null === (l = eD.submit) || void 0 === l ? void 0 : l.useDisabledStylesOnSubmit), tG = null;
    null != e8 ? tG = null == eM ? void 0 : eM(e8, e9, ea.attachButton) : (!tn || ti) && (tG = null == eb ? void 0 : eb(tw, ea.attachButton));
    let tk = ts && null != eT && !tn && eD.showCharacterCount && null == e8, tB = ts && !__OVERLAY__ && null != eT && null == e8 && eD.toolbarType !== W.O.NONE, tF = function (e, t, n, r) {
            var i, a;
            let o = w.up.useSetting(), s = (0, E.e7)([b.Z], () => b.Z.getStickerPreview(e.id, t.drafts.type)), l = null != s && s.length > 0;
            return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
        }(ey, eD, eT, tI), tV = (0, S.e)(ey), tH = null != e8 || null != eP || tV, tZ = !!(null === (eo = eD.emojis) || void 0 === eo ? void 0 : eo.button) && tR <= 44;
    return (0, r.jsx)(N.f6, {
        value: tE,
        children: (0, r.jsxs)(I.Gt, {
            value: e2,
            children: [
                tB && to ? (0, r.jsx)(et.Z, {
                    editorRef: e5,
                    options: eD.markdown,
                    channel: ey
                }) : tB ? (0, r.jsx)(ee.Z, {
                    ref: e7,
                    editorRef: e5,
                    containerRef: e6,
                    options: eD.markdown
                }) : null,
                (0, r.jsxs)('div', {
                    ref: e3,
                    className: o()(eg, {
                        [ea.channelTextArea]: !0,
                        [ea.channelTextAreaDisabled]: tx,
                        [ea.highlighted]: eV,
                        [ea.textAreaMobileThemed]: d.tq
                    }),
                    onMouseDown: tU,
                    children: [
                        (0, r.jsx)(Q.Z, {
                            type: eD,
                            channel: ey,
                            activeCommand: e8,
                            pendingReply: eP
                        }),
                        (0, r.jsxs)('div', {
                            ref: e6,
                            onScroll: tO,
                            className: o()(eS, {
                                [ea.scrollableContainer]: !0,
                                [ea.themedBackground]: !eJ,
                                [ea.hasConnectedBar]: tH
                            }),
                            children: [
                                (0, r.jsx)(z.Z, {
                                    channelId: ey.id,
                                    chatInputType: eD
                                }),
                                eD.hideAttachmentArea ? null : (0, r.jsx)($.Z, {
                                    channelId: ey.id,
                                    type: eD,
                                    canAttachFiles: tr
                                }),
                                (0, r.jsxs)('div', {
                                    className: o()(ea.inner, {
                                        [ea.innerDisabled]: tx,
                                        [ea.sansAttachButton]: eD !== W.I.EDIT && (null != tG || tx && null == tG || te),
                                        [ea.sansAttachButtonCreateThread]: eD === W.I.THREAD_CREATION,
                                        [ea.sansAttachButtonCreatePost]: eD === W.I.CREATE_FORUM_POST
                                    }),
                                    children: [
                                        tG,
                                        (0, r.jsx)(f.FocusRing, {
                                            ringTarget: e3,
                                            ringClassName: ea.focusRing,
                                            children: (0, r.jsx)(K.Z, {
                                                ref: e5,
                                                id: eN,
                                                focused: eL,
                                                useSlate: ts,
                                                textValue: eI,
                                                richValue: eT,
                                                disabled: tn,
                                                placeholder: eR,
                                                required: ev,
                                                accessibilityLabel: eC,
                                                isPreviewing: (te || tt) && ta,
                                                channel: ey,
                                                type: eD,
                                                canPasteFiles: tr,
                                                uploadPromptCharacterCount: en.en1,
                                                maxCharacterCount: null != eY ? eY : tu,
                                                allowNewLines: eW,
                                                'aria-describedby': ez,
                                                onChange: eU,
                                                onResize: tC,
                                                onBlur: ex,
                                                onFocus: eG,
                                                onKeyDown: ek,
                                                onSubmit: tp,
                                                onTab: ty,
                                                onEnter: tD,
                                                onMoveSelection: tL,
                                                onSelectionChanged: tf,
                                                onMaybeShowAutocomplete: tT,
                                                onHideAutocomplete: tg,
                                                promptToUpload: eF,
                                                fontSize: td,
                                                spellcheckEnabled: t_,
                                                canOnlyUseTextCommands: tw,
                                                className: o()({
                                                    [ea.textAreaThreadCreation]: eD === W.I.THREAD_CREATION,
                                                    [ea.profileBioInput]: eD === W.I.PROFILE_BIO_INPUT
                                                }, eA),
                                                'aria-labelledby': eq
                                            })
                                        }),
                                        (0, r.jsx)(X.Z, {
                                            type: eD,
                                            disabled: tn,
                                            channel: ey,
                                            handleSubmit: tm,
                                            isEmpty: 0 === eI.trim().length
                                        })
                                    ]
                                })
                            ]
                        }),
                        tl ? null : (0, r.jsx)(g.Z, {
                            ref: e4,
                            channel: ey,
                            canOnlyUseTextCommands: tw
                        }),
                        (0, r.jsx)(A.Z, {
                            ref: tI,
                            channel: ey,
                            canMentionRoles: eH,
                            canMentionChannels: eZ,
                            useNewSlashCommands: ts,
                            canOnlyUseTextCommands: tw,
                            canSendStickers: null === (es = eD.stickers) || void 0 === es ? void 0 : es.allowSending,
                            textValue: eI,
                            focused: eL,
                            expressionPickerView: tb,
                            type: eD,
                            targetRef: e3,
                            editorRef: e5,
                            onSendMessage: tp,
                            onSendSticker: tN,
                            onVisibilityChange: tP,
                            editorHeight: tR,
                            setValue: (e, t) => null == eU ? void 0 : eU(null, e, t),
                            position: eX
                        }),
                        (0, r.jsx)(L.Z, {
                            textValue: eI,
                            editorHeight: tR
                        }),
                        tk ? (0, r.jsx)(J.Z, {
                            type: eD,
                            textValue: eI,
                            className: o()(eK, { [ea.indentCharacterCount]: tZ }),
                            maxCharacterCount: eY,
                            showRemainingCharsAfterCount: ej
                        }) : null,
                        tF ? (0, r.jsx)(R.Z, {
                            editorRef: e5,
                            channel: ey,
                            isEditorFocused: eL,
                            onSelectSticker: tN,
                            submitButtonVisible: (null === (el = eD.submit) || void 0 === el ? void 0 : el.button) && (null !== (ed = null === (eu = eD.submit) || void 0 === eu ? void 0 : eu.ignorePreference) && void 0 !== ed ? ed : tc),
                            stickerIconVisible: null !== (e_ = null === (ec = eD.stickers) || void 0 === ec ? void 0 : ec.button) && void 0 !== e_ && e_
                        }) : null,
                        e$
                    ]
                }),
                tM ? null : (0, r.jsx)(O.Z, {
                    positionTargetRef: e3,
                    type: eD,
                    onSelectGIF: tS,
                    onSelectEmoji: tA,
                    onSelectSticker: tN,
                    onSelectSound: tv,
                    channel: ey,
                    closeOnModalOuterClick: e0,
                    parentModalKey: e1,
                    position: 'top',
                    align: 'right',
                    positionLayerClassName: ea.expressionPickerPositionLayer
                })
            ]
        })
    });
}));
