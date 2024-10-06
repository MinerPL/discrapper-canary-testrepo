n(757143), n(627494);
var r = n(512722),
    i = n.n(r),
    a = n(302454),
    s = n.n(a);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = '(?:[*-]|\\d+\\.)',
    c = '(%INDENT_CAPTURE_PATTERN%)(' + u + ') +',
    d = RegExp('^' + c.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    _ = c + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + u + ' )[^\\n]*)*(\n|$)',
    E = / *\n$/,
    f = RegExp('^( *)(' + u + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + u + ' )|$)'),
    h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    p = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    I = {
        ...s().defaultRules.list,
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= 11) return null;
            let n = null == t.prevCapture ? '' : t.prevCapture[0],
                r = l.exec(n);
            return null == r || h.test(r[0]) ? null : f.exec(e);
        },
        parse: (e, t, n) => {
            let r = e[2],
                a = r.length > 1,
                s = a ? Math.min(1000000000, Math.max(1, +r)) : void 0,
                l = e[0].replace(o, '\n'),
                u = d.exec(l),
                c = null != u ? u[0].length : 0,
                f = null != u ? u[1].length : 0,
                h = ' {'.concat(f, ',').concat(f + 1, '}'),
                I = RegExp(_.replaceAll('%INDENT_CAPTURE_PATTERN%', h), 'gm'),
                m = RegExp('^ {1,' + c + '}', 'gm'),
                T = l.match(I);
            i()(null != T, 'markup list items can not be parsed.');
            let S = !1;
            return {
                ordered: a,
                start: s,
                items: T.map((e, r) => {
                    let i;
                    let a = e.replace(d, '').replace(m, ''),
                        s = r === T.length - 1,
                        o = -1 !== a.indexOf('\n\n') || (s && S);
                    S = o;
                    let l = n.inline,
                        u = n._list,
                        c = n._listLevel;
                    (n._list = !0), (n._listLevel = (null != c ? c : 0) + 1), o ? ((n.inline = !1), (i = a.replace(E, '\n\n'))) : ((n.inline = !0), (i = a.replace(E, '')));
                    let _ = p(
                        t(i, {
                            ...n,
                            allowHeading: !1
                        })
                    );
                    return (n.inline = l), (n._list = u), (n._listLevel = c), _;
                })
            };
        }
    };
t.Z = I;
