n.d(t, {
    E: function () {
        return l;
    }
});
var r = n(470079), o = n(250683), i = n(253135);
function l(e) {
    let {
        codeBase64: t,
        chunkSize: n,
        desiredLength: l
    } = e;
    return r.useMemo(() => {
        if (null == t)
            return null;
        let e = o.toByteArray(t), r = (0, i.D)(e, l, n);
        if (null == r)
            return null;
        let u = RegExp('.{1,'.concat(n, '}'), 'g'), a = r.match(u);
        return null == a ? null : Array.from(a);
    }, [
        n,
        t,
        l
    ]);
}
