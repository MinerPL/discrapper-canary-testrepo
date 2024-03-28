"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var l = n("106351"),
  a = n("442837"),
  s = n("835473"),
  i = n("592125"),
  r = n("430824"),
  o = n("496675"),
  u = n("158776"),
  d = n("979651"),
  c = n("823379"),
  f = n("981631");

function h(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e)),
    n = null == t ? void 0 : t.afkChannelId,
    h = (0, a.useStateFromStoresArray)([d.default, u.default, i.default, o.default], () => {
      let t = new Set,
        a = d.default.getVoiceStates(e);
      for (let s in a) {
        let r = i.default.getBasicChannel(a[s].channelId);
        if (null != r && r.type !== l.ChannelTypes.GUILD_STAGE_VOICE && n !== r.id && !!o.default.canBasicChannel(f.BasicPermissions.VIEW_CHANNEL, r)) u.default.getActivities(s, e).forEach(e => {
          let n = e.application_id;
          if (e.type !== f.ActivityTypes.PLAYING || null == n) return [];
          t.add(n)
        })
      }
      return [...t]
    }, [n, e]);
  return (0, s.default)([...h]).filter(c.isNotNullish).length > 0
}