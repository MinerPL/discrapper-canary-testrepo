n.d(t, {
    E6: function () {
        return h;
    },
    HP: function () {
        return _;
    },
    II: function () {
        return E;
    },
    fK: function () {
        return f;
    },
    pL: function () {
        return m;
    },
    t6: function () {
        return g;
    },
    yp: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(765250),
    s = n(594190),
    o = n(788983),
    l = n(77498),
    u = n(355863),
    c = n(145597),
    d = n(501787);
async function f() {
    let { default: e } = await Promise.all([n.e('50506'), n.e('23755'), n.e('35535'), n.e('6380'), n.e('65840'), n.e('13351'), n.e('13513'), n.e('90508'), n.e('70348'), n.e('70205'), n.e('43053'), n.e('31915'), n.e('54814'), n.e('40630')]).then(n.bind(n, 989373));
    (0, a.te)(d.$S, u.Z.getDefaultLayout(d.$S, 1), 1),
        await o.bA(
            d.$J,
            (t) =>
                (0, r.jsx)(e, {
                    withTitleBar: !1,
                    windowKey: t
                }),
            { outOfProcessOverlay: !0 }
        );
}
function _(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function h(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function p(e, t) {
    return e.participantsVersion === t.participantsVersion;
}
function m() {
    let e = (0, c.QF)();
    return s.ZP.getGameForPID(e);
}
function g() {
    let e = m();
    return null != e && null != e.id ? l.Z.getDetectableGame(e.id) : null;
}
function E() {
    let e = (0, c.QF)();
    return (0, i.e7)([s.ZP], () => s.ZP.getGameForPID(e), [e]);
}
