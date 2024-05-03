"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("902704"),
  i = n("812206"),
  r = n("594190"),
  o = n("199902"),
  u = n("592125"),
  d = n("430824"),
  c = n("131951"),
  f = n("19780"),
  E = n("594174"),
  h = n("979651"),
  _ = n("996106"),
  C = n("914946"),
  S = n("238679"),
  m = n("452426"),
  p = n("295424"),
  I = n("863141"),
  T = n("186901"),
  g = n("981631");
let A = e => (0, m.default)(e).required().keys({
  channel_id: e.string().required()
});

function N(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: a
  } = e, s = u.default.getChannel(n);
  if (null == s || !(0, C.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let v = e => (0, m.default)(e).keys({
  channel_id: e.string().allow(null)
});

function R(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == u.default.getChannel(t)) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let L = {
  [g.RPCEvents.GUILD_STATUS]: {
    scope: g.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == d.default.getGuild(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: l
        } = e, i = d.default.getGuild(t);
        if (null == i) return;
        let r = {
          guild: {
            id: i.id,
            name: i.name,
            icon_url: null !== (n = i.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s().isEqual(a, r) && l(r), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return n && s().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, C.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return s().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, C.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id)).map(e => (0, C.transformVoiceState)(i, l.id, e));
        return s().differenceWith(r, n, s().isEqual).forEach(e => a(e)), r
      }
    }
  },
  [g.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, C.getVoiceConnectionState)(f.default.getState()),
        hostname: f.default.getHostname(),
        pings: f.default.getPings(),
        average_ping: f.default.getAveragePing(),
        last_ping: f.default.getLastPing()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  },
  [g.RPCEvents.MESSAGE_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.MESSAGE_UPDATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.MESSAGE_DELETE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.SPEAKING_START]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: v,
    handler: R
  },
  [g.RPCEvents.SPEAKING_STOP]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: v,
    handler: R
  },
  [g.RPCEvents.GUILD_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.CHANNEL_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.GAME_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: S.activityInstanceConnectedParticipantsUpdateEvent,
  [g.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [g.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: g.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {}
  },
  [g.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: E.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, l.default)(a, t)) && n((0, I.default)(a.currentUser)), a
    }
  },
  [g.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: T.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [g.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: l
      } = e, u = o.default.getStreamerActiveStreamMetadata(), d = (null == u ? void 0 : u.pid) != null ? r.default.getGameForPID(u.pid) : null, c = (null == d ? void 0 : d.id) != null ? i.default.getApplication(d.id) : null, f = null != c ? (0, p.default)(c) : null, E = null == u ? void 0 : u.sourceName, h = {
        active: null != u,
        pid: null !== (t = null == u ? void 0 : u.pid) && void 0 !== t ? t : null,
        application: (n = null != f, n) ? {
          name: E
        } : null
      };
      return !s().isEqual(h, a) && l(h), h
    }
  },
  [g.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: c.default.isVideoEnabled()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  }
};
t.default = L