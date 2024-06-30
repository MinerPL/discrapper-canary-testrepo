n.d(t, {
    Z: function () {
        return E;
    }
}), n(411104), n(789020);
var r = n(149765), i = n(81825), a = n(864106), o = n(768581), s = n(709054), l = n(981631), u = n(308083), c = n(377668), d = n(474936);
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class E extends i.Z {
    get createdAt() {
        return new Date(s.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != r && null != e ? o.ZP.getGuildMemberAvatarURLSimple({
            guildId: e,
            avatar: r,
            userId: this.id,
            canAnimate: n
        }) : o.ZP.getUserAvatarURL(this, n, t);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t)
            return this;
        let n = {
            ...this.guildMemberAvatars,
            [e]: t
        };
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e])
            return this;
        let t = {
            ...this.guildMemberAvatars,
            [e]: void 0
        };
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let r = this.guildMemberAvatars[e];
            if (null != r)
                return o.ZP.getAnimatableSourceWithFallback(t, t => o.ZP.makeSource(o.ZP.getGuildMemberAvatarURLSimple({
                    guildId: e,
                    avatar: r,
                    userId: this.id,
                    canAnimate: t,
                    size: n
                })));
        }
        return o.ZP.getAnimatableSourceWithFallback(t, e => o.ZP.getUserAvatarSource({
            id: this.id,
            avatar: this.avatar,
            discriminator: this.discriminator,
            bot: this.bot
        }, e, n));
    }
    isClaimed() {
        return null != this.email || null != this.phone;
    }
    isPhoneVerified() {
        return null != this.phone;
    }
    toString() {
        return '' !== this.username ? this.username : '???';
    }
    get tag() {
        return ''.concat(this.username, '#').concat(''.concat(this.discriminator).padStart(4, '0'));
    }
    hasPurchasedFlag(e) {
        return (this.purchasedFlags & e) === e;
    }
    hasPremiumUsageFlag(e) {
        return (this.premiumUsageFlags & e) === e;
    }
    hasHadSKU(e) {
        let t = d.vL[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = this.hasHadSKU(d.Si.TIER_0), n = this.hasHadSKU(d.Si.TIER_1), r = this.hasHadSKU(d.Si.TIER_2);
        if (e === d.p9.TIER_1)
            return n;
        if (e === d.p9.TIER_2)
            return r;
        if (e === d.p9.TIER_0)
            return t;
        else
            return t || n || r;
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(l.xW$.PARTNER) || this.isStaffPersonal();
    }
    hasUrgentMessages() {
        return this.hasFlag(l.xW$.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || this.bot && this.discriminator === l.fo$;
    }
    isLocalBot() {
        return this.bot && this.id === l.LAt;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(l.xW$.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    isClyde() {
        return this.id === c.fL;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    isPomelo() {
        return '0' === this.discriminator;
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, a.FG)(e);
    }
    constructor(e) {
        var t, n, i, a, o, s, c, d, E, f, h, p, m, I, T, g, S, A, N, v, O, R, C, y, D, L, b, M, P, U;
        super(), _(this, 'id', void 0), _(this, 'username', void 0), _(this, 'discriminator', void 0), _(this, 'avatar', void 0), _(this, 'avatarDecorationData', void 0), _(this, 'banner', void 0), _(this, 'email', void 0), _(this, 'verified', void 0), _(this, 'bot', void 0), _(this, 'system', void 0), _(this, 'mfaEnabled', void 0), _(this, 'mobile', void 0), _(this, 'desktop', void 0), _(this, 'premiumType', void 0), _(this, 'flags', void 0), _(this, 'publicFlags', void 0), _(this, 'purchasedFlags', void 0), _(this, 'premiumUsageFlags', void 0), _(this, 'phone', void 0), _(this, 'nsfwAllowed', void 0), _(this, 'guildMemberAvatars', void 0), _(this, 'hasBouncedEmail', void 0), _(this, 'personalConnectionId', void 0), _(this, 'globalName', void 0), _(this, 'clan', void 0), _(this, 'hasFlag', e => !1), _(this, 'isStaff', () => !1), _(this, 'isStaffPersonal', () => !1), _(this, 'hasAnyStaffLevel', () => !1);
        let w = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
        this.id = e.id, this.username = null !== (i = e.username) && void 0 !== i ? i : '', this.discriminator = null !== (a = e.discriminator) && void 0 !== a ? a : l.fo$, this.avatar = null !== (o = e.avatar) && void 0 !== o ? o : null, this.avatarDecoration = null !== (s = e.avatar_decoration_data) && void 0 !== s ? s : e.avatarDecorationData, this.email = null !== (c = e.email) && void 0 !== c ? c : null, this.verified = null !== (d = e.verified) && void 0 !== d && d, this.bot = null !== (E = e.bot) && void 0 !== E && E, this.system = null !== (f = e.system) && void 0 !== f && f, this.mfaEnabled = null !== (p = null !== (h = e.mfa_enabled) && void 0 !== h ? h : e.mfaEnabled) && void 0 !== p && p, this.mobile = null !== (m = e.mobile) && void 0 !== m && m, this.desktop = null !== (I = e.desktop) && void 0 !== I && I, this.premiumType = w === l.WND ? null : w, this.flags = null !== (T = e.flags) && void 0 !== T ? T : 0, this.publicFlags = null !== (S = null !== (g = e.public_flags) && void 0 !== g ? g : e.publicFlags) && void 0 !== S ? S : 0, this.purchasedFlags = null !== (N = null !== (A = e.purchased_flags) && void 0 !== A ? A : e.purchasedFlags) && void 0 !== N ? N : 0, this.premiumUsageFlags = null !== (O = null !== (v = e.premium_usage_flags) && void 0 !== v ? v : e.premiumUsageFlags) && void 0 !== O ? O : 0, this.phone = null !== (R = e.phone) && void 0 !== R ? R : null, this.nsfwAllowed = null !== (C = e.nsfw_allowed) && void 0 !== C ? C : e.nsfwAllowed, this.guildMemberAvatars = null !== (y = e.guildMemberAvatars) && void 0 !== y ? y : {}, this.hasBouncedEmail = null !== (L = null !== (D = e.has_bounced_email) && void 0 !== D ? D : e.hasBouncedEmail) && void 0 !== L && L, this.personalConnectionId = null !== (M = null !== (b = e.personal_connection_id) && void 0 !== b ? b : e.personalConnectionId) && void 0 !== M ? M : null, this.globalName = null !== (P = e.global_name) && void 0 !== P ? P : e.globalName, this.banner = e.banner, this.clan = (0, u.yi)(null !== (U = e.clan) && void 0 !== U ? U : null), Object.defineProperties(this, {
            hasFlag: {
                writable: !1,
                configurable: !1,
                value: e => {
                    if (e <= 1073741824)
                        return ((this.flags | this.publicFlags) & e) === e;
                    let t = r.vB(this.flags), n = r.vB(this.publicFlags), i = r.vB(e);
                    return r.e$(r.$e(t, n), i);
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
        }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null);
    }
}
new E({ id: '0' });
