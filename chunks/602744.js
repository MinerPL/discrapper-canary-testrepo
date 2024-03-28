"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("106351"),
  n = a("442837"),
  s = a("984933"),
  i = a("9156");

function d(e) {
  let t = (0, n.useStateFromStores)([s.default], () => s.default.getChannels(e))[s.GUILD_SELECTABLE_CHANNELS_KEY];
  return (0, n.useStateFromStoresArray)([i.default], () => t.filter(e => {
    let {
      channel: t
    } = e;
    return l.ChannelTypesSets.READABLE.has(t.type) && !l.ChannelTypesSets.GUILD_VOCAL.has(t.type)
  }).filter(t => {
    let {
      channel: a
    } = t;
    return i.default.isChannelMuted(e, a.id) || i.default.isCategoryMuted(e, a.id)
  }), [e, t]).length
}