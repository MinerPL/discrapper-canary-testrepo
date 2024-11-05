n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(995295),
    d = n(873546),
    u = n(106351),
    h = n(442837),
    p = n(481060),
    m = n(430742),
    f = n(904245),
    g = n(144144),
    C = n(166459),
    x = n(966390),
    v = n(738619),
    _ = n(410575),
    I = n(744061),
    E = n(857595),
    b = n(607070),
    N = n(367907),
    Z = n(450936),
    T = n(993766),
    S = n(499254),
    j = n(541099),
    A = n(827498),
    y = n(46332),
    P = n(555573),
    M = n(213459),
    R = n(456007),
    L = n(10718),
    k = n(998698),
    O = n(895924),
    D = n(581364),
    w = n(667204),
    B = n(404295),
    U = n(541716),
    H = n(752305),
    G = n(516887),
    F = n(974251),
    V = n(893718),
    z = n(436660),
    W = n(603009),
    K = n(28546),
    Y = n(295474),
    q = n(521476),
    X = n(69882),
    J = n(71619),
    Q = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(925975),
    ei = n(957730),
    el = n(400023),
    ea = n(64078),
    er = n(351780),
    es = n(843693),
    eo = n(217871),
    ec = n(139577),
    ed = n(247944),
    eu = n(623292),
    eh = n(807092),
    ep = n(268350),
    em = n(155409),
    ef = n(314897),
    eg = n(433355),
    eC = n(703558),
    ex = n(323873),
    ev = n(271383),
    e_ = n(375954),
    eI = n(496675),
    eE = n(944486),
    eb = n(117530),
    eN = n(594174),
    eZ = n(626135),
    eT = n(934415),
    eS = n(459273),
    ej = n(585483),
    eA = n(709054),
    ey = n(838440),
    eP = n(228488),
    eM = n(127654),
    eR = n(979956),
    eL = n(655687),
    ek = n(165540),
    eO = n(583027),
    eD = n(25007),
    ew = n(685006),
    eB = n(685722),
    eU = n(199649),
    eH = n(1397),
    eG = n(981631),
    eF = n(388032),
    eV = n(784237);
