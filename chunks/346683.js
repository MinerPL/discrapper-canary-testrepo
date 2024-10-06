t.d(n, {
    Q: function () {
        return l;
    }
}),
    t(47120);
var i = t(470079),
    a = t(542094);
function l(e) {
    let [n, t] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            if (e === a.JS.LEAVE) {
                let n = setTimeout(() => t(e), 100);
                return () => clearTimeout(n);
            }
            t(e);
        }, [e]),
        n
    );
}
