n.d(t, {
    TZ: function () {
        return d;
    },
    y6: function () {
        return c;
    }
});
var i = n(904245), a = n(594174), s = n(626135), l = n(709054), r = n(8532), o = n(981631);
let c = e => {
        var t;
        let n = null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id, i = ((null != n ? l.default.extractTimestamp(n) : 0) + l.default.extractTimestamp(e)) % r.m.length;
        return r.m[i];
    }, d = (e, t, n) => {
        var l;
        i.Z.sendGreetMessage(e.id, n, i.Z.getSendMessageOptionsForReply({
            channel: e,
            message: t,
            shouldMention: !0,
            showMentionToggle: !0
        })), s.default.track(o.rMx.WELCOME_CTA_CLICKED, {
            is_reply: !0,
            sticker_id: n,
            target_user: t.author.id,
            sender: null === (l = a.default.getCurrentUser()) || void 0 === l ? void 0 : l.id
        });
    };
