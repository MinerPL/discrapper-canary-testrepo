n.d(t, {
    FD: function () {
        return h;
    },
    I5: function () {
        return A;
    },
    Mn: function () {
        return T;
    },
    P6: function () {
        return D;
    },
    S2: function () {
        return I;
    },
    UZ: function () {
        return N;
    },
    V3: function () {
        return S;
    },
    W3: function () {
        return y;
    },
    Zy: function () {
        return p;
    },
    b9: function () {
        return R;
    },
    cV: function () {
        return v;
    },
    ol: function () {
        return g;
    },
    si: function () {
        return C;
    },
    ss: function () {
        return m;
    },
    xn: function () {
        return O;
    }
});
var r = n(544891), i = n(433517), a = n(780384), o = n(570140), s = n(703656), l = n(626135), u = n(768581), c = n(546796), d = n(893776), _ = n(981631), E = n(792101), f = n(689938);
function h() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function p() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function m(e, t) {
    let n = t ? f.Z.Messages.DELETE_ACCOUNT : f.Z.Messages.DISABLE_ACCOUNT, i = t ? _.ANM.DELETE_ACCOUNT : _.ANM.DISABLE_ACCOUNT;
    return (0, c.Z)(t => r.tn.post({
        url: i,
        body: {
            password: e,
            ...t
        },
        oldFormErrors: !0
    }), {
        modalProps: { title: n },
        checkEnabled: !1
    }).then(() => {
        d.Z.logoutInternal(), (0, s.uL)(_.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function I(e) {
    let t = await r.tn.patch({
            url: _.ANM.ME,
            oldFormErrors: !0,
            body: e
        }), n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token, o.Z.dispatch({
            type: 'UPDATE_TOKEN',
            token: t,
            userId: n.id
        }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.Z.dispatch({
            type: 'PASSWORD_UPDATED',
            userId: n.id
        });
    }
    return o.Z.dispatch({
        type: 'CURRENT_USER_UPDATE',
        user: n
    }), t;
}
function T(e) {
    let {
        username: t,
        discriminator: n,
        email: r,
        emailToken: a,
        password: s,
        avatar: d,
        avatarDecoration: h,
        newPassword: p,
        globalName: m
    } = e;
    return o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }), (0, c.Z)(e => {
        let o = {
            username: t,
            email: r,
            email_token: a,
            password: s,
            avatar: d,
            discriminator: n,
            global_name: m,
            new_password: p,
            ...e
        };
        null === h && (o.avatar_decoration_id = null), null != h && (o.avatar_decoration_id = h.id, o.avatar_decoration_sku_id = h.skuId);
        let l = i.K.get(_.JkL), u = (0, E.xJ)();
        null != u && null != l && (o.push_provider = u, o.push_token = l);
        let c = i.K.get(_.scU);
        return null != E.mv && null != c && (o.push_voip_provider = E.mv, o.push_voip_token = c), I(o);
    }, {
        checkEnabled: !1,
        modalProps: { title: f.Z.Messages.TWO_FA_CHANGE_ACCOUNT },
        hooks: {
            onEarlyClose: () => o.Z.dispatch({
                type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                errors: {}
            })
        }
    }).then(e => {
        let t = e.body;
        return l.default.track(_.rMx.USER_AVATAR_UPDATED, { animated: (0, u.xR)(t.avatar) }), o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), e;
    }, e => (o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
        errors: e.body
    }), e));
}
function g() {
    return r.tn.get({
        url: _.ANM.USER_HARVEST,
        oldFormErrors: !0
    });
}
function S(e) {
    return r.tn.post({
        url: _.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0
    });
}
function A(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }), null == e ? a.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.uv.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED);
}
function N(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function v(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function O(e) {
    o.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function R() {
    o.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function C() {
    o.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function y() {
    o.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function D() {
    o.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
