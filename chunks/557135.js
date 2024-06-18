"use strict";
n(411104);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(287734),
  o = n(258609),
  a = n(703656),
  l = n(569471),
  u = n(346479),
  _ = n(314897),
  d = n(944486),
  c = n(979651),
  E = n(366297),
  I = n(981631);
t.Z = {
  async handleVoiceConnect(e) {
    let {
      channel: t,
      connected: T,
      needSubscriptionToAccess: h,
      locked: S = !1,
      routeDirectlyToChannel: f = !1,
      bypassChangeModal: N,
      bypassGuildIdCheck: A = !1
    } = e;
    t.isThread() && (await u.Z.unarchiveThreadIfNecessary(t.id), !l.Z.hasJoined(t.id) && await u.Z.joinThread(t, "Join Voice"));
    let m = o.Z.getRemoteSessionId(),
      O = c.Z.getVoiceStateForSession(_.default.getId(), m),
      R = (null == O ? void 0 : O.channelId) === t.id || d.Z.getChannelId() === c.Z.getCurrentClientVoiceChannelId(t.guild_id);
    return !N && !S && (0, E._)(t) ? new Promise(e => {
      (0, r.openModalLazy)(async () => {
        let {
          default: r
        } = await n.e("65045").then(n.bind(n, 143782));
        return n => (0, i.jsx)(r, {
          channel: t,
          onConfirm: () => e(this.handleVoiceConnect({
            channel: t,
            connected: T,
            needSubscriptionToAccess: h,
            routeDirectlyToChannel: f,
            locked: S,
            bypassChangeModal: !0
          })),
          ...n
        })
      })
    }) : (!S && !T && s.default.selectVoiceChannel(t.id), !__OVERLAY__ && (T || R || h || f) && ! function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.getGuildId();
      if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
      (0, a.uL)(I.Z5c.CHANNEL(n, e.id))
    }(t, A), !0)
  }
}