n.d(t, {
    Z: function () {
        return c;
    }
});
var s = n(470079), a = n(149765), i = n(442837), r = n(430824), l = n(293810);
let o = n(981631).Plq.VIEW_CHANNEL;
function c(e) {
    let t = (0, i.e7)([r.Z], () => {
            let t = r.Z.getGuild(e);
            return null != t ? r.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        }), n = s.useMemo(() => null == t ? l.e3.SOME_CHANNELS : a.e$(t.permissions, o) ? l.e3.SOME_CHANNELS : l.e3.ALL_CHANNELS, [t]), c = n === l.e3.ALL_CHANNELS;
    return {
        format: n,
        isFullServerGating: c
    };
}
