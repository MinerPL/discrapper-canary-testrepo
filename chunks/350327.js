n.d(t, {
    CM: function () {
        return S;
    },
    Cf: function () {
        return m;
    },
    ID: function () {
        return T;
    },
    Xz: function () {
        return N;
    },
    Z: function () {
        return f;
    },
    c_: function () {
        return A;
    },
    f4: function () {
        return O;
    },
    g_: function () {
        return I;
    },
    ho: function () {
        return p;
    },
    pG: function () {
        return h;
    },
    rf: function () {
        return R;
    },
    x3: function () {
        return v;
    },
    z5: function () {
        return g;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    s = n(957730),
    o = n(695346),
    l = n(594174),
    u = n(626135),
    c = n(956664),
    d = n(981631),
    _ = n(474936);
function E(e) {
    u.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: _.h1.PREMIUM_STANDARD
    });
}
async function f(e, t) {
    var n, u, c;
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
            url: null != t ? d.ANM.GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
            body: e
        });
        if (n.ok) {
            let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id,
                t = null === (c = n.body.profile_effect) || void 0 === c ? void 0 : c.expires_at;
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
function h() {
    i.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function p(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, c.fD)(e))
              .then((e) => I(e))
        : null != e && I(e);
}
function I(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function T(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function S(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function A(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        E(_.QP.ANIMATED_AVATAR);
}
function N(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        E(_.QP.AVATAR_DECORATION);
}
function O(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        E(_.QP.PROFILE_BANNER);
}
function R(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        E(_.QP.PROFILE_THEME_COLOR);
}
function v(e) {
    i.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET',
        preset: e
    }),
        E(_.QP.PRESET);
}
