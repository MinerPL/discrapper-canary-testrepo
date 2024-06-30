n.d(t, {
    M8: function () {
        return T;
    },
    Rd: function () {
        return I;
    },
    VM: function () {
        return u;
    },
    gU: function () {
        return E;
    },
    j_: function () {
        return R;
    },
    mq: function () {
        return d;
    },
    rW: function () {
        return _;
    }
});
var s = n(399606), a = n(594174), r = n(914788), i = n(546791), l = n(652262), o = n(880257), c = n(292352);
function d(e) {
    let t = Object.values((0, s.e7)([r.Z], () => r.Z.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
        var t;
        return null !== (t = e.user_id) && void 0 !== t ? t : void 0;
    }).filter(e => null != e);
    return (0, s.Wu)([a.default], () => t.map(e => a.default.getUser(e))).filter(e => null != e);
}
function _() {
    let e = (0, s.e7)([r.Z], () => r.Z.getLinkCode()), t = (0, s.e7)([a.default], () => a.default.getCurrentUser());
    return null == e || null == t ? null : (0, c._w)(t.id, e);
}
function u() {
    let e = (0, o.Z)(), t = d(c.ne.ACTIVE), n = e ? c.AG : c.i0;
    return t.length >= n;
}
function E() {
    let e = (0, s.e7)([a.default], () => a.default.getCurrentUser()), t = (0, s.e7)([r.Z], () => r.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === c.ne.PENDING && e.id !== t.requestor_id).length;
}
function T() {
    let e = (0, s.e7)([a.default], () => a.default.getCurrentUser()), t = (0, s.e7)([r.Z], () => r.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === c.ne.ACTIVE).length;
}
function I(e) {
    let t = (0, l.M)(), n = (0, s.e7)([r.Z], () => null == t ? null : r.Z.getRangeStartTimestamp());
    return null == n ? null : (0, i.LI)(new Date(n).getTime(), () => e, 7);
}
function R(e, t) {
    let n = (0, s.e7)([r.Z], () => r.Z.getLinkTimestamp(e));
    return null != n ? (0, i.lx)(Date.parse(n), t === c.ne.PENDING ? c.TX : c.Wz) : null;
}
