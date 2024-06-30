t.d(a, {
    Z: function () {
        return d;
    }
});
var s = t(230711), n = t(202527), o = t(332325), r = t(981631);
function d(e) {
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {shouldMergeGameSettings: t} = n.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    t ? s.Z.open(r.oAB.GAMES, e, a) : s.Z.open(function (e) {
        switch (e) {
        case o.Z.MY_GAMES:
            return r.oAB.REGISTERED_GAMES;
        case o.Z.CLIPS:
            return r.oAB.CLIPS;
        case o.Z.OVERLAY:
            return r.oAB.OVERLAY;
        case o.Z.ACTIVITY_PRIVACY:
            return r.oAB.ACTIVITY_PRIVACY;
        }
    }(e), null, a);
}
