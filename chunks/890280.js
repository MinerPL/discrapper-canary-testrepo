t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(470079),
    a = t(442837),
    l = t(110924),
    o = t(317381);
function r(e) {
    let { applicationId: n, channelId: t, launchingComponentId: r, onSubmissionComplete: s } = e,
        c = (0, a.e7)([o.ZP], () => o.ZP.getLaunchState(n, t)),
        d = null != c && c.isLaunching && c.componentId === r,
        u = (0, l.Z)(d);
    return (
        i.useEffect(() => {
            !d && u && (null == s || s());
        }, [d, u, s]),
        {
            submitting: d,
            wasSubmitting: u
        }
    );
}
