"use strict";
n.r(t), n.d(t, {
  MESSAGE_SOUND: function() {
    return Y
  },
  MESSAGE_SOUND_VOLUME: function() {
    return K
  }
}), n("653041");
var l, a = n("149765"),
  s = n("442837"),
  i = n("433517"),
  r = n("570140"),
  o = n("493683"),
  u = n("475179"),
  d = n("749210"),
  c = n("292556"),
  f = n("287734"),
  h = n("933557"),
  C = n("456269"),
  p = n("15274"),
  m = n("355298"),
  g = n("601992"),
  E = n("703656"),
  S = n("359110"),
  _ = n("922482"),
  I = n("427679"),
  N = n("488131"),
  T = n("695346"),
  A = n("592125"),
  L = n("430824"),
  v = n("292959"),
  x = n("496675"),
  R = n("699516"),
  M = n("944486"),
  O = n("885110"),
  y = n("246946"),
  D = n("594174"),
  b = n("979651"),
  j = n("5192"),
  G = n("150097"),
  U = n("912101"),
  P = n("358085"),
  w = n("557177"),
  F = n("51144"),
  B = n("981631"),
  V = n("765305"),
  H = n("689938");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let Y = "message1",
  K = .4,
  W = "discord_dismissed_notification_shown",
  Z = document.hasFocus(),
  z = null,
  X = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  Q = new class {
    track(e, t) {
      let n = this._channels[e];
      for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > 1;) {
        let e = n.shift();
        null != e && null != e.close && e.close()
      }
    }
    clearChannel(e) {
      let t = this._channels[e];
      null != t && (delete this._channels[e], t.forEach(e => e.close()))
    }
    constructor() {
      k(this, "_channels", {})
    }
  };

function q() {
  return !!(v.default.getDesktopType() === B.DesktopNotificationTypes.NEVER || O.default.getStatus() === B.StatusTypes.DND || T.FocusMode.getSetting()) || !1
}

