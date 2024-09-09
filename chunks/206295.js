t(47120);
var a = t(470079),
    r = t(688619),
    s = t.n(r);
t(979590);
var o = t(442837),
    i = t(866442),
    l = t(607070),
    c = t(220082),
    d = t(981631);
n.Z = (e) => {
    var n, r, u, _, E, I;
    let A;
    A = t(481060).tokens;
    let p = (0, o.e7)([l.Z], () => l.Z.saturation),
        [m, T] = (0, c.Cf)(
            e,
            null !==
                (I =
                    null == A
                        ? void 0
                        : null === (E = A.colors) || void 0 === E
                          ? void 0
                          : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                            ? void 0
                            : null === (u = _.resolve) || void 0 === u
                              ? void 0
                              : null ===
                                      (r = u.call(_, {
                                          theme: d.BRd.DARK,
                                          saturation: p
                                      })) || void 0 === r
                                ? void 0
                                : null === (n = r.hex) || void 0 === n
                                  ? void 0
                                  : n.call(r)) && void 0 !== I
                ? I
                : '#000'
        );
    return a.useMemo(() => {
        let e = (0, i._i)(m),
            n = (0, i._i)(T);
        for (let n = 1; n < 8 && !((0, i.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, i.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
        }
        let t = (0, i.Rf)(e);
        return {
            primaryColor: t,
            secondaryColor: (0, i.Rf)(n)
        };
    }, [m, T]);
};
