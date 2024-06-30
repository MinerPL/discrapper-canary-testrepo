n(47120);
var i, a, l, s = n(445346), r = n(570140), o = n(430198), c = n(314897), u = n(592125), d = n(709054), h = n(522579);
let p = new Set();
class m extends s.y {
    shouldDisplayPrompt(e) {
        return p.has(e);
    }
}
l = 'MediaPostSharePromptStore', (a = 'displayName') in (i = m) ? Object.defineProperty(i, a, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = l, t.Z = new m(r.Z, {
    CONNECTION_OPEN: function () {
        p = new Set();
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.isPushNotification)
            return;
        let n = e.message;
        if (c.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, h.z9)(n.id, n.channel_id))
            return;
        let i = u.Z.getChannel(n.channel_id);
        if (null != i && null != i.parent_id)
            o.Z.isChannelGated(i.guild_id, i.parent_id) && p.add(d.default.castMessageIdAsChannelId(e.message.id));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
        let {threadId: t} = e;
        p.delete(t);
    },
    LOGOUT: function (e) {
        p.clear();
    }
});
