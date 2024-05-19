"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("902704"),
  r = n("812206"),
  o = n("594190"),
  u = n("199902"),
  d = n("592125"),
  c = n("430824"),
  f = n("131951"),
  E = n("19780"),
  h = n("594174"),
  _ = n("979651"),
  C = n("996106"),
  m = n("914946"),
  S = n("238679"),
  p = n("452426"),
  g = n("295424"),
  I = n("863141"),
  T = n("186901"),
  A = n("981631");
let N = e => (0, p.default)(e).required().keys({
  channel_id: e.string().required()
});

function v(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: a
  } = e, s = d.default.getChannel(n);
  if (null == s || !(0, m.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default({
    errorCode: A.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default({
    errorCode: A.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let R = e => (0, p.default)(e).keys({
  channel_id: e.string().allow(null)
});

function O(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == d.default.getChannel(t)) throw new C.default({
    errorCode: A.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let L = {
  [A.RPCEvents.GUILD_STATUS]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, p.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == c.default.getGuild(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: l
        } = e, i = c.default.getGuild(t);
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
  [A.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, p.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == d.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = d.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(l.id));
        return n && s().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, m.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, p.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == d.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = d.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(l.id));
        return s().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, m.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, p.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == d.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = d.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(l.id)).map(e => (0, m.transformVoiceState)(i, l.id, e));
        return s().differenceWith(r, n, s().isEqual).forEach(e => a(e)), r
      }
    }
  },
  [A.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, m.getVoiceConnectionState)(E.default.getState()),
        hostname: E.default.getHostname(),
        pings: E.default.getPings(),
        average_ping: E.default.getAveragePing(),
        last_ping: E.default.getLastPing()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  },
  [A.RPCEvents.MESSAGE_CREATE]: {
    scope: l.OAuth2Scopes.RPC,
    validation: N,
    handler: v
  },
  [A.RPCEvents.MESSAGE_UPDATE]: {
    scope: l.OAuth2Scopes.RPC,
    validation: N,
    handler: v
  },
  [A.RPCEvents.MESSAGE_DELETE]: {
    scope: l.OAuth2Scopes.RPC,
    validation: N,
    handler: v
  },
  [A.RPCEvents.SPEAKING_START]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: R,
    handler: O
  },
  [A.RPCEvents.SPEAKING_STOP]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: R,
    handler: O
  },
  [A.RPCEvents.GUILD_CREATE]: {
    scope: l.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.CHANNEL_CREATE]: {
    scope: l.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.GAME_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: S.activityInstanceConnectedParticipantsUpdateEvent,
  [A.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: l.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [A.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: l.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {}
  },
  [A.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, l.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: h.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, i.default)(a, t)) && n((0, I.default)(a.currentUser)), a
    }
  },
  [A.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: T.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [A.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, l.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: l
      } = e, i = u.default.getStreamerActiveStreamMetadata(), d = (null == i ? void 0 : i.pid) != null ? o.default.getGameForPID(i.pid) : null, c = (null == d ? void 0 : d.id) != null ? r.default.getApplication(d.id) : null, f = null != c ? (0, g.default)(c) : null, E = null == i ? void 0 : i.sourceName, h = {
        active: null != i,
        pid: null !== (t = null == i ? void 0 : i.pid) && void 0 !== t ? t : null,
        application: (n = null != f, n) ? {
          name: E
        } : null
      };
      return !s().isEqual(h, a) && l(h), h
    }
  },
  [A.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, l.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: f.default.isVideoEnabled()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  }
};
t.default = L