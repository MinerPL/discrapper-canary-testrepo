t.d(n, {
    Z: function () {
        return Y;
    }
}),
    t(47120),
    t(653041),
    t(724458);
var i = t(735250),
    a = t(470079),
    l = t(392711),
    o = t.n(l),
    r = t(892814),
    s = t(79411),
    c = t(442837),
    d = t(481060),
    u = t(911969),
    m = t(115130),
    p = t(566620),
    _ = t(127255),
    C = t(880308),
    h = t(427996),
    f = t(367907),
    A = t(399654),
    E = t(844439),
    N = t(254711),
    x = t(213459),
    v = t(10718),
    I = t(895924),
    g = t(148958),
    P = t(541099),
    L = t(827498),
    S = t(87005),
    T = t(106066),
    b = t(783097),
    R = t(695676),
    M = t(98880),
    j = t(804307),
    y = t(888617),
    O = t(561160),
    Z = t(41558),
    H = t(105862),
    U = t(28147),
    B = t(981631),
    D = t(689079),
    k = t(689938),
    w = t(597976);
let V = [],
    W = [, , , ,].fill(0).map((e, n) => n),
    F = [
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: M.U4.MEDIUM_BANNER
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: M.U4.ROW
        },
        {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: M.U4.ROW
        }
    ];
