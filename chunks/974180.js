n.d(t, {
    Ay: function () {
        return X;
    },
    yk: function () {
        return J;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    u = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(493683),
    r = n(475179),
    d = n(749210),
    _ = n(292556),
    E = n(287734),
    c = n(802098),
    T = n(933557),
    I = n(456269),
    f = n(15274),
    g = n(355298),
    N = n(601992),
    S = n(11352),
    C = n(671105),
    A = n(703656),
    Z = n(359110),
    O = n(922482),
    h = n(427679),
    D = n(488131),
    v = n(695346),
    M = n(592125),
    p = n(430824),
    R = n(292959),
    m = n(496675),
    L = n(699516),
    U = n(944486),
    y = n(885110),
    G = n(246946),
    P = n(594174),
    F = n(979651),
    V = n(5192),
    w = n(150097),
    b = n(912101),
    k = n(358085),
    H = n(74538),
    Y = n(557177),
    B = n(51144),
    W = n(981631),
    x = n(765305),
    z = n(689938);
function q(e, t, n) {
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
let X = 'message1',
    J = 0.4,
    Q = 'discord_dismissed_notification_shown',
    K = document.hasFocus(),
    $ = null,
    j = new Set(),
    ee = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    et = new (class {
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
            q(this, '_channels', {});
        }
    })();
function en() {
    return !!(R.Z.getDesktopType() === W.qrD.NEVER || y.Z.getStatus() === W.Skl.DND || v.QZ.getSetting()) || !1;
}
function ei(e) {
    return null != F.Z.getVoiceStateForChannel(e);
}
class el extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(P.default, M.Z, R.Z, p.Z, h.Z, L.Z, m.Z, F.Z, g.Z);
    }
}
q(el, 'displayName', 'NotificationStore'),
    new el(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                      let { enabled: t } = e;
                      t === W.$Ab.ENABLED &&
                          !k.isPlatformEmbedded &&
                          b.Z.showNotification(
                              n(185672),
                              z.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                              z.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: X,
                                  volume: J,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (e) {
                      let { icon: t, title: n, body: i, trackingProps: l, options: u } = e;
                      return !en() && (b.Z.showNotification(t, n, i, l, u), !1);
                  },
                  WINDOW_FOCUS: function (e) {
                      if ((K = e.focused)) {
                          let e = U.Z.getChannelId();
                          null != e && et.clearChannel(e);
                      }
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, i, l, u;
                      let { channelId: a, message: o, optimistic: d } = e;
                      if (d) return !1;
                      let E = M.Z.getChannel(a),
                          T = P.default.getUser(null === (t = o.author) || void 0 === t ? void 0 : t.id),
                          I = P.default.getCurrentUser();
                      if (null == E || null == T || E.isBroadcastChannel()) return !1;
                      let f = (0, w.eF)(o, a, !K),
                          g = R.Z.getNotifyMessagesInSelectedChannel() && (0, w.N_)(o, a);
                      if ((!f && !g) || (o.type === W.uaV.CHANGELOG && (null == o.changelog_id || c.Z.latestChangelogId() !== o.changelog_id))) return !1;
                      let A = !R.Z.isSoundDisabled(X),
                          O = H.ZP.canUseCustomNotificationSounds(I),
                          h = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          D = O && h && A ? (null !== (u = (0, C.bb)(null !== (l = E.guild_id) && void 0 !== l ? l : W.aIL, a)) && void 0 !== u ? u : (0, C.iD)(E.guild_id)) : void 0;
                      if ((g && (A && Y.GN('message3', 0.4, void 0, D), !K)) || !f) return !1;
                      let v = n(808506).Z,
                          p = n(237997).Z;
                      if (null != v.getFocusedPID() && p.getTextChatNotificationMode() === W.Ypu.ENABLED && !G.Z.disableNotifications) return !1;
                      let { icon: m, title: L, body: U } = (0, w.Xi)(E, o, T);
                      if (
                          (s.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: E.id,
                              message: o,
                              icon: m,
                              title: L,
                              body: U
                          }),
                          (0, N.R)(o, E.guild_id),
                          R.Z.getDesktopType() === W.qrD.NEVER)
                      )
                          return A && Y.GN(X, J, void 0, D), !1;
                      let y = b.Z.showNotification(
                          m,
                          L,
                          U,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = o.author) || void 0 === i ? void 0 : i.id,
                              message_id: o.id,
                              message_type: o.type,
                              channel_id: E.id,
                              channel_type: E.type,
                              guild_id: E.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: o.id,
                              sound: A ? X : void 0,
                              soundpack: D,
                              volume: J,
                              onClick() {
                                  (0, Z.Kh)(E.id), (E.type === W.d4z.GUILD_VOICE || E.type === W.d4z.GUILD_STAGE_VOICE) && r.Z.updateChatOpen(E.id, !0), _.default.clickedNotification();
                              }
                          }
                      );
                      null != y && et.track(E.id, y);
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && et.clearChannel(t), !1;
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return et.clearChannel(t), !1;
                  },
                  ACTIVITY_START: function (e) {
                      let { userId: t, activity: n } = e;
                      if (en()) return !1;
                      if (n.type === W.IIU.PLAYING) {
                          let e = P.default.getUser(t);
                          if (null == e) return !1;
                          let i = B.ZP.getName(e),
                              l = n.name,
                              u = e.getAvatarURL(void 0, 128),
                              a = z.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                              s = z.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                                  username: i,
                                  gameName: l
                              });
                          return (
                              b.Z.showNotification(
                                  u,
                                  a,
                                  s,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: W.IIU.PLAYING,
                                      notif_user_id: t,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          o.Z.openPrivateChannel(t);
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
                      if (en()) return;
                      let n = P.default.getCurrentUser();
                      if (null == n) return;
                      let i = t.find((e) => e.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: u, suppress: a, requestToSpeakTimestamp: s } = i;
                      if (null == l || null == u || !(!a && null != s)) return;
                      let o = p.Z.getGuild(u),
                          r = M.Z.getChannel(l),
                          d = h.Z.getStageInstanceByChannel(l);
                      null != o &&
                          null != r &&
                          null != d &&
                          b.Z.showNotification(
                              o.getIconURL(128),
                              r.name,
                              z.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                                  channelName: (0, T.F6)(r, P.default, L.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (e) {
                      let { instance: t } = e;
                      if (en() || !t.send_start_notification || ei(t.channel_id)) return !1;
                      let n = P.default.getCurrentUser(),
                          i = p.Z.getGuild(t.guild_id),
                          u = M.Z.getChannel(t.channel_id),
                          a = P.default.getUser(t.host_id);
                      if (null == n || null == u || null == i || null == a || !(0, w.LL)(n, a, u) || !m.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), u) || j.has(t.id)) return !1;
                      j.add(t.id),
                          b.Z.showNotification(
                              i.getIconURL(128),
                              z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({ guildName: i.name }),
                              z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                                  username: V.ZP.getName(i.id, u.id, a),
                                  topic: t.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: u.id
                              },
                              {
                                  onClick() {
                                      (0, O.Cq)(u);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (e) {
                      let { instance: t } = e;
                      j.delete(t.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                      let { guildScheduledEvent: t } = e;
                      if (en() || null == t.notification_type) return !1;
                      t.notification_type === x.sy.EVENT_START &&
                          (t.entity_type === x.WX.STAGE_INSTANCE || t.entity_type === x.WX.VOICE
                              ? !(function (e) {
                                    if (en()) return !1;
                                    let t = e.channel_id;
                                    if (null == t || ei(t)) return !1;
                                    let n = P.default.getCurrentUser(),
                                        i = p.Z.getGuild(e.guild_id),
                                        u = M.Z.getChannel(e.channel_id),
                                        a = P.default.getUser(e.host_id);
                                    if (null == n || null == u || null == i || null == a || !m.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), u)) return !1;
                                    b.Z.showNotification(
                                        i.getIconURL(128),
                                        z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: i.name }),
                                        z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                                            topic: e.name,
                                            username: V.ZP.getName(i.id, u.id, a)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: u.id
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === x.WX.STAGE_INSTANCE && (0, O.Cq)(u), e.entity_type === x.WX.VOICE && E.default.selectVoiceChannel(u.id);
                                            }
                                        }
                                    );
                                })(t)
                              : t.entity_type === x.WX.EXTERNAL &&
                                !(function (e) {
                                    if (en()) return !1;
                                    let t = P.default.getCurrentUser(),
                                        n = p.Z.getGuild(e.guild_id);
                                    if (null == t || null == n) return !1;
                                    b.Z.showNotification(
                                        n.getIconURL(128),
                                        z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({ guildName: n.name }),
                                        z.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({ topic: e.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(e.guild_id), (0, f.bO)({ eventId: e.id });
                                            }
                                        }
                                    );
                                })(t));
                  },
                  THREAD_CREATE: function (e) {
                      var t;
                      let { channel: n, isNewlyCreated: i } = e;
                      if (en()) return !1;
                      let l = M.Z.getChannel(n.parent_id);
                      if (null == l || !W.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, w.FI)(n, l, !K)) return !1;
                      let { author: u, user: a } = (0, I.MC)(n);
                      if (null == a) return !1;
                      let s = p.Z.getGuild(l.guild_id);
                      if (null == s) return !1;
                      let o = z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                              channelName: l.name,
                              guildName: s.name
                          }),
                          r = z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                              channelName: n.name,
                              userUsername: null !== (t = null == u ? void 0 : u.nick) && void 0 !== t ? t : null == a ? void 0 : a.username
                          }),
                          d = a.getAvatarURL(void 0, 128);
                      b.Z.showNotification(
                          d,
                          o,
                          r,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, D.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                      let { icon: t, title: n, body: i, route: l, trackingType: u, tag: a } = e;
                      return (
                          !en() &&
                          null != n &&
                          null != i &&
                          null != u &&
                          (b.Z.showNotification(
                              t,
                              n,
                              i,
                              { notif_type: u },
                              {
                                  onClick() {
                                      null != l && (0, A.uL)(l);
                                  },
                                  tag: a
                              }
                          ),
                          !1)
                      );
                  },
                  WINDOW_HIDDEN: function () {
                      let e = (0, k.isWindows)(),
                          t = (0, k.isLinux)();
                      if (!(!a.K.get(Q, !1) && k.isPlatformEmbedded && (e || t))) return !1;
                      let i = !1;
                      return (
                          null != $ && (i = ee.includes($)),
                          !!i &&
                              (b.Z.showNotification(
                                  n(95045),
                                  z.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                                  z.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, A.uL)(W.Z5c.SETTINGS(e ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set(Q, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove(Q), !1;
                  },
                  CONNECTION_OPEN: function (e) {
                      let { countryCode: t, guilds: n } = e;
                      ($ = t), j.clear(), n.forEach((e) => e.stage_instances.forEach((e) => j.add(e.id)));
                  }
              }
    );
