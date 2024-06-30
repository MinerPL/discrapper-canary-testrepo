var n = r(213912), i = r(546870), o = r(425042), a = r(680643), u = r(490540), s = r(316103), c = r(65183), l = r(856520), f = c.List, p = c.Repeat, h = s('draft_tree_data_support'), d = h ? i : n;
t.exports = {
    processHTML: function (t, e) {
        return o(t, u, e);
    },
    processText: function (t, e, r) {
        return t.reduce(function (t, n, i) {
            n = l(n);
            var o = a(), u = {
                    key: o,
                    type: r,
                    text: n,
                    characterList: f(p(e, n.length))
                };
            if (h && 0 !== i) {
                var s = i - 1;
                u = function (t) {
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
                }({}, u, { prevSibling: (t[s] = t[s].merge({ nextSibling: o })).getKey() });
            }
            return t.push(new d(u)), t;
        }, []);
    }
};
