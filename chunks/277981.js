"use strict";
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(481060),
  l = n(85235),
  u = n(367907),
  _ = n(998698),
  d = n(895924),
  c = n(718745),
  E = n(156361),
  I = n(285952),
  T = n(590921),
  h = n(665692),
  S = n(981631),
  f = n(689938),
  N = n(867012);
let A = {
  results: {
    command: null,
    integrations: [],
    isLoading: !1
  }
};

function m(e, t, n) {
  var i, r;
  let s;
  return n.commands === T.L8.OLD_BUILT_INS ? (s = t.split(" ")[0].substring(h.GI.length), t = t.substring((null !== (i = s.length) && void 0 !== i ? i : 0) + h.GI.length)) : s = null === (r = _.Z.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.name, {
    command: s,
    query: t.trim()
  }
}
let O = {
  stores: [_.Z, c.Z],
  matches(e, t, n, i, r) {
    var s;
    return r.commands !== T.L8.DISABLED && (r.commands === T.L8.OLD_BUILT_INS ? n.startsWith(h.GI + "gif") || n.startsWith(h.GI + "tenor") : (null === (s = _.Z.getActiveCommand(e.id)) || void 0 === s ? void 0 : s.integrationType) === S.q9n.GIF && _.Z.getOptionStates(e.id).query.hasValue)
  },
  queryResults(e, t, n, i, r) {
    let {
      command: s,
      query: a
    } = m(e, n, i);
    if (null == s) return A;
    let u = o().findKey(S.nkL, e => e.command === s);
    r && null != u && a.length > 0 && l.Z.search(u, a);
    let _ = c.Z.getResults(u, a);
    return null == _ ? A : {
      results: {
        command: s,
        integrations: _.results,
        isLoading: _.loading
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        integrations: t,
        isLoading: n
      },
      selectedIndex: s,
      channel: o,
      query: l,
      options: u,
      onHover: d,
      onClick: c
    } = e, {
      command: h,
      query: A
    } = m(o, l, u);
    if (null == h || 0 === A.length) return null;
    if (n) return (0, i.jsx)(a.Spinner, {
      className: N.spinner,
      type: a.Spinner.Type.SPINNING_CIRCLE
    });
    if (null != t) {
      var O, R;
      let e = !1,
        n = t.map((t, n) => {
          if (t.type === S.q9n.GIF) {
            var r, o, a;
            return e = !0, (0, i.jsx)(E.ZP.GIFIntegration, {
              className: N.horizontalAutocomplete,
              onClick: c,
              onHover: d,
              selected: s === n,
              index: n,
              width: null !== (r = t.meta.width) && void 0 !== r ? r : 0,
              height: null !== (o = t.meta.height) && void 0 !== o ? o : 0,
              src: null !== (a = t.meta.src) && void 0 !== a ? a : "",
              url: t.meta.url
            }, "".concat(t.meta.url).concat(t.meta.src))
          }
        }),
        a = u.commands === T.L8.OLD_BUILT_INS ? h : null !== (R = null === (O = _.Z.getActiveCommand(o.id)) || void 0 === O ? void 0 : O.integrationTitle) && void 0 !== R ? R : h,
        l = A.length > 0 && null != a ? f.Z.Messages.CONTENT_MATCHING.format({
          query: A,
          command: a
        }) : null != a ? a : h;
      return (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(E.ZP.Title, {
          title: l
        }), e ? (0, i.jsx)(I.Z, {
          className: N.horizontalAutocompletes,
          children: n
        }) : n]
      }, "gifs")
    }
  },
  onSelect(e) {
    let {
      results: {
        command: t,
        integrations: n
      },
      index: i,
      type: r,
      options: s,
      channel: o
    } = e;
    if (null == t) return {
      type: null
    };
    let a = n[i];
    if (r === T.QB.INSERT ? s.replaceText(function(e) {
        return e.meta.url
      }(a)) : s.sendMessage(function(e) {
        return e.meta.url
      }(a)), u.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
        search_type: S.aib.GIF,
        index_num: i,
        source_object: "/".concat(t)
      }), s.commands !== T.L8.OLD_BUILT_INS) {
      let e = _.Z.getActiveCommand(o.id);
      (null == e ? void 0 : e.inputType) === d.iw.BUILT_IN_INTEGRATION && u.ZP.trackWithMetadata(S.rMx.APPLICATION_COMMAND_USED, {
        command_id: e.id,
        application_id: e.applicationId,
        command_type: e.type
      })
    }
    return {
      type: T.z2.GIF
    }
  }
};

function R(e) {
  return e.meta.url
}
t.Z = O