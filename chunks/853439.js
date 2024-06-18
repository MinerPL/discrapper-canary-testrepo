"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(131704),
  _ = n(592125);
let d = {},
  c = {};
class E extends(o = a.ZP.Store) {
  getTemplates(e) {
    return d[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
  }
  getChannel(e) {
    return c[e]
  }
}
s = "GuildRoleSubscriptionTierTemplatesStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new E(l.Z, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, i = Object.values(_.Z.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = i.find(t => t.name === e.name);
        if (void 0 !== t) e.id = t.id;
        else if (!(e.id in c)) {
          let t = (0, u.kt)(e);
          c[e.id] = t
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