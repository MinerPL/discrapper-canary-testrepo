n.d(t, {
    HI: function () {
        return o;
    },
    gm: function () {
        return s;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(588468);
function s(e) {
    let { titleWithQuery: t, titleWithoutQuery: n, query: i, getQuery: s, headerClassName: o, headerTrailingContent: l } = e,
        u = i.length > 0 ? t.format({ prefix: s(i) }) : n;
    return (0, r.jsx)(
        a.ZP.Title,
        {
            className: o,
            title: u,
            children: l
        },
        'autocomplete-title-'.concat(u)
    );
}
function o(e) {
    let { query: t, selectedIndex: n, autocompletes: a, onHover: o, onClick: l, titleWithQuery: u, titleWithoutQuery: c, Component: d, getProps: _, getQuery: E, key: f, indexOffset: h = 0, headerClassName: p, headerTrailingContent: m, footer: I } = e;
    if (null == I && (null == a || 0 === a.length)) return null;
    let T =
        null == a
            ? void 0
            : a.map((e, t) => {
                  let r = t + h,
                      a = _(e, r);
                  return (0, i.createElement)(d, {
                      onClick: l,
                      onHover: o,
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
                    ? s({
                          titleWithQuery: u,
                          titleWithoutQuery: c,
                          query: t,
                          getQuery: E,
                          headerClassName: p,
                          headerTrailingContent: m
                      })
                    : null,
                T,
                I
            ]
        },
        f
    );
}
n(419922);
