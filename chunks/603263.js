n.d(t, {
    Nz: function () {
        return d;
    },
    QQ: function () {
        return T;
    },
    QY: function () {
        return p;
    },
    Vj: function () {
        return c;
    },
    j8: function () {
        return h;
    },
    jn: function () {
        return _;
    },
    m$: function () {
        return u;
    },
    oO: function () {
        return E;
    },
    qt: function () {
        return N;
    },
    u$: function () {
        return f;
    },
    yC: function () {
        return o;
    }
}), n(724458);
var i = n(570140), a = n(367907), s = n(768119), l = n(405656), r = n(981631);
function o(e, t, n, o) {
    (0, l.jW)(t, e), o && (t.search_everywhere = !0);
    let c = Object.keys(t);
    a.ZP.trackWithMetadata(r.rMx.SEARCH_STARTED, {
        search_type: s.Z.getSearchType(),
        prev_search_id: s.Z.getAnalyticsId(e),
        num_modifiers: c.length,
        modifiers: c.reduce((e, n) => {
            let i = t[n];
            return e[n] = Array.isArray(i) ? i.length : 1, e;
        }, {})
    }), i.Z.dispatch({
        type: 'SEARCH_START',
        query: t,
        searchId: e,
        queryString: n,
        searchEverywhere: o
    });
}
function c(e) {
    return 'relevance' === e.sort_by ? r.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? r.QIO.OLDEST : r.QIO.NEWEST;
}
function d(e, t) {
    let n = s.Z.getQuery(e), i = function (e) {
            switch (e) {
            case r.QIO.MOST_RELEVANT:
                return {
                    sort_by: 'relevance',
                    sort_order: 'desc'
                };
            case r.QIO.OLDEST:
                return {
                    sort_by: 'timestamp',
                    sort_order: 'asc'
                };
            case r.QIO.NEWEST:
            default:
                return {
                    sort_by: 'timestamp',
                    sort_order: 'desc'
                };
            }
        }(t);
    return o(e, {
        ...n,
        ...i,
        offset: 0
    });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.vpv;
    return m(e, t);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.vpv;
    return m(e, -t);
}
function E(e, t) {
    return I(e, t * r.vpv);
}
function m(e, t) {
    let n = s.Z.getOffset(e);
    return I(e, n + t);
}
function I(e, t) {
    let n = s.Z.getQuery(e), i = s.Z.getTotalResults(e);
    if (!(t < 0) && !(t > i))
        return o(e, {
            ...n,
            offset: t
        });
}
function T(e) {
    i.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function h(e, t) {
    null != e && i.Z.dispatch({
        type: 'SEARCH_EDITOR_STATE_CHANGE',
        searchId: e,
        editorState: t
    });
}
function N(e) {
    a.ZP.trackWithMetadata(r.rMx.SEARCH_CLOSED, { search_id: s.Z.getAnalyticsId(e) }), i.Z.wait(() => i.Z.dispatch({
        type: 'SEARCH_EDITOR_STATE_CLEAR',
        searchId: e
    }));
}
function f(e, t, n) {
    null != e && i.Z.dispatch({
        type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
        searchId: e,
        tokens: t,
        cursorScope: n
    });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
