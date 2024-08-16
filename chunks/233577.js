var r = n(735250);
n(470079);
var i = n(367907),
    a = n(998698),
    s = n(895924),
    o = n(588468),
    l = n(285651),
    u = n(268350),
    c = n(926491),
    d = n(373228),
    _ = n(419922),
    E = n(483360),
    f = n(877565),
    h = n(590921),
    p = n(981631),
    m = n(689938);
let I = {
    results: {
        command: null,
        stickers: []
    }
};
function T(e, t) {
    return (0, r.jsx)(_.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let g = {
    stores: [c.Z],
    matches(e, t, n, r, i) {
        var s;
        return i.commands !== h.L8.DISABLED && i.commands !== h.L8.OLD_BUILT_INS && (null === (s = a.Z.getActiveCommand(e.id)) || void 0 === s ? void 0 : s.integrationType) === p.q9n.STICKER && a.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, t, n, r) {
        var i;
        let s = null === (i = a.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name;
        if (null == s) return I;
        let o = [];
        (0, u.$p)();
        let c = E.ZP.queryStickers([n], !0, [e, (e, t) => t === l.eb.SENDABLE]);
        return {
            results: {
                command: s,
                stickers: (o = c.slice(0, 8))
            },
            metadata: { numStickerResults: o.length }
        };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: i,
            onHover: a,
            onClick: s
        } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, f.HI)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: s,
                titleWithQuery: m.Z.Messages.STICKERS_MATCHING,
                titleWithoutQuery: m.Z.Messages.STICKER,
                Component: o.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: T,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id
                    };
                },
                getQuery: (e) => e,
                key: 'stickers'
            })
        });
    },
    onSelect(e) {
        let t,
            {
                results: { command: n, stickers: r },
                index: o,
                options: l,
                channel: u,
                queryText: c
            } = e;
        if (null == n || o >= r.length) return { type: null };
        let _ = a.Z.getActiveCommand(u.id);
        (null == _ ? void 0 : _.inputType) === s.iw.BUILT_IN_INTEGRATION &&
            i.ZP.trackWithMetadata(p.rMx.APPLICATION_COMMAND_USED, {
                command_id: _.id,
                application_id: _.applicationId,
                command_type: _.type
            });
        let E = r[o];
        return (
            l.sendSticker(E.sticker, d.V0.BUILT_IN_INTEGRATION),
            E.sticker.type === d.n0.GUILD && (t = E.sticker.guild_id),
            i.ZP.trackWithMetadata(p.rMx.SEARCH_RESULT_SELECTED, {
                load_id: E.sticker.id,
                search_type: p.aib.STICKER,
                source_object: '/'.concat(n),
                total_results: r.length,
                index_num: o,
                expression_guild_id: t,
                sticker_id: E.sticker.id,
                query: c
            }),
            {
                type: h.z2.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: E.sticker.id
                }
            }
        );
    }
};
t.Z = g;
