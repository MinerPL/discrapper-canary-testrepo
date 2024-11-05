n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    l = n.n(a),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(569984),
    m = n(918701),
    p = n(93127),
    g = n(814443),
    f = n(594174),
    _ = n(801077),
    E = n(626135),
    I = n(70956),
    C = n(225559),
    v = n(910436),
    S = n(203028),
    N = n(358924),
    T = n(292140),
    x = n(525296),
    b = n(981631),
    A = n(674563),
    Z = n(388032),
    y = n(888816);
let L = 15 * I.Z.Millis.MINUTE,
    R = (0, x.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: a, quest: l } = e,
            s = (0, i.jsx)(S.Z, {
                party: t,
                onUserContextMenu: n
            }),
            c = (0, i.jsx)(v.Z, {
                party: t,
                onChannelContextMenu: a,
                quest: l
            }),
            { partiedMembers: u, applicationStreams: h, currentActivities: m, voiceChannels: p } = t,
            g = u.length,
            f = h.length,
            _ = m.length,
            I = p.length > 0,
            C = r.useCallback(() => {
                let e = m
                    .filter((e) => {
                        var t, n;
                        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === A.wW.GAME;
                    })
                    .map((e) => e.game.name);
                E.default.track(b.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: g,
                    num_streams: f,
                    num_activities: _,
                    in_voice_channel: I,
                    games_detected: e
                });
            }, [g, f, _, I, m]),
            x = o()(C, L);
        return null != s || null != c
            ? (0, i.jsx)(d.Popout, {
                  position: 'left',
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(T.Z, {
                          party: t,
                          close: n
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      let { isShown: n } = t;
                      return (0, i.jsx)(N.Z, {
                          ...e,
                          onMouseEnter: x,
                          'aria-haspopup': 'menu',
                          className: y.itemCard,
                          active: n,
                          children: (0, i.jsxs)('div', {
                              children: [s, c]
                          })
                      });
                  }
              })
            : null;
    }),
    P = l().throttle(() => p.W(!1), 300000);
function O() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: a,
            currentUser: l
        } = (0, c.cj)([_.Z, g.Z, f.default], () => ({
            nowPlayingCards: _.Z.nowPlayingCards,
            loaded: _.Z.loaded,
            needsRefresh: g.Z.needsRefresh(),
            fetching: g.Z.getFetching(),
            currentUser: f.default.getCurrentUser()
        })),
        s = (0, c.e7)([h.Z], () => h.Z.quests);
    r.useEffect(() => (u.Z.wait(() => C.L()), () => u.Z.wait(() => C.v())), [null == l ? void 0 : l.id]),
        r.useEffect(() => {
            n && !a && P();
        }, [n, a]);
    let o = r.useMemo(() => {
            let t = new Map(),
                n = new Set();
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: r } = e;
                    if (null != r) {
                        let e = (0, m.ZZ)(s, r);
                        null != e && !n.has(e.id) && (t.set(i.party.id, e), n.add(e.id));
                    }
                });
            return t;
        }, [e, s]),
        p = null;
    return t
        ? ((p =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(
                            R,
                            {
                                party: t,
                                quest: o.get(t.id)
                            },
                            t.id
                        );
                    })
                  : (0, i.jsxs)('div', {
                        className: y.emptyCard,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-md/semibold',
                                className: y.emptyHeader,
                                children: Z.intl.string(Z.t['ngJ/5u'])
                            }),
                            (0, i.jsx)(d.Text, {
                                color: 'none',
                                className: y.emptyText,
                                variant: 'text-sm/normal',
                                children: Z.intl.string(Z.t['99ZWxc'])
                            })
                        ]
                    })),
          (0, i.jsx)(i.Fragment, { children: p }))
        : (0, i.jsx)('div', {
              className: y.emptyCard,
              children: (0, i.jsx)(d.Spinner, {})
          });
}
