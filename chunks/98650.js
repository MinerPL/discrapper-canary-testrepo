n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(470079),
    i = n(237617);
function a(e) {
    let t = (0, i.Z)(e);
    (0, r.useEffect)(() => {
        let e = requestAnimationFrame(function n() {
            var r;
            null === (r = t.current) || void 0 === r || r.call(t), (e = requestAnimationFrame(n));
        });
        return () => cancelAnimationFrame(e);
    }, []);
}
