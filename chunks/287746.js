n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    l = n.n(a),
    r = n(873546),
    o = n(106351),
    c = n(442837),
    u = n(481060),
    d = n(430742),
    h = n(904245),
    m = n(144144),
    p = n(166459),
    _ = n(966390),
    f = n(738619),
    E = n(410575),
    g = n(744061),
    C = n(857595),
    I = n(607070),
    x = n(367907),
    T = n(499254),
    v = n(541099),
    S = n(827498),
    N = n(845936),
    A = n(555573),
    Z = n(213459),
    M = n(456007),
    b = n(10718),
    R = n(998698),
    L = n(895924),
    j = n(581364),
    P = n(667204),
    O = n(541716),
    y = n(752305),
    D = n(516887),
    k = n(974251),
    U = n(893718),
    w = n(436660),
    B = n(603009),
    H = n(28546),
    G = n(295474),
    V = n(521476),
    F = n(69882),
    W = n(71619),
    z = n(185145),
    Y = n(736052),
    K = n(898188),
    q = n(549006),
    X = n(925975),
    Q = n(957730),
    J = n(400023),
    $ = n(64078),
    ee = n(351780),
    et = n(843693),
    en = n(217871),
    ei = n(139577),
    es = n(240536),
    ea = n(522558),
    el = n(247944),
    er = n(623292),
    eo = n(807092),
    ec = n(268350),
    eu = n(155409),
    ed = n(314897),
    eh = n(433355),
    em = n(703558),
    ep = n(323873),
    e_ = n(271383),
    ef = n(375954),
    eE = n(496675),
    eg = n(944486),
    eC = n(117530),
    eI = n(594174),
    ex = n(626135),
    eT = n(459273),
    ev = n(585483),
    eS = n(709054),
    eN = n(838440),
    eA = n(228488),
    eZ = n(127654),
    eM = n(979956),
    eb = n(655687),
    eR = n(165540),
    eL = n(583027),
    ej = n(25007),
    eP = n(199649),
    eO = n(1397),
    ey = n(981631),
    eD = n(689938),
    ek = n(625032);
