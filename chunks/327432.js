n.d(t, {
    E9: function () {
        return ed;
    },
    Jh: function () {
        return m;
    },
    ML: function () {
        return $;
    },
    NB: function () {
        return er;
    },
    W_: function () {
        return W;
    },
    YR: function () {
        return eB;
    },
    e6: function () {
        return eh;
    },
    o4: function () {
        return eI;
    },
    xv: function () {
        return ev;
    },
    y$: function () {
        return es;
    }
});
var r, i, a = n(855242), o = n(688451);
function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
var l = new WeakMap(), u = new WeakMap(), c = new WeakMap(), d = new WeakMap(), _ = new WeakMap(), E = new WeakMap(), f = new WeakMap();
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? h(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var m = () => {
    var e = {
        children: [],
        operations: [],
        selection: null,
        marks: null,
        isInline: () => !1,
        isVoid: () => !1,
        markableVoid: () => !1,
        onChange: () => {
        },
        apply: t => {
            for (var n of $.pathRefs(e))
                el.transform(n, t);
            for (var r of $.pointRefs(e))
                e_.transform(r, t);
            for (var i of $.rangeRefs(e))
                ep.transform(i, t);
            var a, o, s = l.get(e) || [], d = u.get(e) || new Set(), _ = e => {
                    if (e) {
                        var t = e.join(',');
                        !o.has(t) && (o.add(t), a.push(e));
                    }
                };
            if (es.operationCanTransformPath(t))
                for (var E of (a = [], o = new Set(), s))
                    _(es.transform(E, t));
            else
                a = s, o = d;
            for (var f of e.getDirtyPaths(t))
                _(f);
            l.set(e, a), u.set(e, o), eB.transform(e, t), e.operations.push(t), $.normalize(e, { operation: t }), 'set_selection' === t.type && (e.marks = null), !c.get(e) && (c.set(e, !0), Promise.resolve().then(() => {
                c.set(e, !1), e.onChange({ operation: t }), e.operations = [];
            }));
        },
        addMark: (t, n) => {
            var {
                selection: r,
                markableVoid: i
            } = e;
            if (r) {
                var a = (t, n) => {
                        if (!ev.isText(t))
                            return !1;
                        var [r, i] = $.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    }, o = eh.isExpanded(r), s = !1;
                if (!o) {
                    var [l, u] = $.node(e, r);
                    if (l && a(l, u)) {
                        var [d] = $.parent(e, u);
                        s = d && e.markableVoid(d);
                    }
                }
                if (o || s)
                    eB.setNodes(e, { [t]: n }, {
                        match: a,
                        split: !0,
                        voids: !0
                    });
                else {
                    var _ = p(p({}, $.marks(e) || {}), {}, { [t]: n });
                    e.marks = _, !c.get(e) && e.onChange();
                }
            }
        },
        deleteBackward: t => {
            var {selection: n} = e;
            n && eh.isCollapsed(n) && eB.delete(e, {
                unit: t,
                reverse: !0
            });
        },
        deleteForward: t => {
            var {selection: n} = e;
            n && eh.isCollapsed(n) && eB.delete(e, { unit: t });
        },
        deleteFragment: t => {
            var {selection: n} = e;
            n && eh.isExpanded(n) && eB.delete(e, { reverse: 'backward' === t });
        },
        getFragment: () => {
            var {selection: t} = e;
            return t ? er.fragment(e, t) : [];
        },
        insertBreak: () => {
            eB.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            eB.splitNodes(e, { always: !0 });
        },
        insertFragment: t => {
            eB.insertFragment(e, t);
        },
        insertNode: t => {
            eB.insertNodes(e, t);
        },
        insertText: t => {
            var {
                selection: n,
                marks: r
            } = e;
            if (n) {
                if (r) {
                    var i = p({ text: t }, r);
                    eB.insertNodes(e, i);
                } else
                    eB.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: t => {
            var [n, r] = t;
            if (!ev.isText(n)) {
                if (W.isElement(n) && 0 === n.children.length) {
                    eB.insertNodes(e, { text: '' }, {
                        at: r.concat(0),
                        voids: !0
                    });
                    return;
                }
                for (var i = !$.isEditor(n) && W.isElement(n) && (e.isInline(n) || 0 === n.children.length || ev.isText(n.children[0]) || e.isInline(n.children[0])), a = 0, o = 0; o < n.children.length; o++, a++) {
                    var s = er.get(e, r);
                    if (!ev.isText(s)) {
                        var l = n.children[o], u = s.children[a - 1], c = o === n.children.length - 1;
                        if ((ev.isText(l) || W.isElement(l) && e.isInline(l)) !== i)
                            eB.removeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--;
                        else if (W.isElement(l)) {
                            if (e.isInline(l)) {
                                if (null != u && ev.isText(u)) {
                                    if (c) {
                                        var d = { text: '' };
                                        eB.insertNodes(e, d, {
                                            at: r.concat(a + 1),
                                            voids: !0
                                        }), a++;
                                    }
                                } else {
                                    var _ = { text: '' };
                                    eB.insertNodes(e, _, {
                                        at: r.concat(a),
                                        voids: !0
                                    }), a++;
                                }
                            }
                        } else
                            null != u && ev.isText(u) && (ev.equals(l, u, { loose: !0 }) ? (eB.mergeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--) : '' === u.text ? (eB.removeNodes(e, {
                                at: r.concat(a - 1),
                                voids: !0
                            }), a--) : '' === l.text && (eB.removeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--));
                    }
                }
            }
        },
        removeMark: t => {
            var {selection: n} = e;
            if (n) {
                var r = (t, n) => {
                        if (!ev.isText(t))
                            return !1;
                        var [r, i] = $.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    }, i = eh.isExpanded(n), a = !1;
                if (!i) {
                    var [o, s] = $.node(e, n);
                    if (o && r(o, s)) {
                        var [l] = $.parent(e, s);
                        a = l && e.markableVoid(l);
                    }
                }
                if (i || a)
                    eB.unsetNodes(e, t, {
                        match: r,
                        split: !0,
                        voids: !0
                    });
                else {
                    var u = p({}, $.marks(e) || {});
                    delete u[t], e.marks = u, !c.get(e) && e.onChange();
                }
            }
        },
        getDirtyPaths: e => {
            switch (e.type) {
            case 'insert_text':
            case 'remove_text':
            case 'set_node':
                var {path: t} = e;
                return es.levels(t);
            case 'insert_node':
                var {
                    node: n,
                    path: r
                } = e;
                return [
                    ...es.levels(r),
                    ...ev.isText(n) ? [] : Array.from(er.nodes(n), e => {
                        var [, t] = e;
                        return r.concat(t);
                    })
                ];
            case 'merge_node':
                var {path: i} = e;
                return [
                    ...es.ancestors(i),
                    es.previous(i)
                ];
            case 'move_node':
                var {
                    path: a,
                    newPath: o
                } = e;
                if (es.equals(a, o))
                    return [];
                var s = [], l = [];
                for (var u of es.ancestors(a)) {
                    var c = es.transform(u, e);
                    s.push(c);
                }
                for (var d of es.ancestors(o)) {
                    var _ = es.transform(d, e);
                    l.push(_);
                }
                var E = l[l.length - 1], f = o[o.length - 1];
                return [
                    ...s,
                    ...l,
                    E.concat(f)
                ];
            case 'remove_node':
                var {path: h} = e;
                return [...es.ancestors(h)];
            case 'split_node':
                var {path: p} = e;
                return [
                    ...es.levels(p),
                    es.next(p)
                ];
            default:
                return [];
            }
        },
        shouldNormalize: e => {
            var {
                    iteration: t,
                    initialDirtyPathsLength: n
                } = e, r = 42 * n;
            if (t > r)
                throw Error('Could not completely normalize the editor after '.concat(r, ' iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.'));
            return !0;
        }
    };
    return e;
};
function I(e, t) {
    if (null == e)
        return {};
    var n, r, i = function (e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
            return i;
        }(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) {
            if (n = a[r], !(t.indexOf(n) >= 0))
                Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
    }
    return i;
}
var T = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !t, r = t ? R(e) : e, a = i.None, o = i.None, s = 0, l = null, u = null;
        for (var c of r) {
            var d = c.codePointAt(0);
            if (!d)
                break;
            var _ = k(c, d);
            if ([a, o] = n ? [
                    o,
                    _
                ] : [
                    _,
                    a
                ], function (e, t) {
                    return (e & t) != 0;
                }(a, i.ZWJ) && function (e, t) {
                    return (e & t) != 0;
                }(o, i.ExtPict) && !(l = n ? H(e.substring(0, s)) : H(e.substring(0, e.length - s))) || function (e, t) {
                    return (e & t) != 0;
                }(a, i.RI) && function (e, t) {
                    return (e & t) != 0;
                }(o, i.RI) && !(u = null !== u ? !u : !!n || Y(e.substring(0, e.length - s))) || a !== i.None && o !== i.None && function (e, t) {
                    return -1 === F.findIndex(n => (e & n[0]) != 0 && (t & n[1]) != 0);
                }(a, o))
                break;
            s += c.length;
        }
        return s || 1;
    }, g = /\s/, S = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, A = /['\u2018\u2019]/, N = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0;) {
            var i = T(e, t), [a, o] = v(e, i, t);
            if (O(a, o, t))
                r = !0, n += i;
            else if (r)
                break;
            else
                n += i;
            e = o;
        }
        return n;
    }, v = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [
                e.slice(r, e.length),
                e.slice(0, r)
            ];
        }
        return [
            e.slice(0, t),
            e.slice(t)
        ];
    }, O = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (g.test(t))
            return !1;
        if (A.test(t)) {
            var i = T(n, r), [a, o] = v(n, i, r);
            if (e(a, o, r))
                return !0;
        }
        return !S.test(t) && !0;
    }, R = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (y(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (C(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    }, C = e => e >= 55296 && e <= 56319, y = e => e >= 56320 && e <= 57343;
(r = i || (i = {}))[r.None = 0] = 'None', r[r.Extend = 1] = 'Extend', r[r.ZWJ = 2] = 'ZWJ', r[r.RI = 4] = 'RI', r[r.Prepend = 8] = 'Prepend', r[r.SpacingMark = 16] = 'SpacingMark', r[r.L = 32] = 'L', r[r.V = 64] = 'V', r[r.T = 128] = 'T', r[r.LV = 256] = 'LV', r[r.LVT = 512] = 'LVT', r[r.ExtPict = 1024] = 'ExtPict', r[r.Any = 2048] = 'Any';
var D = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, L = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, b = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, M = /^[\u1100-\u115F\uA960-\uA97C]$/, P = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, U = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, w = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, x = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, G = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, k = (e, t) => {
        var n = i.Any;
        return -1 !== e.search(D) && (n |= i.Extend), 8205 === t && (n |= i.ZWJ), t >= 127462 && t <= 127487 && (n |= i.RI), -1 !== e.search(L) && (n |= i.Prepend), -1 !== e.search(b) && (n |= i.SpacingMark), -1 !== e.search(M) && (n |= i.L), -1 !== e.search(P) && (n |= i.V), -1 !== e.search(U) && (n |= i.T), -1 !== e.search(w) && (n |= i.LV), -1 !== e.search(x) && (n |= i.LVT), -1 !== e.search(G) && (n |= i.ExtPict), n;
    };
function B(e, t) {
    return (e & t) != 0;
}
var F = [
        [
            i.L,
            i.L | i.V | i.LV | i.LVT
        ],
        [
            i.LV | i.V,
            i.V | i.T
        ],
        [
            i.LVT | i.T,
            i.T
        ],
        [
            i.Any,
            i.Extend | i.ZWJ
        ],
        [
            i.Any,
            i.SpacingMark
        ],
        [
            i.Prepend,
            i.Any
        ],
        [
            i.ZWJ,
            i.ExtPict
        ],
        [
            i.RI,
            i.RI
        ]
    ], V = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, H = e => -1 !== e.search(V), Z = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Y = e => {
        var t = e.match(Z);
        return null !== t && t[0].length / 2 % 2 == 1;
    }, j = e => (0, a.P)(e) && er.isNodeList(e.children) && !$.isEditor(e), W = {
        isAncestor: e => (0, a.P)(e) && er.isNodeList(e.children),
        isElement: j,
        isElementList: e => Array.isArray(e) && e.every(e => W.isElement(e)),
        isElementProps: e => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'type';
            return j(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) {
                if ('children' !== n) {
                    if (e[n] !== t[n])
                        return !1;
                }
            }
            return !0;
        }
    }, K = ['text'], z = ['text'];
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? q(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var X = new WeakMap(), $ = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    voids: n = !1,
                    mode: r = 'lowest',
                    at: i = e.selection,
                    match: a
                } = t;
            if (!!i) {
                var o = $.path(e, i);
                for (var [s, l] of $.levels(e, {
                        at: o,
                        voids: n,
                        match: a,
                        reverse: 'lowest' === r
                    }))
                    if (!ev.isText(s)) {
                        if (eh.isRange(i)) {
                            if (es.isAncestor(l, i.anchor.path) && es.isAncestor(l, i.focus.path))
                                return [
                                    s,
                                    l
                                ];
                        } else if (!es.equals(o, l))
                            return [
                                s,
                                l
                            ];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = $.point(e, t, { edge: 'end' }), a = $.end(e, []), {
                    distance: o = 1
                } = r, s = 0;
            for (var l of $.positions(e, Q(Q({}, r), {}, {
                    at: {
                        anchor: i,
                        focus: a
                    }
                }))) {
                if (s > o)
                    break;
                0 !== s && (n = l), s++;
            }
            return n;
        },
        before(e, t) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = $.start(e, []), a = $.point(e, t, { edge: 'start' }), {
                    distance: o = 1
                } = r, s = 0;
            for (var l of $.positions(e, Q(Q({}, r), {}, {
                    at: {
                        anchor: i,
                        focus: a
                    },
                    reverse: !0
                }))) {
                if (s > o)
                    break;
                0 !== s && (n = l), s++;
            }
            return n;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    unit: n = 'character'
                } = t;
            e.deleteBackward(n);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    unit: n = 'character'
                } = t;
            e.deleteForward(n);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    direction: n = 'forward'
                } = t;
            e.deleteFragment(n);
        },
        edges: (e, t) => [
            $.start(e, t),
            $.end(e, t)
        ],
        end: (e, t) => $.point(e, t, { edge: 'end' }),
        first(e, t) {
            var n = $.path(e, t, { edge: 'start' });
            return $.node(e, n);
        },
        fragment(e, t) {
            var n = $.range(e, t);
            return er.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some(t => W.isElement(t) && $.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some(t => ev.isText(t) || $.isInline(e, t)),
        hasTexts: (e, t) => t.children.every(e => ev.isText(e)),
        insertBreak(e) {
            e.insertBreak();
        },
        insertSoftBreak(e) {
            e.insertSoftBreak();
        },
        insertFragment(e, t) {
            e.insertFragment(t);
        },
        insertNode(e, t) {
            e.insertNode(t);
        },
        insertText(e, t) {
            e.insertText(t);
        },
        isBlock: (e, t) => !e.isInline(t),
        isEditor(e) {
            var t = X.get(e);
            if (void 0 !== t)
                return t;
            if (!(0, a.P)(e))
                return !1;
            var n = 'function' == typeof e.addMark && 'function' == typeof e.apply && 'function' == typeof e.deleteBackward && 'function' == typeof e.deleteForward && 'function' == typeof e.deleteFragment && 'function' == typeof e.insertBreak && 'function' == typeof e.insertSoftBreak && 'function' == typeof e.insertFragment && 'function' == typeof e.insertNode && 'function' == typeof e.insertText && 'function' == typeof e.isInline && 'function' == typeof e.isVoid && 'function' == typeof e.normalizeNode && 'function' == typeof e.onChange && 'function' == typeof e.removeMark && 'function' == typeof e.getDirtyPaths && (null === e.marks || (0, a.P)(e.marks)) && (null === e.selection || eh.isRange(e.selection)) && er.isNodeList(e.children) && eo.isOperationList(e.operations);
            return X.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = $.end(e, n);
            return ed.equals(t, r);
        },
        isEdge: (e, t, n) => $.isStart(e, t, n) || $.isEnd(e, t, n),
        isEmpty(e, t) {
            var {children: n} = t, [r] = n;
            return 0 === n.length || 1 === n.length && ev.isText(r) && '' === r.text && !e.isVoid(t);
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset)
                return !1;
            var r = $.start(e, n);
            return ed.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = $.path(e, t, { edge: 'end' });
            return $.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = $.path(e, t, n);
            return [
                er.leaf(e, r),
                r
            ];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    at: n = e.selection,
                    reverse: r = !1,
                    voids: i = !1
                } = t, {match: a} = t;
            if (null == a && (a = () => !0), !!n) {
                var o = [], s = $.path(e, n);
                for (var [l, u] of er.levels(e, s)) {
                    if (!!a(l, u)) {
                        if (o.push([
                                l,
                                u
                            ]), !i && W.isElement(l) && $.isVoid(e, l))
                            break;
                    }
                }
                r && o.reverse(), yield* o;
            }
        },
        marks(e) {
            var {
                marks: t,
                selection: n
            } = e;
            if (!n)
                return null;
            if (t)
                return t;
            if (eh.isExpanded(n)) {
                var [r] = $.nodes(e, { match: ev.isText });
                if (!r)
                    return {};
                var [i] = r;
                return I(i, K);
            }
            var {anchor: a} = n, {path: o} = a, [s] = $.leaf(e, o);
            if (0 === a.offset) {
                var l = $.previous(e, {
                    at: o,
                    match: ev.isText
                });
                if (!$.above(e, { match: t => W.isElement(t) && $.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = $.above(e, { match: t => W.isElement(t) && $.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l, [, _] = u;
                        es.isAncestor(_, d) && (s = c);
                    }
                }
            }
            return I(s, z);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    mode: n = 'lowest',
                    voids: r = !1
                } = t, {
                    match: i,
                    at: a = e.selection
                } = t;
            if (!!a) {
                var o = $.after(e, a, { voids: r });
                if (o) {
                    var [, s] = $.last(e, []), l = [
                            o.path,
                            s
                        ];
                    if (es.isPath(a) && 0 === a.length)
                        throw Error('Cannot get the next node from the root node!');
                    if (null == i) {
                        if (es.isPath(a)) {
                            var [u] = $.parent(e, a);
                            i = e => u.children.includes(e);
                        } else
                            i = () => !0;
                    }
                    var [c] = $.nodes(e, {
                        at: l,
                        match: i,
                        mode: n,
                        voids: r
                    });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = $.path(e, t, n);
            return [
                er.get(e, r),
                r
            ];
        },
        *nodes(e) {
            var t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    at: a = e.selection,
                    mode: o = 'all',
                    universal: s = !1,
                    reverse: l = !1,
                    voids: u = !1
                } = i, {match: c} = i;
            if (!c && (c = () => !0), !!a) {
                if (J.isSpan(a))
                    t = a[0], n = a[1];
                else {
                    var d = $.path(e, a, { edge: 'start' }), _ = $.path(e, a, { edge: 'end' });
                    t = l ? _ : d, n = l ? d : _;
                }
                var E = er.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: t => {
                            var [n] = t;
                            return !u && W.isElement(n) && $.isVoid(e, n);
                        }
                    }), f = [];
                for (var [h, p] of E) {
                    var m = r && 0 === es.compare(p, r[1]);
                    if ('highest' !== o || !m) {
                        if (!c(h, p)) {
                            if (s && !m && ev.isText(h))
                                return;
                            continue;
                        }
                        if ('lowest' === o && m) {
                            r = [
                                h,
                                p
                            ];
                            continue;
                        }
                        var I = 'lowest' === o ? r : [
                            h,
                            p
                        ];
                        I && (s ? f.push(I) : yield I), r = [
                            h,
                            p
                        ];
                    }
                }
                'lowest' === o && r && (s ? f.push(r) : yield r), s && (yield* f);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    force: n = !1,
                    operation: r
                } = t, i = e => l.get(e) || [], a = e => u.get(e) || new Set(), o = e => {
                    var t = i(e).pop(), n = t.join(',');
                    return a(e).delete(n), t;
                };
            if (!$.isNormalizing(e))
                return;
            if (n) {
                var s = Array.from(er.nodes(e), e => {
                        var [, t] = e;
                        return t;
                    }), c = new Set(s.map(e => e.join(',')));
                l.set(e, s), u.set(e, c);
            }
            if (0 !== i(e).length)
                $.withoutNormalizing(e, () => {
                    for (var t of i(e))
                        if (er.has(e, t)) {
                            var n = $.node(e, t), [a, s] = n;
                            W.isElement(a) && 0 === a.children.length && e.normalizeNode(n, { operation: r });
                        }
                    for (var l = i(e), u = l.length, c = 0; 0 !== l.length;) {
                        if (!e.shouldNormalize({
                                dirtyPaths: l,
                                iteration: c,
                                initialDirtyPathsLength: u,
                                operation: r
                            }))
                            return;
                        var d = o(e);
                        if (er.has(e, d)) {
                            var _ = $.node(e, d);
                            e.normalizeNode(_, { operation: r });
                        }
                        c++, l = i(e);
                    }
                });
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = $.path(e, t, n), i = es.parent(r);
            return $.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    depth: r,
                    edge: i
                } = n;
            if (es.isPath(t)) {
                if ('start' === i) {
                    var [, a] = er.first(e, t);
                    t = a;
                } else if ('end' === i) {
                    var [, o] = er.last(e, t);
                    t = o;
                }
            }
            return eh.isRange(t) && (t = 'start' === i ? eh.start(t) : 'end' === i ? eh.end(t) : es.common(t.anchor.path, t.focus.path)), ed.isPoint(t) && (t = t.path), null != r && (t = t.slice(0, r)), t;
        },
        hasPath: (e, t) => er.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    affinity: r = 'forward'
                } = n, i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var {current: t} = i;
                        return $.pathRefs(e).delete(i), i.current = null, t;
                    }
                };
            return $.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
            var t = _.get(e);
            return !t && (t = new Set(), _.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    edge: r = 'start'
                } = n;
            if (es.isPath(t)) {
                if ('end' === r) {
                    var i, [, a] = er.last(e, t);
                    i = a;
                } else {
                    var [, o] = er.first(e, t);
                    i = o;
                }
                var s = er.get(e, i);
                if (!ev.isText(s))
                    throw Error('Cannot get the '.concat(r, ' point in the node at path [').concat(t, '] because it has no ').concat(r, ' text node.'));
                return {
                    path: i,
                    offset: 'end' === r ? s.text.length : 0
                };
            }
            if (eh.isRange(t)) {
                var [l, u] = eh.edges(t);
                return 'start' === r ? l : u;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    affinity: r = 'forward'
                } = n, i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var {current: t} = i;
                        return $.pointRefs(e).delete(i), i.current = null, t;
                    }
                };
            return $.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
            var t = E.get(e);
            return !t && (t = new Set(), E.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    at: n = e.selection,
                    unit: r = 'offset',
                    reverse: i = !1,
                    voids: a = !1
                } = t;
            if (!!n) {
                var o = $.range(e, n), [s, l] = eh.edges(o), u = i ? l : s, c = !1, d = '', _ = 0, E = 0, f = 0;
                for (var [h, p] of $.nodes(e, {
                        at: n,
                        reverse: i,
                        voids: a
                    })) {
                    if (W.isElement(h)) {
                        if (!a && e.isVoid(h)) {
                            yield $.start(e, p);
                            continue;
                        }
                        if (e.isInline(h))
                            continue;
                        if ($.hasInlines(e, h)) {
                            var m = es.isAncestor(p, l.path) ? l : $.end(e, p), I = es.isAncestor(p, s.path) ? s : $.start(e, p);
                            d = $.string(e, {
                                anchor: I,
                                focus: m
                            }, { voids: a }), c = !0;
                        }
                    }
                    if (ev.isText(h)) {
                        var g = es.equals(p, u.path);
                        for (g ? (E = i ? u.offset : h.text.length - u.offset, f = u.offset) : (E = h.text.length, f = i ? E : 0), (g || c || 'offset' === r) && (yield {
                                path: p,
                                offset: f
                            }, c = !1);;) {
                            if (0 === _) {
                                if ('' === d)
                                    break;
                                _ = function (e, t, n) {
                                    if ('character' === t)
                                        return T(e, n);
                                    if ('word' === t)
                                        return N(e, n);
                                    if ('line' === t || 'block' === t)
                                        return e.length;
                                    return 1;
                                }(d, r, i), d = v(d, _, i)[1];
                            }
                            if (f = i ? f - _ : f + _, (E -= _) < 0) {
                                _ = -E;
                                break;
                            }
                            _ = 0, yield {
                                path: p,
                                offset: f
                            };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    mode: n = 'lowest',
                    voids: r = !1
                } = t, {
                    match: i,
                    at: a = e.selection
                } = t;
            if (!a)
                return;
            var o = $.before(e, a, { voids: r });
            if (!!o) {
                var [, s] = $.first(e, []), l = [
                        o.path,
                        s
                    ];
                if (es.isPath(a) && 0 === a.length)
                    throw Error('Cannot get the previous node from the root node!');
                if (null == i) {
                    if (es.isPath(a)) {
                        var [u] = $.parent(e, a);
                        i = e => u.children.includes(e);
                    } else
                        i = () => !0;
                }
                var [c] = $.nodes(e, {
                    reverse: !0,
                    at: l,
                    match: i,
                    mode: n,
                    voids: r
                });
                return c;
            }
        },
        range: (e, t, n) => eh.isRange(t) && !n ? t : {
            anchor: $.start(e, t),
            focus: $.end(e, n || t)
        },
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    affinity: r = 'forward'
                } = n, i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var {current: t} = i;
                        return $.rangeRefs(e).delete(i), i.current = null, t;
                    }
                };
            return $.rangeRefs(e).add(i), i;
        },
        rangeRefs(e) {
            var t = f.get(e);
            return !t && (t = new Set(), f.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            d.set(e, t);
        },
        start: (e, t) => $.point(e, t, { edge: 'start' }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    voids: r = !1
                } = n, i = $.range(e, t), [a, o] = eh.edges(i), s = '';
            for (var [l, u] of $.nodes(e, {
                    at: i,
                    match: ev.isText,
                    voids: r
                })) {
                var c = l.text;
                es.equals(u, o.path) && (c = c.slice(0, o.offset)), es.equals(u, a.path) && (c = c.slice(a.offset)), s += c;
            }
            return s;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    voids: r = !1
                } = n, [i, a] = eh.edges(t);
            if (0 !== i.offset || 0 !== a.offset || eh.isCollapsed(t) || es.hasPrevious(a.path))
                return t;
            var o = $.above(e, {
                    at: a,
                    match: t => W.isElement(t) && $.isBlock(e, t),
                    voids: r
                }), s = o ? o[1] : [], l = {
                    anchor: $.start(e, i),
                    focus: a
                }, u = !0;
            for (var [c, d] of $.nodes(e, {
                    at: l,
                    match: ev.isText,
                    reverse: !0,
                    voids: r
                })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ('' !== c.text || es.isBefore(d, s)) {
                    a = {
                        path: d,
                        offset: c.text.length
                    };
                    break;
                }
            }
            return {
                anchor: i,
                focus: a
            };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return $.above(e, Q(Q({}, t), {}, { match: t => W.isElement(t) && $.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = $.isNormalizing(e);
            $.setNormalizing(e, !1);
            try {
                t();
            } finally {
                $.setNormalizing(e, n);
            }
            $.normalize(e);
        }
    }, J = { isSpan: e => Array.isArray(e) && 2 === e.length && e.every(es.isPath) }, ee = ['children'], et = ['text'], en = new WeakMap(), er = {
        ancestor(e, t) {
            var n = er.get(e, t);
            if (ev.isText(n))
                throw Error('Cannot get the ancestor node at path ['.concat(t, '] because it refers to a text node instead: ').concat(eI.stringify(n)));
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of es.ancestors(t, n)) {
                var i = [
                    er.ancestor(e, r),
                    r
                ];
                yield i;
            }
        },
        child(e, t) {
            if (ev.isText(e))
                throw Error('Cannot get the child of a text node: '.concat(eI.stringify(e)));
            var n = e.children[t];
            if (null == n)
                throw Error('Cannot get child at index `'.concat(t, '` in node: ').concat(eI.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                        reverse: r = !1
                    } = n, i = er.ancestor(e, t), {children: a} = i, o = r ? a.length - 1 : 0; r ? o >= 0 : o < a.length;) {
                var s = er.child(i, o), l = t.concat(o);
                yield [
                    s,
                    l
                ], o = r ? o - 1 : o + 1;
            }
        },
        common(e, t, n) {
            var r = es.common(t, n);
            return [
                er.get(e, r),
                r
            ];
        },
        descendant(e, t) {
            var n = er.get(e, t);
            if ($.isEditor(n))
                throw Error('Cannot get the descendant node at path ['.concat(t, '] because it refers to the root editor node instead: ').concat(eI.stringify(n)));
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of er.nodes(e, t))
                0 !== r.length && (yield [
                    n,
                    r
                ]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of er.nodes(e, t))
                W.isElement(n) && (yield [
                    n,
                    r
                ]);
        },
        extractProps(e) {
            if (W.isAncestor(e)) {
                var t = I(e, ee);
                return t;
            }
            var t = I(e, et);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = er.get(e, n); r && !ev.isText(r) && 0 !== r.children.length;) {
                ;
                r = r.children[0], n.push(0);
            }
            return [
                r,
                n
            ];
        },
        fragment(e, t) {
            if (ev.isText(e))
                throw Error('Cannot get a fragment starting from a root text node: '.concat(eI.stringify(e)));
            return (0, o.Uy)({ children: e.children }, e => {
                var [n, r] = eh.edges(t);
                for (var [, i] of er.nodes(e, {
                        reverse: !0,
                        pass: e => {
                            var [, n] = e;
                            return !eh.includes(t, n);
                        }
                    })) {
                    if (!eh.includes(t, i)) {
                        var a = er.parent(e, i), o = i[i.length - 1];
                        a.children.splice(o, 1);
                    }
                    if (es.equals(i, r.path)) {
                        var s = er.leaf(e, i);
                        s.text = s.text.slice(0, r.offset);
                    }
                    if (es.equals(i, n.path)) {
                        var l = er.leaf(e, i);
                        l.text = l.text.slice(n.offset);
                    }
                }
                $.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ev.isText(n) || !n.children[i])
                    throw Error('Cannot find a descendant at path ['.concat(t, '] in node: ').concat(eI.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ev.isText(n) || !n.children[i])
                    return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: e => ev.isText(e) || W.isElement(e) || $.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e))
                return !1;
            var t = en.get(e);
            if (void 0 !== t)
                return t;
            var n = e.every(e => er.isNode(e));
            return en.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = er.get(e, n); r && !ev.isText(r) && 0 !== r.children.length;) {
                ;
                var i = r.children.length - 1;
                r = r.children[i], n.push(i);
            }
            return [
                r,
                n
            ];
        },
        leaf(e, t) {
            var n = er.get(e, t);
            if (!ev.isText(n))
                throw Error('Cannot get the leaf node at path ['.concat(t, '] because it refers to a non-leaf node: ').concat(eI.stringify(n)));
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of es.levels(t, n)) {
                var i = er.get(e, r);
                yield [
                    i,
                    r
                ];
            }
        },
        matches: (e, t) => W.isElement(e) && W.isElementProps(t) && W.matches(e, t) || ev.isText(e) && ev.isTextProps(t) && ev.matches(e, t),
        *nodes(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        pass: n,
                        reverse: r = !1
                    } = t, {
                        from: i = [],
                        to: a
                    } = t, o = new Set(), s = [], l = e; !(a && (r ? es.isBefore(s, a) : es.isAfter(s, a)));) {
                ;
                if (!o.has(l) && (yield [
                        l,
                        s
                    ]), !o.has(l) && !ev.isText(l) && 0 !== l.children.length && (null == n || !1 === n([
                        l,
                        s
                    ]))) {
                    o.add(l);
                    var u = r ? l.children.length - 1 : 0;
                    es.isAncestor(s, i) && (u = i[s.length]), s = s.concat(u), l = er.get(e, s);
                    continue;
                }
                if (0 === s.length)
                    break;
                if (!r) {
                    var c = es.next(s);
                    if (er.has(e, c)) {
                        s = c, l = er.get(e, s);
                        continue;
                    }
                }
                if (r && 0 !== s[s.length - 1]) {
                    s = es.previous(s), l = er.get(e, s);
                    continue;
                }
                s = es.parent(s), l = er.get(e, s), o.add(l);
            }
        },
        parent(e, t) {
            var n = es.parent(t), r = er.get(e, n);
            if (ev.isText(r))
                throw Error('Cannot get the parent of path ['.concat(t, '] because it does not exist in the root.'));
            return r;
        },
        string: e => ev.isText(e) ? e.text : e.children.map(er.string).join(''),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of er.nodes(e, t))
                ev.isText(n) && (yield [
                    n,
                    r
                ]);
        }
    };
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ei(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var eo = {
        isNodeOperation: e => eo.isOperation(e) && e.type.endsWith('_node'),
        isOperation(e) {
            if (!(0, a.P)(e))
                return !1;
            switch (e.type) {
            case 'insert_node':
            case 'remove_node':
                return es.isPath(e.path) && er.isNode(e.node);
            case 'insert_text':
            case 'remove_text':
                return 'number' == typeof e.offset && 'string' == typeof e.text && es.isPath(e.path);
            case 'merge_node':
                return 'number' == typeof e.position && es.isPath(e.path) && (0, a.P)(e.properties);
            case 'move_node':
                return es.isPath(e.path) && es.isPath(e.newPath);
            case 'set_node':
                return es.isPath(e.path) && (0, a.P)(e.properties) && (0, a.P)(e.newProperties);
            case 'set_selection':
                return null === e.properties && eh.isRange(e.newProperties) || null === e.newProperties && eh.isRange(e.properties) || (0, a.P)(e.properties) && (0, a.P)(e.newProperties);
            case 'split_node':
                return es.isPath(e.path) && 'number' == typeof e.position && (0, a.P)(e.properties);
            default:
                return !1;
            }
        },
        isOperationList: e => Array.isArray(e) && e.every(e => eo.isOperation(e)),
        isSelectionOperation: e => eo.isOperation(e) && e.type.endsWith('_selection'),
        isTextOperation: e => eo.isOperation(e) && e.type.endsWith('_text'),
        inverse(e) {
            switch (e.type) {
            case 'insert_node':
                return ea(ea({}, e), {}, { type: 'remove_node' });
            case 'insert_text':
                return ea(ea({}, e), {}, { type: 'remove_text' });
            case 'merge_node':
                return ea(ea({}, e), {}, {
                    type: 'split_node',
                    path: es.previous(e.path)
                });
            case 'move_node':
                var {
                    newPath: t,
                    path: n
                } = e;
                if (es.equals(t, n))
                    return e;
                if (es.isSibling(n, t))
                    return ea(ea({}, e), {}, {
                        path: t,
                        newPath: n
                    });
                var r = es.transform(n, e), i = es.transform(es.next(n), e);
                return ea(ea({}, e), {}, {
                    path: r,
                    newPath: i
                });
            case 'remove_node':
                return ea(ea({}, e), {}, { type: 'insert_node' });
            case 'remove_text':
                return ea(ea({}, e), {}, { type: 'insert_text' });
            case 'set_node':
                var {
                    properties: a,
                    newProperties: o
                } = e;
                return ea(ea({}, e), {}, {
                    properties: o,
                    newProperties: a
                });
            case 'set_selection':
                var {
                    properties: s,
                    newProperties: l
                } = e;
                if (null == s)
                    return ea(ea({}, e), {}, {
                        properties: l,
                        newProperties: null
                    });
                if (null == l)
                    return ea(ea({}, e), {}, {
                        properties: null,
                        newProperties: s
                    });
                else
                    return ea(ea({}, e), {}, {
                        properties: l,
                        newProperties: s
                    });
            case 'split_node':
                return ea(ea({}, e), {}, {
                    type: 'merge_node',
                    path: es.next(e.path)
                });
            }
        }
    }, es = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    reverse: n = !1
                } = t, r = es.levels(e, t);
            return r = n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                var i = e[r];
                if (i !== t[r])
                    break;
                n.push(i);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                if (e[r] < t[r])
                    return -1;
                if (e[r] > t[r])
                    return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1, r = e.slice(0, n), i = t.slice(0, n), a = e[n], o = t[n];
            return es.equals(r, i) && a > o;
        },
        endsAt(e, t) {
            var n = e.length, r = e.slice(0, n), i = t.slice(0, n);
            return es.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1, r = e.slice(0, n), i = t.slice(0, n), a = e[n], o = t[n];
            return es.equals(r, i) && a < o;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: e => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === es.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === es.compare(e, t),
        isBefore: (e, t) => -1 === es.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === es.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === es.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === es.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === es.compare(e, t),
        isPath: e => Array.isArray(e) && (0 === e.length || 'number' == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length)
                return !1;
            var n = e.slice(0, -1), r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && es.equals(n, r);
        },
        levels(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        reverse: n = !1
                    } = t, r = [], i = 0; i <= e.length; i++)
                r.push(e.slice(0, i));
            return n && r.reverse(), r;
        },
        next(e) {
            if (0 === e.length)
                throw Error('Cannot get the next path of a root path ['.concat(e, '], because it has no next index.'));
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
            switch (e.type) {
            case 'insert_node':
            case 'remove_node':
            case 'merge_node':
            case 'split_node':
            case 'move_node':
                return !0;
            default:
                return !1;
            }
        },
        parent(e) {
            if (0 === e.length)
                throw Error('Cannot get the parent path of the root path ['.concat(e, '].'));
            return e.slice(0, -1);
        },
        previous(e) {
            if (0 === e.length)
                throw Error('Cannot get the previous path of a root path ['.concat(e, '], because it has no previous index.'));
            var t = e[e.length - 1];
            if (t <= 0)
                throw Error('Cannot get the previous path of a first child path ['.concat(e, '] because it would result in a negative index.'));
            return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
            if (!es.isAncestor(t, e) && !es.equals(e, t))
                throw Error('Cannot get the relative path of ['.concat(e, '] inside ancestor [').concat(t, '], because it is not above or equal to the path.'));
            return e.slice(t.length);
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e)
                return null;
            var r = [...e], {
                    affinity: i = 'forward'
                } = n;
            if (0 === e.length)
                return r;
            switch (t.type) {
            case 'insert_node':
                var {path: a} = t;
                (es.equals(a, r) || es.endsBefore(a, r) || es.isAncestor(a, r)) && (r[a.length - 1] += 1);
                break;
            case 'remove_node':
                var {path: o} = t;
                if (es.equals(o, r) || es.isAncestor(o, r))
                    return null;
                es.endsBefore(o, r) && (r[o.length - 1] -= 1);
                break;
            case 'merge_node':
                var {
                    path: s,
                    position: l
                } = t;
                es.equals(s, r) || es.endsBefore(s, r) ? r[s.length - 1] -= 1 : es.isAncestor(s, r) && (r[s.length - 1] -= 1, r[s.length] += l);
                break;
            case 'split_node':
                var {
                    path: u,
                    position: c
                } = t;
                if (es.equals(u, r)) {
                    if ('forward' === i)
                        r[r.length - 1] += 1;
                    else if ('backward' !== i)
                        return null;
                } else
                    es.endsBefore(u, r) ? r[u.length - 1] += 1 : es.isAncestor(u, r) && e[u.length] >= c && (r[u.length - 1] += 1, r[u.length] -= c);
                break;
            case 'move_node':
                var {
                    path: d,
                    newPath: _
                } = t;
                if (es.equals(d, _))
                    break;
                if (es.isAncestor(d, r) || es.equals(d, r)) {
                    var E = _.slice();
                    return es.endsBefore(d, _) && d.length < _.length && (E[d.length - 1] -= 1), E.concat(r.slice(d.length));
                }
                es.isSibling(d, _) && (es.isAncestor(_, r) || es.equals(_, r)) ? es.endsBefore(d, r) ? r[d.length - 1] -= 1 : r[d.length - 1] += 1 : es.endsBefore(_, r) || es.equals(_, r) || es.isAncestor(_, r) ? (es.endsBefore(d, r) && (r[d.length - 1] -= 1), r[_.length - 1] += 1) : es.endsBefore(d, r) && (es.equals(_, r) && (r[_.length - 1] += 1), r[d.length - 1] -= 1);
            }
            return r;
        }
    }, el = {
        transform(e, t) {
            var {
                current: n,
                affinity: r
            } = e;
            if (null != n) {
                var i = es.transform(n, t, { affinity: r });
                e.current = i, null == i && e.unref();
            }
        }
    };
function eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eu(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var ed = {
        compare(e, t) {
            var n = es.compare(e.path, t.path);
            if (0 === n)
                return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
            return n;
        },
        isAfter: (e, t) => 1 === ed.compare(e, t),
        isBefore: (e, t) => -1 === ed.compare(e, t),
        equals: (e, t) => e.offset === t.offset && es.equals(e.path, t.path),
        isPoint: e => (0, a.P)(e) && 'number' == typeof e.offset && es.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.Uy)(e, e => {
                if (null === e)
                    return null;
                var {
                        affinity: r = 'forward'
                    } = n, {
                        path: i,
                        offset: a
                    } = e;
                switch (t.type) {
                case 'insert_node':
                case 'move_node':
                    e.path = es.transform(i, t, n);
                    break;
                case 'insert_text':
                    es.equals(t.path, i) && (t.offset < a || t.offset === a && 'forward' === r) && (e.offset += t.text.length);
                    break;
                case 'merge_node':
                    es.equals(t.path, i) && (e.offset += t.position), e.path = es.transform(i, t, n);
                    break;
                case 'remove_text':
                    es.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                    break;
                case 'remove_node':
                    if (es.equals(t.path, i) || es.isAncestor(t.path, i))
                        return null;
                    e.path = es.transform(i, t, n);
                    break;
                case 'split_node':
                    if (es.equals(t.path, i)) {
                        if (t.position === a && null == r)
                            return null;
                        (t.position < a || t.position === a && 'forward' === r) && (e.offset -= t.position, e.path = es.transform(i, t, ec(ec({}, n), {}, { affinity: 'forward' })));
                    } else
                        e.path = es.transform(i, t, n);
                }
            });
        }
    }, e_ = {
        transform(e, t) {
            var {
                current: n,
                affinity: r
            } = e;
            if (null != n) {
                var i = ed.transform(n, t, { affinity: r });
                e.current = i, null == i && e.unref();
            }
        }
    }, eE = [
        'anchor',
        'focus'
    ];
