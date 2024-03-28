"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("201895"),
  l = s("933557"),
  n = s("592125"),
  i = s("699516"),
  r = s("594174"),
  o = s("293810"),
  d = s("981631"),
  u = s("689938");

function c(e) {
  switch (e.ref_type) {
    case o.GuildRoleSubscriptionBenefitTypes.CHANNEL: {
      let t = n.default.getChannel(e.ref_id);
      return null != t ? function(e) {
        let t = (0, l.computeChannelName)(e, r.default, i.default);
        switch (e.type) {
          case d.ChannelTypes.GUILD_VOICE:
            return u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
              channelName: t
            });
          case d.ChannelTypes.GUILD_STAGE_VOICE:
            return u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL.format({
              channelName: t
            });
          default:
            return (0, a.default)({
              channel: e
            })
        }
      }(t) : ""
    }
    case o.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      var t;
      return null !== (t = e.name) && void 0 !== t ? t : ""
  }
}