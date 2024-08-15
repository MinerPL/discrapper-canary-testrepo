n(411104);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(287734),
  s = n(258609),
  o = n(703656),
  l = n(569471),
  u = n(346479),
  c = n(314897),
  d = n(944486),
  _ = n(979651),
  E = n(366297),
  f = n(981631);
t.Z = {
  async handleVoiceConnect(e) {
let {
  channel: t,
  connected: h,
  needSubscriptionToAccess: p,
  locked: m = !1,
  routeDirectlyToChannel: I = !1,
  bypassChangeModal: T,
  bypassGuildIdCheck: g = !1
} = e;
t.isThread() && (await u.Z.unarchiveThreadIfNecessary(t.id), !l.Z.hasJoined(t.id) && await u.Z.joinThread(t, 'Join Voice'));
let S = s.Z.getRemoteSessionId(),
  A = _.Z.getVoiceStateForSession(c.default.getId(), S),
  N = (null == A ? void 0 : A.channelId) === t.id || d.Z.getChannelId() === _.Z.getCurrentClientVoiceChannelId(t.guild_id);
return !T && !m && (0, E._)(t) ? new Promise(e => {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e('65045').then(n.bind(n, 143782));
    return n => (0, r.jsx)(i, {
      channel: t,
      onConfirm: () => e(this.handleVoiceConnect({
        channel: t,
        connected: h,
        needSubscriptionToAccess: p,
        routeDirectlyToChannel: I,
        locked: m,
        bypassChangeModal: !0
      })),
      ...n
    });
  });
}) : (!m && !h && a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (h || N || p || I) && ! function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.getGuildId();
  if (null == n && !t)
    throw Error('VoiceChannel, transitionTo: Channel does not have a guildId');
  (0, o.uL)(f.Z5c.CHANNEL(n, e.id));
}(t, g), !0);
  }
};