function ef(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
var eh = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    reverse: n = !1
                } = t, {
                    anchor: r,
                    focus: i
                } = e;
            return eh.isBackward(e) === n ? [
                r,
                i
            ] : [
                i,
                r
            ];
        },
        end(e) {
            var [, t] = eh.edges(e);
            return t;
        },
        equals: (e, t) => ed.equals(e.anchor, t.anchor) && ed.equals(e.focus, t.focus),
        includes(e, t) {
            if (eh.isRange(t)) {
                if (eh.includes(e, t.anchor) || eh.includes(e, t.focus))
                    return !0;
                var [n, r] = eh.edges(e), [i, a] = eh.edges(t);
                return ed.isBefore(n, i) && ed.isAfter(r, a);
            }
            var [o, s] = eh.edges(e), l = !1, u = !1;
            return ed.isPoint(t) ? (l = ed.compare(t, o) >= 0, u = 0 >= ed.compare(t, s)) : (l = es.compare(t, o.path) >= 0, u = 0 >= es.compare(t, s.path)), l && u;
        },
        intersection(e, t) {
            var n = I(e, eE), [r, i] = eh.edges(e), [a, o] = eh.edges(t), l = ed.isBefore(r, a) ? a : r, u = ed.isBefore(i, o) ? i : o;
            return ed.isBefore(u, l) ? null : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(n), !0).forEach(function (t) {
                        s(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                anchor: l,
                focus: u
            }, n);
        },
        isBackward(e) {
            var {
                anchor: t,
                focus: n
            } = e;
            return ed.isAfter(t, n);
        },
        isCollapsed(e) {
            var {
                anchor: t,
                focus: n
            } = e;
            return ed.equals(t, n);
        },
        isExpanded: e => !eh.isCollapsed(e),
        isForward: e => !eh.isBackward(e),
        isRange: e => (0, a.P)(e) && ed.isPoint(e.anchor) && ed.isPoint(e.focus),
        *points(e) {
            yield [
                e.anchor,
                'anchor'
            ], yield [
                e.focus,
                'focus'
            ];
        },
        start(e) {
            var [t] = eh.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, o.Uy)(e, e => {
                if (null === e)
                    return null;
                var r, i, {
                        affinity: a = 'inward'
                    } = n;
                if ('inward' === a) {
                    var o = eh.isCollapsed(e);
                    eh.isForward(e) ? (r = 'forward', i = o ? r : 'backward') : (r = 'backward', i = o ? r : 'forward');
                } else
                    'outward' === a ? eh.isForward(e) ? (r = 'backward', i = 'forward') : (r = 'forward', i = 'backward') : (r = a, i = a);
                var s = ed.transform(e.anchor, t, { affinity: r }), l = ed.transform(e.focus, t, { affinity: i });
                if (!s || !l)
                    return null;
                e.anchor = s, e.focus = l;
            });
        }
    }, ep = {
        transform(e, t) {
            var {
                current: n,
                affinity: r
            } = e;
            if (null != n) {
                var i = eh.transform(n, t, { affinity: r });
                e.current = i, null == i && e.unref();
            }
        }
    }, em = void 0, eI = {
        setScrubber(e) {
            em = e;
        },
        stringify: e => JSON.stringify(e, em)
    }, eT = (e, t) => {
        for (var n in e) {
            var r = e[n], i = t[n];
            if ((0, a.P)(r) && (0, a.P)(i)) {
                if (!eT(r, i))
                    return !1;
            } else if (Array.isArray(r) && Array.isArray(i)) {
                if (r.length !== i.length)
                    return !1;
                for (var o = 0; o < r.length; o++)
                    if (r[o] !== i[o])
                        return !1;
            } else if (r !== i)
                return !1;
        }
        for (var s in t)
            if (void 0 === e[s] && void 0 !== t[s])
                return !1;
        return !0;
    }, eg = ['text'], eS = [
        'anchor',
        'focus'
    ];
