n(653041);
var r = n(200651);
n(192379);
var i = n(998698),
    a = n(588468),
    s = n(877565),
    o = n(590921),
    l = n(388032);
let u = { results: { commandOptions: [] } },
    c = {
        stores: [i.Z],
        focusMode: o.QZ.AUTO_WHEN_FILTERED,
        matches: (e, t, n, r, a) => !(r || null == i.Z.getActiveCommand(e.id) || null != i.Z.getActiveOption(e.id)),
        queryResults(e, t, n, r, a) {
            let s = i.Z.getActiveCommand(e.id);
            if ((null == s ? void 0 : s.options) == null) return u;
            let o = i.Z.getOptionStates(e.id),
                l = s.options.filter((e) => {
                    var t;
                    return e.displayName.startsWith(n) && !(null === (t = o[e.name]) || void 0 === t ? void 0 : t.hasValue);
                });
            return 0 === l.length ? u : { results: { commandOptions: l } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: t },
                    selectedIndex: n,
                    query: i,
                    onHover: o,
                    onClick: u
                } = e,
                c = [],
                d = [];
            t.forEach((e) => {
                (e.required ? c : d).push(e);
            });
            let f =
                    c.length > 0
                        ? (0, s.HI)({
                              query: i,
                              selectedIndex: n,
                              autocompletes: c,
                              onHover: o,
                              onClick: u,
                              titleWithQuery: l.t['iO/jnJ'],
                              titleWithoutQuery: l.intl.string(l.t['7II2Gx']),
                              Component: a.ZP.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'required-options'
                          })
                        : null,
                _ =
                    d.length > 0
                        ? (0, s.HI)({
                              query: i,
                              selectedIndex: n,
                              autocompletes: d,
                              onHover: o,
                              onClick: u,
                              titleWithQuery: l.t.pg0anJ,
                              titleWithoutQuery: c.length > 0 ? l.intl.string(l.t.TpDXm5) : l.intl.string(l.t['+1H47u']),
                              Component: a.ZP.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'optional-options',
                              indexOffset: c.length
                          })
                        : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [f, _]
            });
        },
        onSelect(e) {
            let {
                    results: { commandOptions: t },
                    index: n,
                    options: r
                } = e,
                i = t[n];
            return (
                r.insertText(
                    (function (e) {
                        return ''.concat(e.displayName, ':');
                    })(i)
                ),
                { type: o.z2.COMMAND_OPTION }
            );
        }
    };
t.Z = c;
