n.d(t, {
    TE: function () {
        return g;
    },
    h_: function () {
        return I;
    }
}), n(47120);
var i = n(470079), a = n(392711), l = n.n(a), s = n(442837), r = n(159300), o = n(901461), c = n(314897), u = n(592125), d = n(984933), h = n(650774), p = n(430824), m = n(819640), _ = n(375954), f = n(496675), E = n(709054), C = n(981631);
function g(e, t) {
    return (0, s.cj)([f.Z], () => ({
        canInvite: (0, r.b)(f.Z, t, e),
        canManageGuild: null != t && f.Z.can(C.Plq.MANAGE_GUILD, t),
        canMessage: null != e && f.Z.can(C.Plq.SEND_MESSAGES, e),
        canCreateChannel: null != t && f.Z.can(C.Plq.MANAGE_CHANNELS, t)
    }), [
        t,
        e
    ]);
}
function I(e) {
    var t;
    return {
        guildPopulated: function (e) {
            let t = (0, s.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)), n = (0, s.Wu)([_.Z], () => null != t ? _.Z.getMessages(t.id).toArray() : []);
            return (0, s.e7)([h.Z], () => {
                var t;
                let i = null !== (t = h.Z.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0, a = n.some(e => e.type === C.uaV.USER_JOIN);
                return i > 1 || a;
            }, [
                e,
                n
            ]);
        }(e),
        guildMessaged: function (e) {
            let t = (0, s.e7)([u.Z], () => null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null);
            return function (e) {
                let t = (0, s.e7)([c.default], () => c.default.getId());
                return (0, s.e7)([_.Z], () => l().some(e, e => {
                    let n = _.Z.getMessages(e.id).toArray();
                    return l().some(n, e => e.author.id === t && !(0, o.Z)(e));
                }));
            }(i.useMemo(() => null == t ? [] : l().values(t), [t]));
        }(e),
        guildPersonalized: function (e) {
            let t = (0, s.e7)([m.Z], () => m.Z.hasLayers()), n = (0, s.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        }(e),
        guildChannelCreated: (t = e, (0, s.e7)([d.ZP], () => {
            let e = d.ZP.getChannels(null == t ? void 0 : t.id), n = e[d.Zb];
            function i(e) {
                return null != t && E.default.extractTimestamp(e.channel.id) - E.default.extractTimestamp(t.id) > 500;
            }
            return e[d.sH].some(i) || n.some(i);
        }, [t]))
    };
}
