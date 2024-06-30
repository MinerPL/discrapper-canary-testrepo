var _, E;
t.d(e, {
    d: function () {
        return _;
    },
    t: function () {
        return r;
    }
}), (E = _ || (_ = {}))[E.SET_COMPLETED = 1] = 'SET_COMPLETED', E[E.UNSET_COMPLETED = 2] = 'UNSET_COMPLETED', E[E.DELETE_USER_MESSAGE = 3] = 'DELETE_USER_MESSAGE', E[E.SUBMIT_FEEDBACK = 4] = 'SUBMIT_FEEDBACK';
function r(n) {
    if (null == n)
        return null;
    let e = function (n) {
        if (null == n)
            return null;
        try {
            return JSON.parse(n);
        } catch (n) {
            return null;
        }
    }(n);
    return null == e || null == e.actions ? null : (Object.keys(e.actions).forEach(n => {
        e.actions[n].actionType = n;
    }), e);
}
