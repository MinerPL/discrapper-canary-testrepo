"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("512722"),
  r = n.n(o),
  d = n("442837"),
  u = n("481060"),
  c = n("239091"),
  f = n("430742"),
  h = n("904245"),
  p = n("13245"),
  g = n("144144"),
  m = n("738619"),
  E = n("744061"),
  S = n("36311"),
  v = n("655687"),
  y = n("823748"),
  O = n("25007"),
  T = n("199649"),
  C = n("1397"),
  N = n("541716"),
  I = n("752305"),
  _ = n("974251"),
  A = n("893718"),
  x = n("957730"),
  R = n("400023"),
  L = n("623292"),
  M = n("807092"),
  D = n("592125"),
  b = n("703558"),
  j = n("731290"),
  P = n("430824"),
  k = n("375954"),
  w = n("944486"),
  V = n("914010"),
  U = n("594174"),
  B = n("556296"),
  F = n("237997"),
  G = n("583883"),
  H = n("278297"),
  W = n("547881"),
  z = n("585483"),
  Y = n("838440"),
  K = n("13140"),
  Z = n("519591"),
  X = n("906037"),
  J = n("786906"),
  q = n("987650"),
  Q = n("981631"),
  $ = n("689938"),
  ee = n("87701");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let en = q.OpacityBounds.TOP;
