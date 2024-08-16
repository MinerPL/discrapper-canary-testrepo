t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = r), (this.line = i), (this.column = a), (this.name = 'SyntaxError');
    }
    return (
        !(function (e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
            SyntaxError: e,
            parse: function (t) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u = arguments.length > 1 ? arguments[1] : {},
                    c = {},
                    d = { start: ea },
                    _ = ea,
                    E = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            a,
                            s = '';
                        for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) s += i[n];
                        return s;
                    },
                    f = /^[^ \t\n\r,.+={}#]/,
                    h = {
                        type: 'class',
                        value: '[^ \\t\\n\\r,.+={}#]',
                        description: '[^ \\t\\n\\r,.+={}#]'
                    },
                    p = {
                        type: 'literal',
                        value: '{',
                        description: '"{"'
                    },
                    m = {
                        type: 'literal',
                        value: ',',
                        description: '","'
                    },
                    I = {
                        type: 'literal',
                        value: '}',
                        description: '"}"'
                    },
                    T = 'number',
                    g = {
                        type: 'literal',
                        value: 'number',
                        description: '"number"'
                    },
                    S = 'date',
                    A = {
                        type: 'literal',
                        value: 'date',
                        description: '"date"'
                    },
                    N = 'time',
                    v = {
                        type: 'literal',
                        value: 'time',
                        description: '"time"'
                    },
                    O = 'plural',
                    R = {
                        type: 'literal',
                        value: 'plural',
                        description: '"plural"'
                    },
                    C = 'selectordinal',
                    y = {
                        type: 'literal',
                        value: 'selectordinal',
                        description: '"selectordinal"'
                    },
                    D = 'select',
                    L = {
                        type: 'literal',
                        value: 'select',
                        description: '"select"'
                    },
                    b = {
                        type: 'literal',
                        value: '=',
                        description: '"="'
                    },
                    M = 'offset:',
                    P = {
                        type: 'literal',
                        value: 'offset:',
                        description: '"offset:"'
                    },
                    U = {
                        type: 'other',
                        description: 'whitespace'
                    },
                    w = /^[ \t\n\r]/,
                    x = {
                        type: 'class',
                        value: '[ \\t\\n\\r]',
                        description: '[ \\t\\n\\r]'
                    },
                    G = {
                        type: 'other',
                        description: 'optionalWhitespace'
                    },
                    k = /^[0-9]/,
                    B = {
                        type: 'class',
                        value: '[0-9]',
                        description: '[0-9]'
                    },
                    F = /^[0-9a-f]/i,
                    V = {
                        type: 'class',
                        value: '[0-9a-f]i',
                        description: '[0-9a-f]i'
                    },
                    H = {
                        type: 'literal',
                        value: '0',
                        description: '"0"'
                    },
                    Z = /^[1-9]/,
                    Y = {
                        type: 'class',
                        value: '[1-9]',
                        description: '[1-9]'
                    },
                    j = /^[^{}\\\0-\x1F \t\n\r]/,
                    W = {
                        type: 'class',
                        value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                        description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
                    },
                    K = {
                        type: 'literal',
                        value: '\\\\',
                        description: '"\\\\\\\\"'
                    },
                    z = {
                        type: 'literal',
                        value: '\\#',
                        description: '"\\\\#"'
                    },
                    q = {
                        type: 'literal',
                        value: '\\{',
                        description: '"\\\\{"'
                    },
                    Q = {
                        type: 'literal',
                        value: '\\}',
                        description: '"\\\\}"'
                    },
                    X = {
                        type: 'literal',
                        value: '\\u',
                        description: '"\\\\u"'
                    },
                    $ = 0,
                    J = 0,
                    ee = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    et = 0,
                    en = [],
                    er = 0;
                if ('startRule' in u) {
                    if (!(u.startRule in d)) throw Error('Can\'t start parsing from rule "' + u.startRule + '".');
                    _ = d[u.startRule];
                }
                function ei(e) {
                    if (!($ < et)) $ > et && ((et = $), (en = [])), en.push(e);
                }
                function ea() {
                    return es();
                }
                function es() {
                    var e, t, n;
                    for (e = $, t = [], n = eo(); n !== c; ) t.push(n), (n = eo());
                    if (t !== c)
                        t = {
                            type: 'messageFormatPattern',
                            elements: t
                        };
                    return (e = t);
                }
                function eo() {
                    var e;
                    return (
                        (e = (function () {
                            var e, n;
                            if (
                                ((e = $),
                                (n = (function () {
                                    var e, n, r, i, a, s;
                                    if (((e = $), (n = []), (r = $), (i = ed()) !== c && (a = ep()) !== c && (s = ed()) !== c ? (r = i = [i, a, s]) : (($ = r), (r = c)), r !== c)) for (; r !== c; ) n.push(r), (r = $), (i = ed()) !== c && (a = ep()) !== c && (s = ed()) !== c ? (r = i = [i, a, s]) : (($ = r), (r = c));
                                    else n = c;
                                    return n !== c && (n = E(n)), (e = n) === c && ((e = $), (n = ec()) !== c && (n = t.substring(e, $)), (e = n)), e;
                                })()) !== c)
                            )
                                n = {
                                    type: 'messageTextElement',
                                    value: n
                                };
                            return (e = n);
                        })()) === c &&
                            (e = (function () {
                                var e, n, r, i, a, s, o, l;
                                if (((e = $), 123 === t.charCodeAt($) ? ((n = '{'), $++) : ((n = c), 0 === er && ei(p)), n !== c)) {
                                    if (ed() !== c) {
                                        if (
                                            (r = (function () {
                                                var e, n, r;
                                                if ((e = ef()) === c) {
                                                    if (((e = $), (n = []), f.test(t.charAt($)) ? ((r = t.charAt($)), $++) : ((r = c), 0 === er && ei(h)), r !== c)) for (; r !== c; ) n.push(r), f.test(t.charAt($)) ? ((r = t.charAt($)), $++) : ((r = c), 0 === er && ei(h));
                                                    else n = c;
                                                    n !== c && (n = t.substring(e, $)), (e = n);
                                                }
                                                return e;
                                            })()) !== c
                                        ) {
                                            if (ed() !== c) {
                                                if (
                                                    ((i = $),
                                                    44 === t.charCodeAt($) ? ((a = ','), $++) : ((a = c), 0 === er && ei(m)),
                                                    a !== c &&
                                                    (s = ed()) !== c &&
                                                    (o = (function () {
                                                        var e;
                                                        return (
                                                            (e = (function () {
                                                                var e, n, r, i, a, s, o;
                                                                if (((e = $), t.substr($, 6) === T ? ((n = T), ($ += 6)) : ((n = c), 0 === er && ei(g)), n === c && (t.substr($, 4) === S ? ((n = S), ($ += 4)) : ((n = c), 0 === er && ei(A)), n === c && (t.substr($, 4) === N ? ((n = N), ($ += 4)) : ((n = c), 0 === er && ei(v)))), n !== c)) {
                                                                    if (ed() !== c) {
                                                                        if (((r = $), 44 === t.charCodeAt($) ? ((i = ','), $++) : ((i = c), 0 === er && ei(m)), i !== c && (a = ed()) !== c && (s = ep()) !== c ? (r = i = [i, a, s]) : (($ = r), (r = c)), r === c && (r = null), r !== c)) {
                                                                            e = n = {
                                                                                type: n + 'Format',
                                                                                style: (o = r) && o[2]
                                                                            };
                                                                        } else ($ = e), (e = c);
                                                                    } else ($ = e), (e = c);
                                                                } else ($ = e), (e = c);
                                                                return e;
                                                            })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = $), t.substr($, 6) === O ? ((n = O), ($ += 6)) : ((n = c), 0 === er && ei(R)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt($) ? ((r = ','), $++) : ((r = c), 0 === er && ei(m)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if ((i = eu()) !== c) {
                                                                                        e = n = {
                                                                                            type: (a = i).type,
                                                                                            ordinal: !1,
                                                                                            offset: a.offset || 0,
                                                                                            options: a.options
                                                                                        };
                                                                                    } else ($ = e), (e = c);
                                                                                } else ($ = e), (e = c);
                                                                            } else ($ = e), (e = c);
                                                                        } else ($ = e), (e = c);
                                                                    } else ($ = e), (e = c);
                                                                    return e;
                                                                })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = $), t.substr($, 13) === C ? ((n = C), ($ += 13)) : ((n = c), 0 === er && ei(y)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt($) ? ((r = ','), $++) : ((r = c), 0 === er && ei(m)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if ((i = eu()) !== c) {
                                                                                        e = n = {
                                                                                            type: (a = i).type,
                                                                                            ordinal: !0,
                                                                                            offset: a.offset || 0,
                                                                                            options: a.options
                                                                                        };
                                                                                    } else ($ = e), (e = c);
                                                                                } else ($ = e), (e = c);
                                                                            } else ($ = e), (e = c);
                                                                        } else ($ = e), (e = c);
                                                                    } else ($ = e), (e = c);
                                                                    return e;
                                                                })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = $), t.substr($, 6) === D ? ((n = D), ($ += 6)) : ((n = c), 0 === er && ei(L)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt($) ? ((r = ','), $++) : ((r = c), 0 === er && ei(m)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if (((i = []), (a = el()) !== c)) for (; a !== c; ) i.push(a), (a = el());
                                                                                    else i = c;
                                                                                    if (i !== c)
                                                                                        e = n = {
                                                                                            type: 'selectFormat',
                                                                                            options: i
                                                                                        };
                                                                                    else ($ = e), (e = c);
                                                                                } else ($ = e), (e = c);
                                                                            } else ($ = e), (e = c);
                                                                        } else ($ = e), (e = c);
                                                                    } else ($ = e), (e = c);
                                                                    return e;
                                                                })()),
                                                            e
                                                        );
                                                    })()) !== c
                                                        ? (i = a = [a, s, o])
                                                        : (($ = i), (i = c)),
                                                    i === c && (i = null),
                                                    i !== c)
                                                ) {
                                                    if ((a = ed()) !== c) {
                                                        if ((125 === t.charCodeAt($) ? ((s = '}'), $++) : ((s = c), 0 === er && ei(I)), s !== c)) {
                                                            e = n = {
                                                                type: 'argumentElement',
                                                                id: r,
                                                                format: (l = i) && l[2]
                                                            };
                                                        } else ($ = e), (e = c);
                                                    } else ($ = e), (e = c);
                                                } else ($ = e), (e = c);
                                            } else ($ = e), (e = c);
                                        } else ($ = e), (e = c);
                                    } else ($ = e), (e = c);
                                } else ($ = e), (e = c);
                                return e;
                            })()),
                        e
                    );
                }
                function el() {
                    var e, n, r, i, a, s, o, l, u, d;
                    if (((e = $), (n = ed()) !== c)) {
                        if (((o = $), (l = $), 61 === t.charCodeAt($) ? ((u = '='), $++) : ((u = c), 0 === er && ei(b)), u !== c && (d = ef()) !== c ? (l = u = [u, d]) : (($ = l), (l = c)), l !== c && (l = t.substring(o, $)), (o = l) === c && (o = ep()), (r = o) !== c)) {
                            if (ed() !== c) {
                                if ((123 === t.charCodeAt($) ? ((i = '{'), $++) : ((i = c), 0 === er && ei(p)), i !== c)) {
                                    if (ed() !== c) {
                                        if ((a = es()) !== c) {
                                            if (ed() !== c) {
                                                if ((125 === t.charCodeAt($) ? ((s = '}'), $++) : ((s = c), 0 === er && ei(I)), s !== c))
                                                    e = n = {
                                                        type: 'optionalFormatPattern',
                                                        selector: r,
                                                        value: a
                                                    };
                                                else ($ = e), (e = c);
                                            } else ($ = e), (e = c);
                                        } else ($ = e), (e = c);
                                    } else ($ = e), (e = c);
                                } else ($ = e), (e = c);
                            } else ($ = e), (e = c);
                        } else ($ = e), (e = c);
                    } else ($ = e), (e = c);
                    return e;
                }
                function eu() {
                    var e, n, r, i;
                    if (
                        ((e = $),
                        (n = (function () {
                            var e, n, r;
                            if (((e = $), t.substr($, 7) === M ? ((n = M), ($ += 7)) : ((n = c), 0 === er && ei(P)), n !== c)) {
                                if (ed() !== c) {
                                    if ((r = ef()) !== c) e = n = r;
                                    else ($ = e), (e = c);
                                } else ($ = e), (e = c);
                            } else ($ = e), (e = c);
                            return e;
                        })()) === c && (n = null),
                        n !== c)
                    ) {
                        if (ed() !== c) {
                            if (((r = []), (i = el()) !== c)) for (; i !== c; ) r.push(i), (i = el());
                            else r = c;
                            if (r !== c)
                                e = n = {
                                    type: 'pluralFormat',
                                    offset: n,
                                    options: r
                                };
                            else ($ = e), (e = c);
                        } else ($ = e), (e = c);
                    } else ($ = e), (e = c);
                    return e;
                }
                function ec() {
                    var e, n;
                    if ((er++, (e = []), w.test(t.charAt($)) ? ((n = t.charAt($)), $++) : ((n = c), 0 === er && ei(x)), n !== c)) for (; n !== c; ) e.push(n), w.test(t.charAt($)) ? ((n = t.charAt($)), $++) : ((n = c), 0 === er && ei(x));
                    else e = c;
                    return er--, e === c && ((n = c), 0 === er && ei(U)), e;
                }
                function ed() {
                    var e, n, r;
                    for (er++, e = $, n = [], r = ec(); r !== c; ) n.push(r), (r = ec());
                    return n !== c && (n = t.substring(e, $)), (e = n), er--, e === c && ((n = c), 0 === er && ei(G)), e;
                }
                function e_() {
                    var e;
                    return k.test(t.charAt($)) ? ((e = t.charAt($)), $++) : ((e = c), 0 === er && ei(B)), e;
                }
                function eE() {
                    var e;
                    return F.test(t.charAt($)) ? ((e = t.charAt($)), $++) : ((e = c), 0 === er && ei(V)), e;
                }
                function ef() {
                    var e, n, r, i, a, s;
                    if (((e = $), 48 === t.charCodeAt($) ? ((n = '0'), $++) : ((n = c), 0 === er && ei(H)), n === c)) {
                        if (((n = $), (r = $), Z.test(t.charAt($)) ? ((i = t.charAt($)), $++) : ((i = c), 0 === er && ei(Y)), i !== c)) {
                            for (a = [], s = e_(); s !== c; ) a.push(s), (s = e_());
                            a !== c ? (r = i = [i, a]) : (($ = r), (r = c));
                        } else ($ = r), (r = c);
                        r !== c && (r = t.substring(n, $)), (n = r);
                    }
                    if (n !== c) n = parseInt(n, 10);
                    return (e = n);
                }
                function eh() {
                    var e, n, r, i, a, s, o, l;
                    if ((j.test(t.charAt($)) ? ((e = t.charAt($)), $++) : ((e = c), 0 === er && ei(W)), e === c && ((e = $), '\\\\' === t.substr($, 2) ? ((n = '\\\\'), ($ += 2)) : ((n = c), 0 === er && ei(K)), n !== c && (n = '\\'), (e = n) === c && ((e = $), '\\#' === t.substr($, 2) ? ((n = '\\#'), ($ += 2)) : ((n = c), 0 === er && ei(z)), n !== c && (n = '\\#'), (e = n) === c && ((e = $), '\\{' === t.substr($, 2) ? ((n = '\\{'), ($ += 2)) : ((n = c), 0 === er && ei(q)), n !== c && (n = '{'), (e = n) === c && ((e = $), '\\}' === t.substr($, 2) ? ((n = '\\}'), ($ += 2)) : ((n = c), 0 === er && ei(Q)), n !== c && (n = '}'), (e = n) === c)))))) {
                        if (((e = $), '\\u' === t.substr($, 2) ? ((n = '\\u'), ($ += 2)) : ((n = c), 0 === er && ei(X)), n !== c)) {
                            if (((r = $), (i = $), (a = eE()) !== c && (s = eE()) !== c && (o = eE()) !== c && (l = eE()) !== c ? (i = a = [a, s, o, l]) : (($ = i), (i = c)), i !== c && (i = t.substring(r, $)), (r = i) !== c)) e = n = String.fromCharCode(parseInt(r, 16));
                            else ($ = e), (e = c);
                        } else ($ = e), (e = c);
                    }
                    return e;
                }
                function ep() {
                    var e, t, n;
                    if (((e = $), (t = []), (n = eh()) !== c)) for (; n !== c; ) t.push(n), (n = eh());
                    else t = c;
                    if (t !== c) t = t.join('');
                    return (e = t);
                }
                if ((l = _()) !== c && $ === t.length) return l;
                throw (
                    (l !== c &&
                        $ < t.length &&
                        ei({
                            type: 'end',
                            description: 'end of input'
                        }),
                    (n = null),
                    (r = en),
                    (s =
                        (J !== (a = i = et) &&
                            (J > a &&
                                ((J = 0),
                                (ee = {
                                    line: 1,
                                    column: 1,
                                    seenCR: !1
                                })),
                            !(function (e, n, r) {
                                var i, a;
                                for (i = n; i < r; i++) '\n' === (a = t.charAt(i)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === a || '\u2028' === a || '\u2029' === a ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
                            })(ee, J, a),
                            (J = a)),
                        ee)),
                    (o = i < t.length ? t.charAt(i) : null),
                    null !== r &&
                        !(function (e) {
                            var t = 1;
                            for (
                                e.sort(function (e, t) {
                                    return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                                });
                                t < e.length;

                            )
                                e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                        })(r),
                    new e(
                        (function (e, t) {
                            var n,
                                r,
                                i = Array(e.length);
                            for (r = 0; r < e.length; r++) i[r] = e[r].description;
                            return (
                                (n = e.length > 1 ? i.slice(0, -1).join(', ') + ' or ' + i[e.length - 1] : i[0]),
                                'Expected ' +
                                    n +
                                    ' but ' +
                                    (t
                                        ? '"' +
                                          (function (e) {
                                              function t(e) {
                                                  return e.charCodeAt(0).toString(16).toUpperCase();
                                              }
                                              return e
                                                  .replace(/\\/g, '\\\\')
                                                  .replace(/"/g, '\\"')
                                                  .replace(/\x08/g, '\\b')
                                                  .replace(/\t/g, '\\t')
                                                  .replace(/\n/g, '\\n')
                                                  .replace(/\f/g, '\\f')
                                                  .replace(/\r/g, '\\r')
                                                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                                                      return '\\x0' + t(e);
                                                  })
                                                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                                                      return '\\x' + t(e);
                                                  })
                                                  .replace(/[\u0180-\u0FFF]/g, function (e) {
                                                      return '\\u0' + t(e);
                                                  })
                                                  .replace(/[\u1080-\uFFFF]/g, function (e) {
                                                      return '\\u' + t(e);
                                                  });
                                          })(t) +
                                          '"'
                                        : 'end of input') +
                                    ' found.'
                            );
                        })(r, o),
                        r,
                        o,
                        i,
                        s.line,
                        s.column
                    ))
                );
            }
        }
    );
})();
