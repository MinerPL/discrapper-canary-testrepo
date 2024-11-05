n.d(t, {
    bG: function () {
        return l;
    },
    en: function () {
        return u;
    },
    h9: function () {
        return o;
    }
});
var r = n(442837),
    i = n(592125),
    a = n(594174),
    s = n(291574);
function o(e, t) {
    let n = (0, r.e7)([i.Z], () => i.Z.getChannel(e)),
        { enabled: o } = s.Z.useExperiment({ location: t });
    return (
        o &&
        (function (e) {
            if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
            let t = a.default.getUser(e.getRecipientId());
            return null != t && t.bot;
        })(n)
    );
}
function l(e) {
    let { enabled: t } = s.Z.useExperiment({ location: e });
    return t;
}
function u(e) {
    let { quickLaunchEnabled: t } = s.Z.useExperiment({ location: e });
    return t;
}
