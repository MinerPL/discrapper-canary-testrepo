t.d(s, {
    R: function () {
        return i;
    }
}),
    t(47120);
var n = t(470079),
    a = t(433517);
function i(e, s) {
    let [t, i] = n.useState(() => {
        let t = a.K.get(e);
        return null != t ? t : s;
    });
    return (
        n.useEffect(() => {
            null == a.K.get(e) && a.K.set(e, s);
        }, []),
        [
            t,
            n.useCallback(
                (s) => {
                    i(s), a.K.set(e, s);
                },
                [e]
            )
        ]
    );
}
