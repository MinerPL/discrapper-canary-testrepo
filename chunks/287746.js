n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(873546),
  o = n(106351),
  c = n(442837),
  u = n(481060),
  d = n(430742),
  h = n(904245),
  p = n(144144),
  m = n(166459),
  _ = n(966390),
  f = n(738619),
  E = n(410575),
  g = n(744061),
  C = n(857595),
  I = n(607070),
  x = n(367907),
  T = n(541099),
  N = n(845936),
  v = n(555573),
  S = n(213459),
  Z = n(456007),
  A = n(10718),
  M = n(998698),
  b = n(895924),
  R = n(581364),
  j = n(667204),
  L = n(541716),
  P = n(752305),
  O = n(516887),
  y = n(974251),
  D = n(893718),
  k = n(436660),
  U = n(603009),
  w = n(28546),
  B = n(295474),
  H = n(521476),
  G = n(69882),
  V = n(71619),
  F = n(185145),
  W = n(736052),
  z = n(898188),
  Y = n(549006),
  K = n(925975),
  q = n(957730),
  X = n(400023),
  Q = n(64078),
  J = n(351780),
  $ = n(843693),
  ee = n(217871),
  et = n(139577),
  en = n(247944),
  ei = n(623292),
  ea = n(807092),
  es = n(268350),
  el = n(557494),
  er = n(314897),
  eo = n(433355),
  ec = n(703558),
  eu = n(323873),
  ed = n(271383),
  eh = n(375954),
  ep = n(496675),
  em = n(944486),
  e_ = n(117530),
  ef = n(594174),
  eE = n(626135),
  eg = n(459273),
  eC = n(585483),
  eI = n(709054),
  ex = n(838440),
  eT = n(228488),
  eN = n(127654),
  ev = n(979956),
  eS = n(655687),
  eZ = n(165540),
  eA = n(583027),
  eM = n(25007),
  eb = n(199649),
  eR = n(1397),
  ej = n(981631),
  eL = n(689938),
  eP = n(489919);

