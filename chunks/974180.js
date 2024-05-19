"use strict";
n.r(t), n.d(t, {
  MESSAGE_SOUND: function() {
    return X
  },
  MESSAGE_SOUND_VOLUME: function() {
    return j
  }
}), n("653041");
var l, i = n("149765"),
  a = n("442837"),
  u = n("433517"),
  s = n("570140"),
  d = n("493683"),
  o = n("475179"),
  r = n("749210"),
  f = n("292556"),
  c = n("287734"),
  T = n("802098"),
  _ = n("933557"),
  E = n("456269"),
  g = n("15274"),
  N = n("355298"),
  I = n("601992"),
  S = n("11352"),
  C = n("671105"),
  A = n("703656"),
  p = n("359110"),
  h = n("922482"),
  y = n("427679"),
  m = n("488131"),
  O = n("695346"),
  M = n("592125"),
  v = n("430824"),
  D = n("292959"),
  R = n("496675"),
  G = n("699516"),
  U = n("944486"),
  L = n("885110"),
  F = n("246946"),
  P = n("594174"),
  w = n("979651"),
  V = n("5192"),
  k = n("150097"),
  H = n("912101"),
  b = n("358085"),
  Y = n("74538"),
  B = n("557177"),
  x = n("51144"),
  W = n("981631"),
  J = n("765305"),
  Q = n("689938");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let X = "message1",
  j = .4,
  K = "discord_dismissed_notification_shown",
  z = document.hasFocus(),
  Z = null,
  $ = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  ee = new class {
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
      q(this, "_channels", {})
    }
  };

function et() {
  return !!(D.default.getDesktopType() === W.DesktopNotificationTypes.NEVER || L.default.getStatus() === W.StatusTypes.DND || O.FocusMode.getSetting()) || !1
}

