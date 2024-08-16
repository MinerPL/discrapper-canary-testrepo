n.d(t, {
    L: function () {
        return s;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(470079),
    i = n(772848);
let a = new Worker(new URL('/assets/' + n.u('77459'), n.b));
function s(e, t, n) {
    let s = n && 1 === t && null != e,
        [o, l] = r.useState(void 0);
    return (
        r.useEffect(() => {
            let t = !1;
            if (s) {
                var n;
                ((n = e),
                new Promise((e) => {
                    let t = (0, i.Z)(),
                        r = (n) => {
                            let {
                                data: { id: i, png: s }
                            } = n;
                            t === i && (e(s), a.removeEventListener('message', r));
                        };
                    a.addEventListener('message', r),
                        a.postMessage({
                            id: t,
                            placeholderData: n
                        });
                })).then((e) => {
                    if (!t) l(e);
                });
            }
            return () => {
                t = !0;
            };
        }, [e, s]),
        o
    );
}
