var r = n(470079),
    i = n(979590),
    a = n.n(i),
    s = n(866442),
    o = n(442837),
    l = n(607070);
t.Z = (e) => {
    let t = (0, o.e7)([l.Z], () => (l.Z.desaturateUserColors ? l.Z.saturation : 1));
    return (0, r.useMemo)(() => {
        let { h: n, s: r, l: i } = a()((0, s.Rf)(e)).toHsl(),
            o = a()({
                h: n,
                s: r * t,
                l: i
            });
        return {
            hex: o.toHexString(),
            hsl: o.toHslString()
        };
    }, [e, t]);
};
