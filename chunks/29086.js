n.d(t, {
    Y: function () {
        return c;
    }
}),
    n(733860);
var i = n(192379),
    r = n(963202),
    a = n(169559),
    l = n(726115),
    s = n(859921),
    o = n(128449);
function c() {
    let e = (0, a.Z)('global_discovery'),
        { enableClanCreation: t } = (0, r.C3)({
            location: 'global_discovery',
            includeConverted: !0,
            autoTrackExposure: !0
        }),
        { signupEnabled: n } = (0, r.Pu)({
            location: 'global_discovery',
            autoTrackExposure: !0
        }),
        c = s.Z.useField('selectedTab'),
        d = i.useMemo(() => {
            let i = [o.vf.GAMING, o.vf.MUSIC, o.vf.ENTERTAINMENT, o.vf.TECH, o.vf.EDUCATION, o.vf.HUBS];
            return (
                e || t || n ? i.unshift(o.vf.GUILDS) : i.unshift(o.vf.FEATURED),
                i.map((e) => ({
                    id: e,
                    label: (0, l.vb)(e)
                }))
            );
        }, [t, e, n]),
        u = i.useCallback((e) => {
            s.Z.setState({ selectedTab: e });
        }, []);
    return (
        i.useEffect(() => {
            (null == c || !d.some((e) => e.id === c)) && u(d[0].id);
        }, [c, d, u]),
        {
            tabs: d,
            selectedTab: null != c ? c : d[0].id,
            setSelectedTab: u
        }
    );
}
