n.d(t, {
    AQ: function () {
        return s;
    },
    uY: function () {
        return o;
    }
}),
    n(653041),
    n(47120),
    n(664751),
    n(544891),
    n(343817);
var r = n(570140),
    i = n(703656);
n(683301), n(230307), n(70956), n(900849);
var a = n(981631);
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    e && (0, i.uL)(a.Z5c.GUILD_DISCOVERY), r.Z.dispatch({ type: 'GUILD_DISCOVERY_CLEAR_SEARCH' });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.Z.dispatch({
        type: 'GUILD_DISCOVERY_SELECT_CATEGORY',
        categoryId: e,
        isHomepage: t
    });
}
n(731455), window.GLOBAL_ENV.ALGOLIA_KEY, 'production' === window.GLOBAL_ENV.PROJECT_ENV || window.GLOBAL_ENV.PROJECT_ENV;
