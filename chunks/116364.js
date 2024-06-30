var r = n(735250);
n(470079);
var i = n(392711), a = n.n(i), o = n(788911), s = n(911969), l = n(174212), u = n(998698), c = n(667204), d = n(156361), _ = n(483360), E = n(877565), f = n(590921), h = n(689079), p = n(689938), m = n(535175), I = n(239840);
let T = { results: { choices: [] } }, g = {
        results: {
            choices: [],
            isLoading: !0
        }
    }, S = Array.from({ length: 5 }, () => ({
        name: '',
        displayName: '',
        value: ''
    })), A = {
        results: {
            choices: [],
            isError: !0
        }
    }, N = a().debounce(c.Z, h.Fu, {
        leading: !0,
        trailing: !0
    }), v = {
        stores: [
            u.Z,
            l.Z
        ],
        showEmpty: !0,
        matches(e, t, n, r, i) {
            let a = u.Z.getActiveOption(e.id);
            return i.commands !== f.L8.DISABLED && null != a && (a.type === s.jw.BOOLEAN || !!(null == a ? void 0 : a.autocomplete) || (null == a ? void 0 : a.choices) != null && a.choices.length > 0);
        },
        queryResults(e, t, n, r, i) {
            var a;
            let o = u.Z.getActiveOption(e.id);
            if (null == o)
                return T;
            if (o.autocomplete) {
                if (i) {
                    let i = u.Z.getActiveCommand(e.id);
                    N({
                        command: i,
                        optionValues: r.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: o.name,
                                query: n
                            }
                        }
                    });
                }
                if (l.Z.getLastErrored(e.id))
                    return A;
                let a = l.Z.getAutocompleteChoices(e.id, o.name, n);
                return null == a ? g : { results: { choices: a } };
            }
            return {
                results: _.ZP.queryChoiceResults({
                    query: n,
                    choices: o.type === s.jw.BOOLEAN ? h.ak : null !== (a = o.choices) && void 0 !== a ? a : []
                })
            };
        },
        renderResults(e) {
            let {
                results: {
                    choices: t,
                    isLoading: n,
                    isError: i
                },
                selectedIndex: a,
                query: s,
                onHover: l,
                onClick: u
            } = e;
            return i ? (0, r.jsx)(o.Z, {
                message: p.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                noResultsImageURL: I,
                className: m.noAutocompleteResults
            }) : 0 !== t.length || n ? (0, E.HI)({
                query: s,
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
                getQuery: e => e,
                key: 'choice'
            }) : (0, r.jsx)(o.Z, {
                message: p.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                noResultsImageURL: I,
                className: m.noAutocompleteResults
            });
        },
        onSelect(e) {
            let {
                    results: {choices: t},
                    index: n,
                    options: r
                } = e, i = t[n];
            return r.insertText(function (e) {
                return e.displayName;
            }(i)), { type: f.z2.CHOICE };
        }
    };
t.Z = v;
