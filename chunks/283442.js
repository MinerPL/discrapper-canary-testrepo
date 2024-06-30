t.d(n, {
    Z: function () {
        return a;
    }
}), t(627494), t(757143);
var i = t(470079), l = t(812236);
function a(e) {
    let {
            applicationId: n,
            channel: t
        } = e, a = (0, l.SY)(t, n).commands[0];
    return i.useMemo(() => {
        let e = null == a ? void 0 : a.name;
        if (null != e)
            return (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
    }, [a]);
}
