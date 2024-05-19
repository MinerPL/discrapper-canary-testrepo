"use strict";
n.r(t), n.d(t, {
  buildClanFromServer: function() {
    return o
  },
  getClanDiscoveryAffinity: function() {
    return i.getClanDiscoveryAffinity
  },
  isLoadedSearchResult: function() {
    return l
  }
});
var i = n("945124"),
  r = n("116175"),
  a = n("308083");

function s(e, t) {
  return void 0 === e || "" === e ? t : e
}

function o(e) {
  let t = (0, r.getRandomClanBadgePreset)(),
    n = (0, a.getRandomClanBrandPreset)();
  return {
    id: e.id,
    name: e.name,
    icon: e.icon_hash,
    description: e.description,
    memberCount: e.member_count,
    games: e.game_ids,
    playstyle: e.playstyle,
    traits: e.search_terms,
    tag: e.tag,
    banner: e.banner,
    bannerHash: e.banner_hash,
    badge: {
      badgeKind: e.badge,
      primaryColor: s(e.badge_color_primary, t.primary),
      secondaryColor: s(e.badge_color_secondary, t.secondary),
      imageHash: e.badge_hash
    },
    branding: {
      primaryColor: s(e.brand_color_primary, n.primary),
      secondaryColor: s(e.brand_color_secondary, n.secondary)
    },
    wildcardDescriptors: e.wildcard_descriptors
  }
}

function l(e) {
  return "loaded" === e.status
}