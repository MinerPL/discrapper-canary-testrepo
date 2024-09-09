n.d(t, {
    H: function () {
        return T;
    },
    T: function () {
        return x;
    }
}),
    n(47120),
    n(724458);
var i = n(470079),
    s = n(442837),
    a = n(570140),
    l = n(439170),
    r = n(592125),
    o = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    h = n(71585),
    m = n(34586),
    p = n(69259),
    _ = n(590026),
    f = n(178762),
    E = n(206583),
    g = n(809017),
    C = n(981631),
    I = n(689938);
let x = 0;
function T(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: x },
            channelId: T,
            guildId: v
        } = e,
        [S, N] = i.useState(!1),
        { requestId: A, entries: Z, impressionCappedEntryIds: M } = (0, _.Z)(T),
        b = (0, s.e7)([h.Z], () => h.Z.hidden),
        R = (0, s.e7)([c.Z], () => c.Z.isFocused()),
        L = (0, s.e7)([r.Z], () => r.Z.getChannel(T)),
        j = (0, s.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        P = (0, m.E)(j),
        O = null != P && P && (null == L ? void 0 : L.isForumChannel()) === !1,
        [y, D, k, U] = i.useMemo(() => {
            let e;
            if (null == Z || 0 === Z.length || null == A || !O) return [t, n, x];
            let i = S ? Z.length : 3,
                s = Z.slice(0, i);
            e = b
                ? [{ type: l.so.HIDDEN_CONTENT_INVENTORY }]
                : s.map((e) => ({
                      type: l.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: A
                  }));
            let a = {
                id: g.G,
                type: l.so.CONTENT_INVENTORY_GROUP,
                key: g.G,
                count: e.length,
                index: n.length,
                title: I.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
                onToggleExpand: () => {
                    N((e) => {
                        let t = !e;
                        return (
                            u.default.track(C.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: T,
                                guild_id: v,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: S,
                expandedCount: Z.length,
                feedHeight: e.map(f.iZ).reduce((e, t) => e + t, 0)
            };
            return [[a, ...t], [...n, a, ...e], Math.random(), e];
        }, [T, Z, S, t, v, A, n, x, b, O]),
        w = i.useRef(0),
        B = i.useRef(Z),
        H = i.useRef(),
        G = i.useRef({ impressionCappedEntryIds: M }),
        V = i.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / f.YN),
                    i = Math.min(null !== (t = null == U ? void 0 : U.length) && void 0 !== t ? t : 0, n);
                w.current = Math.max(w.current, i);
            },
            [U]
        );
    return (
        i.useEffect(() => {
            B.current = Z;
        }, [Z]),
        i.useEffect(() => {
            G.current = { impressionCappedEntryIds: M };
        }, [M]),
        i.useEffect(
            () => (
                (w.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == A || null == H.current || Date.now() - H.current < 3000) return;
                    let n = null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        i = n.slice(0, w.current);
                    if (!b && !!R && !!O)
                        (0, p.e)(C.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: A,
                            first_shown_at: H.current,
                            item_ids: i,
                            surface_type: E.Kd.GUILD_MEMBER_LIST,
                            channel_id: T,
                            guild_id: v,
                            all_item_ids: n,
                            impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
                        }),
                            (0, d.wm)('useInjectContentInventoryFeed') &&
                                a.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                    itemIds: i
                                });
                }
            ),
            [A, T, v, b, R, O]
        ),
        {
            groups: y,
            rows: D,
            version: k,
            updateMaxRowSeen: V
        }
    );
}
