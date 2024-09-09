t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(470079),
    a = t(442837),
    i = t(355467),
    r = t(78839),
    o = t(261744),
    l = t(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        s = (0, o.Z)() === l.PY.SUBSCRIBED,
        t = (0, a.e7)([r.ZP], () => r.ZP.getActiveGuildSubscriptions()),
        d = n.useRef(!1);
    return (
        n.useEffect(() => {
            (function (e) {
                var s;
                let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: a } = e,
                    i = r.ZP.getActiveGuildSubscriptions();
                return ((null !== (s = null == i ? void 0 : i.length) && void 0 !== s ? s : 0) === 0 && !!a) || (!!t && !n) || (!n && !r.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: s,
                hasFetched: d.current
            }) && ((d.current = !0), i.jg());
        }, [e, s]),
        null != t ? t : c
    );
}
