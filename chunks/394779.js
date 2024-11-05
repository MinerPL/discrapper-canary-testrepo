t.d(n, {
    s: function () {
        return m;
    }
});
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(481060),
    s = t(346610),
    u = t(868643),
    c = t(912332),
    d = t(701865),
    f = t(388032),
    h = t(760997);
function _() {
    (0, o.closeModal)(d.U);
}
function p(e) {
    let { className: n, message: t, target: i } = e,
        s = r.useCallback(() => {
            if ('embed' === i.type) {
                (0, c.l8)({
                    messageId: t.id,
                    channelId: t.channel_id,
                    message: t,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                    onRequestSent: _
                });
                return;
            }
            (0, c.l8)({
                messageId: t.id,
                channelId: t.channel_id,
                message: t,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
                onRequestSent: _
            });
        }, [t, i]);
    return (0, a.jsx)(o.Clickable, {
        className: l()(h.container, n),
        onClick: s,
        children: (0, a.jsx)(o.Text, {
            className: h.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.intl.string(f.t.I3ltXF)
        })
    });
}
function m(e, n) {
    let { canForwardMessages: t } = (0, s.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return t && (0, u.h)(e)
        ? (t) => {
              let { className: r } = t;
              return (0, a.jsx)(p, {
                  className: r,
                  message: e,
                  target: n
              });
          }
        : () => null;
}
