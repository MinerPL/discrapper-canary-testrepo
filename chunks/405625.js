n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(653041),
    n(47120);
var i = n(470079),
    l = n(911969),
    r = n(822245),
    a = n(675478),
    o = n(358085),
    u = n(761122);
function c(e) {
    return (
        a.DZ.loadIfNecessary(),
        i.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return (
                n.sort((e, n) => {
                    let i = r.Z.getScoreWithoutLoadingLatest(e),
                        l = r.Z.getScoreWithoutLoadingLatest(n);
                    return i !== l ? l - i : t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1;
                }),
                d(e, n)
            );
        }, [e])
    );
}
let d = (e, t) => {
    let n = [...e],
        i = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                n.splice(t, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]), ++i;
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                var t, n;
                let [i] = e,
                    r = null === (n = i.application.embeddedActivityConfig) || void 0 === n ? void 0 : null === (t = n.client_platform_config[(0, u.Z)((0, o.getOS)())]) || void 0 === t ? void 0 : t.label_type;
                return !!r && (r === l.ww.NEW || r === l.ww.UPDATED);
            })
            .forEach((e) => {
                let [t, i] = e,
                    l = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : i;
                if (l < i) {
                    let e = n[i];
                    n.splice(i, 1), (n = [...n.slice(0, l), e, ...n.slice(l)]);
                }
            }),
        n
    );
};
