t.d(n, {
    J: function () {
        return a;
    }
});
var i = t(442837), r = t(19780), u = t(977059), l = t(760373);
function a(e) {
    let {
            channelId: n,
            location: t
        } = e, a = u.c.useExperiment({ location: t });
    return (0, i.e7)([r.Z], () => function (e, n, t) {
        var i;
        let {enabled: u} = n;
        if (!u || null == e || r.Z.getChannelId() !== e)
            return !1;
        let a = null === (i = t.getSecureFramesState()) || void 0 === i ? void 0 : i.version;
        return null != a && a > l.HK;
    }(n, a, r.Z));
}
