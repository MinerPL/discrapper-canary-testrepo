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
        },
    i =
        (this && this.__read) ||
        function (e, t) {
            var n = 'function' == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                i,
                a = n.call(e),
                s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
            } catch (e) {
                i = { error: e };
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.InternalIntlMessage = void 0);
var a = n(542593),
    s = (function () {
        function e(e, t) {
            (this.locale = t), (this.ast = e);
        }
        return (
            (e.prototype.reserialize = function () {
                var e = { value: '' };
                return o(this.ast, e), e.value;
            }),
            e
        );
    })();
function o(e, t) {
    var n, s, l, u, c, d;
    try {
        for (var _ = r(e), E = _.next(); !E.done; E = _.next()) {
            var f = E.value;
            switch (f.type) {
                case a.FormatJsNodeType.Literal:
                    t.value += f.value;
                    return;
                case a.FormatJsNodeType.Argument:
                    if ('$_' === t.value) return;
                    t.value += '{' + f.value + '}';
                    return;
                case a.FormatJsNodeType.Date:
                    (t.value += '{' + f.value + ', date'), null != f.style && (t.value += ', ' + f.style), (t.value += '}');
                    return;
                case a.FormatJsNodeType.Time:
                    (t.value += '{' + f.value + ', time'), null != f.style && (t.value += ', ' + f.style), (t.value += '}');
                    return;
                case a.FormatJsNodeType.Number:
                    (t.value += '{' + f.value + ', number'), null != f.style && (t.value += ', ' + f.style), (t.value += '}');
                    return;
                case a.FormatJsNodeType.Plural:
                    var h = 'ordinal' == f.pluralType ? 'selectordinal' : 'plural';
                    (t.value += '{' + f.value + ', ' + h + ', '), f.offset && (t.value += 'offset:' + f.offset);
                    try {
                        for (var p = ((l = void 0), r(Object.entries(f.options))), I = p.next(); !I.done; I = p.next()) {
                            var m = i(I.value, 2),
                                T = m[0],
                                S = m[1];
                            (t.value += ' ' + T + ' {'), o(S.value, t), (t.value += '}');
                        }
                    } catch (e) {
                        l = { error: e };
                    } finally {
                        try {
                            I && !I.done && (u = p.return) && u.call(p);
                        } finally {
                            if (l) throw l.error;
                        }
                    }
                    return;
                case a.FormatJsNodeType.Pound:
                    t.value += '#';
                    return;
                case a.FormatJsNodeType.Select:
                    t.value += '{' + f.value + ', select, ';
                    try {
                        for (var g = ((c = void 0), r(Object.entries(f.options))), A = g.next(); !A.done; A = g.next()) {
                            var N = i(A.value, 2),
                                T = N[0],
                                S = N[1];
                            (t.value += ' ' + T + ' {'), o(S.value, t), (t.value += '}');
                        }
                    } catch (e) {
                        c = { error: e };
                    } finally {
                        try {
                            A && !A.done && (d = g.return) && d.call(g);
                        } finally {
                            if (c) throw c.error;
                        }
                    }
                    return;
                case a.FormatJsNodeType.Tag:
                    (function (e, t) {
                        switch (e.value) {
                            case '$b':
                                (t.value += '**'), o(e.children, t), (t.value += '**');
                                return;
                            case '$i':
                                (t.value += '*'), o(e.children, t), (t.value += '*');
                                return;
                            case '$code':
                                (t.value += '`'), o(e.children, t), (t.value += '`');
                                return;
                            case '$p':
                                o(e.children, t), (t.value += '\n\n');
                                return;
                            case '$link':
                                var n = i(e.children),
                                    r = n[0],
                                    a = n.slice(1);
                                (t.value += '['), o(a, t), (t.value += ']('), null != r && o([r], t), (t.value += ')');
                                return;
                            default:
                                (t.value += '$['), o(e.children, t), (t.value += '](' + e.value + ')');
                                return;
                        }
                    })(f, t);
                    return;
            }
        }
    } catch (e) {
        n = { error: e };
    } finally {
        try {
            E && !E.done && (s = _.return) && s.call(_);
        } finally {
            if (n) throw n.error;
        }
    }
}
t.InternalIntlMessage = s;
