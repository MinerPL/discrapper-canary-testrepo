n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(730671), c = n(689938), d = n(179113);
function u(e) {
    let {
            onChangeText: t,
            maxWordCount: n,
            className: i,
            textAreaClassName: u,
            subtitleText: _,
            initialValue: E
        } = e, I = a.useMemo(() => null != E ? E : [], [E]), {
            value: T,
            onChange: m,
            errorMessage: N
        } = (0, o.Z)(t, E, n);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: r()(d.keywordsContainer, i),
                children: [
                    (0, s.jsx)(l.TextAreaAutosize, {
                        className: r()(d.keywordsTextArea, u),
                        value: T,
                        onChange: m,
                        placeholder: c.Z.Messages.GUILD_AUTOMOD_KEYWORDS_PLACEHOLDER
                    }),
                    (0, s.jsx)(l.Text, {
                        className: d.keywordsCounter,
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: ''.concat(I.length, ' / ').concat(n)
                    })
                ]
            }),
            null != N ? (0, s.jsx)(l.Text, {
                className: r()(d.paddingTop, d.errorText),
                variant: 'text-xs/medium',
                color: 'text-danger',
                children: N
            }) : (0, s.jsx)(l.Text, {
                className: d.paddingTop,
                variant: 'text-xs/normal',
                color: 'header-secondary',
                children: null != _ ? _ : c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ENTRY_HINT
            })
        ]
    });
}
