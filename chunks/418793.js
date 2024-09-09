n.d(t, {
    v: function () {
        return o;
    }
}),
    n(47120);
var r = n(887003),
    i = n(497505);
function a(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let r = parseInt(n);
        i.xw.has(r) && (t[r] = e[n]);
    }
    return t;
}
let s = (e) => {
        let t = {
            skuId: e.sku_id,
            asset: e.asset
        };
        switch (e.type) {
            case r.w.REWARD_CODE:
                return {
                    type: r.w.REWARD_CODE,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    approximateCount: e.approximate_count,
                    ...t
                };
            case r.w.COLLECTIBLE:
                return {
                    type: r.w.COLLECTIBLE,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    expiresAt: e.expires_at,
                    ...t
                };
            case r.w.IN_GAME:
                return {
                    type: r.w.IN_GAME,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...t
                };
        }
    },
    o = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(s),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms
    });
