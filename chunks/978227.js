n.d(l, {
    Z: function () {
        return r;
    }
});
var s = n(470079), t = n(442837), a = n(749210), i = n(594174);
function r(e) {
    let l = (0, t.e7)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return s.useEffect(() => {
        null == l && (null == e ? void 0 : e.creator_id) != null && a.Z.requestMembersById(e.guild_id, e.creator_id);
    }, [
        e,
        l
    ]), l;
}
