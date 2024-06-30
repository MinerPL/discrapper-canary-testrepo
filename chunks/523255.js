n.d(t, {
    SI: function () {
        return c;
    },
    hZ: function () {
        return u;
    }
});
var i = n(913527), a = n.n(i), s = n(835913), l = n(675478), r = n(581883), o = n(905567);
let c = e => {
        var t;
        if (!d(e))
            return !1;
        let n = null === (t = r.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt, i = null != n ? s.E.toDate(n) : void 0, l = null != i ? a()().diff(i, 'days') : null, c = null != n;
        if (c && !(null != l && l > 30))
            return !1;
        let {isEligible: u} = o.C.getCurrentConfig({ location: '657a81_1' }, { autoTrackExposure: !0 });
        return u;
    }, d = e => null != e && Date.now() - e.createdAt.getTime() > 2592000000, u = () => {
        let e = s.E.now();
        l.hW.updateAsync('userContent', t => {
            t.safetyUserSentimentNoticeDismissedAt = e;
        }, l.fy.INFREQUENT_USER_ACTION);
    };
