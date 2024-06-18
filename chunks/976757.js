"use strict";
n.d(t, {
  Gh: function() {
    return o
  },
  Pw: function() {
    return a
  }
}), n(945124);
var i = n(116175),
  r = n(308083);

function s(e, t) {
  return void 0 === e || "" === e ? t : e
}

function o(e) {
  let t = (0, i.yf)(),
    n = (0, r.dt)();
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

function a(e) {
  return "loaded" === e.status
}