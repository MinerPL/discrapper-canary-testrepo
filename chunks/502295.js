n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(470079);
let i = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 0
});
function a() {
    let e = (0, r.useRef)(null),
        t = (0, r.useCallback)(() => {
            let { current: t } = e;
            if (null != t) {
                let { scrollTop: e, scrollLeft: n, scrollHeight: r, scrollWidth: i, offsetHeight: a, offsetWidth: s } = t;
                return {
                    scrollTop: e,
                    scrollLeft: n,
                    scrollHeight: r,
                    scrollWidth: i,
                    offsetHeight: a,
                    offsetWidth: s,
                    dirty: 0
                };
            }
            return i;
        }, []);
    return {
        scrollerRef: e,
        getScrollerState: t
    };
}
