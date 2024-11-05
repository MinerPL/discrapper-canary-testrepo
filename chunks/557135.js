n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(287734),
    s = n(258609),
    o = n(703656),
    l = n(414509),
    u = n(452369),
    c = n(569471),
    d = n(346479),
    f = n(314897),
    _ = n(944486),
    h = n(979651),
    p = n(626135),
    m = n(366297),
    g = n(981631),
    E = n(110223);
t.Z = {
    async handleVoiceConnect(e) {
        let { channel: t, connected: v, needSubscriptionToAccess: I, locked: S = !1, routeDirectlyToChannel: T = !1, bypassChangeModal: b, bypassBlockedWarningModal: y, bypassGuildIdCheck: A = !1 } = e;
        t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), !c.Z.hasJoined(t.id) && (await d.Z.joinThread(t, 'Join Voice')));
        let N = s.Z.getRemoteSessionId(),
            C = h.Z.getVoiceStateForSession(f.default.getId(), N),
            R = (null == C ? void 0 : C.channelId) === t.id || _.Z.getChannelId() === h.Z.getCurrentClientVoiceChannelId(t.guild_id),
            O = u.Z.getBlockedUsersForVoiceChannel(t.id);
        return ((0, l.B)(t.id) && (y = !0), y || S || v || !(O.size > 0))
            ? !b && !S && (0, m._)(t)
                ? new Promise((e) => {
                      (0, i.openModalLazy)(async () => {
                          let { default: i } = await n.e('65045').then(n.bind(n, 143782));
                          return (n) =>
                              (0, r.jsx)(i, {
                                  channel: t,
                                  onConfirm: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: v,
                                              needSubscriptionToAccess: I,
                                              routeDirectlyToChannel: T,
                                              locked: S,
                                              bypassChangeModal: !0
                                          })
                                      ),
                                  ...n
                              });
                      });
                  })
                : (!S && !v && a.default.selectVoiceChannel(t.id),
                  !__OVERLAY__ &&
                      (v || R || I || T) &&
                      !(function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = e.getGuildId();
                          if (null == n && !t) throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
                          (0, o.uL)(g.Z5c.CHANNEL(n, e.id));
                      })(t, A),
                  !0)
            : new Promise((e) => {
                  (0, i.openModalLazy)(
                      async () => {
                          let { default: i } = await n.e('12858').then(n.bind(n, 404339));
                          return (n) => {
                              let { onClose: a, transitionState: s } = n;
                              return (0, r.jsx)(i, {
                                  channelId: t.id,
                                  blockedUserIds: O,
                                  transitionState: s,
                                  onClose: a,
                                  onJoin: () =>
                                      e(
                                          this.handleVoiceConnect({
                                              channel: t,
                                              connected: v,
                                              needSubscriptionToAccess: I,
                                              routeDirectlyToChannel: T,
                                              locked: S,
                                              bypassChangeModal: !0,
                                              bypassBlockedWarningModal: !0
                                          })
                                      )
                              });
                          };
                      },
                      {
                          onCloseCallback: () => {
                              p.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                                  action: E.q.DISMISS,
                                  channel_id: t.id,
                                  blocked_user_ids: Array.from(O),
                                  warning_surface: E.fz.PRE_JOIN_MODAL
                              });
                          }
                      }
                  );
              });
    }
};