class ei extends a.Component {
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
      focused: !0
    })
  }
  componentWillUnmount() {
    b.default.removeChangeListener(this.draftDidChange), z.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), z.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
  }
  render() {
    let {
      channel: e,
      placeholder: t,
      ...n
    } = this.props, {
      focused: a,
      textValue: l,
      contentWarningProps: s,
      richValue: o
    } = this.state, d = (0, i.jsx)(u.Popout, {
      position: "top",
      onRequestClose: () => {
        var e;
        null == s || null === (e = s.onCancel) || void 0 === e || e.call(s), this.setState({
          contentWarningProps: null
        })
      },
      shouldShow: null != s,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return r()(null != s, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(E.default, {
          onClose: t,
          ...s
        })
      },
      children: () => (0, i.jsx)(A.default, {
        ...n,
        renderAttachButton: this.renderAttachButton,
        channel: e,
        type: N.ChatInputTypes.OVERLAY,
        onFocus: () => this.setState({
          focused: !0
        }),
        onBlur: () => this.setState({
          focused: !1
        }),
        placeholder: t,
        textValue: l,
        richValue: o,
        onSubmit: this.handleSendMessage,
        onChange: this.handleTextareaChange,
        onKeyDown: this.handleTextareaKeyDown,
        focused: a
      })
    });
    return e.isPrivate() ? (0, i.jsx)(T.default, {
      channel: e,
      children: d
    }, e.id) : (0, i.jsx)(C.default, {
      channel: e,
      children: d
    }, e.id)
  }
  constructor(e) {
    var t;
    super(e), t = this, et(this, "draftDidChange", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        i = b.default.getDraft(e.channel.id, b.DraftType.ChannelMessage);
      n !== i && "" === i && t.setState((0, I.createState)(i))
    }), et(this, "handleTextareaKeyDown", e => {
      if (e.which === Q.KeyboardKeys.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
        e.preventDefault();
        let {
          channel: t
        } = this.props, n = k.default.getLastEditableMessage(t.id);
        null != n && h.default.startEditMessage(t.id, n.id, n.content)
      }
    }), et(this, "handleTextareaChange", (e, t, n) => {
      let {
        channel: {
          id: i
        }
      } = this.props;
      f.default.changeDraft(i, this.state.textValue, b.DraftType.ChannelMessage), "" !== t ? g.default.startTyping(i) : g.default.stopTyping(i), this.setState({
        textValue: t,
        richValue: n
      })
    }), et(this, "handleSendMessage", e => {
      let {
        value: t
      } = e, {
        channel: n,
        pendingReply: i,
        isTemporarilyActive: a
      } = this.props;
      return 0 === t.length ? Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      }) : (0, Y.applyChatRestrictions)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: N.ChatInputTypes.OVERLAY,
        content: t,
        channel: n
      }).then(e => {
        let {
          valid: l,
          failureReason: s
        } = e;
        if (!l) return s === Q.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (z.ComponentDispatch.dispatch(Q.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let o = h.default.getSendMessageOptionsForReply(i);
        return (h.default.sendMessage(n.id, x.default.parse(n, t), !0, o), this.setState((0, I.createEmptyState)()), (0, L.deletePendingReply)(n.id), a) ? (p.default.deactivateAllRegions(), {
          shouldClear: !1,
          shouldRefocus: !1
        }) : {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }), et(this, "focusInput", () => {
      this.setState({
        focused: !0
      })
    }), et(this, "blurInput", () => {
      this.setState({
        focused: !1
      })
    }), et(this, "renderAttachButton", (e, t) => (0, i.jsx)(_.default, {
      className: t,
      channel: this.props.channel,
      draftType: b.DraftType.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: e => this.handleTextareaChange(null, e, (0, I.toRichValue)(e)),
      canOnlyUseTextCommands: e
    })), b.default.addChangeListener(this.draftDidChange);
    let n = b.default.getDraft(e.channel.id, b.DraftType.ChannelMessage);
    this.state = {
      ...(0, I.createState)(n),
      focused: !1,
      contentWarningProps: null
    }, z.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), z.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
  }
}
class ea extends a.PureComponent {
  componentDidUpdate(e) {
    let {
      channel: t,
      activated: n
    } = this.props;
    (0, X.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && p.default.track(Q.AnalyticEvents.OVERLAY_UNLOCKED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }
  componentDidMount() {
    (0, X.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
  }
  getOpacity() {
    let e;
    let {
      locked: t,
      activated: n,
      opacity: i,
      isPreviewingInGame: a
    } = this.props;
    return e = t && !n || a ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : W.DEFAULT_OPACITY
  }
  renderContent() {
    let e;
    let {
      channel: t,
      placeholder: n,
      nsfwAgree: l,
      guild: o,
      locked: r,
      activated: d,
      chatKeybind: u,
      pinned: c,
      isPreviewingInGame: f,
      dragging: h,
      pendingReply: p
    } = this.props;
    if (null == t) return null;
    let g = r || f,
      E = !l && null != t && t.isNSFW(),
      v = !g || d;
    return e = E && null != o ? (0, i.jsx)(S.default, {
      guild: o
    }) : (0, i.jsx)(R.default, {
      channel: t,
      className: ee.messages,
      forceCompact: c,
      showNewMessagesBar: !g,
      scrollerClassName: c ? ee.scroller : void 0,
      showingQuarantineBanner: !1
    }, t.id), (0, i.jsx)(H.MessagesInteractionContext.Provider, {
      value: {
        disableInteractions: c && r && !d,
        disableAnimations: c && g && !d
      },
      children: (0, i.jsxs)(a.Fragment, {
        children: [!r && !f && (0, i.jsx)(O.default, {
          channel: t,
          guild: o
        }), (0, i.jsx)(W.default.Background, {
          opacityOverride: r || f ? null : en,
          children: (0, i.jsx)("div", {
            className: s()(ee.messagesContainer, {
              [ee.isDragging]: h,
              [ee.disableHoverStates]: c && r && !d
            }),
            children: e
          })
        }), E ? null : (0, i.jsx)("div", {
          children: v ? (0, i.jsx)(W.default.Background, {
            opacityOverride: r || f ? null : en,
            children: (0, i.jsxs)("div", {
              className: ee.footerContent,
              children: [(0, i.jsx)(ei, {
                channel: t,
                placeholder: n,
                isTemporarilyActive: d,
                pendingReply: p
              }), (0, i.jsx)("div", {
                className: ee.typingWrapper,
                children: (0, i.jsx)(m.default, {
                  channel: t,
                  className: ee.typing
                })
              })]
            })
          }) : (0, i.jsx)("div", {
            className: ee.activateContainer,
            children: (0, i.jsx)(W.default.Background, {
              opacityOverride: q.OpacityBounds.LOWER,
              children: (0, i.jsx)("div", {
                className: s()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                children: null != t.name && t.name.length > 0 ? $.default.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                  keybind: u,
                  channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                }) : $.default.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                  keybind: u
                })
              })
            })
          })
        })]
      })
    })
  }
  renderWidgetWrapper(e) {
    let {
      locked: t,
      pinned: n,
      activated: a,
      isPreviewingInGame: l,
      opacity: o
    } = this.props, r = Q.OverlayWidgetTypes.UNPINNED;
    a ? r = Q.OverlayWidgetTypes.IN_GAME_ACTIVE : n && t || l ? r = Q.OverlayWidgetTypes.IN_GAME_TEXT : n && (r = Q.OverlayWidgetTypes.PINNED);
    let d = t && !a || l,
      u = n && (d || a),
      c = n && a,
      f = n && d && !a,
      h = (0, Z.default)(o);
    return (0, i.jsx)(W.default, {
      className: s()(h, {
        [ee.widgetWrapper]: !n,
        [ee.widgetWrapperPinned]: n,
        [ee.locked]: f,
        [ee.inGame]: u,
        [ee.inGameActive]: c,
        [ee.pinned]: n,
        "overlay-unlocked": !t
      }),
      type: r,
      opacity: o,
      children: e
    })
  }
  renderContainedWrapper(e) {
    return (0, i.jsx)("div", {
      className: ee.contained,
      children: e
    })
  }
  shouldDisplay() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return null != e.channel
  }
  render() {
    let {
      locked: e,
      channel: t,
      pinned: n,
      isPreviewingInGame: l,
      contained: s
    } = this.props;
    if (null == t || !this.shouldDisplay()) return null;
    let o = (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(J.default, {
        draggableClassName: ee.draggableStartArea,
        className: ee.headerDefault,
        channel: t,
        locked: e,
        pinned: n,
        disableDragIndicator: s,
        isPreviewingInGame: l,
        handlePin: this.handlePin,
        onContextMenu: this.handleContextMenu,
        onMouseDown: this.moveDragStart
      }), this.renderContent(), e || l ? null : (0, i.jsx)("div", {
        className: ee.resizeIcon,
        onMouseDown: this.resizeDragStart
      })]
    });
    return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o)
  }
  constructor(...e) {
    super(...e), et(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      p.default.track(Q.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
        channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
        channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
        widget_type: Q.OverlayWidgets.TEXT
      }), p.default.setPinChat(i)
    }), et(this, "handleContextMenu", e => {
      let {
        channel: t,
        user: a
      } = this.props;
      null != t && null != a && (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, i.jsx)(e, {
          ...n,
          user: a,
          channelSelected: !0,
          channel: t
        })
      })
    }), et(this, "moveDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(G.Operations.MOVE, e.clientX, e.clientY)
    }), et(this, "resizeDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(G.Operations.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
    })
  }
}

