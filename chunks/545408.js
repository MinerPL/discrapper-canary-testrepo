n.d(t, {
    q: function () {
        return l;
    }
}),
    n(470079);
var r = n(100527),
    i = n(367907),
    a = n(626135),
    s = n(50493),
    o = n(981631);
function l(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z.MEMBER_SAFETY_PAGE,
        u = {
            guild_id: e,
            target_user_id: t,
            subpanel_name: s.Y[n],
            location: l,
            ...(0, i.hH)(e)
        };
    return a.default.track(o.rMx.GUILD_MOD_VIEW_OPENED, u);
}
