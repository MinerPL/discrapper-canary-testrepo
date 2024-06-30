n.r(e), n.d(e, {
    installApplication: function () {
        return p;
    },
    performDefaultLibraryApplicationAction: function () {
        return f;
    },
    playApplication: function () {
        return o.a;
    },
    repairApplication: function () {
        return C;
    },
    updateApplication: function () {
        return h;
    }
});
var i = n(51025), o = n(696748), a = n(812206), l = n(173747), s = n(7956), r = n(417363), c = n(941128), d = n(702523), u = n(981631);
function p(t, e, n) {
    let i = a.Z.getApplication(t);
    if (null == i)
        return;
    let o = l.Z.getTargetBuildId(i.id, e), s = l.Z.getTargetManifests(i.id, e);
    null != o && null != s && null != d.L && (0, d.L)(i, e, o, s, n);
}
function h(t, e) {
    let n = a.Z.getApplication(t);
    if (null != n)
        return i.li(n, e, l.Z.getTargetBuildId(n.id, e), l.Z.getTargetManifests(n.id, e));
}
function C(t, e, n) {
    let o = a.Z.getApplication(t);
    if (null != o)
        return i.cG(o, e, n);
}
function f(t, e) {
    let n = (0, s.i)(t, r.Z, c.Z), {analyticsParams: i} = e;
    switch (n) {
    case u.apO.PLAY:
        return (0, o.a)(t.id, t, { analyticsParams: i });
    case u.apO.INSTALL:
        return p(t.id, t.branchId, i.source);
    case u.apO.UPDATE:
        return h(t.id, t.branchId);
    }
}
