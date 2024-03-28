"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("846027"),
  i = n("872810"),
  r = n("594190"),
  o = n("989941"),
  u = n("173507"),
  d = n("199902"),
  c = n("131951"),
  f = n("449224"),
  E = n("358085"),
  h = n("452426"),
  _ = n("736045"),
  C = n("186901"),
  m = n("981631");
t.default = {
  [m.RPCCommands.TOGGLE_VIDEO]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ALL]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = c.default.isVideoEnabled();
      null != (0, _.default)() && (e ? l.default.setVideoEnabled(!1) : (0, u.default)(() => l.default.setVideoEnabled(!0), m.AppContext.APP))
    }
  },
  [m.RPCCommands.TOGGLE_SCREENSHARE]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ALL]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, h.default)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, l = d.default.getCurrentUserActiveStream(), u = d.default.getStreamerActiveStreamMetadata(), c = (0, o.default)(r.default, f.default), h = (0, _.default)();
      null != h && (null != t && null != u && u.pid !== t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
        pid: t
      }) : null != l ? (0, i.stopOwnStream)(!1) : null != t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
        pid: t
      }) : null != c ? (0, i.startStream)(h.guild_id, h.id, {
        pid: c.pid
      }) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477")]).then(n.bind(n, "60594"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: h.guild_id,
          analyticsLocation: m.AnalyticsLocations.ACTIVITY_RPC
        })
      }))
    }
  }
}