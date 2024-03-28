"use strict";
n.r(t);
var r, i, l, s, o = n("442837"),
  u = n("570140"),
  a = n("131704"),
  c = n("592125");
let d = {},
  f = {};
class S extends(s = o.default.Store) {
  getTemplates(e) {
    return d[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
  }
  getChannel(e) {
    return f[e]
  }
}
l = "GuildRoleSubscriptionTierTemplatesStore", (i = "displayName") in(r = S) ? Object.defineProperty(r, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = l, t.default = new S(u.default, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, r = Object.values(c.default.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = r.find(t => t.name === e.name);
        if (void 0 !== t) e.id = t.id;
        else if (!(e.id in f)) {
          let t = (0, a.createChannelRecord)(e);
          f[e.id] = t
        }
      })
    })
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
    let {
      templates: t,
      guildId: n
    } = e;
    d[n] = t
  }
})