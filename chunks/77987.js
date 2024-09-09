n.d(e, {
    e: function () {
        return u;
    }
});
var a = n(735250);
n(470079);
var r = n(314897),
    o = n(449934),
    s = n(857458),
    c = n(981631);
function u(t, e) {
    var n, u;
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function i(n) {
        if (!(0, o.$8)() && r.default.getLoginStatus() !== c.u34.LOGGING_IN && r.default.allowLogoutRedirect()) return null != e ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(s.Z, {}) }) : (0, a.jsx)(s.Z, {});
        return (0, a.jsx)(t, { ...(l.passProps ? n : null) });
    }
    return (i.displayName = 'Authenticated('.concat(null !== (u = null !== (n = t.displayName) && void 0 !== n ? n : t.name) && void 0 !== u ? u : '<Unknown>', ')')), i;
}
