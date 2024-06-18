"use strict";
n.d(t, {
  Z: function() {
    return eu
  }
}), n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(442837),
  d = n(692547),
  c = n(477690),
  u = n(481060),
  h = n(239091),
  p = n(765250),
  f = n(13245),
  E = n(872810),
  Z = n(586902),
  g = n(835473),
  m = n(933557),
  _ = n(594190),
  I = n(569545),
  S = n(914923),
  v = n(165393),
  C = n(989941),
  x = n(552282),
  N = n(565799),
  T = n(501655),
  O = n(786915),
  A = n(7188),
  y = n(199902),
  R = n(314897),
  M = n(592125),
  L = n(77498),
  D = n(131951),
  P = n(944486),
  j = n(606304),
  b = n(449224),
  w = n(938475),
  k = n(237997),
  V = n(285952),
  U = n(366695),
  B = n(548343),
  G = n(937482),
  H = n(823779),
  z = n(632184),
  Y = n(990138),
  W = n(118717),
  F = n(154921),
  K = n(547881),
  X = n(333454),
  Q = n(805009),
  J = n(136015),
  q = n(51144),
  $ = n(145597),
  ee = n(658785),
  et = n(244073),
  en = n(876205),
  ei = n(906037),
  es = n(981631),
  el = n(65154),
  ea = n(689938),
  eo = n(688533);

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ed(e) {
  let {
    flipped: t = !1,
    locked: n = !1,
    user: i,
    nick: a,
    displayNameMode: d,
    displayUserMode: c,
    size: u = es.ipw.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: E,
    voiceState: g
  } = e, {
    showKeybindIndicators: m
  } = ee.Z.useExperiment({
    location: "overlay_voice_widget"
  }), _ = (0, r.e7)([k.Z], () => k.Z.showKeybindIndicators), I = (0, r.e7)([R.default], () => R.default.getId()), S = (0, r.e7)([D.Z], () => D.Z.isLocalMute(i.id)), v = (0, r.e7)([y.Z], () => y.Z.getCurrentUserActiveStream()), C = (0, r.Wu)([y.Z], () => null != v ? y.Z.getViewerIds(v) : []), x = (0, Z.Z)({
    userId: i.id,
    context: f
  }), N = (0, r.e7)([j.Z], () => j.Z.isPrioritySpeaker(i.id, f)), T = (0, r.e7)([y.Z], () => null != y.Z.getStreamForUser(i.id, E)), O = l.useMemo(() => null != v && v.ownerId !== i.id && C.includes(i.id), [v, i.id, C]);
  if (c === es.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
  let A = i.id === I,
    {
      mute: M,
      selfMute: L,
      suppress: P,
      deaf: b,
      selfDeaf: w
    } = g,
    V = m && _,
    U = L && (!A || !V);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(Q.Z, {
      guildId: E,
      onClick: n ? void 0 : e => null == h ? void 0 : h(e, i),
      onContextMenu: n ? void 0 : e => null == p ? void 0 : p(e, i),
      className: o()(eo.voiceUserWrapper, {
        [eo.faded]: !x,
        [eo.interactive]: !n
      }),
      user: i,
      nick: a,
      speaking: !1,
      flipped: t,
      isStreaming: T,
      iconClassName: o()(eo.voiceIcon, {
        [eo.locked]: n
      }),
      isWatching: O,
      isOverlay: !0,
      size: u,
      priority: N,
      mute: M || U || S,
      localMute: S,
      serverMute: M || P,
      deaf: b || w,
      serverDeaf: b,
      userNameClassName: o()(eo.username, {
        [eo.locked]: n,
        [eo.hidden]: n && (d === es.wC$.NEVER || !x && d === es.wC$.ONLY_WHILE_SPEAKING)
      })
    }), A && V && (0, s.jsx)(en.Z, {
      value: L,
      action: es.kg4.TOGGLE_MUTE,
      shouldShow: !M && !P
    })]
  })
}
class ec extends(i = l.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: l,
      isPreviewingInGame: a,
      channel: r,
      anchor: d,
      avatarSizeMode: u
    } = this.props, h = null != d.right, p = t.map(t => {
      var o;
      let {
        user: d,
        voiceState: c,
        member: p
      } = t;
      if (null == d || null == r || null == e) return null;
      let f = l || a;
      return (0, s.jsx)(ed, {
        guildId: null == r ? void 0 : r.guild_id,
        user: d,
        nick: null !== (o = null == p ? void 0 : p.nick) && void 0 !== o ? o : q.ZP.getName(d),
        flipped: h,
        voiceState: c,
        displayNameMode: n,
        displayUserMode: i,
        size: u,
        locked: f,
        onContextMenu: this.handleUserContextMenu,
        onClick: this.handleUserContextMenu,
        context: e
      }, d.id)
    });
    return (0, s.jsx)(K.ZP.Body, {
      className: o()({
        [c.Z.VOICE_WIDGET_TOP_MARGIN]: l,
        [eo.bottomMargin]: l
      }),
      children: (0, s.jsx)(Q.e, {
        className: eo.voiceList,
        children: p
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, s.jsxs)(K.ZP.Bar, {
      className: o()(eo.draggableStartArea, {
        [eo.preview]: n
      }),
      children: [(0, s.jsxs)(K.ZP.Content, {
        dynamicSize: !0,
        className: o()(eo.content, {
          [eo.hidden]: n
        }),
        children: [(0, s.jsx)(B.Z, {
          color: d.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: o()(eo.icon, eo.faded, eo.dragIcon)
        }), (0, s.jsx)(z.Z, {
          color: d.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: o()(eo.icon, eo.faded, eo.speakerIcon)
        }), (0, s.jsx)(F.Z, {
          color: d.Z.unsafe_rawColors.PRIMARY_200.css,
          className: eo.title,
          children: t
        })]
      }), n ? null : (0, s.jsx)(K.ZP.Icon, {
        icon: G.Z,
        label: ea.Z.Messages.VOICE_SETTINGS,
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, s.jsx)(K.ZP.Icon, {
        icon: e ? W.Z : H.Z,
        label: e ? ea.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : ea.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
        onClick: this.handlePin,
        tooltipPosition: "left",
        size: 18,
        isActive: e
      })]
    })
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: l,
      application: a,
      streamMetadata: r,
      streamApplication: d,
      stream: c
    } = this.props;
    if (t || null == c || null == l) return null;
    let {
      sanitizedTitle: h,
      title: p
    } = (0, S.Z)(r);
    return (0, s.jsx)(K.ZP.Bar, {
      className: o()(eo.streamerControls, {
        [eo.hidden]: i,
        [eo.unpinned]: !n
      }),
      children: (0, s.jsxs)(K.ZP.Content, {
        className: eo.streamerContent,
        dynamicSize: !0,
        children: [(0, s.jsxs)("div", {
          className: eo.streamerInner,
          children: [(null == d ? void 0 : d.id) != null && d.id === (null == a ? void 0 : a.id) ? (0, s.jsx)(U.Z, {
            className: eo.gameIcon,
            game: a
          }) : (0, s.jsx)(v.Z, {
            title: h
          }), (0, s.jsxs)(V.Z, {
            direction: V.Z.Direction.VERTICAL,
            justify: V.Z.Justify.BETWEEN,
            className: eo.streamerInfo,
            children: [(0, s.jsx)(u.Text, {
              className: eo.streaming,
              variant: "text-sm/normal",
              children: ea.Z.Messages.STATUS_STREAMING
            }), (0, s.jsx)(X.Z, {
              children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : p
            })]
          })]
        }), (0, s.jsxs)(V.Z, {
          grow: 0,
          children: [(0, s.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, s.jsx)(O.Z, {
              stream: c,
              iconClassName: eo.streamerIcon,
              appContext: es.IlC.OVERLAY
            })
          }), (0, s.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, s.jsx)(A.Z, {
              stream: c,
              appContext: es.IlC.OVERLAY
            })
          }), (0, s.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, s.jsx)(u.TooltipContainer, {
              text: ea.Z.Messages.STOP_STREAMING,
              children: (0, s.jsx)(u.Button, {
                onClick: this.handleStopStream,
                look: u.Button.Looks.BLANK,
                size: u.Button.Sizes.NONE,
                children: (0, s.jsx)(Y.Z, {
                  className: eo.streamerIcon
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, ei.m3)(this.props, this.shouldDisplay())
  }
  componentDidUpdate(e) {
    (0, ei.CR)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: s,
        channel: l
      } = e;
    return 0 !== s.length && null != t && null != l && (!n || !!i) && !0
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: l,
      channel: a
    } = this.props;
    if (null == a || null == e || !this.shouldDisplay()) return null;
    let r = es.t_t.UNPINNED;
    return i && (r = es.t_t.PINNED), l && (r = es.t_t.IN_GAME_PREVIEW), n && (r = es.t_t.IN_GAME), (0, s.jsxs)(K.ZP, {
      type: r,
      width: 280,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, s.jsx)(et.Z, {
        className: o()({
          [eo.preview]: l
        }),
        contentClassName: o()({
          [eo.hidden]: l
        }),
        channel: a,
        lobbyId: t,
        context: e,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), er(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, s.jsx)(e, {
          ...n,
          user: t,
          showMediaItems: !0,
          mediaEngineContext: i
        })
      })
    }), er(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, u.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, 344516));
        return n => (0, s.jsx)(l, {
          ...n,
          mediaEngineContext: e,
          title: null != t ? null : i
        })
      })
    }), er(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      f.Z.track(es.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
        channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
        channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
        widget_type: es.Odu.VOICE
      });
      let {
        id: s
      } = this.props;
      (0, p.xh)(s)
    }), er(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      if (null != e) E.g((0, I.V9)(e))
    })
  }
}
er(ec, "defaultProps", {
  context: el.Yn.DEFAULT
});

