n.d(t, {
    Z: function () {
        return M;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(392711), r = n.n(a), l = n(954955), o = n.n(l), c = n(442837), d = n(481060), u = n(570140), _ = n(569984), E = n(918701), h = n(93127), I = n(814443), m = n(594174), p = n(801077), g = n(626135), T = n(70956), S = n(225559), C = n(910436), N = n(203028), f = n(358924), A = n(292140), Z = n(525296), L = n(981631), v = n(674563), O = n(689938), R = n(519851);
let x = 15 * T.Z.Millis.MINUTE, P = (0, Z.Z)(function (e) {
        let {
                party: t,
                onUserContextMenu: n,
                onChannelContextMenu: a,
                quest: r
            } = e, l = (0, i.jsx)(N.Z, {
                party: t,
                onUserContextMenu: n
            }), c = (0, i.jsx)(C.Z, {
                party: t,
                onChannelContextMenu: a,
                quest: r
            }), {
                partiedMembers: u,
                applicationStreams: _,
                currentActivities: E,
                voiceChannels: h
            } = t, I = u.length, m = _.length, p = E.length, T = h.length > 0, S = s.useCallback(() => {
                let e = E.filter(e => {
                    var t, n;
                    return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === v.wW.GAME;
                }).map(e => e.game.name);
                g.default.track(L.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: I,
                    num_streams: m,
                    num_activities: p,
                    in_voice_channel: T,
                    games_detected: e
                });
            }, [
                I,
                m,
                p,
                T,
                E
            ]), Z = o()(S, x);
        return null != l || null != c ? (0, i.jsx)(d.Popout, {
            position: 'left',
            renderPopout: e => {
                let {closePopout: n} = e;
                return (0, i.jsx)(A.Z, {
                    party: t,
                    close: n
                });
            },
            spacing: 8,
            children: (e, t) => {
                let {isShown: n} = t;
                return (0, i.jsx)(f.Z, {
                    ...e,
                    onMouseEnter: Z,
                    'aria-haspopup': 'menu',
                    className: R.itemCard,
                    active: n,
                    children: (0, i.jsxs)('div', {
                        children: [
                            l,
                            c
                        ]
                    })
                });
            }
        }) : null;
    }), b = r().throttle(() => h.W(!1), 300000);
function M() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: a,
            currentUser: r
        } = (0, c.cj)([
            p.Z,
            I.Z,
            m.default
        ], () => ({
            nowPlayingCards: p.Z.nowPlayingCards,
            loaded: p.Z.loaded,
            needsRefresh: I.Z.needsRefresh(),
            fetching: I.Z.getFetching(),
            currentUser: m.default.getCurrentUser()
        })), l = (0, c.e7)([_.Z], () => _.Z.quests);
    s.useEffect(() => (u.Z.wait(() => S.L()), () => u.Z.wait(() => S.v())), [null == r ? void 0 : r.id]), s.useEffect(() => {
        n && !a && b();
    }, [
        n,
        a
    ]);
    let o = s.useMemo(() => {
            let t = new Map(), n = new Set();
            for (let i of e)
                i.party.currentActivities.forEach(e => {
                    let {game: s} = e;
                    if (null != s) {
                        let e = (0, E.lQ)(l, s.id);
                        null != e && !n.has(e.id) && (t.set(i.party.id, e), n.add(e.id));
                    }
                });
            return t;
        }, [
            e,
            l
        ]), h = null;
    return t ? (h = e.length > 0 ? e.map(e => {
        let {party: t} = e;
        return (0, i.jsx)(P, {
            party: t,
            quest: o.get(t.id)
        }, t.id);
    }) : (0, i.jsxs)('div', {
        className: R.emptyCard,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.emptyHeader,
                children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
            }),
            (0, i.jsx)(d.Text, {
                color: 'none',
                className: R.emptyText,
                variant: 'text-sm/normal',
                children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
            })
        ]
    }), (0, i.jsx)(i.Fragment, { children: h })) : (0, i.jsx)('div', {
        className: R.emptyCard,
        children: (0, i.jsx)(d.Spinner, {})
    });
}
