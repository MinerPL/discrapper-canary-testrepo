var r = n(302454), i = n.n(r), a = n(777547);
let o = /\n$/, s = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/, l = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ['-'],
        match: (e, t, n) => {
            let {showSubtextMarkdown: i} = a.m.getCurrentConfig({ location: 'MarkupSubtextRule' });
            return i ? null == n || '' === n || null != n.match(o) ? (0, r.anyScopeRegex)(s)(e, t, n) : null : null;
        },
        parse: function (e, t, n) {
            return { content: (0, r.parseInline)(t, e[1].trim(), n) };
        }
    };
t.Z = l;
