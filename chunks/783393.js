n.d(t, {
    E: function () {
        return l;
    }
}),
    n(47120);
var i = n(442837),
    a = n(150192),
    s = n(731455),
    r = n(689938);
function l(e) {
    let { categoryId: t } = e;
    return (0, i.e7)([a.Z], () =>
        (function (e) {
            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z];
            return e === s.Hk ? r.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : t.getCategoryName(e);
        })(t, [a.Z])
    );
}
