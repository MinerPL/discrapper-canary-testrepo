function n(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {}, n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
        }))), n.forEach(function (e) {
            (function (t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
            }(t, e, r[e]));
        });
    }
    return t;
}
var i = r(213912), o = r(546870), a = r(770209), u = r(49287), s = r(88071);
r(901182);
var c = r(114080), l = r(9893), f = r(457936), p = r(416420), h = r(680643), d = r(316103), g = r(65183), y = r(581079), v = d('draft_tree_data_support'), m = g.List, _ = g.Map, b = g.OrderedMap, S = function (t, e) {
        var r = t.key, n = t.type, i = t.data;
        return {
            text: t.text,
            depth: t.depth || 0,
            type: n || 'unstyled',
            key: r || h(),
            data: _(i),
            characterList: w(t, e)
        };
    }, w = function (t, e) {
        var r = t.text, i = t.entityRanges, o = t.inlineStyleRanges;
        return l(p(r, o || []), f(r, (i || []).filter(function (t) {
            return e.hasOwnProperty(t.key);
        }).map(function (t) {
            return n({}, t, { key: e[t.key] });
        })));
    }, k = function (t) {
        return n({}, t, { key: t.key || h() });
    }, x = function (t, e, r) {
        var i = e.map(function (t) {
            return n({}, t, { parentRef: r });
        });
        return t.concat(i.reverse());
    }, C = function (t, e) {
        var r, a, u, c, l = t.blocks.find(function (t) {
                return Array.isArray(t.children) && t.children.length > 0;
            }), f = v && !l ? s.fromRawStateToRawTreeState(t).blocks : t.blocks;
        if (!v) {
            ;
            return r = l ? s.fromRawTreeStateToRawState(t).blocks : f, a = e, b(r.map(function (t) {
                var e = new i(S(t, a));
                return [
                    e.getKey(),
                    e
                ];
            }));
        }
        var p = (u = f, c = e, u.map(k).reduce(function (t, e, r) {
            Array.isArray(e.children) || y(!1);
            var i = e.children.map(k), a = new o(n({}, S(e, c), {
                    prevSibling: 0 === r ? null : u[r - 1].key,
                    nextSibling: r === u.length - 1 ? null : u[r + 1].key,
                    children: m(i.map(function (t) {
                        return t.key;
                    }))
                }));
            t = t.set(a.getKey(), a);
            for (var s = x([], i, a); s.length > 0;) {
                var l = s.pop(), f = l.parentRef, p = f.getChildKeys(), h = p.indexOf(l.key), d = Array.isArray(l.children);
                if (!d) {
                    d || y(!1);
                    break;
                }
                var g = l.children.map(k), v = new o(n({}, S(l, c), {
                        parent: f.getKey(),
                        children: m(g.map(function (t) {
                            return t.key;
                        })),
                        prevSibling: 0 === h ? null : p.get(h - 1),
                        nextSibling: h === p.size - 1 ? null : p.get(h + 1)
                    }));
                t = t.set(v.getKey(), v), s = x(s, g, v);
            }
            return t;
        }, b()));
        return p;
    }, E = function (t) {
        var e = t.entityMap, r = {};
        return Object.keys(e).forEach(function (t) {
            var n = e[t], i = n.type, o = n.mutability, a = n.data;
            r[t] = u.__create(i, o, a || {});
        }), r;
    };
t.exports = function (t) {
    Array.isArray(t.blocks) || y(!1);
    var e = E(t), r = C(t, e), n = r.isEmpty() ? new c() : c.createEmpty(r.first().getKey());
    return new a({
        blockMap: r,
        entityMap: e,
        selectionBefore: n,
        selectionAfter: n
    });
};