function ez(e, t, n) {
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
function eW(e) {
    e.preventDefault();
}
let eK = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eY(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eq extends l.PureComponent {
    componentDidMount() {
        eC.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eC.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eC.Z.getDraft(n.id, eC.d.ChannelMessage);
            e !== i && this.setState((0, H.eK)(e));
        }
        t.textValue.length < eG.J6R && i.length >= eG.J6R && eZ.default.track(eG.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), N.ZP.trackWithMetadata(eG.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, D.XA)(e.interactionData),
            { command: l, application: a } = L.Xq(t, n);
        if (null != l) {
            var r, s;
            let e =
                null != a
                    ? {
                          type: O.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (s = null == a ? void 0 : null === (r = a.bot) || void 0 === r ? void 0 : r.username) && void 0 !== s ? s : a.name,
                          application: a
                      }
                    : null;
            P.Po({
                channelId: t.id,
                command: l,
                section: e,
                location: O.Vh.RECALL,
                initialValues: (0, R.Dw)(l, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: l, onResize: a, highlighted: r, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: u, shakeIntensity: h, poggermodeEnabled: m, onCommandSentinelTyped: f } = this.props,
            { contentWarningProps: g } = this.state,
            C = (0, i.jsx)(V.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eV.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: u,
                pendingReply: s,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: a,
                onFocus: l,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eM.d,
                highlighted: r,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: f
            });
        return (0, i.jsx)(p.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == g || null === (e = g.onCancel) || void 0 === e || e.call(g), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != g,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != g, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(I.Z, {
                        onClose: t,
                        ...g
                    })
                );
            },
            children: () =>
                m
                    ? (0, i.jsx)(p.Shaker, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eV.shaker,
                          children: C
                      })
                    : C
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            ez(this, 'isFirstChange', !0),
            ez(this, 'editorRef', null),
            ez(this, 'state', {
                ...(0, H.eK)(eC.Z.getDraft(this.props.channel.id, eC.d.ChannelMessage)),
                contentWarningProps: null
            }),
            ez(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eC.Z.getDraft(e.channel.id, eC.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, H.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            ez(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eG.yXg.DELETE:
                    case eG.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eG.yXg.ARROW_UP:
                        if (l || a) return;
                        if ((e.preventDefault(), t)) eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0 ? ej.S.dispatchToLastSubscribed(eG.CkL.FOCUS_ATTACHMENT_AREA) : ej.S.dispatchToLastSubscribed(eG.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = e_.Z.getLastChatCommandMessage(e.id),
                                n = e_.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eA.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eG.yXg.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, E.rf)();
                            return;
                        }
                        if (eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0) {
                            C.Z.clearAll(i.id, eC.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            ez(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    l = ef.default.getId(),
                    a = es.ZP.getUserCombo(l, i),
                    r = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: i,
                    userId: l,
                    value: null != e ? e.length : r,
                    multiplier: t
                });
            }),
            ez(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: l }
                } = this.props;
                m.Z.changeDraft(l, t, eC.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    r = a && !eK.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    r ? g.Z.startTyping(l) : '' === t && g.Z.stopTyping(l),
                    a && i && (0, E.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            ez(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: l, commandOptionValues: a, isGif: r } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: o, pendingReply: c, chatInputType: d } = this.props,
                    u = !1;
                if (null != l) {
                    if (l.inputType === O.iw.BUILT_IN_INTEGRATION)
                        return (
                            ej.S.dispatch(eG.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = k.Z.getCommandOrigin(o.id);
                    if (e === O.bB.APPLICATION_LAUNCHER || e === O.bB.IMAGE_RECS_MENU || e === O.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, eO._U)(l)) && void 0 !== h ? h : {},
                            i = e === O.bB.APPLICATION_LAUNCHER ? j.Z.lastShownEntrypoint() : A._b.TEXT;
                        if (
                            !(await (0, y.L)({
                                applicationId: l.applicationId,
                                userIndexState: M.ZP.getUserState(),
                                guildIndexState: M.ZP.getGuildState(o.guild_id),
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eO.SC)(l);
                    }
                    let n = await (0, w.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: s,
                            channel: o
                        }
                    });
                    if (l.inputType !== O.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (u = !0 === n.tts));
                }
                return (0, ey.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: l, failureReason: a } = e;
                    if (!l)
                        return a === eG.zYc.SLOWMODE_COOLDOWN
                            ? (ej.S.dispatch(eG.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ej.S.dispatch(eG.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, en.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (u = h.tts));
                    let p = ei.ZP.parse(o, t);
                    p.tts = p.tts || u;
                    let m = f.Z.getSendMessageOptionsForReply(c);
                    if (r)
                        return (
                            f.Z.sendMessage(o.id, p, void 0, m),
                            (0, eu.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eR.KZ)(n);
                        if ((0, eR.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eM.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        x.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: eC.d.ChannelMessage,
                            parsedMessage: p,
                            options: {
                                ...m,
                                stickerIds: i
                            }
                        }),
                            C.Z.clearAll(o.id, eC.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? f.Z.sendMessage(o.id, p, void 0, {
                                      ...m,
                                      stickerIds: i
                                  })
                                : f.Z.sendStickers(o.id, i, t, m, p.tts)
                            : f.Z.sendMessage(o.id, p, void 0, m);
                    return (
                        this.setState((0, H.H2)()),
                        (0, eu.A6)(o.id),
                        (0, ep.qB)(o.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            ez(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (z.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            ez(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(F.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eC.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            ez(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(G.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eX extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !d.tq && eI.Z.can(eG.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ej.S.subscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ej.S.unsubscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: l, keyboardModeEnabled: a, hasModalOpen: s, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: m, filterAfterTimestamp: f, communicationDisabledUntil: g, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: E, showAppDMsUI: b, isInitialLoading: N, entryPointCommandButtonRef: Z, isFailedAppDMLoad: T } = this.props,
            { textAreaFocused: S, textAreaHighlighted: j } = this.state,
            A = c === U.I.SIDEBAR;
        t = A && n.type === eG.d4z.GUILD_VOICE ? eF.t.pnnyFR : A && n.type === eG.d4z.GUILD_STAGE_VOICE ? eF.t.YInSkp : u.T.THREADS.has(n.type) ? eF.t['OkzL+f'] : eF.t.UbNmGR;
        let y = (0, i.jsx)('div', {
                className: eV.channelBottomBarArea,
                children: (0, i.jsx)(eB.Z, {})
            }),
            P = (0, i.jsxs)('div', {
                className: eV.channelBottomBarArea,
                children: [
                    (0, i.jsx)(em.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eq, {
                            focused: S,
                            highlighted: j,
                            channel: n,
                            guild: l,
                            keyboardModeEnabled: a,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: d,
                            accessibilityLabel: h,
                            shakeIntensity: C,
                            poggermodeEnabled: x,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(eJ, {
                        children: (0, i.jsx)(ek.Z, {
                            channel: n,
                            type: c,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: Z
                        })
                    }),
                    b && !T
                        ? (0, i.jsx)('div', {
                              className: eV.entryPointButtonContainer,
                              children: (0, i.jsx)(ew.Z, {
                                  channel: n,
                                  entryPointCommandButtonRef: Z,
                                  type: c
                              })
                          })
                        : null
                ]
            }),
            M = b && N,
            R = M && N ? y : P;
        return (0, i.jsx)(
            _.Z,
            {
                page: (0, eT.mE)(this.props.channel),
                children: (0, i.jsx)(et.sW, {
                    children: (0, i.jsx)(ee.BV, {
                        children: (0, i.jsxs)(eS.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eS.d9, {
                                    event: eG.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eS.d9, {
                                    event: eG.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eS.d9, {
                                    event: eG.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eS.d9, {
                                    event: eG.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eY, {
                                    isSidebar: A,
                                    className: eV.chatContent,
                                    'aria-label': eF.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eD.Z, {
                                            channel: n,
                                            guild: l,
                                            narrow: A
                                        }),
                                        (0, i.jsxs)(p.HeadingLevel, {
                                            component: (0, i.jsx)(p.HiddenVisually, { children: (0, i.jsx)(p.H, { children: eF.intl.format(eF.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: I,
                                                    filterAfterTimestamp: f,
                                                    showingQuarantineBanner: m
                                                }),
                                                I
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: m,
                                                                guild: l,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: E
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eW,
                                                            className: r()(eV.form, { [eV.formWithLoadedChatInput]: !M }),
                                                            children: [
                                                                x && (0, i.jsx)(eo.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eU.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      })
                                                                    : (0, i.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      }),
                                                                (0, i.jsx)(v.Z, {
                                                                    channel: n,
                                                                    poggermodeEnabled: x
                                                                }),
                                                                !A && (0, i.jsx)(W.Z, {})
                                                            ]
                                                        }),
                                                (0, i.jsx)(et.kw, {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            },
            'messages-'.concat(n.id)
        );
    }
    constructor(...e) {
        super(...e),
            ez(this, 'inputFormRef', l.createRef()),
            ez(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            ez(this, 'dispatchGroupRef', l.createRef()),
            ez(this, 'appIconAnimateRef', l.createRef()),
            ez(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eP.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            ez(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            ez(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            ez(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eG.yXg.ARROW_LEFT:
                            n === U.I.SIDEBAR && ej.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eE.Z.getChannelId() });
                            return;
                        case eG.yXg.ARROW_RIGHT:
                            n === U.I.NORMAL && ej.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eg.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            ez(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, K.PG)(t, this.props.chatInputType);
            }),
            ez(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return S.__(A._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            ez(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            ez(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            ez(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: l, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: r } = e;
                return t.type === eG.d4z.DM && n
                    ? (0, i.jsx)(ed.Z, {})
                    : null != a && (0, X.J)(a) && null != l && !eI.Z.can(eG.Plq.ADMINISTRATOR, l)
                      ? (0, i.jsx)(Q.T, {
                            guild: l,
                            disabledUntil: a
                        })
                      : r
                        ? (0, i.jsx)(q.h, { guild: l })
                        : null;
            });
    }
}
function eJ(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, c.createPortal)(t, n) });
}
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: r } = e,
        { placeholder: s, accessibilityLabel: o } = (0, eL.Z)(t),
        c = (0, ed.S)(eN.default.getCurrentUser(), t),
        [d] = (0, J.AB)(null == n ? void 0 : n.id),
        u = (0, Y.Ux)(null == n ? void 0 : n.id),
        m = (0, h.e7)([eN.default], () => eN.default.getCurrentUser()),
        f = (0, h.e7)([ev.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = ev.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eG.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        g = (0, h.e7)([er.Z], () => er.Z.isEnabled()),
        C = (0, ec.Z)(t.id),
        x = (0, $.Z)(t.id),
        v = (0, B.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: _, primaryEntryPointCommand: I, isProfileFetching: E, wasProfileFetching: N, applicationId: S, channelId: A, commands: y } = (0, Z.Z)({ channel: t });
    (0, T.Z)({
        isProfileFetching: E,
        wasProfileFetching: N,
        applicationId: S,
        channelId: A,
        commands: y
    });
    let P = l.useRef(null),
        M = (0, h.e7)([j.Z], () => j.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eX, {
        channel: t,
        isEditing: null != (0, h.e7)([ex.Z], () => ex.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.useModalsStore)(p.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, h.e7)([b.Z], () => b.Z.keyboardModeEnabled),
        pendingReply: (0, h.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: s,
        accessibilityLabel: o,
        filterAfterTimestamp: r,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: d,
        shakeIntensity: C,
        poggermodeEnabled: g,
        isSelectedResourceChannel: x,
        showAutomodUserProfileChatBlocker: u && !f,
        showAppDMsUI: v,
        isInitialLoading: _,
        showEntryPointAppCommandButton: null != I,
        entryPointCommandButtonRef: P,
        isFailedAppDMLoad: M
    });
});
