n(653041), n(724458);
var i, a, s, l, r = n(442837), o = n(570140), c = n(999650), d = n(279779), u = n(57132), _ = n(483360), E = n(892880), m = n(405656), I = n(51144), T = n(271383), h = n(768119), N = n(246946), f = n(594174), p = n(981631);
let C = {}, g = {};
function S(e) {
    let {
            searchId: t,
            query: n,
            mode: i,
            tokens: a,
            cursorScope: s,
            autocompletes: l
        } = e, r = g[t];
    return null == r && (r = {
        results: [],
        context: d.Z.getSearchContext(A.bind(null, t))
    }, g[t] = r), {
        query: null != n ? n : '',
        mode: null != i ? i : {
            type: p.Sap.EMPTY,
            filter: null,
            token: null
        },
        tokens: null != a ? a : [],
        cursorScope: null != s ? s : null,
        autocompletes: null != l ? l : []
    };
}
function A(e, t) {
    let {results: n} = t, i = g[e], a = C[e];
    if (null == i || null == a)
        return;
    let {
        type: s,
        filter: l
    } = a.mode;
    if (s === p.Sap.EMPTY || s === p.Sap.FILTER && l !== p.dCx.FILTER_FROM && l !== p.dCx.FILTER_MENTIONS)
        return;
    let r = 3;
    a.mode.type === p.Sap.FILTER && (r = 10), i.results = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        return (e = e.reduce((e, t) => {
            let n = f.default.getUser(t.id);
            return null == n ? e : (e.push({
                id: n.id,
                text: I.ZP.getUserTag(n),
                user: n
            }), e);
        }, [])).length > t && (e.length = t), e;
    }(n, r);
    let {
            query: o,
            mode: c,
            tokens: d,
            cursorScope: u
        } = a, {autocompletes: _} = a;
    _ = R(e, c), C[e] = S({
        searchId: e,
        query: o,
        mode: c,
        tokens: d,
        cursorScope: u,
        autocompletes: _
    }), P.emitChange();
}
function x(e, t, n) {
    let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e)
        return null;
    if (h.Z.getSearchType(n) === p.aib.GUILD && (e === p.dCx.FILTER_FROM || e === p.dCx.FILTER_MENTIONS)) {
        let e = g[n];
        null == e ? i = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = _.ZP.getRecentlyTalked(n, 10).map(e => {
            let {record: t} = e;
            return {
                user: t,
                text: I.ZP.getUserTag(t)
            };
        })), i = e.results);
    } else {
        var s;
        let l = null === (s = c.ZP[e]) || void 0 === s ? void 0 : s.getAutocompletions, r = (null != t ? t.getFullMatch() : '').trim();
        i = null != l ? l(r, n, null != a ? a : 10) : [];
    }
    return null == i || 0 === i.length ? null : {
        group: e,
        results: i
    };
}
function O(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(), n = function () {
            let e = (0, u.cn)() && !1;
            return {
                [p.dCx.FILTER_FROM]: !N.Z.hidePersonalInformation,
                [p.dCx.FILTER_MENTIONS]: !N.Z.hidePersonalInformation,
                [p.dCx.FILTER_HAS]: !0,
                [p.dCx.FILTER_BEFORE]: !0,
                [p.dCx.FILTER_AFTER]: !0,
                [p.dCx.FILTER_ON]: !0,
                [p.dCx.FILTER_IN]: h.Z.getSearchType() === p.aib.GUILD,
                [p.dCx.FILTER_PINNED]: !e
            };
        }(), i = (0, c.nB)(t).filter(e => n[e.token]);
    return {
        group: p.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function R(e, t) {
    let n = [];
    return t.type === p.Sap.FILTER ? n.push(x(t.filter, t.token, e, 10)) : t.type === p.Sap.FILTER_ALL ? n = function (e, t) {
        let n = (null != e ? e.getFullMatch() : '').trim(), i = [];
        return null != n && '' !== n && (function (e) {
            let t = h.Z.getSearchType(e), n = [p.dCx.FILTER_HAS];
            return !N.Z.hidePersonalInformation && (n.push(p.dCx.FILTER_FROM), n.push(p.dCx.FILTER_MENTIONS)), t === p.aib.GUILD && n.push(p.dCx.FILTER_IN), n;
        }(t).forEach(n => {
            if (null == n)
                return;
            let a = x(n, e, t, 3);
            null != a && i.push(a);
        }), i.push(function (e, t) {
            let n = (null != e ? e.getFullMatch() : '').trim();
            if (null != n && '' !== n) {
                var i, a, s;
                let e = null === (i = c.ZP[p.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0], l = null === (a = c.ZP[p.dCx.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0], r = null === (s = c.ZP[p.dCx.FILTER_AFTER]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0];
                return null == e ? null : {
                    group: p.rtL.DATES,
                    results: [
                        e,
                        l,
                        r
                    ]
                };
            }
        }(e, t))), 5 > (0, m.BU)(i) && i.push(O(e)), i;
    }(t.token, e) : t.type === p.Sap.EMPTY && (n.push(O(t.token)), (0, u.cn)(), n.push(function (e) {
        if (N.Z.hidePersonalInformation)
            return null;
        let t = h.Z.getHistory(e);
        return null == t ? null : {
            group: p.rtL.HISTORY,
            results: t.map(e => ({ text: e }))
        };
    }(e))), n;
}
function M() {
    (0, m.WU)();
}
function v(e) {
    let t = C[e];
    if (null == t)
        return;
    let {
        query: n,
        mode: i,
        tokens: a,
        cursorScope: s,
        autocompletes: l
    } = t;
    C[e] = S({
        searchId: e,
        query: n,
        mode: i,
        tokens: a,
        cursorScope: s,
        autocompletes: l.map(e => (null == e ? void 0 : e.group) === p.rtL.HISTORY ? null : e)
    });
}
function L() {
    let e = h.Z.getCurrentSearchId();
    if (null == e || null == C[e])
        return;
    let {
        query: t,
        mode: n,
        tokens: i,
        cursorScope: a
    } = C[e];
    C[e] = S({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: a,
        autocompletes: R(e, n)
    });
}
class Z extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(T.ZP, N.Z);
    }
    getState(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : S({ searchId: e });
    }
}
l = 'SearchAutocompleteStore', (s = 'displayName') in (a = Z) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l;
let P = new Z(o.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n, {
                searchId: i,
                tokens: a,
                cursorScope: s
            } = e, l = (0, m.cl)(a), r = (0, m.qc)(s, a), o = null !== (t = C[i]) && void 0 !== t ? t : {}, c = g[i], d = !0;
        if (l === o.query && (null == o.mode || o.mode.filter === r.filter))
            n = o.autocompletes, d = !1;
        else if (r.type === p.Sap.EMPTY || r.type === p.Sap.FILTER && r.filter !== p.dCx.FILTER_FROM && r.filter !== p.dCx.FILTER_MENTIONS)
            null != c && (c.context.clearQuery(), c.results = []), n = R(i, r);
        else if (null != c) {
            let {token: e} = r;
            null != e && e.getFullMatch().trim().length > 0 ? (E.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), n = o.autocompletes, d = !1) : (c.context.clearQuery(), n = R(i, r));
        }
        return C[i] = S({
            searchId: i,
            query: l,
            mode: r,
            tokens: a,
            cursorScope: s,
            autocompletes: n
        }), d;
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let {searchId: t} = e, n = g[t];
        null != n && (n.context.destroy(), n.results = [], delete g[t]), delete C[t];
    },
    CHANNEL_CREATE: M,
    CHANNEL_DELETE: M,
    STREAMER_MODE_UPDATE: L,
    SEARCH_MODAL_OPEN: L,
    SEARCH_SCREEN_OPEN: L,
    SEARCH_CLEAR_HISTORY: function (e) {
        let {searchId: t} = e;
        null != t ? v(t) : Object.keys(C).forEach(v);
    },
    LOGOUT: function () {
        Object.keys(C).forEach(v);
    }
});
t.Z = P;