function eO(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function ey(e) {
  e.preventDefault();
}
let eD = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function ek(e) {
  let {
isSidebar: t,
...n
  } = e;
  return t ? (0, i.jsx)('section', {
...n,
role: 'complementary'
  }) : (0, i.jsx)('main', {
...n
  });
}
class eU extends a.PureComponent {
  componentDidMount() {
ec.Z.addChangeListener(this.draftDidChange);
  }
  componentWillUnmount() {
ec.Z.removeChangeListener(this.draftDidChange);
  }
  componentDidUpdate(e, t) {
let {
  channel: n
} = this.props, {
  textValue: i
} = this.state;
if (e.channel.id !== n.id) {
  this.draftDidChange(this.props);
  return;
}
if (e.hasModalOpen && !this.props.hasModalOpen) {
  let e = ec.Z.getDraft(n.id, ec.d.ChannelMessage);
  e !== i && this.setState((0, P.eK)(e));
}
t.textValue.length < ej.J6R && i.length >= ej.J6R && eE.default.track(ej.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
  }
  handleEditLastMessage(e) {
let {
  channel: t
} = this.props;
h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(ej.rMx.MESSAGE_EDIT_UP_ARROW);
  }
  handleRecallLastCommand(e) {
if (null == e.interactionData)
  return;
let {
  channel: t
} = this.props, {
  commandKey: n,
  interactionOptions: i
} = (0, R.XA)(e.interactionData), {
  command: a,
  application: s
} = A.Xq(t, n);
if (null != a) {
  var l, r;
  let e = null != s ? {
    type: b.Qi.APPLICATION,
    id: s.id,
    icon: null !== (r = null == s ? void 0 : null === (l = s.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : s.icon,
    name: s.name,
    application: s
  } : null;
  v.Po({
    channelId: t.id,
    command: a,
    section: e,
    location: b.Vh.RECALL,
    initialValues: (0, Z.Dw)(a, null != i ? i : [])
  });
}
  }
  render() {
let {
  channel: e,
  focused: t,
  onBlur: n,
  onFocus: a,
  onResize: s,
  highlighted: r,
  pendingReply: o,
  chatInputType: c,
  placeholder: d,
  accessibilityLabel: h,
  shakeIntensity: p,
  poggermodeEnabled: m,
  onCommandSentinelTyped: _
} = this.props, {
  contentWarningProps: f
} = this.state, E = (0, i.jsx)(D.Z, {
  textValue: this.state.textValue,
  richValue: this.state.richValue,
  focused: t,
  className: eP.channelTextArea,
  channel: e,
  placeholder: d,
  accessibilityLabel: h,
  pendingReply: o,
  type: c,
  onChange: this.handleTextareaChange,
  onSubmit: this.handleSendMessage,
  onResize: s,
  onFocus: a,
  onBlur: n,
  onKeyDown: this.handleKeyDown,
  renderAttachButton: this.renderAttachButton,
  renderApplicationCommandIcon: this.renderApplicationCommandIcon,
  promptToUpload: eN.d,
  highlighted: r,
  setEditorRef: e => this.editorRef = e,
  onCommandSentinelTyped: _
});
return (0, i.jsx)(u.Popout, {
  position: 'top',
  onRequestClose: () => {
    var e;
    null == f || null === (e = f.onCancel) || void 0 === e || e.call(f), this.setState({
      contentWarningProps: null
    });
  },
  shouldShow: null != f,
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return l()(null != f, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(g.Z, {
      onClose: t,
      ...f
    });
  },
  children: () => m ? (0, i.jsx)(u.Shaker, {
    isShaking: p > 0,
    intensity: p,
    className: eP.shaker,
    children: E
  }) : E
});
  }
  constructor(...e) {
var t;
super(...e), t = this, eO(this, 'isFirstChange', !0), eO(this, 'editorRef', null), eO(this, 'state', {
  ...(0, P.eK)(ec.Z.getDraft(this.props.channel.id, ec.d.ChannelMessage)),
  contentWarningProps: null
}), eO(this, 'draftDidChange', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
    {
      textValue: n
    } = t.state,
    i = ec.Z.getDraft(e.channel.id, ec.d.ChannelMessage);
  n !== i && ('' === i || '' === n) && t.setState((0, P.eK)(i), () => {
    if (n !== i) {
      let {
        onFocus: e
      } = t.props;
      null == e || e();
    }
  });
}), eO(this, 'handleKeyDown', e => {
  let {
    keyboardModeEnabled: t,
    onKeyDown: n,
    channel: i
  } = this.props, a = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
  switch (e.which) {
    case ej.yXg.DELETE:
    case ej.yXg.BACKSPACE:
      this.handleIncrementCombo('', 1);
      return;
    case ej.yXg.ARROW_UP:
      if (a || s)
        return;
      if (e.preventDefault(), t)
        e_.Z.getUploadCount(i.id, ec.d.ChannelMessage) > 0 ? eC.S.dispatchToLastSubscribed(ej.CkL.FOCUS_ATTACHMENT_AREA) : eC.S.dispatchToLastSubscribed(ej.CkL.FOCUS_MESSAGES, {
          atEnd: !0
        });
      else {
        let {
          channel: e
        } = this.props, t = eh.Z.getLastCommandMessage(e.id), n = eh.Z.getLastEditableMessage(e.id);
        null != t && null != n ? eI.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
      }
      return;
    case ej.yXg.ESCAPE:
      if (a || e.target !== e.currentTarget)
        return;
      if (e.preventDefault(), t) {
        (0, C.rf)();
        return;
      }
      if (e_.Z.getUploadCount(i.id, ec.d.ChannelMessage) > 0) {
        m.Z.clearAll(i.id, ec.d.ChannelMessage);
        return;
      }
  }
  null == n || n(e, s);
}), eO(this, 'handleIncrementCombo', (e, t) => {
  var n;
  if (!this.props.poggermodeEnabled)
    return;
  let i = this.props.channel.id,
    a = er.default.getId(),
    s = $.ZP.getUserCombo(a, i),
    l = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
  (0, Q.SE)({
    channelId: i,
    userId: a,
    value: null != e ? e.length : l,
    multiplier: t
  });
}), eO(this, 'handleTextareaChange', (e, t, n) => {
  let {
    keyboardModeEnabled: i,
    channel: {
      id: a
    }
  } = this.props;
  d.Z.changeDraft(a, t, ec.d.ChannelMessage);
  let s = '' !== t && n !== this.state.richValue,
    l = s && !eD.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
  this.isFirstChange = !1, l && this.state.textValue.length < t.length && this.handleIncrementCombo(), l ? p.Z.startTyping(a) : '' === t && p.Z.stopTyping(a), s && i && (0, C.rf)(), this.setState({
    textValue: t,
    richValue: n
  });
}), eO(this, 'handleSendMessage', async e => {
  let {
    value: t,
    uploads: n,
    stickers: i,
    command: a,
    commandOptionValues: s,
    isGif: l
  } = e;
  if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
    return Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    });
  let {
    guild: r,
    channel: o,
    pendingReply: c,
    chatInputType: u
  } = this.props, d = !1;
  if (null != a) {
    if (a.inputType === b.iw.BUILT_IN_INTEGRATION)
      return eC.S.dispatch(ej.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
    if (M.Z.getCommandOrigin(o.id) === b.bB.APPLICATION_LAUNCHER) {
      var p;
      let {
        location: e,
        sectionName: t
      } = null !== (p = (0, eA._U)(a)) && void 0 !== p ? p : {}, n = T.Z.lastShownEntrypoint();
      if (!await (0, N.L)({
          applicationId: a.applicationId,
          userIndexState: S.ZP.getUserState(),
          guildIndexState: S.ZP.getGuildState(o.guild_id),
          location: e,
          sectionName: t,
          entrypoint: n
        }))
        return Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
      (0, eA.SC)(a);
    }
    let e = await (0, j.Z)({
      command: a,
      optionValues: null != s ? s : {},
      context: {
        guild: r,
        channel: o
      }
    });
    if (a.inputType !== b.iw.BUILT_IN_TEXT)
      return Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !0
      });
    null != e && (t = null != e.content && '' !== e.content ? e.content : t, d = !0 === e.tts);
  }
  return (0, ex.v)({
    openWarningPopout: e => this.setState({
      contentWarningProps: e
    }),
    type: this.props.chatInputType,
    content: t,
    stickers: i,
    uploads: n,
    channel: o
  }).then(e => {
    let {
      valid: a,
      failureReason: s
    } = e;
    if (!a)
      return s === ej.zYc.SLOWMODE_COOLDOWN ? (eC.S.dispatch(ej.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), eC.S.dispatch(ej.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
        shouldClear: !1,
        shouldRefocus: !0
      }) : {
        shouldClear: !1,
        shouldRefocus: !1
      };
    let p = (0, K.g)(t, {
      channel: o,
      isEdit: !1
    });
    null != p && (null != p.content && (t = p.content), null != p.tts && (d = p.tts));
    let f = q.ZP.parse(o, t);
    f.tts = f.tts || d;
    let E = h.Z.getSendMessageOptionsForReply(c);
    if (l)
      return h.Z.sendMessage(o.id, f, void 0, E), (0, ei.A6)(o.id), {
        shouldClear: !1,
        shouldRefocus: !0
      };
    if (null != n && n.length > 0) {
      let e = (0, ev.KZ)(n);
      if ((0, ev.Bf)(e, null == r ? void 0 : r.id))
        return (0, eN.G)(o, e), {
          shouldClear: !1,
          shouldRefocus: !1
        };
      _.Z.uploadFiles({
        channelId: o.id,
        uploads: n,
        draftType: ec.d.ChannelMessage,
        parsedMessage: f,
        options: {
          ...E,
          stickerIds: i
        }
      }), m.Z.clearAll(o.id, ec.d.ChannelMessage);
    } else
      null != i && i.length > 0 ? '' !== t ? h.Z.sendMessage(o.id, f, void 0, {
        ...E,
        stickerIds: i
      }) : h.Z.sendStickers(o.id, i, t, E, f.tts) : h.Z.sendMessage(o.id, f, void 0, E);
    return this.setState((0, P.H2)()), (0, ei.A6)(o.id), (0, es.qB)(o.id, u.drafts.type), {
      shouldClear: !0,
      shouldRefocus: !0
    };
  });
}), eO(this, 'handleSetValue', e => {
  var t, n;
  let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
  null != i && (k.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
}), eO(this, 'renderAttachButton', (e, t) => (0, i.jsx)(y.Z, {
  className: t,
  channel: this.props.channel,
  draftType: ec.d.ChannelMessage,
  editorTextContent: this.state.textValue,
  setValue: this.handleSetValue,
  canOnlyUseTextCommands: e
})), eO(this, 'renderApplicationCommandIcon', (e, t, n) => (0, i.jsx)(O.Z, {
  className: n,
  command: e,
  section: t,
  channel: this.props.channel
}));
  }
}
class ew extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
let {
  channel: n
} = e, {
  currentChannelId: i
} = t;
return n.id !== i ? {
  textAreaFocused: null != n && !r.tq && ep.Z.can(ej.Plq.SEND_MESSAGES, n),
  currentChannelId: n.id
} : null;
  }
  componentDidMount() {
eC.S.subscribe(ej.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
  }
  componentDidUpdate(e) {
(this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
  }
  componentWillUnmount() {
eC.S.unsubscribe(ej.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
  }
  render() {
var e;
let t;
let {
  channel: n,
  guild: a,
  keyboardModeEnabled: s,
  hasModalOpen: l,
  pendingReply: r,
  chatInputType: c,
  placeholder: d,
  accessibilityLabel: h,
  showQuarantinedUserBanner: p,
  filterAfterTimestamp: m,
  communicationDisabledUntil: _,
  shakeIntensity: g,
  poggermodeEnabled: C,
  isSelectedResourceChannel: I,
  showAutomodUserProfileChatBlocker: x
} = this.props, {
  textAreaFocused: T,
  textAreaHighlighted: N
} = this.state, v = c === L.I.SIDEBAR;
t = v && n.type === ej.d4z.GUILD_VOICE ? eL.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : v && n.type === ej.d4z.GUILD_STAGE_VOICE ? eL.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eL.Z.Messages.THREAD_A11Y_LABEL : eL.Z.Messages.CHANNEL_A11Y_LABEL;
let S = (0, i.jsxs)('div', {
  className: eP.channelBottomBarArea,
  children: [
    (0, i.jsx)(el.Z, {
      tutorialId: 'writing-messages',
      position: 'left',
      offsetX: 75,
      children: (0, i.jsx)(eU, {
        focused: T,
        highlighted: N,
        channel: n,
        guild: a,
        keyboardModeEnabled: s,
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
    (0, i.jsx)(eZ.Z, {
      channel: n,
      type: c,
      animateRef: this.appIconAnimateRef
    })
  ]
});
return (0, i.jsx)(E.Z, {
  page: this.getAnalyticsPage(),
  children: (0, i.jsx)(Y.sW, {
    children: (0, i.jsxs)(eg.I3, {
      ref: this.dispatchGroupRef,
      children: [
        (0, i.jsx)(eg.d9, {
          event: ej.CkL.TEXTAREA_FOCUS,
          handler: this.handleInputFocus
        }),
        (0, i.jsx)(eg.d9, {
          event: ej.CkL.TEXTAREA_BLUR,
          handler: this.handleInputBlur
        }),
        (0, i.jsx)(eg.d9, {
          event: ej.CkL.OPEN_EXPRESSION_PICKER,
          handler: this.handleOpenExpressionPicker
        }),
        (0, i.jsxs)(ek, {
          isSidebar: v,
          className: eP.chatContent,
          'aria-label': t.format({
            channelName: n.name
          }),
          onMouseDown: this.handleChatInteract,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleChatInteract,
          children: [
            (0, i.jsx)(eM.Z, {
              channel: n,
              guild: a,
              narrow: v
            }),
            (0, i.jsxs)(u.HeadingLevel, {
              component: (0, i.jsx)(u.HiddenVisually, {
                children: (0, i.jsx)(u.H, {
                  children: eL.Z.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [
                (0, i.jsx)(X.Z, {
                  channel: n,
                  forceCozy: I,
                  filterAfterTimestamp: m,
                  showingQuarantineBanner: p
                }),
                null == n.guild_id || v ? null : (0, i.jsx)(z.Z, {
                  guildId: n.guild_id,
                  channel: n
                }),
                I ? null : null !== (e = this.renderMessageBanner({
                  channel: n,
                  showQuarantinedUserBanner: p,
                  guild: a,
                  communicationDisabledUntil: _,
                  showAutomodUserProfileChatBlocker: x
                })) && void 0 !== e ? e : (0, i.jsxs)('form', {
                  ref: this.inputFormRef,
                  onSubmit: ey,
                  className: eP.form,
                  children: [
                    C && (0, i.jsx)(ee.Z, {
                      channelId: n.id
                    }),
                    n.isPrivate() ? (0, i.jsx)(eb.Z, {
                      channel: n,
                      children: S
                    }) : (0, i.jsx)(eR.Z, {
                      channel: n,
                      children: S
                    }),
                    (0, i.jsx)(f.Z, {
                      channel: n,
                      poggermodeEnabled: C
                    }),
                    !v && (0, i.jsx)(U.Z, {})
                  ]
                }),
                (0, i.jsx)(Y.kw, {})
              ]
            })
          ]
        })
      ]
    })
  })
}, 'messages-'.concat(n.id));
  }
  constructor(...e) {
super(...e), eO(this, 'inputFormRef', a.createRef()), eO(this, 'state', {
  textAreaFocused: !1,
  textAreaHighlighted: !1,
  currentChannelId: this.props.channel.id
}), eO(this, 'dispatchGroupRef', a.createRef()), eO(this, 'appIconAnimateRef', a.createRef()), eO(this, 'handleRequestFocus', e => {
  e.channelId === this.props.channel.id && this.setState({
    textAreaFocused: !0
  });
}), eO(this, 'getAnalyticsPage', () => {
  let {
    channel: e
  } = this.props;
  if (null == e)
    return null;
  switch (e.type) {
    case ej.d4z.GUILD_ANNOUNCEMENT:
    case ej.d4z.GUILD_TEXT:
    case ej.d4z.GUILD_FORUM:
    case ej.d4z.GUILD_MEDIA:
      return E.Z.Pages.GUILD_CHANNEL;
    case ej.d4z.GROUP_DM:
    case ej.d4z.DM:
      return E.Z.Pages.DM_CHANNEL;
    default:
      return null;
  }
}), eO(this, 'handleInputFocus', e => {
  var t;
  if (null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eT.rB)())
    (null == e ? void 0 : e.highlight) != null ? this.setState({
      textAreaFocused: !0,
      textAreaHighlighted: null == e ? void 0 : e.highlight
    }) : this.setState({
      textAreaFocused: !0
    });
}), eO(this, 'handleInputBlur', () => {
  (document.hasFocus() || this.props.hasModalOpen) && this.setState({
    textAreaFocused: !1,
    textAreaHighlighted: !1
  });
}), eO(this, 'handleInputKeyDown', (e, t) => {
  this.state.textAreaHighlighted && this.setState({
    textAreaHighlighted: !1
  }), !t && this._handleMoveToPane(e);
}), eO(this, 'handleKeyDown', e => {
  var t;
  if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target))
    this._handleMoveToPane(e);
}), eO(this, '_handleMoveToPane', e => {
  let {
    keyboardModeEnabled: t,
    chatInputType: n,
    channel: i
  } = this.props;
  if (!!t)
    switch (e.which) {
      case ej.yXg.ARROW_LEFT:
        n === L.I.SIDEBAR && eC.S.dispatch(ej.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: em.Z.getChannelId()
        });
        return;
      case ej.yXg.ARROW_RIGHT:
        n === L.I.NORMAL && eC.S.dispatch(ej.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: eo.ZP.getCurrentSidebarChannelId(i.id)
        });
    }
}), eO(this, 'handleOpenExpressionPicker', e => {
  let {
    activeView: t
  } = e;
  (0, w.PG)(t, this.props.chatInputType);
}), eO(this, 'handleChatInteract', () => {
  var e;
  null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
}), eO(this, 'handleCommandSentinelTyped', () => {
  var e;
  null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
}), eO(this, 'renderMessageBanner', e => {
  let {
    channel: t,
    showQuarantinedUserBanner: n,
    guild: a,
    communicationDisabledUntil: s,
    showAutomodUserProfileChatBlocker: l
  } = e;
  return t.type === ej.d4z.DM && n ? (0, i.jsx)(en.Z, {}) : null != s && (0, G.J)(s) && null != a && !ep.Z.can(ej.Plq.ADMINISTRATOR, a) ? (0, i.jsx)(F.T, {
    guild: a,
    disabledUntil: s
  }) : l ? (0, i.jsx)(H.h, {
    guild: a
  }) : null;
});
  }
}
t.Z = a.memo(function(e) {
  let {
channel: t,
guild: n,
chatInputType: a,
filterAfterTimestamp: s
  } = e, {
placeholder: l,
accessibilityLabel: r
  } = (0, eS.Z)(t), o = (0, en.S)(ef.default.getCurrentUser(), t), [d] = (0, V.AB)(null == n ? void 0 : n.id), h = (0, B.Ux)(null == n ? void 0 : n.id), p = (0, c.e7)([ef.default], () => ef.default.getCurrentUser()), m = (0, c.e7)([ed.ZP], () => {
var e, t, i;
return null != p && null !== (i = null === (e = ed.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ej.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
  }), _ = (0, c.e7)([J.Z], () => J.Z.isEnabled()), f = (0, et.Z)(t.id), E = (0, W.Z)(t.id);
  return (0, i.jsx)(ew, {
channel: t,
isEditing: null != (0, c.e7)([eu.Z], () => eu.Z.getEditingMessageId(t.id)),
hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
guild: n,
keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
pendingReply: (0, c.e7)([ea.Z], () => ea.Z.getPendingReply(t.id)),
chatInputType: a,
placeholder: l,
accessibilityLabel: r,
filterAfterTimestamp: s,
showQuarantinedUserBanner: o,
communicationDisabledUntil: d,
shakeIntensity: f,
poggermodeEnabled: _,
isSelectedResourceChannel: E,
showAutomodUserProfileChatBlocker: h && !m
  });
});