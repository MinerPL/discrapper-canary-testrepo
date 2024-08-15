n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  l = n.n(o),
  u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(481060),
  E = n(846027),
  f = n(925549),
  h = n(37234),
  p = n(519938),
  m = n(367907),
  I = n(158631),
  T = n(552740),
  g = n(358221),
  S = n(414910),
  A = n(221888),
  N = n(933557),
  v = n(569545),
  O = n(74299),
  R = n(863908),
  C = n(803647),
  y = n(266910),
  D = n(788983),
  L = n(703656),
  b = n(937995),
  M = n(618158),
  P = n(922745),
  U = n(197016),
  w = n(800965),
  x = n(445062),
  G = n(7188),
  k = n(199902),
  B = n(314897),
  F = n(131951),
  V = n(699516),
  H = n(594174),
  Z = n(248402),
  Y = n(33039),
  j = n(451478),
  W = n(626135),
  K = n(5192),
  z = n(51144),
  q = n(534388),
  Q = n(484286),
  X = n(822296),
  $ = n(916771),
  J = n(792517),
  ee = n(560688),
  et = n(127608),
  en = n(76021),
  er = n(981631),
  ei = n(354459),
  ea = n(821762),
  es = n(256507);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class el extends i.PureComponent {
  get viewProperties() {
let {
  participantOnScreen: e,
  currentUserId: t,
  channel: n
} = this.props, r = (0, ei._5)(e), i = null != e && e.type !== ei.fO.ACTIVITY && e.user.id === t;
return {
  canPopout: r && !i,
  canSettings: r && i,
  canStopStream: r,
  canSeeViewers: r,
  canSeeParticipantName: ((null == e ? void 0 : e.type) === ei.fO.STREAM || (null == e ? void 0 : e.type) === ei.fO.USER) && n.type !== er.d4z.DM,
  canDisconnect: !r,
  isSelf: i
};
  }
  get streamerPaused() {
let {
  isMainWindowFocused: e,
  activeSelfStream: t,
  participantOnScreen: n
} = this.props;
return null != t && (null == n ? void 0 : n.id) === (0, v.V9)(t) && !e;
  }
  get activeStreamForSelectedParticipant() {
let {
  participantOnScreen: e,
  activeStreams: t
} = this.props;
return (0, ei._5)(e) ? t.find(t => (0, v.V9)(t) === e.id) : null;
  }
  getScreenMessage() {
let {
  participantOnScreen: e,
  currentUserId: t
} = this.props;
if (!(0, ei._5)(e))
  return null;
let n = this.activeStreamForSelectedParticipant;
return null == n ? null : (0, R.Z)(n, e.user, e.user.id === t, this.streamerPaused);
  }
  isEmptyBroadcast() {
var e;
let {
  isSelfBroadcasting: t,
  channel: n
} = this.props;
return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0;
  }
  componentDidMount() {
let {
  channel: e
} = this.props;
W.default.track(er.rMx.VIDEO_LAYOUT_TOGGLED, {
  video_layout: 'pip',
  ...(0, m.AB)(e.id)
});
  }
  componentWillUnmount() {
let {
  channel: e
} = this.props;
W.default.track(er.rMx.VIDEO_LAYOUT_TOGGLED, {
  video_layout: g.Z.getLayout(e.id),
  ...(0, m.AB)(e.id)
});
  }
  renderStreamState() {
let e = this.activeStreamForSelectedParticipant,
  {
    participantOnScreen: t,
    width: n
  } = this.props;
if ((null == e ? void 0 : e.state) === er.jm8.ENDED)
  return (0, r.jsx)(X.Z, {
    stream: e,
    width: n
  });
if ((null == e ? void 0 : e.state) === er.jm8.FAILED)
  return (0, r.jsx)($.Z, {
    stream: e,
    width: n
  });
if (this.isEmptyBroadcast())
  return (0, r.jsx)(q.Z, {});
else if ((null == t ? void 0 : t.type) === ei.fO.HIDDEN_STREAM)
  return (0, r.jsx)(J.Z, {
    participant: t,
    width: n
  });
return null;
  }
  renderParticipantName() {
let {
  channel: e,
  participantOnScreen: t
} = this.props;
if ((null == t ? void 0 : t.type) === ei.fO.STREAM || (null == t ? void 0 : t.type) === ei.fO.USER) {
  var n;
  let i = null !== (n = K.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : z.ZP.getName(t.user);
  return (0, r.jsx)(_.Text, {
    variant: 'text-md/normal',
    color: 'always-white',
    className: ea.participantName,
    lineClamp: 1,
    children: i
  });
}
return null;
  }
  render() {
let {
  channel: e,
  streamId: t,
  participantOnScreen: n,
  isVideoEnabled: i,
  width: a
} = this.props, o = (0, N.F6)(e, H.default, V.Z), l = this.isEmptyBroadcast(), u = (null == n ? void 0 : n.id) === B.default.getId() && i, c = this.renderStreamState(), d = null;
return (null == n ? void 0 : n.type) !== ei.fO.ACTIVITY && (null != c ? d = c : ((null == n ? void 0 : n.type) === ei.fO.USER || (null == n ? void 0 : n.type) === ei.fO.STREAM) && (d = (0, r.jsx)(Q.Z, {
  paused: this.streamerPaused,
  streamId: t,
  component: F.Z.getVideoComponent(),
  mirror: u,
  children: (0, r.jsx)(y.Z, {
    size: _.AvatarSizes.SIZE_80,
    src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
    'aria-label': null == n ? void 0 : n.user.username
  })
}))), (0, r.jsx)(b.ZP, {
  timeout: 1800,
  children: e => {
    var t;
    return (0, r.jsx)(P.Z, {
      title: o,
      backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
      screenMessage: null == c ? this.getScreenMessage() : null,
      onJumpToChannel: this.handleJumpToChannel,
      onHide: this.handleHidePIP,
      renderBottomLeftControls: this.renderBottomLeftControls,
      renderBottomRightControls: this.renderBottomRightControls,
      preventIdleComponent: M.Z,
      width: a,
      hideControls: l,
      className: s()(l ? ea.emptyBroadcast : void 0, es.elevationHigh),
      innerClassName: l ? ea.innerEmptyBroadcast : void 0,
      ...e,
      children: d
    });
  }
});
  }
  constructor(...e) {
super(...e), eo(this, 'state', {
  screensharePopoutOpen: !1
}), eo(this, '_ref', i.createRef()), eo(this, 'handleVideo', e => {
  E.Z.setVideoEnabled(e);
}), eo(this, 'handleEnableVideoWhenUnavailable', () => {
  let {
    isVideoAvailable: e
  } = this.props;
  e ? this.handleVideo(!0) : (0, ee.Z)();
}), eo(this, 'handleJumpToChannel', () => {
  var e;
  let {
    channel: t
  } = this.props;
  (0, h.Ou)();
  let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : er.ME;
  f.Z.channelListScrollTo(n, t.id), (0, L.XU)(n, t.id);
}), eo(this, 'handleStartStream', () => {
  let {
    canGoLive: e,
    channel: t
  } = this.props, n = t.getGuildId();
  if (l()(null != n, 'Cannot go live in non guild channel'), !e)
    return (0, et.Z)();
  (0, en.Z)(n, t.id, er.ZY5.GUILD_CHANNEL);
}), eo(this, 'handleStopStream', () => {
  let {
    participantOnScreen: e,
    isSelfBroadcasting: t
  } = this.props;
  l()((0, ei._5)(e), 'cannot stop stream for non streamer'), t ? (0, T.Z)(() => (0, C.Z)(e.stream)) : (0, C.Z)(e.stream);
}), eo(this, 'handleHidePIP', () => {
  let {
    channel: e
  } = this.props;
  p.Cp(e.id);
}), eo(this, 'handleOpenPopout', () => {
  let {
    channel: e
  } = this.props;
  D.hP(e);
}), eo(this, 'renderBottomLeftControls', () => {
  let {
    canSeeParticipantName: e
  } = this.viewProperties;
  return (0, r.jsx)(r.Fragment, {
    children: e ? this.renderParticipantName() : null
  });
}), eo(this, 'renderBottomRightControls', () => {
  let {
    canSettings: e,
    canPopout: t,
    canDisconnect: n,
    canStopStream: i,
    canSeeViewers: a
  } = this.viewProperties;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      a ? this.renderViewersIcon() : null,
      e ? this.renderSettingsIcon() : null,
      t ? this.renderPopoutIcon() : null,
      i ? this.renderStopStreamButton() : null,
      n ? this.renderDisconnectButton() : null
    ]
  });
}), eo(this, 'renderDisconnectButton', () => {
  let {
    channel: e
  } = this.props;
  return (0, r.jsx)(U.Z, {
    className: ea.rightTrayIcon,
    channel: e
  });
}), eo(this, 'renderStopStreamButton', () => {
  let {
    isSelf: e
  } = this.viewProperties;
  return (0, r.jsx)(x.Z, {
    isSelfStream: e,
    className: ea.rightTrayIcon,
    onClick: this.handleStopStream
  });
}), eo(this, 'renderViewersIcon', () => {
  let {
    participantOnScreen: e,
    channel: t
  } = this.props;
  return l()((0, ei._5)(e) || (null == e ? void 0 : e.type) === ei.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)), (0, r.jsx)(M.Z, {
    children: (0, r.jsx)(A.Z, {
      channelId: t.id,
      guildId: t.getGuildId(),
      className: ea.rightTrayIcon,
      participant: e,
      compact: !0
    })
  });
}), eo(this, 'renderPopoutIcon', () => (0, r.jsx)(w.Z, {
  className: ea.rightTrayIcon,
  popoutOpen: !1,
  onOpenPopout: this.handleOpenPopout,
  onClosePopout: er.VqG
})), eo(this, 'renderSettingsIcon', () => {
  let {
    participantOnScreen: e,
    activeStreams: t
  } = this.props;
  l()((0, ei._5)(e), 'Cannot render settings for non stream participant');
  let n = t.find(t => (0, v.V9)(t) === e.id);
  return null == n || n.state === er.jm8.ENDED ? null : (0, r.jsx)(G.Z, {
    stream: n,
    className: ea.rightTrayIcon,
    appContext: er.IlC.APP
  });
});
  }
}
t.Z = d.ZP.connectStores([
  F.Z,
  g.Z,
  B.default,
  Z.Z,
  Y.Z,
  k.Z,
  j.Z
], e => {
  let {
channel: t
  } = e, n = Z.Z.getSpeaker(t.id), r = g.Z.getParticipant(t.id, n), i = c()(F.Z.getVideoDevices()).values().first(), a = null == i || i.disabled, s = null != r && r.type !== ei.fO.ACTIVITY && r.type !== ei.fO.HIDDEN_STREAM ? Y.Z.getStreamId(r.user.id, t.getGuildId(), (0, S.Z)(r.type)) : null, o = !a && F.Z.isVideoEnabled(), l = (0, O.Z)(F.Z), u = B.default.getId(), d = k.Z.getCurrentUserActiveStream(), _ = (0, I.tA)(t.id);
  return {
channel: t,
streamId: s,
participantOnScreen: r,
isVideoAvailable: !1 === a,
isVideoEnabled: o,
isSelfBroadcasting: _,
canGoLive: l,
currentUserId: u,
activeStreams: k.Z.getAllActiveStreams(),
activeSelfStream: d,
isMainWindowFocused: j.Z.isFocused()
  };
})(el);