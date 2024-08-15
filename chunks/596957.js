n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(758059),
  d = n(194359),
  u = n(410575),
  _ = n(607070),
  E = n(100527),
  h = n(906732),
  m = n(205976),
  I = n(699516),
  g = n(974042),
  p = n(451478),
  T = n(434184),
  S = n(701861),
  f = n(437314),
  C = n(696577),
  N = n(163417),
  A = n(492347),
  v = n(42575),
  Z = n(617015),
  L = n(981631),
  O = n(689938),
  R = n(49175);
t.Z = function(e) {
  let {
sectionFilter: t,
titleId: n
  } = e, {
analyticsLocations: s
  } = (0, h.ZP)(E.Z.FRIENDS_LIST), {
rows: x,
section: b
  } = (0, l.cj)([g.ZP], () => g.ZP.getState()), P = (0, l.e7)([p.Z], () => p.Z.isFocused()), M = (0, l.e7)([I.Z], () => I.Z.getRelationshipCount()), [D, y] = a.useState(() => {
let e = {};
for (let t of Object.values(L.pJs))
  e[t] = '';
return e;
  }), j = a.useCallback(e => {
y({
  ...D,
  [t]: e
});
  }, [
D,
t
  ]), U = a.useCallback(() => {
y({
  ...D,
  [t]: ''
});
  }, [
D,
t
  ]), G = x.filter(t, D[t]);
  if (0 === G.length && '' === D[t])
return (0, i.jsxs)('div', {
  className: R.emptyStateContainer,
  children: [
    t === L.pJs.ONLINE && (0, i.jsx)(m.Z, {}),
    (0, i.jsx)(f.Z, {
      type: t,
      onClick: () => {
        c.Z.setSection(L.pJs.ADD_FRIEND);
      }
    }, b)
  ]
});
  let k = [G],
w = 0 === G.length && '' !== D[t],
B = G.filter(e => e.type === L.OGo.PENDING_INCOMING).length,
H = t === L.pJs.PENDING && B > 0 && B >= Z.yf;
  return (0, i.jsx)(h.Gt, {
value: s,
children: (0, i.jsxs)(u.Z, {
  section: L.jXE.FRIENDS_LIST,
  children: [
    (0, i.jsx)(o.SearchBar, {
      className: r()(R.searchBar, w ? R.searchEmptyState : null),
      query: D[t],
      onChange: j,
      onClear: U,
      size: o.SearchBar.Sizes.MEDIUM
    }),
    t === L.pJs.ONLINE && '' === D[t] && (0, i.jsx)(m.Z, {}),
    (0, i.jsxs)('div', {
      className: R.sectionTitle,
      children: [
        (0, i.jsx)(A.Z, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case L.pJs.ONLINE:
                return O.Z.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case L.pJs.PENDING:
                return O.Z.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case L.pJs.SUGGESTIONS:
                return O.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case L.pJs.BLOCKED:
                return O.Z.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return O.Z.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                });
            }
          }(t, G.length)
        }),
        H && (0, i.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: R.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.Z.confirmClearPendingRelationships(B);
          },
          'aria-label': O.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: O.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })
      ]
    }),
    w ? (0, i.jsx)('div', {
      className: R.emptyStateContainer,
      children: (0, i.jsx)(f.Z, {
        type: f.j.SECTION_NO_RESULTS
      }, b)
    }) : (0, i.jsx)(N.Z, {
      relationshipCount: M,
      statusSections: k,
      renderRow: function(e) {
        switch (t) {
          case L.pJs.BLOCKED:
            return (0, i.jsx)(T.Z, {
              ...e,
              isFocused: P
            });
          case L.pJs.PENDING:
            return (0, i.jsx)(C.Z, {
              ...e,
              isFocused: P
            });
          case L.pJs.SUGGESTIONS:
            return (0, i.jsx)(v.Z, {
              ...e,
              isFocused: P
            });
          case L.pJs.ONLINE:
          case L.pJs.ALL:
          default:
            return (0, i.jsx)(S.Z, {
              ...e,
              isFocused: P
            });
        }
      },
      sectionFilter: t,
      searchQuery: D[t],
      useReducedMotion: _.Z.useReducedMotion
    })
  ]
})
  });
};