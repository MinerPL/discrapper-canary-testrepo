"use strict";
n(653041);
var i = n(735250);
n(470079);
var r = n(998698),
  s = n(156361),
  o = n(877565),
  a = n(590921),
  l = n(689938);
let u = {
    results: {
      commandOptions: []
    }
  },
  _ = {
    stores: [r.Z],
    focusMode: a.QZ.AUTO_WHEN_FILTERED,
    matches: (e, t, n, i, s) => !(i || null == r.Z.getActiveCommand(e.id) || null != r.Z.getActiveOption(e.id)),
    queryResults(e, t, n, i, s) {
      let o = r.Z.getActiveCommand(e.id);
      if ((null == o ? void 0 : o.options) == null) return u;
      let a = r.Z.getOptionStates(e.id),
        l = o.options.filter(e => {
          var t;
          return e.displayName.startsWith(n) && !(null === (t = a[e.name]) || void 0 === t ? void 0 : t.hasValue)
        });
      return 0 === l.length ? u : {
        results: {
          commandOptions: l
        }
      }
    },
    renderResults(e) {
      let {
        results: {
          commandOptions: t
        },
        selectedIndex: n,
        query: r,
        onHover: a,
        onClick: u
      } = e, _ = [], d = [];
      t.forEach(e => {
        (e.required ? _ : d).push(e)
      });
      let c = _.length > 0 ? (0, o.HI)({
          query: r,
          selectedIndex: n,
          autocompletes: _,
          onHover: a,
          onClick: u,
          titleWithQuery: l.Z.Messages.REQUIRED_OPTIONS_MATCHING,
          titleWithoutQuery: l.Z.Messages.REQUIRED_OPTIONS,
          Component: s.ZP.Generic,
          getProps: (e, t) => ({
            key: t.toString(),
            text: e.displayName,
            description: e.displayDescription
          }),
          getQuery: e => e,
          key: "required-options"
        }) : null,
        E = d.length > 0 ? (0, o.HI)({
          query: r,
          selectedIndex: n,
          autocompletes: d,
          onHover: a,
          onClick: u,
          titleWithQuery: l.Z.Messages.OPTIONS_MATCHING,
          titleWithoutQuery: _.length > 0 ? l.Z.Messages.OTHER_OPTIONS : l.Z.Messages.OPTIONS,
          Component: s.ZP.Generic,
          getProps: (e, t) => ({
            key: t.toString(),
            text: e.displayName,
            description: e.displayDescription
          }),
          getQuery: e => e,
          key: "optional-options",
          indexOffset: _.length
        }) : null;
      return (0, i.jsxs)(i.Fragment, {
        children: [c, E]
      })
    },
    onSelect(e) {
      let {
        results: {
          commandOptions: t
        },
        index: n,
        options: i
      } = e, r = t[n];
      return i.insertText(function(e) {
        return "".concat(e.displayName, ":")
      }(r)), {
        type: a.z2.COMMAND_OPTION
      }
    }
  };
t.Z = _