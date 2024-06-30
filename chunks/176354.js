n.d(t, {
    B6: function () {
        return A;
    },
    qc: function () {
        return N;
    },
    sp: function () {
        return S;
    }
}), n(47120), n(757143), n(653041);
var r = n(738774), i = n(906411), a = n(889564), o = n(131704), s = n(496675), l = n(594174), u = n(768581), c = n(563114), d = n(956664), _ = n(74538), E = n(981631), f = n(185923);
let h = new Set([
        f.Z5.PREMIUM_LOCKED,
        f.Z5.ROLE_SUBSCRIPTION_LOCKED
    ]), p = new Set([
        f.Z5.PREMIUM_LOCKED,
        f.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE,
        f.Z5.ROLE_SUBSCRIPTION_LOCKED,
        f.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE
    ]), m = new Set([
        f.Z5.DISALLOW_EXTERNAL,
        f.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE,
        f.Z5.ONLY_GUILD_EMOJIS_ALLOWED
    ]);
function I(e) {
    if (e.type === i.B.GUILD)
        return !0;
    return null != e.guildId;
}
function T(e, t) {
    return null != e && null != t && (!I(e) || t === e.guildId);
}
function g(e) {
    let {
        emoji: t,
        channel: n,
        guildId: i = null == n ? void 0 : n.getGuildId(),
        intention: u,
        forceIncludeExternalGuilds: c
    } = e;
    if (!I(t))
        return null;
    let d = null != n && (0, o.zi)(n.type), h = null != n && (0, o.bw)(n.type), p = T(t, i), m = s.Z.can(E.Plq.USE_EXTERNAL_EMOJIS, n);
    if (u === f.Hz.COMMUNITY_CONTENT)
        return p && null != t.guildId && t.available ? null : f.Z5.DISALLOW_EXTERNAL;
    if (!(0, f.Gt)(u) && !T(t, i) && !c || (d || h) && !p && !m)
        return f.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available)
        return f.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let g = l.default.getCurrentUser();
    if (!_.ZP.canUseEmojisEverywhere(g) && !p) {
        if (u === f.Hz.STATUS)
            return f.Z5.PREMIUM_LOCKED;
        if (!t.managed)
            return f.Z5.PREMIUM_LOCKED;
    }
    if ((0, a.Fv)(t, null != i ? i : void 0))
        return (0, r.Ol)(t.guildId) ? f.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : f.Z5.ROLE_SUBSCRIPTION_LOCKED;
    return !t.animated || _.ZP.canUseAnimatedEmojis(g) || (0, a.yH)(t) ? null : f.Z5.PREMIUM_LOCKED;
}
function S(e, t) {
    let n = 0, r = 0, a = 0, o = 0, s = 0, l = 0;
    return e.forEach(e => {
        null != e.id ? (e.type === i.B.GUILD && (e.guildId === t ? e.managed ? o++ : r++ : e.managed ? s++ : a++), e.animated && l++) : n++;
    }), {
        unicode: n,
        custom: r,
        customExternal: a,
        managed: o,
        managedExternal: s,
        animated: l
    };
}
async function A(e) {
    return await c.Z.getEmojiColors(e);
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32, {
            id: n,
            name: r,
            animated: i
        } = e;
    return null != n ? u.ZP.getEmojiURL({
        id: n,
        size: t,
        animated: null != i && i
    }) : c.Z.getURL(r);
}
t.ZP = {
    sanitizeEmojiName(e) {
        for (e = e.replace(f.sW, '').slice(0, f.Yc); e.length < 2;)
            e += '_';
        return e;
    },
    filterUnsupportedEmojis: c.Z.filterUnsupportedEmojis,
    getURL: c.Z.getURL,
    isInternalEmojiForGuildId: T,
    getEmojiUnavailableReason: g,
    isCustomEmoji: I,
    getEmojiUnavailableReasons(e) {
        let {
                categoryEmojis: t,
                channel: n,
                guildId: r,
                intention: i,
                computeUnfiltered: a = !1
            } = e, o = new Set(), s = 0, l = a ? [] : void 0, u = 0, c = !1;
        for (let e of t) {
            let t = g({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            null != t ? (m.has(t) ? s++ : a && (null == l || l.push(e)), h.has(t) && (!c && t === f.Z5.PREMIUM_LOCKED && (c = !0), null != e.id && o.add(e.id), u++)) : a && (null == l || l.push(e));
        }
        return {
            emojisDisabled: o,
            emojisUnfiltered: l,
            emojisFilteredCount: s,
            emojisPremiumLockedCount: u,
            emojiNitroLocked: c
        };
    },
    isEmojiFiltered(e) {
        let t = g(e);
        return m.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = g(e);
        return h.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let {
                categoryEmojis: t,
                channel: n,
                guildId: r,
                intention: i
            } = e, a = !1, o = 0;
        for (let e of t) {
            let t = g({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === f.Z5.PREMIUM_LOCKED ? (a = !0, o++) : t === f.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
        }
        return a && o === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = g(e);
        return p.has(t);
    },
    isFileTooBig: e => e.size > 2097152,
    isDataTooBig: e => (0, d.QB)(e) > f.h_
};
