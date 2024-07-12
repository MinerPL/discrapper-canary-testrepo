n.d(t, {
  r: function() {
return a;
  }
}), n(627341), n(47120);
var r = n(278074),
  i = n(887003);
class a {
  static build(e) {
return new a(e);
  }
  get features() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => new Set(e.variants)).with({
  configVersion: 2
}, e => new Set(e.features)).exhaustive();
  }
  _defaultRewardV2(e) {
return e.rewardsConfig.rewards[0];
  }
  _defaultRewardV1(e) {
var t;
return null !== (t = e.rewardsConfig.rewards[0]) && void 0 !== t ? t : {
  messages: {
    name: e.messages.rewardName,
    nameWithArticle: e.messages.rewardNameWithArticle,
    redemptionInstructionsByPlatform: e.messages.rewardRedemptionInstructionsByPlatform
  },
  tag: i.w.REWARD_CODE,
  asset: e.assets.rewardTile,
  approximateCount: null
};
  }
  get defaultReward() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => this._defaultRewardV1(e)).with({
  configVersion: 2
}, e => this._defaultRewardV2(e)).exhaustive();
  }
  get defaultRewardAsset() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => e.assets.rewardTile).with({
  configVersion: 2
}, e => this._defaultRewardV2(e).asset).exhaustive();
  }
  get defaultRewardRedemptionInstructionsByPlatform() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => e.messages.rewardRedemptionInstructionsByPlatform).with({
  configVersion: 2
}, e => this._defaultRewardV2(e).messages.redemptionInstructionsByPlatform).exhaustive();
  }
  get rewardsExpireAt() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => e.rewardCodeExpiresAt).with({
  configVersion: 2
}, e => e.rewardsConfig.rewardsExpireAt).exhaustive();
  }
  get application() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => ({
  id: e.applicationId,
  name: e.applicationName,
  link: e.getGameLink,
  ids: [
    e.applicationId,
    ...e.supplementaryApplicationIds
  ]
})).with({
  configVersion: 2
}, e => ({
  ...e.application,
  ids: [e.application.id]
})).exhaustive();
  }
  get rewardPlatforms() {
return (0, r.EQ)(this.quest).with({
  configVersion: 1
}, e => e.rewardCodePlatforms).with({
  configVersion: 2
}, e => e.rewardsConfig.platforms).exhaustive();
  }
  constructor(e) {
var t, n, r;
t = this, r = void 0, (n = 'quest') in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r, this.quest = e;
  }
}