var r = t(735250), i = t(470079), o = t(120356), l = t.n(o), u = t(628238), s = t(998951), a = t(25015), c = t(963550), d = t(845080), _ = t(105461);
n.Z = i.memo(function (e) {
    var n;
    let {
            message: t,
            channel: i,
            compact: o,
            className: f,
            isGroupStart: E,
            hideSimpleEmbedContent: I = !0,
            disableInteraction: g
        } = e, p = (0, u.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()), {content: C} = (0, a.Z)(t, {
            hideSimpleEmbedContent: I,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, r.jsx)(s.Z, {
        compact: o,
        className: l()(f, {
            [_.message]: !0,
            [_.cozyMessage]: !o,
            [_.groupStart]: E
        }),
        childrenHeader: (0, d.Z)({
            ...e,
            channel: i,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, C),
        disableInteraction: g
    });
});
