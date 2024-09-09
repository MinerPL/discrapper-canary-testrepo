s.d(t, {
    Z: function () {
        return o;
    }
});
var a = s(470079),
    l = s(442837),
    i = s(430824),
    n = s(687476);
function o(e) {
    let t = (0, l.e7)([i.Z], () => i.Z.getRoles(e)),
        s = (0, l.e7)([n.Z], () => n.Z.getSubscriptionRoles(e));
    return a.useMemo(() => Object.values(t).filter((e) => s.has(e.id)), [t, s]);
}
