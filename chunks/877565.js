n.d(t, {
    HI: function () {
        return s;
    },
    gm: function () {
        return o;
    }
});
var r = n(735250), i = n(470079);
n(419922);
var a = n(156361);
function o(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: i,
            getQuery: o,
            headerClassName: s,
            headerTrailingContent: l
        } = e, u = i.length > 0 ? t.format({ prefix: o(i) }) : n;
    return (0, r.jsx)(a.ZP.Title, {
        className: s,
        title: u,
        children: l
    }, 'autocomplete-title-'.concat(u));
}
function s(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: a,
        onHover: s,
        onClick: l,
        titleWithQuery: u,
        titleWithoutQuery: c,
        Component: d,
        getProps: _,
        getQuery: E,
        key: f,
        indexOffset: h = 0,
        headerClassName: p,
        headerTrailingContent: m,
        footer: I
    } = e;
    if (null == I && (null == a || 0 === a.length))
        return null;
    let T = null == a ? void 0 : a.map((e, t) => {
        let r = t + h, a = _(e, r);
        return (0, i.createElement)(d, {
            onClick: l,
            onHover: s,
            selected: n === r,
            index: r,
            ...a,
            key: a.key
        });
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            null != u && null != c ? o({
                titleWithQuery: u,
                titleWithoutQuery: c,
                query: t,
                getQuery: E,
                headerClassName: p,
                headerTrailingContent: m
            }) : null,
            T,
            I
        ]
    }, f);
}
