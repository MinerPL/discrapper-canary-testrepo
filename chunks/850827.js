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
  C = n("276149"),
  R = n("636245"),
  g = n("697761"),
  L = n("611459"),
  v = n("544671"),
  D = n("757182"),
  M = n("910424"),
  y = n("981631"),
  P = n("620932");
t.default = (0, d.default)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: r,
    applicationStream: s,
    className: d,
    guildId: U,
    channelId: b,
    source: G,
    color: w = u.Button.Colors.WHITE,
    look: k = u.Button.Looks.OUTLINED,
    type: B,
    onAction: V,
    isEmbedded: x = !1
  } = e, F = (0, m.default)(), H = (0, l.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), Y = B === S.Types.PROFILE || B === S.Types.PROFILE_V2 || B === S.Types.SIMPLIFIED_PROFILE, j = B === S.Types.STREAM_PREVIEW || null != s, W = B === S.Types.SIMPLIFIED_PROFILE || B === S.Types.BITE_SIZE_POPOUT, K = (0, h.default)(t), z = Y ? f.default.Align.END : f.default.Align.STRETCH, Z = K || j ? f.default.Direction.HORIZONTAL : f.default.Direction.VERTICAL, X = (null == t ? void 0 : t.type) === y.ActivityTypes.HANG_STATUS, Q = (0, l.useStateFromStores)([T.default, E.default], () => {
    var e;
    return X ? E.default.getChannel(null === (e = T.default.getVoiceStateForUser(r.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), q = Z === f.default.Direction.VERTICAL;
  return (0, i.jsx)(f.default, {
    grow: 0,
    align: z,
    direction: Z,
    wrap: q ? f.default.Wrap.WRAP : f.default.Wrap.NO_WRAP,
    className: a()(d, P.buttonsWrapper, q ? P.vertical : P.horizontal),
    children: (() => {
      if ((0, A.default)(t)) return (0, i.jsx)(N.default, {
        platform: _.default.get(y.PlatformTypes.XBOX),
        look: k,
        color: w,
        onAction: V
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === y.ActivityGamePlatforms.PS4 || (null == t ? void 0 : t.platform) === y.ActivityGamePlatforms.PS5) return (0, i.jsx)(N.default, {
        look: k,
        color: w,
        platform: _.default.get(y.PlatformTypes.PLAYSTATION),
        onAction: V
      }, "ConnectPlatformActivityButton");
      if (K) {
        let e = (0, i.jsx)(v.default, {
            activity: t,
            user: r,
            guildId: U,
            channelId: b,
            source: G,
            look: k,
            color: w,
            onAction: V
          }, "spotify-activity-sync-button"),
          n = (0, i.jsx)(L.default, {
            activity: t,
            user: r,
            source: G,
            look: k,
            color: w,
            onAction: V
          }, "spotify-activity-play-button");
        return W ? (0, i.jsxs)(i.Fragment, {
          children: [e, n]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [n, e]
        })
      }
      if ((0, c.isStageActivity)(t)) {
        let e = (0, c.unpackStageChannelParty)(t);
        return null == e ? null : (0, i.jsx)(R.default, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: w,
          look: k,
          isProfile: Y,
          onAction: V
        }, e.channelId)
      }
      return j ? (0, i.jsx)(M.default, {
        isCurrentUser: H.id === r.id,
        color: w,
        look: k,
        applicationStream: s,
        onAction: V
      }, "watch-button") : X && null != Q ? (0, i.jsx)(C.default, {
        color: w,
        look: k,
        hangStatusChannel: Q,
        onAction: V
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(D.default, {
          activity: t,
          color: w,
          look: k,
          onAction: V
        }, "watch-button"), (0, i.jsx)(O.default, {
          activity: t,
          embeddedActivity: n,
          currentEmbeddedApplication: F,
          user: r,
          isCurrentUser: H.id === r.id,
          color: w,
          look: k,
          isEmbedded: x,
          onAction: V
        }, "join-activity-button"), (0, i.jsx)(g.default, {
          activity: t,
          user: r,
          color: w,
          look: k,
          onAction: V
        }, "notify-button"), (0, i.jsx)(p.default, {
          user: r,
          color: w,
          look: k,
          activity: t,
          onAction: V
        }, "custom-activity-button")]
      })
    })()
  })
})