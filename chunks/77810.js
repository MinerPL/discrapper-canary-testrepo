"use strict";
n.r(t), n.d(t, {
  useChannelsUserCanStartStageIn: function() {
    return r
  }
}), n("724458"), n("653041");
var a = n("442837"),
  s = n("146085"),
  l = n("984933"),
  i = n("496675");

function r(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
  return (0, a.useStateFromStoresArray)([l.default, i.default], () => l.default.getChannels(n)[l.GUILD_VOCAL_CHANNELS_KEY].reduce((e, t) => {
    let n = t.channel;
    return n.isGuildStageVoice() ? (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return !!e.isGuildStageVoice() && t.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
    }(t.channel, i.default) && e.push(n), e) : e
  }, []), [n])
}