var r =
    (this && this.__values) ||
    function (e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
            return {
                next: function () {
                    return (
                        e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    );
                }
            };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = l), (t.bindFormatValues = u);
var i = n(542593),
    a = n(766989),
    s = n(927882);
function o(e) {
    return '$' === e[0];
}
function l(e, t, n, o, c, d, _, E) {
    if ((void 0 === d && (d = {}), 1 === t.length && t[0].type === i.FormatJsNodeType.Literal)) {
        e.pushLiteralText(t[0].value);
        return;
    }
    var f,
        h,
        p,
        I,
        m = function (t) {
            switch (t.type) {
                case i.FormatJsNodeType.Literal:
                    return e.pushLiteralText(t.value), 'continue';
                case i.FormatJsNodeType.Pound:
                    if ('number' == typeof _) {
                        var f,
                            h,
                            m = o.getNumberFormat(n).format(_);
                        e.pushLiteralText(m);
                    }
                    return 'continue';
            }
            var T = t.value;
            if (!(T in d) && '$' !== T[0]) throw new a.MissingValueError(T, E);
            var S = d[T];
            switch (t.type) {
                case i.FormatJsNodeType.Argument:
                    if ('$_' == T) break;
                    'object' == typeof S ? e.pushObject(S) : e.pushLiteralText(String(S));
                    break;
                case i.FormatJsNodeType.Date:
                    var g = t.style in c.date ? c.date[t.style] : null != t.style ? (0, s.parseDateTimeSkeleton)(t.style) : void 0;
                    e.pushLiteralText(o.getDateTimeFormat(n, g).format(S));
                    break;
                case i.FormatJsNodeType.Time:
                    var g = t.style in c.time ? c.time[t.style] : null != t.style ? (0, s.parseDateTimeSkeleton)(t.style) : void 0;
                    e.pushLiteralText(o.getDateTimeFormat(n, g).format(S));
                    break;
                case i.FormatJsNodeType.Number:
                    var g = t.style in c.number ? c.number[t.style] : null != t.style ? (0, s.parseNumberSkeleton)((0, s.parseNumberSkeletonFromString)(t.style)) : void 0,
                        A = 'number' != typeof S ? S : ((p = S * (null == g ? void 0 : g.scale)), p);
                    e.pushLiteralText(o.getNumberFormat(n, g).format(A));
                    break;
                case i.FormatJsNodeType.Tag:
                    var N = t.children,
                        O = u(e.constructor, N, n, o, c, d, _);
                    if ('$' === T[0]) e.pushRichTextTag(T, O);
                    else {
                        if ('function' != typeof S)
                            throw 'expected a function type for a Tag formatting value, '
                                .concat(T, '. got ')
                                .concat(typeof S, ': ')
                                .concat(S);
                        var R = S(O);
                        R = Array.isArray(R) ? R : [R];
                        try {
                            for (var v = ((f = void 0), r(R)), C = v.next(); !C.done; C = v.next()) {
                                var L = C.value;
                                'string' == typeof L ? e.pushLiteralText(L) : e.pushObject(L);
                            }
                        } catch (e) {
                            f = { error: e };
                        } finally {
                            try {
                                C && !C.done && (h = v.return) && h.call(v);
                            } finally {
                                if (f) throw f.error;
                            }
                        }
                    }
                    break;
                case i.FormatJsNodeType.Select:
                    var y = t.value in t.options ? t.options[t.value] : t.options.other;
                    if (null == y) throw ''.concat(t.value, ' is not a known option for select value ').concat(T, '. Valid options are ').concat(Object.keys(t.options).join(', '));
                    l(e, y.value, n, o, c, d);
                    break;
                case i.FormatJsNodeType.Plural:
                    var y = (function () {
                        var e,
                            r,
                            i = '='.concat(S);
                        if (i in t.options) return t.options[i];
                        var a = o.getPluralRules(n, { type: t.pluralType }).select(S - (null !== (e = t.offset) && void 0 !== e ? e : 0));
                        return null !== (r = t.options[a]) && void 0 !== r ? r : t.options.other;
                    })();
                    if (null == y) throw ''.concat(t.value, ' is not a known option for plural value ').concat(T, '. Valid options are ').concat(Object.keys(t.options).join(', '));
                    l(e, y.value, n, o, c, d, S - (null !== (I = t.offset) && void 0 !== I ? I : 0));
            }
        };
    try {
        for (var T = r(t), S = T.next(); !S.done; S = T.next()) {
            var g = S.value;
            m(g);
        }
    } catch (e) {
        f = { error: e };
    } finally {
        try {
            S && !S.done && (h = T.return) && h.call(T);
        } finally {
            if (f) throw f.error;
        }
    }
}
function u(e, t, n, r, i, a, s) {
    void 0 === a && (a = {});
    var o = new e();
    return l(o, t, n, r, i, a, s), o.finish();
}
t.FormatBuilder = function () {};
