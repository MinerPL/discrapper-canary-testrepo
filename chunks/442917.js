n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(512722),
  l = n.n(s),
  u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(481060),
  E = n(846027),
  f = n(925549),
  h = n(37234),
  p = n(367907),
  m = n(158631),
  I = n(552740),
  T = n(358221),
  g = n(414910),
  S = n(221888),
  A = n(933557),
  N = n(569545),
  v = n(74299),
  O = n(863908),
  R = n(803647),
  C = n(788983),
  y = n(703656),
  D = n(937995),
  L = n(618158),
  b = n(922745),
  M = n(197016),
  P = n(800965),
  U = n(445062),
  w = n(7188),
  x = n(199902),
  G = n(314897),
  k = n(131951),
  B = n(699516),
  F = n(594174),
  V = n(248402),
  H = n(33039),
  Z = n(451478),
  Y = n(783259),
  j = n(626135),
  W = n(5192),
  K = n(51144),
  z = n(534388),
  q = n(484286),
  Q = n(822296),
  X = n(916771),
  $ = n(792517),
  J = n(560688),
  ee = n(127608),
  et = n(76021),
  en = n(981631),
  er = n(354459),
  ei = n(446953),
  ea = n(759823);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class es extends i.PureComponent {
  get viewProperties() {
let {
  participantOnScreen: e,
  currentUserId: t,
  channel: n
} = this.props, r = (0, er._5)(e), i = null != e && e.type !== er.fO.ACTIVITY && e.user.id === t;
return {
  canPopout: r && !i,
  canSettings: r && i,
  canStopStream: r,
  canSeeViewers: r,
  canSeeParticipantName: ((null == e ? void 0 : e.type) === er.fO.STREAM || (null == e ? void 0 : e.type) === er.fO.USER) && n.type !== en.d4z.DM,
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
return null != t && (null == n ? void 0 : n.id) === (0, N.V9)(t) && !e;
  }
  get activeStreamForSelectedParticipant() {
let {
  participantOnScreen: e,
  activeStreams: t
} = this.props;
return (0, er._5)(e) ? t.find(t => (0, N.V9)(t) === e.id) : null;
  }
  getScreenMessage() {
let {
  participantOnScreen: e,
  currentUserId: t
} = this.props;
if (!(0, er._5)(e))
  return null;
let n = this.activeStreamForSelectedParticipant;
return null == n ? null : (0, O.Z)(n, e.user, e.user.id === t, this.streamerPaused);
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
j.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
  video_layout: 'pip',
  ...(0, p.AB)(e.id)
});
  }
  componentWillUnmount() {
let {
  channel: e
} = this.props;
j.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
  video_layout: T.Z.getLayout(e.id),
  ...(0, p.AB)(e.id)
});
  }
  renderStreamState() {
let e = this.activeStreamForSelectedParticipant,
  {
    participantOnScreen: t
  } = this.props;
if ((null == e ? void 0 : e.state) === en.jm8.ENDED)
  return (0, r.jsx)(Q.Z, {
    stream: e,
    width: er.f3
  });
if ((null == e ? void 0 : e.state) === en.jm8.FAILED)
  return (0, r.jsx)(X.Z, {
    stream: e,
    width: er.f3
  });
if (this.isEmptyBroadcast())
  return (0, r.jsx)(z.Z, {});
else if ((null == t ? void 0 : t.type) === er.fO.HIDDEN_STREAM)
  return (0, r.jsx)($.Z, {
    participant: t,
    width: er.f3
  });
return null;
  }
  renderParticipantName() {
let {
  channel: e,
  participantOnScreen: t
} = this.props;
if ((null == t ? void 0 : t.type) === er.fO.STREAM || (null == t ? void 0 : t.type) === er.fO.USER) {
  var n;
  let i = null !== (n = W.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : K.ZP.getName(t.user);
  return (0, r.jsx)(_.Text, {
    variant: 'text-md/normal',
    color: 'always-white',
    className: ei.participantName,
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
  isVideoEnabled: i
} = this.props, a = (0, A.F6)(e, F.default, B.Z), s = this.isEmptyBroadcast(), l = (null == n ? void 0 : n.id) === G.default.getId() && i, u = this.renderStreamState(), c = null;
return (null == n ? void 0 : n.type) !== er.fO.ACTIVITY && (null != u ? c = u : ((null == n ? void 0 : n.type) === er.fO.USER || (null == n ? void 0 : n.type) === er.fO.STREAM) && (c = (0, r.jsx)(q.Z, {
  paused: this.streamerPaused,
  streamId: t,
  component: k.Z.getVideoComponent(),
  mirror: l,
  children: (0, r.jsx)(Y.Z, {
    size: _.AvatarSizes.SIZE_80,
    src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
    'aria-label': null == n ? void 0 : n.user.username
  })
}))), (0, r.jsx)(D.ZP, {
  timeout: 1800,
  children: e => {
    var t;
    return (0, r.jsx)(b.Z, {
      title: a,
      backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
      screenMessage: null == u ? this.getScreenMessage() : null,
      onJumpToChannel: this.handleJumpToChannel,
      renderBottomLeftControls: this.renderBottomLeftControls,
      renderBottomRightControls: this.renderBottomRightControls,
      preventIdleComponent: L.Z,
      width: er.f3,
      hideControls: s,
      className: o()(s ? ei.emptyBroadcast : void 0, ea.elevationHigh),
      innerClassName: s ? ei.innerEmptyBroadcast : void 0,
      ...e,
      children: c
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
  e ? this.handleVideo(!0) : (0, J.Z)();
}), eo(this, 'handleJumpToChannel', () => {
  var e;
  let {
    channel: t
  } = this.props;
  (0, h.Ou)();
  let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
  f.Z.channelListScrollTo(n, t.id), (0, y.XU)(n, t.id);
}), eo(this, 'handleStartStream', () => {
  let {
    canGoLive: e,
    channel: t
  } = this.props, n = t.getGuildId();
  if (l()(null != n, 'Cannot go live in non guild channel'), !e)
    return (0, ee.Z)();
  (0, et.Z)(n, t.id, en.ZY5.GUILD_CHANNEL);
}), eo(this, 'handleStopStream', () => {
  let {
    participantOnScreen: e,
    isSelfBroadcasting: t
  } = this.props;
  l()((0, er._5)(e), 'cannot stop stream for non streamer'), t ? (0, I.Z)(() => (0, R.Z)(e.stream)) : (0, R.Z)(e.stream);
}), eo(this, 'handleOpenPopout', () => {
  let {
    channel: e
  } = this.props;
  C.hP(e);
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
  return (0, r.jsx)(M.Z, {
    className: ei.rightTrayIcon,
    channel: e
  });
}), eo(this, 'renderStopStreamButton', () => {
  let {
    isSelf: e
  } = this.viewProperties;
  return (0, r.jsx)(U.Z, {
    isSelfStream: e,
    className: ei.rightTrayIcon,
    onClick: this.handleStopStream
  });
}), eo(this, 'renderViewersIcon', () => {
  let {
    participantOnScreen: e,
    channel: t
  } = this.props;
  return l()((0, er._5)(e) || (null == e ? void 0 : e.type) === er.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)), (0, r.jsx)(L.Z, {
    children: (0, r.jsx)(S.Z, {
      channelId: t.id,
      guildId: t.getGuildId(),
      className: ei.rightTrayIcon,
      participant: e,
      compact: !0
    })
  });
}), eo(this, 'renderPopoutIcon', () => (0, r.jsx)(P.Z, {
  className: ei.rightTrayIcon,
  popoutOpen: !1,
  onOpenPopout: this.handleOpenPopout,
  onClosePopout: en.VqG
})), eo(this, 'renderSettingsIcon', () => {
  let {
    participantOnScreen: e,
    activeStreams: t
  } = this.props;
  l()((0, er._5)(e), 'Cannot render settings for non stream participant');
  let n = t.find(t => (0, N.V9)(t) === e.id);
  return null == n || n.state === en.jm8.ENDED ? null : (0, r.jsx)(w.Z, {
    stream: n,
    className: ei.rightTrayIcon,
    appContext: en.IlC.APP
  });
});
  }
}
t.Z = d.ZP.connectStores([
  k.Z,
  T.Z,
  G.default,
  V.Z,
  H.Z,
  x.Z,
  Z.Z
], e => {
  let {
channel: t
  } = e, n = V.Z.getSpeaker(t.id), r = T.Z.getParticipant(t.id, n), i = c()(k.Z.getVideoDevices()).values().first(), a = null == i || i.disabled, o = null != r && r.type !== er.fO.ACTIVITY && r.type !== er.fO.HIDDEN_STREAM ? H.Z.getStreamId(r.user.id, t.getGuildId(), (0, g.Z)(r.type)) : null, s = !a && k.Z.isVideoEnabled(), l = (0, v.Z)(k.Z), u = G.default.getId(), d = x.Z.getCurrentUserActiveStream(), _ = (0, m.tA)(t.id);
  return {
channel: t,
streamId: o,
participantOnScreen: r,
isVideoAvailable: !1 === a,
isVideoEnabled: s,
isSelfBroadcasting: _,
canGoLive: l,
currentUserId: u,
activeStreams: x.Z.getAllActiveStreams(),
activeSelfStream: d,
isMainWindowFocused: Z.Z.isFocused()
  };
})(es);