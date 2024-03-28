"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("149765"),
  s = n("442837"),
  l = n("984933"),
  i = n("496675"),
  r = n("981631");

function o(e) {
  let t = (0, s.useStateFromStores)([l.default], () => {
    var t;
    return null !== (t = l.default.getChannels(e)[l.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : []
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
    let {
      channel: t
    } = e;
    return i.default.can(a.combine(r.Permissions.SEND_MESSAGES, r.Permissions.VIEW_CHANNEL), t)
  }).length
}