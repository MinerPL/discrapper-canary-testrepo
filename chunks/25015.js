n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(470079), i = n(905405), a = n(626135), o = n(937889), s = n(761910), l = n(981631), u = n(689938), c = n(612785);
function d(e, t) {
    let {
            hideSimpleEmbedContent: n,
            formatInline: d = !1,
            noStyleAndInteraction: _ = !1,
            isInteracting: E = !1,
            allowHeading: f = !1,
            allowList: h = !1,
            allowLinks: p = !1,
            allowDevLinks: m = !1,
            allowSubtext: I = !1,
            previewLinkTarget: T = !1,
            viewingChannelId: g
        } = t, S = (0, i.p)();
    return r.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isUnsupported ? {
        content: u.Z.Messages.MESSAGE_UNSUPPORTED,
        hasSpoilerEmbeds: !1
    } : e.isCommandType() && 0 === e.content.length || e.hasFlag(l.iLy.LOADING) ? (0, s.Z)(e) : e.type === l.uaV.CHANGELOG ? (0, o.n0)(e, c, {
        track: (e, t) => {
            a.default.track(e, t);
        }
    }) : (0, o.ZP)(e, {
        hideSimpleEmbedContent: n,
        formatInline: d,
        noStyleAndInteraction: _,
        isInteracting: E,
        allowHeading: f,
        allowList: h,
        allowLinks: p,
        allowSubtext: I,
        allowDevLinks: m,
        previewLinkTarget: T,
        shouldFilterKeywords: S,
        viewingChannelId: g
    }), [
        e.content,
        e.customRenderedContent,
        e.embeds,
        e.interaction,
        e.state,
        e.type,
        n,
        d,
        _,
        E,
        f,
        h,
        p,
        T,
        I,
        S
    ]);
}