function J(e) {
  return null != b.default.getVoiceStateForChannel(e)
}
class $ extends(l = s.default.Store) {
  initialize() {
    this.waitFor(D.default, A.default, v.default, L.default, I.default, R.default, x.default, b.default, m.default)
  }
}
k($, "displayName", "NotificationStore"), new $(r.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === B.NotificationPermissionTypes.ENABLED && !P.isPlatformEmbedded && U.default.showNotification(n("185672"), H.default.Messages.NOTIFICATION_TITLE_DISCORD, H.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: Y,
      volume: K,
      tag: "hello",
      onClick: () => {
        window.focus()
      }
    })
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      trackingProps: a,
      options: s
    } = e;
    return !q() && (U.default.showNotification(t, n, l, a, s), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (Z = e.focused) {
      let e = M.default.getChannelId();
      null != e && Q.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l;
    let {
      channelId: a,
      message: s,
      optimistic: i
    } = e;
    if (i) return !1;
    let o = A.default.getChannel(a),
      d = D.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
    if (null == o || null == d || o.isBroadcastChannel()) return !1;
    let f = (0, G.shouldNotify)(s, a, !Z),
      h = v.default.getNotifyMessagesInSelectedChannel() && (0, G.shouldNotifyForSelectedChannel)(s, a);
    if (!f && !h) return !1;
    let C = !v.default.isSoundDisabled(Y);
    if (h && (C && w.playSound("message3", .4), !Z) || !f) return !1;
    let p = n("808506").default,
      m = n("237997").default;
    if (null != p.getFocusedPID() && m.getTextChatNotificationMode() === B.OverlayNotificationTextChatTypes.ENABLED && !y.default.disableNotifications) return !1;
    let {
      icon: E,
      title: _,
      body: I
    } = (0, G.makeTextChatNotification)(o, s, d);
    if (r.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: o.id,
        message: s,
        icon: E,
        title: _,
        body: I
      }), (0, g.trackMessageNotificationTimestamps)(s, o.guild_id), v.default.getDesktopType() === B.DesktopNotificationTypes.NEVER) return C && w.playSound(Y, K), !1;
    let N = U.default.showNotification(E, _, I, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
      message_id: s.id,
      message_type: s.type,
      channel_id: o.id,
      channel_type: o.type,
      guild_id: o.guild_id
    }, {
      omitViewTracking: !0,
      tag: s.id,
      sound: C ? Y : void 0,
      volume: K,
      onClick() {
        (0, S.transitionToChannel)(o.id), (o.type === B.ChannelTypes.GUILD_VOICE || o.type === B.ChannelTypes.GUILD_STAGE_VOICE) && u.default.updateChatOpen(o.id, !0), c.default.clickedNotification()
      }
    });
    null != N && Q.track(o.id, N)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && Q.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return Q.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (q()) return !1;
    if (n.type === B.ActivityTypes.PLAYING) {
      let e = D.default.getUser(t);
      if (null == e) return !1;
      let l = F.default.getName(e),
        a = n.name,
        s = e.getAvatarURL(void 0, 128),
        i = H.default.Messages.NOTIFICATION_TITLE_START_GAME,
        r = H.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: a
        });
      return U.default.showNotification(s, i, r, {
        notif_type: "ACTIVITY_START",
        activity_type: B.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: a
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          o.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (q()) return;
    let n = D.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: a,
      guildId: s,
      suppress: i,
      requestToSpeakTimestamp: r
    } = l;
    if (null == a || null == s || !(!i && null != r)) return;
    let o = L.default.getGuild(s),
      u = A.default.getChannel(a),
      d = I.default.getStageInstanceByChannel(a);
    null != o && null != u && null != d && U.default.showNotification(o.getIconURL(128), u.name, H.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, h.computeChannelName)(u, D.default, R.default),
      channelTopic: null == d ? void 0 : d.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (q() || !t.send_start_notification || J(t.channel_id)) return !1;
    let n = D.default.getCurrentUser(),
      l = L.default.getGuild(t.guild_id),
      s = A.default.getChannel(t.channel_id),
      i = D.default.getUser(t.host_id);
    if (null == n || null == s || null == l || null == i || !(0, G.shouldNotifyBase)(n, i, s) || !x.default.can(a.combine(B.Permissions.CONNECT, B.Permissions.VIEW_CHANNEL), s)) return !1;
    U.default.showNotification(l.getIconURL(128), H.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: l.name
    }), H.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: j.default.getName(l.id, s.id, i),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: s.id
    }, {
      onClick() {
        (0, _.connectAndOpen)(s)
      }
    })
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (q() || null == t.notification_type) return !1;
    t.notification_type === V.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === V.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === V.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (q()) return !1;
      let t = e.channel_id;
      if (null == t || J(t)) return !1;
      let n = D.default.getCurrentUser(),
        l = L.default.getGuild(e.guild_id),
        s = A.default.getChannel(e.channel_id),
        i = D.default.getUser(e.host_id);
      if (null == n || null == s || null == l || null == i || !x.default.can(a.combine(B.Permissions.CONNECT, B.Permissions.VIEW_CHANNEL), s)) return !1;
      U.default.showNotification(l.getIconURL(128), H.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: l.name
      }), H.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: j.default.getName(l.id, s.id, i)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: s.id
      }, {
        onClick() {
          e.entity_type === V.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, _.connectAndOpen)(s), e.entity_type === V.GuildScheduledEventEntityTypes.VOICE && f.default.selectVoiceChannel(s.id)
        }
      })
    }(t) : t.entity_type === V.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (q()) return !1;
      let t = D.default.getCurrentUser(),
        n = L.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      U.default.showNotification(n.getIconURL(128), H.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), H.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          d.default.transitionToGuildSync(e.guild_id), (0, p.openGuildEventDetails)({
            eventId: e.id
          })
        }
      })
    }(t))
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n,
      isNewlyCreated: l
    } = e;
    if (q()) return !1;
    let a = A.default.getChannel(n.parent_id);
    if (null == a || !B.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, G.shouldNotifyForForumThreadCreation)(n, a, !Z)) return !1;
    let {
      author: s,
      user: i
    } = (0, C.getForumPostAuthor)(n);
    if (null == i) return !1;
    let r = L.default.getGuild(a.guild_id);
    if (null == r) return !1;
    let o = H.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: a.name,
        guildName: r.name
      }),
      u = H.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == i ? void 0 : i.username
      }),
      d = i.getAvatarURL(void 0, 128);
    U.default.showNotification(d, o, u, {
      notif_type: "THREAD_CREATE",
      notif_user_id: i.id
    }, {
      onClick() {
        (0, N.openThreadSidebarForViewing)(n)
      }
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: a,
      trackingType: s,
      tag: i
    } = e;
    return !q() && null != n && null != l && null != s && (U.default.showNotification(t, n, l, {
      notif_type: s
    }, {
      onClick() {
        null != a && (0, E.transitionTo)(a)
      },
      tag: i
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, P.isWindows)(),
      t = (0, P.isLinux)();
    if (!(!i.Storage.get(W, !1) && P.isPlatformEmbedded && (e || t))) return !1;
    let l = !1;
    return null != z && (l = X.includes(z)), !!l && (U.default.showNotification(n("95045"), H.default.Messages.NOTIFICATION_TITLE_DISCORD, H.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, E.transitionTo)(B.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        i.Storage.set(W, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return i.Storage.remove(W), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    z = t
  }
})