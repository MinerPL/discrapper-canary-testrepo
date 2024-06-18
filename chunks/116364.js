"use strict";
var i = n(735250);
n(470079);
var r = n(392711),
  s = n.n(r),
  o = n(788911),
  a = n(911969),
  l = n(174212),
  u = n(998698),
  _ = n(667204),
  d = n(156361),
  c = n(483360),
  E = n(877565),
  I = n(590921),
  T = n(689079),
  h = n(689938),
  S = n(395208),
  f = n(239840);
let N = {
    results: {
      choices: []
    }
  },
  A = {
    results: {
      choices: [],
      isLoading: !0
    }
  },
  m = Array.from({
    length: 5
  }, () => ({
    name: "",
    displayName: "",
    value: ""
  })),
  O = {
    results: {
      choices: [],
      isError: !0
    }
  },
  R = s().debounce(_.Z, T.Fu, {
    leading: !0,
    trailing: !0
  }),
  C = {
    stores: [u.Z, l.Z],
    showEmpty: !0,
    matches(e, t, n, i, r) {
      let s = u.Z.getActiveOption(e.id);
      return r.commands !== I.L8.DISABLED && null != s && (s.type === a.jw.BOOLEAN || !!(null == s ? void 0 : s.autocomplete) || (null == s ? void 0 : s.choices) != null && s.choices.length > 0)
    },
    queryResults(e, t, n, i, r) {
      var s;
      let o = u.Z.getActiveOption(e.id);
      if (null == o) return N;
      if (o.autocomplete) {
        if (r) {
          let r = u.Z.getActiveCommand(e.id);
          R({
            command: r,
            optionValues: i.getCommandOptionValues(),
            context: {
              channel: e,
              guild: t,
              autocomplete: {
                name: o.name,
                query: n
              }
            }
          })
        }
        if (l.Z.getLastErrored(e.id)) return O;
        let s = l.Z.getAutocompleteChoices(e.id, o.name, n);
        return null == s ? A : {
          results: {
            choices: s
          }
        }
      }
      return {
        results: c.ZP.queryChoiceResults({
          query: n,
          choices: o.type === a.jw.BOOLEAN ? T.ak : null !== (s = o.choices) && void 0 !== s ? s : []
        })
      }
    },
    renderResults(e) {
      let {
        results: {
          choices: t,
          isLoading: n,
          isError: r
        },
        selectedIndex: s,
        query: a,
        onHover: l,
        onClick: u
      } = e;
      return r ? (0, i.jsx)(o.Z, {
        message: h.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
        noResultsImageURL: f,
        className: S.noAutocompleteResults
      }) : 0 !== t.length || n ? (0, E.HI)({
        query: a,
        selectedIndex: s,
        autocompletes: n ? m : t,
        onHover: l,
        onClick: u,
        titleWithQuery: h.Z.Messages.OPTIONS_MATCHING,
        titleWithoutQuery: h.Z.Messages.OPTIONS,
        Component: n ? d.ZP.Loading : d.ZP.Generic,
        getProps: (e, t) => ({
          key: t.toString(),
          text: e.displayName
        }),
        getQuery: e => e,
        key: "choice"
      }) : (0, i.jsx)(o.Z, {
        message: h.Z.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
        noResultsImageURL: f,
        className: S.noAutocompleteResults
      })
    },
    onSelect(e) {
      let {
        results: {
          choices: t
        },
        index: n,
        options: i
      } = e, r = t[n];
      return i.insertText(function(e) {
        return e.displayName
      }(r)), {
        type: I.z2.CHOICE
      }
    }
  };
t.Z = C