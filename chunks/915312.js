n.d(t, {
    LL: function () {
        return f;
    },
    bN: function () {
        return d;
    }
}), n(47120), n(653041);
var r = n(470079), i = n(652874), a = n(692114), o = n(626135), l = n(532810), u = n(981631);
let c = new a.Z('a11y_violations'), s = (0, i.Z)(() => ({ check: null }));
function d(e) {
    let t = (0, r.useCallback)(e => {
        var t;
        e.hash !== (null === (t = s.getState().check) || void 0 === t ? void 0 : t.hash) && (s.setState({ check: e }), !function (e) {
            for (let [t, n] of e.entries())
                for (let e of n.instances.values())
                    for (let {
                                trace: n,
                                hash: r
                            } of e) {
                        let e = JSON.stringify(r);
                        c.has(e) || (c.add(e), o.default.track(u.rMx.A11Y_RUNTIME_VIOLATION, {
                            rule_id: t,
                            trace: n.join('\n'),
                            hash: r
                        }));
                    }
        }(e.violations));
    }, []);
    (0, l.A$)(e, t);
}
function f() {
    return function (e) {
        if (null == e)
            return [];
        let t = [];
        for (let {
                    instances: n,
                    rule: r
                } of e.values())
            for (let [e, i] of n.entries()) {
                let n = i.map(e => e.element), a = i[0].message;
                t.push({
                    key: e,
                    title: r.metadata.description,
                    description: r.metadata.help,
                    id: r.id,
                    tags: r.tags,
                    elements: n,
                    message: a
                });
            }
        return t;
    }(s(e => {
        var t, n;
        return null !== (n = null === (t = e.check) || void 0 === t ? void 0 : t.violations) && void 0 !== n ? n : null;
    }));
}
