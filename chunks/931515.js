n.d(t, {
    LE: function () {
        return I;
    },
    Qc: function () {
        return m;
    }
});
var i = n(470079), s = n(348327), a = n.n(s), r = n(143927), l = n(442837), o = n(224706), c = n(963202), d = n(229765), u = n(10473), _ = n(207796), E = n(976757), h = n(308083);
function I() {
    let e = (0, _.GN)(e => e.setGame, r.Z), t = (0, _.GN)(e => e.setSelectedGames, r.Z), n = (0, _.GN)(e => e.selectedGames, r.Z), s = (0, _.GN)(_.t1, a()), E = (0, c.An)({ location: 'clan_discovery' }), {defaultGameId: I} = (0, c.nk)('clan_discovery'), m = null != E ? E : I, p = function () {
            let e = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery());
            return i.useEffect(() => {
                !e && (0, d.X)();
            }, [e]), e;
        }(), g = (0, l.e7)([u.Z], () => u.Z.isLoading());
    return i.useEffect(() => {
        !(n.length > 0) && (m === h.nJ ? (e(_.hz.VALORANT), t([m])) : m === h.xn && (e(_.hz.GENSHIN), t([m])));
    }, [
        e,
        t,
        m,
        n
    ]), i.useEffect(() => {
        p && (0, d.j)(s);
    }, [
        s,
        p
    ]), i.useEffect(() => {
        o.Z.getDetectableGames();
    }, []), { loading: g };
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = (0, _.GN)(_.t1, a()), n = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery()), s = (0, l.e7)([u.Z], () => u.Z.getSearchResult(t), [t]);
    return {
        loaded: n,
        clans: i.useMemo(() => {
            if ((0, E.Pw)(s)) {
                let t = s.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [
            e,
            s
        ]),
        searchCriteria: t,
        searchResult: s
    };
}
