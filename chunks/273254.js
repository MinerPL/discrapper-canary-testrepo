"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryClanForGuild: function() {
    return o
  }
});
var a = n("470079"),
  s = n("468194"),
  l = n("316553"),
  i = n("116175"),
  r = n("308083");

function o(e) {
  let {
    guild: t,
    selectedGame: n
  } = e, o = (0, l.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), u = a.useMemo(() => null == o ? [] : [o], [o]);
  return a.useMemo(() => {
    var e;
    return null == t ? null : {
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : "",
      memberCount: 0,
      games: u,
      playstyle: r.ClanPlaystyles.CASUAL,
      traits: [],
      tag: (0, s.getAcronym)(t.name),
      banner: r.ClanBannerKind.WARP_TUNNEL,
      badge: {
        badgeKind: i.ClanBadgeKind.SWORD,
        primaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].primary,
        secondaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary
      },
      branding: {
        primaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary,
        secondaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary
      },
      wildcardDescriptors: []
    }
  }, [u, t])
}