function Y(e) {
    let { channel: n, entrypoint: t, searchQuery: l, setSearchQuery: o, setScroller: r, isScrollCloseToBottom: s } = e,
        u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []),
        _ = t === L._b.TEXT && !n.isPrivate(),
        C = (0, b.Yn)(t),
        h = !(0, b.Yn)(t),
        f = t === L._b.TEXT,
        [A, E] = $(!0),
        [N, x] = $(_),
        [v, I] = $(C),
        [g, P] = $(h),
        S = A && N && v && g,
        T = (C || _) && !S,
        R = h && u;
    a.useEffect(() => {
        (0, p.w1)({
            guildId: n.guild_id,
            force: !0
        });
    }, [n.guild_id]),
        a.useEffect(() => {
            t === L._b.VOICE && p.ux();
        }, [t]);
    let M = l.length > 0;
    return (0, i.jsxs)('div', {
        className: w.container,
        children: [
            R ? (0, i.jsx)(G, {}) : null,
            (0, i.jsx)(z, {
                searchQuery: l,
                setSearchQuery: o,
                placeholder: f ? k.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : k.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
            }),
            (0, i.jsx)(d.Scroller, {
                ref: r,
                className: w.scrollableContent,
                fade: !0,
                children: M
                    ? (0, i.jsx)(U.Z, {
                          channel: n,
                          query: l,
                          entrypoint: t,
                          isScrollCloseToBottom: s
                      })
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(J, {
                                  channel: n,
                                  entrypoint: t,
                                  onEmptyState: E
                              }),
                              _ &&
                                  (0, i.jsx)(q, {
                                      channel: n,
                                      onEmptyState: x
                                  }),
                              C &&
                                  (0, i.jsx)(Q, {
                                      channel: n,
                                      entrypoint: t,
                                      onEmptyState: I
                                  }),
                              h &&
                                  (0, i.jsx)(X, {
                                      channel: n,
                                      onEmptyState: P
                                  }),
                              S &&
                                  (0, i.jsx)(O.A, {
                                      type: L.LG.HOME_EMPTY,
                                      textContent: t === L._b.TEXT ? k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
                                  }),
                              T && (0, i.jsx)(H.Z, {})
                          ]
                      })
            })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        className: w.developerShelfControlsContainer,
        children: [
            (0, i.jsx)(d.Text, {
                className: w.developerShelfControlsLabel,
                variant: 'text-sm/normal',
                children: k.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
            }),
            (0, i.jsx)(h.W, { hideSearch: !0 })
        ]
    });
}
function z(e) {
    let { searchQuery: n, setSearchQuery: t, placeholder: l } = e,
        r = a.useRef(null),
        [s, c] = a.useState(!1),
        u = a.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: P.Z.entrypoint(),
                            location: I.Vh.APP_LAUNCHER_HOME
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        ),
        m = a.useCallback(() => t(''), [t]),
        p = a.useCallback(() => {
            c(!0),
                (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: P.Z.entrypoint(),
                    location: I.Vh.APP_LAUNCHER_HOME
                });
        }, []),
        _ = a.useCallback(() => {
            c(!1);
        }, []),
        C = a.useCallback(
            (e) => {
                !s && p(), t(e), u(e);
            },
            [s, t, p, u]
        );
    return (
        a.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
                !s && p();
            };
            return (
                e.addEventListener('click', n),
                () => {
                    e.removeEventListener('click', n);
                }
            );
        }, [s, p]),
        (0, i.jsx)('div', {
            className: w.searchBarContainer,
            children: (0, i.jsx)(d.SearchBar, {
                ref: (e) => {
                    var n;
                    r.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
                },
                placeholder: l,
                query: n,
                onChange: C,
                onClear: m,
                size: d.SearchBar.Sizes.MEDIUM,
                onFocus: _,
                autoFocus: !0
            })
        })
    );
}
function J(e) {
    let { channel: n, entrypoint: t, onEmptyState: l } = e,
        o = t === L._b.VOICE,
        { frecentApps: r, loading: s } = (0, S.f)(n, o),
        c = a.useMemo(() => {
            let e = [];
            for (let n of r) null != n.application && e.push({ application: n.application });
            return e;
        }, [r]),
        d = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER,
        u = d;
    o && (u = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_ACTIVITIES);
    let { items: m, handleViewMore: p } = ee(u, t === L._b.VOICE ? M.U4.LARGE_BANNER : M.U4.ROW, c, 8, L.L3.RECENT_APPS);
    a.useEffect(() => {
        if (!0 !== s.current)
            0 !== m.length &&
                (0, f.yw)(B.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: L.L3.RECENT_APPS,
                    location: L.G0.HOME,
                    source: t
                });
    }, [m.length, t, s]);
    let _ = s.current,
        C = !_ && 0 === m.length;
    return (a.useEffect(() => {
        l(C);
    }, [C, l]),
    _ || C)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(Z.Z, {
                      title: d,
                      buttonType: Z.Z.buttonTypes.VIEW_MORE,
                      onClickViewButton: p
                  }),
                  (0, i.jsx)('div', {
                      className: w.sectionContentContainer,
                      children: (0, i.jsx)('div', {
                          className: w.frecentList,
                          children: m.map((e, t) => {
                              let { application: a } = e;
                              return o
                                  ? (0, i.jsx)(
                                        M.qR,
                                        {
                                            channel: n,
                                            application: a,
                                            look: M.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
                                            resultsPosition: t,
                                            isOneClickCTA: !0
                                        },
                                        a.id
                                    )
                                  : (0, i.jsx)(
                                        M.kA,
                                        {
                                            application: a,
                                            look: M.U4.ICON,
                                            location: L.G0.HOME,
                                            sectionName: L.L3.RECENT_APPS,
                                            resultsPosition: t
                                        },
                                        a.id
                                    );
                          })
                      })
                  })
              ]
          });
}
function X(e) {
    let { channel: n, onEmptyState: t } = e;
    (0, C.g)();
    let l = (0, _.Z)({ guildId: n.getGuildId() }),
        o = M.U4.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, y.Z)({
            sectionName: L.L3.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length
        }),
        s = (0, T.s)('ActivitiesShelfSection'),
        c = 0 === l.length;
    return (a.useEffect(() => {
        t(c);
    }, [t, c]),
    c)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (r.current = e),
                      children: (0, i.jsx)(Z.Z, { title: k.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE })
                  }),
                  (0, i.jsx)('div', {
                      className: w.sectionTwoColumnContentContainer,
                      children: l.map((e, t) => {
                          let { application: a } = e;
                          return (0, i.jsx)(
                              M.qR,
                              {
                                  channel: n,
                                  application: a,
                                  look: o,
                                  location: I.Vh.APP_LAUNCHER_HOME,
                                  sectionName: L.L3.ACTIVITIES,
                                  resultsPosition: t,
                                  isOneClickCTA: !s
                              },
                              a.id
                          );
                      })
                  })
              ]
          });
}
function q(e) {
    var n;
    let { channel: t, onEmptyState: l } = e,
        r = (0, x.LD)(t.guild_id, !0),
        { commandsByActiveSection: s, loading: c } = v.wi(
            t,
            {
                commandTypes: [u.yU.CHAT, u.yU.PRIMARY_ENTRY_POINT]
            },
            {
                placeholderCount: 0,
                limit: D.tn,
                includeFrecency: !0
            }
        ),
        d = a.useMemo(
            () =>
                s.reduce((e, n) => {
                    let { section: t, data: i } = n;
                    return i.length > 0 && e.add(t.id), e;
                }, new Set()),
            [s]
        ),
        m = a.useMemo(() => {
            var e, n;
            return Object.values(null !== (n = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {})
                .map((e) => {
                    let { descriptor: n } = e;
                    return n;
                })
                .filter((e) => !(e.id in N.Tm) && d.has(e.id));
        }, [null === (n = r.result) || void 0 === n ? void 0 : n.sections, d]),
        p = (0, g.h)(m),
        _ = L.L3.APPS_IN_THIS_SERVER,
        C = a.useMemo(
            () =>
                o()
                    .compact(
                        p.map((e) => {
                            let { application: n } = e;
                            return n;
                        })
                    )
                    .map((e) => ({ application: e })),
            [p]
        ),
        { items: h, handleViewMore: f } = ee(k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, M.U4.ROW, C, 4, _),
        { trackSectionImpressionRef: A } = (0, y.Z)({
            sectionName: _,
            numItems: C.length,
            numVisibleItems: h.length
        }),
        E = r.fetchState.fetching || c.current,
        P = !E && 0 === h.length;
    return (a.useEffect(() => {
        l(P);
    }, [P, l]),
    P)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: (e) => (A.current = e),
                      children: (0, i.jsx)(Z.Z, {
                          title: k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                          buttonType: Z.Z.buttonTypes.VIEW_MORE,
                          onClickViewButton: f
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: w.sectionRowsContentContainer,
                      children: E
                          ? W.map((e) => (0, i.jsx)(j.Z, { look: M.U4.ROW }, e))
                          : h.map((e, n) => {
                                let { application: t } = e;
                                return null != t
                                    ? (0, i.jsx)(
                                          M.kA,
                                          {
                                              application: t,
                                              look: M.U4.ROW,
                                              sectionName: _,
                                              resultsPosition: n,
                                              location: I.Vh.APP_LAUNCHER_HOME
                                          },
                                          t.id
                                      )
                                    : null;
                            })
                  })
              ]
          });
}
function Q(e) {
    let { channel: n, entrypoint: t, onEmptyState: l } = e,
        {
            fetchState: o,
            recommendationsSections: s,
            isInstallOnDemand: d
        } = (function (e) {
            let { channel: n, location: t } = e,
                i = n.id;
            a.useEffect(() => {
                (0, A.a)({
                    channelId: i,
                    location: t,
                    withCommands: !1
                });
            }, [i, t]);
            let { sectionDescriptors: l } = v.wi(
                    n,
                    { commandTypes: [u.yU.CHAT] },
                    {
                        placeholderCount: 0,
                        limit: D.tn,
                        includeFrecency: !0
                    }
                ),
                o = a.useCallback((e) => !(null != l.find((n) => n.id === e.id)), [l]),
                { fetchState: s, recommendationsSections: d } = (0, c.cj)([E.ZP], () => ({
                    fetchState: E.ZP.getFetchState({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    }),
                    recommendationsSections: E.ZP.getRecommendations({
                        channelId: i,
                        location: t,
                        withCommands: !1
                    })
                })),
                m = t === r.I.APP_LAUNCHER_VOICE;
            return {
                fetchState: s,
                recommendationsSections: a.useMemo(() => (m ? (0, b.pF)(d) : d), [d, m]),
                isInstallOnDemand: o
            };
        })({
            channel: n,
            location: t === L._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE
        }),
        m = (function (e) {
            let { channel: n, recommendationsSections: t } = e;
            (0, C.g)();
            let i = (0, _.Z)({ guildId: n.getGuildId() });
            return a.useMemo(() => {
                if (!t.some((e) => e.appends_remaining_activities)) return V;
                let e = new Set();
                return (
                    t.forEach((n) => {
                        n.items.forEach((n) => {
                            null != n.application && e.add(n.application.id);
                        });
                    }),
                    i.filter((n) => !e.has(n.application.id))
                );
            }, [t, i]);
        })({
            channel: n,
            recommendationsSections: s
        }),
        p = o === E.M.FETCHING,
        h = !p && 0 === s.length;
    return (a.useEffect(() => {
        l(h);
    }, [h, l]),
    h)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: p
                  ? F.map((e, n) => {
                        let { cards: t, look: a } = e;
                        return (0, i.jsxs)(
                            'div',
                            {
                                children: [
                                    (0, i.jsx)(Z.Z.Loading, {}),
                                    (0, i.jsx)('div', {
                                        className: a === M.U4.ROW ? w.sectionRowsContentContainer : w.sectionTwoColumnContentContainer,
                                        children: t.map((e) => (0, i.jsx)(j.Z, { look: a }, e))
                                    })
                                ]
                            },
                            n
                        );
                    })
                  : s.map((e) =>
                        (0, i.jsx)(
                            K,
                            {
                                recommendationsSection: e,
                                remainingActivities: m,
                                isInstallOnDemand: d
                            },
                            e.key
                        )
                    )
          });
}
function K(e) {
    let n,
        t,
        { recommendationsSection: l, remainingActivities: o, isInstallOnDemand: r } = e,
        c = l.section_title;
    switch (l.type) {
        case s.i.BANNER_CARDS:
            n = M.U4.LARGE_BANNER;
            break;
        case s.i.SMALL_BANNER_CARDS:
            n = M.U4.MEDIUM_BANNER;
            break;
        default:
            n = M.U4.ROW;
    }
    let d = a.useMemo(() => {
            let e = l.items.map((e) => {
                let { application: n } = e;
                return {
                    application: n,
                    installOnDemand: r(n)
                };
            });
            return (
                l.appends_remaining_activities &&
                    e.push(
                        ...o.map((e) => {
                            let { application: n } = e;
                            return {
                                application: n,
                                installOnDemand: !0
                            };
                        })
                    ),
                e
            );
        }, [l.items, l.appends_remaining_activities, r, o]),
        u = l.key;
    switch (l.type) {
        case s.i.BANNER_CARDS:
        case s.i.SMALL_BANNER_CARDS:
            t = 6;
            break;
        case s.i.EXPANDABLE_LIST:
        default:
            t = 4;
    }
    let { items: m, handleViewMore: p } = ee(c, n, d, t, u),
        { trackSectionImpressionRef: _ } = (0, y.Z)({
            sectionName: u,
            numItems: d.length,
            numVisibleItems: m.length
        }),
        C = l.type !== s.i.SMALL_BANNER_CARDS;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)('div', {
                ref: (e) => (_.current = e),
                children: (0, i.jsx)(Z.Z, {
                    title: l.section_title,
                    buttonType: Z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: p
                })
            }),
            (0, i.jsx)('div', {
                className: n === M.U4.ROW ? w.sectionRowsContentContainer : w.sectionTwoColumnContentContainer,
                children: m.map((e, t) => {
                    let { application: a, installOnDemand: l } = e;
                    return (0, i.jsx)(
                        M.kA,
                        {
                            application: a,
                            look: n,
                            sectionName: u,
                            resultsPosition: t,
                            location: I.Vh.APP_LAUNCHER_HOME,
                            installOnDemand: l,
                            enableVideoBanner: C
                        },
                        a.id
                    );
                })
            })
        ]
    });
}
function $(e) {
    let [n, t] = a.useState(!e);
    return [
        n,
        a.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t(e);
        }, [])
    ];
}
function ee(e, n, t, i, l) {
    let { pushHistory: o } = (0, R.hH)();
    return a.useMemo(
        () =>
            t.length <= i
                ? {
                      items: t,
                      handleViewMore: void 0
                  }
                : {
                      items: t.slice(0, i),
                      handleViewMore: () => {
                          (0, f.yw)(B.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: l,
                              source: P.Z.entrypoint(),
                              num: t.length
                          }),
                              o({
                                  type: R.gc.LIST,
                                  title: e,
                                  look: n,
                                  items: t,
                                  sectionName: l
                              });
                      }
                  },
        [t, i, l, o, e, n]
    );
}
