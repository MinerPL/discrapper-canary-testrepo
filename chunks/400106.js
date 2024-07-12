n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r, i = n(544891),
  a = n(81825),
  o = n(601964),
  s = n(768581),
  l = n(624138),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(r || (r = {})).GUILD = 'GUILD';
let d = async e => {
  let t = null;
  try {
var n;
let r = await i.tn.get({
  url: u.ANM.EMOJI_SOURCE_DATA(e),
  oldFormErrors: !0,
  timeout: 5000
});
(null == r ? void 0 : null === (n = r.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
  guild: _.createFromServer(r.body.guild),
  type: r.body.type
});
  } catch {}
  return t;
};
class _ extends a.Z {
  getIconURL(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return s.ZP.getGuildIconURL({
  id: this.id,
  size: e,
  icon: this.icon,
  canAnimate: t
});
  }
  getIconSource(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return s.ZP.getAnimatableSourceWithFallback(t, t => s.ZP.getGuildIconSource({
  id: this.id,
  size: e,
  icon: this.icon,
  canAnimate: t
}));
  }
  hasFeature(e) {
return this.features.has(e);
  }
  isDiscoverable() {
return this.hasFeature(u.oNc.DISCOVERABLE);
  }
  get acronym() {
return (0, l.Zg)(this.name);
  }
  static async getGuildFromEmojiId(e) {
let t = await d(e);
return null != t && (null == t ? void 0 : t.type) === 'GUILD' ? t.guild : null;
  }
  static _mapCommon(e) {
var t;
return {
  id: e.id,
  name: e.name,
  icon: e.icon,
  description: e.description,
  features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set())
};
  }
  static createFromGuildRecord(e) {
return new _({
  ..._._mapCommon(e),
  premiumTier: e.premiumTier,
  premiumSubscriberCount: e.premiumSubscriberCount,
  presenceCount: null,
  memberCount: null,
  emojis: null
});
  }
  static createFromDiscoverableGuild(e) {
return new _({
  ..._._mapCommon(e),
  premiumTier: null,
  premiumSubscriberCount: e.premiumSubscriptionCount,
  presenceCount: e.presenceCount,
  memberCount: e.memberCount,
  emojis: e.emojis
});
  }
  static createFromServer(e) {
return new _({
  ..._._mapCommon(e),
  premiumTier: e.premium_tier,
  premiumSubscriberCount: e.premium_subscription_count,
  presenceCount: e.approximate_presence_count,
  memberCount: e.approximate_member_count,
  emojis: e.emojis
});
  }
  static createFromGuildType(e) {
return e instanceof _ ? e : e instanceof o.ZP ? _.createFromGuildRecord(e) : _.createFromDiscoverableGuild(e);
  }
  constructor(e) {
super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'icon', void 0), c(this, 'description', void 0), c(this, 'features', void 0), c(this, 'premiumTier', void 0), c(this, 'premiumSubscriberCount', void 0), c(this, 'presenceCount', void 0), c(this, 'memberCount', void 0), c(this, 'emojis', void 0), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis;
  }
}