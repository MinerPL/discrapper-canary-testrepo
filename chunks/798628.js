n.d(t, {
    cE: function () {
        return r;
    },
    eu: function () {
        return o;
    },
    fU: function () {
        return c;
    }
});
var i = n(652874), a = n(902704);
let s = {}, l = (0, i.Z)(e => ({
        polls: {},
        updatePollState(t, n, i) {
            e(e => {
                var a;
                return {
                    polls: {
                        ...e.polls,
                        [t]: {
                            ...e.polls[t],
                            [n]: i(null === (a = e.polls[t]) || void 0 === a ? void 0 : a[n])
                        }
                    }
                };
            });
        }
    }));
function r(e) {
    return l(t => {
        var n;
        return null !== (n = t.polls[e]) && void 0 !== n ? n : s;
    }, a.Z);
}
function o(e, t, n) {
    l.getState().updatePollState(e, t, n);
}
function c(e, t) {
    var n;
    return null === (n = l.getState().polls[e]) || void 0 === n ? void 0 : n[t];
}
