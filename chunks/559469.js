"use strict";
n.r(t), n.d(t, {
  FAKE_DISCOVERY_UPSELL_CLANS: function() {
    return i
  }
});
var a = n("116175"),
  s = n("308083");

function l(e) {
  let {
    id: t,
    preset: n,
    banner: l
  } = e;
  return {
    id: t,
    name: "",
    description: "",
    memberCount: 0,
    games: [s.VALORANT_ID],
    playstyle: s.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    banner: l,
    badge: {
      badgeKind: a.ClanBadgeKind.SWORD,
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    branding: {
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    wildcardDescriptors: []
  }
}
let i = [l({
  id: "1",
  preset: s.ClanBrandPresets.ZEPHYR,
  banner: s.ClanBannerKind.WORLD_MAP
}), l({
  id: "2",
  preset: s.ClanBrandPresets.THUNDER,
  banner: s.ClanBannerKind.CASTLE
}), l({
  id: "3",
  preset: s.ClanBrandPresets.MARSH,
  banner: s.ClanBannerKind.SEA_FOAM
}), l({
  id: "4",
  preset: s.ClanBrandPresets.BOULDER,
  banner: s.ClanBannerKind.NIGHT_SKY
}), l({
  id: "5",
  preset: s.ClanBrandPresets.SOUL,
  banner: s.ClanBannerKind.SEA_FOAM
})]