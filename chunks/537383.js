var n = a(735250),
    l = a(470079),
    s = a(461745),
    r = a(990801);
let i = l.forwardRef(function (e, t) {
    let { query: a, onQueryChange: l, onRemoveTag: i, onSelect: o, onSelectionChange: c, selectedSection: d, selectedRow: u, tags: m, sections: h, placeholder: S = '', focusAfterReady: x, isReady: T, 'aria-labelledby': g, 'aria-controls': f } = e;
    return (0, n.jsx)(s.ZP, {
        autoFocus: !0,
        className: r.searchBar,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: i,
        selectedSection: d,
        selectedRow: u,
        onSelect: o,
        onSelectionChange: c,
        placeholder: 0 === m.length ? S : '',
        query: a,
        ref: t,
        size: s.ZP.Sizes.MEDIUM,
        tags: m,
        sections: h,
        focusAfterReady: x,
        isReady: T,
        inputProps: {
            'aria-labelledby': g,
            'aria-controls': f,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});
t.Z = i;
