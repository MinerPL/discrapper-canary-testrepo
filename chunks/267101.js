t.d(n, {
    SO: function () {
        return g;
    },
    eD: function () {
        return _;
    },
    hO: function () {
        return f;
    },
    r: function () {
        return I;
    },
    ue: function () {
        return E;
    }
}), t(47120);
var r = t(470079), i = t(442837);
t(935369);
var o = t(38618), l = t(160404), u = t(496675), s = t(914010), a = t(495437), c = t(240864), d = t(981631);
let _ = e => {
        let n = (0, i.e7)([c.Z], () => null != e ? c.Z.getGuildProductsForGuildFetchState(e) : c.M.FETCHED, [e]), t = (0, i.e7)([o.Z], () => o.Z.isConnected()), [l, u] = r.useState(!0);
        return r.useEffect(() => {
            l && (n === c.M.NOT_FETCHED || n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e)) && t && a.EB(e), u(!t);
        }, [
            e,
            t,
            n,
            l
        ]), { listingsLoaded: n === c.M.FETCHED && !l };
    }, f = function (e, n) {
        let {requireCurrentGuild: t} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 }, l = (0, i.e7)([o.Z], () => o.Z.isConnected()), u = (0, i.e7)([s.Z], () => s.Z.getGuildId());
        return r.useEffect(() => {
            let r = c.Z.getGuildProductFetchState(n);
            if ((!t || u === e) && l && r === c.M.NOT_FETCHED)
                try {
                    a.cf(e, n);
                } catch (e) {
                }
        }, [
            e,
            n,
            l,
            u,
            t
        ]), (0, i.e7)([c.Z], () => c.Z.getGuildProduct(n));
    }, E = function (e) {
        let {publishedOnly: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([
            c.Z,
            l.Z
        ], () => c.Z.getGuildProductsForGuild(e, { publishedOnly: null != n ? n : !l.Z.isViewingServerShop(e) }));
    }, I = e => (0, i.e7)([c.Z], () => null == e ? void 0 : c.Z.getGuildProduct(e)), g = e => (0, i.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
