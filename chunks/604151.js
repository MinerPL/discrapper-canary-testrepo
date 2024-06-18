"use strict";
n.d(t, {
  h: function() {
    return h
  }
});
var i = n(952265),
  r = n(570140),
  s = n(281956),
  o = n(200498),
  a = n(71275),
  l = n(672339),
  u = n(653175),
  _ = n(592125),
  d = n(430824),
  c = n(607744),
  E = n(944486),
  I = n(979651),
  T = n(934415);
let h = function(e, t) {
  let h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    S = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    f = _.Z.getChannel(e),
    N = I.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    A = null != f ? c.Z.getCheck(f.guild_id) : null;
  if (!(null != t && (0, s.n)(t)) && (null == A || !!A.canChat || !!(0, o.jU)(f))) {
    if (null != f && !N) {
      let e = (0, T.rY)(f, I.Z, d.Z);
      if (e && f.isGuildStageVoice() && (0, a.xJ)(f.id)) {
        (0, i.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("43133")]).then(n.bind(n, 523794));
          return t => e({
            channel: f,
            ...t
          })
        });
        return
      }
      if (e) {
        (0, i.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("16609")]).then(n.bind(n, 997308));
          return t => e(t)
        });
        return
      }
    }
    h && (0, l.eH)();
    (0, u.Z)(function() {
      r.Z.dispatch({
        type: "VOICE_CHANNEL_SELECT",
        guildId: t,
        channelId: e,
        currentVoiceChannelId: E.Z.getVoiceChannelId(),
        video: h,
        stream: S
      })
    }, e, S, h)
  }
}