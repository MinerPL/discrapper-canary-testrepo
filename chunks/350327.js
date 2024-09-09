n.d(t, {
    CM: function () {
        return I;
    },
    Cf: function () {
        return p;
    },
    ID: function () {
        return m;
    },
    Xz: function () {
        return S;
    },
    Z: function () {
        return E;
    },
    c_: function () {
        return g;
    },
    f4: function () {
        return A;
    },
    g_: function () {
        return h;
    },
    pG: function () {
        return f;
    },
    rf: function () {
        return N;
    },
    z5: function () {
        return T;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    s = n(957730),
    o = n(695346),
    l = n(594174),
    u = n(626135),
    c = n(981631),
    d = n(474936);
function _(e) {
    u.default.track(c.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: d.h1.PREMIUM_STANDARD
    });
}
async function E(e, t) {
    var n, u, d;
    let _ = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == _) return;
    let E = o.dN.getSetting();
    null != e.bio && E && (e.bio = s.ZP.parse(void 0, e.bio).content);
    try {
        i.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: _
        });
        let n = await r.tn.patch({
            url: null != t ? c.ANM.GUILD_PROFILE(t, c.ME) : c.ANM.USER_PROFILE(c.ME),
            body: e
        });
        if (n.ok) {
            let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id,
                t = null === (d = n.body.profile_effect) || void 0 === d ? void 0 : d.expires_at;
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_SUCCESS',
                userId: _,
                profileEffectId: e,
                profileEffectExpiresAt: t,
                ...n.body
            });
        } else {
            let e = new a.Hx(n);
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: n.body,
                apiError: e
            });
        }
        return n;
    } catch (t) {
        let e = new a.Hx(t);
        return (
            i.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: {},
                apiError: e
            }),
            t
        );
    }
}
function f() {
    i.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function h(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function I(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function T(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        _(d.QP.ANIMATED_AVATAR);
}
function S(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        _(d.QP.AVATAR_DECORATION);
}
function A(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        _(d.QP.PROFILE_BANNER);
}
function N(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        _(d.QP.PROFILE_THEME_COLOR);
}
