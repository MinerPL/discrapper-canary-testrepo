n.d(t, {
    V: function () {
        return l;
    }
});
var s = n(331119), a = n(575595), r = n(650032);
let i = 'getWhatsNewBadgeCount', l = () => {
        let {enabled: e} = r._.getCurrentConfig({ location: i }, { autoTrackExposure: !1 }), {enabled: t} = a.r.getCurrentConfig({ location: i }, { autoTrackExposure: !1 }), {enabled: n} = s.C.getCurrentConfig({ location: i }, { autoTrackExposure: !1 });
        return e && !t && !n;
    };
