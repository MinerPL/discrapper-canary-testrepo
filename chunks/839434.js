n.d(t, {
  Z: function() {
return ea;
  }
}), n(47120);
var i, s = n(735250),
  a = n(470079),
  o = n(120356),
  r = n.n(o),
  l = n(442837),
  c = n(692547),
  d = n(477690),
  u = n(481060),
  h = n(239091),
  p = n(765250),
  f = n(13245),
  _ = n(872810),
  g = n(586902),
  m = n(835473),
  E = n(933557),
  Z = n(600164),
  I = n(112831),
  S = n(594190),
  C = n(925329),
  v = n(569545),
  x = n(914923),
  T = n(165393),
  N = n(989941),
  O = n(552282),
  A = n(345243),
  y = n(565799),
  R = n(501655),
  M = n(786915),
  b = n(7188),
  L = n(597998),
  P = n(199902),
  D = n(314897),
  w = n(592125),
  j = n(77498),
  k = n(131951),
  V = n(944486),
  B = n(606304),
  U = n(449224),
  z = n(938475),
  G = n(237997),
  W = n(136015),
  Y = n(51144),
  F = n(145597),
  H = n(658785),
  K = n(244073),
  X = n(876205),
  Q = n(906037),
  J = n(518084),
  q = n(981631),
  $ = n(65154),
  ee = n(689938),
  et = n(37223);

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function ei(e) {
  let {
flipped: t = !1,
locked: n = !1,
user: i,
nick: o,
displayNameMode: c,
displayUserMode: d,
size: u = q.ipw.LARGE,
onClick: h,
onContextMenu: p,
context: f,
guildId: _,
voiceState: m
  } = e, {
showKeybindIndicators: E
  } = H.Z.useExperiment({
location: 'overlay_voice_widget'
  }), Z = (0, l.e7)([G.Z], () => G.Z.showKeybindIndicators), I = (0, l.e7)([D.default], () => D.default.getId()), S = (0, l.e7)([k.Z], () => k.Z.isLocalMute(i.id)), C = (0, l.e7)([P.Z], () => P.Z.getCurrentUserActiveStream()), v = (0, l.Wu)([P.Z], () => null != C ? P.Z.getViewerIds(C) : []), x = (0, g.Z)({
userId: i.id,
context: f
  }), T = (0, l.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)), N = (0, l.e7)([P.Z], () => null != P.Z.getStreamForUser(i.id, _)), O = a.useMemo(() => null != C && C.ownerId !== i.id && v.includes(i.id), [
C,
i.id,
v
  ]);
  if (d === q.OYC.ONLY_WHILE_SPEAKING && n && !x)
