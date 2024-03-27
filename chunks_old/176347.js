"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eP
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("394846"),
  o = n("298386"),
  u = n("446674"),
  d = n("77078"),
  c = n("295426"),
  f = n("819689"),
  h = n("352674"),
  C = n("81594"),
  p = n("783480"),
  m = n("125667"),
  E = n("901582"),
  g = n("767993"),
  S = n("180748"),
  T = n("206230"),
  A = n("716241"),
  _ = n("507217"),
  M = n("118200"),
  I = n("240249"),
  N = n("524768"),
  v = n("389153"),
  x = n("916565"),
  L = n("850391"),
  y = n("149022"),
  R = n("159492"),
  O = n("998415"),
  D = n("228800"),
  P = n("681060"),
  b = n("939563"),
  j = n("538282"),
  k = n("956967"),
  F = n("952104"),
  H = n("509"),
  U = n("406043"),
  G = n("68895"),
  B = n("934288"),
  V = n("87635"),
  w = n("734570"),
  W = n("884351"),
  Z = n("818950"),
  z = n("28007"),
  K = n("880731"),
  Y = n("943551"),
  X = n("667137"),
  q = n("445499"),
  J = n("319939"),
  Q = n("529805"),
  $ = n("685841"),
  ee = n("467094"),
  et = n("12896"),
  en = n("271938"),
  es = n("982108"),
  ea = n("474643"),
  el = n("836417"),
  ei = n("26989"),
  er = n("377253"),
  eo = n("957255"),
  eu = n("18494"),
  ed = n("585722"),
  ec = n("697218"),
  ef = n("659186"),
  eh = n("599110"),
  eC = n("378765"),
  ep = n("659500"),
  em = n("299039"),
  eE = n("718422"),
  eg = n("563680"),
  eS = n("412861"),
  eT = n("834021"),
  eA = n("685888"),
  e_ = n("710216"),
  eM = n("348652"),
  eI = n("306588"),
  eN = n("49111"),
  ev = n("782340"),
  ex = n("250455");

