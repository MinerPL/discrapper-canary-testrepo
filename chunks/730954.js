t.d(n, {
    Z: function () {
        return r;
    }
}), t(789020);
var i = t(904245), a = t(667204);
function r(e, n, t) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType()) {
        null != n.interactionData && null != r.applicationId && (0, a.d)(n, e, r.applicationId);
        return;
    }
    let {
        content: l,
        tts: o,
        messageReference: s,
        flags: u,
        nonce: c
    } = n;
    i.Z.sendMessage(e.id, {
        content: l,
        tts: o,
        invalidEmojis: [],
        validNonShortcutEmojis: []
    }, void 0, {
        nonce: c,
        flags: u,
        messageReference: null != s ? s : void 0,
        ...r
    });
}
