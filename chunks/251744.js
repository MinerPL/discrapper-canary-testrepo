"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  i = n("233736"),
  l = n("299285"),
  r = n("373469"),
  o = n("42203"),
  u = n("305961"),
  d = n("260320"),
  c = n("42887"),
  f = n("945956"),
  E = n("568307"),
  _ = n("697218"),
  h = n("800762"),
  C = n("861309"),
  I = n("578287"),
  T = n("65810"),
  S = n("716724"),
  p = n("961400"),
  m = n("694352"),
  A = n("492249"),
  g = n("49111");
let N = e => (0, S.default)(e).required().keys({
  channel_id: e.string().required()
});

function R(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: a
  } = e, s = o.default.getChannel(n);
  if (null == s || !(0, I.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let O = e => (0, S.default)(e).keys({
  lobby_id: e.string(),
  channel_id: e.string()
});

function L(e) {
  let {
    args: {
      lobby_id: t,
      channel_id: n
    }
  } = e;
  if (null != n) {
    let e = o.default.getChannel(n);
    if (null == e) throw new C.default({
      errorCode: g.RPCErrors.INVALID_CHANNEL
    }, "Invalid channel id: ".concat(n))
  }
  if (null != t) {
    let e = d.default.getLobby(t);
    if (null == e) throw new C.default({
      errorCode: g.RPCErrors.INVALID_LOBBY
    }, "Invalid lobby id: ".concat(t))
  }
}
let v = {
  [g.RPCEvents.GUILD_STATUS]: {
    scope: g.OAuth2Scopes.RPC,
    validation: e => (0, S.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == u.default.getGuild(t)) throw new C.default({
        errorCode: g.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: i
        } = e, l = u.default.getGuild(t);
        if (null == l) return;
        let r = {
          guild: {
            id: l.id,
            name: l.name,
            icon_url: null !== (n = l.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s.isEqual(a, r) && i(r), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id));
        if (n) {
          let e = s.differenceBy(r, n, e => {
            let {
              userId: t
            } = e;
            return t
          });
          e.forEach(e => a((0, I.transformVoiceState)(l, i.id, e)))
        }
        return r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id)),
          u = s.differenceBy(n, r, e => {
            let {
              userId: t
            } = e;
            return t
          });
        return u.forEach(e => a((0, I.transformVoiceState)(l, i.id, e))), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id)).map(e => (0, I.transformVoiceState)(l, i.id, e)),
          u = s.differenceWith(r, n, s.isEqual);
        return u.forEach(e => a(e)), r
      }
    }
  },
  [g.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, I.getVoiceConnectionState)(f.default.getState()),
        hostname: f.default.getHostname(),
        pings: f.default.getPings(),
        average_ping: f.default.getAveragePing(),
        last_ping: f.default.getLastPing()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  },
  [g.RPCEvents.MESSAGE_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [g.RPCEvents.MESSAGE_UPDATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [g.RPCEvents.MESSAGE_DELETE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [g.RPCEvents.SPEAKING_START]: {
    [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, A.RPC_LOCAL_SCOPE],
    validation: O,
    handler: L
  },
  [g.RPCEvents.SPEAKING_STOP]: {
    [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, A.RPC_LOCAL_SCOPE],
    validation: O,
    handler: L
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
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.activityInstanceConnectedParticipantsUpdateEvent,
  [g.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INSTANCE_UPDATE]: {
    handler() {}
  },
  [g.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ALL]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [g.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: A.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [g.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, g.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: _.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, i.default)(a, t)) && n((0, m.default)(a.currentUser)), a
    }
  },
  [g.RPCEvents.LOBBY_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.LOBBY_DELETE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.LOBBY_MEMBER_CONNECT]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.LOBBY_MEMBER_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.LOBBY_MEMBER_DISCONNECT]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.LOBBY_MESSAGE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_AUTHENTICATED_SCOPE, A.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, A.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ANY]: [A.RPC_LOCAL_SCOPE, A.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: A.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [g.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ALL]: [A.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: i
      } = e, o = r.default.getStreamerActiveStreamMetadata(), u = (null == o ? void 0 : o.pid) != null ? E.default.getGameForPID(o.pid) : null, d = (null == u ? void 0 : u.id) != null ? l.default.getApplication(u.id) : null, c = null != d ? (0, p.default)(d) : null, f = null == o ? void 0 : o.sourceName, _ = {
        active: null != o,
        pid: null !== (t = null == o ? void 0 : o.pid) && void 0 !== t ? t : null,
        application: (n = null != c, n) ? {
          name: f
        } : null
      };
      return !s.isEqual(_, a) && i(_), _
    }
  },
  [g.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [A.RPC_SCOPE_CONFIG.ALL]: [A.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: c.default.isVideoEnabled()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  }
};
var M = v