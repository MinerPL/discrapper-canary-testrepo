n.d(t, {
    Z: function () {
        return a;
    }
}), n(47120);
var r = n(470079), i = n(439849);
function a(e, t) {
    let [n, a] = r.useState();
    return r.useEffect(() => {
        if (null == e || null != t) {
            a(void 0);
            return;
        }
        (0, i.Z)().then(t => {
            if (null != t)
                t.identifyGame(e, (e, t) => {
                    if (0 === e && null != t.icon && '' !== t.icon && null != t.name && '' !== t.name)
                        a('data:image/png;base64,'.concat(t.icon));
                });
        });
    }, [
        e,
        t
    ]), null != t ? t : n;
}
