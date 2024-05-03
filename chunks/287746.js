"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("873546"),
  o = n("106351"),
  u = n("442837"),
  d = n("481060"),
  c = n("430742"),
  f = n("904245"),
  h = n("144144"),
  m = n("166459"),
  p = n("966390"),
  E = n("738619"),
  C = n("410575"),
  g = n("744061"),
  S = n("857595"),
  _ = n("607070"),
  T = n("367907"),
  I = n("555573"),
  A = n("456007"),
  N = n("10718"),
  v = n("895924"),
  x = n("581364"),
  M = n("667204"),
  R = n("541716"),
  L = n("752305"),
  y = n("424595"),
  O = n("516887"),
  j = n("974251"),
  P = n("893718"),
  D = n("436660"),
  b = n("603009"),
  U = n("28546"),
  F = n("295474"),
  w = n("521476"),
  k = n("69882"),
  H = n("71619"),
  B = n("185145"),
  G = n("736052"),
  V = n("898188"),
  W = n("925975"),
  Y = n("957730"),
  z = n("400023"),
  K = n("64078"),
  Z = n("351780"),
  q = n("843693"),
  X = n("217871"),
  Q = n("139577"),
  J = n("247944"),
  $ = n("623292"),
  ee = n("807092"),
  et = n("268350"),
  en = n("155409"),
  ea = n("314897"),
  el = n("433355"),
  es = n("703558"),
  ei = n("323873"),
  er = n("271383"),
  eo = n("375954"),
  eu = n("496675"),
  ed = n("944486"),
  ec = n("117530"),
  ef = n("594174"),
  eh = n("482207"),
  em = n("626135"),
  ep = n("459273"),
  eE = n("585483"),
  eC = n("709054"),
  eg = n("838440"),
  eS = n("228488"),
  e_ = n("127654"),
  eT = n("979956"),
  eI = n("655687"),
  eA = n("25007"),
  eN = n("199649"),
  ev = n("1397"),
  ex = n("981631"),
  eM = n("689938"),
  eR = n("749185");

