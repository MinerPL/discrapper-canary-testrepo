t.d(n, {
    f: function () {
        return _;
    }
}), t(47120);
var i = t(470079), l = t(243814), a = t(442837), r = t(384275), s = t(911969), o = t(10718), c = t(148958), u = t(881998);
t(445392);
var d = t(689079);
let m = { commandType: s.yU.CHAT }, p = {
        placeholderCount: 0,
        limit: d.tn,
        includeFrecency: !0
    };
function _(e, n) {
    let {
        sectionDescriptors: t,
        loading: s
    } = o.wi(e, m, p);
    return {
        loading: s,
        frecentApps: function (e, n) {
            i.useEffect(() => {
                e && r.Z.fetch();
            }, [e]);
            let t = (0, a.Wu)([u.Z], () => {
                    var n, t;
                    return e && null !== (t = null === (n = u.Z.getApps()) || void 0 === n ? void 0 : n.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : [];
                }, [e]), s = n.filter(e => e.id !== d.bi.FRECENCY && e.id !== d.bi.BUILT_IN);
            return (0, c.h)(s, e ? t : []);
        }(n, t)
    };
}