function el(e) {
  let {
    contained: t = !1,
    ...n
  } = e, a = (0, d.useStateFromStores)([V.default], () => V.default.getGuildId()), l = (0, d.useStateFromStores)([w.default], () => w.default.getChannelId(a)), s = (0, d.useStateFromStores)([D.default], () => D.default.getChannel(l)), o = (0, d.useStateFromStores)([B.default], () => B.default.getOverlayChatKeybind()), r = null != o ? (0, K.toString)(o.shortcut, !0) : "]", [u, c, f] = (0, d.useStateFromStoresArray)([F.default], () => [F.default.getTextWidgetOpacity(), F.default.getActiveRegions(), !t && F.default.isPreviewingInGame()]), h = (0, d.useStateFromStores)([P.default], () => P.default.getGuild(a)), p = (0, d.useStateFromStores)([j.default], () => null != a && j.default.didAgree(a)), g = null != s && s.isPrivate() ? s.getRecipientId() : null, m = (0, d.useStateFromStores)([M.default], () => null != l ? M.default.getPendingReply(l) : void 0), E = (0, d.useStateFromStores)([U.default], () => null != g ? U.default.getUser(g) : null), {
    placeholder: S
  } = (0, v.default)(s);
  return null != s && null != h && Q.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type) ? (0, i.jsx)(y.default, {}) : (0, i.jsx)(ea, {
    guild: h,
    channel: s,
    user: E,
    opacity: u,
    nsfwAgree: p,
    chatKeybind: r,
    activated: c.has(Q.OverlayActiveRegions.TEXT_WIDGET),
    isPreviewingInGame: f,
    pendingReply: m,
    contained: t,
    placeholder: S,
    widget: Q.OverlayWidgets.TEXT,
    ...n
  })
}