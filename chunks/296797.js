n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(470079),
    a = n(592125),
    s = n(944486),
    l = n(585483),
    r = n(917107),
    o = n(89425),
    c = n(197386),
    u = n(981631);
function d(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { channelId: n } = e;
            if (!(0, r.Z)(n)) return;
            s.Z.getVoiceChannelId() !== n && (await (0, o.Z)({ channelId: n }));
            let i = a.Z.getChannel(n),
                l = null == i ? void 0 : i.guild_id;
            setTimeout(() => {
                (0, c.Z)(l, n), null == t || t();
            }, 0);
        }
        return (
            l.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                l.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
