t.d(n, {
    w: function () {
        return r;
    }
});
var i = t(470079),
    a = t(442837),
    s = t(594174),
    l = t(689938);
function r(e) {
    var n;
    let t = null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_at,
        r = (0, a.e7)([s.default], () => {
            var n;
            return s.default.getUser(null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_by);
        });
    return i.useMemo(() => {
        if (null == t) return;
        let e = new Date(t);
        return null != r
            ? l.Z.Messages.CHANNEL_SYNCING_ADDED_BY_NO_LINK.format({
                  username: r.username,
                  linkedAtDate: e
              })
            : l.Z.Messages.CHANNEL_SYNCING_ADDED_BY_UNKNOWN_USER.format({ linkedAtDate: e });
    }, [t, r]);
}
