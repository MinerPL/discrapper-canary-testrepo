l.d(n, {
    Y: function () {
        return t;
    }
});
var a = l(700785),
    i = l(981631);
function t(e, n) {
    return (
        !!(
            e.isOwner(n) ||
            a.BT({
                permission: i.Plq.ADMINISTRATOR,
                context: e,
                user: n
            })
        ) ||
        (a.BT({
            permission: i.Plq.MANAGE_GUILD,
            context: e,
            user: n
        }) &&
            a.BT({
                permission: i.Plq.MANAGE_ROLES,
                context: e,
                user: n
            }))
    );
}
