"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  r = n("913144"),
  l = n("233069"),
  s = n("42203");
let u = {},
  o = {};
class a extends i.default.Store {
  getTemplates(e) {
    return u[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null === (n = u[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
  }
  getChannel(e) {
    return o[e]
  }
}
a.displayName = "GuildRoleSubscriptionTierTemplatesStore";
var d = new a(r.default, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, i = Object.values(s.default.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = i.find(t => t.name === e.name);
        if (void 0 !== t) e.id = t.id;
        else if (!(e.id in o)) {
          let t = (0, l.createChannelRecord)(e);
          o[e.id] = t
        }
      })
    })
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
    let {
      templates: t,
      guildId: n
    } = e;
    u[n] = t
  }
})