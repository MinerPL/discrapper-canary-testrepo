t.d(n, {
    Z: function () {
        return l;
    }
}),
    t(789020);
var i = t(904245),
    s = t(667204);
function l(e, n, t) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
        null != n.interactionData && null != l.applicationId && (0, s.d)(n, e, l.applicationId);
        return;
    }
    let { content: a, tts: r, messageReference: o, flags: u, nonce: d } = n;
    i.Z.sendMessage(
        e.id,
        {
            content: a,
            tts: r,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        {
            nonce: d,
            flags: u,
            messageReference: null != o ? o : void 0,
            ...l
        }
    );
}
