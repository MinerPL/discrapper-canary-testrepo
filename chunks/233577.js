var r = n(735250);
n(470079);
var i = n(570140),
    a = n(367907),
    s = n(998698),
    o = n(895924),
    l = n(588468),
    u = n(285651),
    c = n(268350),
    d = n(926491),
    _ = n(373228),
    E = n(419922),
    f = n(483360),
    h = n(877565),
    p = n(590921),
    I = n(981631),
    m = n(689938);
let T = {
    results: {
        command: null,
        stickers: []
    }
};
function S(e, t) {
    return (0, r.jsx)(E.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let g = {
    stores: [d.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== p.L8.DISABLED && i.commands !== p.L8.OLD_BUILT_INS && (null === (a = s.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === I.q9n.STICKER && s.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, t, n, r) {
        var i;
        let a = null === (i = s.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName;
        if (null == a) return T;
        let o = [];
        (0, c.$p)();
        let l = f.ZP.queryStickers([n], !0, [e, (e, t) => t === u.eb.SENDABLE]);
        return {
            results: {
                command: a,
                stickers: (o = l.slice(0, 8))
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
            children: (0, h.HI)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: s,
                titleWithQuery: m.Z.Messages.STICKERS_MATCHING,
                titleWithoutQuery: m.Z.Messages.STICKER,
                Component: l.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: S,
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
                index: l,
                options: u,
                channel: c,
                guild: d,
                queryText: E
            } = e;
        if (null == n || l >= r.length) return { type: null };
        let f = s.Z.getActiveCommand(c.id);
        (null == f ? void 0 : f.inputType) === o.iw.BUILT_IN_INTEGRATION &&
            (i.Z.dispatch({
                type: 'APPLICATION_COMMAND_USED',
                context: {
                    channel: c,
                    guild: d
                },
                command: f,
                commandOrigin: o.bB.CHAT
            }),
            a.ZP.trackWithMetadata(I.rMx.APPLICATION_COMMAND_USED, {
                command_id: f.id,
                application_id: f.applicationId,
                command_type: f.type,
                source: s.Z.getSource(c.id)
            }));
        let h = r[l];
        return (
            u.sendSticker(h.sticker, _.V0.BUILT_IN_INTEGRATION),
            h.sticker.type === _.n0.GUILD && (t = h.sticker.guild_id),
            a.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: I.aib.STICKER,
                source_object: '/'.concat(n),
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: E
            }),
            {
                type: p.z2.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: h.sticker.id
                }
            }
        );
    }
};
t.Z = g;
