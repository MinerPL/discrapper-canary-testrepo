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
  v = n("10718"),
  N = n("895924"),
  x = n("581364"),
  M = n("667204"),
  R = n("541716"),
  L = n("752305"),
  y = n("424595"),
  O = n("516887"),
  j = n("974251"),
  P = n("893718"),
  D = n("436660"),
  b = n("28546"),
  U = n("295474"),
  F = n("521476"),
  w = n("69882"),
  k = n("71619"),
  H = n("185145"),
  B = n("736052"),
  G = n("898188"),
  V = n("925975"),
  W = n("957730"),
  Y = n("400023"),
  z = n("64078"),
  Z = n("351780"),
  K = n("843693"),
  X = n("217871"),
  q = n("139577"),
  Q = n("247944"),
  J = n("623292"),
  $ = n("807092"),
  ee = n("268350"),
  et = n("155409"),
  en = n("314897"),
  ea = n("433355"),
  el = n("703558"),
  es = n("323873"),
  ei = n("271383"),
  er = n("375954"),
  eo = n("496675"),
  eu = n("944486"),
  ed = n("117530"),
  ec = n("594174"),
  ef = n("482207"),
  eh = n("626135"),
  em = n("459273"),
  ep = n("585483"),
  eE = n("709054"),
  eC = n("838440"),
  eg = n("228488"),
  eS = n("127654"),
  e_ = n("979956"),
  eT = n("655687"),
  eI = n("25007"),
  eA = n("199649"),
  ev = n("1397"),
  eN = n("981631"),
  ex = n("689938"),
  eM = n("121950");

