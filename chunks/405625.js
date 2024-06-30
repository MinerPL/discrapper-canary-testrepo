n.d(t, {
    Z: function () {
        return d;
    }
}), n(653041), n(47120);
var i = n(470079), l = n(911969), o = n(822245), u = n(675478), a = n(358085), r = n(761122);
function d(e) {
    return u.DZ.loadIfNecessary(), i.useMemo(() => {
        let t = [];
        e.forEach(e => t.push(e.application.id));
        let n = [...t];
        return n.sort((e, n) => {
            let i = o.Z.getScoreWithoutLoadingLatest(e), l = o.Z.getScoreWithoutLoadingLatest(n);
            return i !== l ? l - i : t.findIndex(t => t === e) < t.findIndex(e => e === n) ? -1 : 1;
        }), c(e, n);
    }, [e]);
}
let c = (e, t) => {
    let n = [...e], i = 0;
    return t.forEach(e => {
        let t = n.findIndex(t => t.application.id === e);
        if (-1 !== t) {
            let e = n[t];
            n.splice(t, 1), n = [
                ...n.slice(0, i),
                e,
                ...n.slice(i)
            ], ++i;
        }
    }), n.map((e, t) => [
        e,
        t
    ]).filter(e => {
        var t, n;
        let [i] = e, o = null === (n = i.application.embeddedActivityConfig) || void 0 === n ? void 0 : null === (t = n.client_platform_config[(0, r.Z)((0, a.getOS)())]) || void 0 === t ? void 0 : t.label_type;
        return !!o && (o === l.ww.NEW || o === l.ww.UPDATED);
    }).forEach(e => {
        let [t, i] = e, l = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
        if (l < i) {
            let e = n[i];
            n.splice(i, 1), n = [
                ...n.slice(0, l),
                e,
                ...n.slice(l)
            ];
        }
    }), n;
};
