n(47120);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(430198),
    u = n(314897),
    d = n(592125),
    h = n(709054),
    p = n(522579);
let m = new Set();
class _ extends (i = r.ZP.Store) {
    shouldDisplayPrompt(e) {
        return m.has(e);
    }
}
(l = 'MediaPostSharePromptStore'),
    (a = 'displayName') in (s = _)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new _(o.Z, {
        CONNECTION_OPEN: function () {
            m = new Set();
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (e.isPushNotification) return;
            let n = e.message;
            if (u.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, p.z9)(n.id, n.channel_id)) return;
            let i = d.Z.getChannel(n.channel_id);
            if (null != i && null != i.parent_id) c.Z.isChannelGated(i.guild_id, i.parent_id) && m.add(h.default.castMessageIdAsChannelId(e.message.id));
        },
        DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
            let { threadId: t } = e;
            m.delete(t);
        },
        LOGOUT: function (e) {
            m.clear();
        }
    }));
