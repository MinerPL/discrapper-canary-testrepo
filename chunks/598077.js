"use strict";
n.d(t, {
  Z: function() {
    return E
  }
}), n(411104), n(789020);
var i = n(149765),
  r = n(81825),
  s = n(864106),
  o = n(768581),
  a = n(709054),
  l = n(981631),
  u = n(308083),
  _ = n(377668),
  d = n(474936);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends r.Z {
  get createdAt() {
    return new Date(a.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    return !0 === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = null != e ? this.guildMemberAvatars[e] : void 0;
    return null != i && null != e ? o.ZP.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n
    }) : o.ZP.getUserAvatarURL(this, n, t)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = {
      ...this.guildMemberAvatars,
      [e]: t
    };
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (void 0 === this.guildMemberAvatars[e]) return this;
    let t = {
      ...this.guildMemberAvatars,
      [e]: void 0
    };
    return this.merge({
      guildMemberAvatars: t
    })
  }
  getAvatarSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null != e) {
      let i = this.guildMemberAvatars[e];
      if (null != i) return o.ZP.getAnimatableSourceWithFallback(t, t => o.ZP.makeSource(o.ZP.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: i,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return o.ZP.getAnimatableSourceWithFallback(t, e => o.ZP.getUserAvatarSource({
      id: this.id,
      avatar: this.avatar,
      discriminator: this.discriminator,
      bot: this.bot
    }, e, n))
  }
  isClaimed() {
    return null != this.email || null != this.phone
  }
  isPhoneVerified() {
    return null != this.phone
  }
  toString() {
    return "" !== this.username ? this.username : "???"
  }
  get tag() {
    return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
  }
  hasPurchasedFlag(e) {
    return (this.purchasedFlags & e) === e
  }
  hasPremiumUsageFlag(e) {
    return (this.premiumUsageFlags & e) === e
  }
  hasHadSKU(e) {
    let t = d.vL[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.hasHadSKU(d.Si.TIER_0),
      n = this.hasHadSKU(d.Si.TIER_1),
      i = this.hasHadSKU(d.Si.TIER_2);
    if (e === d.p9.TIER_1) return n;
    if (e === d.p9.TIER_2) return i;
    if (e === d.p9.TIER_0) return t;
    else return t || n || i
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(l.xW$.PARTNER) || this.isStaffPersonal()
  }
  hasUrgentMessages() {
    return this.hasFlag(l.xW$.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === l.fo$
  }
  isLocalBot() {
    return this.bot && this.id === l.LAt
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(l.xW$.VERIFIED_BOT)
  }
  isSystemUser() {
    return !0 === this.system
  }
  isClyde() {
    return this.id === _.fL
  }
  hasAvatarForGuild(e) {
    return null != e && null != this.guildMemberAvatars[e]
  }
  isPomelo() {
    return "0" === this.discriminator
  }
  get avatarDecoration() {
    return this.avatarDecorationData
  }
  set avatarDecoration(e) {
    this.avatarDecorationData = (0, s.FG)(e)
  }
  constructor(e) {
    var t, n, r, s, o, a, _, d, E, I, T, h, S, f, N, A, m, O, R, C, p, g, L, v, D, M, P, y, U, b;
    super(), c(this, "id", void 0), c(this, "username", void 0), c(this, "discriminator", void 0), c(this, "avatar", void 0), c(this, "avatarDecorationData", void 0), c(this, "banner", void 0), c(this, "email", void 0), c(this, "verified", void 0), c(this, "bot", void 0), c(this, "system", void 0), c(this, "mfaEnabled", void 0), c(this, "mobile", void 0), c(this, "desktop", void 0), c(this, "premiumType", void 0), c(this, "flags", void 0), c(this, "publicFlags", void 0), c(this, "purchasedFlags", void 0), c(this, "premiumUsageFlags", void 0), c(this, "phone", void 0), c(this, "nsfwAllowed", void 0), c(this, "guildMemberAvatars", void 0), c(this, "hasBouncedEmail", void 0), c(this, "personalConnectionId", void 0), c(this, "globalName", void 0), c(this, "clan", void 0), c(this, "hasFlag", e => !1), c(this, "isStaff", () => !1), c(this, "isStaffPersonal", () => !1), c(this, "hasAnyStaffLevel", () => !1);
    let G = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
    this.id = e.id, this.username = null !== (r = e.username) && void 0 !== r ? r : "", this.discriminator = null !== (s = e.discriminator) && void 0 !== s ? s : l.fo$, this.avatar = null !== (o = e.avatar) && void 0 !== o ? o : null, this.avatarDecoration = null !== (a = e.avatar_decoration_data) && void 0 !== a ? a : e.avatarDecorationData, this.email = null !== (_ = e.email) && void 0 !== _ ? _ : null, this.verified = null !== (d = e.verified) && void 0 !== d && d, this.bot = null !== (E = e.bot) && void 0 !== E && E, this.system = null !== (I = e.system) && void 0 !== I && I, this.mfaEnabled = null !== (h = null !== (T = e.mfa_enabled) && void 0 !== T ? T : e.mfaEnabled) && void 0 !== h && h, this.mobile = null !== (S = e.mobile) && void 0 !== S && S, this.desktop = null !== (f = e.desktop) && void 0 !== f && f, this.premiumType = G === l.WND ? null : G, this.flags = null !== (N = e.flags) && void 0 !== N ? N : 0, this.publicFlags = null !== (m = null !== (A = e.public_flags) && void 0 !== A ? A : e.publicFlags) && void 0 !== m ? m : 0, this.purchasedFlags = null !== (R = null !== (O = e.purchased_flags) && void 0 !== O ? O : e.purchasedFlags) && void 0 !== R ? R : 0, this.premiumUsageFlags = null !== (p = null !== (C = e.premium_usage_flags) && void 0 !== C ? C : e.premiumUsageFlags) && void 0 !== p ? p : 0, this.phone = null !== (g = e.phone) && void 0 !== g ? g : null, this.nsfwAllowed = null !== (L = e.nsfw_allowed) && void 0 !== L ? L : e.nsfwAllowed, this.guildMemberAvatars = null !== (v = e.guildMemberAvatars) && void 0 !== v ? v : {}, this.hasBouncedEmail = null !== (M = null !== (D = e.has_bounced_email) && void 0 !== D ? D : e.hasBouncedEmail) && void 0 !== M && M, this.personalConnectionId = null !== (y = null !== (P = e.personal_connection_id) && void 0 !== P ? P : e.personalConnectionId) && void 0 !== y ? y : null, this.globalName = null !== (U = e.global_name) && void 0 !== U ? U : e.globalName, this.banner = e.banner, this.clan = (0, u.yi)(null !== (b = e.clan) && void 0 !== b ? b : null), Object.defineProperties(this, {
      hasFlag: {
        writable: !1,
        configurable: !1,
        value: e => {
          if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
          let t = i.vB(this.flags),
            n = i.vB(this.publicFlags),
            r = i.vB(e);
          return i.e$(i.$e(t, n), r)
        }
      },
      isStaff: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(l.xW$.STAFF)
      },
      isStaffPersonal: {
        writable: !1,
        configurable: !1,
        value: () => !this.hasFlag(l.xW$.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(l.xW$.STAFF) || this.hasFlag(l.xW$.COLLABORATOR) || this.hasFlag(l.xW$.RESTRICTED_COLLABORATOR)
      }
    }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
  }
}
new E({
  id: "0"
})