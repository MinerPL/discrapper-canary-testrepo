"use strict";
n.r(t), n.d(t, {
  MESSAGE_SOUND: function() {
    return H
  },
  MESSAGE_SOUND_VOLUME: function() {
    return k
  }
}), n("424973");
var l = n("316693"),
  a = n("446674"),
  s = n("95410"),
  i = n("913144"),
  r = n("450911"),
  o = n("255397"),
  u = n("851387"),
  d = n("193990"),
  c = n("987317"),
  f = n("679653"),
  h = n("680986"),
  C = n("374021"),
  p = n("288518"),
  m = n("637929"),
  E = n("393414"),
  g = n("144491"),
  I = n("716214"),
  S = n("834052"),
  _ = n("967241"),
  N = n("845579"),
  T = n("42203"),
  A = n("305961"),
  L = n("385649"),
  v = n("957255"),
  x = n("27618"),
  R = n("18494"),
  M = n("101125"),
  O = n("102985"),
  y = n("697218"),
  D = n("800762"),
  b = n("387111"),
  j = n("189771"),
  G = n("566673"),
  U = n("773336"),
  P = n("709681"),
  w = n("158998"),
  F = n("49111"),
  B = n("745049"),
  V = n("782340");
let H = "message1",
  k = .4,
  Y = "discord_dismissed_notification_shown",
  K = document.hasFocus(),
  W = null,
  Z = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  z = new class {
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
      this._channels = {}
    }
  };

function X() {
  return !!(L.default.getDesktopType() === F.DesktopNotificationTypes.NEVER || M.default.getStatus() === F.StatusTypes.DND || N.FocusMode.getSetting()) || !1
}

