n.d(t, {
    Y: function () {
        return c;
    }
}),
    n(733860);
var i = n(470079),
    a = n(963202),
    s = n(169559),
    r = n(726115),
    l = n(859921),
    o = n(128449);
function c() {
    let e = (0, s.Z)('global_discovery'),
        { enableClanCreation: t } = (0, a.C3)({
            location: 'global_discovery',
            includeConverted: !0,
            autoTrackExposure: !0
        }),
        n = (0, l.jg)(),
        c = i.useMemo(() => {
            let n = [o.vf.GAMING, o.vf.MUSIC, o.vf.ENTERTAINMENT, o.vf.TECH, o.vf.EDUCATION, o.vf.HUBS];
            return (
                e || t ? n.unshift(o.vf.GUILDS) : n.unshift(o.vf.FEATURED),
                n.map((e) => ({
                    id: e,
                    label: (0, r.vb)(e)
                }))
            );
        }, [t, e]),
        d = i.useCallback((e) => {
            (0, l.jY)({ selectedTab: e });
        }, []);
    return (
        i.useEffect(() => {
            (null == n || !c.some((e) => e.id === n)) && d(c[0].id);
        }, [n, c, d]),
        {
            tabs: c,
            selectedTab: null != n ? n : c[0].id,
            setSelectedTab: d
        }
    );
}
