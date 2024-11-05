n.d(e, {
    Ay: function () {
        return j;
    },
    yk: function () {
        return Q;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(149765),
    o = n(442837),
    a = n(433517),
    u = n(570140),
    r = n(493683),
    s = n(475179),
    d = n(749210),
    c = n(292556),
    f = n(287734),
    g = n(802098),
    E = n(933557),
    _ = n(456269),
    N = n(15274),
    I = n(754688),
    h = n(336197),
    p = n(355298),
    T = n(601992),
    S = n(11352),
    C = n(671105),
    m = n(106371),
    v = n(703656),
    Z = n(359110),
    A = n(922482),
    y = n(427679),
    P = n(488131),
    R = n(695346),
    b = n(592125),
    O = n(430824),
    D = n(292959),
    U = n(496675),
    G = n(699516),
    L = n(944486),
    k = n(885110),
    w = n(246946),
    M = n(594174),
    F = n(979651),
    V = n(5192),
    W = n(150097),
    H = n(912101),
    q = n(358085),
    x = n(74538),
    z = n(557177),
    Y = n(51144),
    B = n(981631),
    X = n(765305),
    J = n(388032);
function K(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let j = 'message1',
    Q = 0.4,
    $ = 'discord_dismissed_notification_shown',
    tt = document.hasFocus(),
    te = null,
    tn = new Set(),
    ti = ['FR', 'GF', 'PF', 'TF', 'RE', 'GP', 'MQ', 'YT', 'NC', 'PM', 'WF'],
    tl = new (class {
        track(t, e) {
            let n = this._channels[t];
            for (null == n && ((n = []), (this._channels[t] = n)), n.push(e); n.length > 1; ) {
                let t = n.shift();
                null != t && null != t.close && t.close();
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e && (delete this._channels[t], e.forEach((t) => t.close()));
        }
        constructor() {
            K(this, '_channels', {});
        }
    })();
function to() {
    return !!(D.Z.getDesktopType() === B.qrD.NEVER || k.Z.getStatus() === B.Skl.DND || R.QZ.getSetting()) || !1;
}
function ta(t) {
    return null != F.Z.getVoiceStateForChannel(t);
}
class tu extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(M.default, b.Z, D.Z, O.Z, y.Z, G.Z, U.Z, F.Z, p.Z);
    }
}
K(tu, 'displayName', 'NotificationStore'),
    new tu(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                      let { enabled: e } = t;
                      e === B.$Ab.ENABLED &&
                          !q.isPlatformEmbedded &&
                          H.Z.showNotification(
                              n(185672),
                              J.intl.string(J.t.VSgOVl),
                              J.intl.string(J.t['1UJvqa']),
                              { notif_type: 'NOTIFICATIONS_SET_PERMISSION_STATE' },
                              {
                                  omitViewTracking: !0,
                                  sound: j,
                                  volume: Q,
                                  tag: 'hello',
                                  onClick: () => {
                                      window.focus();
                                  }
                              }
                          );
                  },
                  NOTIFICATION_CREATE: function (t) {
                      let { icon: e, title: n, body: i, trackingProps: l, options: o } = t;
                      return !to() && (H.Z.showNotification(e, n, i, l, o), !1);
                  },
                  WINDOW_FOCUS: function (t) {
                      if ((tt = t.focused)) {
                          let t = L.Z.getChannelId();
                          null != t && tl.clearChannel(t);
                      }
                  },
                  MESSAGE_CREATE: function (t) {
                      var e, i, l, o;
                      let { channelId: a, message: r, optimistic: d } = t;
                      if (d) return !1;
                      let f = b.Z.getChannel(a),
                          E = M.default.getUser(null === (e = r.author) || void 0 === e ? void 0 : e.id),
                          _ = M.default.getCurrentUser();
                      if (null == f || null == E) return !1;
                      let N = (0, W.eF)(r, a, !tt),
                          I = D.Z.getNotifyMessagesInSelectedChannel() && (0, W.N_)(r, a);
                      if ((!N && !I) || (r.type === B.uaV.CHANGELOG && (null == r.changelog_id || g.Z.latestChangelogId() !== r.changelog_id))) return !1;
                      let h = !D.Z.isSoundDisabled(j),
                          p = x.ZP.canUseCustomNotificationSounds(_),
                          m = S.Y.getCurrentConfig({ location: 'NotificationStore' }).enabled,
                          v = p && m && h ? (null !== (o = (0, C.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : B.aIL, a)) && void 0 !== o ? o : (0, C.iD)(f.guild_id)) : void 0;
                      if ((I && (h && z.GN('message3', 0.4, void 0, v), !tt)) || !N) return !1;
                      let A = n(808506).Z,
                          y = n(237997).Z;
                      if (null != A.getFocusedPID() && y.getTextChatNotificationMode() === B.Ypu.ENABLED && !w.Z.disableNotifications) return !1;
                      let { icon: P, title: R, body: O } = (0, W.Xi)(f, r, E);
                      if (
                          (u.Z.dispatch({
                              type: 'RPC_NOTIFICATION_CREATE',
                              channelId: f.id,
                              message: r,
                              icon: P,
                              title: R,
                              body: O
                          }),
                          (0, T.R)(r, f.guild_id),
                          D.Z.getDesktopType() === B.qrD.NEVER)
                      )
                          return h && z.GN(j, Q, void 0, v), !1;
                      let U = H.Z.showNotification(
                          P,
                          R,
                          O,
                          {
                              notif_type: 'MESSAGE_CREATE',
                              notif_user_id: null === (i = r.author) || void 0 === i ? void 0 : i.id,
                              message_id: r.id,
                              message_type: r.type,
                              channel_id: f.id,
                              channel_type: f.type,
                              guild_id: f.guild_id
                          },
                          {
                              omitViewTracking: !0,
                              tag: r.id,
                              sound: h ? j : void 0,
                              soundpack: v,
                              volume: Q,
                              onClick() {
                                  (0, Z.Kh)(f.id), (f.type === B.d4z.GUILD_VOICE || f.type === B.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(f.id, !0), c.default.clickedNotification();
                              }
                          }
                      );
                      null != U && tl.track(f.id, U);
                  },
                  CHANNEL_SELECT: function (t) {
                      let { channelId: e } = t;
                      return null != e && tl.clearChannel(e), !1;
                  },
                  MESSAGE_ACK: function (t) {
                      let { channelId: e } = t;
                      return tl.clearChannel(e), !1;
                  },
                  ACTIVITY_START: function (t) {
                      let { userId: e, activity: n } = t;
                      if (to()) return !1;
                      if (n.type === B.IIU.PLAYING) {
                          let t = M.default.getUser(e);
                          if (null == t) return !1;
                          let i = Y.ZP.getName(t),
                              l = n.name,
                              o = t.getAvatarURL(void 0, 128),
                              a = J.intl.string(J.t.XoTWsL),
                              u = J.intl.formatToPlainString(J.t.o4Aipq, {
                                  username: i,
                                  gameName: l
                              });
                          return (
                              H.Z.showNotification(
                                  o,
                                  a,
                                  u,
                                  {
                                      notif_type: 'ACTIVITY_START',
                                      activity_type: B.IIU.PLAYING,
                                      notif_user_id: e,
                                      activity_name: l
                                  },
                                  {
                                      sound: 'message2',
                                      playSoundIfDisabled: !1,
                                      volume: 0.4,
                                      onClick() {
                                          r.Z.openPrivateChannel(e);
                                      }
                                  }
                              ),
                              !1
                          );
                      }
                      return !1;
                  },
                  VOICE_STATE_UPDATES: function (t) {
                      let { voiceStates: e } = t;
                      if (to()) return;
                      let n = M.default.getCurrentUser();
                      if (null == n) return;
                      let i = e.find((t) => t.userId === n.id);
                      if (null == i) return;
                      let { channelId: l, guildId: o, suppress: a, requestToSpeakTimestamp: u } = i;
                      if (null == l || null == o || !(!a && null != u)) return;
                      let r = O.Z.getGuild(o),
                          s = b.Z.getChannel(l),
                          d = y.Z.getStageInstanceByChannel(l);
                      null != r &&
                          null != s &&
                          null != d &&
                          H.Z.showNotification(
                              r.getIconURL(128),
                              s.name,
                              J.intl.formatToPlainString(J.t.sqnsSE, {
                                  channelName: (0, E.F6)(s, M.default, G.Z),
                                  channelTopic: null == d ? void 0 : d.topic
                              }),
                              { notif_type: 'Stage Speak Invite' },
                              {}
                          );
                  },
                  STAGE_INSTANCE_UPDATE: function (t) {
                      let { instance: e } = t;
                      if (to() || !e.send_start_notification || ta(e.channel_id)) return !1;
                      let n = M.default.getCurrentUser(),
                          i = O.Z.getGuild(e.guild_id),
                          o = b.Z.getChannel(e.channel_id),
                          a = M.default.getUser(e.host_id);
                      if (null == n || null == o || null == i || null == a || !(0, W.LL)(n, a, o) || !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) || tn.has(e.id)) return !1;
                      tn.add(e.id),
                          H.Z.showNotification(
                              i.getIconURL(128),
                              J.intl.formatToPlainString(J.t.bZ4OkZ, { guildName: i.name }),
                              J.intl.formatToPlainString(J.t.qTelnJ, {
                                  username: V.ZP.getName(i.id, o.id, a),
                                  topic: e.topic
                              }),
                              {
                                  notif_type: 'STAGE_INSTANCE_CREATE',
                                  guild_id: i.id,
                                  channel_id: o.id
                              },
                              {
                                  onClick() {
                                      (0, A.Cq)(o);
                                  }
                              }
                          );
                  },
                  STAGE_INSTANCE_DELETE: function (t) {
                      let { instance: e } = t;
                      tn.delete(e.id);
                  },
                  GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                      let { guildScheduledEvent: e } = t;
                      if (to() || null == e.notification_type) return !1;
                      e.notification_type === X.sy.EVENT_START &&
                          (e.entity_type === X.WX.STAGE_INSTANCE || e.entity_type === X.WX.VOICE
                              ? !(function (t) {
                                    if (to()) return !1;
                                    let e = t.channel_id;
                                    if (null == e || ta(e)) return !1;
                                    let n = M.default.getCurrentUser(),
                                        i = O.Z.getGuild(t.guild_id),
                                        o = b.Z.getChannel(t.channel_id),
                                        a = M.default.getUser(t.host_id);
                                    if (null == n || null == o || null == i || null == a || !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o)) return !1;
                                    H.Z.showNotification(
                                        i.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: i.name }),
                                        J.intl.formatToPlainString(J.t.GV9L8v, {
                                            topic: t.name,
                                            username: V.ZP.getName(i.id, o.id, a)
                                        }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: i.id,
                                            channel_id: o.id
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === X.WX.STAGE_INSTANCE && (0, A.Cq)(o), t.entity_type === X.WX.VOICE && f.default.selectVoiceChannel(o.id);
                                            }
                                        }
                                    );
                                })(e)
                              : e.entity_type === X.WX.EXTERNAL &&
                                !(function (t) {
                                    if (to()) return !1;
                                    let e = M.default.getCurrentUser(),
                                        n = O.Z.getGuild(t.guild_id);
                                    if (null == e || null == n) return !1;
                                    H.Z.showNotification(
                                        n.getIconURL(128),
                                        J.intl.formatToPlainString(J.t.bOu6Wl, { guildName: n.name }),
                                        J.intl.formatToPlainString(J.t.mYyaRE, { topic: t.name }),
                                        {
                                            notif_type: 'GUILD_SCHEDULED_EVENT_UPDATE',
                                            guild_id: n.id
                                        },
                                        {
                                            onClick() {
                                                d.Z.transitionToGuildSync(t.guild_id), (0, N.bO)({ eventId: t.id });
                                            }
                                        }
                                    );
                                })(e));
                  },
                  THREAD_CREATE: function (t) {
                      var e;
                      let { channel: n, isNewlyCreated: i } = t;
                      if (to()) return !1;
                      let l = b.Z.getChannel(n.parent_id);
                      if (null == l || !B.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, W.FI)(n, l, !tt)) return !1;
                      let { author: o, user: a } = (0, _.MC)(n);
                      if (null == a) return !1;
                      let u = O.Z.getGuild(l.guild_id);
                      if (null == u) return !1;
                      let r = J.intl.formatToPlainString(J.t['2IGVl5'], {
                              channelName: l.name,
                              guildName: u.name
                          }),
                          s = J.intl.formatToPlainString(J.t.jPhTvb, {
                              channelName: n.name,
                              userUsername: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : null == a ? void 0 : a.username
                          }),
                          d = a.getAvatarURL(void 0, 128);
                      H.Z.showNotification(
                          d,
                          r,
                          s,
                          {
                              notif_type: 'THREAD_CREATE',
                              notif_user_id: a.id
                          },
                          {
                              onClick() {
                                  (0, P.ok)(n);
                              }
                          }
                      );
                  },
                  GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                      let e,
                          { icon: n, title: i, body: l, route: o, trackingType: a, tag: u } = t;
                      if (to() || null == i || null == l || null == a) return !1;
                      if ('reactions_push_notification' === a) {
                          var r;
                          let { enableInAppNotifications: t } = m.Z.getCurrentConfig({ location: 'desktopNotification' }, { autoTrackExposure: !0 });
                          if (!t) return !1;
                          let n =
                              null !== (r = (0, I.Qj)(o)) && void 0 !== r
                                  ? r
                                  : {
                                        channelId: null,
                                        guildId: null
                                    };
                          if (null == (e = n.channelId) || null == n.guildId || (L.Z.getCurrentlySelectedChannelId() === e && tt)) return !1;
                      }
                      let s = H.Z.showNotification(
                          n,
                          i,
                          l,
                          { notif_type: a },
                          {
                              onClick() {
                                  null != o && ((0, h.Z)(o), c.default.clickedNotification());
                              },
                              tag: u
                          }
                      );
                      null != s && null != e && tl.track(e, s);
                  },
                  WINDOW_HIDDEN: function () {
                      let t = (0, q.isWindows)(),
                          e = (0, q.isLinux)();
                      if (!(!a.K.get($, !1) && q.isPlatformEmbedded && (t || e))) return !1;
                      let i = !1;
                      return (
                          null != te && (i = ti.includes(te)),
                          !!i &&
                              (H.Z.showNotification(
                                  n(95045),
                                  J.intl.string(J.t.VSgOVl),
                                  J.intl.string(J.t['+J/F6+']),
                                  { notif_type: 'WINDOW_HIDDEN' },
                                  {
                                      overrideStreamerMode: !0,
                                      onClick: () => {
                                          (0, v.uL)(B.Z5c.SETTINGS(t ? 'windows' : 'linux'));
                                      },
                                      onShown: () => {
                                          a.K.set($, !0);
                                      }
                                  }
                              ),
                              !1)
                      );
                  },
                  LOGOUT: function () {
                      return a.K.remove($), !1;
                  },
                  CONNECTION_OPEN: function (t) {
                      let { countryCode: e, guilds: n } = t;
                      (te = e), tn.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tn.add(t.id)));
                  },
                  MESSAGE_REMINDER_DUE: function (t) {
                      let { savedMessage: e } = t;
                      if (to()) return !1;
                      let n = e.message;
                      if (null == n || null == n.author) return !1;
                      let i = b.Z.getChannel(e.saveData.channelId);
                      if (null == i) return !1;
                      let { icon: l, body: o } = (0, W.Xi)(i, n, n.author);
                      H.Z.showNotification(
                          l,
                          J.intl.string(J.t.IjZJBw),
                          o,
                          { notif_type: 'MESSAGE_REMINDER_DUE' },
                          {
                              onClick() {
                                  (0, h.Z)(B.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id));
                              }
                          }
                      );
                  }
              }
    );
