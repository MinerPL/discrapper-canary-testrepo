s.d(n, {
    z: function () {
        return c;
    }
}), s(47120);
var a = s(470079), t = s(409813), r = s(45572);
function c(e) {
    let {
            purchaseState: n,
            currentStep: s,
            initialScene: c,
            purchaseScene: i,
            errorScene: L,
            successScene: C
        } = e, [l, u] = (0, a.useState)(c);
    return (0, a.useEffect)(() => {
        n === r.A.PURCHASING ? u(i) : n === r.A.FAIL && u(L);
    }, [
        n,
        i,
        L
    ]), (0, a.useEffect)(() => {
        s === t.h8.CONFIRM && u(C);
    }, [
        s,
        C
    ]), [
        l,
        u
    ];
}
