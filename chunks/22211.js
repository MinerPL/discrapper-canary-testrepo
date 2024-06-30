t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(442837), a = t(661869), r = t(543882), o = t(199902), i = t(592125), u = t(496675), s = t(158776), c = t(979651), d = t(561308), E = t(231338);
function _(e) {
    let n = (0, l.e7)([
            c.Z,
            i.Z
        ], () => {
            if (!(0, d.kr)(e) || e.author_type !== a.i.USER)
                return null;
            let n = c.Z.getVoiceStateForUser(e.author_id);
            return i.Z.getChannel(null == n ? void 0 : n.channelId);
        }, [e]), t = (0, l.e7)([s.Z], () => s.Z.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id), [
            n,
            e
        ]), {
            streamPreviewUrl: _,
            stream: f
        } = (0, l.cj)([
            o.Z,
            u.Z,
            r.Z
        ], () => {
            let t;
            if (null == n)
                return {};
            let l = o.Z.getAnyStreamForUser(e.author_id);
            return null == l ? {} : (u.Z.canBasicChannel(E.S7.CONNECT, n) && (null == l ? void 0 : l.channelId) === n.id && (t = r.Z.getPreviewURL(l.guildId, l.channelId, l.ownerId)), {
                stream: l,
                streamPreviewUrl: t
            });
        }, [
            n,
            e
        ]);
    return {
        channel: n,
        activity: t,
        streamPreviewUrl: _,
        stream: f
    };
}
