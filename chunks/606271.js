"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("442837"),
  i = n("570140"),
  r = n("317381"),
  o = n("573979"),
  u = n("592125"),
  d = n("271383"),
  c = n("430824"),
  f = n("157305"),
  E = n("851634"),
  h = n("131951"),
  _ = n("158776"),
  C = n("19780"),
  m = n("699516"),
  S = n("944486"),
  I = n("800599"),
  p = n("594174"),
  T = n("979651"),
  g = n("626135"),
  A = n("823379"),
  N = n("358085"),
  v = n("914946"),
  O = n("238679"),
  R = n("863141"),
  L = n("981631"),
  P = n("701488"),
  M = n("65154");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D {
  loadServer() {
    for (let e of (N.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t)
  }
  init() {
    this.rpcServer.getCurrentUser = () => p.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      i.default.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), g.default.track(L.AnalyticEvents.AUTHORIZED_APP_CONNECTED, {
        app_id: e.application.id,
        transport: e.transport
      })
    }, this.rpcServer.onDisconnect = (e, t) => {
      i.default.dispatch({
        type: "RPC_APP_DISCONNECTED",
        socketId: e.id,
        application: e.application,
        reason: t
      })
    };
    let e = [u.default, d.default, _.default, T.default, h.default, C.default];
    new l.BatchedStoreListener(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), i.default.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), i.default.subscribe("SPEAKING", e => this.handleSpeaking(e)), i.default.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), i.default.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), i.default.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), i.default.subscribe("LOGOUT", () => this.handleLogout()), i.default.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), i.default.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), i.default.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), i.default.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), i.default.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), i.default.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), i.default.subscribe("EMBEDDED_ACTIVITY_INSTANCE_CHANGE", e => this.handleActivityInstanceChange(e)), (0, O.subscribeToActivityInstanceConnectedParticipants)(e => this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), i.default.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), i.default.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), i.default.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), i.default.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), i.default.subscribe("LOBBY_UPDATE", e => this.handleLobbyUpdate(e)), i.default.subscribe("LOBBY_DELETE", e => this.handleLobbyDelete(e)), i.default.subscribe("LOBBY_MEMBER_CONNECT", e => this.handleLobbyMemberConnect(e)), i.default.subscribe("LOBBY_MEMBER_UPDATE", e => this.handleLobbyMemberUpdate(e)), i.default.subscribe("LOBBY_MEMBER_DISCONNECT", e => this.handleLobbyMemberDisconnect(e)), i.default.subscribe("LOBBY_MESSAGE", e => this.handleLobbyMessage(e)), i.default.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), i.default.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), i.default.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
  }
  handleMessage(e) {
    let t, n, a;
    if (0 === this.rpcServer.subscriptions.length) return;
    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
    let s = null;
    switch (e.type) {
      case "MESSAGE_CREATE":
        if ("SENDING" === e.message.state) return;
        t = L.RPCEvents.MESSAGE_CREATE, n = e.channelId, a = e.message, s = "".concat(t).concat(e.message.id);
        break;
      case "MESSAGE_UPDATE":
        t = L.RPCEvents.MESSAGE_UPDATE, n = e.message.channel_id, a = e.message;
        break;
      case "MESSAGE_DELETE":
        t = L.RPCEvents.MESSAGE_DELETE, n = e.channelId, a = {
          id: e.id
        }, s = "".concat(t).concat(e.id);
        break;
      default:
        return (0, A.assertNever)(e)
    }
    null != n && this.rpcServer.dispatchToSubscriptions(t, {
      channel_id: n
    }, {
      channel_id: n,
      message: (0, v.transformInternalTextMessage)(a)
    }, s)
  }
  handleSpeaking(e) {
    if (0 === this.rpcServer.subscriptions.length) return;
    let t = 0 !== e.speakingFlags ? L.RPCEvents.SPEAKING_START : L.RPCEvents.SPEAKING_STOP;
    if (e.context === M.MediaEngineContextTypes.DEFAULT) {
      let n = S.default.getVoiceChannelId();
      if (null != n) {
        let a = u.default.getChannel(n);
        if (null == a) return;
        let s = T.default.getVoiceState(a.getGuildId(), e.userId);
        if (null == s) return;
        this.rpcServer.dispatchToSubscriptions(t, {
          channel_id: s.channelId
        }, {
          channel_id: s.channelId,
          user_id: e.userId
        })
      }
    } else E.default.getLobbyIdsForUser(e.userId).forEach(n => {
      let a = f.default.getLobby(n);
      null != a && a.application_id === e.context && this.rpcServer.dispatchToSubscriptions(t, {}, {
        lobby_id: n,
        user_id: e.userId
      })
    })
  }
  handleVoiceChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.VOICE_CHANNEL_SELECT, {}, {
      channel_id: n,
      guild_id: t
    })
  }
  handleNotificationCreate(e) {
    let {
      channelId: t,
      message: n,
      icon: a,
      title: s,
      body: l
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.NOTIFICATION_CREATE, {}, {
      channel_id: t,
      message: (0, v.transformInternalTextMessage)(n),
      icon_url: null != a ? (0, v.getRemoteIconURL)(a) : null,
      title: s,
      body: l
    })
  }
  handleActivityJoin(e) {
    let {
      applicationId: t,
      secret: n,
      intent: a,
      embedded: s
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let l = {
      secret: n
    };
    s && (l.intent = a), this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_JOIN, e => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(L.RPCEvents.GAME_JOIN, e => e.socket.application.id === t, l)
  }
  handleActivityLayoutModeUpdate(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let a = n !== P.ActivityLayoutMode.FOCUSED;
    this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
      is_pip_mode: a
    });
    this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
      layout_mode: n
    })
  }
  handleThermalStateChange(e) {
    let {
      applicationId: t,
      rawThermalState: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length || null == t) return;
    let a = {
      thermal_state: (0, o.default)(n)
    };
    this.rpcServer.dispatchToSubscriptions(L.RPCEvents.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, a)
  }
  handleScreenOrientationUpdate(e) {
    let {
      screenOrientation: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let n = t === P.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
    this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ORIENTATION_UPDATE, {}, {
      screen_orientation: t,
      orientation: n
    })
  }
  handleActivityInstanceChange(e) {
    let {
      channelId: t,
      instanceId: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length || null == p.default.getCurrentUser()) return;
    let a = r.default.getSelfEmbeddedActivityForChannel(t);
    null != a && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_INSTANCE_UPDATE, e => e.socket.application.id === a.applicationId, {
      instance_id: n
    })
  }
  handleActivityMessage(e) {
    var t;
    let {
      channelId: n,
      message: a
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application: s,
      activity: l
    } = a;
    if (null == s || null == l || null == l.party_id) return;
    let i = p.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
    if (null == i) return;
    let r = p.default.getCurrentUser();
    if (null == r || i.id === r.id) return;
    let o = l.type === L.ActivityActionTypes.JOIN_REQUEST ? _.default.getApplicationActivity(r.id, s.id) : _.default.getApplicationActivity(i.id, s.id);
    if (null == o || null == o.party || o.party.id !== l.party_id) return;
    let u = o.application_id;
    switch (l.type) {
      case L.ActivityActionTypes.JOIN:
        this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_INVITE, e => e.socket.application.id === u, {
          user: (0, R.default)(i),
          activity: o,
          type: l.type,
          channel_id: n,
          message_id: a.id
        });
        break;
      case L.ActivityActionTypes.JOIN_REQUEST:
        this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === u, {
          user: (0, R.default)(i)
        })
    }
  }
  handleOAuth2TokenRevoke(e) {
    let {
      accessToken: t
    } = e;
    this.rpcServer.sockets.forEach(e => {
      e.authorization.accessToken === t && e.close(L.RPCCloseCodes.TOKEN_REVOKED, "Token revoked")
    })
  }
  handleGuildCreate(e) {
    let {
      guild: {
        id: t
      }
    } = e, n = c.default.getGuild(t);
    0 !== this.rpcServer.subscriptions.length && null != n && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.GUILD_CREATE, {}, {
      id: t,
      name: n.name
    })
  }
  handleChannelCreate(e) {
    let {
      channel: {
        id: t,
        name: n,
        type: a
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.CHANNEL_CREATE, {}, {
      id: t,
      name: n,
      type: a
    })
  }
  handleLogout() {
    this.rpcServer.sockets.forEach(e => e.close(L.RPCCloseCodes.CLOSE_NORMAL, "User logout"))
  }
  handleRelationshipAdd(e) {
    let {
      relationship: {
        id: t,
        type: n
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, v.transformRelationship)(n, t))
  }
  handleRelationshipRemove(e) {
    let {
      relationship: {
        id: t
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, v.transformRelationship)(L.RelationshipTypes.NONE, t))
  }
  handlePresenceUpdate(e) {
    let {
      updates: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && t.forEach(e => {
      let {
        guildId: t,
        user: {
          id: n
        }
      } = e;
      if (null != t) return;
      let a = m.default.getRelationshipType(n);
      a === L.RelationshipTypes.NONE && I.default.getUserAffinitiesUserIds().has(n) && (a = L.RelationshipTypes.IMPLICIT), a !== L.RelationshipTypes.NONE && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, v.transformRelationship)(a, n))
    })
  }
  handlePresencesReplace() {
    0 !== this.rpcServer.subscriptions.length && s().forEach(m.default.getRelationships(), (e, t) => {
      this.rpcServer.dispatchToSubscriptions(L.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, v.transformRelationship)(e, t))
    })
  }
  handleLobbyUpdate(e) {
    let {
      lobby: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_UPDATE, {}, t)
  }
  handleLobbyDelete(e) {
    let {
      lobbyId: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_DELETE, {}, {
      id: t
    })
  }
  handleLobbyMemberConnect(e) {
    let {
      lobbyId: t,
      member: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_MEMBER_CONNECT, {}, {
      lobby_id: t,
      member: n
    })
  }
  handleLobbyMemberUpdate(e) {
    let {
      lobbyId: t,
      member: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_MEMBER_UPDATE, {}, {
      lobby_id: t,
      member: n
    })
  }
  handleLobbyMemberDisconnect(e) {
    let {
      lobbyId: t,
      member: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_MEMBER_DISCONNECT, {}, {
      lobby_id: t,
      member: n
    })
  }
  handleLobbyMessage(e) {
    let {
      lobbyId: t,
      senderId: n,
      data: a
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.LOBBY_MESSAGE, {}, {
      lobby_id: t,
      sender_id: n,
      data: a
    })
  }
  handleEntitlementCreate(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleEntitlementDelete(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(L.RPCEvents.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleUserAchievementUpdate(e) {
    let {
      userAchievement: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application_id: n
    } = t;
    this.rpcServer.dispatchToSubscriptions(L.RPCEvents.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === n, {
      user_achievement: t
    })
  }
  constructor(e) {
    y(this, "rpcServer", void 0), y(this, "transports", void 0), y(this, "rpcCommandHandlers", void 0), y(this, "rpcEventHandlers", void 0), y(this, "stores", void 0), y(this, "registerTransportsForEmbeddedPlatform", void 0), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}