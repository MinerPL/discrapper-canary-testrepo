n.d(t, {
    Z: function () {
        return a;
    }
});
var s = n(421535);
function a(e, t) {
    var n, a, i;
    if (t.owner_user_id === e) return !0;
    return (null === ((a = t), (i = e), (n = a.members.find((e) => e.user.id === i))) || void 0 === n ? void 0 : n.role) === s.T.ADMIN;
}
