"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(201895),
  i = t(933557),
  l = t(592125),
  a = t(699516),
  r = t(594174),
  o = t(293810),
  c = t(981631),
  d = t(689938);

function u(e) {
  switch (e.ref_type) {
    case o.Qs.CHANNEL: {
      let s = l.Z.getChannel(e.ref_id);
      return null != s ? function(e) {
        let s = (0, i.F6)(e, r.default, a.Z);
        switch (e.type) {
          case c.d4z.GUILD_VOICE:
            return d.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
              channelName: s
            });
          case c.d4z.GUILD_STAGE_VOICE:
            return d.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL.format({
              channelName: s
            });
          default:
            return (0, n.ZP)({
              channel: e
            })
        }
      }(s) : ""
    }
    case o.Qs.INTANGIBLE:
      var s;
      return null !== (s = e.name) && void 0 !== s ? s : ""
  }
}