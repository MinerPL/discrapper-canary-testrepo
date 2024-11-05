t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(812236),
    l = t(989573);
function a(e) {
    let { channel: n, applicationId: t, botUserId: a } = e,
        o = (0, i.ms)({
            channel: n,
            applicationId: t,
            botUserId: a
        }),
        r = (0, l.Z)({ channelId: n.id });
    return o && null != a && !r;
}
