t.d(n, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}), t(411104);
var r = t(735250), i = t(470079), o = t(399606), l = t(38618), u = t(423117), s = t(289393);
let a = i.createContext(void 0);
function c(e) {
    let n = i.useContext(a);
    if (null == n)
        throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let {
        listingsLoaded: t,
        fetchGroupListingsForGuild: r
    } = n;
    return r(), t;
}
function d(e) {
    let {
            guildId: n,
            children: t,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: _,
            dontFetchWhileTrue: f
        } = e, E = (0, o.e7)([l.Z], () => l.Z.isConnected()), I = (0, o.e7)([s.Z], () => null != n ? s.Z.getSubscriptionGroupListingsForGuildFetchState(n) : s.M.FETCHED), g = i.useRef(c), p = i.useCallback(() => {
            if (null == n || !E || !0 === f)
                return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (g.current || e === s.M.NOT_FETCHED) && (g.current = !1, u.FP(n, {
                includeSoftDeleted: d,
                countryCode: _
            }));
        }, [
            E,
            n,
            d,
            _,
            f
        ]), C = i.useMemo(() => I === s.M.FETCHED && !0 !== g.current, [
            I,
            g
        ]);
    return (0, r.jsx)(a.Provider, {
        value: {
            listingsLoaded: C,
            fetchGroupListingsForGuild: p
        },
        children: t
    });
}
