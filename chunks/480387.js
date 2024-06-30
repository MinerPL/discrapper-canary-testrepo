n.d(e, {
    HJ: function () {
        return d;
    },
    Zd: function () {
        return p;
    },
    yD: function () {
        return E;
    }
});
var r = n(213919), i = n(544891), l = n(570140), u = n(893776), o = n(710845), a = n(314897), c = n(726745), _ = n(981631);
let s = new o.Z('MultiAccountActionCreators');
function d() {
    let t = a.default.getId();
    c.Z.getUsers().forEach(async e => {
        let n, {id: u} = e, o = r.getToken(u);
        if (null == o || '' === o) {
            l.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: u
            });
            return;
        }
        l.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: u
        });
        try {
            n = await i.tn.get({
                url: _.ANM.ME,
                headers: { authorization: o },
                retries: 3
            });
        } catch (e) {
            let t = (null == e ? void 0 : e.status) === 401 || (null == e ? void 0 : e.status) === 403;
            l.Z.dispatch({
                type: t ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: u
            });
            return;
        }
        l.Z.dispatch({
            type: t === u ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }), l.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
            userId: u
        });
    });
}
function E(t, e) {
    s.log('Switching account to '.concat(t), { switchSynchronously: e });
    let n = r.getToken(t);
    return null == n ? (s.log('Switching accounts failed because there was no token'), l.Z.dispatch({
        type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
        userId: t
    }), Promise.resolve()) : u.Z.switchAccountToken(n, e);
}
function p(t) {
    l.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: t
    });
}
