n.d(t, {
    Z: function () {
        return S;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(392711), o = n(399606), c = n(481060), u = n(963374), d = n(735020), h = n(786761), p = n(937889), m = n(619753), _ = n(433355), f = n(271383), E = n(594174), C = n(189432), g = n(356778), I = n(370595), x = n(991570), T = n(50493), N = n(332513), v = n(812387);
function S(e) {
    var t, n;
    let {
            userId: l,
            guildId: S,
            location: Z,
            className: A,
            onNavigate: M
        } = e, b = a.useRef(null), R = (0, o.e7)([_.ZP], () => _.ZP.getGuildSidebarState(S), [S]), j = a.useRef(0), [L, P] = a.useState(null !== (t = null == R ? void 0 : R.details.additionalSearchQuery) && void 0 !== t ? t : {}), O = (0, g.z0)(l, S, {
            addtionalQuery: L,
            shouldDispatch: !0
        }), y = (0, o.e7)([E.default], () => E.default.getUser(l), [l]), D = (0, o.e7)([f.ZP], () => f.ZP.getMember(S, l), [
            S,
            l
        ]), k = (0, x.f)(l, S);
    a.useLayoutEffect(() => {
        let e = null == R ? void 0 : R.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = b.current) || void 0 === t || t.scrollTo({
                to: e,
                animate: !1
            });
        }
    }, []);
    let U = a.useCallback(e => {
            if (null == R)
                return;
            let t = e.target.scrollTop;
            j.current = t, (0, C.r)(S, l, R.baseChannelId, {
                modViewPanel: T.k.MESSAGE_HISTORY,
                additionalSearchQuery: L,
                scrollOffset: j.current
            });
        }, [
            S,
            l,
            R,
            L
        ]), w = (0, r.throttle)(U, 300), B = a.useCallback(e => {
            if (null == R)
                return;
            let t = {
                ...L,
                offset: 25 * e
            };
            P(t), (0, C.r)(S, l, R.baseChannelId, {
                modViewPanel: T.k.MESSAGE_HISTORY,
                additionalSearchQuery: t,
                scrollOffset: j.current
            });
        }, [
            S,
            l,
            R,
            L
        ]), H = null !== (n = null == L ? void 0 : L.offset) && void 0 !== n ? n : 0, G = (0, o.e7)([d.Z], () => {
            if (null == O.result)
                return [];
            let e = O.result.messages, t = (0, u.nC)('');
            return e.map(e => e.map(e => {
                let n = d.Z.getMessage(e.id, e.channel_id), i = (0, h.e5)(e);
                return null != n && (i = i.merge({
                    attachments: n.attachments,
                    embeds: n.embeds
                })), i.isSearchHit ? i.set('customRenderedContent', (0, p.ZP)(i, {
                    postProcessor: t,
                    allowHeading: !0,
                    allowList: !0
                })) : i;
            }));
        }, [O.result]), V = a.useMemo(() => {
            var e, t, n, i;
            return null == O.result ? {
                documentsIndexed: 0,
                isSearching: !0,
                isIndexing: !1,
                isHistoricalIndexing: !1,
                offset: H,
                totalResults: 0,
                hasError: !1,
                showBlockedResults: !1,
                showNoResultsAlt: !1
            } : {
                documentsIndexed: null !== (e = O.result.documents_indexed) && void 0 !== e ? e : 0,
                isSearching: !1,
                isIndexing: null !== (t = O.result.doing_deep_historical_index) && void 0 !== t && t,
                isHistoricalIndexing: null !== (n = O.result.doing_deep_historical_index) && void 0 !== n && n,
                offset: H,
                totalResults: null !== (i = O.result.total_results) && void 0 !== i ? i : 0,
                hasError: !1,
                showBlockedResults: !1,
                showNoResultsAlt: !1
            };
        }, [
            O.result,
            H
        ]);
    return null == y || null == D || null == V ? null : (0, i.jsxs)('div', {
        className: s()(N.container, A),
        style: { backgroundColor: k },
        children: [
            (0, i.jsx)(I.Z, {
                guildId: S,
                userId: l,
                onNavigate: M
            }),
            (0, i.jsx)(c.AdvancedScroller, {
                className: s()(v.innerContainer),
                ref: b,
                onScroll: w,
                children: (0, i.jsx)(m.Z, {
                    searchResults: G,
                    search: V,
                    searchId: l,
                    renderEmbeds: !0,
                    blockCount: 0,
                    scrollTo: () => {
                    },
                    onChangePage: B
                })
            })
        ]
    });
}
