n.d(t, {
    W1: function () {
        return u;
    },
    z6: function () {
        return c;
    }
});
var r = n(470079), i = n(683076), a = n(442837), o = n(224706), s = n(669764), l = n(539746);
let u = e => null != e && !1 === e.themes.includes(i.i.EROTIC) && null != e.summary && e.summary.length > 0, c = e => {
        let t = s.Z.getGame(e);
        return null != t && !1 === t.themes.includes(i.i.EROTIC) && null != t.firstReleaseDate && null != t.coverImageUrl && t.coverImageUrl.length > 0 && null != t.summary && t.summary.length > 0;
    };
t.ZP = e => {
    let {
            location: t,
            applicationId: n = '',
            autoTrackExposure: i = !0
        } = e, c = (0, l.xG)(t, i);
    r.useEffect(() => {
        c && null != n && '' !== n && o.Z.getDetectableGamesSupplemental([n]);
    }, [
        n,
        c
    ]);
    let d = (0, a.e7)([s.Z], () => s.Z.getGame(n)), _ = r.useMemo(() => null != d && u(d), [d]);
    return c && _;
};
