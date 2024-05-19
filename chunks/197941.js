"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("243814"),
  l = n("481060"),
  i = n("846027"),
  r = n("872810"),
  o = n("594190"),
  u = n("989941"),
  d = n("173507"),
  c = n("199902"),
  f = n("131951"),
  E = n("449224"),
  h = n("358085"),
  _ = n("452426"),
  C = n("736045"),
  m = n("186901"),
  S = n("981631");
t.default = {
  [S.RPCCommands.TOGGLE_VIDEO]: {
    scope: {
      [m.RPC_SCOPE_CONFIG.ALL]: [s.OAuth2Scopes.RPC, s.OAuth2Scopes.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = f.default.isVideoEnabled();
      null != (0, C.default)() && (e ? i.default.setVideoEnabled(!1) : (0, d.default)(() => i.default.setVideoEnabled(!0), S.AppContext.APP))
    }
  },
  [S.RPCCommands.TOGGLE_SCREENSHARE]: {
    scope: {
      [m.RPC_SCOPE_CONFIG.ALL]: [s.OAuth2Scopes.RPC, s.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, _.default)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, s = c.default.getCurrentUserActiveStream(), i = c.default.getStreamerActiveStreamMetadata(), d = (0, u.default)(o.default, E.default), f = (0, C.default)();
      null != f && (null != t && null != i && i.pid !== t && (0, h.isWindows)() ? (0, r.startStream)(f.guild_id, f.id, {
        pid: t
      }) : null != s ? (0, r.stopOwnStream)(!1) : null != t && (0, h.isWindows)() ? (0, r.startStream)(f.guild_id, f.id, {
        pid: t
      }) : null != d ? (0, r.startStream)(f.guild_id, f.id, {
        pid: d.pid
      }) : (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477")]).then(n.bind(n, "60594"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: f.guild_id,
          analyticsLocation: S.AnalyticsLocations.ACTIVITY_RPC
        })
      }))
    }
  }
}