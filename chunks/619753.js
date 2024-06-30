n.d(t, {
    Z: function () {
        return P;
    }
}), n(724458), n(653041), n(47120);
var i = n(735250), a = n(470079), l = n(837969), s = n(481060), r = n(668781), o = n(904245), c = n(603263), u = n(963374), d = n(607070), h = n(933557), p = n(471445), m = n(905405), _ = n(255269), f = n(937889), E = n(703656), C = n(359110), g = n(695346), I = n(592125), x = n(430824), T = n(496675), N = n(699516), v = n(768119), S = n(944486), Z = n(594174), A = n(68588), M = n(101695), b = n(683101), R = n(981631), j = n(689938), L = n(832719);
function P(e) {
    var t;
    let {
            search: n,
            searchId: h,
            renderEmbeds: p,
            scrollTo: m,
            searchResults: _,
            blockCount: f,
            onChangePage: C
        } = e, {
            offset: g,
            totalResults: x,
            isSearching: T,
            showBlockedResults: S
        } = n, Z = a.useCallback(e => {
            if (T)
                return;
            let t = e - 1;
            null == C || C(t), c.oO(h, t);
        }, [
            h,
            T,
            C
        ]), A = a.useCallback(e => {
            if (e.blocked)
                r.Z.show({
                    title: j.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                    body: j.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: e.author.username }),
                    confirmText: j.Z.Messages.OKAY
                });
            else {
                let t = I.Z.getChannel(e.channel_id), n = null != t ? t.getGuildId() : null;
                o.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: v.Z.getAnalyticsId(h) }), (0, E.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id));
            }
        }, [h]), b = a.useMemo(() => {
            let e;
            if (null == _)
                return [];
            let t = 0;
            return _.reduce((n, i) => {
                let a = i.find(e => e.isSearchHit);
                if (!S && null != a && N.Z.isBlockedForMessage(a))
                    return n;
                let l = I.Z.getChannel(i[0].channel_id);
                return null == l ? n : ((null == e || e !== l.id) && n.push({
                    channel: l,
                    results: [],
                    startIndex: t
                }), t += 1, n[n.length - 1].results.push(i), e = null == l ? void 0 : l.id, n);
            }, []);
        }, [
            _,
            S
        ]), P = a.useRef([]), y = b.reduce((e, t) => e + 1 + t.results.length, 0), D = a.useCallback((e, t) => {
            if (!d.Z.keyboardModeEnabled)
                return;
            let n = P.current, i = null != t ? n[t] : void 0;
            if (null == i || null == i.hitRef.current)
                return;
            let a = i.hitRef.current.getClientRects()[0];
            m(a.top - 0.5 * a.height, !1, () => {
                var t;
                null === (t = document.getElementById(e)) || void 0 === t || t.focus();
            });
        }, [m]), k = a.useCallback(e => {
            let t = P.current[e];
            null == t || t.jumpTo();
        }, []), U = (0, l.ZP)({
            navId: 'search-results',
            itemCount: y,
            focusedIndex: 0,
            setFocus: D,
            onSelect: k
        }), w = v.Z.getQuery(h), B = v.Z.getSearchType(h) === R.aib.FAVORITES, H = (0, u.nC)(null !== (t = null == w ? void 0 : w.content) && void 0 !== t ? t : ''), G = b.map(e => {
            let {
                channel: t,
                results: n,
                startIndex: a
            } = e;
            return (0, i.jsx)(O, {
                channel: t,
                results: n,
                highlighter: H,
                startIndex: a,
                resultRefs: P,
                totalResults: x,
                scrollTo: m,
                searchId: h,
                renderEmbeds: p,
                offset: g,
                jumpToMessage: A,
                listNavigator: U,
                favoriteSearch: B
            }, ''.concat(t.id, '-').concat(a));
        });
    G.push();
    let V = a.useRef(null);
    a.useLayoutEffect(() => {
        var e;
        null === (e = V.current) || void 0 === e || e.focus();
    }, [_]);
    let F = (0, s.useFocusJumpSection)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: V,
                ...U.getContainerProps(),
                ...F,
                'aria-busy': T,
                children: G
            }),
            f > 0 ? (0, i.jsxs)(s.Clickable, {
                tag: 'div',
                className: L.resultsBlocked,
                onClick: () => c.QY(h, !S),
                children: [
                    (0, i.jsx)('div', { className: L.resultsBlockedImage }),
                    (0, i.jsx)('div', {
                        className: L.__invalid_resultsBlockedText,
                        children: S ? j.Z.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({ count: f }) : j.Z.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({ count: f })
                    })
                ]
            }) : null,
            !T && !B && (0, i.jsx)(M.Z, {
                changePage: Z,
                offset: g,
                totalResults: x,
                pageLength: R.vpv
            })
        ]
    });
}
function O(e) {
    var t, n;
    let {
            channel: l,
            results: r,
            highlighter: o,
            startIndex: c,
            resultRefs: u,
            totalResults: d,
            scrollTo: E,
            searchId: v,
            renderEmbeds: M,
            offset: j,
            jumpToMessage: P,
            listNavigator: O,
            favoriteSearch: y
        } = e, D = g.cC.useSetting(), k = (0, m.p)(), U = a.useCallback(e => {
            if (e === S.Z.getChannelId())
                return;
            let t = I.Z.getChannel(e);
            if (null != t && !!T.Z.can(R.Plq.VIEW_CHANNEL, t))
                (0, C.Kh)(t.id);
        }, []), w = null != l ? (0, h.F6)(l, Z.default, N.Z, !1) : '???', B = y && null != l.guild_id ? null === (t = x.Z.getGuild(l.guild_id)) || void 0 === t ? void 0 : t.name : null, H = (null == l ? void 0 : l.parent_id) != null ? I.Z.getChannel(l.parent_id) : null, G = null != H ? H.name : null, V = null !== (n = (0, p.KS)(l)) && void 0 !== n ? n : s.TextIcon, F = null != H ? (0, p.KS)(H) : null, W = T.Z.can(R.Plq.MANAGE_MESSAGES, l), {content: z} = (0, f.ZP)({
            content: w,
            embeds: []
        }, {
            postProcessor: o,
            shouldFilterKeywords: k
        }), Y = a.useRef(null), [K, q] = a.useState(!1);
    a.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && q(e.offsetWidth < e.scrollWidth);
    }, []);
    let X = [
        w,
        G,
        B
    ].filter(e => null != e).join(', ');
    return (0, i.jsx)(A.a.Provider, {
        value: (0, _.Z)(D, W),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: L.searchResultGroup,
            'aria-label': X,
            children: [
                (0, i.jsx)(s.Clickable, {
                    onClick: () => U(l.id),
                    children: (0, i.jsxs)('div', {
                        className: L.channelNameContainer,
                        children: [
                            (0, i.jsx)(V, {
                                className: L.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(s.Tooltip, {
                                text: w,
                                shouldShow: K,
                                children: e => (0, i.jsxs)('span', {
                                    ...e,
                                    ref: Y,
                                    className: L.channelNameText,
                                    children: [
                                        y && null !== B && ''.concat(B, ' : '),
                                        z
                                    ]
                                })
                            }),
                            null != H && null != G && null != F ? (0, i.jsxs)(s.Clickable, {
                                className: L.parentChannelNameClickable,
                                onClick: e => {
                                    e.stopPropagation(), U(H.id);
                                },
                                children: [
                                    (0, i.jsx)(F, {
                                        className: L.parentChannelNameIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        className: L.parentChannelNameText,
                                        variant: 'text-xs/medium',
                                        color: 'header-secondary',
                                        children: G
                                    })
                                ]
                            }) : null
                        ]
                    })
                }),
                r.map((e, t) => {
                    let n = c + t;
                    return (0, i.jsx)(b.Z, {
                        ref: e => u.current[n] = e,
                        totalResults: d,
                        scrollTo: E,
                        searchId: v,
                        renderEmbeds: M,
                        searchOffset: j,
                        pageResultsLength: r.length,
                        result: e,
                        index: n,
                        onJump: P,
                        listItemProps: O.getItemProps({ index: n })
                    }, 'search-result-'.concat(n));
                })
            ]
        })
    });
}
