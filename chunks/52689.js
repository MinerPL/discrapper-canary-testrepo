n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(470079),
  s = n(143927),
  a = n(836768),
  r = n(49898),
  l = n(689938);

function o() {
  let e = i.useMemo(() => [{
    slug: r.SM.SERVERS,
    title: l.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE
  },
  {
    slug: r.SM.APPS,
    title: l.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE
  },
  {
    slug: r.SM.QUESTS,
    title: l.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE
  },
  {
    slug: r.SM.SHOP,
    title: l.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE
  }
], []),
t = (0, a.d)(e => e.selectedPage, s.Z);
  return {
config: e,
selectedPage: t,
handleSelectPage: a.d.getState().setSelectedPage
  };
}