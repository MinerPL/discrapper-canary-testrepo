"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var l = n("298386"),
  a = n("446674"),
  s = n("442939"),
  i = n("42203"),
  r = n("305961"),
  o = n("957255"),
  u = n("824563"),
  d = n("800762"),
  c = n("449008"),
  f = n("49111");

function h(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e)),
    n = null == t ? void 0 : t.afkChannelId,
    h = (0, a.useStateFromStoresArray)([d.default, u.default, i.default, o.default], () => {
      let t = new Set,
        a = d.default.getVoiceStates(e);
      for (let s in a) {
        let r = i.default.getBasicChannel(a[s].channelId);
        if (null == r || r.type === l.ChannelTypes.GUILD_STAGE_VOICE || n === r.id || !o.default.canBasicChannel(f.BasicPermissions.VIEW_CHANNEL, r)) continue;
        let d = u.default.getActivities(s, e);
        d.forEach(e => {
          let n = e.application_id;
          if (e.type !== f.ActivityTypes.PLAYING || null == n) return [];
          t.add(n)
        })
      }
      return [...t]
    }, [n, e]),
    C = (0, s.default)([...h]).filter(c.isNotNullish);
  return C.length > 0
}