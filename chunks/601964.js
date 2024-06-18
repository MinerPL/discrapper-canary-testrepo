"use strict";
n.d(t, {
  Bg: function() {
    return c
  },
  ZP: function() {
    return d
  }
}), n(47120);
var i = n(81825),
  r = n(768581),
  s = n(709054),
  o = n(624138),
  a = n(981631),
  l = n(185923),
  u = n(474936);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends i.Z {
  merge(e) {
    let {
      features: t
    } = e;
    if (null != t) {
      let n = new Set(t);
      if (n.size === this.features.size) {
        let t = !1;
        for (let e of n)
          if (!this.features.has(e)) {
            t = !0;
            break
          }! t && (e.features = this.features)
      }
    }
    return super.merge.call(this, e)
  }
  getSafetyAlertsChannelId() {
    var e;
    return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId
  }
  getIconURL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return r.ZP.getGuildIconURL({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    })
  }
  getIconSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return r.ZP.getAnimatableSourceWithFallback(t, t => r.ZP.getGuildIconSource({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    }))
  }
  getApplicationId() {
    return this.application_id
  }
  toString() {
    var e;
    return null !== (e = this.name) && void 0 !== e ? e : ""
  }
  get acronym() {
    return (0, o.Zg)(this.name)
  }
  isOwner(e) {
    let t = "string" == typeof e ? e : null != e ? e.id : null;
    return this.ownerId === t
  }
  isOwnerWithRequiredMfaLevel(e) {
    return (!!e.mfaEnabled || this.mfaLevel !== a.BpS.ELEVATED) && this.isOwner(e)
  }
  isNew() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
      t = s.default.extractTimestamp(this.id);
    return Date.now() - t < 864e5 * e
  }
  isLurker() {
    return null == this.joinedAt
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  getEveryoneRoleId() {
    return s.default.castGuildIdAsEveryoneGuildRoleId(this.id)
  }
  getMaxEmojiSlots() {
    return Math.max(this.hasFeature(a.oNc.MORE_EMOJI) ? 200 : l.jZ, u.HO[this.premiumTier].limits.emoji)
  }
  getMaxRoleSubscriptionEmojiSlots() {
    return 25
  }
  getMaxSoundboardSlots() {
    return u.HO[this.premiumTier].limits.soundboardSounds
  }
  isCommunity() {
    return this.hasFeature(a.oNc.COMMUNITY)
  }
  hasVerificationGate() {
    return this.hasFeature(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(a.oNc.COMMUNITY) || this.hasFeature(a.oNc.CLAN))
  }
  hasCommunityInfoSubheader() {
    return this.hasFeature(a.oNc.COMMUNITY) && this.hasFeature(a.oNc.DISCOVERABLE)
  }
  canHaveRaidActivityAlerts() {
    return !this.hasFeature(a.oNc.COMMUNITY) && this.hasFeature(a.oNc.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(a.oNc.COMMUNITY) && !this.hasFeature(a.oNc.RAID_ALERTS_DISABLED)
  }
  updateJoinedAt(e) {
    return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
  }
  constructor(e) {
    var t, n, i;
    super(), _(this, "id", void 0), _(this, "name", void 0), _(this, "description", void 0), _(this, "ownerId", void 0), _(this, "icon", void 0), _(this, "splash", void 0), _(this, "banner", void 0), _(this, "homeHeader", void 0), _(this, "preferredLocale", void 0), _(this, "features", void 0), _(this, "afkChannelId", void 0), _(this, "afkTimeout", void 0), _(this, "systemChannelId", void 0), _(this, "verificationLevel", void 0), _(this, "joinedAt", void 0), _(this, "defaultMessageNotifications", void 0), _(this, "mfaLevel", void 0), _(this, "application_id", void 0), _(this, "explicitContentFilter", void 0), _(this, "vanityURLCode", void 0), _(this, "premiumTier", void 0), _(this, "premiumSubscriberCount", void 0), _(this, "premiumProgressBarEnabled", void 0), _(this, "systemChannelFlags", void 0), _(this, "rulesChannelId", void 0), _(this, "safetyAlertsChannelId", void 0), _(this, "discoverySplash", void 0), _(this, "publicUpdatesChannelId", void 0), _(this, "maxStageVideoChannelUsers", void 0), _(this, "maxVideoChannelUsers", void 0), _(this, "maxMembers", void 0), _(this, "nsfwLevel", void 0), _(this, "hubType", void 0), _(this, "latestOnboardingQuestionId", void 0), _(this, "clan", void 0);
    let r = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
    this.id = e.id, this.name = e.name || "", this.description = e.description || null, this.ownerId = e.ownerId || null, this.icon = e.icon || null, this.splash = e.splash || null, this.banner = e.banner || null, this.homeHeader = e.homeHeader || null, this.features = r, this.preferredLocale = e.preferredLocale || "en-US", this.afkChannelId = e.afkChannelId || null, this.afkTimeout = e.afkTimeout, this.systemChannelId = e.systemChannelId || null, this.verificationLevel = e.verificationLevel || a.sFg.NONE, this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt), this.defaultMessageNotifications = e.defaultMessageNotifications || a.bL.ALL_MESSAGES, this.mfaLevel = e.mfaLevel || a.BpS.NONE, this.application_id = e.application_id || null, this.explicitContentFilter = e.explicitContentFilter || a.lxg.DISABLED, this.vanityURLCode = e.vanityURLCode || void 0, this.premiumTier = e.premiumTier || a.Eu4.NONE, this.premiumSubscriberCount = e.premiumSubscriberCount || 0, this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, this.systemChannelFlags = e.systemChannelFlags, this.discoverySplash = e.discoverySplash || null, this.rulesChannelId = e.rulesChannelId || null, this.safetyAlertsChannelId = e.safetyAlertsChannelId || null, this.publicUpdatesChannelId = e.publicUpdatesChannelId || null, this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, this.maxMembers = e.maxMembers || -1, this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : a.V_K.DEFAULT, this.hubType = e.hubType, this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null, this.clan = null !== (i = e.clan) && void 0 !== i ? i : null
  }
}
class c extends d {
  constructor(e) {
    var t;
    super(e), _(this, "roles", void 0), this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}
  }
}