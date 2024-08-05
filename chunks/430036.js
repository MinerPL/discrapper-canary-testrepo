n.d(t, {
  Z: function() {
return ea;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(512722),
  l = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(239091),
  h = n(430742),
  p = n(904245),
  f = n(13245),
  _ = n(144144),
  g = n(738619),
  m = n(744061),
  E = n(36311),
  Z = n(655687),
  I = n(823748),
  S = n(25007),
  C = n(199649),
  v = n(1397),
  x = n(541716),
  T = n(752305),
  N = n(974251),
  O = n(893718),
  A = n(552062),
  y = n(957730),
  R = n(400023),
  M = n(623292),
  b = n(807092),
  L = n(592125),
  P = n(703558),
  D = n(731290),
  w = n(430824),
  j = n(375954),
  k = n(944486),
  V = n(914010),
  B = n(594174),
  U = n(556296),
  z = n(237997),
  G = n(278297),
  W = n(547881),
  Y = n(585483),
  F = n(838440),
  H = n(13140),
  K = n(519591),
  X = n(906037),
  Q = n(786906),
  J = n(987650),
  q = n(981631),
  $ = n(689938),
  ee = n(555065);

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let en = J.wF.TOP;
class ei extends s.Component {
  componentDidUpdate(e) {
e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
  focused: !0
});
  }
  componentWillUnmount() {
P.Z.removeChangeListener(this.draftDidChange), Y.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), Y.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
  }
  render() {
let {
  channel: e,
  placeholder: t,
  ...n
} = this.props, {
  focused: s,
  textValue: a,
  contentWarningProps: o,
  richValue: r
} = this.state, c = (0, i.jsx)(d.Popout, {
  position: 'top',
  onRequestClose: () => {
    var e;
    null == o || null === (e = o.onCancel) || void 0 === e || e.call(o), this.setState({
      contentWarningProps: null
    });
  },
  shouldShow: null != o,
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return l()(null != o, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(m.Z, {
      onClose: t,
      ...o
    });
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
    textValue: a,
    richValue: r,
    onSubmit: this.handleSendMessage,
    onChange: this.handleTextareaChange,
    onKeyDown: this.handleTextareaKeyDown,
    focused: s
  })
});
return e.isPrivate() ? (0, i.jsx)(C.Z, {
  channel: e,
  children: c
}, e.id) : (0, i.jsx)(v.Z, {
  channel: e,
  children: c
}, e.id);
  }
  constructor(e) {
var t;
super(e), t = this, et(this, 'draftDidChange', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
    {
      textValue: n
    } = t.state,
    i = P.Z.getDraft(e.channel.id, P.d.ChannelMessage);
  n !== i && '' === i && t.setState((0, T.eK)(i));
}), et(this, 'handleTextareaKeyDown', e => {
  if (e.which === q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
    e.preventDefault();
    let {
      channel: t
    } = this.props, n = j.Z.getLastEditableMessage(t.id);
    null != n && p.Z.startEditMessage(t.id, n.id, n.content);
  }
}), et(this, 'handleTextareaChange', (e, t, n) => {
  let {
    channel: {
      id: i
    }
  } = this.props;
  h.Z.changeDraft(i, this.state.textValue, P.d.ChannelMessage), '' !== t ? _.Z.startTyping(i) : _.Z.stopTyping(i), this.setState({
    textValue: t,
    richValue: n
  });
}), et(this, 'handleSendMessage', e => {
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
  }) : (0, F.v)({
    openWarningPopout: e => this.setState({
      contentWarningProps: e
    }),
    type: x.I.OVERLAY,
    content: t,
    channel: n
  }).then(e => {
    let {
      valid: a,
      failureReason: o
    } = e;
    if (!a)
      return o === q.zYc.SLOWMODE_COOLDOWN ? (Y.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
        shouldClear: !1,
        shouldRefocus: !0
      }) : {
        shouldClear: !1,
        shouldRefocus: !1
      };
    let r = p.Z.getSendMessageOptionsForReply(i);
    return (p.Z.sendMessage(n.id, y.ZP.parse(n, t), !0, r), this.setState((0, T.H2)()), (0, M.A6)(n.id), s) ? (f.Z.deactivateAllRegions(), {
      shouldClear: !1,
      shouldRefocus: !1
    }) : {
      shouldClear: !0,
      shouldRefocus: !0
    };
  });
}), et(this, 'focusInput', () => {
  this.setState({
    focused: !0
  });
}), et(this, 'blurInput', () => {
  this.setState({
    focused: !1
  });
}), et(this, 'renderAttachButton', (e, t) => (0, i.jsx)(N.Z, {
  className: t,
  channel: this.props.channel,
  draftType: P.d.ChannelMessage,
  editorTextContent: this.state.textValue,
  setValue: e => this.handleTextareaChange(null, e, (0, T.JM)(e)),
  canOnlyUseTextCommands: e
})), P.Z.addChangeListener(this.draftDidChange);
let n = P.Z.getDraft(e.channel.id, P.d.ChannelMessage);
this.state = {
  ...(0, T.eK)(n),
  focused: !1,
  contentWarningProps: null
}, Y.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), Y.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
  }
}
class es extends s.PureComponent {
  componentDidUpdate(e) {
let {
  channel: t,
  activated: n
} = this.props;
if ((0, X.CR)(e, this.props, this.shouldDisplay), null != t)
  n && !e.activated && f.Z.track(q.rMx.OVERLAY_UNLOCKED, {
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.guild_id
  });
  }
  componentDidMount() {
(0, X.m3)(this.props, this.shouldDisplay());
  }
  getOpacity() {
let e;
let {
  locked: t,
  activated: n,
  opacity: i,
  isPreviewingInGame: s
} = this.props;
return e = t && !n || s ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : W.wB;
  }
  renderContent() {
let e;
let {
  channel: t,
  placeholder: n,
  nsfwAgree: a,
  guild: r,
  locked: l,
  activated: c,
  chatKeybind: d,
  pinned: u,
  isPreviewingInGame: h,
  dragging: p,
  pendingReply: f
} = this.props;
if (null == t)
  return null;
let _ = l || h,
  m = !a && null != t && t.isNSFW(),
  Z = !_ || c;
return e = m && null != r ? (0, i.jsx)(E.Z, {
  guild: r
}) : (0, i.jsx)(R.Z, {
  channel: t,
  className: ee.messages,
  forceCompact: u,
  showNewMessagesBar: !_,
  scrollerClassName: u ? ee.scroller : void 0,
  showingQuarantineBanner: !1
}, t.id), (0, i.jsx)(G.G.Provider, {
  value: {
    disableInteractions: u && l && !c,
    disableAnimations: u && _ && !c
  },
  children: (0, i.jsxs)(s.Fragment, {
    children: [
      !l && !h && (0, i.jsx)(S.Z, {
        channel: t,
        guild: r
      }),
      (0, i.jsx)(W.ZP.Background, {
        opacityOverride: l || h ? null : en,
        children: (0, i.jsx)('div', {
          className: o()(ee.messagesContainer, {
            [ee.isDragging]: p,
            [ee.disableHoverStates]: u && l && !c
          }),
          children: e
        })
      }),
      m ? null : (0, i.jsx)('div', {
        children: Z ? (0, i.jsx)(W.ZP.Background, {
          opacityOverride: l || h ? null : en,
          children: (0, i.jsxs)('div', {
            className: ee.footerContent,
            children: [
              (0, i.jsx)(ei, {
                channel: t,
                placeholder: n,
                isTemporarilyActive: c,
                pendingReply: f
              }),
              (0, i.jsx)('div', {
                className: ee.typingWrapper,
                children: (0, i.jsx)(g.Z, {
                  channel: t,
                  className: ee.typing
                })
              })
            ]
          })
        }) : (0, i.jsx)('div', {
          className: ee.activateContainer,
          children: (0, i.jsx)(W.ZP.Background, {
            opacityOverride: J.wF.LOWER,
            children: (0, i.jsx)('div', {
              className: o()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
              children: null != t.name && t.name.length > 0 ? $.Z.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                keybind: d,
                channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
              }) : $.Z.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                keybind: d
              })
            })
          })
        })
      })
    ]
  })
});
  }
  renderWidgetWrapper(e) {
let {
  locked: t,
  pinned: n,
  activated: s,
  isPreviewingInGame: a,
  opacity: r
} = this.props, l = q.t_t.UNPINNED;
s ? l = q.t_t.IN_GAME_ACTIVE : n && t || a ? l = q.t_t.IN_GAME_TEXT : n && (l = q.t_t.PINNED);
let c = t && !s || a,
  d = n && (c || s),
  u = n && s,
  h = n && c && !s,
  p = (0, K.Z)(r);
return (0, i.jsx)(W.ZP, {
  className: o()(p, {
    [ee.widgetWrapper]: !n,
    [ee.widgetWrapperPinned]: n,
    [ee.locked]: h,
    [ee.inGame]: d,
    [ee.inGameActive]: u,
    [ee.pinned]: n,
    'overlay-unlocked': !t
  }),
  type: l,
  opacity: r,
  children: e
});
  }
  renderContainedWrapper(e) {
return (0, i.jsx)('div', {
  className: ee.contained,
  children: e
});
  }
  shouldDisplay() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
