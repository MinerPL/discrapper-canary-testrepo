n.d(t, {
    c: function () {
        return r;
    }
});
var l = n(442837),
    i = n(496675),
    a = n(408433);
function r(e) {
    var t, n, r;
    let { message: s, channel: o, forwardOptions: c } = e,
        u = null == c ? void 0 : c.onlyAttachmentIds,
        d = null == c ? void 0 : c.onlyEmbedIndices,
        h = null !== (r = null === (t = s.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== r ? r : s,
        f = h.attachments;
    null != u ? (f = h.attachments.filter((e) => u.includes(e.id))) : null != d && (f = []);
    let _ = [];
    return (
        !(0, l.e7)([i.Z], () => null != o && !(0, a.eC)(o, i.Z) && (0, a.En)(s)) && ((_ = h.embeds), null != d ? (_ = h.embeds.filter((e, t) => d.includes(t))) : null != u && (_ = [])),
        (null != d || ('' === h.content && _.length > 0)) && (h = h.set('content', _.map((e) => e.url).join('\n'))),
        '' === h.content && (null === (n = h.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (h = h.set('content', h.embeds[0].rawDescription)),
        {
            attachments: f,
            embeds: _,
            hasContent: '' !== h.content && null == u,
            contentMessage: h
        }
    );
}
