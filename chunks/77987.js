n.d(t, {
    e: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(314897), a = n(449934), r = n(857458), l = n(981631);
function o(e, t) {
    var n, o;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function d(n) {
        if (!(0, a.$8)() && s.default.getLoginStatus() !== l.u34.LOGGING_IN && s.default.allowLogoutRedirect())
            return null != t ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(r.Z, {}) }) : (0, i.jsx)(r.Z, {});
        return (0, i.jsx)(e, { ...c.passProps ? n : null });
    }
    return d.displayName = 'Authenticated('.concat(null !== (o = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== o ? o : '<Unknown>', ')'), d;
}