return null;
  let A = i.id === I,
{
  mute: y,
  selfMute: R,
  suppress: M,
  deaf: b,
  selfDeaf: w
} = m,
j = E && Z,
V = R && (!A || !j);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(L.Z, {
    guildId: _,
    onClick: n ? void 0 : e => null == h ? void 0 : h(e, i),
    onContextMenu: n ? void 0 : e => null == p ? void 0 : p(e, i),
    className: r()(et.voiceUserWrapper, {
      [et.faded]: !x,
      [et.interactive]: !n
    }),
    user: i,
    nick: o,
    speaking: !1,
    flipped: t,
    isStreaming: N,
    iconClassName: r()(et.voiceIcon, {
      [et.locked]: n
    }),
    isWatching: O,
    isOverlay: !0,
    size: u,
    priority: T,
    mute: y || V || S,
    localMute: S,
    serverMute: y || M,
    deaf: b || w,
    serverDeaf: b,
    userNameClassName: r()(et.username, {
      [et.locked]: n,
      [et.hidden]: n && (c === q.wC$.NEVER || !x && c === q.wC$.ONLY_WHILE_SPEAKING)
    })
  }),
  A && j && (0, s.jsx)(X.Z, {
    value: R,
    action: q.kg4.TOGGLE_MUTE,
    shouldShow: !y && !M
  })
]
  });
}
class es extends(i = a.PureComponent) {
  renderVoiceUsers() {
let {
  context: e,
  sortedVoiceStates: t,
  displayNameMode: n,
  displayUserMode: i,
  locked: a,
  isPreviewingInGame: o,
  channel: l,
  anchor: c,
  avatarSizeMode: u
} = this.props, h = null != c.right, p = t.map(t => {
  var r;
  let {
    user: c,
    voiceState: d,
    member: p
  } = t;
  if (null == c || null == l || null == e)
    return null;
  let f = a || o;
  return (0, s.jsx)(ei, {
    guildId: null == l ? void 0 : l.guild_id,
    user: c,
    nick: null !== (r = null == p ? void 0 : p.nick) && void 0 !== r ? r : Y.ZP.getName(c),
    flipped: h,
    voiceState: d,
    displayNameMode: n,
    displayUserMode: i,
    size: u,
    locked: f,
    onContextMenu: this.handleUserContextMenu,
    onClick: this.handleUserContextMenu,
    context: e
  }, c.id);
});
return (0, s.jsx)(J.ZP.Body, {
  className: r()({
    [d.Z.VOICE_WIDGET_TOP_MARGIN]: a,
    [et.bottomMargin]: a
  }),
  children: (0, s.jsx)(L.e, {
    className: et.voiceList,
    children: p
  })
});
  }
  renderHeader() {
let {
  pinned: e,
  title: t,
  isPreviewingInGame: n
} = this.props;
return (0, s.jsxs)(J.ZP.Bar, {
  className: r()(et.draggableStartArea, {
    [et.preview]: n
  }),
  children: [
    (0, s.jsxs)(J.ZP.Content, {
      dynamicSize: !0,
      className: r()(et.content, {
        [et.hidden]: n
      }),
      children: [
        (0, s.jsx)(u.DragIcon, {
          size: 'custom',
          color: c.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: r()(et.icon, et.faded, et.dragIcon)
        }),
        (0, s.jsx)(u.VoiceNormalIcon, {
          size: 'custom',
          color: c.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: r()(et.icon, et.faded, et.speakerIcon)
        }),
        (0, s.jsx)(I.Z, {
          color: c.Z.unsafe_rawColors.PRIMARY_200.css,
          className: et.title,
          children: t
        })
      ]
    }),
    n ? null : (0, s.jsx)(J.ZP.Icon, {
      icon: u.SettingsIcon,
      label: ee.Z.Messages.VOICE_SETTINGS,
      onClick: this.handleOpenVoiceSettings,
      tooltipPosition: 'left',
      size: 18
    }),
    n ? null : (0, s.jsx)(J.ZP.Icon, {
      icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
      label: e ? ee.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : ee.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
      onClick: this.handlePin,
      tooltipPosition: 'left',
      size: 18,
      isActive: e
    })
  ]
});
  }
  renderStreamerSettings() {
var e;
let {
  locked: t,
  pinned: n,
  isPreviewingInGame: i,
  channel: a,
  application: o,
  streamMetadata: l,
  streamApplication: c,
  stream: d
} = this.props;
if (t || null == d || null == a)
  return null;
let {
  sanitizedTitle: h,
  title: p
} = (0, x.Z)(l);
return (0, s.jsx)(J.ZP.Bar, {
  className: r()(et.streamerControls, {
    [et.hidden]: i,
    [et.unpinned]: !n
  }),
  children: (0, s.jsxs)(J.ZP.Content, {
    className: et.streamerContent,
    dynamicSize: !0,
    children: [
      (0, s.jsxs)('div', {
        className: et.streamerInner,
        children: [
          (null == c ? void 0 : c.id) != null && c.id === (null == o ? void 0 : o.id) ? (0, s.jsx)(C.Z, {
            className: et.gameIcon,
            game: o
          }) : (0, s.jsx)(T.Z, {
            title: h
          }),
          (0, s.jsxs)(Z.Z, {
            direction: Z.Z.Direction.VERTICAL,
            justify: Z.Z.Justify.BETWEEN,
            className: et.streamerInfo,
            children: [
              (0, s.jsx)(u.Text, {
                className: et.streaming,
                variant: 'text-sm/normal',
                children: ee.Z.Messages.STATUS_STREAMING
              }),
              (0, s.jsx)(A.Z, {
                children: null !== (e = null == c ? void 0 : c.name) && void 0 !== e ? e : p
              })
            ]
          })
        ]
      }),
      (0, s.jsxs)(Z.Z, {
        grow: 0,
        children: [
          (0, s.jsx)('div', {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(M.Z, {
              stream: d,
              iconClassName: et.streamerIcon,
              appContext: q.IlC.OVERLAY
            })
          }),
          (0, s.jsx)('div', {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(b.Z, {
              stream: d,
              appContext: q.IlC.OVERLAY
            })
          }),
          (0, s.jsx)('div', {
            className: et.streamerIconWrapper,
            children: (0, s.jsx)(u.TooltipContainer, {
              text: ee.Z.Messages.STOP_STREAMING,
              children: (0, s.jsx)(u.Button, {
                onClick: this.handleStopStream,
                look: u.Button.Looks.BLANK,
                size: u.Button.Sizes.NONE,
                children: (0, s.jsx)(u.ScreenXIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: et.streamerIcon
                })
              })
            })
          })
        ]
      })
    ]
  })
});
  }
  componentDidMount() {
(0, Q.m3)(this.props, this.shouldDisplay());
  }
  componentDidUpdate(e) {
(0, Q.CR)(e, this.props, this.shouldDisplay);
  }
  shouldDisplay() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
  {
    context: t,
    locked: n,
    pinned: i,
    sortedVoiceStates: s,
    channel: a
  } = e;