function eA(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eA(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var ev = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                loose: r = !1
            } = n;
        function i(e) {
            return I(e, eg);
        }
        return eT(r ? I(e, eg) : e, r ? I(t, eg) : t);
    },
    isText: e => (0, a.P)(e) && 'string' == typeof e.text,
    isTextList: e => Array.isArray(e) && e.every(e => ev.isText(e)),
    isTextProps: e => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) {
            if ('text' !== n) {
                if (!e.hasOwnProperty(n) || e[n] !== t[n])
                    return !1;
            }
        }
        return !0;
    },
    decorations(e, t) {
        var n = [eN({}, e)];
        for (var r of t) {
            var i = I(r, eS), [a, o] = eh.edges(r), s = [], l = 0, u = a.offset, c = o.offset;
            for (var d of n) {
                var {length: _} = d.text, E = l;
                if (l += _, u <= E && l <= c) {
                    Object.assign(d, i), s.push(d);
                    continue;
                }
                if (u !== c && (u === l || c === E) || u > l || c < E || c === E && 0 !== E) {
                    s.push(d);
                    continue;
                }
                var f = d, h = void 0, p = void 0;
                if (c < l) {
                    var m = c - E;
                    p = eN(eN({}, f), {}, { text: f.text.slice(m) }), f = eN(eN({}, f), {}, { text: f.text.slice(0, m) });
                }
                if (u > E) {
                    var T = u - E;
                    h = eN(eN({}, f), {}, { text: f.text.slice(0, T) }), f = eN(eN({}, f), {}, { text: f.text.slice(T) });
                }
                Object.assign(f, i), h && s.push(h), s.push(f), p && s.push(p);
            }
            n = s;
        }
        return n;
    }
};
function eO(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function eR(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eO(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var eC = (e, t, n) => {
        switch (n.type) {
        case 'insert_node':
            var {
                    path: r,
                    node: i
                } = n, a = er.parent(e, r), o = r[r.length - 1];
            if (o > a.children.length)
                throw Error('Cannot apply an "insert_node" operation at path ['.concat(r, '] because the destination is past the end of the node.'));
            if (a.children.splice(o, 0, i), t)
                for (var [s, l] of eh.points(t))
                    t[l] = ed.transform(s, n);
            break;
        case 'insert_text':
            var {
                path: u,
                offset: c,
                text: d
            } = n;
            if (0 === d.length)
                break;
            var _ = er.leaf(e, u), E = _.text.slice(0, c), f = _.text.slice(c);
            if (_.text = E + d + f, t)
                for (var [h, p] of eh.points(t))
                    t[p] = ed.transform(h, n);
            break;
        case 'merge_node':
            var {path: m} = n, I = er.get(e, m), T = es.previous(m), g = er.get(e, T), S = er.parent(e, m), A = m[m.length - 1];
            if (ev.isText(I) && ev.isText(g))
                g.text += I.text;
            else if (ev.isText(I) || ev.isText(g))
                throw Error('Cannot apply a "merge_node" operation at path ['.concat(m, '] to nodes of different interfaces: ').concat(eI.stringify(I), ' ').concat(eI.stringify(g)));
            else
                g.children.push(...I.children);
            if (S.children.splice(A, 1), t)
                for (var [N, v] of eh.points(t))
                    t[v] = ed.transform(N, n);
            break;
        case 'move_node':
            var {
                path: O,
                newPath: R
            } = n;
            if (es.isAncestor(O, R))
                throw Error('Cannot move a path ['.concat(O, '] to new path [').concat(R, '] because the destination is inside itself.'));
            var C = er.get(e, O), y = er.parent(e, O), D = O[O.length - 1];
            y.children.splice(D, 1);
            var L = es.transform(O, n), b = er.get(e, es.parent(L)), M = L[L.length - 1];
            if (b.children.splice(M, 0, C), t)
                for (var [P, U] of eh.points(t))
                    t[U] = ed.transform(P, n);
            break;
        case 'remove_node':
            var {path: w} = n, x = w[w.length - 1];
            if (er.parent(e, w).children.splice(x, 1), t)
                for (var [G, k] of eh.points(t)) {
                    var B = ed.transform(G, n);
                    if (null != t && null != B)
                        t[k] = B;
                    else {
                        var F = void 0, V = void 0;
                        for (var [H, Z] of er.texts(e))
                            if (-1 === es.compare(Z, w))
                                F = [
                                    H,
                                    Z
                                ];
                            else {
                                V = [
                                    H,
                                    Z
                                ];
                                break;
                            }
                        var Y = !1;
                        F && V && (Y = es.equals(V[1], w) ? !es.hasPrevious(V[1]) : es.common(F[1], w).length < es.common(V[1], w).length), F && !Y ? (G.path = F[1], G.offset = F[0].text.length) : V ? (G.path = V[1], G.offset = 0) : t = null;
                    }
                }
            break;
        case 'remove_text':
            var {
                path: j,
                offset: W,
                text: K
            } = n;
            if (0 === K.length)
                break;
            var z = er.leaf(e, j), q = z.text.slice(0, W), Q = z.text.slice(W + K.length);
            if (z.text = q + Q, t)
                for (var [X, $] of eh.points(t))
                    t[$] = ed.transform(X, n);
            break;
        case 'set_node':
            var {
                path: J,
                properties: ee,
                newProperties: et
            } = n;
            if (0 === J.length)
                throw Error('Cannot set properties on the root node!');
            var en = er.get(e, J);
            for (var ei in et) {
                if ('children' === ei || 'text' === ei)
                    throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                var ea = et[ei];
                null == ea ? delete en[ei] : en[ei] = ea;
            }
            for (var eo in ee)
                !et.hasOwnProperty(eo) && delete en[eo];
            break;
        case 'set_selection':
            var {newProperties: el} = n;
            if (null == el)
                t = el;
            else {
                if (null == t) {
                    if (!eh.isRange(el))
                        throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(eI.stringify(el), ' when there is no current selection.'));
                    t = eR({}, el);
                }
                for (var eu in el) {
                    var ec = el[eu];
                    if (null == ec) {
                        if ('anchor' === eu || 'focus' === eu)
                            throw Error('Cannot remove the "'.concat(eu, '" selection property'));
                        delete t[eu];
                    } else
                        t[eu] = ec;
                }
            }
            break;
        case 'split_node':
            var e_, {
                    path: eE,
                    position: ef,
                    properties: ep
                } = n;
            if (0 === eE.length)
                throw Error('Cannot apply a "split_node" operation at path ['.concat(eE, '] because the root node cannot be split.'));
            var em = er.get(e, eE), eT = er.parent(e, eE), eg = eE[eE.length - 1];
            if (ev.isText(em)) {
                var eS = em.text.slice(0, ef), eA = em.text.slice(ef);
                em.text = eS, e_ = eR(eR({}, ep), {}, { text: eA });
            } else {
                var eN = em.children.slice(0, ef), eO = em.children.slice(ef);
                em.children = eN, e_ = eR(eR({}, ep), {}, { children: eO });
            }
            if (eT.children.splice(eg + 1, 0, e_), t)
                for (var [eC, ey] of eh.points(t))
                    t[ey] = ed.transform(eC, n);
        }
        return t;
    }, ey = ['text'], eD = ['children'];
function eL(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function eb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eL(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var eM = (e, t) => {
        if (W.isElement(t))
            return !!$.isVoid(e, t) || 1 === t.children.length && eM(e, t.children[0]);
        if ($.isEditor(t))
            return !1;
        return !0;
    }, eP = (e, t) => {
        if (eh.isCollapsed(t))
            return t.anchor;
        var [, n] = eh.edges(t), r = $.pointRef(e, n);
        return eB.delete(e, { at: t }), r.unref();
    }, eU = (e, t) => {
        var [n] = $.node(e, t);
        return e => e === n;
    };
function ew(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ew(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ew(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
function eG(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function ek(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eG(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eG(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
var eB = ek(ek(ek(ek({}, {
    transform(e, t) {
        e.children = (0, o.P2)(e.children);
        var n = e.selection && (0, o.P2)(e.selection);
        try {
            n = eC(e, n, t);
        } finally {
            e.children = (0, o._x)(e.children), n ? e.selection = (0, o.mv)(n) ? (0, o._x)(n) : n : e.selection = null;
        }
    }
}), {
    insertNodes(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        $.withoutNormalizing(e, () => {
            var {
                    hanging: r = !1,
                    voids: i = !1,
                    mode: a = 'lowest'
                } = n, {
                    at: o,
                    match: s,
                    select: l
                } = n;
            if (er.isNode(t) && (t = [t]), 0 === t.length)
                return;
            var [u] = t;
            if (!o && (o = e.selection ? e.selection : e.children.length > 0 ? $.end(e, []) : [0], l = !0), null == l && (l = !1), eh.isRange(o)) {
                if (!r && (o = $.unhangRange(e, o, { voids: i })), eh.isCollapsed(o))
                    o = o.anchor;
                else {
                    var [, c] = eh.edges(o), d = $.pointRef(e, c);
                    eB.delete(e, { at: o }), o = d.unref();
                }
            }
            if (ed.isPoint(o)) {
                null == s && (s = ev.isText(u) ? e => ev.isText(e) : e.isInline(u) ? t => ev.isText(t) || $.isInline(e, t) : t => W.isElement(t) && $.isBlock(e, t));
                var [_] = $.nodes(e, {
                    at: o.path,
                    match: s,
                    mode: a,
                    voids: i
                });
                if (!_)
                    return;
                var [, E] = _, f = $.pathRef(e, E), h = $.isEnd(e, o, E);
                eB.splitNodes(e, {
                    at: o,
                    match: s,
                    mode: a,
                    voids: i
                });
                var p = f.unref();
                o = h ? es.next(p) : p;
            }
            var m = es.parent(o), I = o[o.length - 1];
            if (!(!i && $.void(e, { at: m }))) {
                for (var T of t) {
                    var g = m.concat(I);
                    I++, e.apply({
                        type: 'insert_node',
                        path: g,
                        node: T
                    }), o = es.next(o);
                }
                if (o = es.previous(o), l) {
                    var S = $.end(e, o);
                    S && eB.select(e, S);
                }
            }
        });
    },
    liftNodes(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var {
                    at: n = e.selection,
                    mode: r = 'lowest',
                    voids: i = !1
                } = t, {match: a} = t;
            if (null == a && (a = es.isPath(n) ? eU(e, n) : t => W.isElement(t) && $.isBlock(e, t)), !!n)
                for (var o of Array.from($.nodes(e, {
                        at: n,
                        match: a,
                        mode: r,
                        voids: i
                    }), t => {
                        var [, n] = t;
                        return $.pathRef(e, n);
                    })) {
                    var s = o.unref();
                    if (s.length < 2)
                        throw Error('Cannot lift node at a path ['.concat(s, '] because it has a depth of less than `2`.'));
                    var [l, u] = $.node(e, es.parent(s)), c = s[s.length - 1], {length: d} = l.children;
                    if (1 === d) {
                        var _ = es.next(u);
                        eB.moveNodes(e, {
                            at: s,
                            to: _,
                            voids: i
                        }), eB.removeNodes(e, {
                            at: u,
                            voids: i
                        });
                    } else if (0 === c)
                        eB.moveNodes(e, {
                            at: s,
                            to: u,
                            voids: i
                        });
                    else if (c === d - 1) {
                        var E = es.next(u);
                        eB.moveNodes(e, {
                            at: s,
                            to: E,
                            voids: i
                        });
                    } else {
                        var f = es.next(s), h = es.next(u);
                        eB.splitNodes(e, {
                            at: f,
                            voids: i
                        }), eB.moveNodes(e, {
                            at: s,
                            to: h,
                            voids: i
                        });
                    }
                }
        });
    },
    mergeNodes(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var n, r, {
                    match: i,
                    at: a = e.selection
                } = t, {
                    hanging: o = !1,
                    voids: s = !1,
                    mode: l = 'lowest'
                } = t;
            if (!a)
                return;
            if (null == i) {
                if (es.isPath(a)) {
                    var [u] = $.parent(e, a);
                    i = e => u.children.includes(e);
                } else
                    i = t => W.isElement(t) && $.isBlock(e, t);
            }
            if (!o && eh.isRange(a) && (a = $.unhangRange(e, a, { voids: s })), eh.isRange(a)) {
                if (eh.isCollapsed(a))
                    a = a.anchor;
                else {
                    var [, c] = eh.edges(a), d = $.pointRef(e, c);
                    eB.delete(e, { at: a }), a = d.unref(), null == t.at && eB.select(e, a);
                }
            }
            var [_] = $.nodes(e, {
                    at: a,
                    match: i,
                    voids: s,
                    mode: l
                }), E = $.previous(e, {
                    at: a,
                    match: i,
                    voids: s,
                    mode: l
                });
            if (!_ || !E)
                return;
            var [f, h] = _, [p, m] = E;
            if (0 !== h.length && 0 !== m.length) {
                var T = es.next(m), g = es.common(h, m), S = es.isSibling(h, m), A = Array.from($.levels(e, { at: h }), e => {
                        var [t] = e;
                        return t;
                    }).slice(g.length).slice(0, -1), N = $.above(e, {
                        at: h,
                        mode: 'highest',
                        match: t => A.includes(t) && eM(e, t)
                    }), v = N && $.pathRef(e, N[1]);
                if (ev.isText(f) && ev.isText(p)) {
                    var O = I(f, ey);
                    r = p.text.length, n = O;
                } else if (W.isElement(f) && W.isElement(p)) {
                    var O = I(f, eD);
                    r = p.children.length, n = O;
                } else
                    throw Error('Cannot merge the node at path ['.concat(h, '] with the previous sibling because it is not the same kind: ').concat(eI.stringify(f), ' ').concat(eI.stringify(p)));
                !S && eB.moveNodes(e, {
                    at: h,
                    to: T,
                    voids: s
                }), v && eB.removeNodes(e, {
                    at: v.current,
                    voids: s
                }), W.isElement(p) && $.isEmpty(e, p) || ev.isText(p) && '' === p.text && 0 !== m[m.length - 1] ? eB.removeNodes(e, {
                    at: m,
                    voids: s
                }) : e.apply({
                    type: 'merge_node',
                    path: T,
                    position: r,
                    properties: n
                }), v && v.unref();
            }
        });
    },
    moveNodes(e, t) {
        $.withoutNormalizing(e, () => {
            var {
                    to: n,
                    at: r = e.selection,
                    mode: i = 'lowest',
                    voids: a = !1
                } = t, {match: o} = t;
            if (!!r) {
                null == o && (o = es.isPath(r) ? eU(e, r) : t => W.isElement(t) && $.isBlock(e, t));
                var s = $.pathRef(e, n);
                for (var l of Array.from($.nodes(e, {
                        at: r,
                        match: o,
                        mode: i,
                        voids: a
                    }), t => {
                        var [, n] = t;
                        return $.pathRef(e, n);
                    })) {
                    var u = l.unref(), c = s.current;
                    0 !== u.length && e.apply({
                        type: 'move_node',
                        path: u,
                        newPath: c
                    }), s.current && es.isSibling(c, u) && es.isAfter(c, u) && (s.current = es.next(s.current));
                }
                s.unref();
            }
        });
    },
    removeNodes(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var {
                    hanging: n = !1,
                    voids: r = !1,
                    mode: i = 'lowest'
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
            if (!!a)
                for (var s of (null == o && (o = es.isPath(a) ? eU(e, a) : t => W.isElement(t) && $.isBlock(e, t)), !n && eh.isRange(a) && (a = $.unhangRange(e, a, { voids: r })), Array.from($.nodes(e, {
                        at: a,
                        match: o,
                        mode: i,
                        voids: r
                    }), t => {
                        var [, n] = t;
                        return $.pathRef(e, n);
                    }))) {
                    var l = s.unref();
                    if (l) {
                        var [u] = $.node(e, l);
                        e.apply({
                            type: 'remove_node',
                            path: l,
                            node: u
                        });
                    }
                }
        });
    },
    setNodes(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        $.withoutNormalizing(e, () => {
            var {
                    match: r,
                    at: i = e.selection,
                    compare: a,
                    merge: o
                } = n, {
                    hanging: s = !1,
                    mode: l = 'lowest',
                    split: u = !1,
                    voids: c = !1
                } = n;
            if (!!i) {
                if (null == r && (r = es.isPath(i) ? eU(e, i) : t => W.isElement(t) && $.isBlock(e, t)), !s && eh.isRange(i) && (i = $.unhangRange(e, i, { voids: c })), u && eh.isRange(i)) {
                    if (eh.isCollapsed(i) && $.leaf(e, i.anchor)[0].text.length > 0)
                        return;
                    var d = $.rangeRef(e, i, { affinity: 'inward' }), [_, E] = eh.edges(i), f = 'lowest' === l ? 'lowest' : 'highest', h = $.isEnd(e, E, E.path);
                    eB.splitNodes(e, {
                        at: E,
                        match: r,
                        mode: f,
                        voids: c,
                        always: !h
                    });
                    var p = $.isStart(e, _, _.path);
                    eB.splitNodes(e, {
                        at: _,
                        match: r,
                        mode: f,
                        voids: c,
                        always: !p
                    }), i = d.unref(), null == n.at && eB.select(e, i);
                }
                for (var [m, I] of (!a && (a = (e, t) => e !== t), $.nodes(e, {
                        at: i,
                        match: r,
                        mode: l,
                        voids: c
                    }))) {
                    var T = {}, g = {};
                    if (0 !== I.length) {
                        var S = !1;
                        for (var A in t) {
                            if ('children' !== A && 'text' !== A)
                                a(t[A], m[A]) && (S = !0, m.hasOwnProperty(A) && (T[A] = m[A]), o ? null != t[A] && (g[A] = o(m[A], t[A])) : null != t[A] && (g[A] = t[A]));
                        }
                        S && e.apply({
                            type: 'set_node',
                            path: I,
                            properties: T,
                            newProperties: g
                        });
                    }
                }
            }
        });
    },
    splitNodes(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var n, r, {
                    mode: i = 'lowest',
                    voids: a = !1
                } = t, {
                    match: o,
                    at: s = e.selection,
                    height: l = 0,
                    always: u = !1
                } = t;
            if (null == o && (o = t => W.isElement(t) && $.isBlock(e, t)), eh.isRange(s) && (s = eP(e, s)), es.isPath(s)) {
                var c = s, d = $.point(e, c), [_] = $.parent(e, c);
                o = e => e === _, l = d.path.length - c.length + 1, s = d, u = !0;
            }
            if (!!s) {
                var E = $.pointRef(e, s, { affinity: 'backward' });
                try {
                    var [f] = $.nodes(e, {
                        at: s,
                        match: o,
                        mode: i,
                        voids: a
                    });
                    if (!f)
                        return;
                    var h = $.void(e, {
                        at: s,
                        mode: 'highest'
                    });
                    if (!a && h) {
                        var [p, m] = h;
                        if (W.isElement(p) && e.isInline(p)) {
                            var I = $.after(e, m);
                            if (!I) {
                                var T = es.next(m);
                                eB.insertNodes(e, { text: '' }, {
                                    at: T,
                                    voids: a
                                }), I = $.point(e, T);
                            }
                            s = I, u = !0;
                        }
                        l = s.path.length - m.length + 1, u = !0;
                    }
                    n = $.pointRef(e, s);
                    var g = s.path.length - l, [, S] = f, A = s.path.slice(0, g), N = 0 === l ? s.offset : s.path[g] + 0;
                    for (var [v, O] of $.levels(e, {
                            at: A,
                            reverse: !0,
                            voids: a
                        })) {
                        var R = !1;
                        if (O.length < S.length || 0 === O.length || !a && W.isElement(v) && $.isVoid(e, v))
                            break;
                        var C = E.current, y = $.isEnd(e, C, O);
                        if (u || !E || !$.isEdge(e, C, O)) {
                            R = !0;
                            var D = er.extractProps(v);
                            e.apply({
                                type: 'split_node',
                                path: O,
                                position: N,
                                properties: D
                            });
                        }
                        N = O[O.length - 1] + (R || y ? 1 : 0);
                    }
                    if (null == t.at) {
                        var L = n.current || $.end(e, []);
                        eB.select(e, L);
                    }
                } finally {
                    E.unref(), null === (r = n) || void 0 === r || r.unref();
                }
            }
        });
    },
    unsetNodes(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        !Array.isArray(t) && (t = [t]);
        var r = {};
        for (var i of t)
            r[i] = null;
        eB.setNodes(e, r, n);
    },
    unwrapNodes(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var {
                    mode: n = 'lowest',
                    split: r = !1,
                    voids: i = !1
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
            if (!!a) {
                null == o && (o = es.isPath(a) ? eU(e, a) : t => W.isElement(t) && $.isBlock(e, t)), es.isPath(a) && (a = $.range(e, a));
                var s = eh.isRange(a) ? $.rangeRef(e, a) : null, l = Array.from($.nodes(e, {
                        at: a,
                        match: o,
                        mode: n,
                        voids: i
                    }), t => {
                        var [, n] = t;
                        return $.pathRef(e, n);
                    }).reverse();
                for (var u of l)
                    !function (t) {
                        var n = t.unref(), [a] = $.node(e, n), o = $.range(e, n);
                        r && s && (o = eh.intersection(s.current, o)), eB.liftNodes(e, {
                            at: o,
                            match: e => W.isAncestor(a) && a.children.includes(e),
                            voids: i
                        });
                    }(u);
                s && s.unref();
            }
        });
    },
    wrapNodes(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        $.withoutNormalizing(e, () => {
            var {
                    mode: r = 'lowest',
                    split: i = !1,
                    voids: a = !1
                } = n, {
                    match: o,
                    at: s = e.selection
                } = n;
            if (!!s) {
                if (null == o && (o = es.isPath(s) ? eU(e, s) : e.isInline(t) ? t => W.isElement(t) && $.isInline(e, t) || ev.isText(t) : t => W.isElement(t) && $.isBlock(e, t)), i && eh.isRange(s)) {
                    var [l, u] = eh.edges(s), c = $.rangeRef(e, s, { affinity: 'inward' });
                    eB.splitNodes(e, {
                        at: u,
                        match: o,
                        voids: a
                    }), eB.splitNodes(e, {
                        at: l,
                        match: o,
                        voids: a
                    }), s = c.unref(), null == n.at && eB.select(e, s);
                }
                for (var [, d] of Array.from($.nodes(e, {
                        at: s,
                        match: e.isInline(t) ? t => W.isElement(t) && $.isBlock(e, t) : e => $.isEditor(e),
                        mode: 'lowest',
                        voids: a
                    }))) {
                    var _ = eh.isRange(s) ? eh.intersection(s, $.range(e, d)) : s;
                    if (!!_) {
                        var E = Array.from($.nodes(e, {
                            at: _,
                            match: o,
                            mode: r,
                            voids: a
                        }));
                        if (E.length > 0 && 'continue' === function () {
                                var [n] = E, r = E[E.length - 1], [, i] = n, [, o] = r;
                                if (0 === i.length && 0 === o.length)
                                    return 'continue';
                                var s = es.equals(i, o) ? es.parent(i) : es.common(i, o), l = $.range(e, i, o), [u] = $.node(e, s), c = s.length + 1, d = es.next(o.slice(0, c)), _ = eb(eb({}, t), {}, { children: [] });
                                eB.insertNodes(e, _, {
                                    at: d,
                                    voids: a
                                }), eB.moveNodes(e, {
                                    at: l,
                                    match: e => W.isAncestor(u) && u.children.includes(e),
                                    to: d.concat(0),
                                    voids: a
                                });
                            }())
                            continue;
                    }
                }
            }
        });
    }
}), {
    collapse(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                edge: n = 'anchor'
            } = t, {selection: r} = e;
        if (!!r) {
            if ('anchor' === n)
                eB.select(e, r.anchor);
            else if ('focus' === n)
                eB.select(e, r.focus);
            else if ('start' === n) {
                var [i] = eh.edges(r);
                eB.select(e, i);
            } else if ('end' === n) {
                var [, a] = eh.edges(r);
                eB.select(e, a);
            }
        }
    },
    deselect(e) {
        var {selection: t} = e;
        t && e.apply({
            type: 'set_selection',
            properties: t,
            newProperties: null
        });
    },
    move(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {selection: n} = e, {
                distance: r = 1,
                unit: i = 'character',
                reverse: a = !1
            } = t, {
                edge: o = null
            } = t;
        if (!!n) {
            'start' === o && (o = eh.isBackward(n) ? 'focus' : 'anchor'), 'end' === o && (o = eh.isBackward(n) ? 'anchor' : 'focus');
            var {
                    anchor: s,
                    focus: l
                } = n, u = {
                    distance: r,
                    unit: i
                }, c = {};
            if (null == o || 'anchor' === o) {
                var d = a ? $.before(e, s, u) : $.after(e, s, u);
                d && (c.anchor = d);
            }
            if (null == o || 'focus' === o) {
                var _ = a ? $.before(e, l, u) : $.after(e, l, u);
                _ && (c.focus = _);
            }
            eB.setSelection(e, c);
        }
    },
    select(e, t) {
        var {selection: n} = e;
        if (t = $.range(e, t), n) {
            eB.setSelection(e, t);
            return;
        }
        if (!eh.isRange(t))
            throw Error('When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: '.concat(eI.stringify(t)));
        e.apply({
            type: 'set_selection',
            properties: n,
            newProperties: t
        });
    },
    setPoint(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {selection: r} = e, {
                edge: i = 'both'
            } = n;
        if (!!r) {
            'start' === i && (i = eh.isBackward(r) ? 'focus' : 'anchor'), 'end' === i && (i = eh.isBackward(r) ? 'anchor' : 'focus');
            var {
                    anchor: a,
                    focus: o
                } = r, s = 'anchor' === i ? a : o;
            eB.setSelection(e, { ['anchor' === i ? 'anchor' : 'focus']: ex(ex({}, s), t) });
        }
    },
    setSelection(e, t) {
        var {selection: n} = e, r = {}, i = {};
        if (!!n) {
            for (var a in t)
                ('anchor' === a && null != t.anchor && !ed.equals(t.anchor, n.anchor) || 'focus' === a && null != t.focus && !ed.equals(t.focus, n.focus) || 'anchor' !== a && 'focus' !== a && t[a] !== n[a]) && (r[a] = n[a], i[a] = t[a]);
            Object.keys(r).length > 0 && e.apply({
                type: 'set_selection',
                properties: r,
                newProperties: i
            });
        }
    }
}), {
    delete(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        $.withoutNormalizing(e, () => {
            var n, {
                    reverse: r = !1,
                    unit: i = 'character',
                    distance: a = 1,
                    voids: o = !1
                } = t, {
                    at: s = e.selection,
                    hanging: l = !1
                } = t;
            if (!s)
                return;
            var u = !1;
            if (eh.isRange(s) && eh.isCollapsed(s) && (u = !0, s = s.anchor), ed.isPoint(s)) {
                var c = $.void(e, {
                    at: s,
                    mode: 'highest'
                });
                if (!o && c) {
                    var [, d] = c;
                    s = d;
                } else {
                    var _ = {
                            unit: i,
                            distance: a
                        }, E = r ? $.before(e, s, _) || $.start(e, []) : $.after(e, s, _) || $.end(e, []);
                    s = {
                        anchor: s,
                        focus: E
                    }, l = !0;
                }
            }
            if (es.isPath(s)) {
                eB.removeNodes(e, {
                    at: s,
                    voids: o
                });
                return;
            }
            if (!eh.isCollapsed(s)) {
                if (!l) {
                    var [, f] = eh.edges(s), h = $.end(e, []);
                    !ed.equals(f, h) && (s = $.unhangRange(e, s, { voids: o }));
                }
                var [p, m] = eh.edges(s), I = $.above(e, {
                        match: t => W.isElement(t) && $.isBlock(e, t),
                        at: p,
                        voids: o
                    }), T = $.above(e, {
                        match: t => W.isElement(t) && $.isBlock(e, t),
                        at: m,
                        voids: o
                    }), g = I && T && !es.equals(I[1], T[1]), S = es.equals(p.path, m.path), A = o ? null : $.void(e, {
                        at: p,
                        mode: 'highest'
                    }), N = o ? null : $.void(e, {
                        at: m,
                        mode: 'highest'
                    });
                if (A) {
                    var v = $.before(e, p);
                    v && I && es.isAncestor(I[1], v.path) && (p = v);
                }
                if (N) {
                    var O = $.after(e, m);
                    O && T && es.isAncestor(T[1], O.path) && (m = O);
                }
                var R = [];
                for (var C of $.nodes(e, {
                        at: s,
                        voids: o
                    })) {
                    var [y, D] = C;
                    if (!n || 0 !== es.compare(D, n))
                        (!o && W.isElement(y) && $.isVoid(e, y) || !es.isCommon(D, p.path) && !es.isCommon(D, m.path)) && (R.push(C), n = D);
                }
                var L = Array.from(R, t => {
                        var [, n] = t;
                        return $.pathRef(e, n);
                    }), b = $.pointRef(e, p), M = $.pointRef(e, m), P = '';
                if (!S && !A) {
                    var U = b.current, [w] = $.leaf(e, U), {path: x} = U, {offset: G} = p, k = w.text.slice(G);
                    k.length > 0 && (e.apply({
                        type: 'remove_text',
                        path: x,
                        offset: G,
                        text: k
                    }), P = k);
                }
                if (L.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => eB.removeNodes(e, {
                        at: t,
                        voids: o
                    })), !N) {
                    var B = M.current, [F] = $.leaf(e, B), {path: V} = B, H = S ? p.offset : 0, Z = F.text.slice(H, m.offset);
                    Z.length > 0 && (e.apply({
                        type: 'remove_text',
                        path: V,
                        offset: H,
                        text: Z
                    }), P = Z);
                }
                !S && g && M.current && b.current && eB.mergeNodes(e, {
                    at: M.current,
                    hanging: !0,
                    voids: o
                }), u && r && 'character' === i && P.length > 1 && P.match(/[\u0E00-\u0E7F]+/) && eB.insertText(e, P.slice(0, P.length - a));
                var Y = b.unref(), j = M.unref(), K = r ? Y || j : j || Y;
                null == t.at && K && eB.select(e, K);
            }
        });
    },
    insertFragment(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        $.withoutNormalizing(e, () => {
            var r, {
                    hanging: i = !1,
                    voids: a = !1
                } = n, {
                    at: o = e.selection
                } = n;
            if (!t.length)
                return;
            if (!o)
                return;
            if (eh.isRange(o)) {
                if (!i && (o = $.unhangRange(e, o, { voids: a })), eh.isCollapsed(o))
                    o = o.anchor;
                else {
                    var [, s] = eh.edges(o);
                    if (!a && $.void(e, { at: s }))
                        return;
                    var l = $.pointRef(e, s);
                    eB.delete(e, { at: o }), o = l.unref();
                }
            } else
                es.isPath(o) && (o = $.start(e, o));
            if (!(!a && $.void(e, { at: o }))) {
                var u = $.above(e, {
                    at: o,
                    match: t => W.isElement(t) && $.isInline(e, t),
                    mode: 'highest',
                    voids: a
                });
                if (u) {
                    var [, c] = u;
                    $.isEnd(e, o, c) ? o = $.after(e, c) : $.isStart(e, o, c) && (o = $.before(e, c));
                }
                var [, d] = $.above(e, {
                        match: t => W.isElement(t) && $.isBlock(e, t),
                        at: o,
                        voids: a
                    }), _ = $.isStart(e, o, d), E = $.isEnd(e, o, d), f = _ && E, h = !_ || _ && E, p = !E, [, m] = er.first({ children: t }, []), [, I] = er.last({ children: t }, []), T = [], g = t => {
                        var [n, r] = t;
                        return 0 !== r.length && (!!f || !(h && es.isAncestor(r, m) && W.isElement(n) && !e.isVoid(n) && !e.isInline(n) || p && es.isAncestor(r, I) && W.isElement(n) && !e.isVoid(n) && !e.isInline(n)) && !0);
                    };
                for (var S of er.nodes({ children: t }, { pass: g }))
                    g(S) && T.push(S);
                var A = [], N = [], v = [], O = !0, R = !1;
                for (var [C] of T)
                    W.isElement(C) && !e.isInline(C) ? (O = !1, R = !0, N.push(C)) : O ? A.push(C) : v.push(C);
                var [y] = $.nodes(e, {
                        at: o,
                        match: t => ev.isText(t) || $.isInline(e, t),
                        mode: 'highest',
                        voids: a
                    }), [, D] = y, L = $.isStart(e, o, D), b = $.isEnd(e, o, D), M = $.pathRef(e, E && !v.length ? es.next(d) : d), P = $.pathRef(e, b ? es.next(D) : D);
                eB.splitNodes(e, {
                    at: o,
                    match: t => R ? W.isElement(t) && $.isBlock(e, t) : ev.isText(t) || $.isInline(e, t),
                    mode: R ? 'lowest' : 'highest',
                    always: R && (!_ || A.length > 0) && (!E || v.length > 0),
                    voids: a
                });
                var U = $.pathRef(e, !L || L && b ? es.next(D) : D);
                if (eB.insertNodes(e, A, {
                        at: U.current,
                        match: t => ev.isText(t) || $.isInline(e, t),
                        mode: 'highest',
                        voids: a
                    }), f && !A.length && N.length && !v.length && eB.delete(e, {
                        at: d,
                        voids: a
                    }), eB.insertNodes(e, N, {
                        at: M.current,
                        match: t => W.isElement(t) && $.isBlock(e, t),
                        mode: 'lowest',
                        voids: a
                    }), eB.insertNodes(e, v, {
                        at: P.current,
                        match: t => ev.isText(t) || $.isInline(e, t),
                        mode: 'highest',
                        voids: a
                    }), !n.at && (v.length > 0 && P.current ? r = es.previous(P.current) : N.length > 0 && M.current ? r = es.previous(M.current) : U.current && (r = es.previous(U.current)), r)) {
                    var w = $.end(e, r);
                    eB.select(e, w);
                }
                U.unref(), M.unref(), P.unref();
            }
        });
    },
    insertText(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        $.withoutNormalizing(e, () => {
            var {
                    voids: r = !1
                } = n, {
                    at: i = e.selection
                } = n;
            if (!i)
                return;
            if (es.isPath(i) && (i = $.range(e, i)), eh.isRange(i)) {
                if (eh.isCollapsed(i))
                    i = i.anchor;
                else {
                    var a = eh.end(i);
                    if (!r && $.void(e, { at: a }))
                        return;
                    var o = eh.start(i), s = $.pointRef(e, o), l = $.pointRef(e, a);
                    eB.delete(e, {
                        at: i,
                        voids: r
                    });
                    var u = s.unref(), c = l.unref();
                    i = u || c, eB.setSelection(e, {
                        anchor: i,
                        focus: i
                    });
                }
            }
            if (!(!r && $.void(e, { at: i }))) {
                var {
                    path: d,
                    offset: _
                } = i;
                t.length > 0 && e.apply({
                    type: 'insert_text',
                    path: d,
                    offset: _,
                    text: t
                });
            }
        });
    }
});
