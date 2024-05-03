"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("512722"),
  o = n.n(s),
  l = n("442837"),
  u = n("481060"),
  d = n("730749"),
  _ = n("726542"),
  c = n("750154"),
  E = n("592125"),
  I = n("594174"),
  T = n("979651"),
  f = n("285952"),
  S = n("543595"),
  h = n("503438"),
  A = n("802856"),
  m = n("952561"),
  N = n("606925"),
  p = n("719216"),
  O = n("429589"),
  R = n("276149"),
  C = n("636245"),
  g = n("697761"),
  L = n("611459"),
  v = n("544671"),
  D = n("757182"),
  M = n("910424"),
  y = n("981631"),
  P = n("338753");
t.default = (0, d.default)(e => {
  let {
    activity: t,
    user: n,
    applicationStream: r,
    className: s,
    guildId: d,
    channelId: U,
    source: b,
    color: G = u.Button.Colors.WHITE,
    look: w = u.Button.Looks.OUTLINED,
    type: B,
    onAction: k,
    isEmbedded: V = !1
  } = e, x = (0, m.default)(), F = (0, l.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), H = B === S.Types.PROFILE || B === S.Types.PROFILE_V2 || B === S.Types.SIMPLIFIED_PROFILE, Y = B === S.Types.STREAM_PREVIEW || null != r, j = B === S.Types.SIMPLIFIED_PROFILE || B === S.Types.BITE_SIZE_POPOUT, W = (0, h.default)(t), K = H ? f.default.Align.END : f.default.Align.STRETCH, z = W || Y ? f.default.Direction.HORIZONTAL : f.default.Direction.VERTICAL, Z = (null == t ? void 0 : t.type) === y.ActivityTypes.HANG_STATUS, X = (0, l.useStateFromStores)([T.default, E.default], () => {
    var e;
    return Z ? E.default.getChannel(null === (e = T.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), Q = z === f.default.Direction.VERTICAL;
  return (0, i.jsx)(f.default, {
    grow: 0,
    align: K,
    direction: z,
    wrap: Q ? f.default.Wrap.WRAP : f.default.Wrap.NO_WRAP,
    className: a()(s, P.buttonsWrapper, Q ? P.vertical : P.horizontal),
    children: (() => {
      if ((0, A.default)(t)) return (0, i.jsx)(N.default, {
        platform: _.default.get(y.PlatformTypes.XBOX),
        look: w,
        color: G,
        onAction: k
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === y.ActivityGamePlatforms.PS4 || (null == t ? void 0 : t.platform) === y.ActivityGamePlatforms.PS5) return (0, i.jsx)(N.default, {
        look: w,
        color: G,
        platform: _.default.get(y.PlatformTypes.PLAYSTATION),
        onAction: k
      }, "ConnectPlatformActivityButton");
      if (W) {
        let e = (0, i.jsx)(v.default, {
            activity: t,
            user: n,
            guildId: d,
            channelId: U,
            source: b,
            onAction: k
          }, "spotify-activity-sync-button"),
          r = (0, i.jsx)(L.default, {
            activity: t,
            user: n,
            source: b,
            onAction: k
          }, "spotify-activity-play-button");
        return j ? (0, i.jsxs)(i.Fragment, {
          children: [e, r]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [r, e]
        })
      }
      if ((0, c.isStageActivity)(t)) {
        let e = (0, c.unpackStageChannelParty)(t);
        return null == e ? null : (0, i.jsx)(C.default, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: G,
          look: w,
          isProfile: H,
          onAction: k
        }, e.channelId)
      }
      return Y ? (0, i.jsx)(M.default, {
        isCurrentUser: F.id === n.id,
        color: G,
        look: w,
        applicationStream: r,
        onAction: k
      }, "watch-button") : Z && null != X ? (0, i.jsx)(R.default, {
        color: G,
        look: w,
        hangStatusChannel: X,
        onAction: k
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(D.default, {
          activity: t,
          color: G,
          look: w,
          onAction: k
        }, "watch-button"), (0, i.jsx)(O.default, {
          activity: t,
          currentEmbeddedApplication: x,
          user: n,
          isCurrentUser: F.id === n.id,
          color: G,
          look: w,
          isEmbedded: V,
          onAction: k
        }, "join-activity-button"), (0, i.jsx)(g.default, {
          activity: t,
          user: n,
          color: G,
          look: w,
          onAction: k
        }, "notify-button"), (0, i.jsx)(p.default, {
          user: n,
          color: G,
          look: w,
          activity: t,
          onAction: k
        }, "custom-activity-button")]
      })
    })()
  })
})