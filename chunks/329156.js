t(724458);
var n = t(735250),
    a = t(470079),
    i = t(392711),
    r = t(680295);
let o = (e) => (1 === e ? -1 : Math.floor(Math.random() * e));
s.Z = (e) => {
    let { config: s } = e,
        t = a.useMemo(() => (0, i.cloneDeep)(s), [s]),
        l = a.useMemo(() => s.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [s]),
        c = a.useMemo(() => {
            if (l) {
                let e = o(
                    t.effects.reduce((e, s) => {
                        var t;
                        let n = 1 + (null !== (t = s.randomizedSources) && void 0 !== t ? t : []).length;
                        return n > 1 ? (1 === e ? n : Math.min(n, e)) : e;
                    }, 1)
                );
                e > 0 &&
                    s.effects.forEach((s, n) => {
                        null != s.randomizedSources && s.randomizedSources.length > 0 && (t.effects[n].src = s.randomizedSources[e - 1]);
                    });
            }
            return t;
        }, [s.effects, t, l]);
    return (0, n.jsx)(r.n, {
        profileEffectConfig: c,
        profileEffectId: 'debug',
        debugForTool: !0
    });
};
