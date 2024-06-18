"use strict";
n.d(t, {
  v: function() {
    return a
  }
}), n(47120);
var i = n(887003),
  r = n(497505);

function s(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let i = parseInt(n);
    r.xw.has(i) && (t[i] = e[n])
  }
  return t
}
let o = e => {
    let t = {
      skuId: e.sku_id,
      asset: e.asset
    };
    switch (e.type) {
      case i.w.REWARD_CODE:
        return {
          type: i.w.REWARD_CODE, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, approximateCount: e.approximate_count, ...t
        };
      case i.w.COLLECTIBLE:
        return {
          type: i.w.COLLECTIBLE, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, expiresAt: e.expires_at, ...t
        };
      case i.w.IN_GAME:
        return {
          type: i.w.IN_GAME, messages: {
            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
            name: e.messages.name,
            nameWithArticle: e.messages.name_with_article
          }, ...t
        }
    }
  },
  a = e => ({
    assignmentMethod: e.assignment_method,
    rewards: e.rewards.map(o),
    rewardsExpireAt: e.rewards_expire_at,
    platforms: e.platforms
  })