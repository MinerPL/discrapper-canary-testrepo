t.d(n, {
    z: function () {
        return i;
    }
}),
    t(47120);
var s = t(470079),
    r = t(409813),
    a = t(45572);
function i(e) {
    let { purchaseState: n, currentStep: t, initialScene: i, purchaseScene: c, errorScene: l, successScene: L } = e,
        [C, o] = (0, s.useState)(i);
    return (
        (0, s.useEffect)(() => {
            n === a.A.PURCHASING ? o(c) : n === a.A.FAIL && o(l);
        }, [n, c, l]),
        (0, s.useEffect)(() => {
            t === r.h8.CONFIRM && o(L);
        }, [t, L]),
        [C, o]
    );
}
