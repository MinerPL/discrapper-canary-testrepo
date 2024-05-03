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
  d = n("570140"),
  s = n("493683"),
  o = n("475179"),
  r = n("749210"),
  f = n("292556"),
  c = n("287734"),
  T = n("933557"),
  _ = n("456269"),
  E = n("15274"),
  N = n("355298"),
  I = n("601992"),
  g = n("11352"),
  C = n("671105"),
  S = n("703656"),
  A = n("359110"),
  h = n("922482"),
  p = n("427679"),
  m = n("488131"),
  O = n("695346"),
  y = n("592125"),
  M = n("430824"),
  v = n("292959"),
  D = n("496675"),
  R = n("699516"),
  G = n("944486"),
  U = n("885110"),
  L = n("246946"),
  F = n("594174"),
  P = n("979651"),
  w = n("5192"),
  V = n("150097"),
  k = n("912101"),
  H = n("358085"),
  b = n("74538"),
  Y = n("557177"),
  B = n("51144"),
  x = n("981631"),
  W = n("765305"),
  J = n("689938");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let X = "message1",
  j = .4,
  q = "discord_dismissed_notification_shown",
  K = document.hasFocus(),
  z = null,
  Z = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  $ = new class {
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
      Q(this, "_channels", {})
    }
  };

function ee() {
  return !!(v.default.getDesktopType() === x.DesktopNotificationTypes.NEVER || U.default.getStatus() === x.StatusTypes.DND || O.FocusMode.getSetting()) || !1
}

