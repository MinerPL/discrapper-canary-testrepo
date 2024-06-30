n.d(t, {
    s: function () {
        return T;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(481060), o = n(346610), c = n(868643), d = n(912332), u = n(503349), _ = n(689938), E = n(789447);
function m() {
    (0, r.closeModal)(u.c);
}
function I(e) {
    let {
            className: t,
            channelId: n,
            messageId: s,
            target: o
        } = e, c = a.useCallback(() => {
            if ('embed' === o.type) {
                (0, d.l8)({
                    messageId: s,
                    channelId: n,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                    onRequestSent: m
                });
                return;
            }
            (0, d.l8)({
                messageId: s,
                channelId: n,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                onRequestSent: m
            });
        }, [
            n,
            s,
            o
        ]);
    return (0, i.jsx)(r.Clickable, {
        className: l()(E.container, t),
        onClick: c,
        children: (0, i.jsx)(r.Text, {
            className: E.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD
        })
    });
}
function T(e, t) {
    let {canForwardMessages: n} = o.w.getCurrentConfig({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return n && (0, c.h)(e) ? n => {
        let {className: a} = n;
        return (0, i.jsx)(I, {
            className: a,
            channelId: e.channel_id,
            messageId: e.id,
            target: t
        });
    } : () => null;
}
