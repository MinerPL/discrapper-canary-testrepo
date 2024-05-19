"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryUpsellClans: function() {
    return r
  }
});
var a = n("470079"),
  s = n("116175"),
  l = n("308083");

function i(e) {
  let {
    id: t,
    preset: n,
    banner: a,
    bannerHash: i,
    ...r
  } = e, o = (0, s.getRandomClanBadgeKind)();
  return {
    id: t,
    name: "",
    icon: null,
    description: "",
    memberCount: 0,
    playstyle: l.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    games: [],
    banner: a,
    bannerHash: i,
    badge: {
      badgeKind: o,
      primaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    branding: {
      primaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    wildcardDescriptors: l.CLAN_WILDCARD_PLACEHOLDERS,
    ...r
  }
}

function r(e) {
  return a.useMemo(() => [i({
    id: "1239910082150400001",
    icon: "bea185f5c9dbde7ba2f0c50363c16ec6",
    games: [e, l.FAKE_CLAN_APP_IDS.AGE_OF_EMPIRES_2, l.FAKE_CLAN_APP_IDS.APEX],
    preset: l.ClanBrandPresets.VOLCANO,
    banner: l.ClanBannerKind.WORLD_MAP,
    bannerHash: "99a72cbacfb6de2baf362daa1a5292bb",
    playstyle: l.ClanPlaystyles.COMPETITIVE,
    name: "Retro Rebels",
    description: "Are you a console collector? Rare game curator? Be a rebel and join us in celebrating retro gaming classics \uD83D\uDE0E",
    tag: "RR",
    wildcardDescriptors: ["collector", "nostalgia", "classic"],
    traits: ["30+", "Inclusive", "cooking", "podcasts", "hiking"],
    memberCount: 98
  }), i({
    id: "1239910082150400002",
    icon: "fe5e3c39b398965133d24d3c5d72b06c",
    games: [e, l.FAKE_CLAN_APP_IDS.HONKAI_STAR_RAIL],
    preset: l.ClanBrandPresets.THUNDER,
    banner: l.ClanBannerKind.CASTLE,
    bannerHash: "3c8e6496a598b9a563dffbc87d65f6f8",
    playstyle: l.ClanPlaystyles.SOCIAL,
    name: "the lofi tavern",
    description: "~ hosting chill beats and study rooms every night ~ join the tavern to kick back and meet other cozy gamers ~",
    tag: "MUSE",
    wildcardDescriptors: ["creative", "harmony", "nightowl"],
    traits: ["Streamers", "study buddies", "sleepy cats", "lo-fi chilling"],
    memberCount: 112
  }), i({
    id: "1239910082150400003",
    icon: "fc7bdf17dadd9a59014fc2a41dd88613",
    games: [e, l.FAKE_CLAN_APP_IDS.LETHAL_COMPANY, l.FAKE_CLAN_APP_IDS.HELLDIVERS_2],
    preset: l.ClanBrandPresets.MARSH,
    banner: l.ClanBannerKind.WARP_TUNNEL,
    bannerHash: "d699192ec79c5da7159d2b73eb4b56b7",
    playstyle: l.ClanPlaystyles.VERY_HARDCORE,
    name: "midnight tacos",
    description: "gamers and doritos tacos enthusiasts pls apply",
    tag: "CHZZ",
    wildcardDescriptors: ["spicy", "chaotic", "gamba"],
    traits: ["20+", "Streamers", "ranking bottled water", "late night tacos", "voice chat", "anime"],
    memberCount: 45
  }), i({
    id: "1239910082150400004",
    icon: "7b7a2a06e7852e7cdb7f301fb86c3e18",
    games: [e, l.FAKE_CLAN_APP_IDS.SIMS_4],
    preset: l.ClanBrandPresets.EARTH,
    banner: l.ClanBannerKind.SEA_FOAM,
    bannerHash: "c01388993ca324a6de870f805cc30bd3",
    name: "Eco ELO",
    description: "If you like growing plants or gardening, in game and IRL, then this is the place for you! Welcome home \uD83C\uDF31 \uD83D\uDC9A",
    tag: "eco",
    wildcardDescriptors: ["ecofriendly", "explorers", "advocates"],
    traits: ["20+", "Inclusive", "PUGs", "board games", "going outside", "PvP", "the stalk market", "growing stuff"],
    memberCount: 32
  }), i({
    id: "1239910082150400005",
    icon: "5ca93390d20f7b96a0f0c3702fceec8e",
    games: [e, l.FAKE_CLAN_APP_IDS.SIMS_4],
    preset: l.ClanBrandPresets.CASCADE,
    banner: l.ClanBannerKind.NIGHT_SKY,
    bannerHash: "37cd6a7f90faafeb8c54e5ea5163407b",
    name: "Moewtopia",
    description: "the purrfect place for a pawsitive and hissterical time :D are you kitten me...i feline like that’s too many puns...",
    tag: "meow",
    wildcardDescriptors: ["Meow", "Meow", "Meow"],
    traits: ["All Ages", "Streamers", "Parent Friendly", "sleepy cats", "DnD", "travel", "catnaps"],
    memberCount: 94
  })], [e])
}