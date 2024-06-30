s.d(t, {
    Cg: function () {
        return o;
    },
    Ro: function () {
        return c;
    },
    Tc: function () {
        return l;
    }
}), s(47120), s(653041);
var n = s(952639), a = s.n(n);
let i = /^(\d{4}-\d{1,2})/;
function r(e) {
    let t = i.exec(e);
    return null != t ? t[1] : null;
}
function o(e) {
    return Array.from(Object.entries(e)).map(e => {
        let [t, s] = e;
        return {
            id: t,
            experiment: s
        };
    });
}
function l(e, t) {
    return e.slice().sort((e, s) => {
        if (null != t[null == e ? void 0 : e.id] && null == t[null == s ? void 0 : s.id])
            return -1;
        if (null == t[null == e ? void 0 : e.id] && null != t[null == s ? void 0 : s.id])
            return 1;
        let n = r(e.id), a = r(s.id);
        if (null != n && null != a) {
            let e = a.localeCompare(n);
            if (0 !== e)
                return e;
        }
        return e.experiment.title.localeCompare(s.experiment.title);
    });
}
function c(e, t) {
    let s = t.split(/\s+/g).filter(e => '' !== e);
    if (0 === s.length)
        return e;
    let n = [];
    for (let t of e) {
        let e = 0;
        for (let n of s)
            (function e(t, s) {
                if (Array.isArray(t)) {
                    for (let n of t)
                        if (e(n, s))
                            return !0;
                } else if ('object' == typeof t && null !== t) {
                    for (let n of Object.values(t))
                        if (e(n, s))
                            return !0;
                } else if ('string' == typeof t && t.toLowerCase().includes(s.toLowerCase()))
                    return !0;
                return !1;
            }(t, n) && (e += 1));
        0 !== e && (null == n[e] && (n[e] = []), n[e].push(t));
    }
    return a()(n.filter(e => void 0 !== e).reverse());
}
