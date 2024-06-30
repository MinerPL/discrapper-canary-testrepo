n.d(t, {
    Av: function () {
        return c;
    },
    hp: function () {
        return u;
    },
    wE: function () {
        return d;
    }
});
var a = n(544891), s = n(570140), o = n(959776), r = n(626135), l = n(723359), i = n(981631);
function c(e, t) {
    return (0, o.Z)(e, t), r.default.track(i.rMx.AGE_GATE_ACTION, {
        source: t,
        action: l.Al.AGE_GATE_SUBMITTED
    }), a.tn.patch({
        url: i.ANM.ME,
        oldFormErrors: !0,
        body: { date_of_birth: e.format('YYYY-MM-DD') }
    }).then(e => {
        let n = e.body;
        s.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: n
        }), r.default.track(i.rMx.AGE_GATE_ACTION, {
            source: t,
            action: l.Al.AGE_GATE_SUCCESS
        });
    });
}
function d(e) {
    s.Z.dispatch({ type: 'AGE_GATE_PREVENT_UNDERAGE_REGISTRATION' }), r.default.track(i.rMx.AGE_GATE_ACTION, {
        source: e,
        action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
    });
}
function u(e) {
    s.Z.dispatch({ type: 'AGE_GATE_LOGOUT_UNDERAGE_NEW_USER' }), r.default.track(i.rMx.AGE_GATE_ACTION, {
        source: e,
        action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
    });
}
