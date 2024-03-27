"use strict";
n.r(t), n.d(t, {
  SPEAKER_TILE_ASPECT_RATIO: function() {
    return L
  },
  default: function() {
    return P
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("627445"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("255397"),
  d = n("272030"),
  c = n("990766"),
  f = n("244201"),
  h = n("191145"),
  m = n("76393"),
  p = n("374014"),
  E = n("223913"),
  g = n("506885"),
  S = n("340906"),
  C = n("373469"),
  _ = n("305961"),
  I = n("957255"),
  T = n("800762"),
  v = n("512264"),
  x = n("325861"),
  N = n("584199"),
  A = n("116386"),
  M = n("49111"),
  R = n("99795"),
  j = n("3110");
let L = 16 / 9,
  y = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      guildId: i,
      user: r,
      width: o,
      isModerator: d,
      onContextMenu: c,
      inPopout: f
    } = e, {
      reducedMotion: h
    } = l.useContext(u.AccessibilityPreferencesContext), {
      blocked: m,
      id: p
    } = t;
    return (0, a.jsx)(u.Popout, {
      preload: null == n ? void 0 : () => (0, g.default)(n.user.id, n.user.getAvatarURL(s.guild_id, 80), {
        guildId: s.guild_id,
        channelId: s.id
      }),
      renderPopout: e => (0, a.jsx)(S.default, {
        ...e,
        location: "StageTile",
        guildId: i,
        channelId: s.id,
        userId: r.id
      }),
      position: "right",
      spacing: 8,
      children: e => (0, a.jsx)(u.Clickable, {
        onContextMenu: e => c(n, e),
        ...e,
        children: (0, a.jsx)(N.default, {
          participant: n,
          aspectRatio: L,
          blocked: m,
          channel: s,
          className: j.tile,
          inCall: !0,
          inPopout: f,
          paused: !1,
          pulseSpeakingIndicator: !h.enabled,
          width: o,
          children: d && (0, a.jsx)(A.default, {})
        }, p)
      })
    })
  },
  O = e => {
    let {
      stageParticipant: t,
      rtcParticipant: n,
      channel: s,
      width: i,
      isModerator: d,
      onContextMenu: f,
      inPopout: g
    } = e, {
      reducedMotion: S
    } = l.useContext(u.AccessibilityPreferencesContext), {
      id: x,
      blocked: y
    } = t, O = (0, r.useStateFromStoresArray)([C.default], () => C.default.getAllActiveStreams(), []), {
      selectedParticipant: P,
      largeStream: D
    } = (0, r.useStateFromStoresObject)([h.default], () => ({
      selectedParticipant: null != s ? h.default.getSelectedParticipant(s.id) : null,
      largeStream: null != s && h.default.getStageStreamSize(s.id)
    })), b = l.useCallback((e, t) => {
      if (e.type === R.ParticipantTypes.STREAM) {
        let n = O.filter(t => (0, p.encodeStreamKey)(t) === e.id && t.state !== M.ApplicationStreamStates.ENDED);
        if (0 === n.length) {
          if (!(0, E.canWatchStream)(s, T.default, _.default, I.default, m.default)[0]) return;
          (0, c.watchStream)((0, p.decodeStreamKey)(e.id), {
            forceMultiple: t.shiftKey
          })
        }
      }(null == P ? void 0 : P.id) === e.id ? D ? (o.default.selectParticipant(s.id, null), o.default.updateStageStreamSize(s.id, !1)) : o.default.updateStageStreamSize(s.id, !0) : (o.default.updateStageStreamSize(s.id, !1), o.default.selectParticipant(s.id, e.id))
    }, [O, s, P, D]);
    return (0, a.jsx)(N.default, {
      participant: n,
      aspectRatio: L,
      fit: n.type === R.ParticipantTypes.USER ? v.VideoStreamFit.COVER : void 0,
      blocked: y,
      channel: s,
      className: j.tile,
      inCall: !0,
      inPopout: g,
      onClick: b,
      onContextMenu: f,
      paused: !1,
      pulseSpeakingIndicator: !S.enabled,
      width: i,
      children: d && n.type === R.ParticipantTypes.USER && (0, a.jsx)(A.default, {})
    }, x)
  };
var P = l.memo(function(e) {
  var t;
  let {
    participant: l,
    channel: s,
    width: u
  } = e, o = (0, f.useAppContext)(), c = s.getGuildId();
  i(null != c, "Channel cannot be guildless");
  let {
    user: m
  } = l, p = (0, r.useStateFromStores)([h.default], () => h.default.getParticipant(s.id, l.id), [s.id, l.id]), E = (0, r.useStateFromStores)([x.default], () => x.default.isModerator(m.id, s.id), [s.id, m.id]);
  if (null == p || p.type === R.ParticipantTypes.ACTIVITY) return null;
  let g = (e, t) => {
      switch (e.type) {
        case R.ParticipantTypes.HIDDEN_STREAM:
        case R.ParticipantTypes.STREAM:
          (0, d.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.el("172844").then(n.bind(n, "172844"));
            return n => (0, a.jsx)(t, {
              ...n,
              stream: e.stream,
              appContext: o,
              exitFullscreen: () => {}
            })
          }, {
            context: o
          });
          return;
        case R.ParticipantTypes.USER:
        default:
          (0, d.openContextMenuLazy)(t, async () => {
            let {
              default: e
            } = await n.el("834247").then(n.bind(n, "834247"));
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
            context: o
          })
      }
    },
    S = p.type === R.ParticipantTypes.USER && !(null === (t = p.voiceState) || void 0 === t ? void 0 : t.selfVideo);
  return (0, a.jsx)(a.Fragment, {
    children: S ? (0, a.jsx)(y, {
      stageParticipant: l,
      rtcParticipant: p,
      channel: s,
      guildId: c,
      user: m,
      width: u,
      isModerator: E,
      onContextMenu: g,
      inPopout: o === M.AppContext.POPOUT
    }) : (0, a.jsx)(O, {
      stageParticipant: l,
      rtcParticipant: p,
      channel: s,
      guildId: c,
      user: m,
      width: u,
      isModerator: E,
      onContextMenu: g,
      inPopout: o === M.AppContext.POPOUT
    })
  })
})