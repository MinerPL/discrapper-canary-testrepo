n.d(t, {
    ZP: function () {
        return d;
    },
    cs: function () {
        return _;
    },
    pe: function () {
        return c;
    }
}), n(789020), n(653041);
var r = n(512722), i = n.n(r), a = n(869765), o = n(598077), s = n(594174), l = n(48854), u = n(981631);
function c(e) {
    let {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        globalName: o
    } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: o
    };
}
function d(e) {
    let {
            channelId: t,
            content: n,
            tts: r = !1,
            type: d = u.uaV.DEFAULT,
            messageReference: _,
            allowedMentions: E,
            author: f,
            flags: h,
            nonce: p,
            poll: m,
            changelogId: I
        } = e, T = [];
    if (d === u.uaV.REPLY && (i()(null != _, 'Replies must have a message reference'), null == E || E.replied_user)) {
        let e = a.Z.getMessageByReference(_);
        (null == e ? void 0 : e.state) === a.Y.LOADED && T.push(c(e.message.author));
    }
    return null == f && (f = s.default.getCurrentUser()), f instanceof o.Z && (f = c(f)), i()(null != f, 'createMessage: author cannot be undefined'), {
        id: null != p ? p : (0, l.r)(),
        type: d,
        content: n,
        channel_id: t,
        author: f,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: T,
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: u.yb.SENDING,
        tts: r,
        message_reference: _,
        message_snapshots: [],
        flags: h,
        nonce: p,
        poll: m,
        changelog_id: I
    };
}
function _(e) {
    let {
        messageId: t,
        channelId: n,
        content: r,
        embeds: i,
        loggingName: a
    } = e;
    return {
        id: null != t ? t : (0, l.r)(),
        type: u.uaV.DEFAULT,
        flags: u.iLy.EPHEMERAL,
        content: r,
        channel_id: n,
        author: {
            id: u.LAt,
            username: 'Clyde',
            discriminator: u.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != i ? i : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: u.yb.SENT,
        tts: !1,
        loggingName: a
    };
}
