n.d(t, {
    G: function () {
        return _;
    },
    QI: function () {
        return c;
    },
    VR: function () {
        return d;
    },
    jX: function () {
        return l;
    }
}), n(789020);
var r = n(512722), i = n.n(r), a = n(630388), o = n(48541), s = n(981631);
function l(e, t, n) {
    !e && void 0 !== t && i()(n === t, 'Premium type should not change for non-staff users');
}
function u(e) {
    return 'production' === o.C.TEST && null != e ? e : 'production';
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return u(t) === o.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.C.STAGING || null != e && (e.isStaff() || e.isStaffPersonal());
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return u(t) === o.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.C.STAGING || null != e && (!!(null != e.flags && (0, a.yE)(e.flags, s.xW$.STAFF)) || null != e.personal_connection_id);
}
function _(e) {
    return void 0 !== e ? e === s.WND ? null : e : e;
}
