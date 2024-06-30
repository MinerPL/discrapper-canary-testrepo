n.d(t, {
    AT: function () {
        return N;
    },
    GY: function () {
        return d;
    },
    R4: function () {
        return A;
    },
    oE: function () {
        return o;
    },
    yb: function () {
        return C;
    }
}), n(47120), n(653041), n(470079);
var r = n(512722), a = n.n(r), s = n(913527), u = n.n(s), l = n(99945);
n(442837);
var i = n(821849), E = n(509545), _ = n(74538), c = n(981631), O = n(474936);
function C(e) {
    return e.items.map(e => {
        let t = E.Z.get(e.planId);
        return a()(null != t, 'Unable to fetch plan'), t;
    }).map(e => e.skuId);
}
function A(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return e.type === c.NYc.PREMIUM && null == r || (a()(null != r, 'Current subscription has no plan in group'), a()(!(r === O.Xh.PREMIUM_YEAR_TIER_1 && t === O.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), n.indexOf(r) < n.indexOf(t));
}
function d(e, t, n) {
    return !A(e, t, n);
}
function o(e, t) {
    let n = E.Z.get(e);
    if (null == n) {
        let n = O.GP[e];
        a()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let r = (0, _.Wz)(n.skuId);
        !E.Z.isFetchingForSKU(r) && (0, i.GZ)(r, t);
    }
    return n;
}
function N(e) {
    let t = Object.keys(l.T).filter(e => isNaN(Number(e)));
    if (e.status !== c.O0b.PAUSED)
        return {
            durations: t,
            currentDaysPaused: 0
        };
    if (null == e.pauseEndsAt)
        return {
            durations: [],
            currentDaysPaused: 0
        };
    {
        let n = u()(e.currentPeriodStart), r = Math.round(u()(e.pauseEndsAt).diff(n, 'days', !0)), a = [];
        for (let e of t)
            l.T[e] > r && a.push(e);
        return {
            durations: a,
            currentDaysPaused: r
        };
    }
}