return 0 !== s.length && null != t && null != a && (!n || !!i) && !0;
  }
  render() {
let {
  context: e,
  lobbyId: t,
  locked: n,
  pinned: i,
  isPreviewingInGame: a,
  channel: o
} = this.props;
if (null == o || null == e || !this.shouldDisplay())
  return null;
let l = q.t_t.UNPINNED;
return i && (l = q.t_t.PINNED), a && (l = q.t_t.IN_GAME_PREVIEW), n && (l = q.t_t.IN_GAME), (0, s.jsxs)(J.ZP, {
  type: l,
  width: 280,
  children: [
    n ? null : this.renderHeader(),
    this.renderVoiceUsers(),
    this.renderStreamerSettings(),
    n ? null : (0, s.jsx)(K.Z, {
      className: r()({
        [et.preview]: a
      }),
      contentClassName: r()({
        [et.hidden]: a
      }),
      channel: o,
      lobbyId: t,
      context: e,
      pinned: i
    })
  ]
});
  }
  constructor(...e) {
super(...e), en(this, 'handleUserContextMenu', (e, t) => {
  let {
    context: i
  } = this.props;
  (0, h.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('69220'),
      n.e('740')
    ]).then(n.bind(n, 881351));
    return n => (0, s.jsx)(e, {
      ...n,
      user: t,
      showMediaItems: !0,
      mediaEngineContext: i
    });
  });
}), en(this, 'handleOpenVoiceSettings', () => {
  let {
    context: e,
    channel: t,
    title: i
  } = this.props;
  (0, u.openModalLazy)(async () => {
    let {
      default: a
    } = await n.e('66063').then(n.bind(n, 344516));
    return n => (0, s.jsx)(a, {
      ...n,
      mediaEngineContext: e,
      title: null != t ? null : i
    });
  });
}), en(this, 'handlePin', () => {
  var e, t, n;
  let i = !this.props.pinned;
  f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
    pinned: i,
    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
    widget_type: q.Odu.VOICE
  });
  let {
    id: s
  } = this.props;
  (0, p.xh)(s);
}), en(this, 'handleStopStream', () => {
  let {
    stream: e
  } = this.props;
  if (null != e)
    _.g((0, v.V9)(e));
});
  }
}
en(es, 'defaultProps', {
  context: $.Yn.DEFAULT
});

function ea(e) {
  var t;
  let n = (0, l.e7)([
  V.Z,
  w.Z
], () => w.Z.getChannel(V.Z.getVoiceChannelId())),
i = (0, E.ZP)(n),
o = function() {
  let [e] = (0, l.e7)([
    z.ZP,
    y.Z,
    V.Z,
    w.Z
  ], () => {
    let e = w.Z.getChannel(V.Z.getVoiceChannelId());
    return null == e ? [
      [],
      -1
    ] : e.isGuildStageVoice() ? [
      y.Z.getMutableParticipants(e.id, R.pV.SPEAKER),
      y.Z.getParticipantsVersion(e.id)
    ] : [
      z.ZP.getVoiceStatesForChannel(e),
      z.ZP.getVoiceStateVersion(e.getGuildId())
    ];
  }, [], W.Q), t = (0, l.e7)([D.default], () => D.default.getId()), {
    showKeybindIndicators: n
  } = H.Z.useExperiment({
    location: 'voice_widget'
  });
  return a.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? -1 : n.user.id === t ? 1 : 0) : e, [
    e,
    t,
    n
  ]);
}(),
r = (0, l.e7)([P.Z], () => P.Z.getStreamerActiveStreamMetadata()),
c = (0, l.e7)([
  S.ZP,
  U.Z,
  j.Z
], () => {
  var e;
  let t = (0, N.Z)(S.ZP, U.Z);
  return null != t ? null === (e = j.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id : null;
}),
d = (0, m.q)(c),
u = (0, l.cj)([
  S.ZP,
  U.Z,
  P.Z,
  G.Z
], () => {
  let e = (0, N.Z)(S.ZP, U.Z),
    t = P.Z.getCurrentUserActiveStream();
  return {
    displayUserMode: G.Z.getDisplayUserMode(),
    displayNameMode: G.Z.getDisplayNameMode(),
    avatarSizeMode: G.Z.getAvatarSizeMode(),
    streamApplication: (null == r ? void 0 : r.pid) === (0, F.QF)() ? (0, O.Z)(e) : null,
    stream: t
  };
});
  return (0, s.jsx)(es, {
...u,
application: d,
...e,
sortedVoiceStates: o,
channel: n,
title: null != i ? i : '',
streamMetadata: r,
streamApplication: null !== (t = u.streamApplication) && void 0 !== t ? t : {
  id: null,
  name: null == r ? void 0 : r.sourceName
}
  });
}