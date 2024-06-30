n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120), n(724458);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(63063), c = n(256569), d = n(858457), u = n(273504), _ = n(981631), E = n(689938), I = n(514128);
let T = o.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_REGEX);
function m(e) {
    let {
        hasErrors: t,
        text: n,
        errorText: a
    } = e;
    return t ? (0, s.jsx)('div', {
        className: r()(I.subtext),
        children: (0, s.jsx)(l.Text, {
            className: r()(I.errorSpan),
            variant: 'text-xs/medium',
            color: 'text-danger',
            children: null != a ? a : E.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_HELP.format({ helpArticle: T })
        })
    }) : (0, s.jsx)(l.Text, {
        className: I.subtext,
        variant: 'text-xs/medium',
        color: 'text-muted',
        children: n
    });
}
function N(e) {
    var t, n;
    let {
            rule: i,
            onChangeText: l,
            className: o
        } = e, {
            patterns: _,
            valueError: N,
            errors: S,
            validatePatternsChanged: h,
            validateEditingValueChanged: g
        } = (0, d.Z)(i, l), [C] = a.useState(() => ({
            tags: _,
            value: '',
            selections: [],
            isSelecting: !1
        })), x = a.useMemo(() => S.reduce((e, t) => {
            let {
                pattern: n,
                message: s,
                description: a,
                erroringCharacterLength: i = n.length,
                erroringCharacterOffset: r = 0
            } = t;
            return null == _.find(e => e === n) ? e : (e[n] = {
                value: n,
                message: null != a ? a : s,
                erroringCharacterLength: i,
                erroringCharacterOffset: r
            }, e);
        }, {}), [
            S,
            _
        ]), p = a.useCallback(e => {
            h(e, _);
        }, [
            h,
            _
        ]), R = a.useCallback(e => {
            g(e);
        }, [g]);
    return (0, s.jsxs)('div', {
        className: r()(I.keywordsContainer, o),
        children: [
            (0, s.jsx)(c.Z, {
                placeholder: '^b(a|@)d$\nw(o|0)rd(s|$)',
                initialValue: C,
                onChangeTags: p,
                onChangeNewTagValue: R,
                tagErrors: x,
                maxTags: u.VW
            }),
            (0, s.jsx)(m, {
                text: E.Z.Messages.GUILD_AUTOMOD_REGEX_SUBTEXT.format({ helpArticle: T }),
                hasErrors: S.length > 0 || null != N,
                errorText: null !== (n = null === (t = S.find(e => {
                    let {pattern: t} = e;
                    return t === d.r;
                })) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : null == N ? void 0 : N.message
            })
        ]
    });
}
