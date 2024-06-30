n(653041);
var r = n(735250);
n(470079);
var i = n(998698), a = n(156361), o = n(877565), s = n(590921), l = n(689938);
let u = { results: { commandOptions: [] } }, c = {
        stores: [i.Z],
        focusMode: s.QZ.AUTO_WHEN_FILTERED,
        matches: (e, t, n, r, a) => !(r || null == i.Z.getActiveCommand(e.id) || null != i.Z.getActiveOption(e.id)),
        queryResults(e, t, n, r, a) {
            let o = i.Z.getActiveCommand(e.id);
            if ((null == o ? void 0 : o.options) == null)
                return u;
            let s = i.Z.getOptionStates(e.id), l = o.options.filter(e => {
                    var t;
                    return e.displayName.startsWith(n) && !(null === (t = s[e.name]) || void 0 === t ? void 0 : t.hasValue);
                });
            return 0 === l.length ? u : { results: { commandOptions: l } };
        },
        renderResults(e) {
            let {
                    results: {commandOptions: t},
                    selectedIndex: n,
                    query: i,
                    onHover: s,
                    onClick: u
                } = e, c = [], d = [];
            t.forEach(e => {
                (e.required ? c : d).push(e);
            });
            let _ = c.length > 0 ? (0, o.HI)({
                    query: i,
                    selectedIndex: n,
                    autocompletes: c,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: l.Z.Messages.REQUIRED_OPTIONS_MATCHING,
                    titleWithoutQuery: l.Z.Messages.REQUIRED_OPTIONS,
                    Component: a.ZP.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName,
                        description: e.displayDescription
                    }),
                    getQuery: e => e,
                    key: 'required-options'
                }) : null, E = d.length > 0 ? (0, o.HI)({
                    query: i,
                    selectedIndex: n,
                    autocompletes: d,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: l.Z.Messages.OPTIONS_MATCHING,
                    titleWithoutQuery: c.length > 0 ? l.Z.Messages.OTHER_OPTIONS : l.Z.Messages.OPTIONS,
                    Component: a.ZP.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName,
                        description: e.displayDescription
                    }),
                    getQuery: e => e,
                    key: 'optional-options',
                    indexOffset: c.length
                }) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    _,
                    E
                ]
            });
        },
        onSelect(e) {
            let {
                    results: {commandOptions: t},
                    index: n,
                    options: r
                } = e, i = t[n];
            return r.insertText(function (e) {
                return ''.concat(e.displayName, ':');
            }(i)), { type: s.z2.COMMAND_OPTION };
        }
    };
t.Z = c;
