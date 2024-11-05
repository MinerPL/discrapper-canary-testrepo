n.d(t, {
    HI: function () {
        return l;
    },
    gm: function () {
        return o;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(588468);
n(419922);
var s = n(388032);
function o(e) {
    let { titleWithQuery: t, titleWithoutQuery: n, query: i, getQuery: o, headerClassName: l, headerTrailingContent: u } = e,
        c = i.length > 0 ? s.intl.formatToPlainString(t, { prefix: o(i) }) : n;
    return (0, r.jsx)(
        a.ZP.Title,
        {
            className: l,
            title: c,
            children: u
        },
        'autocomplete-title-'.concat(c)
    );
}
function l(e) {
    let { query: t, selectedIndex: n, autocompletes: a, onHover: s, onClick: l, titleWithQuery: u, titleWithoutQuery: c, Component: d, getProps: f, getQuery: _, key: h, indexOffset: p = 0, headerClassName: m, headerTrailingContent: g, footer: E } = e;
    if (null == E && (null == a || 0 === a.length)) return null;
    let v =
        null == a
            ? void 0
            : a.map((e, t) => {
                  let r = t + p,
                      a = f(e, r);
                  return (0, i.createElement)(d, {
                      onClick: l,
                      onHover: s,
                      selected: n === r,
                      index: r,
                      ...a,
                      key: a.key
                  });
              });
    return (0, r.jsxs)(
        i.Fragment,
        {
            children: [
                null != u && null != c
                    ? o({
                          titleWithQuery: u,
                          titleWithoutQuery: c,
                          query: t,
                          getQuery: _,
                          headerClassName: m,
                          headerTrailingContent: g
                      })
                    : null,
                v,
                E
            ]
        },
        h
    );
}
