"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(512722),
  a = n.n(o),
  l = n(442837),
  u = n(481060),
  _ = n(730749),
  d = n(726542),
  c = n(750154),
  E = n(592125),
  I = n(594174),
  T = n(979651),
  h = n(285952),
  S = n(543595),
  f = n(503438),
  N = n(802856),
  A = n(606925),
  m = n(719216),
  O = n(429589),
  R = n(276149),
  C = n(636245),
  p = n(697761),
  g = n(611459),
  L = n(544671),
  v = n(757182),
  D = n(910424),
  M = n(981631),
  P = n(620932);
t.Z = (0, _.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: r,
    applicationStream: o,
    className: _,
    guildId: y,
    channelId: U,
    source: b,
    color: G = u.Button.Colors.WHITE,
    look: w = u.Button.Looks.OUTLINED,
    type: k,
    onAction: B,
    isEmbedded: x = !1
  } = e, V = (0, l.e7)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), Z = k === S.Y.PROFILE || k === S.Y.PROFILE_V2 || k === S.Y.SIMPLIFIED_PROFILE, H = k === S.Y.STREAM_PREVIEW || null != o, F = k === S.Y.SIMPLIFIED_PROFILE || k === S.Y.BITE_SIZE_POPOUT, Y = (0, f.Z)(t), j = Z ? h.Z.Align.END : h.Z.Align.STRETCH, W = Y || H ? h.Z.Direction.HORIZONTAL : h.Z.Direction.VERTICAL, K = (null == t ? void 0 : t.type) === M.IIU.HANG_STATUS, z = (0, l.e7)([T.Z, E.Z], () => {
    var e;
    return K ? E.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(r.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), q = W === h.Z.Direction.VERTICAL;
  return (0, i.jsx)(h.Z, {
    grow: 0,
    align: j,
    direction: W,
    wrap: q ? h.Z.Wrap.WRAP : h.Z.Wrap.NO_WRAP,
    className: s()(_, P.buttonsWrapper, q ? P.vertical : P.horizontal),
    children: (() => {
      if ((0, N.Z)(t)) return (0, i.jsx)(A.Z, {
        platform: d.Z.get(M.ABu.XBOX),
        look: w,
        color: G,
        onAction: B
      }, "ConnectPlatformActivityButton");
      if ((null == t ? void 0 : t.platform) === M.M7m.PS4 || (null == t ? void 0 : t.platform) === M.M7m.PS5) return (0, i.jsx)(A.Z, {
        look: w,
        color: G,
        platform: d.Z.get(M.ABu.PLAYSTATION),
        onAction: B
      }, "ConnectPlatformActivityButton");
      if (Y) {
        let e = (0, i.jsx)(L.Z, {
            activity: t,
            user: r,
            guildId: y,
            channelId: U,
            source: b,
            look: w,
            color: G,
            onAction: B
          }, "spotify-activity-sync-button"),
          n = (0, i.jsx)(g.Z, {
            activity: t,
            user: r,
            source: b,
            look: w,
            color: G,
            onAction: B
          }, "spotify-activity-play-button");
        return F ? (0, i.jsxs)(i.Fragment, {
          children: [e, n]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [n, e]
        })
      }
      if ((0, c.dS)(t)) {
        let e = (0, c.rq)(t);
        return null == e ? null : (0, i.jsx)(C.Z, {
          guildId: e.guildId,
          channelId: e.channelId,
          color: G,
          look: w,
          isProfile: Z,
          onAction: B
        }, e.channelId)
      }
      return H ? (0, i.jsx)(D.Z, {
        isCurrentUser: V.id === r.id,
        color: G,
        look: w,
        applicationStream: o,
        onAction: B
      }, "watch-button") : K && null != z ? (0, i.jsx)(R.Z, {
        color: G,
        look: w,
        hangStatusChannel: z,
        onAction: B
      }, "hang-status-button") : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(v.Z, {
          activity: t,
          color: G,
          look: w,
          onAction: B
        }, "watch-button"), (0, i.jsx)(O.Z, {
          activity: t,
          embeddedActivity: n,
          user: r,
          color: G,
          look: w,
          isEmbedded: x,
          onAction: B
        }, "join-activity-button"), (0, i.jsx)(p.Z, {
          activity: t,
          user: r,
          color: G,
          look: w,
          onAction: B
        }, "notify-button"), (0, i.jsx)(m.Z, {
          user: r,
          color: G,
          look: w,
          activity: t,
          onAction: B
        }, "custom-activity-button")]
      })
    })()
  })
})