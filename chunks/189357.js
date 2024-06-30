n.d(t, {
    By: function () {
        return d;
    },
    ms: function () {
        return _;
    }
}), n(47120);
var r = n(149765), i = n(442837), a = n(430824), o = n(594174), s = n(700785), l = n(686692), u = n(478743);
let c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
            a.Z,
            o.default
        ];
        if (null == e)
            return !1;
        let [n, i] = t, l = n.getGuild(e);
        if (null == l)
            return !1;
        let c = i.getCurrentUser();
        return r.Db(s.uB({
            user: c,
            context: l,
            checkElevated: !1
        }), u.N);
    }, d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == e)
            return !1;
        let r = c(e), i = (0, l.Qf)(e, {
                autoTrackExposure: t,
                disable: !r,
                location: n
            });
        return r && i;
    };
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0, r = (0, i.e7)([
            a.Z,
            o.default
        ], () => c(e, [
            a.Z,
            o.default
        ]), [e]), s = (0, l.Om)(e, {
            autoTrackExposure: t,
            disable: !r,
            location: n
        });
    return r && s;
}
