n(757143);
var r = n(512722),
    i = n.n(r),
    a = n(302454),
    s = n.n(a);
let o = /\n{2,}$/,
    l = /(?:^|\n)( *)$/,
    u = '(?:[*-]|\\d+\\.)',
    c = '( *)(' + u + ') +',
    d = RegExp('^' + c),
    _ = RegExp(c + '[^\\n]*(?:\\n(?!\\1' + u + ' )[^\\n]*)*(\n|$)', 'gm'),
    E = / *\n$/,
    f = RegExp('^( *)(' + u + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + u + ' )|$)'),
    h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    p = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    m = {
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
                l = e[0].replace(o, '\n').match(_);
            i()(null != l, 'markup list items can not be parsed.');
            let u = !1;
            return {
                ordered: a,
                start: s,
                items: l.map((e, r) => {
                    let i;
                    let a = d.exec(e),
                        s = RegExp('^ {1,' + (null != a ? a[0].length : 0) + '}', 'gm'),
                        o = e.replace(s, '').replace(d, ''),
                        c = r === l.length - 1,
                        _ = -1 !== o.indexOf('\n\n') || (c && u);
                    u = _;
                    let f = n.inline,
                        h = n._list,
                        m = n._listLevel;
                    (n._list = !0), (n._listLevel = (null != m ? m : 0) + 1), _ ? ((n.inline = !1), (i = o.replace(E, '\n\n'))) : ((n.inline = !0), (i = o.replace(E, '')));
                    let I = p(
                        t(i, {
                            ...n,
                            allowHeading: !1
                        })
                    );
                    return (n.inline = f), (n._list = h), (n._listLevel = m), I;
                })
            };
        }
    };
t.Z = m;
