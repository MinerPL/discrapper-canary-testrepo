"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(481060),
  E = n(846027),
  I = n(925549),
  T = n(37234),
  h = n(367907),
  S = n(158631),
  f = n(552740),
  N = n(358221),
  A = n(414910),
  m = n(221888),
  O = n(933557),
  R = n(569545),
  C = n(74299),
  p = n(863908),
  g = n(803647),
  L = n(788983),
  v = n(703656),
  D = n(937995),
  M = n(618158),
  P = n(922745),
  y = n(197016),
  U = n(800965),
  b = n(445062),
  G = n(7188),
  w = n(199902),
  k = n(314897),
  B = n(131951),
  x = n(699516),
  V = n(594174),
  Z = n(248402),
  H = n(33039),
  F = n(451478),
  Y = n(783259),
  j = n(626135),
  W = n(5192),
  K = n(51144),
  z = n(534388),
  q = n(484286),
  X = n(822296),
  Q = n(916771),
  J = n(792517),
  $ = n(560688),
  ee = n(127608),
  et = n(76021),
  en = n(981631),
  ei = n(354459),
  er = n(430975),
  es = n(661781);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class ea extends r.PureComponent {
  get viewProperties() {
    let {
      participantOnScreen: e,
      currentUserId: t,
      channel: n
    } = this.props, i = (0, ei._5)(e), r = null != e && e.type !== ei.fO.ACTIVITY && e.user.id === t;
    return {
      canPopout: i && !r,
      canSettings: i && r,
      canStopStream: i,
      canSeeViewers: i,
      canSeeParticipantName: ((null == e ? void 0 : e.type) === ei.fO.STREAM || (null == e ? void 0 : e.type) === ei.fO.USER) && n.type !== en.d4z.DM,
      canDisconnect: !i,
      isSelf: r
    }
  }
  get streamerPaused() {
    let {
      isMainWindowFocused: e,
      activeSelfStream: t,
      participantOnScreen: n
    } = this.props;
    return null != t && (null == n ? void 0 : n.id) === (0, R.V9)(t) && !e
  }
  get activeStreamForSelectedParticipant() {
    let {
      participantOnScreen: e,
      activeStreams: t
    } = this.props;
    return (0, ei._5)(e) ? t.find(t => (0, R.V9)(t) === e.id) : null
  }
  getScreenMessage() {
    let {
      participantOnScreen: e,
      currentUserId: t
    } = this.props;
    if (!(0, ei._5)(e)) return null;
    let n = this.activeStreamForSelectedParticipant;
    return null == n ? null : (0, p.Z)(n, e.user, e.user.id === t, this.streamerPaused)
  }
  isEmptyBroadcast() {
    var e;
    let {
      isSelfBroadcasting: t,
      channel: n
    } = this.props;
    return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0
  }
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    j.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
      video_layout: "pip",
      ...(0, h.AB)(e.id)
    })
  }
  componentWillUnmount() {
    let {
      channel: e
    } = this.props;
    j.default.track(en.rMx.VIDEO_LAYOUT_TOGGLED, {
      video_layout: N.Z.getLayout(e.id),
      ...(0, h.AB)(e.id)
    })
  }
  renderStreamState() {
    let e = this.activeStreamForSelectedParticipant,
      {
        participantOnScreen: t
      } = this.props;
    if ((null == e ? void 0 : e.state) === en.jm8.ENDED) return (0, i.jsx)(X.Z, {
      stream: e,
      width: ei.f3
    });
    if ((null == e ? void 0 : e.state) === en.jm8.FAILED) return (0, i.jsx)(Q.Z, {
      stream: e,
      width: ei.f3
    });
    if (this.isEmptyBroadcast()) return (0, i.jsx)(z.Z, {});
    else if ((null == t ? void 0 : t.type) === ei.fO.HIDDEN_STREAM) return (0, i.jsx)(J.Z, {
      participant: t,
      width: ei.f3
    });
    return null
  }
  renderParticipantName() {
    let {
      channel: e,
      participantOnScreen: t
    } = this.props;
    if ((null == t ? void 0 : t.type) === ei.fO.STREAM || (null == t ? void 0 : t.type) === ei.fO.USER) {
      var n;
      let r = null !== (n = W.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : K.ZP.getName(t.user);
      return (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "always-white",
        className: er.participantName,
        lineClamp: 1,
        children: r
      })
    }
    return null
  }
  render() {
    let {
      channel: e,
      streamId: t,
      participantOnScreen: n,
      isVideoEnabled: r
    } = this.props, s = (0, O.F6)(e, V.default, x.Z), a = this.isEmptyBroadcast(), l = (null == n ? void 0 : n.id) === k.default.getId() && r, u = this.renderStreamState(), _ = null;
    return (null == n ? void 0 : n.type) !== ei.fO.ACTIVITY && (null != u ? _ = u : ((null == n ? void 0 : n.type) === ei.fO.USER || (null == n ? void 0 : n.type) === ei.fO.STREAM) && (_ = (0, i.jsx)(q.Z, {
      paused: this.streamerPaused,
      streamId: t,
      component: B.Z.getVideoComponent(),
      mirror: l,
      children: (0, i.jsx)(Y.Z, {
        size: c.AvatarSizes.SIZE_80,
        src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
        "aria-label": null == n ? void 0 : n.user.username
      })
    }))), (0, i.jsx)(D.ZP, {
      timeout: 1800,
      children: e => {
        var t;
        return (0, i.jsx)(P.Z, {
          title: s,
          backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
          screenMessage: null == u ? this.getScreenMessage() : null,
          onJumpToChannel: this.handleJumpToChannel,
          renderBottomLeftControls: this.renderBottomLeftControls,
          renderBottomRightControls: this.renderBottomRightControls,
          preventIdleComponent: M.Z,
          width: ei.f3,
          hideControls: a,
          className: o()(a ? er.emptyBroadcast : void 0, es.elevationHigh),
          innerClassName: a ? er.innerEmptyBroadcast : void 0,
          ...e,
          children: _
        })
      }
    })
  }
  constructor(...e) {
    super(...e), eo(this, "state", {
      screensharePopoutOpen: !1
    }), eo(this, "_ref", r.createRef()), eo(this, "handleVideo", e => {
      E.Z.setVideoEnabled(e)
    }), eo(this, "handleEnableVideoWhenUnavailable", () => {
      let {
        isVideoAvailable: e
      } = this.props;
      e ? this.handleVideo(!0) : (0, $.Z)()
    }), eo(this, "handleJumpToChannel", () => {
      var e;
      let {
        channel: t
      } = this.props;
      (0, T.Ou)();
      let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
      I.Z.channelListScrollTo(n, t.id), (0, v.XU)(n, t.id)
    }), eo(this, "handleStartStream", () => {
      let {
        canGoLive: e,
        channel: t
      } = this.props, n = t.getGuildId();
      if (l()(null != n, "Cannot go live in non guild channel"), !e) return (0, ee.Z)();
      (0, et.Z)(n, t.id, en.ZY5.GUILD_CHANNEL)
    }), eo(this, "handleStopStream", () => {
      let {
        participantOnScreen: e,
        isSelfBroadcasting: t
      } = this.props;
      l()((0, ei._5)(e), "cannot stop stream for non streamer"), t ? (0, f.Z)(() => (0, g.Z)(e.stream)) : (0, g.Z)(e.stream)
    }), eo(this, "handleOpenPopout", () => {
      let {
        channel: e
      } = this.props;
      L.hP(e)
    }), eo(this, "renderBottomLeftControls", () => {
      let {
        canSeeParticipantName: e
      } = this.viewProperties;
      return (0, i.jsx)(i.Fragment, {
        children: e ? this.renderParticipantName() : null
      })
    }), eo(this, "renderBottomRightControls", () => {
      let {
        canSettings: e,
        canPopout: t,
        canDisconnect: n,
        canStopStream: r,
        canSeeViewers: s
      } = this.viewProperties;
      return (0, i.jsxs)(i.Fragment, {
        children: [s ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, r ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
      })
    }), eo(this, "renderDisconnectButton", () => {
      let {
        channel: e
      } = this.props;
      return (0, i.jsx)(y.Z, {
        className: er.rightTrayIcon,
        channel: e
      })
    }), eo(this, "renderStopStreamButton", () => {
      let {
        isSelf: e
      } = this.viewProperties;
      return (0, i.jsx)(b.Z, {
        isSelfStream: e,
        className: er.rightTrayIcon,
        onClick: this.handleStopStream
      })
    }), eo(this, "renderViewersIcon", () => {
      let {
        participantOnScreen: e,
        channel: t
      } = this.props;
      return l()((0, ei._5)(e) || (null == e ? void 0 : e.type) === ei.fO.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, i.jsx)(M.Z, {
        children: (0, i.jsx)(m.Z, {
          channelId: t.id,
          guildId: t.getGuildId(),
          className: er.rightTrayIcon,
          participant: e,
          compact: !0
        })
      })
    }), eo(this, "renderPopoutIcon", () => (0, i.jsx)(U.Z, {
      className: er.rightTrayIcon,
      popoutOpen: !1,
      onOpenPopout: this.handleOpenPopout,
      onClosePopout: en.VqG
    })), eo(this, "renderSettingsIcon", () => {
      let {
        participantOnScreen: e,
        activeStreams: t
      } = this.props;
      l()((0, ei._5)(e), "Cannot render settings for non stream participant");
      let n = t.find(t => (0, R.V9)(t) === e.id);
      return null == n || n.state === en.jm8.ENDED ? null : (0, i.jsx)(G.Z, {
        stream: n,
        className: er.rightTrayIcon,
        appContext: en.IlC.APP
      })
    })
  }
}
t.Z = d.ZP.connectStores([B.Z, N.Z, k.default, Z.Z, H.Z, w.Z, F.Z], e => {
  let {
    channel: t
  } = e, n = Z.Z.getSpeaker(t.id), i = N.Z.getParticipant(t.id, n), r = _()(B.Z.getVideoDevices()).values().first(), s = null == r || r.disabled, o = null != i && i.type !== ei.fO.ACTIVITY && i.type !== ei.fO.HIDDEN_STREAM ? H.Z.getStreamId(i.user.id, t.getGuildId(), (0, A.Z)(i.type)) : null, a = !s && B.Z.isVideoEnabled(), l = (0, C.Z)(B.Z), u = k.default.getId(), d = w.Z.getCurrentUserActiveStream(), c = (0, S.tA)(t.id);
  return {
    channel: t,
    streamId: o,
    participantOnScreen: i,
    isVideoAvailable: !1 === s,
    isVideoEnabled: a,
    isSelfBroadcasting: c,
    canGoLive: l,
    currentUserId: u,
    activeStreams: w.Z.getAllActiveStreams(),
    activeSelfStream: d,
    isMainWindowFocused: F.Z.isFocused()
  }
})(ea)