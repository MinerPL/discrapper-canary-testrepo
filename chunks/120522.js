n.d(t, {
    S: function () {
        return c;
    },
    z: function () {
        return u;
    }
});
var r = n(544891), i = n(570140), a = n(168232), o = n(594174), s = n(114064), l = n(981631);
async function u() {
    let e = o.default.getCurrentUser();
    try {
        let {body: t} = await r.tn.get({ url: l.ANM.USER_PERKS_DEMOS });
        (0, a.QI)(e) && (t = {
            ...t,
            ...function () {
                let e = s.Z.overrides(), t = {};
                for (let i in e) {
                    var n, r;
                    t[i] = null !== (r = null === (n = e[i]) || void 0 === n ? void 0 : n.available) && void 0 !== r ? r : void 0;
                }
                return t;
            }()
        }), i.Z.dispatch({
            type: 'PREMIUM_PERKS_DEMOS_FETCH_SUCCESS',
            demos: t
        });
    } catch (e) {
        i.Z.dispatch({ type: 'PREMIUM_PERKS_DEMOS_FETCH_FAILURE' });
    }
}
async function c(e) {
    if (s.Z.getActivated()[e])
        return !0;
    let t = o.default.getCurrentUser();
    try {
        if ((0, a.QI)(t) && function (e) {
                var t;
                return (null === (t = s.Z.overrides()[e]) || void 0 === t ? void 0 : t.activateSuccess) === !0;
            }(e))
            return d(e), !0;
        return await r.tn.post({ url: l.ANM.USER_PERKS_DEMOS_ACTIVATE(e) }), d(e), !0;
    } catch {
        return i.Z.dispatch({
            type: 'PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE',
            perkType: e
        }), !1;
    }
}
function d(e) {
    i.Z.dispatch({
        type: 'PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS',
        perkType: e
    });
}
