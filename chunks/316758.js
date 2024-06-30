n.d(t, {
    IV: function () {
        return o;
    },
    P: function () {
        return d;
    },
    fH: function () {
        return c;
    },
    sk: function () {
        return _;
    },
    xt: function () {
        return u;
    }
});
var i = n(166459), a = n(966390), s = n(476326), l = n(703558), r = n(398805);
async function o(e, t, n) {
    let i = (0, r.Yk)(t, n), a = await fetch(n);
    return c(e, t, new File([await a.blob()], i, { type: 'image/gif' })), n;
}
function c(e, t, n) {
    let a = {
        id: t,
        channelId: e,
        file: n,
        platform: s.ow.WEB
    };
    i.Z.addFile({
        file: a,
        channelId: e,
        draftType: l.d.Poll
    });
}
async function d(e, t, n) {
    i.Z.remove(e, t, l.d.Poll);
}
async function u(e) {
    i.Z.clearAll(e, l.d.Poll);
}
async function _(e) {
    let {
        channel: t,
        items: n,
        poll: i,
        nonce: s,
        maxSizeCallback: r
    } = e;
    return a.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: l.d.Poll,
        parsedMessage: {
            content: '',
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        options: {
            nonce: s,
            poll: i
        },
        raiseEndpointErrors: !0
    });
}