function et(e) {
  return null != P.default.getVoiceStateForChannel(e)
}
class en extends(l = a.default.Store) {
  initialize() {
    this.waitFor(F.default, y.default, v.default, M.default, p.default, R.default, D.default, P.default, N.default)
  }
}
Q(en, "displayName", "NotificationStore"), new en(d.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === x.NotificationPermissionTypes.ENABLED && !H.isPlatformEmbedded && k.default.showNotification(n("185672"), J.default.Messages.NOTIFICATION_TITLE_DISCORD, J.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
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
    return !ee() && (k.default.showNotification(t, n, l, i, a), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (K = e.focused) {
      let e = G.default.getChannelId();
      null != e && $.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l, i, a;
    let {
      channelId: u,
      message: s,
      optimistic: r
    } = e;
    if (r) return !1;
    let c = y.default.getChannel(u),
      T = F.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id),
      _ = F.default.getCurrentUser();
    if (null == c || null == T || c.isBroadcastChannel()) return !1;
    let E = (0, V.shouldNotify)(s, u, !K),
      N = v.default.getNotifyMessagesInSelectedChannel() && (0, V.shouldNotifyForSelectedChannel)(s, u);
    if (!E && !N) return !1;
    let S = !v.default.isSoundDisabled(X),
      h = b.default.canUseCustomNotificationSounds(_),
      p = g.CustomNotificationSoundExperiment.getCurrentConfig({
        location: "NotificationStore"
      }).enabled,
      m = h && p && S ? null !== (a = (0, C.getChannelCustomNotificationSound)(null !== (i = c.guild_id) && void 0 !== i ? i : x.ZERO_STRING_GUILD_ID, u)) && void 0 !== a ? a : (0, C.getGuildCustomNotificationSound)(c.guild_id) : void 0;
    if (N && (S && Y.playSound("message3", .4, void 0, m), !K) || !E) return !1;
    let O = n("808506").default,
      M = n("237997").default;
    if (null != O.getFocusedPID() && M.getTextChatNotificationMode() === x.OverlayNotificationTextChatTypes.ENABLED && !L.default.disableNotifications) return !1;
    let {
      icon: D,
      title: R,
      body: G
    } = (0, V.makeTextChatNotification)(c, s, T);
    if (d.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: c.id,
        message: s,
        icon: D,
        title: R,
        body: G
      }), (0, I.trackMessageNotificationTimestamps)(s, c.guild_id), v.default.getDesktopType() === x.DesktopNotificationTypes.NEVER) return S && Y.playSound(X, j, void 0, m), !1;
    let U = k.default.showNotification(D, R, G, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
      message_id: s.id,
      message_type: s.type,
      channel_id: c.id,
      channel_type: c.type,
      guild_id: c.guild_id
    }, {
      omitViewTracking: !0,
      tag: s.id,
      sound: S ? X : void 0,
      soundpack: m,
      volume: j,
      onClick() {
        (0, A.transitionToChannel)(c.id), (c.type === x.ChannelTypes.GUILD_VOICE || c.type === x.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(c.id, !0), f.default.clickedNotification()
      }
    });
    null != U && $.track(c.id, U)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && $.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return $.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (ee()) return !1;
    if (n.type === x.ActivityTypes.PLAYING) {
      let e = F.default.getUser(t);
      if (null == e) return !1;
      let l = B.default.getName(e),
        i = n.name,
        a = e.getAvatarURL(void 0, 128),
        u = J.default.Messages.NOTIFICATION_TITLE_START_GAME,
        d = J.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: i
        });
      return k.default.showNotification(a, u, d, {
        notif_type: "ACTIVITY_START",
        activity_type: x.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: i
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          s.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (ee()) return;
    let n = F.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: i,
      guildId: a,
      suppress: u,
      requestToSpeakTimestamp: d
    } = l;
    if (null == i || null == a || !(!u && null != d)) return;
    let s = M.default.getGuild(a),
      o = y.default.getChannel(i),
      r = p.default.getStageInstanceByChannel(i);
    null != s && null != o && null != r && k.default.showNotification(s.getIconURL(128), o.name, J.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, T.computeChannelName)(o, F.default, R.default),
      channelTopic: null == r ? void 0 : r.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (ee() || !t.send_start_notification || et(t.channel_id)) return !1;
    let n = F.default.getCurrentUser(),
      l = M.default.getGuild(t.guild_id),
      a = y.default.getChannel(t.channel_id),
      u = F.default.getUser(t.host_id);
    if (null == n || null == a || null == l || null == u || !(0, V.shouldNotifyBase)(n, u, a) || !D.default.can(i.combine(x.Permissions.CONNECT, x.Permissions.VIEW_CHANNEL), a)) return !1;
    k.default.showNotification(l.getIconURL(128), J.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: l.name
    }), J.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: w.default.getName(l.id, a.id, u),
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
    if (ee() || null == t.notification_type) return !1;
    t.notification_type === W.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === W.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === W.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (ee()) return !1;
      let t = e.channel_id;
      if (null == t || et(t)) return !1;
      let n = F.default.getCurrentUser(),
        l = M.default.getGuild(e.guild_id),
        a = y.default.getChannel(e.channel_id),
        u = F.default.getUser(e.host_id);
      if (null == n || null == a || null == l || null == u || !D.default.can(i.combine(x.Permissions.CONNECT, x.Permissions.VIEW_CHANNEL), a)) return !1;
      k.default.showNotification(l.getIconURL(128), J.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: l.name
      }), J.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: w.default.getName(l.id, a.id, u)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: a.id
      }, {
        onClick() {
          e.entity_type === W.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, h.connectAndOpen)(a), e.entity_type === W.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(a.id)
        }
      })
    }(t) : t.entity_type === W.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (ee()) return !1;
      let t = F.default.getCurrentUser(),
        n = M.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      k.default.showNotification(n.getIconURL(128), J.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), J.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          r.default.transitionToGuildSync(e.guild_id), (0, E.openGuildEventDetails)({
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
    if (ee()) return !1;
    let i = y.default.getChannel(n.parent_id);
    if (null == i || !x.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, V.shouldNotifyForForumThreadCreation)(n, i, !K)) return !1;
    let {
      author: a,
      user: u
    } = (0, _.getForumPostAuthor)(n);
    if (null == u) return !1;
    let d = M.default.getGuild(i.guild_id);
    if (null == d) return !1;
    let s = J.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: i.name,
        guildName: d.name
      }),
      o = J.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : null == u ? void 0 : u.username
      }),
      r = u.getAvatarURL(void 0, 128);
    k.default.showNotification(r, s, o, {
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
    return !ee() && null != n && null != l && null != a && (k.default.showNotification(t, n, l, {
      notif_type: a
    }, {
      onClick() {
        null != i && (0, S.transitionTo)(i)
      },
      tag: u
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, H.isWindows)(),
      t = (0, H.isLinux)();
    if (!(!u.Storage.get(q, !1) && H.isPlatformEmbedded && (e || t))) return !1;
    let l = !1;
    return null != z && (l = Z.includes(z)), !!l && (k.default.showNotification(n("95045"), J.default.Messages.NOTIFICATION_TITLE_DISCORD, J.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, S.transitionTo)(x.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        u.Storage.set(q, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return u.Storage.remove(q), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    z = t
  }
})