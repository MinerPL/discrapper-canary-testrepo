var r = n(302454),
    i = n.n(r),
    a = n(777547);
let s = /\n$/,
    o = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    l = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, t, n) => {
            let { showSubtextMarkdown: i } = a.m.getCurrentConfig({ location: 'MarkupSubtextRule' });
            return i ? (null == n || '' === n || null != n.match(s) ? (0, r.anyScopeRegex)(o)(e, t, n) : null) : null;
        },
        parse: function (e, t, n) {
            return { content: (0, r.parseInline)(t, e[1].trim(), n) };
        }
    };
t.Z = l;