function eL(e) {
  e.preventDefault()
}
let ey = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function eR(e) {
  let {
    isSidebar: t,
    ...n
  } = e;
  return t ? (0, s.jsx)("section", {
    ...n,
    role: "complementary"
  }) : (0, s.jsx)("main", {
    ...n
  })
}
class eO extends a.PureComponent {
  componentDidMount() {
    ea.default.addChangeListener(this.draftDidChange)
  }
  componentWillUnmount() {
    ea.default.removeChangeListener(this.draftDidChange)
  }
  componentDidUpdate(e, t) {
    let {
      channel: n
    } = this.props, {
      textValue: s
    } = this.state;
    if (e.channel.id !== n.id) {
      this.draftDidChange(this.props);
      return
    }
    if (e.hasModalOpen && !this.props.hasModalOpen) {
      let e = ea.default.getDraft(n.id, ea.DraftType.ChannelMessage);
      e !== s && this.setState((0, y.createState)(e))
    }
    t.textValue.length < eN.MAX_MESSAGE_LENGTH && s.length >= eN.MAX_MESSAGE_LENGTH && eh.default.track(eN.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
  }
  handleEditLastMessage(e) {
    let {
      channel: t
    } = this.props;
    f.default.startEditMessage(t.id, e.id, e.content), A.default.trackWithMetadata(eN.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
  }
  handleRecallLastCommand(e) {
    if (null == e.interactionData) return;
    let {
      channel: t
    } = this.props, {
      commandKey: n,
      interactionOptions: s
    } = (0, v.extractInteractionDataProps)(e.interactionData), {
      command: a,
      application: l
    } = I.getCachedCommand(t, n);
    if (null != a) {
      var i, r;
      let e = null != l ? {
        type: N.ApplicationCommandSectionType.APPLICATION,
        id: l.id,
        icon: null !== (r = null == l ? void 0 : null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : l.icon,
        name: l.name,
        application: l
      } : null;
      _.setActiveCommand({
        channelId: t.id,
        command: a,
        section: e,
        location: N.ApplicationCommandTriggerLocations.RECALL,
        initialValues: (0, M.getInitialValuesFromInteractionOptions)(a, null != s ? s : [])
      })
    }
  }
  render() {
    let {
      channel: e,
      focused: t,
      onResize: n,
      onBlur: a,
      onFocus: l,
      highlighted: r,
      pendingReply: o,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      shakeIntensity: h,
      poggermodeEnabled: C
    } = this.props, {
      contentWarningProps: p
    } = this.state, m = (0, s.jsx)(P.default, {
      textValue: this.state.textValue,
      richValue: this.state.richValue,
      focused: t,
      className: ex.channelTextArea,
      channel: e,
      placeholder: c,
      accessibilityLabel: f,
      pendingReply: o,
      type: u,
      onChange: this.handleTextareaChange,
      onSubmit: this.handleSendMessage,
      onResize: n,
      onFocus: l,
      onBlur: a,
      onKeyDown: this.handleKeyDown,
      renderAttachButton: this.renderAttachButton,
      renderAppLauncherButton: this.renderAppLauncherButton,
      renderApplicationCommandIcon: this.renderApplicationCommandIcon,
      promptToUpload: eS.promptToUpload,
      highlighted: r,
      setEditorRef: e => this.editorRef = e
    });
    return (0, s.jsx)(d.Popout, {
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
        return i(null != p, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, s.jsx)(g.default, {
          onClose: t,
          ...p
        })
      },
      children: () => C ? (0, s.jsx)(d.Shaker, {
        isShaking: h > 0,
        intensity: h,
        children: m
      }) : m
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.isFirstChange = !0, this.editorRef = null, this.state = {
      ...(0, y.createState)(ea.default.getDraft(this.props.channel.id, ea.DraftType.ChannelMessage)),
      contentWarningProps: null
    }, this.draftDidChange = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        s = ea.default.getDraft(e.channel.id, ea.DraftType.ChannelMessage);
      n !== s && ("" === s || "" === n) && t.setState((0, y.createState)(s), () => {
        if (n !== s) {
          let {
            onFocus: e
          } = t.props;
          null == e || e()
        }
      })
    }, this.handleKeyDown = e => {
      let {
        keyboardModeEnabled: t,
        onKeyDown: n,
        channel: s
      } = this.props, a = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, l = 0 !== this.state.textValue.length;
      switch (e.which) {
        case eN.KeyboardKeys.DELETE:
        case eN.KeyboardKeys.BACKSPACE:
          this.handleIncrementCombo("", 1);
          return;
        case eN.KeyboardKeys.ARROW_UP:
          if (a || l) return;
          if (e.preventDefault(), t) ed.default.getUploadCount(s.id, ea.DraftType.ChannelMessage) > 0 ? ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_ATTACHMENT_AREA) : ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_MESSAGES, {
            atEnd: !0
          });
          else {
            let {
              channel: e
            } = this.props, t = er.default.getLastCommandMessage(e.id), n = er.default.getLastEditableMessage(e.id);
            null != t && null != n ? em.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
          }
          return;
        case eN.KeyboardKeys.ESCAPE:
          if (a || e.target !== e.currentTarget) return;
          if (e.preventDefault(), t) {
            (0, S.disableKeyboardMode)();
            return
          }
          if (ed.default.getUploadCount(s.id, ea.DraftType.ChannelMessage) > 0) {
            C.default.clearAll(s.id, ea.DraftType.ChannelMessage);
            return
          }
      }
      null == n || n(e, l)
    }, this.handleIncrementCombo = (e, t) => {
      var n;
      if (!this.props.poggermodeEnabled) return;
      let s = this.props.channel.id,
        a = en.default.getId(),
        l = Y.default.getUserCombo(a, s),
        i = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
      (0, z.updateCombo)({
        channelId: s,
        userId: a,
        value: null != e ? e.length : i,
        multiplier: t
      })
    }, this.handleTextareaChange = (e, t, n) => {
      let {
        keyboardModeEnabled: s,
        channel: {
          id: a
        }
      } = this.props;
      c.default.changeDraft(a, t, ea.DraftType.ChannelMessage);
      let l = "" !== t && n !== this.state.richValue,
        i = l && !ey.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
      this.isFirstChange = !1, i && this.state.textValue.length < t.length && this.handleIncrementCombo(), i ? h.default.startTyping(a) : "" === t && h.default.stopTyping(a), l && s && (0, S.disableKeyboardMode)(), this.setState({
        textValue: t,
        richValue: n
      })
    }, this.handleSendMessage = async e => {
      let {
        value: t,
        uploads: n,
        stickers: s,
        command: a,
        commandOptionValues: l,
        isGif: i
      } = e;
      if (0 === (t = t.trim()).length && (null == s || 0 === s.length) && (null == n || 0 === n.length)) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let {
        guild: r,
        channel: o,
        pendingReply: u,
        chatInputType: d
      } = this.props, c = !1;
      if (null != a) {
        if (a.inputType === N.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
        let e = await (0, x.default)({
          command: a,
          optionValues: null != l ? l : {},
          context: {
            guild: r,
            channel: o
          }
        });
        if (a.inputType !== N.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        });
        null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
      }
      return (0, eE.applyChatRestrictions)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: this.props.chatInputType,
        content: t,
        stickers: s,
        uploads: n,
        channel: o
      }).then(e => {
        let {
          valid: a,
          failureReason: l
        } = e;
        if (!a) return l === eN.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), ep.ComponentDispatch.dispatch(eN.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let h = (0, w.handleLegacyCommands)(t, {
          channel: o,
          isEdit: !1
        });
        null != h && (null != h.content && (t = h.content), null != h.tts && (c = h.tts));
        let m = W.default.parse(o, t);
        m.tts = m.tts || c;
        let E = f.default.getSendMessageOptionsForReply(u);
        if (i) return f.default.sendMessage(o.id, m, void 0, E), (0, Q.deletePendingReply)(o.id), {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null != n && n.length > 0) {
          let e = (0, eT.getWebUploadFiles)(n);
          if ((0, eT.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, eS.showUploadFileSizeExceededError)(o, e), {
            shouldClear: !1,
            shouldRefocus: !1
          };
          p.default.uploadFiles({
            channelId: o.id,
            uploads: n,
            draftType: ea.DraftType.ChannelMessage,
            parsedMessage: m,
            options: {
              ...E,
              stickerIds: s
            }
          }), C.default.clearAll(o.id, ea.DraftType.ChannelMessage)
        } else null != s && s.length > 0 ? "" !== t ? f.default.sendMessage(o.id, m, void 0, {
          ...E,
          stickerIds: s
        }) : f.default.sendStickers(o.id, s, t, E, m.tts) : f.default.sendMessage(o.id, m, void 0, E);
        return this.setState((0, y.createEmptyState)()), (0, Q.deletePendingReply)(o.id), (0, ee.clearStickerPreview)(o.id, d.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }, this.handleSetValue = e => {
      var t, n;
      let s = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
      null != s && (b.SlateTransforms.select(s, []), s.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
    }, this.renderAttachButton = (e, t) => (0, s.jsx)(D.default, {
      className: t,
      channel: this.props.channel,
      draftType: ea.DraftType.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: this.handleSetValue,
      canOnlyUseTextCommands: e
    }), this.renderAppLauncherButton = () => (0, s.jsx)(R.default, {}), this.renderApplicationCommandIcon = (e, t, n) => (0, s.jsx)(O.default, {
      className: n,
      command: e,
      section: t,
      channel: this.props.channel
    })
  }
}
class eD extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      channel: n
    } = e, {
      currentChannelId: s
    } = t;
    return n.id !== s ? {
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
      guild: a,
      keyboardModeEnabled: l,
      hasModalOpen: i,
      pendingReply: r,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      showQuarantinedUserBanner: h,
      filterAfterTimestamp: C,
      communicationDisabledUntil: p,
      shakeIntensity: g,
      poggermodeEnabled: S,
      isSelectedResourceChannel: T,
      showAutomodUserProfileChatBlocker: A
    } = this.props, {
      textAreaFocused: _,
      textAreaHighlighted: M
    } = this.state, I = u === L.ChatInputTypes.SIDEBAR;
    t = I && n.type === eN.ChannelTypes.GUILD_VOICE ? ev.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : I && n.type === eN.ChannelTypes.GUILD_STAGE_VOICE ? ev.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? ev.default.Messages.THREAD_A11Y_LABEL : ev.default.Messages.CHANNEL_A11Y_LABEL;
    let N = (0, s.jsx)(et.default, {
      tutorialId: "writing-messages",
      position: "left",
      offsetX: 75,
      children: (0, s.jsx)(eO, {
        focused: _,
        highlighted: M,
        channel: n,
        guild: a,
        keyboardModeEnabled: l,
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
    return (0, s.jsx)(E.default, {
      page: this.getAnalyticsPage(),
      children: (0, s.jsx)(ef.ChatLayerProvider, {
        children: (0, s.jsxs)(eC.ComponentDispatchGroupProvider, {
          ref: this.dispatchGroupRef,
          children: [(0, s.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_FOCUS,
            handler: this.handleInputFocus
          }), (0, s.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_BLUR,
            handler: this.handleInputBlur
          }), (0, s.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.OPEN_EXPRESSION_PICKER,
            handler: this.handleOpenExpressionPicker
          }), (0, s.jsxs)(eR, {
            isSidebar: I,
            className: ex.chatContent,
            "aria-label": t.format({
              channelName: n.name
            }),
            onMouseDown: this.handleChatInteract,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleChatInteract,
            children: [(0, s.jsx)(e_.default, {
              channel: n,
              guild: a,
              narrow: I
            }), (0, s.jsxs)(d.HeadingLevel, {
              component: (0, s.jsx)(d.HiddenVisually, {
                children: (0, s.jsx)(d.H, {
                  children: ev.default.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [(0, s.jsx)(Z.default, {
                channel: n,
                forceCozy: T,
                filterAfterTimestamp: C,
                showingQuarantineBanner: h
              }), null == n.guild_id || I ? null : (0, s.jsx)(V.default, {
                guildId: n.guild_id,
                channel: n
              }), T ? null : null !== (e = this.renderMessageBanner({
                channel: n,
                showQuarantinedUserBanner: h,
                guild: a,
                communicationDisabledUntil: p,
                showAutomodUserProfileChatBlocker: A
              })) && void 0 !== e ? e : (0, s.jsxs)("form", {
                ref: this.inputFormRef,
                onSubmit: eL,
                className: ex.form,
                children: [S && (0, s.jsx)(X.default, {
                  channelId: n.id
                }), n.isPrivate() ? (0, s.jsx)(eM.default, {
                  channel: n,
                  children: N
                }) : (0, s.jsx)(eI.default, {
                  channel: n,
                  children: N
                }), (0, s.jsx)(m.default, {
                  channel: n,
                  poggermodeEnabled: S
                })]
              }), (0, s.jsx)(ef.ChatLayerContainer, {})]
            })]
          })]
        })
      })
    }, "messages-".concat(n.id))
  }
  constructor(...e) {
    super(...e), this.inputFormRef = a.createRef(), this.state = {
      textAreaFocused: !1,
      textAreaHighlighted: !1,
      currentChannelId: this.props.channel.id
    }, this.dispatchGroupRef = a.createRef(), this.handleRequestFocus = e => {
      e.channelId === this.props.channel.id && this.setState({
        textAreaFocused: !0
      })
    }, this.getAnalyticsPage = () => {
      let {
        channel: e
      } = this.props;
      if (null == e) return null;
      switch (e.type) {
        case eN.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eN.ChannelTypes.GUILD_TEXT:
        case eN.ChannelTypes.GUILD_FORUM:
        case eN.ChannelTypes.GUILD_MEDIA:
          return E.default.Pages.GUILD_CHANNEL;
        case eN.ChannelTypes.GROUP_DM:
        case eN.ChannelTypes.DM:
          return E.default.Pages.DM_CHANNEL;
        default:
          return null
      }
    }, this.handleInputFocus = e => {
      var t;
      null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eg.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
        textAreaFocused: !0,
        textAreaHighlighted: null == e ? void 0 : e.highlight
      }) : this.setState({
        textAreaFocused: !0
      }))
    }, this.handleInputBlur = () => {
      (document.hasFocus() || this.props.hasModalOpen) && this.setState({
        textAreaFocused: !1,
        textAreaHighlighted: !1
      })
    }, this.handleInputKeyDown = (e, t) => {
      this.state.textAreaHighlighted && this.setState({
        textAreaHighlighted: !1
      }), !t && this._handleMoveToPane(e)
    }, this.handleKeyDown = e => {
      var t;
      (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e)
    }, this._handleMoveToPane = e => {
      let {
        keyboardModeEnabled: t,
        chatInputType: n,
        channel: s
      } = this.props;
      if (t) switch (e.which) {
        case eN.KeyboardKeys.ARROW_LEFT:
          n === L.ChatInputTypes.SIDEBAR && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: eu.default.getChannelId()
          });
          return;
        case eN.KeyboardKeys.ARROW_RIGHT:
          n === L.ChatInputTypes.NORMAL && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: es.default.getCurrentSidebarChannelId(s.id)
          })
      }
    }, this.handleOpenExpressionPicker = e => {
      let {
        activeView: t
      } = e;
      (0, j.openExpressionPicker)(t, this.props.chatInputType)
    }, this.handleChatInteract = () => {
      var e;
      null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
    }, this.renderMessageBanner = e => {
      let {
        channel: t,
        showQuarantinedUserBanner: n,
        guild: a,
        communicationDisabledUntil: l,
        showAutomodUserProfileChatBlocker: i
      } = e;
      return t.type === eN.ChannelTypes.DM && n ? (0, s.jsx)(J.default, {}) : null != l && (0, H.isCommunicationDisabled)(l) && null != a && !eo.default.can(eN.Permissions.ADMINISTRATOR, a) ? (0, s.jsx)(G.CommunicationDisabledBanner, {
        guild: a,
        disabledUntil: l
      }) : i ? (0, s.jsx)(F.AutomodUserProfileQuarantineChatInputNotice, {
        guild: a
      }) : null
    }
  }
}
var eP = a.memo(function(e) {
  let {
    channel: t,
    guild: n,
    chatInputType: a,
    filterAfterTimestamp: l
  } = e, {
    placeholder: i,
    accessibilityLabel: r
  } = (0, eA.default)(t), o = (0, J.useShouldBlockDMInputForQuarantinedUser)(ec.default.getCurrentUser(), t), [c] = (0, U.useCurrentUserCommunicationDisabled)(null == n ? void 0 : n.id), f = (0, k.useCurrentUserHasAutomodQuarantinedProfile)(null == n ? void 0 : n.id), h = (0, u.useStateFromStores)([ec.default], () => ec.default.getCurrentUser()), C = (0, u.useStateFromStores)([ei.default], () => {
    var e, t, s;
    return null != h && null !== (s = null === (e = ei.default.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eN.EMPTY_STRING_SNOWFLAKE_ID, null == h ? void 0 : h.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== s && s
  }), p = (0, u.useStateFromStores)([K.default], () => K.default.isEnabled()), m = (0, q.default)(t.id), E = (0, B.default)(t.id);
  return (0, s.jsx)(eD, {
    channel: t,
    isEditing: null != (0, u.useStateFromStores)([el.default], () => el.default.getEditingMessageId(t.id)),
    hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
    guild: n,
    keyboardModeEnabled: (0, u.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
    pendingReply: (0, u.useStateFromStores)([$.default], () => $.default.getPendingReply(t.id)),
    chatInputType: a,
    placeholder: i,
    accessibilityLabel: r,
    filterAfterTimestamp: l,
    showQuarantinedUserBanner: o,
    communicationDisabledUntil: c,
    shakeIntensity: m,
    poggermodeEnabled: p,
    isSelectedResourceChannel: E,
    showAutomodUserProfileChatBlocker: f && !C
  })
})