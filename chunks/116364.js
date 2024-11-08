var r = n(735250);
n(470079);
var i = n(392711),
    a = n.n(i),
    s = n(788911),
    o = n(911969),
    l = n(174212),
    u = n(998698),
    c = n(667204),
    d = n(588468),
    _ = n(483360),
    E = n(877565),
    f = n(590921),
    h = n(689079),
    p = n(689938),
    m = n(292130),
    I = n(239840);
let T = { results: { choices: [] } },
    g = {
        results: {
            choices: [],
            isLoading: !0
        }
    },
    S = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })),
    A = {
        results: {
            choices: [],
            isError: !0
        }
    },
    N = a().debounce(c.Z, h.Fu, {
        leading: !0,
        trailing: !0
    }),
    v = {
        stores: [u.Z, l.Z],
        showEmpty: !0,
        matches(e, t, n, r, i) {
            let a = u.Z.getActiveOption(e.id);
            return i.commands !== f.L8.DISABLED && null != a && (a.type === o.jw.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || ((null == a ? void 0 : a.choices) != null && a.choices.length > 0));
        },
        queryResults(e, t, n, r, i) {
            var a;
            let s = u.Z.getActiveOption(e.id);
            if (null == s) return T;
            if (s.autocomplete) {
                if (i) {
                    let i = u.Z.getActiveCommand(e.id);
                    N({
                        command: i,
                        optionValues: r.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: s.name,
                                query: n
                            }
                        }
                    });
                }
                if (l.Z.getLastErrored(e.id)) return A;
                let a = l.Z.getAutocompleteChoices(e.id, s.name, n);
                return null == a ? g : { results: { choices: a } };
            }
            return {
                results: _.ZP.queryChoiceResults({
                    query: n,
                    choices: s.type === o.jw.BOOLEAN ? h.ak : null !== (a = s.choices) && void 0 !== a ? a : []
                })
            };
        },
        renderResults(e) {
            let {
                results: { choices: t, isLoading: n, isError: i },
                selectedIndex: a,
                query: o,
                onHover: l,
                onClick: u
            } = e;
            return i
                ? (0, r.jsx)(s.Z, {
                      message: p.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                      noResultsImageURL: I,
                      className: m.noAutocompleteResults
                  })
                : 0 !== t.length || n
                  ? (0, E.HI)({
                        query: o,
                        selectedIndex: a,
                        autocompletes: n ? S : t,
                        onHover: l,
                        onClick: u,
                        titleWithQuery: p.Z.Messages.OPTIONS_MATCHING,
                        titleWithoutQuery: p.Z.Messages.OPTIONS,
                        Component: n ? d.ZP.Loading : d.ZP.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName
                        }),
                        getQuery: (e) => e,
                        key: 'choice'
                    })
                  : (0, r.jsx)(s.Z, {
                        message: p.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                        noResultsImageURL: I,
                        className: m.noAutocompleteResults
                    });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: r
                } = e,
                i = t[n];
            return (
                r.insertText(
                    (function (e) {
                        return e.displayName;
                    })(i)
                ),
                { type: f.z2.CHOICE }
            );
        }
    };
t.Z = v;
