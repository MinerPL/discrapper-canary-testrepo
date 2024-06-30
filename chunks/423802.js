n.d(t, {
    Lu: function () {
        return l;
    }
});
var r = n(599295), i = n(725454), a = n.n(i), o = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0
    };
l.rankings = o;
var s = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, n) {
    void 0 === n && (n = {});
    var i = n, a = i.keys, l = i.threshold, c = void 0 === l ? o.MATCHES : l, _ = i.baseSort, E = void 0 === _ ? s : _, f = i.sorter;
    return (void 0 === f ? function (e) {
        return e.sort(function (e, t) {
            return function (e, t, n) {
                var r = e.rank, i = e.keyIndex, a = t.rank, o = t.keyIndex;
                return r !== a ? r > a ? -1 : 1 : i === o ? n(e, t) : i < o ? -1 : 1;
            }(e, t, E);
        });
    } : f)(e.reduce(function (e, i, s) {
        var l = function (e, t, n, i) {
                return t ? function (e, t) {
                    for (var n = [], i = 0, a = t.length; i < a; i++) {
                        for (var o = t[i], s = function (e) {
                                    return 'string' == typeof e ? d : (0, r.Z)({}, d, e);
                                }(o), l = function (e, t) {
                                    var n;
                                    if ('object' == typeof t && (t = t.key), 'function' == typeof t)
                                        n = t(e);
                                    else if (null == e)
                                        n = null;
                                    else if (Object.hasOwnProperty.call(e, t))
                                        n = e[t];
                                    else {
                                        if (t.includes('.'))
                                            return function (e, t) {
                                                for (var n = e.split('.'), r = [t], i = 0, a = n.length; i < a; i++) {
                                                    for (var o = n[i], s = [], l = 0, u = r.length; l < u; l++) {
                                                        var c = r[l];
                                                        if (null != c) {
                                                            if (Object.hasOwnProperty.call(c, o)) {
                                                                var d = c[o];
                                                                null != d && s.push(d);
                                                            } else
                                                                '*' === o && (s = s.concat(c));
                                                        }
                                                    }
                                                    r = s;
                                                }
                                                if (Array.isArray(r[0])) {
                                                    var _ = [];
                                                    return _.concat.apply(_, r);
                                                }
                                                return r;
                                            }(t, e);
                                        n = null;
                                    }
                                    return null == n ? [] : Array.isArray(n) ? n : [String(n)];
                                }(e, o), u = 0, c = l.length; u < c; u++)
                            n.push({
                                itemValue: l[u],
                                attributes: s
                            });
                    }
                    return n;
                }(e, t).reduce(function (e, t, r) {
                    var a = e.rank, s = e.rankedValue, l = e.keyIndex, c = e.keyThreshold, d = t.itemValue, _ = t.attributes, E = u(d, n, i), f = s, h = _.minRanking, p = _.maxRanking, m = _.threshold;
                    return E < h && E >= o.MATCHES ? E = h : E > p && (E = p), E > a && (a = E, l = r, c = m, f = d), {
                        rankedValue: f,
                        rank: a,
                        keyIndex: l,
                        keyThreshold: c
                    };
                }, {
                    rankedValue: e,
                    rank: o.NO_MATCH,
                    keyIndex: -1,
                    keyThreshold: i.threshold
                }) : {
                    rankedValue: e,
                    rank: u(e, n, i),
                    keyIndex: -1,
                    keyThreshold: i.threshold
                };
            }(i, a, t, n), _ = l.rank, E = l.keyThreshold;
        return _ >= (void 0 === E ? c : E) && e.push((0, r.Z)({}, l, {
            item: i,
            index: s
        })), e;
    }, [])).map(function (e) {
        return e.item;
    });
}
function u(e, t, n) {
    return (e = c(e, n), (t = c(t, n)).length > e.length) ? o.NO_MATCH : e === t ? o.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), e === (t = t.toLowerCase())) ? o.EQUAL : e.startsWith(t) ? o.STARTS_WITH : e.includes(' ' + t) ? o.WORD_STARTS_WITH : e.includes(t) ? o.CONTAINS : 1 === t.length ? o.NO_MATCH : function (e) {
        var t = '';
        return e.split(' ').forEach(function (e) {
            e.split('-').forEach(function (e) {
                t += e.substr(0, 1);
            });
        }), t;
    }(e).includes(t) ? o.ACRONYM : function (e, t) {
        var n, r, i = 0, a = 0;
        function s(e, t, n) {
            for (var r = n, a = t.length; r < a; r++)
                if (t[r] === e)
                    return i += 1, r + 1;
            return -1;
        }
        var l = s(t[0], e, 0);
        if (l < 0)
            return o.NO_MATCH;
        a = l;
        for (var u = 1, c = t.length; u < c; u++)
            if (!((a = s(t[u], e, a)) > -1))
                return o.NO_MATCH;
        return n = a - l, r = i / t.length, o.MATCHES + 1 / n * r;
    }(e, t);
}
function c(e, t) {
    var n = t.keepDiacritics;
    return e = '' + e, !n && (e = a()(e)), e;
}
var d = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};
