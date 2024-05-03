"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("442837"),
  l = n("661869"),
  s = n("543882"),
  i = n("199902"),
  r = n("592125"),
  o = n("496675"),
  u = n("158776"),
  d = n("979651"),
  c = n("561308"),
  f = n("231338");

function h(e) {
  let t = (0, a.useStateFromStores)([d.default, r.default], () => {
      if (!(0, c.isEntryActive)(e) || e.author_type !== l.ContentInventoryAuthorType.USER) return null;
      let t = d.default.getVoiceStateForUser(e.author_id);
      return r.default.getChannel(null == t ? void 0 : t.channelId)
    }, [e]),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [t, e]),
    h = (0, a.useStateFromStores)([i.default, o.default, s.default], () => {
      if (null == t) return;
      let n = i.default.getAnyStreamForUser(e.author_id);
      if (null != n) {
        if (o.default.canBasicChannel(f.BasicPermissions.CONNECT, t) && (null == n ? void 0 : n.channelId) === t.id) return s.default.getPreviewURL(n.guildId, n.channelId, n.ownerId)
      }
    }, [t, e]);
  return {
    channel: t,
    activity: n,
    streamPreviewUrl: h
  }
}