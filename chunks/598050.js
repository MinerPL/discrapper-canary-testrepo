"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("446674"),
  u = n("737960"),
  o = n("191145"),
  d = n("488464"),
  c = n("567469"),
  f = n("998716"),
  h = n("223378"),
  m = n("973137"),
  p = n("661917"),
  E = n("85427"),
  g = n("620103"),
  S = n("297446"),
  C = n("782340"),
  _ = n("956630");
let I = {
  singleSpeaker: 424,
  twoSpeakers: 624,
  threeSpeakers: 824
};
(l = a || (a = {}))[l.SELECTED = 0] = "SELECTED", l[l.SPEAKER = 1] = "SPEAKER", l[l.AUDIENCE = 2] = "AUDIENCE";
let T = (e, t) => {
    let n = Math.floor(e / t - 8),
      a = Math.floor(n / S.SPEAKER_TILE_ASPECT_RATIO);
    return {
      speakerTileWidth: n,
      speakerTileHeight: a
    }
  },
  v = (e, t) => e < I.singleSpeaker ? 1 : e < I.twoSpeakers ? 2 : e < I.threeSpeakers ? 3 : t ? 3 : 4,
  x = e => Math.floor((e - 32) / 102);

function N(e) {
  return e.type === f.StageChannelParticipantTypes.VOICE
}
var A = (0, u.default)(e => {
  var t, n;
  let {
    channel: a,
    width: l,
    onScroll: u
  } = e, {
    selectedParticipantId: I,
    largeStream: A,
    chatOpen: M
  } = (0, r.useStateFromStoresObject)([o.default], () => ({
    selectedParticipantId: o.default.getSelectedParticipantId(a.id),
    largeStream: o.default.getStageStreamSize(a.id),
    chatOpen: o.default.getChatOpen(a.id)
  }), [a.id]), R = (0, c.useActualStageSpeakerCount)(a.id), j = (0, c.useStageParticipantsCount)(a.id, f.StageChannelParticipantNamedIndex.AUDIENCE), L = (0, r.useStateFromStores)([d.default], () => null != I ? d.default.getParticipant(a.id, I) : null), y = (0, c.useStageParticipants)(a.id, f.StageChannelParticipantNamedIndex.SPEAKER), O = y.filter(N), P = null != y.find(e => e.type === f.StageChannelParticipantTypes.STREAM), D = x(l), b = v(l, M), U = {
    [f.StageChannelParticipantNamedIndex.SPEAKER]: b,
    [f.StageChannelParticipantNamedIndex.AUDIENCE]: D,
    [f.StageChannelParticipantNamedIndex.SELECTED]: 1
  }, w = (0, h.useThrottleDurationForChannel)(a.id), [F, V] = (0, h.useStageChannelParticipantsListThrottled)(a.id, U, w), H = [Math.max(null !== (t = F[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = F[1]) && void 0 !== n ? n : 1, 1), F[2]], {
    speakerTileWidth: k,
    speakerTileHeight: B
  } = T(l, b), G = A ? l - 32 : Math.min(l - 64, 3 * k + 8), W = e => e === F.length - 1 || 0 === j && 1 === e, [Y, z] = i.useState(!1), [K, Z] = i.useState(!1);
  return (0, s.jsx)(p.default, {
    sections: H,
    renderSection: e => {
      let {
        section: t
      } = e;
      if (1 === t) return 0 === R ? null : (0, s.jsx)(g.default, {
        participantCount: R,
        label: C.default.Messages.SPEAKER_LABEL,
        className: _.header,
        onClick: () => z(!Y),
        collapsed: Y,
        speakers: O,
        channel: a,
        isStreamLive: P
      }, "speaker-header-".concat(t));
      if (2 === t) return 0 === j ? null : (0, s.jsx)(g.default, {
        participantCount: j,
        label: C.default.Messages.AUDIENCE_LABEL,
        className: _.header,
        onClick: () => Z(!K),
        collapsed: K,
        channel: a
      }, "audience-header-".concat(t));
      return null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = V[t][n];
      if ((null == l ? void 0 : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, s.jsx)("div", {
            className: _.focusedRow,
            children: (0, s.jsx)(S.default, {
              channel: a,
              participant: l[0],
              width: G
            })
          }, "selected-participant");
        case 1:
          if (Y) return null;
          return (0, s.jsx)(i.Fragment, {
            children: (0, s.jsx)(E.default, {
              tileWidth: k,
              channel: a,
              participants: l,
              selectedParticipant: L
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (K) return null;
          return (0, s.jsx)(m.default, {
            channel: a,
            participants: l,
            maxTiles: D
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => {
      let t = null == V[e][0];
      return t ? 0 : 0 === e ? G / S.SPEAKER_TILE_ASPECT_RATIO + 8 : 1 === e ? Y ? 0 : B : K ? 0 : 98
    },
    renderFooter: e => {
      let {
        section: t
      } = e;
      return W(t) ? (0, s.jsx)("div", {
        className: _.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : W(e) ? 88 : 0,
    className: _.scroller,
    chunkSize: 60,
    onScroll: u
  })
})