function Q(e) {
  let t = D.default.getVoiceStateForChannel(e);
  return null != t
}
class q extends a.default.Store {
  initialize() {
    this.waitFor(y.default, T.default, L.default, A.default, S.default, x.default, v.default, D.default, p.default)
  }
}
q.displayName = "NotificationStore", new q(i.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === F.NotificationPermissionTypes.ENABLED && !U.isPlatformEmbedded && G.default.showNotification(n("348044"), V.default.Messages.NOTIFICATION_TITLE_DISCORD, V.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: H,
      volume: k,
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
    return !X() && (G.default.showNotification(t, n, l, a, s), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (K = e.focused) {
      let e = R.default.getChannelId();
      null != e && z.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l;
    let {
      channelId: a,
      message: s,
      optimistic: r
    } = e;
    if (r) return !1;
    let u = T.default.getChannel(a),
      c = y.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
    if (null == u || null == c || u.isBroadcastChannel()) return !1;
    let f = (0, j.shouldNotify)(s, a, !K),
      h = L.default.getNotifyMessagesInSelectedChannel(),
      C = h && (0, j.shouldNotifyForSelectedChannel)(s, a);
    if (!f && !C) return !1;
    let p = !L.default.isSoundDisabled(H);
    if (C && (p && P.playSound("message3", .4), !K) || !f) return !1;
    let E = n("860957").default,
      I = n("901165").default;
    if (null != E.getFocusedPID() && I.getTextChatNotificationMode() === F.OverlayNotificationTextChatTypes.ENABLED && !O.default.disableNotifications) return !1;
    let {
      icon: S,
      title: _,
      body: N
    } = (0, j.makeTextChatNotification)(u, s, c);
    if (i.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: u.id,
        message: s,
        icon: S,
        title: _,
        body: N
      }), (0, m.trackMessageNotificationTimestamps)(s, u.guild_id), L.default.getDesktopType() === F.DesktopNotificationTypes.NEVER) return p && P.playSound(H, k), !1;
    let A = G.default.showNotification(S, _, N, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
      message_id: s.id,
      message_type: s.type,
      channel_id: u.id,
      channel_type: u.type,
      guild_id: u.guild_id
    }, {
      omitViewTracking: !0,
      tag: s.id,
      sound: p ? H : void 0,
      volume: k,
      onClick() {
        (0, g.transitionToChannel)(u.id), (u.type === F.ChannelTypes.GUILD_VOICE || u.type === F.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(u.id, !0), d.default.clickedNotification()
      }
    });
    null != A && z.track(u.id, A)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && z.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return z.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (X()) return !1;
    if (n.type === F.ActivityTypes.PLAYING) {
      let e = y.default.getUser(t);
      if (null == e) return !1;
      let l = w.default.getName(e),
        a = n.name,
        s = e.getAvatarURL(void 0, 128),
        i = V.default.Messages.NOTIFICATION_TITLE_START_GAME,
        o = V.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: a
        });
      return G.default.showNotification(s, i, o, {
        notif_type: "ACTIVITY_START",
        activity_type: F.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: a
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          r.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (X()) return;
    let n = y.default.getCurrentUser();
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
    let o = A.default.getGuild(s),
      u = T.default.getChannel(a),
      d = S.default.getStageInstanceByChannel(a);
    null != o && null != u && null != d && G.default.showNotification(o.getIconURL(128), u.name, V.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, f.computeChannelName)(u, y.default, x.default),
      channelTopic: null == d ? void 0 : d.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (X() || !t.send_start_notification || Q(t.channel_id)) return !1;
    let n = y.default.getCurrentUser(),
      a = A.default.getGuild(t.guild_id),
      s = T.default.getChannel(t.channel_id),
      i = y.default.getUser(t.host_id);
    if (null == n || null == s || null == a || null == i || !(0, j.shouldNotifyBase)(n, i, s) || !v.default.can(l.combine(F.Permissions.CONNECT, F.Permissions.VIEW_CHANNEL), s)) return !1;
    G.default.showNotification(a.getIconURL(128), V.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: a.name
    }), V.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: b.default.getName(a.id, s.id, i),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: a.id,
      channel_id: s.id
    }, {
      onClick() {
        (0, I.connectAndOpen)(s)
      }
    })
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (X() || null == t.notification_type) return !1;
    t.notification_type === B.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === B.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === B.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (X()) return !1;
      let t = e.channel_id;
      if (null == t || Q(t)) return !1;
      let n = y.default.getCurrentUser(),
        a = A.default.getGuild(e.guild_id),
        s = T.default.getChannel(e.channel_id),
        i = y.default.getUser(e.host_id);
      if (null == n || null == s || null == a || null == i || !v.default.can(l.combine(F.Permissions.CONNECT, F.Permissions.VIEW_CHANNEL), s)) return !1;
      G.default.showNotification(a.getIconURL(128), V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: a.name
      }), V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: b.default.getName(a.id, s.id, i)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: a.id,
        channel_id: s.id
      }, {
        onClick() {
          e.entity_type === B.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, I.connectAndOpen)(s), e.entity_type === B.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(s.id)
        }
      })
    }(t) : t.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (X()) return !1;
      let t = y.default.getCurrentUser(),
        n = A.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      G.default.showNotification(n.getIconURL(128), V.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), V.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          u.default.transitionToGuildSync(e.guild_id), (0, C.openGuildEventDetails)({
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
    if (X()) return !1;
    let a = T.default.getChannel(n.parent_id);
    if (null == a || !F.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, j.shouldNotifyForForumThreadCreation)(n, a, !K)) return !1;
    let {
      author: s,
      user: i
    } = (0, h.getForumPostAuthor)(n);
    if (null == i) return !1;
    let r = A.default.getGuild(a.guild_id);
    if (null == r) return !1;
    let o = V.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: a.name,
        guildName: r.name
      }),
      u = V.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == i ? void 0 : i.username
      }),
      d = i.getAvatarURL(void 0, 128);
    G.default.showNotification(d, o, u, {
      notif_type: "THREAD_CREATE",
      notif_user_id: i.id
    }, {
      onClick() {
        (0, _.openThreadSidebarForViewing)(n)
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
    return !X() && null != n && null != l && null != s && (G.default.showNotification(t, n, l, {
      notif_type: s
    }, {
      onClick() {
        null != a && (0, E.transitionTo)(a)
      },
      tag: i
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, U.isWindows)(),
      t = (0, U.isLinux)(),
      l = s.default.get(Y, !1),
      a = !l && U.isPlatformEmbedded && (e || t);
    if (!a) return !1;
    let i = !1;
    return null != W && (i = Z.includes(W)), !!i && (G.default.showNotification(n("599964"), V.default.Messages.NOTIFICATION_TITLE_DISCORD, V.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, E.transitionTo)(F.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        s.default.set(Y, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return s.default.remove(Y), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    W = t
  }
})