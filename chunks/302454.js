var t, n;
(t = 0),
    (n = function () {
        var e,
            t,
            n,
            r,
            i,
            a,
            s,
            o,
            l = /\r\n?/g,
            u = /\t/g,
            c = /\f/g,
            d = function (e) {
                return e.replace(l, '\n').replace(c, '').replace(u, '    ');
            },
            _ = function (e, t) {
                var n = e || {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n;
            },
            E = function (e, t) {
                var n,
                    r = Object.keys(e).filter(function (t) {
                        var n = e[t];
                        if (null == n || null == n.match) return !1;
                        var r = n.order;
                        return ('number' != typeof r || !isFinite(r)) && 'undefined' != typeof console && console.warn('simple-markdown: Invalid order for rule `' + t + '`: ' + String(r)), !0;
                    });
                r.sort(function (t, n) {
                    var r = e[t],
                        i = e[n],
                        a = r.order,
                        s = i.order;
                    if (a !== s) return a - s;
                    var o = r.quality ? 0 : 1,
                        l = i.quality ? 0 : 1;
                    if (o !== l) return o - l;
                    if (t < n) return -1;
                    if (t > n) return 1;
                    else return 0;
                });
                for (var i = new Map(), a = [], s = 0; s < r.length; s++) {
                    var o = r[s],
                        l = e[o].requiredFirstCharacters;
                    null == l
                        ? a.push(o)
                        : l.map((e) => {
                              let t = e.charCodeAt(0);
                              !i.has(t) && i.set(t, []), i.get(t).push(o);
                          });
                }
                var u = function (t, s) {
                        var o = [];
                        for (n = s = s || n; t; ) {
                            for (var l = null, c = null, d = null, _ = -100000, E = 100000, f = [i.get(t.charCodeAt(0)), a], h = 0; h < f.length; h++) {
                                var p = f[h];
                                if (null != p)
                                    for (var m = 0; m < p.length; m++) {
                                        var I = p[m],
                                            T = e[I],
                                            g = T.order;
                                        if (g > E) break;
                                        var S = null == s.prevCapture ? '' : s.prevCapture[0],
                                            A = T.match(t, s, S);
                                        if (A) {
                                            var N = T.quality ? T.quality(A, s, S) : 0;
                                            (g < E || N > _) && ((l = I), (c = T), (d = A), (_ = N), (E = g));
                                        }
                                    }
                            }
                            if (null == c || null == d) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + r[r.length - 1] + "'. It seems to not match the following source:\n" + t);
                            if (d.index) throw Error('`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?');
                            var v = c.parse(d, u, s);
                            Array.isArray(v) ? Array.prototype.push.apply(o, v) : (null == v.type && (v.type = l), o.push(v)), (s.prevCapture = d), (t = t.substring(s.prevCapture[0].length));
                        }
                        return o;
                    },
                    c = function (e, r) {
                        return !(n = _(r, t)).inline && !n.disableAutoBlockNewlines && (e += '\n\n'), (n.prevCapture = null), u(d(e), n);
                    };
                return (u.rules = e), (c.rules = e), c;
            },
            f = function (e) {
                var t = function (t, n) {
                    return n.inline ? e.exec(t) : null;
                };
                return (t.regex = e), t;
            },
            h = function (e) {
                var t = function (t, n) {
                    return n.inline ? null : e.exec(t);
                };
                return (t.regex = e), t;
            },
            p = function (e) {
                var t = function (t, n) {
                    return e.exec(t);
                };
                return (t.regex = e), t;
            },
            m = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
            I = function (e, t, n) {
                return {
                    $$typeof: m,
                    type: e,
                    key: null == t ? void 0 : t,
                    ref: null,
                    props: n,
                    _owner: null
                };
            },
            T = function (e, t, n, r) {
                r = void 0 === r || r;
                var i = '';
                for (var a in (n = n || {})) {
                    var s = n[a];
                    Object.prototype.hasOwnProperty.call(n, a) && s && (i += ' ' + v(a) + '="' + v(s) + '"');
                }
                var o = '<' + e + i + '>';
                return r ? o + t + '</' + e + '>' : o;
            },
            g = {},
            S = function (e) {
                if (null == e) return null;
                try {
                    var t = new URL(e, 'https://localhost').protocol;
                    if (0 === t.indexOf('javascript:') || 0 === t.indexOf('vbscript:') || 0 === t.indexOf('data:')) return null;
                } catch (e) {
                    return null;
                }
                return e;
            },
            A = /[<>&"']/g,
            N = {
                '<': '&lt;',
                '>': '&gt;',
                '&': '&amp;',
                '"': '&quot;',
                "'": '&#x27;',
                '/': '&#x2F;',
                '`': '&#96;'
            },
            v = function (e) {
                return String(e).replace(A, function (e) {
                    return N[e];
                });
            },
            O = /\\([^0-9A-Za-z\s])/g,
            R = function (e) {
                return e.replace(O, '$1');
            },
            C = function (e, t, n) {
                var r = n.inline || !1;
                n.inline = !0;
                var i = e(t, n);
                return (n.inline = r), i;
            },
            y = function (e, t, n) {
                return { content: C(t, e[1], n) };
            },
            D = function () {
                return {};
            },
            L = '(?:[*+-]|\\d+\\.)',
            b = '( *)(' + L + ') +',
            M = RegExp('^' + b),
            P = RegExp(b + '[^\\n]*(?:\\n(?!\\1' + L + ' )[^\\n]*)*(\n|$)', 'gm'),
            U = /\n{2,}$/,
            w = /^ (?= *`)|(` *) $/g,
            x = / *\n+$/,
            G = RegExp('^( *)(' + L + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + L + ' )\\n*|\\s*\n*$)'),
            k = /(?:^|\n)( *)$/;
        var B =
                ((e = /^ *\| *| *\| *$/g),
                (t = / *$/),
                (n = /^ *-+: *$/),
                (r = /^ *:-+: *$/),
                (i = /^ *:-+ *$/),
                (a = function (e) {
                    if (n.test(e)) return 'right';
                    if (r.test(e)) return 'center';
                    if (i.test(e)) return 'left';
                    else return null;
                }),
                (s = function (e, n, r, i) {
                    var a = r.inTable;
                    r.inTable = !0;
                    var s = n(e.trim(), r);
                    r.inTable = a;
                    var o = [[]];
                    return (
                        s.forEach(function (e, n) {
                            'tableSeparator' === e.type ? (!i || (0 !== n && n !== s.length - 1)) && o.push([]) : ('text' === e.type && (null == s[n + 1] || 'tableSeparator' === s[n + 1].type) && (e.content = e.content.replace(t, '')), o[o.length - 1].push(e));
                        }),
                        o
                    );
                }),
                {
                    parseTable: (o = function (t) {
                        return function (n, r, i) {
                            i.inline = !0;
                            var o,
                                l,
                                u,
                                c,
                                d,
                                _,
                                E,
                                f = s(n[1], r, i, t);
                            var h = ((o = n[2]), (l = 0), (u = 0), t && (o = o.replace(e, '')), o.trim().split('|').map(a));
                            var p =
                                ((c = n[3]),
                                (d = r),
                                (_ = i),
                                (E = t),
                                c
                                    .trim()
                                    .split('\n')
                                    .map(function (e) {
                                        return s(e, d, _, E);
                                    }));
                            return (
                                (i.inline = !1),
                                {
                                    type: 'table',
                                    header: f,
                                    align: h,
                                    cells: p
                                }
                            );
                        };
                    })(!0),
                    parseNpTable: o(!1),
                    TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                    NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                }),
            F = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
            V = '\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',
            H = /mailto:/i,
            Z = function (e, t, n) {
                var r = (e[2] || e[1]).replace(/\s+/g, ' ').toLowerCase();
                if (t._defs && t._defs[r]) {
                    var i = t._defs[r];
                    (n.target = i.target), (n.title = i.title);
                }
                return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
            },
            Y = !1;
        try {
            RegExp('(?<=a)'), RegExp('(?<!a)'), (Y = !0);
        } catch (e) {}
        var j = 0,
            W = {
                Array: {
                    react: function (e, t, n) {
                        for (var r = n.key, i = [], a = 0, s = 0; a < e.length; a++, s++) {
                            n.key = '' + a;
                            var o = e[a];
                            if ('text' === o.type)
                                for (
                                    o = {
                                        type: 'text',
                                        content: o.content
                                    };
                                    a + 1 < e.length && 'text' === e[a + 1].type;
                                    a++
                                )
                                    o.content += e[a + 1].content;
                            i.push(t(o, n));
                        }
                        return (n.key = r), i;
                    },
                    html: function (e, t, n) {
                        for (var r = '', i = 0; i < e.length; i++) {
                            var a = e[i];
                            if ('text' === a.type)
                                for (
                                    a = {
                                        type: 'text',
                                        content: a.content
                                    };
                                    i + 1 < e.length && 'text' === e[i + 1].type;
                                    i++
                                )
                                    a.content += e[i + 1].content;
                            r += t(a, n);
                        }
                        return r;
                    }
                },
                heading: {
                    order: j++,
                    match: h(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            level: e[1].length,
                            content: C(t, e[2].trim(), n)
                        };
                    },
                    react: function (e, t, n) {
                        return I('h' + e.level, n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('h' + e.level, t(e.content, n));
                    }
                },
                nptable: {
                    order: j++,
                    match: h(B.NPTABLE_REGEX),
                    parse: B.parseNpTable,
                    react: null,
                    html: null
                },
                lheading: {
                    order: j++,
                    match: h(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            type: 'heading',
                            level: '=' === e[2] ? 1 : 2,
                            content: C(t, e[1], n)
                        };
                    },
                    react: null,
                    html: null
                },
                hr: {
                    order: j++,
                    match: h(/^( *[-*_]){3,} *(?:\n *)+\n/),
                    parse: D,
                    react: function (e, t, n) {
                        return I('hr', n.key, g);
                    },
                    html: function (e, t, n) {
                        return '<hr>';
                    }
                },
                codeBlock: {
                    order: j++,
                    match: h(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            lang: void 0,
                            content: e[0].replace(/^    /gm, '').replace(/\n+$/, '')
                        };
                    },
                    react: function (e, t, n) {
                        var r = e.lang ? 'markdown-code-' + e.lang : void 0;
                        return I('pre', n.key, {
                            children: I('code', null, {
                                className: r,
                                children: e.content
                            })
                        });
                    },
                    html: function (e, t, n) {
                        var r = e.lang ? 'markdown-code-' + e.lang : void 0,
                            i = T('code', v(e.content), { class: r });
                        return T('pre', i);
                    }
                },
                fence: {
                    order: j++,
                    match: h(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            type: 'codeBlock',
                            lang: e[2] || void 0,
                            content: e[3]
                        };
                    },
                    react: null,
                    html: null
                },
                blockQuote: {
                    order: j++,
                    match: h(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                    parse: function (e, t, n) {
                        return { content: t(e[0].replace(/^ *> ?/gm, ''), n) };
                    },
                    react: function (e, t, n) {
                        return I('blockquote', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('blockquote', t(e.content, n));
                    }
                },
                list: {
                    order: j++,
                    match: function (e, t) {
                        var n = null == t.prevCapture ? '' : t.prevCapture[0],
                            r = k.exec(n),
                            i = t._list || !t.inline;
                        return r && i ? ((e = r[1] + e), G.exec(e)) : null;
                    },
                    parse: function (e, t, n) {
                        var r = e[2],
                            i = r.length > 1,
                            a = i ? +r : void 0,
                            s = e[0].replace(U, '\n').match(P),
                            o = !1;
                        return {
                            ordered: i,
                            start: a,
                            items: s.map(function (e, r) {
                                var i,
                                    a = M.exec(e),
                                    l = RegExp('^ {1,' + (a ? a[0].length : 0) + '}', 'gm'),
                                    u = e.replace(l, '').replace(M, ''),
                                    c = r === s.length - 1,
                                    d = -1 !== u.indexOf('\n\n') || (c && o);
                                o = d;
                                var _ = n.inline,
                                    E = n._list;
                                (n._list = !0), d ? ((n.inline = !1), (i = u.replace(x, '\n\n'))) : ((n.inline = !0), (i = u.replace(x, '')));
                                var f = t(i, n);
                                return (n.inline = _), (n._list = E), f;
                            })
                        };
                    },
                    react: function (e, t, n) {
                        return I(e.ordered ? 'ol' : 'ul', n.key, {
                            start: e.start,
                            children: e.items.map(function (e, r) {
                                return I('li', '' + r, { children: t(e, n) });
                            })
                        });
                    },
                    html: function (e, t, n) {
                        var r = e.items
                            .map(function (e) {
                                return T('li', t(e, n));
                            })
                            .join('');
                        return T(e.ordered ? 'ol' : 'ul', r, { start: e.start });
                    }
                },
                def: {
                    order: j++,
                    match: h(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                    parse: function (e, t, n) {
                        var r = e[1].replace(/\s+/g, ' ').toLowerCase(),
                            i = e[2],
                            a = e[3];
                        return (
                            n._refs &&
                                n._refs[r] &&
                                n._refs[r].forEach(function (e) {
                                    (e.target = i), (e.title = a);
                                }),
                            (n._defs = n._defs || {}),
                            (n._defs[r] = {
                                target: i,
                                title: a
                            }),
                            {
                                def: r,
                                target: i,
                                title: a
                            }
                        );
                    },
                    react: function () {
                        return null;
                    },
                    html: function () {
                        return '';
                    }
                },
                table: {
                    order: j++,
                    match: h(B.TABLE_REGEX),
                    parse: B.parseTable,
                    react: function (e, t, n) {
                        var r = function (t) {
                                return null == e.align[t] ? {} : { textAlign: e.align[t] };
                            },
                            i = e.header.map(function (e, i) {
                                return I('th', '' + i, {
                                    style: r(i),
                                    scope: 'col',
                                    children: t(e, n)
                                });
                            }),
                            a = e.cells.map(function (e, i) {
                                return I('tr', '' + i, {
                                    children: e.map(function (e, i) {
                                        return I('td', '' + i, {
                                            style: r(i),
                                            children: t(e, n)
                                        });
                                    })
                                });
                            });
                        return I('table', n.key, {
                            children: [I('thead', 'thead', { children: I('tr', null, { children: i }) }), I('tbody', 'tbody', { children: a })]
                        });
                    },
                    html: function (e, t, n) {
                        var r = function (t) {
                                return null == e.align[t] ? '' : 'text-align:' + e.align[t] + ';';
                            },
                            i = e.header
                                .map(function (e, i) {
                                    return T('th', t(e, n), {
                                        style: r(i),
                                        scope: 'col'
                                    });
                                })
                                .join(''),
                            a = e.cells
                                .map(function (e) {
                                    var i = e
                                        .map(function (e, i) {
                                            return T('td', t(e, n), { style: r(i) });
                                        })
                                        .join('');
                                    return T('tr', i);
                                })
                                .join(''),
                            s = T('thead', T('tr', i)),
                            o = T('tbody', a);
                        return T('table', s + o);
                    }
                },
                newline: {
                    order: j++,
                    requiredFirstCharacters: ['\n'],
                    match: h(/^(?:\n *)*\n/),
                    parse: D,
                    react: function (e, t, n) {
                        return '\n';
                    },
                    html: function (e, t, n) {
                        return '\n';
                    }
                },
                paragraph: {
                    order: j++,
                    match: h(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                    parse: y,
                    react: function (e, t, n) {
                        return I('div', n.key, {
                            className: 'paragraph',
                            children: t(e.content, n)
                        });
                    },
                    html: function (e, t, n) {
                        return T('div', t(e.content, n), { class: 'paragraph' });
                    }
                },
                escape: {
                    order: j++,
                    requiredFirstCharacters: ['\\'],
                    match: f(/^\\([^0-9A-Za-z\s])/),
                    parse: function (e, t, n) {
                        return {
                            type: 'text',
                            content: e[1]
                        };
                    },
                    react: null,
                    html: null
                },
                tableSeparator: {
                    order: j++,
                    match: function (e, t) {
                        return t.inTable ? /^ *\| */.exec(e) : null;
                    },
                    parse: function () {
                        return { type: 'tableSeparator' };
                    },
                    react: function () {
                        return ' | ';
                    },
                    html: function () {
                        return ' &vert; ';
                    }
                },
                autolink: {
                    order: j++,
                    requiredFirstCharacters: ['<'],
                    match: f(/^<([^: >]+:\/[^ >]+)>/),
                    parse: function (e, t, n) {
                        return {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: e[1]
                                }
                            ],
                            target: e[1]
                        };
                    },
                    react: null,
                    html: null
                },
                mailto: {
                    order: j++,
                    match: f(/^<([^ >]+@[^ >]+)>/),
                    parse: function (e, t, n) {
                        var r = e[1],
                            i = e[1];
                        return (
                            !H.test(i) && (i = 'mailto:' + i),
                            {
                                type: 'link',
                                content: [
                                    {
                                        type: 'text',
                                        content: r
                                    }
                                ],
                                target: i
                            }
                        );
                    },
                    react: null,
                    html: null
                },
                url: {
                    order: j++,
                    requiredFirstCharacters: ['h'],
                    match: f(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                    parse: function (e, t, n) {
                        return {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: e[1]
                                }
                            ],
                            target: e[1],
                            title: void 0
                        };
                    },
                    react: null,
                    html: null
                },
                link: {
                    order: j++,
                    requiredFirstCharacters: ['['],
                    match: f(RegExp('^\\[(' + F + ')\\]\\(' + V + '\\)')),
                    parse: function (e, t, n) {
                        return {
                            content: t(e[1], n),
                            target: R(e[2]),
                            title: e[3]
                        };
                    },
                    react: function (e, t, n) {
                        return I('a', n.key, {
                            href: S(e.target),
                            title: e.title,
                            children: t(e.content, n)
                        });
                    },
                    html: function (e, t, n) {
                        var r = {
                            href: S(e.target),
                            title: e.title
                        };
                        return T('a', t(e.content, n), r);
                    }
                },
                image: {
                    order: j++,
                    match: f(RegExp('^!\\[(' + F + ')\\]\\(' + V + '\\)')),
                    parse: function (e, t, n) {
                        return {
                            alt: e[1],
                            target: R(e[2]),
                            title: e[3]
                        };
                    },
                    react: function (e, t, n) {
                        return I('img', n.key, {
                            src: S(e.target),
                            alt: e.alt,
                            title: e.title
                        });
                    },
                    html: function (e, t, n) {
                        return T(
                            'img',
                            '',
                            {
                                src: S(e.target),
                                alt: e.alt,
                                title: e.title
                            },
                            !1
                        );
                    }
                },
                reflink: {
                    order: j++,
                    match: f(RegExp('^\\[(' + F + ')\\]\\s*\\[([^\\]]*)\\]')),
                    parse: function (e, t, n) {
                        return Z(e, n, {
                            type: 'link',
                            content: t(e[1], n)
                        });
                    },
                    react: null,
                    html: null
                },
                refimage: {
                    order: j++,
                    match: f(RegExp('^!\\[(' + F + ')\\]\\s*\\[([^\\]]*)\\]')),
                    parse: function (e, t, n) {
                        return Z(e, n, {
                            type: 'image',
                            alt: e[1]
                        });
                    },
                    react: null,
                    html: null
                },
                em: {
                    order: j,
                    match: f(RegExp((Y ? '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b' : '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b') + '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)')),
                    quality: function (e) {
                        return e[0].length + 0.2;
                    },
                    parse: function (e, t, n) {
                        return { content: t(e[2] || e[1], n) };
                    },
                    react: function (e, t, n) {
                        return I('em', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('em', t(e.content, n));
                    }
                },
                strong: {
                    order: j,
                    requiredFirstCharacters: ['*'],
                    match: f(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                    quality: function (e) {
                        return e[0].length + 0.1;
                    },
                    parse: y,
                    react: function (e, t, n) {
                        return I('strong', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('strong', t(e.content, n));
                    }
                },
                u: {
                    order: j++,
                    requiredFirstCharacters: ['_'],
                    match: f(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                    quality: function (e) {
                        return e[0].length;
                    },
                    parse: y,
                    react: function (e, t, n) {
                        return I('u', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('u', t(e.content, n));
                    }
                },
                del: {
                    order: j++,
                    requiredFirstCharacters: ['~'],
                    match: f(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                    parse: y,
                    react: function (e, t, n) {
                        return I('del', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return T('del', t(e.content, n));
                    }
                },
                inlineCode: {
                    order: j++,
                    requiredFirstCharacters: ['`'],
                    match: f(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                    parse: function (e, t, n) {
                        return { content: e[2].replace(w, '$1') };
                    },
                    react: function (e, t, n) {
                        return I('code', n.key, { children: e.content });
                    },
                    html: function (e, t, n) {
                        return T('code', v(e.content));
                    }
                },
                br: {
                    order: j++,
                    requiredFirstCharacters: [' '],
                    match: p(/^ {2,}\n/),
                    parse: D,
                    react: function (e, t, n) {
                        return I('br', n.key, g);
                    },
                    html: function (e, t, n) {
                        return '<br>';
                    }
                },
                text: {
                    order: j++,
                    match: p(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                    parse: function (e, t, n) {
                        return { content: e[0] };
                    },
                    react: function (e, t, n) {
                        return e.content;
                    },
                    html: function (e, t, n) {
                        return v(e.content);
                    }
                }
            },
            K = function (e, t, n) {
                if (!t) throw Error('simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`');
                var r,
                    i = (e.Array || W.Array)[t];
                if (!i) throw Error('simple-markdown: outputFor: to join nodes of type `' + t + '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.');
                var a = function (n, s) {
                    return ((r = s = s || r), Array.isArray(n)) ? i(n, a, s) : e[n.type][t](n, a, s);
                };
                return function (e, t) {
                    return a(e, (r = _(t, n)));
                };
            },
            z = E(W),
            q = function (e, t) {
                return ((t = t || {}).inline = !1), z(e, t);
            },
            Q = function (e, t) {
                var n = U.test(e);
                return ((t = t || {}).inline = !n), z(e, t);
            },
            X = K(W, 'react'),
            $ = K(W, 'html'),
            J = function (e, t) {
                return X(q(e, t), t);
            };
        return {
            defaultRules: W,
            parserFor: E,
            outputFor: K,
            inlineRegex: f,
            blockRegex: h,
            anyScopeRegex: p,
            parseInline: C,
            parseBlock: function (e, t, n) {
                var r = n.inline || !1;
                n.inline = !1;
                var i = e(t + '\n\n', n);
                return (n.inline = r), i;
            },
            markdownToReact: J,
            markdownToHtml: function (e, t) {
                return $(q(e, t), t);
            },
            ReactMarkdown: function (e) {
                var t = {};
                for (var n in e) 'source' !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.children = J(e.source)), I('div', null, t);
            },
            defaultBlockParse: q,
            defaultInlineParse: function (e, t) {
                return ((t = t || {}).inline = !0), z(e, t);
            },
            defaultImplicitParse: Q,
            defaultReactOutput: X,
            defaultHtmlOutput: $,
            preprocess: d,
            sanitizeText: v,
            sanitizeUrl: S,
            unescapeUrl: R,
            htmlTag: T,
            reactElement: I,
            defaultRawParse: z,
            ruleOutput: function (e, t) {
                return (
                    !t && 'undefined' != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                    function (n, r, i) {
                        return e[n.type][t](n, r, i);
                    }
                );
            },
            reactFor: function (e) {
                var t = function (n, r) {
                    if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                    for (var i = r.key, a = [], s = null, o = 0; o < n.length; o++) {
                        r.key = '' + o;
                        var l = t(n[o], r);
                        'string' == typeof l && 'string' == typeof s ? ((s += l), (a[a.length - 1] = s)) : (a.push(l), (s = l));
                    }
                    return (r.key = i), a;
                };
                return t;
            },
            htmlFor: function (e) {
                var t = function (n, r) {
                    return ((r = r || {}), Array.isArray(n))
                        ? n
                              .map(function (e) {
                                  return t(e, r);
                              })
                              .join('')
                        : e(n, t, r);
                };
                return t;
            },
            defaultParse: function () {
                return 'undefined' != typeof console && console.warn('defaultParse is deprecated, please use `defaultImplicitParse`'), Q.apply(null, arguments);
            },
            defaultOutput: function () {
                return 'undefined' != typeof console && console.warn('defaultOutput is deprecated, please use `defaultReactOutput`'), X.apply(null, arguments);
            }
        };
    }),
    (e.exports = n());