return null != e.channel;
  }
  render() {
let {
  locked: e,
  channel: t,
  pinned: n,
  isPreviewingInGame: a,
  contained: o
} = this.props;
if (null == t || !this.shouldDisplay())
  return null;
let r = (0, i.jsxs)(s.Fragment, {
  children: [
    (0, i.jsx)(Q.Z, {
      draggableClassName: ee.draggableStartArea,
      className: ee.headerDefault,
      channel: t,
      locked: e,
      pinned: n,
      disableDragIndicator: o,
      isPreviewingInGame: a,
      handlePin: this.handlePin,
      onContextMenu: this.handleContextMenu,
      onMouseDown: this.moveDragStart
    }),
    this.renderContent(),
    e || a ? null : (0, i.jsx)('div', {
      className: ee.resizeIcon,
      onMouseDown: this.resizeDragStart
    })
  ]
});
return o ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
  }
  constructor(...e) {
super(...e), et(this, 'handlePin', () => {
  var e, t, n;
  let i = !this.props.pinned;
  f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
    pinned: i,
    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
    widget_type: q.Odu.TEXT
  }), f.Z.setPinChat(i);
}), et(this, 'handleContextMenu', e => {
  let {
    channel: t,
    user: s
  } = this.props;
  null != t && null != s && (0, u.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('70474'),
      n.e('56826'),
      n.e('80991')
    ]).then(n.bind(n, 131404));
    return n => (0, i.jsx)(e, {
      ...n,
      user: s,
      channelSelected: !0,
      channel: t
    });
  });
}), et(this, 'moveDragStart', e => {
  let {
    dragStart: t
  } = this.props;
  t(A.B.MOVE, e.clientX, e.clientY);
}), et(this, 'resizeDragStart', e => {
  let {
    dragStart: t
  } = this.props;
  t(A.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
});
  }
}

