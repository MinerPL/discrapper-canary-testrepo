n.d(t, {
    TZ: function () {
        return u;
    },
    y6: function () {
        return c;
    }
});
var i = n(904245),
    a = n(594174),
    s = n(626135),
    r = n(709054),
    l = n(8532),
    o = n(981631);
let c = (e) => {
        var t;
        let n = null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            i = ((null != n ? r.default.extractTimestamp(n) : 0) + r.default.extractTimestamp(e)) % l.m.length;
        return l.m[i];
    },
    u = (e, t, n) => {
        var r;
        i.Z.sendGreetMessage(
            e.id,
            n,
            i.Z.getSendMessageOptionsForReply({
                channel: e,
                message: t,
                shouldMention: !0,
                showMentionToggle: !0
            })
        ),
            s.default.track(o.rMx.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null === (r = a.default.getCurrentUser()) || void 0 === r ? void 0 : r.id
            });
    };