function en(e) {
  return null != w.default.getVoiceStateForChannel(e)
}
class el extends(l = a.default.Store) {
  initialize() {
    this.waitFor(P.default, M.default, D.default, v.default, y.default, G.default, R.default, w.default, N.default)
  }
}
q(el, "displayName", "NotificationStore"), new el(s.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === W.NotificationPermissionTypes.ENABLED && !b.isPlatformEmbedded && H.default.showNotification(n("185672"), Q.default.Messages.NOTIFICATION_TITLE_DISCORD, Q.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: X,
      volume: j,
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
      trackingProps: i,
      options: a
    } = e;
    return !et() && (H.default.showNotification(t, n, l, i, a), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (z = e.focused) {
      let e = U.default.getChannelId();
      null != e && ee.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l, i, a;
    let {
      channelId: u,
      message: d,
      optimistic: r
    } = e;
    if (r) return !1;
    let c = M.default.getChannel(u),
      _ = P.default.getUser(null === (t = d.author) || void 0 === t ? void 0 : t.id),
      E = P.default.getCurrentUser();
    if (null == c || null == _ || c.isBroadcastChannel()) return !1;
    let g = (0, k.shouldNotify)(d, u, !z),
      N = D.default.getNotifyMessagesInSelectedChannel() && (0, k.shouldNotifyForSelectedChannel)(d, u);
    if (!g && !N || d.type === W.MessageTypes.CHANGELOG && (null == d.changelog_id || T.default.latestChangelogId() !== d.changelog_id)) return !1;
    let A = !D.default.isSoundDisabled(X),
      h = Y.default.canUseCustomNotificationSounds(E),
      y = S.CustomNotificationSoundExperiment.getCurrentConfig({
        location: "NotificationStore"
      }).enabled,
      m = h && y && A ? null !== (a = (0, C.getChannelCustomNotificationSound)(null !== (i = c.guild_id) && void 0 !== i ? i : W.ZERO_STRING_GUILD_ID, u)) && void 0 !== a ? a : (0, C.getGuildCustomNotificationSound)(c.guild_id) : void 0;
    if (N && (A && B.playSound("message3", .4, void 0, m), !z) || !g) return !1;
    let O = n("808506").default,
      v = n("237997").default;
    if (null != O.getFocusedPID() && v.getTextChatNotificationMode() === W.OverlayNotificationTextChatTypes.ENABLED && !F.default.disableNotifications) return !1;
    let {
      icon: R,
      title: G,
      body: U
    } = (0, k.makeTextChatNotification)(c, d, _);
    if (s.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: c.id,
        message: d,
        icon: R,
        title: G,
        body: U
      }), (0, I.trackMessageNotificationTimestamps)(d, c.guild_id), D.default.getDesktopType() === W.DesktopNotificationTypes.NEVER) return A && B.playSound(X, j, void 0, m), !1;
    let L = H.default.showNotification(R, G, U, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = d.author) || void 0 === l ? void 0 : l.id,
      message_id: d.id,
      message_type: d.type,
      channel_id: c.id,
      channel_type: c.type,
      guild_id: c.guild_id
    }, {
      omitViewTracking: !0,
      tag: d.id,
      sound: A ? X : void 0,
      soundpack: m,
      volume: j,
      onClick() {
        (0, p.transitionToChannel)(c.id), (c.type === W.ChannelTypes.GUILD_VOICE || c.type === W.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(c.id, !0), f.default.clickedNotification()
      }
    });
    null != L && ee.track(c.id, L)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && ee.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ee.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (et()) return !1;
    if (n.type === W.ActivityTypes.PLAYING) {
      let e = P.default.getUser(t);
      if (null == e) return !1;
      let l = x.default.getName(e),
        i = n.name,
        a = e.getAvatarURL(void 0, 128),
        u = Q.default.Messages.NOTIFICATION_TITLE_START_GAME,
        s = Q.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: i
        });
      return H.default.showNotification(a, u, s, {
        notif_type: "ACTIVITY_START",
        activity_type: W.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: i
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          d.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (et()) return;
    let n = P.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: i,
      guildId: a,
      suppress: u,
      requestToSpeakTimestamp: s
    } = l;
    if (null == i || null == a || !(!u && null != s)) return;
    let d = v.default.getGuild(a),
      o = M.default.getChannel(i),
      r = y.default.getStageInstanceByChannel(i);
    null != d && null != o && null != r && H.default.showNotification(d.getIconURL(128), o.name, Q.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, _.computeChannelName)(o, P.default, G.default),
      channelTopic: null == r ? void 0 : r.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (et() || !t.send_start_notification || en(t.channel_id)) return !1;
    let n = P.default.getCurrentUser(),
      l = v.default.getGuild(t.guild_id),
      a = M.default.getChannel(t.channel_id),
      u = P.default.getUser(t.host_id);
    if (null == n || null == a || null == l || null == u || !(0, k.shouldNotifyBase)(n, u, a) || !R.default.can(i.combine(W.Permissions.CONNECT, W.Permissions.VIEW_CHANNEL), a)) return !1;
    H.default.showNotification(l.getIconURL(128), Q.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: l.name
    }), Q.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: V.default.getName(l.id, a.id, u),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: a.id
    }, {
      onClick() {
        (0, h.connectAndOpen)(a)
      }
    })
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (et() || null == t.notification_type) return !1;
    t.notification_type === J.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === J.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === J.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (et()) return !1;
      let t = e.channel_id;
      if (null == t || en(t)) return !1;
      let n = P.default.getCurrentUser(),
        l = v.default.getGuild(e.guild_id),
        a = M.default.getChannel(e.channel_id),
        u = P.default.getUser(e.host_id);
      if (null == n || null == a || null == l || null == u || !R.default.can(i.combine(W.Permissions.CONNECT, W.Permissions.VIEW_CHANNEL), a)) return !1;
      H.default.showNotification(l.getIconURL(128), Q.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: l.name
      }), Q.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: V.default.getName(l.id, a.id, u)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: a.id
      }, {
        onClick() {
          e.entity_type === J.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, h.connectAndOpen)(a), e.entity_type === J.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(a.id)
        }
      })
    }(t) : t.entity_type === J.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (et()) return !1;
      let t = P.default.getCurrentUser(),
        n = v.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      H.default.showNotification(n.getIconURL(128), Q.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), Q.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          r.default.transitionToGuildSync(e.guild_id), (0, g.openGuildEventDetails)({
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
    if (et()) return !1;
    let i = M.default.getChannel(n.parent_id);
    if (null == i || !W.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, k.shouldNotifyForForumThreadCreation)(n, i, !z)) return !1;
    let {
      author: a,
      user: u
    } = (0, E.getForumPostAuthor)(n);
    if (null == u) return !1;
    let s = v.default.getGuild(i.guild_id);
    if (null == s) return !1;
    let d = Q.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: i.name,
        guildName: s.name
      }),
      o = Q.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : null == u ? void 0 : u.username
      }),
      r = u.getAvatarURL(void 0, 128);
    H.default.showNotification(r, d, o, {
      notif_type: "THREAD_CREATE",
      notif_user_id: u.id
    }, {
      onClick() {
        (0, m.openThreadSidebarForViewing)(n)
      }
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: i,
      trackingType: a,
      tag: u
    } = e;
    return !et() && null != n && null != l && null != a && (H.default.showNotification(t, n, l, {
      notif_type: a
    }, {
      onClick() {
        null != i && (0, A.transitionTo)(i)
      },
      tag: u
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, b.isWindows)(),
      t = (0, b.isLinux)();
    if (!(!u.Storage.get(K, !1) && b.isPlatformEmbedded && (e || t))) return !1;
    let l = !1;
    return null != Z && (l = $.includes(Z)), !!l && (H.default.showNotification(n("95045"), Q.default.Messages.NOTIFICATION_TITLE_DISCORD, Q.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, A.transitionTo)(W.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        u.Storage.set(K, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return u.Storage.remove(K), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    Z = t
  }
})