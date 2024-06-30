n.d(t, {
    VF: function () {
        return b;
    },
    WW: function () {
        return y;
    },
    XO: function () {
        return R;
    },
    Yp: function () {
        return O;
    },
    hC: function () {
        return L;
    },
    o9: function () {
        return D;
    },
    zC: function () {
        return C;
    }
});
var r = n(692547), i = n(481060), a = n(15385), o = n(709586), s = n(123245), l = n(981631);
n(474936);
var u = n(689938);
let c = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.ImagesIcon,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
    }), d = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: i.GifIcon,
            description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
        };
    }, _ = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.ImagesIcon,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
    }), E = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.GifIcon,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
    }), f = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.ShieldUserIcon,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
    }), h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: i.StickerIcon,
            description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
        };
    }, p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, n = 0, a = 0;
        switch (e) {
        case l.Eu4.TIER_1:
            n = 15, a = 100;
            break;
        case l.Eu4.TIER_2:
            n = 30, a = 150;
            break;
        case l.Eu4.TIER_3:
            n = 60, a = 250;
        }
        return {
            color: t,
            icon: i.StickerIcon,
            description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                numStickers: n,
                numEmojis: a
            })
        };
    }, m = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.StarIcon,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
    }), I = () => ({
        icon: a.Z,
        description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
    }), T = () => ({
        icon: o.Z,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
        description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
    }), g = () => ({
        icon: i.ShieldUserIcon,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
        description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
    }), S = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
        icon: i.ReactionIcon,
        description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
    }), A = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
        return {
            color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.ReactionIcon,
            description: e
        };
    }, N = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: s.Z,
        description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
    }), v = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: i.ScreenArrowIcon,
            description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
        };
    };
function O() {
    return [
        f(),
        _(),
        h(),
        A()
    ];
}
function R() {
    return [
        f(),
        p(l.Eu4.TIER_2),
        v(),
        A()
    ];
}
function C() {
    return [
        p(l.Eu4.TIER_3, r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        N(),
        m(),
        A()
    ];
}
function y() {
    return [
        m(),
        E(),
        p(l.Eu4.TIER_3),
        A()
    ];
}
function D() {
    return [
        c(),
        h(),
        d(),
        A()
    ];
}
function L() {
    return [
        h(),
        A()
    ];
}
function b() {
    return [
        T(),
        g(),
        I(),
        S()
    ];
}
