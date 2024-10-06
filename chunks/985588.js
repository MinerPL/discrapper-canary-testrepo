t.d(n, {
    s: function () {
        return s;
    }
});
var i = t(442837),
    r = t(314897),
    a = t(699516);
function s(e) {
    return (0, i.e7)([a.Z, r.default], () => {
        let n = a.Z.isFriend(e.id),
            t = r.default.getId() === e.id;
        return n && !t && !e.bot && !e.system && !e.isProvisional;
    });
}
