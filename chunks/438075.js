n.d(t, {
    Q: function () {
        return r;
    },
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(275344), s = n(938353);
function l(e) {
    let {
        channelMessageProps: {
            message: t,
            channel: n,
            compact: l = !1
        },
        hasSpoilerEmbeds: r,
        handleContextMenu: o,
        isInteracting: c,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: u,
        renderThreadAccessory: _,
        renderComponentAccessory: E,
        renderSuppressEmbeds: m,
        forceAddReactions: I,
        className: T
    } = e;
    return d ? null : (0, i.jsx)(a.Z, {
        message: t,
        children: (0, i.jsx)(s.ZP, {
            className: T,
            isInteracting: c,
            message: t,
            channel: n,
            compact: l,
            hasSpoilerEmbeds: r,
            isMessageSnapshot: u,
            onMediaItemContextMenu: o,
            renderThreadAccessory: _,
            renderComponentAccessory: E,
            renderSuppressEmbeds: m,
            forceAddReactions: I
        })
    });
}
function r(e, t) {
    let {
        message: n,
        channel: a,
        compact: l = !1,
        renderThreadAccessory: r,
        disableReactionCreates: o,
        disableReactionUpdates: c
    } = e;
    return (0, i.jsx)(s.$p, {
        message: n,
        channel: a,
        compact: l,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: r,
        disableReactionCreates: o,
        disableReactionUpdates: c
    });
}
