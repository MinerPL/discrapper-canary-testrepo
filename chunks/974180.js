n.d(t, {
    Ay: function () {
        return J;
    },
    yk: function () {
        return Q;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    s = n(442837),
    o = n(433517),
    a = n(570140),
    u = n(493683),
    r = n(475179),
    d = n(749210),
    c = n(292556),
    _ = n(287734),
    E = n(802098),
    I = n(933557),
    f = n(456269),
    T = n(15274),
    N = n(754688),
    g = n(336197),
    C = n(355298),
    S = n(601992),
    A = n(11352),
    Z = n(671105),
    h = n(703656),
    O = n(359110),
    v = n(922482),
    m = n(427679),
    D = n(488131),
    p = n(695346),
    M = n(592125),
    R = n(430824),
    y = n(292959),
    L = n(496675),
    G = n(699516),
    U = n(944486),
    P = n(885110),
    F = n(246946),
    w = n(594174),
    b = n(979651),
    k = n(5192),
    V = n(150097),
    H = n(912101),
    Y = n(358085),
    B = n(74538),
    W = n(557177),
    x = n(51144),
    z = n(981631),
    q = n(765305),
    X = n(689938);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let J = 'message1',
    Q = 0.4,
    $ = 'discord_dismissed_notification_shown',
    j = document.hasFocus(),
    ee = null,
    et = new Set(),
    en = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    ei = new (class {
        track(e, t) {
            let n = this._channels[e];
            for (null == n && ((n = []), (this._channels[e] = n)), n.push(t); n.length > 1; ) {
                let e = n.shift();
                null != e && null != e.close && e.close();
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach((e) => e.close()));
        }
        constructor() {
            K(this, '_channels', {});
        }
    })();
function el() {
    return !!(y.Z.getDesktopType() === z.qrD.NEVER || P.Z.getStatus() === z.Skl.DND || p.QZ.getSetting()) || !1;
}
function es(e) {
    return null != b.Z.getVoiceStateForChannel(e);
}
class eo extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(w.default, M.Z, y.Z, R.Z, m.Z, G.Z, L.Z, b.Z, C.Z);
    }
}
K(eo, 'displayName', 'NotificationStore'),
    new eo(
        a.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t === z.$Ab.ENABLED &&
                          !Y.isPlatformEmbedded &&
                          H.Z.showNotification(
                              n(185672),
                              X.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                              X.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: J,
                                  volume: Q,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: s } = e;
                      return !el() && (H.Z.showNotification(t, n, i, l, s), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((j = e.focused)) {
                          let e = U.Z.getChannelId();
                          null != e && ei.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, s;
                      let { channelId: o, message: u, optimistic: d } = e;
                      if (d) return !1;
                      let _ = M.Z.getChannel(o),
                          I = w.default.getUser(null === (t = u.author) || void 0 === t ? void 0 : t.id),
                          f = w.default.getCurrentUser();
                      if (null == _ || null == I) return !1;
                      let T = (0, V.eF)(u, o, !j),
                          N = y.Z.getNotifyMessagesInSelectedChannel() && (0, V.N_)(u, o);
                      if ((!T && !N) || (u.type === z.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id))) return !1;
                      let g = !y.Z.isSoundDisabled(J),
                          C = B.ZP.canUseCustomNotificationSounds(f),
                          h = A.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          v = C && h && g ? (null !== (s = (0, Z.bb)(null !== (l = _.guild_id) && void 0 !== l ? l : z.aIL, o)) && void 0 !== s ? s : (0, Z.iD)(_.guild_id)) : void 0;
                      if ((N && (g && W.GN('message3', 0.4, void 0, v), !j)) || !T) return !1;
                      let m = n(808506).Z,
                          D = n(237997).Z;
                      if (null != m.getFocusedPID() && D.getTextChatNotificationMode() === z.Ypu.ENABLED && !F.Z.disableNotifications) return !1;
                      let { icon: p, title: R, body: L } = (0, V.Xi)(_, u, I);
                      if (
                          (a.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: _.id,
                              message: u,
                              icon: p,
                              title: R,
                              body: L
                          }),
                          (0, S.R)(u, _.guild_id),
                          y.Z.getDesktopType() === z.qrD.NEVER)
                      )
                          return g && W.GN(J, Q, void 0, v), !1;
                      let G = H.Z.showNotification(
                          p,
                          R,
                          L,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = u.author) || void 0 === i ? void 0 : i.id,
                              message_id: u.id,
                              message_type: u.type,
                              channel_id: _.id,
                              channel_type: _.type,
                              guild_id: _.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: u.id,
                              sound: g ? J : void 0,
                              soundpack: v,
                              volume: Q,
                              onClick() {
                                  (0, O.Kh)(_.id), (_.type === z.d4z.GUILD_VOICE || _.type === z.d4z.GUILD_STAGE_VOICE) && r.Z.updateChatOpen(_.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != G && ei.track(_.id, G);
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && ei.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return ei.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (el()) return !1;
                      if (n.type === z.IIU.PLAYING) {
                          let e = w.default.getUser(t);
                          if (null == e) return !1;
                          let i = x.ZP.getName(e),
                              l = n.name,
                              s = e.getAvatarURL(void 0, 128),
                              o = X.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                              a = X.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                                  username: i,
                                  gameName: l
                              });
                          return (
                              H.Z.showNotification(
                                  s,
                                  o,
                                  a,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: z.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          u.Z.openPrivateChannel(t);
                                      }
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (e) {
                      let { voiceStates: t } = e;
                      if (el()) return;
                      let n = w.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: s, suppress: o, requestToSpeakTimestamp: a } = i;
                      if (null == l || null == s || !(!o && null != a)) return;
                      let u = R.Z.getGuild(s),
                          r = M.Z.getChannel(l),
                          d = m.Z.getStageInstanceByChannel(l);
                      null != u &&
                          null != r &&
                          null != d &&
                          H.Z.showNotification(
                              u.getIconURL(128),
                              r.name,
                              X.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                                  channelName: (0, I.F6)(r, w.default, G.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (el() || !t.send_start_notification || es(t.channel_id)) return !1;
                      let n = w.default.getCurrentUser(),
                          i = R.Z.getGuild(t.guild_id),
                          s = M.Z.getChannel(t.channel_id),
                          o = w.default.getUser(t.host_id);
                      if (null == n || null == s || null == i || null == o || !(0, V.LL)(n, o, s) || !L.Z.can(l.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), s) || et.has(t.id)) return !1;
                      et.add(t.id),
                          H.Z.showNotification(
                              i.getIconURL(128),
                              X.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({ guildName: i.name }),
                              X.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                                  username: k.ZP.getName(i.id, s.id, o),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: s.id
                              },
                              {
                                  onClick() {
                                      (0, v.Cq)(s);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      et.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (el() || null == t.notification_type) return !1;
                      t.notification_type === q.sy.EVENT_START &&
                          (t.entity_type === q.WX.STAGE_INSTANCE || t.entity_type === q.WX.VOICE
                              ? !(function (e) {
                                    if (el()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || es(t)) return !1;
                                    let n = w.default.getCurrentUser(),
                                        i = R.Z.getGuild(e.guild_id),
                                        s = M.Z.getChannel(e.channel_id),
                                        o = w.default.getUser(e.host_id);
                                    if (null == n || null == s || null == i || null == o || !L.Z.can(l.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), s)) return !1;
                                    H.Z.showNotification(
                                        i.getIconURL(128),
                                        X.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: i.name }),
                                        X.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                                            topic: e.name,
                                            username: k.ZP.getName(i.id, s.id, o)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: s.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === q.WX.STAGE_INSTANCE && (0, v.Cq)(s), e.entity_type === q.WX.VOICE && _.default.selectVoiceChannel(s.id);
                                            }
                                        }
                                    );
                                })(t)
                              : t.entity_type === q.WX.EXTERNAL &&
                                !(function (e) {
                                    if (el()) return !1;
                                    let t = w.default.getCurrentUser(),
                                        n = R.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    H.Z.showNotification(
                                        n.getIconURL(128),
                                        X.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: n.name }),
                                        X.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({ topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(e.guild_id), (0, T.bO)({ eventId: e.id });
                                            }
                                        }
                                    );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (el()) return !1;
                      let l = M.Z.getChannel(n.parent_id);
                      if (null == l || !z.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, V.FI)(n, l, !j)) return !1;
                      let { author: s, user: o } = (0, f.MC)(n);
                      if (null == o) return !1;
                      let a = R.Z.getGuild(l.guild_id);
                      if (null == a) return !1;
                      let u = X.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                              channelName: l.name,
                              guildName: a.name
                          }),
                          r = X.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                              channelName: n.name,
                              userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == o ? void 0 : o.username
                          }),
                          d = o.getAvatarURL(void 0, 128);
                      H.Z.showNotification(
                          d,
                          u,
                          r,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: o.id
                          },
                          {
                              onClick() {
                                  (0, D.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let t,
                          { icon: n, title: i, body: l, route: s, trackingType: o, tag: a } = e;
                      if (el() || null == i || null == l || null == o) return !1;
                      if ('reactions_push_notification' === o) {
                          var u;
                          let e =
                              null !== (u = (0, N.Qj)(s)) && void 0 !== u
                                  ? u
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (t = e.channelId) || null == e.guildId || (U.Z.getCurrentlySelectedChannelId() === t && j)) return !1;
                      }
                      let r = H.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: o },
                          {
                              onClick() {
                                  null != s && ((0, g.Z)(s), c.default.clickedNotification());
                              },
                              tag: a
                          }
                      );
                      null != r && null != t && ei.track(t, r);
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, Y.isWindows)(),
                          t = (0, Y.isLinux)();
                      if (!(!o.K.get($, !1) && Y.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != ee && (i = en.includes(ee)),
                          !!i &&
                              (H.Z.showNotification(
                                  n(95045),
                                  X.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                                  X.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, h.uL)(z.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          o.K.set($, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return o.K.remove($), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      (ee = t), et.clear(), n.forEach((e) => e.stage_instances.forEach((e) => et.add(e.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (e) {
                      let { savedMessage: t } = e;
                      if (el()) return !1;
                      let n = t.message;
                      if (null == n || null == n.author) return !1;
                      let i = M.Z.getChannel(t.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: s } = (0, V.Xi)(i, n, n.author);
                      H.Z.showNotification(
                          l,
                          X.Z.Messages.MESSAGE_REMINDER_DESKTOP_NOTIFICATION_TITLE,
                          s,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, g.Z)(z.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              }
                          }
                      );
                  }
              }
    );
