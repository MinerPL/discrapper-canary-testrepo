"use strict";
n.d(t, {
  Q: function() {
    return s
  }
});
var i = n(887003);

function r(e) {
  switch (e.tag) {
    case i.w.COLLECTIBLE:
      return {
        tag: e.tag, skuId: e.sku_id, messages: {
          name: e.messages.name,
          nameWithArticle: e.messages.name_with_article
        }
      };
    case i.w.IN_GAME:
      return {
        tag: e.tag, skuId: e.sku_id, messages: {
          name: e.messages.name,
          nameWithArticle: e.messages.name_with_article,
          redemptionInstructions: e.messages.redemption_instructions
        }
      };
    case i.w.REWARD_CODE:
      return {
        tag: e.tag, skuId: e.sku_id, messages: {
          name: e.messages.name,
          nameWithArticle: e.messages.name_with_article,
          redemptionInstructionsByPlatform: e.messages.redemption_instructions_by_platform
        }, asset: e.asset, approximateCount: e.approximate_count
      }
  }
}

function s(e) {
  return {
    assignmentMethod: e.assignment_method,
    rewards: e.rewards.map(r)
  }
}