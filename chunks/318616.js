n.d(t, {
    c: function () {
        return l;
    }
});
function l(e) {
    var t, n, l;
    let { message: a, forwardOptions: s } = e,
        i = null == s ? void 0 : s.onlyAttachmentIds,
        r = null == s ? void 0 : s.onlyEmbedIndices,
        o = null !== (l = null === (t = a.messageSnapshots[0]) || void 0 === t ? void 0 : t.message) && void 0 !== l ? l : a,
        c = o.attachments;
    null != i ? (c = o.attachments.filter((e) => i.includes(e.id))) : null != r && (c = []);
    let u = o.embeds;
    return (
        null != r ? (u = o.embeds.filter((e, t) => r.includes(t))) : null != i && (u = []),
        (null != r || ('' === o.content && u.length > 0)) && (o = o.set('content', u.map((e) => e.url).join('\n'))),
        '' === o.content && (null === (n = o.embeds[0]) || void 0 === n ? void 0 : n.rawDescription) != null && (o = o.set('content', o.embeds[0].rawDescription)),
        {
            attachments: c,
            embeds: u,
            hasContent: '' !== o.content && null == i,
            contentMessage: o
        }
    );
}
