"use strict";
n.r(t), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("442837"),
  o = n("112724"),
  u = n("358221"),
  d = n("565799"),
  c = n("431328"),
  f = n("501655"),
  h = n("27931"),
  m = n("260979"),
  p = n("766015"),
  E = n("401139"),
  C = n("12779"),
  g = n("450369"),
  S = n("689938"),
  _ = n("869122");
let T = {
  singleSpeaker: 424,
  twoSpeakers: 624,
  threeSpeakers: 824
};
(l = a || (a = {}))[l.SELECTED = 0] = "SELECTED", l[l.SPEAKER = 1] = "SPEAKER", l[l.AUDIENCE = 2] = "AUDIENCE";
let I = (e, t) => {
    let n = Math.floor(e / t - 8),
      a = Math.floor(n / g.SPEAKER_TILE_ASPECT_RATIO);
    return {
      speakerTileWidth: n,
      speakerTileHeight: a
    }
  },
  A = (e, t) => e < T.singleSpeaker ? 1 : e < T.twoSpeakers ? 2 : e < T.threeSpeakers ? 3 : t ? 3 : 4,
  v = e => Math.floor((e - 32) / 102);

function N(e) {
  return e.type === f.StageChannelParticipantTypes.VOICE
}
t.default = (0, o.default)(e => {
  var t, n;
  let {
    channel: a,
    width: l,
    onScroll: o
  } = e, {
    selectedParticipantId: T,
    largeStream: x,
    chatOpen: M
  } = (0, r.useStateFromStoresObject)([u.default], () => ({
    selectedParticipantId: u.default.getSelectedParticipantId(a.id),
    largeStream: u.default.getStageStreamSize(a.id),
    chatOpen: u.default.getChatOpen(a.id)
  }), [a.id]), R = (0, c.useActualStageSpeakerCount)(a.id), L = (0, c.useStageParticipantsCount)(a.id, f.StageChannelParticipantNamedIndex.AUDIENCE), y = (0, r.useStateFromStores)([d.default], () => null != T ? d.default.getParticipant(a.id, T) : null), O = (0, c.useStageParticipants)(a.id, f.StageChannelParticipantNamedIndex.SPEAKER), j = O.filter(N), P = null != O.find(e => e.type === f.StageChannelParticipantTypes.STREAM), D = v(l), b = A(l, M), U = {
    [f.StageChannelParticipantNamedIndex.SPEAKER]: b,
    [f.StageChannelParticipantNamedIndex.AUDIENCE]: D,
    [f.StageChannelParticipantNamedIndex.SELECTED]: 1
  }, F = (0, h.useThrottleDurationForChannel)(a.id), [w, k] = (0, h.useStageChannelParticipantsListThrottled)(a.id, U, F), H = [Math.max(null !== (t = w[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = w[1]) && void 0 !== n ? n : 1, 1), w[2]], {
    speakerTileWidth: B,
    speakerTileHeight: G
  } = I(l, b), V = x ? l - 32 : Math.min(l - 64, 3 * B + 8), W = e => e === w.length - 1 || 0 === L && 1 === e, [Y, z] = i.useState(!1), [Z, K] = i.useState(!1);
  return (0, s.jsx)(p.default, {
    sections: H,
    renderSection: e => {
      let {
        section: t
      } = e;
      if (1 === t) return 0 === R ? null : (0, s.jsx)(C.default, {
        participantCount: R,
        label: S.default.Messages.SPEAKER_LABEL,
        className: _.header,
        onClick: () => z(!Y),
        collapsed: Y,
        speakers: j,
        channel: a,
        isStreamLive: P
      }, "speaker-header-".concat(t));
      if (2 === t) return 0 === L ? null : (0, s.jsx)(C.default, {
        participantCount: L,
        label: S.default.Messages.AUDIENCE_LABEL,
        className: _.header,
        onClick: () => K(!Z),
        collapsed: Z,
        channel: a
      }, "audience-header-".concat(t));
      return null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = k[t][n];
      if ((null == l ? void 0 : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, s.jsx)("div", {
            className: _.focusedRow,
            children: (0, s.jsx)(g.default, {
              channel: a,
              participant: l[0],
              width: V
            })
          }, "selected-participant");
        case 1:
          if (Y) return null;
          return (0, s.jsx)(i.Fragment, {
            children: (0, s.jsx)(E.default, {
              tileWidth: B,
              channel: a,
              participants: l,
              selectedParticipant: y
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (Z) return null;
          return (0, s.jsx)(m.default, {
            channel: a,
            participants: l,
            maxTiles: D
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == k[e][0] ? 0 : 0 === e ? V / g.SPEAKER_TILE_ASPECT_RATIO + 8 : 1 === e ? Y ? 0 : G : Z ? 0 : 98,
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
    onScroll: o
  })
})