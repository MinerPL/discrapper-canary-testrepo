"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("718017"),
  l = n("442837"),
  i = n("536442"),
  r = n("984933"),
  o = n("496675"),
  u = n("51382"),
  d = n("91326"),
  c = n("503856"),
  f = n("981631");

function E(e) {
  let {
    channel: t,
    guild: n
  } = e, r = (0, l.useStateFromStores)([i.HotspotStore], () => i.HotspotStore.hasHotspot(i.HotspotLocations.HUB_STUDY_ROOM_NOTICE)), o = (0, c.useConnectedInCurrentHub)(t.guild_id), f = (0, s.useSpring)({
    maxHeight: o ? 0 : 300,
    overflow: "hidden",
    delay: 400
  });
  return (0, a.jsx)(s.animated.div, {
    style: f,
    children: r ? (0, a.jsx)(u.default, {
      channel: t,
      guild: n
    }) : (0, a.jsx)(d.default, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
t.default = function(e) {
  let {
    guild: t
  } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(t.id)[r.GUILD_VOCAL_CHANNELS_KEY][0]), s = (0, l.useStateFromStores)([o.default], () => null != n && o.default.can(f.Permissions.CONNECT, n.channel));
  return t.hasFeature(f.GuildFeatures.HUB) && null != n && s ? (0, a.jsx)(E, {
    channel: n.channel,
    guild: t
  }) : null
}