function eU(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ew(e) {
    e.preventDefault();
}
let eB = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eH(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eG extends s.PureComponent {
    componentDidMount() {
        em.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        em.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = em.Z.getDraft(n.id, em.d.ChannelMessage);
            e !== i && this.setState((0, y.eK)(e));
        }
        t.textValue.length < ey.J6R && i.length >= ey.J6R && ex.default.track(ey.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(ey.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, j.XA)(e.interactionData),
            { command: s, application: a } = b.Xq(t, n);
        if (null != s) {
            var l, r;
            let e =
                null != a
                    ? {
                          type: L.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (r = null == a ? void 0 : null === (l = a.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : a.name,
                          application: a
                      }
                    : null;
            A.Po({
                channelId: t.id,
                command: s,
                section: e,
                location: L.Vh.RECALL,
                initialValues: (0, M.Dw)(s, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: s, onResize: a, highlighted: r, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, shakeIntensity: m, poggermodeEnabled: p, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(U.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: ek.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: h,
                pendingReply: o,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: a,
                onFocus: s,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eZ.d,
                highlighted: r,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: _
            });
        return (0, i.jsx)(u.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == f || null === (e = f.onCancel) || void 0 === e || e.call(f), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != f,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    l()(null != f, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(g.Z, {
                        onClose: t,
                        ...f
                    })
                );
            },
            children: () =>
                p
                    ? (0, i.jsx)(u.Shaker, {
                          isShaking: m > 0,
                          intensity: m,
                          className: ek.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eU(this, 'isFirstChange', !0),
            eU(this, 'editorRef', null),
            eU(this, 'state', {
                ...(0, y.eK)(em.Z.getDraft(this.props.channel.id, em.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eU(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = em.Z.getDraft(e.channel.id, em.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, y.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eU(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case ey.yXg.DELETE:
                    case ey.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case ey.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) eC.Z.getUploadCount(i.id, em.d.ChannelMessage) > 0 ? ev.S.dispatchToLastSubscribed(ey.CkL.FOCUS_ATTACHMENT_AREA) : ev.S.dispatchToLastSubscribed(ey.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = ef.Z.getLastCommandMessage(e.id),
                                n = ef.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eS.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case ey.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, C.rf)();
                            return;
                        }
                        if (eC.Z.getUploadCount(i.id, em.d.ChannelMessage) > 0) {
                            p.Z.clearAll(i.id, em.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eU(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = ed.default.getId(),
                    a = et.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, $.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eU(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                d.Z.changeDraft(s, t, em.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !eB.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? m.Z.startTyping(s) : '' === t && m.Z.stopTyping(s),
                    a && i && (0, C.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eU(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: s, commandOptionValues: a, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != s) {
                    if (s.inputType === L.iw.BUILT_IN_INTEGRATION)
                        return (
                            ev.S.dispatch(ey.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    if (R.Z.getCommandOrigin(o.id) === L.bB.APPLICATION_LAUNCHER) {
                        var m;
                        let { location: e, sectionName: t } = null !== (m = (0, eL._U)(s)) && void 0 !== m ? m : {},
                            n = v.Z.lastShownEntrypoint();
                        if (
                            !(await (0, N.L)({
                                applicationId: s.applicationId,
                                userIndexState: Z.ZP.getUserState(),
                                guildIndexState: Z.ZP.getGuildState(o.guild_id),
                                location: e,
                                sectionName: t,
                                entrypoint: n
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eL.SC)(s);
                    }
                    let e = await (0, P.Z)({
                        command: s,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (s.inputType !== L.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != e && ((t = null != e.content && '' !== e.content ? e.content : t), (d = !0 === e.tts));
                }
                return (0, eN.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === ey.zYc.SLOWMODE_COOLDOWN
                            ? (ev.S.dispatch(ey.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ev.S.dispatch(ey.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let m = (0, X.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != m && (null != m.content && (t = m.content), null != m.tts && (d = m.tts));
                    let f = Q.ZP.parse(o, t);
                    f.tts = f.tts || d;
                    let E = h.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            h.Z.sendMessage(o.id, f, void 0, E),
                            (0, er.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eM.KZ)(n);
                        if ((0, eM.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eZ.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        _.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: em.d.ChannelMessage,
                            parsedMessage: f,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            p.Z.clearAll(o.id, em.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? h.Z.sendMessage(o.id, f, void 0, {
                                      ...E,
                                      stickerIds: i
                                  })
                                : h.Z.sendStickers(o.id, i, t, E, f.tts)
                            : h.Z.sendMessage(o.id, f, void 0, E);
                    return (
                        this.setState((0, y.H2)()),
                        (0, er.A6)(o.id),
                        (0, ec.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eU(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (w.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eU(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(k.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: em.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eU(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(D.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eV extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !r.tq && eE.Z.can(ey.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ev.S.subscribe(ey.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ev.S.unsubscribe(ey.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: l, pendingReply: r, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: m, filterAfterTimestamp: p, communicationDisabledUntil: _, shakeIntensity: g, poggermodeEnabled: C, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: x } = this.props,
            { textAreaFocused: T, textAreaHighlighted: v } = this.state,
            S = c === O.I.SIDEBAR;
        t = S && n.type === ey.d4z.GUILD_VOICE ? eD.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : S && n.type === ey.d4z.GUILD_STAGE_VOICE ? eD.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eD.Z.Messages.THREAD_A11Y_LABEL : eD.Z.Messages.CHANNEL_A11Y_LABEL;
        let N = (0, i.jsxs)('div', {
            className: ek.channelBottomBarArea,
            children: [
                (0, i.jsx)(eu.Z, {
                    tutorialId: 'writing-messages',
                    position: 'left',
                    offsetX: 75,
                    children: (0, i.jsx)(eG, {
                        focused: T,
                        highlighted: v,
                        channel: n,
                        guild: s,
                        keyboardModeEnabled: a,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: l,
                        pendingReply: r,
                        chatInputType: c,
                        placeholder: d,
                        accessibilityLabel: h,
                        shakeIntensity: g,
                        poggermodeEnabled: C,
                        onCommandSentinelTyped: this.handleCommandSentinelTyped
                    })
                }),
                (0, i.jsx)(eR.Z, {
                    channel: n,
                    type: c,
                    animateRef: this.appIconAnimateRef
                })
            ]
        });
        return (0, i.jsx)(
            E.Z,
            {
                page: this.getAnalyticsPage(),
                children: (0, i.jsx)(q.sW, {
                    children: (0, i.jsxs)(eT.I3, {
                        ref: this.dispatchGroupRef,
                        children: [
                            (0, i.jsx)(eT.d9, {
                                event: ey.CkL.TEXTAREA_FOCUS,
                                handler: this.handleInputFocus
                            }),
                            (0, i.jsx)(eT.d9, {
                                event: ey.CkL.TEXTAREA_BLUR,
                                handler: this.handleInputBlur
                            }),
                            (0, i.jsx)(eT.d9, {
                                event: ey.CkL.OPEN_EXPRESSION_PICKER,
                                handler: this.handleOpenExpressionPicker
                            }),
                            (0, i.jsx)(eT.d9, {
                                event: ey.CkL.OPEN_APP_LAUNCHER,
                                handler: this.handleOpenAppLauncher
                            }),
                            (0, i.jsxs)(eH, {
                                isSidebar: S,
                                className: ek.chatContent,
                                'aria-label': t.format({ channelName: n.name }),
                                onMouseDown: this.handleChatInteract,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleChatInteract,
                                children: [
                                    (0, i.jsx)(ej.Z, {
                                        channel: n,
                                        guild: s,
                                        narrow: S
                                    }),
                                    (0, i.jsxs)(u.HeadingLevel, {
                                        component: (0, i.jsx)(u.HiddenVisually, { children: (0, i.jsx)(u.H, { children: eD.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                        children: [
                                            (0, i.jsx)(J.Z, {
                                                channel: n,
                                                forceCozy: I,
                                                filterAfterTimestamp: p,
                                                showingQuarantineBanner: m
                                            }),
                                            null == n.guild_id || S
                                                ? null
                                                : (0, i.jsx)(K.Z, {
                                                      guildId: n.guild_id,
                                                      channel: n
                                                  }),
                                            I
                                                ? null
                                                : null !==
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: m,
                                                            guild: s,
                                                            communicationDisabledUntil: _,
                                                            showAutomodUserProfileChatBlocker: x
                                                        })) && void 0 !== e
                                                  ? e
                                                  : (0, i.jsxs)('form', {
                                                        ref: this.inputFormRef,
                                                        onSubmit: ew,
                                                        className: ek.form,
                                                        children: [
                                                            C && (0, i.jsx)(en.Z, { channelId: n.id }),
                                                            n.isPrivate()
                                                                ? (0, i.jsx)(eP.Z, {
                                                                      channel: n,
                                                                      children: N
                                                                  })
                                                                : (0, i.jsx)(eO.Z, {
                                                                      channel: n,
                                                                      children: N
                                                                  }),
                                                            (0, i.jsx)(f.Z, {
                                                                channel: n,
                                                                poggermodeEnabled: C
                                                            }),
                                                            !S && (0, i.jsx)(B.Z, {})
                                                        ]
                                                    }),
                                            (0, i.jsx)(q.kw, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            },
            'messages-'.concat(n.id)
        );
    }
    constructor(...e) {
        super(...e),
            eU(this, 'inputFormRef', s.createRef()),
            eU(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eU(this, 'dispatchGroupRef', s.createRef()),
            eU(this, 'appIconAnimateRef', s.createRef()),
            eU(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eU(this, 'getAnalyticsPage', () => {
                let { channel: e } = this.props;
                if (null == e) return null;
                switch (e.type) {
                    case ey.d4z.GUILD_ANNOUNCEMENT:
                    case ey.d4z.GUILD_TEXT:
                    case ey.d4z.GUILD_FORUM:
                    case ey.d4z.GUILD_MEDIA:
                        return E.Z.Pages.GUILD_CHANNEL;
                    case ey.d4z.GROUP_DM:
                    case ey.d4z.DM:
                        return E.Z.Pages.DM_CHANNEL;
                    default:
                        return null;
                }
            }),
            eU(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eA.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eU(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eU(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eU(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eU(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case ey.yXg.ARROW_LEFT:
                            n === O.I.SIDEBAR && ev.S.dispatch(ey.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eg.Z.getChannelId() });
                            return;
                        case ey.yXg.ARROW_RIGHT:
                            n === O.I.NORMAL && ev.S.dispatch(ey.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eh.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eU(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, H.PG)(t, this.props.chatInputType);
            }),
            eU(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return T._(S._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eU(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eU(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eU(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === ey.d4z.DM && n
                    ? (0, i.jsx)(el.Z, {})
                    : null != a && (0, F.J)(a) && null != s && !eE.Z.can(ey.Plq.ADMINISTRATOR, s)
                      ? (0, i.jsx)(z.T, {
                            guild: s,
                            disabledUntil: a
                        })
                      : l
                        ? (0, i.jsx)(V.h, { guild: s })
                        : null;
            });
    }
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: l } = e,
        { placeholder: r, accessibilityLabel: o } = (0, eb.Z)(t),
        d = (0, el.S)(eI.default.getCurrentUser(), t),
        [h] = (0, W.AB)(null == n ? void 0 : n.id),
        m = (0, G.Ux)(null == n ? void 0 : n.id),
        p = (0, c.e7)([eI.default], () => eI.default.getCurrentUser()),
        [_, f] = (0, c.Wu)([e_.ZP], () => {
            var e, t, i;
            return [null != p && null !== (i = null === (e = e_.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ey.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i, e_.ZP.getMembers(null == n ? void 0 : n.id).length];
        }),
        E = (0, c.e7)([ee.Z], () => ee.Z.isEnabled()),
        g = (0, ei.Z)(t.id),
        C = (0, Y.Z)(t.id),
        T = (0, c.e7)([es.Z], () => es.Z.getFriendAnniversaries()),
        { enabled: v } = ea.w.useExperiment({ location: 'ChannelChat' }, { autoTrackExposure: !1 });
    return (
        s.useEffect(() => {
            if (v && null != t.recipients && f <= 50) {
                let e = new Set(t.recipients),
                    n = T.intersection(e);
                ex.default.track(ey.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: n.size,
                    ...(0, x.v_)(t)
                });
            }
        }, [t, T, v, f]),
        (0, i.jsx)(eV, {
            channel: t,
            isEditing: null != (0, c.e7)([ep.Z], () => ep.Z.getEditingMessageId(t.id)),
            hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
            guild: n,
            keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
            pendingReply: (0, c.e7)([eo.Z], () => eo.Z.getPendingReply(t.id)),
            chatInputType: a,
            placeholder: r,
            accessibilityLabel: o,
            filterAfterTimestamp: l,
            showQuarantinedUserBanner: d,
            communicationDisabledUntil: h,
            shakeIntensity: g,
            poggermodeEnabled: E,
            isSelectedResourceChannel: C,
            showAutomodUserProfileChatBlocker: m && !_
        })
    );
});
