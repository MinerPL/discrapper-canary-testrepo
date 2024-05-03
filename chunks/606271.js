"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("442837"),
  i = n("570140"),
  r = n("573979"),
  o = n("592125"),
  u = n("271383"),
  d = n("430824"),
  c = n("131951"),
  f = n("158776"),
  E = n("19780"),
  h = n("699516"),
  _ = n("944486"),
  C = n("800599"),
  S = n("594174"),
  m = n("979651"),
  p = n("626135"),
  I = n("823379"),
  T = n("358085"),
  g = n("914946"),
  A = n("238679"),
  N = n("863141"),
  v = n("981631"),
  R = n("701488"),
  L = n("65154");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M {
  loadServer() {
    for (let e of (T.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t)
  }
  init() {
    this.rpcServer.getCurrentUser = () => S.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      i.default.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), p.default.track(v.AnalyticEvents.AUTHORIZED_APP_CONNECTED, {
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
    let e = [o.default, u.default, f.default, m.default, c.default, E.default];
    new l.BatchedStoreListener(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), i.default.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), i.default.subscribe("SPEAKING", e => this.handleSpeaking(e)), i.default.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), i.default.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), i.default.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), i.default.subscribe("LOGOUT", () => this.handleLogout()), i.default.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), i.default.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), i.default.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), i.default.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), i.default.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), i.default.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), (0, A.subscribeToActivityInstanceConnectedParticipants)(e => this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), i.default.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), i.default.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), i.default.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), i.default.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), i.default.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), i.default.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), i.default.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
  }
  handleMessage(e) {
    let t, n, a;
    if (0 === this.rpcServer.subscriptions.length) return;
    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
    let s = null;
    switch (e.type) {
      case "MESSAGE_CREATE":
        if ("SENDING" === e.message.state) return;
        t = v.RPCEvents.MESSAGE_CREATE, n = e.channelId, a = e.message, s = "".concat(t).concat(e.message.id);
        break;
      case "MESSAGE_UPDATE":
        t = v.RPCEvents.MESSAGE_UPDATE, n = e.message.channel_id, a = e.message;
        break;
      case "MESSAGE_DELETE":
        t = v.RPCEvents.MESSAGE_DELETE, n = e.channelId, a = {
          id: e.id
        }, s = "".concat(t).concat(e.id);
        break;
      default:
        return (0, I.assertNever)(e)
    }
    null != n && this.rpcServer.dispatchToSubscriptions(t, {
      channel_id: n
    }, {
      channel_id: n,
      message: (0, g.transformInternalTextMessage)(a)
    }, s)
  }
  handleSpeaking(e) {
    if (0 === this.rpcServer.subscriptions.length) return;
    let t = 0 !== e.speakingFlags ? v.RPCEvents.SPEAKING_START : v.RPCEvents.SPEAKING_STOP;
    if (e.context === L.MediaEngineContextTypes.DEFAULT) {
      let n = _.default.getVoiceChannelId();
      if (null != n) {
        let a = o.default.getChannel(n);
        if (null == a) return;
        let s = m.default.getVoiceState(a.getGuildId(), e.userId);
        if (null == s) return;
        this.rpcServer.dispatchToSubscriptions(t, {
          channel_id: s.channelId
        }, {
          channel_id: s.channelId,
          user_id: e.userId
        })
      }
    }
  }
  handleVoiceChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.VOICE_CHANNEL_SELECT, {}, {
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
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.NOTIFICATION_CREATE, {}, {
      channel_id: t,
      message: (0, g.transformInternalTextMessage)(n),
      icon_url: null != a ? (0, g.getRemoteIconURL)(a) : null,
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
    s && (l.intent = a), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN, e => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GAME_JOIN, e => e.socket.application.id === t, l)
  }
  handleActivityLayoutModeUpdate(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let a = n !== R.ActivityLayoutMode.FOCUSED;
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
      is_pip_mode: a
    });
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
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
      thermal_state: (0, r.default)(n)
    };
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, a)
  }
  handleScreenOrientationUpdate(e) {
    let {
      screenOrientation: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let n = t === R.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ORIENTATION_UPDATE, {}, {
      screen_orientation: t,
      orientation: n
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
    let i = S.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
    if (null == i) return;
    let r = S.default.getCurrentUser();
    if (null == r || i.id === r.id) return;
    let o = l.type === v.ActivityActionTypes.JOIN_REQUEST ? f.default.getApplicationActivity(r.id, s.id) : f.default.getApplicationActivity(i.id, s.id);
    if (null == o || null == o.party || o.party.id !== l.party_id) return;
    let u = o.application_id;
    switch (l.type) {
      case v.ActivityActionTypes.JOIN:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INVITE, e => e.socket.application.id === u, {
          user: (0, N.default)(i),
          activity: o,
          type: l.type,
          channel_id: n,
          message_id: a.id
        });
        break;
      case v.ActivityActionTypes.JOIN_REQUEST:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === u, {
          user: (0, N.default)(i)
        })
    }
  }
  handleOAuth2TokenRevoke(e) {
    let {
      accessToken: t
    } = e;
    this.rpcServer.sockets.forEach(e => {
      e.authorization.accessToken === t && e.close(v.RPCCloseCodes.TOKEN_REVOKED, "Token revoked")
    })
  }
  handleGuildCreate(e) {
    let {
      guild: {
        id: t
      }
    } = e, n = d.default.getGuild(t);
    0 !== this.rpcServer.subscriptions.length && null != n && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GUILD_CREATE, {}, {
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
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.CHANNEL_CREATE, {}, {
      id: t,
      name: n,
      type: a
    })
  }
  handleLogout() {
    this.rpcServer.sockets.forEach(e => e.close(v.RPCCloseCodes.CLOSE_NORMAL, "User logout"))
  }
  handleRelationshipAdd(e) {
    let {
      relationship: {
        id: t,
        type: n
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(n, t))
  }
  handleRelationshipRemove(e) {
    let {
      relationship: {
        id: t
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(v.RelationshipTypes.NONE, t))
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
      let a = h.default.getRelationshipType(n);
      a === v.RelationshipTypes.NONE && C.default.getUserAffinitiesUserIds().has(n) && (a = v.RelationshipTypes.IMPLICIT), a !== v.RelationshipTypes.NONE && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(a, n))
    })
  }
  handlePresencesReplace() {
    0 !== this.rpcServer.subscriptions.length && s().forEach(h.default.getRelationships(), (e, t) => {
      this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(e, t))
    })
  }
  handleEntitlementCreate(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleEntitlementDelete(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
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
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === n, {
      user_achievement: t
    })
  }
  constructor(e) {
    O(this, "rpcServer", void 0), O(this, "transports", void 0), O(this, "rpcCommandHandlers", void 0), O(this, "rpcEventHandlers", void 0), O(this, "stores", void 0), O(this, "registerTransportsForEmbeddedPlatform", void 0), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}