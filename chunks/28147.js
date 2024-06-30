t.d(n, {
    Z: function () {
        return T;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(392711), r = t.n(a), s = t(209173), o = t(555573), c = t(895924), u = t(809547), d = t(585483), m = t(499254), p = t(541099), _ = t(827498), E = t(392370), A = t(98880), N = t(561160), h = t(41558), C = t(106771), f = t(79984), I = t(981631), x = t(689938), P = t(664790);
let v = Array(6).fill(0).map((e, n) => n), g = [
        ,
        ,
        ,
    ].fill(0).map((e, n) => n);
function T(e) {
    return e.enableGlobalSearch ? (0, i.jsx)(M, { ...e }) : (0, i.jsx)(L, { ...e });
}
function M(e) {
    let {
            channel: n,
            query: t,
            entrypoint: a,
            enableActivitiesSearch: o
        } = e, c = a === _._b.VOICE || o, d = a === _._b.TEXT, m = a === _._b.TEXT, {
            loading: p,
            isEmptyState: A,
            commandResults: h,
            hasCommandResults: C,
            applicationResults: f,
            hasApplicationResults: I
        } = (0, E.pe)({
            channel: n,
            query: t,
            searchesActivities: c,
            searchesCommands: d,
            searchesBots: m
        }), {
            fetchState: P,
            applicationResults: v
        } = (0, E.Q2)({
            query: t,
            channel: n,
            fetches: a !== _._b.VOICE
        }), g = null == P || P === u.M.FETCHING, T = l.useMemo(() => {
            let e = f.map(e => ({
                application: e,
                installOnDemand: !1
            }));
            if (a === _._b.VOICE)
                return e;
            let n = new Set(f.map(e => {
                let {id: n} = e;
                return n;
            }));
            return [
                ...e,
                ...r().compact(v.map(e => e.type === s.s.CONNECTION || n.has(e.data.id) ? null : {
                    application: e.data,
                    installOnDemand: !0
                }))
            ];
        }, [
            a,
            v,
            f
        ]);
    return p ? (0, i.jsx)(j, {}) : A ? (0, i.jsx)(N.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            C && (0, i.jsx)(R, {
                channel: n,
                commandResults: h,
                query: t
            }),
            I && (0, i.jsx)(S, {
                applicationResults: T,
                includePlaceholder: g,
                query: t,
                searchesBots: m
            })
        ]
    });
}
function L(e) {
    let {
            channel: n,
            query: t,
            entrypoint: a,
            enableActivitiesSearch: r
        } = e, s = a === _._b.VOICE || r, o = a === _._b.TEXT, c = a === _._b.TEXT, {
            loading: u,
            isEmptyState: d,
            commandResults: m,
            hasCommandResults: p,
            applicationResults: A,
            hasApplicationResults: h
        } = (0, E.pe)({
            channel: n,
            query: t,
            commandLimit: 10,
            searchesCommands: o,
            searchesBots: c,
            searchesActivities: s
        }), C = l.useMemo(() => A.map(e => ({
            application: e,
            installOnDemand: !1
        })), [A]);
    return u ? (0, i.jsx)(j, {}) : d ? (0, i.jsx)(N.A, {
        type: _.LG.SEARCH_EMPTY,
        searchQuery: t,
        textContent: a === _._b.TEXT ? x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY : x.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
    }) : (0, i.jsxs)('div', {
        children: [
            p && (0, i.jsx)(R, {
                channel: n,
                commandResults: m,
                query: t
            }),
            h && (0, i.jsx)(S, {
                applicationResults: C,
                query: t,
                searchesBots: c
            })
        ]
    });
}
function R(e) {
    let {
        channel: n,
        commandResults: t,
        query: l
    } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.Z, { title: x.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: t.map((e, t) => {
                    let {
                        command: a,
                        application: r,
                        section: s
                    } = e;
                    return (0, i.jsx)(C.Z, {
                        command: a,
                        application: r,
                        onClick: () => {
                            let e = p.Z.entrypoint();
                            m.y(_.ti.DISMISSED), o.Po({
                                channelId: n.id,
                                command: a,
                                section: s,
                                location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                                triggerSection: void 0,
                                queryLength: l.length,
                                sectionName: _.L3.SEARCH,
                                query: l,
                                searchResultsPosition: t,
                                source: e
                            }), d.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: n.id });
                        }
                    }, a.id);
                })
            })
        ]
    });
}
function S(e) {
    let {
        applicationResults: n,
        includePlaceholder: t,
        query: l,
        searchesBots: a
    } = e;
    return a ? (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.Z, { title: x.Z.Messages.APPS }),
            (0, i.jsxs)('div', {
                className: P.sectionContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: a
                        } = e;
                        return (0, i.jsx)(O, {
                            application: t,
                            location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: _.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: a,
                            query: l
                        }, t.id);
                    }),
                    t && g.map(e => (0, i.jsx)(f.Z, {}, e))
                ]
            })
        ]
    }) : (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.Z, { title: x.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
            (0, i.jsxs)('div', {
                className: P.sectionActivitiesContentContainer,
                children: [
                    n.map((e, n) => {
                        let {
                            application: t,
                            installOnDemand: a
                        } = e;
                        return (0, i.jsx)(A.kA, {
                            application: t,
                            look: A.U4.LARGE_BANNER,
                            location: c.Vh.APP_LAUNCHER_HOME_SEARCH,
                            sectionName: _.L3.SEARCH,
                            resultsPosition: n,
                            installOnDemand: a,
                            query: l
                        }, t.id);
                    }),
                    t && g.map(e => (0, i.jsx)(f.Z, {}, e))
                ]
            })
        ]
    });
}
function O(e) {
    let n = (0, A.cG)(e);
    return (0, i.jsx)(C.Z, {
        application: e.application,
        onClick: n
    });
}
function j() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.Z, { title: x.Z.Messages.COMMANDS }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: v.map(e => (0, i.jsx)(f.Z, {}, e))
            }),
            (0, i.jsx)(h.Z, { title: x.Z.Messages.APPS }),
            (0, i.jsx)('div', {
                className: P.sectionContentContainer,
                children: g.map(e => (0, i.jsx)(f.Z, {}, e))
            })
        ]
    });
}
