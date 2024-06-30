n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(470079), i = n(699581);
let a = Object.freeze({ box: 'border-box' });
function o(e) {
    let {
        ref: t,
        onUpdate: n,
        resizeObserver: o,
        listenerMap: s,
        key: l
    } = e;
    (0, r.useLayoutEffect)(() => {
        let {current: e} = t;
        return null != e && (s.set(e, e => {
            (0, i.flushSync)(() => {
                n(e, l);
            });
        }), o.observe(e, a)), () => {
            null != e && (o.unobserve(e), s.delete(e));
        };
    }, [
        n,
        o,
        t,
        s,
        l
    ]);
}
