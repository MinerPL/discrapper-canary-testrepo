t.d(r, {
    Z: function () {
        return i;
    },
    q: function () {
        return o;
    }
});
var a = t(570140),
    n = t(91311);
function i(e, r) {
    let t = 'boolean' == typeof r ? r : !n.Z.get(e);
    a.Z.dispatch({
        type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
        toggle: e,
        value: t
    });
}
function o() {
    for (let e in n.Z.all()) i(e, !1);
}