function eR(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eL(e) {
  e.preventDefault()
}
let ey = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function eO(e) {
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
class ej extends l.PureComponent {
  componentDidMount() {
    el.default.addChangeListener(this.draftDidChange)
  }
  componentWillUnmount() {
    el.default.removeChangeListener(this.draftDidChange)
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
      let e = el.default.getDraft(n.id, el.DraftType.ChannelMessage);
      e !== a && this.setState((0, L.createState)(e))
    }
    t.textValue.length < eN.MAX_MESSAGE_LENGTH && a.length >= eN.MAX_MESSAGE_LENGTH && eh.default.track(eN.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
  }
  handleEditLastMessage(e) {
    let {
      channel: t
    } = this.props;
    f.default.startEditMessage(t.id, e.id, e.content), T.default.trackWithMetadata(eN.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
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
    } = v.getCachedCommand(t, n);
    if (null != l) {
      var i, r;
      let e = null != s ? {
        type: N.ApplicationCommandSectionType.APPLICATION,
        id: s.id,
        icon: null !== (r = null == s ? void 0 : null === (i = s.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : s.icon,
        name: s.name,
        application: s
      } : null;
      I.setActiveCommand({
        channelId: t.id,
        command: l,
        section: e,
        location: N.ApplicationCommandTriggerLocations.RECALL,
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
      className: eM.channelTextArea,
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
      promptToUpload: eS.promptToUpload,
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
    super(...e), t = this, eR(this, "isFirstChange", !0), eR(this, "editorRef", null), eR(this, "state", {
      ...(0, L.createState)(el.default.getDraft(this.props.channel.id, el.DraftType.ChannelMessage)),
      contentWarningProps: null
    }), eR(this, "draftDidChange", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        a = el.default.getDraft(e.channel.id, el.DraftType.ChannelMessage);
      n !== a && ("" === a || "" === n) && t.setState((0, L.createState)(a), () => {
        if (n !== a) {
          let {
            onFocus: e
          } = t.props;
          null == e || e()
        }
      })
    }), eR(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t,
        onKeyDown: n,
        channel: a
      } = this.props, l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
      switch (e.which) {
        case eN.KeyboardKeys.DELETE:
        case eN.KeyboardKeys.BACKSPACE:
          this.handleIncrementCombo("", 1);
          return;
        case eN.KeyboardKeys.ARROW_UP:
          if (l || s) return;
          if (e.preventDefault(), t) ed.default.getUploadCount(a.id, el.DraftType.ChannelMessage) > 0 ? ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_ATTACHMENT_AREA) : ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_MESSAGES, {
            atEnd: !0
          });
          else {
            let {
              channel: e
            } = this.props, t = er.default.getLastCommandMessage(e.id), n = er.default.getLastEditableMessage(e.id);
            null != t && null != n ? eE.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
          }
          return;
        case eN.KeyboardKeys.ESCAPE:
          if (l || e.target !== e.currentTarget) return;
          if (e.preventDefault(), t) {
            (0, S.disableKeyboardMode)();
            return
          }
          if (ed.default.getUploadCount(a.id, el.DraftType.ChannelMessage) > 0) {
            m.default.clearAll(a.id, el.DraftType.ChannelMessage);
            return
          }
      }
      null == n || n(e, s)
    }), eR(this, "handleIncrementCombo", (e, t) => {
      var n;
      if (!this.props.poggermodeEnabled) return;
      let a = this.props.channel.id,
        l = en.default.getId(),
        s = K.default.getUserCombo(l, a),
        i = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
      (0, z.updateCombo)({
        channelId: a,
        userId: l,
        value: null != e ? e.length : i,
        multiplier: t
      })
    }), eR(this, "handleTextareaChange", (e, t, n) => {
      let {
        keyboardModeEnabled: a,
        channel: {
          id: l
        }
      } = this.props;
      c.default.changeDraft(l, t, el.DraftType.ChannelMessage);
      let s = "" !== t && n !== this.state.richValue,
        i = s && !ey.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
      this.isFirstChange = !1, i && this.state.textValue.length < t.length && this.handleIncrementCombo(), i ? h.default.startTyping(l) : "" === t && h.default.stopTyping(l), s && a && (0, S.disableKeyboardMode)(), this.setState({
        textValue: t,
        richValue: n
      })
    }), eR(this, "handleSendMessage", async e => {
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
        if (l.inputType === N.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
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
        if (l.inputType !== N.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        });
        null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
      }
      return (0, eC.applyChatRestrictions)({
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
        if (!l) return s === eN.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), ep.ComponentDispatch.dispatch(eN.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let h = (0, V.handleLegacyCommands)(t, {
          channel: o,
          isEdit: !1
        });
        null != h && (null != h.content && (t = h.content), null != h.tts && (c = h.tts));
        let E = W.default.parse(o, t);
        E.tts = E.tts || c;
        let C = f.default.getSendMessageOptionsForReply(u);
        if (i) return f.default.sendMessage(o.id, E, void 0, C), (0, J.deletePendingReply)(o.id), {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null != n && n.length > 0) {
          let e = (0, e_.getWebUploadFiles)(n);
          if ((0, e_.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, eS.showUploadFileSizeExceededError)(o, e), {
            shouldClear: !1,
            shouldRefocus: !1
          };
          p.default.uploadFiles({
            channelId: o.id,
            uploads: n,
            draftType: el.DraftType.ChannelMessage,
            parsedMessage: E,
            options: {
              ...C,
              stickerIds: a
            }
          }), m.default.clearAll(o.id, el.DraftType.ChannelMessage)
        } else null != a && a.length > 0 ? "" !== t ? f.default.sendMessage(o.id, E, void 0, {
          ...C,
          stickerIds: a
        }) : f.default.sendStickers(o.id, a, t, C, E.tts) : f.default.sendMessage(o.id, E, void 0, C);
        return this.setState((0, L.createEmptyState)()), (0, J.deletePendingReply)(o.id), (0, ee.clearStickerPreview)(o.id, d.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }), eR(this, "handleSetValue", e => {
      var t, n;
      let a = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
      null != a && (D.SlateTransforms.select(a, []), a.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
    }), eR(this, "renderAttachButton", (e, t) => (0, a.jsx)(j.default, {
      className: t,
      channel: this.props.channel,
      draftType: el.DraftType.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: this.handleSetValue,
      canOnlyUseTextCommands: e
    })), eR(this, "renderAppLauncherButton", () => (0, a.jsx)(y.default, {})), eR(this, "renderApplicationCommandIcon", (e, t, n) => (0, a.jsx)(O.default, {
      className: n,
      command: e,
      section: t,
      channel: this.props.channel
    }))
  }
}
class eP extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      channel: n
    } = e, {
      currentChannelId: a
    } = t;
    return n.id !== a ? {
      textAreaFocused: null != n && !r.isMobile && eo.default.can(eN.Permissions.SEND_MESSAGES, n),
      currentChannelId: n.id
    } : null
  }
  componentDidMount() {
    ep.ComponentDispatch.subscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  componentDidUpdate(e) {
    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
  }
  componentWillUnmount() {
    ep.ComponentDispatch.unsubscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
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
    } = this.state, v = u === R.ChatInputTypes.SIDEBAR;
    t = v && n.type === eN.ChannelTypes.GUILD_VOICE ? ex.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : v && n.type === eN.ChannelTypes.GUILD_STAGE_VOICE ? ex.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? ex.default.Messages.THREAD_A11Y_LABEL : ex.default.Messages.CHANNEL_A11Y_LABEL;
    let N = (0, a.jsx)(et.default, {
      tutorialId: "writing-messages",
      position: "left",
      offsetX: 75,
      children: (0, a.jsx)(ej, {
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
      children: (0, a.jsx)(ef.ChatLayerProvider, {
        children: (0, a.jsxs)(em.ComponentDispatchGroupProvider, {
          ref: this.dispatchGroupRef,
          children: [(0, a.jsx)(em.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_FOCUS,
            handler: this.handleInputFocus
          }), (0, a.jsx)(em.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_BLUR,
            handler: this.handleInputBlur
          }), (0, a.jsx)(em.ComponentAction, {
            event: eN.ComponentActions.OPEN_EXPRESSION_PICKER,
            handler: this.handleOpenExpressionPicker
          }), (0, a.jsxs)(eO, {
            isSidebar: v,
            className: eM.chatContent,
            "aria-label": t.format({
              channelName: n.name
            }),
            onMouseDown: this.handleChatInteract,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleChatInteract,
            children: [(0, a.jsx)(eI.default, {
              channel: n,
              guild: l,
              narrow: v
            }), (0, a.jsxs)(d.HeadingLevel, {
              component: (0, a.jsx)(d.HiddenVisually, {
                children: (0, a.jsx)(d.H, {
                  children: ex.default.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [(0, a.jsx)(Y.default, {
                channel: n,
                forceCozy: _,
                filterAfterTimestamp: m,
                showingQuarantineBanner: h
              }), null == n.guild_id || v ? null : (0, a.jsx)(G.default, {
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
                onSubmit: eL,
                className: eM.form,
                children: [S && (0, a.jsx)(X.default, {
                  channelId: n.id
                }), n.isPrivate() ? (0, a.jsx)(eA.default, {
                  channel: n,
                  children: N
                }) : (0, a.jsx)(ev.default, {
                  channel: n,
                  children: N
                }), (0, a.jsx)(E.default, {
                  channel: n,
                  poggermodeEnabled: S
                })]
              }), (0, a.jsx)(ef.ChatLayerContainer, {})]
            })]
          })]
        })
      })
    }, "messages-".concat(n.id))
  }
  constructor(...e) {
    super(...e), eR(this, "inputFormRef", l.createRef()), eR(this, "state", {
      textAreaFocused: !1,
      textAreaHighlighted: !1,
      currentChannelId: this.props.channel.id
    }), eR(this, "dispatchGroupRef", l.createRef()), eR(this, "handleRequestFocus", e => {
      e.channelId === this.props.channel.id && this.setState({
        textAreaFocused: !0
      })
    }), eR(this, "getAnalyticsPage", () => {
      let {
        channel: e
      } = this.props;
      if (null == e) return null;
      switch (e.type) {
        case eN.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eN.ChannelTypes.GUILD_TEXT:
        case eN.ChannelTypes.GUILD_FORUM:
        case eN.ChannelTypes.GUILD_MEDIA:
          return C.default.Pages.GUILD_CHANNEL;
        case eN.ChannelTypes.GROUP_DM:
        case eN.ChannelTypes.DM:
          return C.default.Pages.DM_CHANNEL;
        default:
          return null
      }
    }), eR(this, "handleInputFocus", e => {
      var t;
      null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eg.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
        textAreaFocused: !0,
        textAreaHighlighted: null == e ? void 0 : e.highlight
      }) : this.setState({
        textAreaFocused: !0
      }))
    }), eR(this, "handleInputBlur", () => {
      (document.hasFocus() || this.props.hasModalOpen) && this.setState({
        textAreaFocused: !1,
        textAreaHighlighted: !1
      })
    }), eR(this, "handleInputKeyDown", (e, t) => {
      this.state.textAreaHighlighted && this.setState({
        textAreaHighlighted: !1
      }), !t && this._handleMoveToPane(e)
    }), eR(this, "handleKeyDown", e => {
      var t;
      (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e)
    }), eR(this, "_handleMoveToPane", e => {
      let {
        keyboardModeEnabled: t,
        chatInputType: n,
        channel: a
      } = this.props;
      if (t) switch (e.which) {
        case eN.KeyboardKeys.ARROW_LEFT:
          n === R.ChatInputTypes.SIDEBAR && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: eu.default.getChannelId()
          });
          return;
        case eN.KeyboardKeys.ARROW_RIGHT:
          n === R.ChatInputTypes.NORMAL && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: ea.default.getCurrentSidebarChannelId(a.id)
          })
      }
    }), eR(this, "handleOpenExpressionPicker", e => {
      let {
        activeView: t
      } = e;
      (0, b.openExpressionPicker)(t, this.props.chatInputType)
    }), eR(this, "handleChatInteract", () => {
      var e;
      null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
    }), eR(this, "renderMessageBanner", e => {
      let {
        channel: t,
        showQuarantinedUserBanner: n,
        guild: l,
        communicationDisabledUntil: s,
        showAutomodUserProfileChatBlocker: i
      } = e;
      return t.type === eN.ChannelTypes.DM && n ? (0, a.jsx)(Q.default, {}) : null != s && (0, w.isCommunicationDisabled)(s) && null != l && !eo.default.can(eN.Permissions.ADMINISTRATOR, l) ? (0, a.jsx)(H.CommunicationDisabledBanner, {
        guild: l,
        disabledUntil: s
      }) : i ? (0, a.jsx)(F.AutomodUserProfileQuarantineChatInputNotice, {
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
  } = (0, eT.default)(t), o = (0, Q.useShouldBlockDMInputForQuarantinedUser)(ec.default.getCurrentUser(), t), [c] = (0, k.useCurrentUserCommunicationDisabled)(null == n ? void 0 : n.id), f = (0, U.useCurrentUserHasAutomodQuarantinedProfile)(null == n ? void 0 : n.id), h = (0, u.useStateFromStores)([ec.default], () => ec.default.getCurrentUser()), m = (0, u.useStateFromStores)([ei.default], () => {
    var e, t, a;
    return null != h && null !== (a = null === (e = ei.default.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eN.EMPTY_STRING_SNOWFLAKE_ID, null == h ? void 0 : h.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== a && a
  }), p = (0, u.useStateFromStores)([Z.default], () => Z.default.isEnabled()), E = (0, q.default)(t.id), C = (0, B.default)(t.id);
  return (0, a.jsx)(eP, {
    channel: t,
    isEditing: null != (0, u.useStateFromStores)([es.default], () => es.default.getEditingMessageId(t.id)),
    hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
    guild: n,
    keyboardModeEnabled: (0, u.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
    pendingReply: (0, u.useStateFromStores)([$.default], () => $.default.getPendingReply(t.id)),
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