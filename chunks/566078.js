n.d(t, {
    r: function () {
        return i;
    }
}),
    n(627341),
    n(47120);
var r = n(278074);
class i {
    static build(e) {
        return new i(e);
    }
    get features() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => new Set(e.features))
            .exhaustive();
    }
    _defaultRewardV2(e) {
        return e.rewardsConfig.rewards[0];
    }
    get defaultReward() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e))
            .exhaustive();
    }
    get defaultRewardAsset() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e).asset)
            .exhaustive();
    }
    get defaultRewardRedemptionInstructionsByPlatform() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => this._defaultRewardV2(e).messages.redemptionInstructionsByPlatform)
            .exhaustive();
    }
    get rewardsExpireAt() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewardsExpireAt)
            .exhaustive();
    }
    get application() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => ({
                ...e.application,
                ids: [e.application.id]
            }))
            .exhaustive();
    }
    get rewardPlatforms() {
        return (0, r.EQ)(this.quest)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.platforms)
            .exhaustive();
    }
    constructor(e) {
        var t, n, r;
        (t = this),
            (r = void 0),
            (n = 'quest') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.quest = e);
    }
}
