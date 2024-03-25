"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("629109"),
  i = n("990766"),
  r = n("161454"),
  o = n("375202"),
  u = n("727284"),
  d = n("373469"),
  c = n("42887"),
  f = n("703370"),
  E = n("773336"),
  h = n("716724"),
  _ = n("880553"),
  C = n("492249"),
  S = n("49111"),
  I = {
    [S.RPCCommands.TOGGLE_VIDEO]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [S.OAuth2Scopes.RPC, S.OAuth2Scopes.RPC_VIDEO_WRITE]
      },
      handler() {
        let e = c.default.isVideoEnabled(),
          t = (0, _.default)();
        null != t && (e ? l.default.setVideoEnabled(!1) : (0, u.default)(() => l.default.setVideoEnabled(!0), S.AppContext.APP))
      }
    },
    [S.RPCCommands.TOGGLE_SCREENSHARE]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [S.OAuth2Scopes.RPC, S.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
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
          } = await n.el("451863").then(n.bind(n, "451863"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: h.guild_id,
            analyticsLocation: S.AnalyticsLocations.ACTIVITY_RPC
          })
        }))
      }
    }
  }