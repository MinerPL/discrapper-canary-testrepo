t.d(s, {
    C: function () {
        return a;
    },
    u: function () {
        return i;
    }
});
var n = t(570140);
let a = (e, s) => {
        n.Z.dispatch({
            type: 'SET_PREMIUM_TYPE_OVERRIDE',
            premiumType: e
        }),
            n.Z.dispatch({
                type: 'UPDATE_CLIENT_PREMIUM_TYPE',
                user: s
            });
    },
    i = (e) => {
        n.Z.dispatch({
            type: 'SET_CREATED_AT_OVERRIDE',
            createdAt: e
        });
    };
