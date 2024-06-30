n.d(t, {
    IE: function () {
        return L;
    },
    K9: function () {
        return I;
    },
    NX: function () {
        return p;
    },
    R_: function () {
        return C;
    },
    e$: function () {
        return _;
    },
    ti: function () {
        return h;
    },
    zV: function () {
        return c;
    }
}), n(757143), n(47120), n(627341);
var r = n(913527), i = n.n(r), o = n(278074), a = n(768581), s = n(709054), f = n(624138), d = n(219496), u = n(801461), l = n(689938);
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a.ZP.getUserAvatarURL({
        id: e.id,
        avatar: e.avatar,
        bot: e.bot,
        discriminator: '0000'
    }, t, 80);
}
function _(e) {
    let t = (0, f._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let m = [
        '@',
        '#',
        ':'
    ], g = [
        '```',
        'discord',
        'hypesquad',
        'system message',
        'system mesage',
        'sustem message',
        'sustem mesage',
        'clyde'
    ], R = [
        'discordtag',
        'everyone',
        'here',
        'discord nitro',
        'discord',
        'snowsgiving'
    ];
function p(e) {
    var t, n;
    let r = e.username.toLowerCase();
    if ((t = r, n = u.kt, t.split('').filter(e => !n.includes(e.charCodeAt(0))).join('')).length < 2)
        return !0;
    for (let e of m)
        if (r.includes(e))
            return !0;
    for (let e of R)
        if (r === e.toLowerCase())
            return !0;
    for (let e of g)
        if (r.includes(e.toLowerCase()))
            return !0;
    return !1;
}
function C(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function I(e) {
    let t = s.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {
    }
    return null;
}
function h(e) {
    return (0, o.EQ)(e).with({ rateLimited: !0 }, () => ({
        type: d.K.RATE_LIMIT,
        message: l.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
    })).with({ error: o.P.not(o.P.nullish) }, e => {
        let {error: t} = e;
        return {
            type: d.K.ERROR,
            message: t
        };
    }).with({ taken: !1 }, () => ({
        type: d.K.AVAILABLE,
        message: l.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
    })).with({ taken: !0 }, () => ({
        type: d.K.ERROR,
        message: l.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
    })).with({ error: o.P.nullish }, () => ({
        type: d.K.INTERNAL_ERROR,
        message: ''
    })).otherwise(() => void 0);
}
function L(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
