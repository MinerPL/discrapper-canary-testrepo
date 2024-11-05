t.d(l, {
    _: function () {
        return u;
    }
}),
    t(47120),
    t(192379);
var n = t(374470),
    i = t(254109),
    r = t(312097),
    a = t(52824),
    s = t(626135),
    o = t(981631),
    d = t(268108);
function u(e, l, t) {
    let u = {};
    for (let [m, h] of e.entries())
        u[
            (0, a.q)({
                proxyURL: h.proxyUrl,
                url: h.url
            })
        ] = (a) =>
            (function (e, l, t) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    u = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                    null != u &&
                        (s.default.track(
                            o.rMx.OPEN_MODAL,
                            {
                                type: o.jXE.MEDIA_VIEWER,
                                ...u
                            },
                            { throttlePercent: 0.01 }
                        ),
                        (0, i.fS)(u.guild_id, u.channel_id, u.channel_type, l.length)),
                    (0, r.K)({
                        ...a,
                        className: d.forcedTransparency,
                        onIndexChange: null != u ? i.f0 : void 0,
                        items: l,
                        startingIndex: t,
                        location: 'zoomedMediaModalHelper',
                        onCloseCallback: null != u ? i.VO : void 0
                    });
            })(a, e, m, l, t);
    return u;
}
