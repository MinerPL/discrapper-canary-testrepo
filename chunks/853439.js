var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(131704),
  c = n(592125);
let d = {},
  _ = {};
class E extends(s = o.ZP.Store) {
  getTemplates(e) {
return d[e];
  }
  getTemplateWithCategory(e, t) {
var n;
return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.category === t);
  }
  getChannel(e) {
return _[e];
  }
}
a = 'GuildRoleSubscriptionTierTemplatesStore', (i = 'displayName') in(r = E) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new E(l.Z, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
let {
  selectedTemplate: t,
  guildId: n
} = e, r = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
t.listings.forEach(e => {
  e.channels.forEach(e => {
    let t = r.find(t => t.name === e.name);
    if (void 0 !== t)
      e.id = t.id;
    else if (!(e.id in _)) {
      let t = (0, u.kt)(e);
      _[e.id] = t;
    }
  });
});
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
let {
  templates: t,
  guildId: n
} = e;
d[n] = t;
  }
});