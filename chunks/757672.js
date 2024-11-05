Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = o), (t.bindFormatValues = l);
let r = n(927882),
    i = n(11184),
    a = n(914193);
function s(e) {
    return '$' === e[0];
}
function o(e, t, n, s, u, c = {}, d, f) {
    var _;
    if (1 === t.length && 'string' == typeof t[0]) {
        e.pushLiteralText(t[0]);
        return;
    }
    for (let h of t) {
        if ('string' == typeof h) {
            e.pushLiteralText(h);
            continue;
        }
        let t = h[0];
        if (t === i.FormatJsNodeType.Pound) {
            if ('number' == typeof d) {
                let t = s.getNumberFormat(n).format(d);
                e.pushLiteralText(t);
            }
            continue;
        }
        let p = h[1];
        if (!(p in c) && '$' !== p[0]) throw new a.MissingValueError(p, f);
        let m = c[p];
        switch (t) {
            case i.FormatJsNodeType.Argument:
                'object' == typeof m || 'function' == typeof m ? e.pushObject(m) : e.pushLiteralText(String(m));
                break;
            case i.FormatJsNodeType.Date: {
                let t = h[2],
                    i = t in u.date ? u.date[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : u.time.medium;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(m));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let t = h[2],
                    i = t in u.time ? u.time[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(m));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let t = h[2],
                    i = t in u.number ? u.number[t] : null != t ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(t)) : void 0,
                    a = 'number' != typeof m ? m : m * (null !== (_ = null == i ? void 0 : i.scale) && void 0 !== _ ? _ : 1);
                e.pushLiteralText(s.getNumberFormat(n, i).format(a));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = h[2],
                    r = h[3],
                    i = l(e.constructor, t, n, s, u, c, d),
                    a = null != r ? l(e.constructor, r, n, s, u, c, d) : [];
                if ('$' === p[0]) e.pushRichTextTag(p, i, a);
                else {
                    if ('function' != typeof m) throw `expected a function type for a Tag formatting value, ${p}. got ${typeof m}: ${m}`;
                    let t = m(i);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = h[2],
                    r = m in t ? t[m] : t.other;
                if (null == r) throw `${m} is not a known option for select value ${p}. Valid options are ${Object.keys(t).join(', ')}`;
                o(e, r, n, s, u, c);
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = h[2],
                    r = h[3],
                    i = h[4],
                    a = (() => {
                        var e;
                        let a = `=${m}`;
                        return a in t ? t[a] : null !== (e = t[s.getPluralRules(n, { type: i }).select(m - (null != r ? r : 0))]) && void 0 !== e ? e : t.other;
                    })();
                if (null == a) throw `${m} is not a known option for plural value ${p}. Valid options are ${Object.keys(t).join(', ')}`;
                o(e, a, n, s, u, c, m - (null != r ? r : 0));
            }
        }
    }
}
function l(e, t, n, r, i, a = {}, s) {
    let l = new e();
    return 'string' == typeof t ? (l.pushLiteralText(t), l.finish()) : (o(l, t, n, r, i, a, s), l.finish());
}
t.FormatBuilder = class e {};
