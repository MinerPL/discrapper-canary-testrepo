"use strict";
n.r(t), n.d(t, {
  SPEAKER_TILE_ASPECT_RATIO: function() {
    return L
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("475179"),
  d = n("239091"),
  c = n("872810"),
  f = n("40851"),
  h = n("358221"),
  m = n("258609"),
  p = n("569545"),
  E = n("102172"),
  C = n("484459"),
  g = n("103575"),
  S = n("199902"),
  _ = n("430824"),
  T = n("496675"),
  I = n("979651"),
  A = n("40300"),
  N = n("88751"),
  v = n("252132"),
  x = n("248400"),
  M = n("981631"),
  R = n("354459"),
  y = n("724434");
let L = 16 / 9,
  O = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      guildId: i,
      user: r,
      width: u,
      isModerator: d,
      onContextMenu: c,
      inPopout: f
    } = e, {
      reducedMotion: h
    } = l.useContext(o.AccessibilityPreferencesContext), {
      blocked: m,
      id: p
    } = t;
    return (0, a.jsx)(o.Popout, {
      preload: null == n ? void 0 : () => (0, C.maybeFetchUserProfileForPopout)(n.user, {
        guildId: s.guild_id,
        channelId: s.id
      }),
      renderPopout: e => (0, a.jsx)(g.default, {
        ...e,
        location: "StageTile",
        guildId: i,
        channelId: s.id,
        userId: r.id
      }),
      position: "right",
      spacing: 8,
      children: e => (0, a.jsx)(o.Clickable, {
        onContextMenu: e => c(n, e),
        ...e,
        children: (0, a.jsx)(v.default, {
          participant: n,
          aspectRatio: L,
          blocked: m,
          channel: s,
          className: y.tile,
          inCall: !0,
          inPopout: f,
          paused: !1,
          pulseSpeakingIndicator: !h.enabled,
          width: u,
          children: d && (0, a.jsx)(x.default, {})
        }, p)
      })
    })
  },
  j = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      width: i,
      isModerator: d,
      onContextMenu: f,
      inPopout: C
    } = e, {
      reducedMotion: g
    } = l.useContext(o.AccessibilityPreferencesContext), {
      id: N,
      blocked: O
    } = t, j = (0, r.useStateFromStoresArray)([S.default], () => S.default.getAllActiveStreams(), []), {
      selectedParticipant: P,
      largeStream: D
    } = (0, r.useStateFromStoresObject)([h.default], () => ({
      selectedParticipant: null != s ? h.default.getSelectedParticipant(s.id) : null,
      largeStream: null != s && h.default.getStageStreamSize(s.id)
    })), b = l.useCallback((e, t) => {
      if (e.type === R.ParticipantTypes.STREAM && 0 === j.filter(t => (0, p.encodeStreamKey)(t) === e.id && t.state !== M.ApplicationStreamStates.ENDED).length) {
        if (!(0, E.canWatchStream)(s, I.default, _.default, T.default, m.default)[0]) return;
        (0, c.watchStream)((0, p.decodeStreamKey)(e.id), {
          forceMultiple: t.shiftKey
        })
      }(null == P ? void 0 : P.id) === e.id ? D ? (u.default.selectParticipant(s.id, null), u.default.updateStageStreamSize(s.id, !1)) : u.default.updateStageStreamSize(s.id, !0) : (u.default.updateStageStreamSize(s.id, !1), u.default.selectParticipant(s.id, e.id))
    }, [j, s, P, D]);
    return (0, a.jsx)(v.default, {
      participant: n,
      aspectRatio: L,
      fit: n.type === R.ParticipantTypes.USER ? A.VideoStreamFit.COVER : void 0,
      blocked: O,
      channel: s,
      className: y.tile,
      inCall: !0,
      inPopout: C,
      onClick: b,
      onContextMenu: f,
      paused: !1,
      pulseSpeakingIndicator: !g.enabled,
      width: i,
      children: d && n.type === R.ParticipantTypes.USER && (0, a.jsx)(x.default, {})
    }, N)
  };
t.default = l.memo(function(e) {
  var t;
  let {
    participant: l,
    channel: s,
    width: o
  } = e, u = (0, f.useAppContext)(), c = s.getGuildId();
  i()(null != c, "Channel cannot be guildless");
  let {
    user: m
  } = l, p = (0, r.useStateFromStores)([h.default], () => h.default.getParticipant(s.id, l.id), [s.id, l.id]), E = (0, r.useStateFromStores)([N.default], () => N.default.isModerator(m.id, s.id), [s.id, m.id]);
  if (null == p || p.type === R.ParticipantTypes.ACTIVITY) return null;
  let C = (e, t) => {
      switch (e.type) {
        case R.ParticipantTypes.HIDDEN_STREAM:
        case R.ParticipantTypes.STREAM:
          (0, d.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.e("22183").then(n.bind(n, "987281"));
            return n => (0, a.jsx)(t, {
              ...n,
              stream: e.stream,
              appContext: u,
              exitFullscreen: () => {}
            })
          }, {
            context: u
          });
          return;
        case R.ParticipantTypes.USER:
        default:
          (0, d.openContextMenuLazy)(t, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
            return t => (0, a.jsx)(e, {
              ...t,
              user: m,
              guildId: c,
              channel: s,
              showMediaItems: !0,
              showStageChannelItems: !0,
              showChatItems: !1
            })
          }, {
            context: u
          })
      }
    },
    g = p.type === R.ParticipantTypes.USER && !(null === (t = p.voiceState) || void 0 === t ? void 0 : t.selfVideo);
  return (0, a.jsx)(a.Fragment, {
    children: g ? (0, a.jsx)(O, {
      stageParticipant: l,
      rtcParticipant: p,
      channel: s,
      guildId: c,
      user: m,
      width: o,
      isModerator: E,
      onContextMenu: C,
      inPopout: u === M.AppContext.POPOUT
    }) : (0, a.jsx)(j, {
      stageParticipant: l,
      rtcParticipant: p,
      channel: s,
      guildId: c,
      user: m,
      width: o,
      isModerator: E,
      onContextMenu: C,
      inPopout: u === M.AppContext.POPOUT
    })
  })
})