function eu(e) {
  var t;
  let n = (0, r.e7)([P.Z, M.Z], () => M.Z.getChannel(P.Z.getVoiceChannelId())),
    i = (0, m.ZP)(n),
    a = function() {
      let [e] = (0, r.e7)([w.ZP, N.Z, P.Z, M.Z], () => {
        let e = M.Z.getChannel(P.Z.getVoiceChannelId());
        return null == e ? [
          [], -1
        ] : e.isGuildStageVoice() ? [N.Z.getMutableParticipants(e.id, T.pV.SPEAKER), N.Z.getParticipantsVersion(e.id)] : [w.ZP.getVoiceStatesForChannel(e), w.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], J.Q), t = (0, r.e7)([R.default], () => R.default.getId()), {
        showKeybindIndicators: n
      } = ee.Z.useExperiment({
        location: "voice_widget"
      });
      return l.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? -1 : n.user.id === t ? 1 : 0) : e, [e, t, n])
    }(),
    o = (0, r.e7)([y.Z], () => y.Z.getStreamerActiveStreamMetadata()),
    d = (0, r.e7)([_.ZP, b.Z, L.Z], () => {
      var e;
      let t = (0, C.Z)(_.ZP, b.Z);
      return null != t ? null === (e = L.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id : null
    }),
    c = (0, g.q)(d),
    u = (0, r.cj)([_.ZP, b.Z, y.Z, k.Z], () => {
      let e = (0, C.Z)(_.ZP, b.Z),
        t = y.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: k.Z.getDisplayUserMode(),
        displayNameMode: k.Z.getDisplayNameMode(),
        avatarSizeMode: k.Z.getAvatarSizeMode(),
        streamApplication: (null == o ? void 0 : o.pid) === (0, $.QF)() ? (0, x.Z)(e) : null,
        stream: t
      }
    });
  return (0, s.jsx)(ec, {
    ...u,
    application: c,
    ...e,
    sortedVoiceStates: a,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: o,
    streamApplication: null !== (t = u.streamApplication) && void 0 !== t ? t : {
      id: null,
      name: null == o ? void 0 : o.sourceName
    }
  })
}