n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var l = n(442837), r = n(481060), a = n(787014), u = n(904245), o = n(787263), s = n(660189), d = n(144140), c = n(314897), E = n(496675), f = n(709054), _ = n(981631), N = n(689938);
function T(e) {
    let t = e.isForumPost(), n = (0, l.e7)([c.default], () => e.isOwner(c.default.getId()), [e]), {
            canManageChannel: T,
            canAccessChannel: S
        } = (0, l.cj)([E.Z], () => ({
            canAccessChannel: E.Z.can(e.accessPermissions, e),
            canManageChannel: E.Z.can(e.isThread() ? _.Plq.MANAGE_THREADS : _.Plq.MANAGE_CHANNELS, e)
        }), [e]), C = (0, l.e7)([d.Z], () => {
            var t;
            return null !== (t = d.Z.getCount(e.id)) && void 0 !== t ? t : 0;
        }, [e.id]), {firstMessage: h} = (0, l.e7)([s.Z], () => s.Z.getMessage(e.id), [e.id]), I = t && (T || n && C < 1), A = t && n && !T && C > 0 && null != h;
    return S && (T || I || A) ? (0, i.jsx)(r.MenuItem, {
        id: 'delete-channel',
        label: (() => {
            if (e.type === _.d4z.GUILD_CATEGORY)
                return N.Z.Messages.DELETE_CATEGORY;
            if (e.isForumPost())
                return I ? N.Z.Messages.DELETE_FORUM_POST : N.Z.Messages.DELETE_MESSAGE;
            if (e.isThread())
                return N.Z.Messages.DELETE_THREAD;
            return N.Z.Messages.DELETE_CHANNEL;
        })(),
        color: 'danger',
        action: () => {
            (0, o.w)(e, function () {
                A ? u.Z.deleteMessage(e.id, f.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
            });
        }
    }) : null;
}
