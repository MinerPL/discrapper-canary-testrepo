var i, a, s, r, l = n(442837),
  o = n(433517),
  c = n(570140);
let d = 'hasSeenGuildTemplatePromotionTooltip',
  u = {},
  _ = !0 === o.K.get(d);

function h(e) {
  let {
guildId: t
  } = e;
  u = {
...u,
[t]: !1
  };
}
class E extends(r = l.ZP.Store) {
  shouldShowGuildTemplateDirtyTooltip(e) {
var t;
return null !== (t = u[e]) && void 0 !== t && t;
  }
  shouldShowGuildTemplatePromotionTooltip() {
return !_;
  }
}
s = 'GuildTemplateTooltipStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new E(c.Z, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
let {
  guildTemplate: t
} = e;
u = {
  ...u,
  [t.source_guild_id]: t.is_dirty || !1
};
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
o.K.set(d, !0), _ = !0;
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
u = {
  ...u,
  [e.guildTemplate.source_guild_id]: !1
};
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: h,
  GUILD_TEMPLATE_DELETE_SUCCESS: h
});