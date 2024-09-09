t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(735250);
t(470079);
var r = t(108930),
    i = t(86406),
    s = t(146068),
    o = t(308545),
    l = t(397697),
    c = t(129871),
    d = t(206851),
    u = t(246933),
    m = t(995414),
    _ = t(308083);
function f(e) {
    let { banner: n, ...t } = e;
    switch (n) {
        case _.qC.NIGHT_SKY:
            return (0, a.jsx)(l.Z, { ...t });
        case _.qC.CASTLE:
            return (0, a.jsx)(r.Z, { ...t });
        case _.qC.WORLD_MAP:
            return (0, a.jsx)(m.Z, { ...t });
        case _.qC.SEA_FOAM:
            return (0, a.jsx)(c.Z, { ...t });
        case _.qC.WARP_TUNNEL:
            return (0, a.jsx)(u.Z, { ...t });
        case _.qC.HOUSE:
            return (0, a.jsx)(s.Z, { ...t });
        case _.qC.HEIGHTMAP:
            return (0, a.jsx)(i.Z, { ...t });
        case _.qC.MESH:
            return (0, a.jsx)(o.Z, { ...t });
        case _.qC.SPATTER:
            return (0, a.jsx)(d.Z, { ...t });
    }
    return null;
}
