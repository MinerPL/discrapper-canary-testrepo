n.d(t, {
    Cf: function () {
        return f;
    },
    Fq: function () {
        return l;
    },
    HP: function () {
        return s;
    },
    I5: function () {
        return c;
    },
    ID: function () {
        return h;
    },
    IO: function () {
        return I;
    },
    It: function () {
        return u;
    },
    W3: function () {
        return g;
    },
    b9: function () {
        return S;
    },
    cV: function () {
        return d;
    },
    g_: function () {
        return E;
    },
    iq: function () {
        return o;
    },
    pG: function () {
        return T;
    },
    sr: function () {
        return p;
    },
    xn: function () {
        return _;
    },
    z5: function () {
        return m;
    }
}), n(411104);
var r = n(544891), i = n(570140);
n(37234);
var a = n(981631);
async function o(e, t) {
    let {
        nick: n,
        avatar: o,
        avatarDecoration: s
    } = t;
    if (null == e)
        throw Error('Need guildId');
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let l = {
        nick: n,
        avatar: o,
        avatar_decoration_id: null === s ? null : null == s ? void 0 : s.id,
        avatar_decoration_sku_id: null === s ? null : null == s ? void 0 : s.skuId
    };
    try {
        let t = await r.tn.patch({
            url: a.ANM.SET_GUILD_MEMBER(e),
            body: l,
            oldFormErrors: !0
        });
        return i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }), i.Z.dispatch({
            type: 'GUILD_MEMBER_PROFILE_UPDATE',
            guildMember: t.body,
            guildId: e
        }), t;
    } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.Z.dispatch({
            type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
            errors: t.body
        });
    }
}
function s(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function l(e, t) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function u() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function c(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function _(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function E(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function I() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function T() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function g() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function S() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
