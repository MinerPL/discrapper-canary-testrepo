"use strict";
n.d(t, {
  Z: function() {
    return el
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(512722),
  r = n.n(o),
  d = n(442837),
  c = n(481060),
  u = n(239091),
  h = n(430742),
  p = n(904245),
  f = n(13245),
  E = n(144144),
  Z = n(738619),
  g = n(744061),
  m = n(36311),
  _ = n(655687),
  I = n(823748),
  S = n(25007),
  v = n(199649),
  C = n(1397),
  x = n(541716),
  N = n(752305),
  T = n(974251),
  O = n(893718),
  A = n(957730),
  y = n(400023),
  R = n(623292),
  M = n(807092),
  L = n(592125),
  D = n(703558),
  P = n(731290),
  j = n(430824),
  b = n(375954),
  w = n(944486),
  k = n(914010),
  V = n(594174),
  U = n(556296),
  B = n(237997),
  G = n(583883),
  H = n(278297),
  z = n(547881),
  Y = n(585483),
  W = n(838440),
  F = n(13140),
  K = n(519591),
  X = n(906037),
  Q = n(786906),
  J = n(987650),
  q = n(981631),
  $ = n(689938),
  ee = n(940594);

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let en = J.wF.TOP;
class ei extends s.Component {
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
      focused: !0
    })
  }
  componentWillUnmount() {
    D.Z.removeChangeListener(this.draftDidChange), Y.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), Y.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput)
  }
  render() {
    let {
      channel: e,
      placeholder: t,
      ...n
    } = this.props, {
      focused: s,
      textValue: l,
      contentWarningProps: a,
      richValue: o
    } = this.state, d = (0, i.jsx)(c.Popout, {
      position: "top",
      onRequestClose: () => {
        var e;
        null == a || null === (e = a.onCancel) || void 0 === e || e.call(a), this.setState({
          contentWarningProps: null
        })
      },
      shouldShow: null != a,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return r()(null != a, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(g.Z, {
          onClose: t,
          ...a
        })
      },
      children: () => (0, i.jsx)(O.Z, {
        ...n,
        renderAttachButton: this.renderAttachButton,
        channel: e,
        type: x.I.OVERLAY,
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
        focused: s
      })
    });
    return e.isPrivate() ? (0, i.jsx)(v.Z, {
      channel: e,
      children: d
    }, e.id) : (0, i.jsx)(C.Z, {
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
        i = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
      n !== i && "" === i && t.setState((0, N.eK)(i))
    }), et(this, "handleTextareaKeyDown", e => {
      if (e.which === q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
        e.preventDefault();
        let {
          channel: t
        } = this.props, n = b.Z.getLastEditableMessage(t.id);
        null != n && p.Z.startEditMessage(t.id, n.id, n.content)
      }
    }), et(this, "handleTextareaChange", (e, t, n) => {
      let {
        channel: {
          id: i
        }
      } = this.props;
      h.Z.changeDraft(i, this.state.textValue, D.d.ChannelMessage), "" !== t ? E.Z.startTyping(i) : E.Z.stopTyping(i), this.setState({
        textValue: t,
        richValue: n
      })
    }), et(this, "handleSendMessage", e => {
      let {
        value: t
      } = e, {
        channel: n,
        pendingReply: i,
        isTemporarilyActive: s
      } = this.props;
      return 0 === t.length ? Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      }) : (0, W.v)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: x.I.OVERLAY,
        content: t,
        channel: n
      }).then(e => {
        let {
          valid: l,
          failureReason: a
        } = e;
        if (!l) return a === q.zYc.SLOWMODE_COOLDOWN ? (Y.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let o = p.Z.getSendMessageOptionsForReply(i);
        return (p.Z.sendMessage(n.id, A.ZP.parse(n, t), !0, o), this.setState((0, N.H2)()), (0, R.A6)(n.id), s) ? (f.Z.deactivateAllRegions(), {
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
    }), et(this, "renderAttachButton", (e, t) => (0, i.jsx)(T.Z, {
      className: t,
      channel: this.props.channel,
      draftType: D.d.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: e => this.handleTextareaChange(null, e, (0, N.JM)(e)),
      canOnlyUseTextCommands: e
    })), D.Z.addChangeListener(this.draftDidChange);
    let n = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
    this.state = {
      ...(0, N.eK)(n),
      focused: !1,
      contentWarningProps: null
    }, Y.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), Y.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput)
  }
}
class es extends s.PureComponent {
  componentDidUpdate(e) {
    let {
      channel: t,
      activated: n
    } = this.props;
    if ((0, X.CR)(e, this.props, this.shouldDisplay), null != t) n && !e.activated && f.Z.track(q.rMx.OVERLAY_UNLOCKED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }
  componentDidMount() {
    (0, X.m3)(this.props, this.shouldDisplay())
  }
  getOpacity() {
    let e;
    let {
      locked: t,
      activated: n,
      opacity: i,
      isPreviewingInGame: s
    } = this.props;
    return e = t && !n || s ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : z.wB
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
      chatKeybind: c,
      pinned: u,
      isPreviewingInGame: h,
      dragging: p,
      pendingReply: f
    } = this.props;
    if (null == t) return null;
    let E = r || h,
      g = !l && null != t && t.isNSFW(),
      _ = !E || d;
    return e = g && null != o ? (0, i.jsx)(m.Z, {
      guild: o
    }) : (0, i.jsx)(y.Z, {
      channel: t,
      className: ee.messages,
      forceCompact: u,
      showNewMessagesBar: !E,
      scrollerClassName: u ? ee.scroller : void 0,
      showingQuarantineBanner: !1
    }, t.id), (0, i.jsx)(H.G.Provider, {
      value: {
        disableInteractions: u && r && !d,
        disableAnimations: u && E && !d
      },
      children: (0, i.jsxs)(s.Fragment, {
        children: [!r && !h && (0, i.jsx)(S.Z, {
          channel: t,
          guild: o
        }), (0, i.jsx)(z.ZP.Background, {
          opacityOverride: r || h ? null : en,
          children: (0, i.jsx)("div", {
            className: a()(ee.messagesContainer, {
              [ee.isDragging]: p,
              [ee.disableHoverStates]: u && r && !d
            }),
            children: e
          })
        }), g ? null : (0, i.jsx)("div", {
          children: _ ? (0, i.jsx)(z.ZP.Background, {
            opacityOverride: r || h ? null : en,
            children: (0, i.jsxs)("div", {
              className: ee.footerContent,
              children: [(0, i.jsx)(ei, {
                channel: t,
                placeholder: n,
                isTemporarilyActive: d,
                pendingReply: f
              }), (0, i.jsx)("div", {
                className: ee.typingWrapper,
                children: (0, i.jsx)(Z.Z, {
                  channel: t,
                  className: ee.typing
                })
              })]
            })
          }) : (0, i.jsx)("div", {
            className: ee.activateContainer,
            children: (0, i.jsx)(z.ZP.Background, {
              opacityOverride: J.wF.LOWER,
              children: (0, i.jsx)("div", {
                className: a()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                children: null != t.name && t.name.length > 0 ? $.Z.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                  keybind: c,
                  channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                }) : $.Z.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                  keybind: c
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
      activated: s,
      isPreviewingInGame: l,
      opacity: o
    } = this.props, r = q.t_t.UNPINNED;
    s ? r = q.t_t.IN_GAME_ACTIVE : n && t || l ? r = q.t_t.IN_GAME_TEXT : n && (r = q.t_t.PINNED);
    let d = t && !s || l,
      c = n && (d || s),
      u = n && s,
      h = n && d && !s,
      p = (0, K.Z)(o);
    return (0, i.jsx)(z.ZP, {
      className: a()(p, {
        [ee.widgetWrapper]: !n,
        [ee.widgetWrapperPinned]: n,
        [ee.locked]: h,
        [ee.inGame]: c,
        [ee.inGameActive]: u,
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
      contained: a
    } = this.props;
    if (null == t || !this.shouldDisplay()) return null;
    let o = (0, i.jsxs)(s.Fragment, {
      children: [(0, i.jsx)(Q.Z, {
        draggableClassName: ee.draggableStartArea,
        className: ee.headerDefault,
        channel: t,
        locked: e,
        pinned: n,
        disableDragIndicator: a,
        isPreviewingInGame: l,
        handlePin: this.handlePin,
        onContextMenu: this.handleContextMenu,
        onMouseDown: this.moveDragStart
      }), this.renderContent(), e || l ? null : (0, i.jsx)("div", {
        className: ee.resizeIcon,
        onMouseDown: this.resizeDragStart
      })]
    });
    return a ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o)
  }
  constructor(...e) {
    super(...e), et(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
        channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
        channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
        widget_type: q.Odu.TEXT
      }), f.Z.setPinChat(i)
    }), et(this, "handleContextMenu", e => {
      let {
        channel: t,
        user: s
      } = this.props;
      null != t && null != s && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("56826")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, {
          ...n,
          user: s,
          channelSelected: !0,
          channel: t
        })
      })
    }), et(this, "moveDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(G.B.MOVE, e.clientX, e.clientY)
    }), et(this, "resizeDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(G.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
    })
  }
}

function el(e) {
  let {
    contained: t = !1,
    ...n
  } = e, s = (0, d.e7)([k.Z], () => k.Z.getGuildId()), l = (0, d.e7)([w.Z], () => w.Z.getChannelId(s)), a = (0, d.e7)([L.Z], () => L.Z.getChannel(l)), o = (0, d.e7)([U.Z], () => U.Z.getOverlayChatKeybind()), r = null != o ? (0, F.BB)(o.shortcut, !0) : "]", [c, u, h] = (0, d.Wu)([B.Z], () => [B.Z.getTextWidgetOpacity(), B.Z.getActiveRegions(), !t && B.Z.isPreviewingInGame()]), p = (0, d.e7)([j.Z], () => j.Z.getGuild(s)), f = (0, d.e7)([P.Z], () => null != s && P.Z.didAgree(s)), E = null != a && a.isPrivate() ? a.getRecipientId() : null, Z = (0, d.e7)([M.Z], () => null != l ? M.Z.getPendingReply(l) : void 0), g = (0, d.e7)([V.default], () => null != E ? V.default.getUser(E) : null), {
    placeholder: m
  } = (0, _.Z)(a);
  return null != a && null != p && q.TPd.GUILD_THREADS_ONLY.has(a.type) ? (0, i.jsx)(I.Z, {}) : (0, i.jsx)(es, {
    guild: p,
    channel: a,
    user: g,
    opacity: c,
    nsfwAgree: f,
    chatKeybind: r,
    activated: u.has(q.O0n.TEXT_WIDGET),
    isPreviewingInGame: h,
    pendingReply: Z,
    contained: t,
    placeholder: m,
    widget: q.Odu.TEXT,
    ...n
  })
}