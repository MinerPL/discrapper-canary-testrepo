n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(570140), i = n(37234), a = n(981631);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
    r.Z.dispatch({
        type: 'USER_SETTINGS_MODAL_OPEN',
        section: e,
        subsection: t,
        ...n
    }), (0, i.jN)(a.S9g.USER_SETTINGS);
}
