n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(470079), a = n(661111);
function r(e) {
    s.useEffect(() => {
        if (null != e)
            return a.Z.lockChangeLog(e), () => {
                a.Z.unlockChangeLog(e);
            };
    }, [e]);
}
