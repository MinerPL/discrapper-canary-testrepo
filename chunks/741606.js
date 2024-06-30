n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(470079), i = n(442837), a = n(693546), o = n(937111);
function s(e) {
    let t = (0, i.e7)([o.Z], () => null == e ? null : o.Z.getRequest(e)), n = (0, i.e7)([o.Z], () => o.Z.hasFetchedRequestToJoinGuilds);
    return r.useEffect(() => {
        !n && a.Z.fetchRequestToJoinGuilds();
    }, [n]), t;
}