function eL(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ey(e) {
  e.preventDefault()
}
let eO = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function ej(e) {
  let {
    isSidebar: t,
    ...n
  } = e;
  return t ? (0, a.jsx)("section", {
    ...n,
    role: "complementary"
  }) : (0, a.jsx)("main", {
    ...n
  })
}
class eP extends l.PureComponent {
  componentDidMount() {
    es.default.addChangeListener(this.draftDidChange)
  }
  componentWillUnmount() {
    es.default.removeChangeListener(this.draftDidChange)
  }
  componentDidUpdate(e, t) {
    let {
      channel: n
    } = this.props, {
      textValue: a
    } = this.state;
    if (e.channel.id !== n.id) {
      this.draftDidChange(this.props);
      return
    }
    if (e.hasModalOpen && !this.props.hasModalOpen) {
      let e = es.default.getDraft(n.id, es.DraftType.ChannelMessage);
      e !== a && this.setState((0, L.createState)(e))
    }
    t.textValue.length < ex.MAX_MESSAGE_LENGTH && a.length >= ex.MAX_MESSAGE_LENGTH && em.default.track(ex.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
  }
  handleEditLastMessage(e) {
    let {
      channel: t
    } = this.props;
    f.default.startEditMessage(t.id, e.id, e.content), T.default.trackWithMetadata(ex.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
  }
  handleRecallLastCommand(e) {
    if (null == e.interactionData) return;
    let {
      channel: t
    } = this.props, {
      commandKey: n,
      interactionOptions: a
    } = (0, x.extractInteractionDataProps)(e.interactionData), {
      command: l,
      application: s
    } = N.getCachedCommand(t, n);
    if (null != l) {
      var i, r;
      let e = null != s ? {
        type: v.ApplicationCommandSectionType.APPLICATION,
        id: s.id,
        icon: null !== (r = null == s ? void 0 : null === (i = s.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : s.icon,
        name: s.name,
        application: s
      } : null;
      I.setActiveCommand({
        channelId: t.id,
        command: l,
        section: e,
        location: v.ApplicationCommandTriggerLocations.RECALL,
        initialValues: (0, A.getInitialValuesFromInteractionOptions)(l, null != a ? a : [])
      })
    }
  }
  render() {
    let {
      channel: e,
      focused: t,
      onResize: n,
      onBlur: l,
      onFocus: s,
      highlighted: r,
      pendingReply: o,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      shakeIntensity: h,
      poggermodeEnabled: m
    } = this.props, {
      contentWarningProps: p
    } = this.state, E = (0, a.jsx)(P.default, {
      textValue: this.state.textValue,
      richValue: this.state.richValue,
      focused: t,
      className: eR.channelTextArea,
      channel: e,
      placeholder: c,
      accessibilityLabel: f,
      pendingReply: o,
      type: u,
      onChange: this.handleTextareaChange,
      onSubmit: this.handleSendMessage,
      onResize: n,
      onFocus: s,
      onBlur: l,
      onKeyDown: this.handleKeyDown,
      renderAttachButton: this.renderAttachButton,
      renderAppLauncherButton: this.renderAppLauncherButton,
      renderApplicationCommandIcon: this.renderApplicationCommandIcon,
      promptToUpload: e_.promptToUpload,
      highlighted: r,
      setEditorRef: e => this.editorRef = e
    });
    return (0, a.jsx)(d.Popout, {
      position: "top",
      onRequestClose: () => {
        var e;
        null == p || null === (e = p.onCancel) || void 0 === e || e.call(p), this.setState({
          contentWarningProps: null
        })
      },
      shouldShow: null != p,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return i()(null != p, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(g.default, {
          onClose: t,
          ...p
        })
      },
      children: () => m ? (0, a.jsx)(d.Shaker, {
        isShaking: h > 0,
        intensity: h,
        children: E
      }) : E
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, eL(this, "isFirstChange", !0), eL(this, "editorRef", null), eL(this, "state", {
      ...(0, L.createState)(es.default.getDraft(this.props.channel.id, es.DraftType.ChannelMessage)),
      contentWarningProps: null
    }), eL(this, "draftDidChange", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        a = es.default.getDraft(e.channel.id, es.DraftType.ChannelMessage);
      n !== a && ("" === a || "" === n) && t.setState((0, L.createState)(a), () => {
        if (n !== a) {
          let {
            onFocus: e
          } = t.props;
          null == e || e()
        }
      })
    }), eL(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t,
        onKeyDown: n,
        channel: a
      } = this.props, l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
      switch (e.which) {
        case ex.KeyboardKeys.DELETE:
        case ex.KeyboardKeys.BACKSPACE:
          this.handleIncrementCombo("", 1);
          return;
        case ex.KeyboardKeys.ARROW_UP:
          if (l || s) return;
          if (e.preventDefault(), t) ec.default.getUploadCount(a.id, es.DraftType.ChannelMessage) > 0 ? eE.ComponentDispatch.dispatchToLastSubscribed(ex.ComponentActions.FOCUS_ATTACHMENT_AREA) : eE.ComponentDispatch.dispatchToLastSubscribed(ex.ComponentActions.FOCUS_MESSAGES, {
            atEnd: !0
          });
          else {
            let {
              channel: e
            } = this.props, t = eo.default.getLastCommandMessage(e.id), n = eo.default.getLastEditableMessage(e.id);
            null != t && null != n ? eC.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
          }
          return;
        case ex.KeyboardKeys.ESCAPE:
          if (l || e.target !== e.currentTarget) return;
          if (e.preventDefault(), t) {
            (0, S.disableKeyboardMode)();
            return
          }
          if (ec.default.getUploadCount(a.id, es.DraftType.ChannelMessage) > 0) {
            m.default.clearAll(a.id, es.DraftType.ChannelMessage);
            return
          }
      }
      null == n || n(e, s)
    }), eL(this, "handleIncrementCombo", (e, t) => {
      var n;
      if (!this.props.poggermodeEnabled) return;
      let a = this.props.channel.id,
        l = ea.default.getId(),
        s = q.default.getUserCombo(l, a),
        i = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
      (0, K.updateCombo)({
        channelId: a,
        userId: l,
        value: null != e ? e.length : i,
        multiplier: t
      })
    }), eL(this, "handleTextareaChange", (e, t, n) => {
      let {
        keyboardModeEnabled: a,
        channel: {
          id: l
        }
      } = this.props;
      c.default.changeDraft(l, t, es.DraftType.ChannelMessage);
      let s = "" !== t && n !== this.state.richValue,
        i = s && !eO.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
      this.isFirstChange = !1, i && this.state.textValue.length < t.length && this.handleIncrementCombo(), i ? h.default.startTyping(l) : "" === t && h.default.stopTyping(l), s && a && (0, S.disableKeyboardMode)(), this.setState({
        textValue: t,
        richValue: n
      })
    }), eL(this, "handleSendMessage", async e => {
      let {
        value: t,
        uploads: n,
        stickers: a,
        command: l,
        commandOptionValues: s,
        isGif: i
      } = e;
      if (0 === (t = t.trim()).length && (null == a || 0 === a.length) && (null == n || 0 === n.length)) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let {
        guild: r,
        channel: o,
        pendingReply: u,
        chatInputType: d
      } = this.props, c = !1;
      if (null != l) {
        if (l.inputType === v.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return eE.ComponentDispatch.dispatch(ex.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
        let e = await (0, M.default)({
          command: l,
          optionValues: null != s ? s : {},
          context: {
            guild: r,
            channel: o
          }
        });
        if (l.inputType !== v.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        });
        null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
      }
      return (0, eg.applyChatRestrictions)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: this.props.chatInputType,
        content: t,
        stickers: a,
        uploads: n,
        channel: o
      }).then(e => {
        let {
          valid: l,
          failureReason: s
        } = e;
        if (!l) return s === ex.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (eE.ComponentDispatch.dispatch(ex.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), eE.ComponentDispatch.dispatch(ex.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let h = (0, W.handleLegacyCommands)(t, {
          channel: o,
          isEdit: !1
        });
        null != h && (null != h.content && (t = h.content), null != h.tts && (c = h.tts));
        let E = Y.default.parse(o, t);
        E.tts = E.tts || c;
        let C = f.default.getSendMessageOptionsForReply(u);
        if (i) return f.default.sendMessage(o.id, E, void 0, C), (0, $.deletePendingReply)(o.id), {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null != n && n.length > 0) {
          let e = (0, eT.getWebUploadFiles)(n);
          if ((0, eT.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, e_.showUploadFileSizeExceededError)(o, e), {
            shouldClear: !1,
            shouldRefocus: !1
          };
          p.default.uploadFiles({
            channelId: o.id,
            uploads: n,
            draftType: es.DraftType.ChannelMessage,
            parsedMessage: E,
            options: {
              ...C,
              stickerIds: a
            }
          }), m.default.clearAll(o.id, es.DraftType.ChannelMessage)
        } else null != a && a.length > 0 ? "" !== t ? f.default.sendMessage(o.id, E, void 0, {
          ...C,
          stickerIds: a
        }) : f.default.sendStickers(o.id, a, t, C, E.tts) : f.default.sendMessage(o.id, E, void 0, C);
        return this.setState((0, L.createEmptyState)()), (0, $.deletePendingReply)(o.id), (0, et.clearStickerPreview)(o.id, d.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }), eL(this, "handleSetValue", e => {
      var t, n;
      let a = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
      null != a && (D.SlateTransforms.select(a, []), a.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
    }), eL(this, "renderAttachButton", (e, t) => (0, a.jsx)(j.default, {
      className: t,
      channel: this.props.channel,
      draftType: es.DraftType.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: this.handleSetValue,
      canOnlyUseTextCommands: e
    })), eL(this, "renderAppLauncherButton", () => (0, a.jsx)(y.default, {})), eL(this, "renderApplicationCommandIcon", (e, t, n) => (0, a.jsx)(O.default, {
      className: n,
      command: e,
      section: t,
      channel: this.props.channel
    }))
  }
}
class eD extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      channel: n
    } = e, {
      currentChannelId: a
    } = t;
    return n.id !== a ? {
      textAreaFocused: null != n && !r.isMobile && eu.default.can(ex.Permissions.SEND_MESSAGES, n),
      currentChannelId: n.id
    } : null
  }
  componentDidMount() {
    eE.ComponentDispatch.subscribe(ex.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  componentDidUpdate(e) {
    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
  }
  componentWillUnmount() {
    eE.ComponentDispatch.unsubscribe(ex.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  render() {
    var e;
    let t;
    let {
      channel: n,
      guild: l,
      keyboardModeEnabled: s,
      hasModalOpen: i,
      pendingReply: r,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      showQuarantinedUserBanner: h,
      filterAfterTimestamp: m,
      communicationDisabledUntil: p,
      shakeIntensity: g,
      poggermodeEnabled: S,
      isSelectedResourceChannel: _,
      showAutomodUserProfileChatBlocker: T
    } = this.props, {
      textAreaFocused: I,
      textAreaHighlighted: A
    } = this.state, N = u === R.ChatInputTypes.SIDEBAR;
    t = N && n.type === ex.ChannelTypes.GUILD_VOICE ? eM.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : N && n.type === ex.ChannelTypes.GUILD_STAGE_VOICE ? eM.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? eM.default.Messages.THREAD_A11Y_LABEL : eM.default.Messages.CHANNEL_A11Y_LABEL;
    let v = (0, a.jsx)(en.default, {
      tutorialId: "writing-messages",
      position: "left",
      offsetX: 75,
      children: (0, a.jsx)(eP, {
        focused: I,
        highlighted: A,
        channel: n,
        guild: l,
        keyboardModeEnabled: s,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        hasModalOpen: i,
        pendingReply: r,
        chatInputType: u,
        placeholder: c,
        accessibilityLabel: f,
        shakeIntensity: g,
        poggermodeEnabled: S
      })
    });
    return (0, a.jsx)(C.default, {
      page: this.getAnalyticsPage(),
      children: (0, a.jsx)(eh.ChatLayerProvider, {
        children: (0, a.jsxs)(ep.ComponentDispatchGroupProvider, {
          ref: this.dispatchGroupRef,
          children: [(0, a.jsx)(ep.ComponentAction, {
            event: ex.ComponentActions.TEXTAREA_FOCUS,
            handler: this.handleInputFocus
          }), (0, a.jsx)(ep.ComponentAction, {
            event: ex.ComponentActions.TEXTAREA_BLUR,
            handler: this.handleInputBlur
          }), (0, a.jsx)(ep.ComponentAction, {
            event: ex.ComponentActions.OPEN_EXPRESSION_PICKER,
            handler: this.handleOpenExpressionPicker
          }), (0, a.jsxs)(ej, {
            isSidebar: N,
            className: eR.chatContent,
            "aria-label": t.format({
              channelName: n.name
            }),
            onMouseDown: this.handleChatInteract,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleChatInteract,
            children: [(0, a.jsx)(eA.default, {
              channel: n,
              guild: l,
              narrow: N
            }), (0, a.jsxs)(d.HeadingLevel, {
              component: (0, a.jsx)(d.HiddenVisually, {
                children: (0, a.jsx)(d.H, {
                  children: eM.default.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [(0, a.jsx)(z.default, {
                channel: n,
                forceCozy: _,
                filterAfterTimestamp: m,
                showingQuarantineBanner: h
              }), null == n.guild_id || N ? null : (0, a.jsx)(V.default, {
                guildId: n.guild_id,
                channel: n
              }), _ ? null : null !== (e = this.renderMessageBanner({
                channel: n,
                showQuarantinedUserBanner: h,
                guild: l,
                communicationDisabledUntil: p,
                showAutomodUserProfileChatBlocker: T
              })) && void 0 !== e ? e : (0, a.jsxs)("form", {
                ref: this.inputFormRef,
                onSubmit: ey,
                className: eR.form,
                children: [S && (0, a.jsx)(X.default, {
                  channelId: n.id
                }), n.isPrivate() ? (0, a.jsx)(eN.default, {
                  channel: n,
                  children: v
                }) : (0, a.jsx)(ev.default, {
                  channel: n,
                  children: v
                }), (0, a.jsx)(E.default, {
                  channel: n,
                  poggermodeEnabled: S
                }), !N && (0, a.jsx)(b.default, {})]
              }), (0, a.jsx)(eh.ChatLayerContainer, {})]
            })]
          })]
        })
      })
    }, "messages-".concat(n.id))
  }
  constructor(...e) {
    super(...e), eL(this, "inputFormRef", l.createRef()), eL(this, "state", {
      textAreaFocused: !1,
      textAreaHighlighted: !1,
      currentChannelId: this.props.channel.id
    }), eL(this, "dispatchGroupRef", l.createRef()), eL(this, "handleRequestFocus", e => {
      e.channelId === this.props.channel.id && this.setState({
        textAreaFocused: !0
      })
    }), eL(this, "getAnalyticsPage", () => {
      let {
        channel: e
      } = this.props;
      if (null == e) return null;
      switch (e.type) {
        case ex.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ex.ChannelTypes.GUILD_TEXT:
        case ex.ChannelTypes.GUILD_FORUM:
        case ex.ChannelTypes.GUILD_MEDIA:
          return C.default.Pages.GUILD_CHANNEL;
        case ex.ChannelTypes.GROUP_DM:
        case ex.ChannelTypes.DM:
          return C.default.Pages.DM_CHANNEL;
        default:
          return null
      }
    }), eL(this, "handleInputFocus", e => {
      var t;
      null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eS.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
        textAreaFocused: !0,
        textAreaHighlighted: null == e ? void 0 : e.highlight
      }) : this.setState({
        textAreaFocused: !0
      }))
    }), eL(this, "handleInputBlur", () => {
      (document.hasFocus() || this.props.hasModalOpen) && this.setState({
        textAreaFocused: !1,
        textAreaHighlighted: !1
      })
    }), eL(this, "handleInputKeyDown", (e, t) => {
      this.state.textAreaHighlighted && this.setState({
        textAreaHighlighted: !1
      }), !t && this._handleMoveToPane(e)
    }), eL(this, "handleKeyDown", e => {
      var t;
      (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e)
    }), eL(this, "_handleMoveToPane", e => {
      let {
        keyboardModeEnabled: t,
        chatInputType: n,
        channel: a
      } = this.props;
      if (t) switch (e.which) {
        case ex.KeyboardKeys.ARROW_LEFT:
          n === R.ChatInputTypes.SIDEBAR && eE.ComponentDispatch.dispatch(ex.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: ed.default.getChannelId()
          });
          return;
        case ex.KeyboardKeys.ARROW_RIGHT:
          n === R.ChatInputTypes.NORMAL && eE.ComponentDispatch.dispatch(ex.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: el.default.getCurrentSidebarChannelId(a.id)
          })
      }
    }), eL(this, "handleOpenExpressionPicker", e => {
      let {
        activeView: t
      } = e;
      (0, U.openExpressionPicker)(t, this.props.chatInputType)
    }), eL(this, "handleChatInteract", () => {
      var e;
      null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
    }), eL(this, "renderMessageBanner", e => {
      let {
        channel: t,
        showQuarantinedUserBanner: n,
        guild: l,
        communicationDisabledUntil: s,
        showAutomodUserProfileChatBlocker: i
      } = e;
      return t.type === ex.ChannelTypes.DM && n ? (0, a.jsx)(J.default, {}) : null != s && (0, k.isCommunicationDisabled)(s) && null != l && !eu.default.can(ex.Permissions.ADMINISTRATOR, l) ? (0, a.jsx)(B.CommunicationDisabledBanner, {
        guild: l,
        disabledUntil: s
      }) : i ? (0, a.jsx)(w.AutomodUserProfileQuarantineChatInputNotice, {
        guild: l
      }) : null
    })
  }
}
t.default = l.memo(function(e) {
  let {
    channel: t,
    guild: n,
    chatInputType: l,
    filterAfterTimestamp: s
  } = e, {
    placeholder: i,
    accessibilityLabel: r
  } = (0, eI.default)(t), o = (0, J.useShouldBlockDMInputForQuarantinedUser)(ef.default.getCurrentUser(), t), [c] = (0, H.useCurrentUserCommunicationDisabled)(null == n ? void 0 : n.id), f = (0, F.useCurrentUserHasAutomodQuarantinedProfile)(null == n ? void 0 : n.id), h = (0, u.useStateFromStores)([ef.default], () => ef.default.getCurrentUser()), m = (0, u.useStateFromStores)([er.default], () => {
    var e, t, a;
    return null != h && null !== (a = null === (e = er.default.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.EMPTY_STRING_SNOWFLAKE_ID, null == h ? void 0 : h.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== a && a
  }), p = (0, u.useStateFromStores)([Z.default], () => Z.default.isEnabled()), E = (0, Q.default)(t.id), C = (0, G.default)(t.id);
  return (0, a.jsx)(eD, {
    channel: t,
    isEditing: null != (0, u.useStateFromStores)([ei.default], () => ei.default.getEditingMessageId(t.id)),
    hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
    guild: n,
    keyboardModeEnabled: (0, u.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
    pendingReply: (0, u.useStateFromStores)([ee.default], () => ee.default.getPendingReply(t.id)),
    chatInputType: l,
    placeholder: i,
    accessibilityLabel: r,
    filterAfterTimestamp: s,
    showQuarantinedUserBanner: o,
    communicationDisabledUntil: c,
    shakeIntensity: E,
    poggermodeEnabled: p,
    isSelectedResourceChannel: C,
    showAutomodUserProfileChatBlocker: f && !m
  })
})