function ea(e) {
  let {
contained: t = !1,
...n
  } = e, s = (0, c.e7)([V.Z], () => V.Z.getGuildId()), a = (0, c.e7)([k.Z], () => k.Z.getChannelId(s)), o = (0, c.e7)([L.Z], () => L.Z.getChannel(a)), r = (0, c.e7)([U.Z], () => U.Z.getOverlayChatKeybind()), l = null != r ? (0, H.BB)(r.shortcut, !0) : ']', [d, u, h] = (0, c.Wu)([z.Z], () => [
z.Z.getTextWidgetOpacity(),
z.Z.getActiveRegions(),
!t && z.Z.isPreviewingInGame()
  ]), p = (0, c.e7)([w.Z], () => w.Z.getGuild(s)), f = (0, c.e7)([D.Z], () => null != s && D.Z.didAgree(s)), _ = null != o && o.isPrivate() ? o.getRecipientId() : null, g = (0, c.e7)([b.Z], () => null != a ? b.Z.getPendingReply(a) : void 0), m = (0, c.e7)([B.default], () => null != _ ? B.default.getUser(_) : null), {
placeholder: E
  } = (0, Z.Z)(o);
  return null != o && null != p && q.TPd.GUILD_THREADS_ONLY.has(o.type) ? (0, i.jsx)(I.Z, {}) : (0, i.jsx)(es, {
guild: p,
channel: o,
user: m,
opacity: d,
nsfwAgree: f,
chatKeybind: l,
activated: u.has(q.O0n.TEXT_WIDGET),
isPreviewingInGame: h,
pendingReply: g,
contained: t,
placeholder: E,
widget: q.Odu.TEXT,
...n
  });
}