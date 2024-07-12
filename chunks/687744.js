n.d(t, {
  Q: function() {
return a;
  }
});
var r = n(887003);

function i(e) {
  switch (e.tag) {
case r.w.COLLECTIBLE:
  return {
    tag: e.tag,
      skuId: e.sku_id,
      messages: {
        name: e.messages.name,
        nameWithArticle: e.messages.name_with_article
      }
  };
case r.w.IN_GAME:
  return {
    tag: e.tag,
      skuId: e.sku_id,
      messages: {
        name: e.messages.name,
        nameWithArticle: e.messages.name_with_article,
        redemptionInstructions: e.messages.redemption_instructions
      }
  };
case r.w.REWARD_CODE:
  return {
    tag: e.tag,
      skuId: e.sku_id,
      messages: {
        name: e.messages.name,
        nameWithArticle: e.messages.name_with_article,
        redemptionInstructionsByPlatform: e.messages.redemption_instructions_by_platform
      },
      asset: e.asset,
      approximateCount: e.approximate_count
  };
  }
}

function a(e) {
  return {
assignmentMethod: e.assignment_method,
rewards: e.rewards.map(i)
  };
}