n.d(t, {
  Z: function() {
return D;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(699581),
  o = n(91192),
  c = n(374470),
  d = n(442837),
  u = n(481060),
  _ = n(497321),
  I = n(351773),
  E = n(110924),
  T = n(724757),
  m = n(987707),
  N = n(999382),
  S = n(210887),
  h = n(430824),
  g = n(246946),
  C = n(884737),
  x = n(770436),
  p = n(65226),
  R = n(689938),
  f = n(768516),
  L = n(326617);
let O = n(74773),
  A = n(210657);

function M(e) {
  let {
logs: t,
guildId: n,
expandedId: i,
lastExpandedId: r,
scroller: l,
setExpandedRef: c,
setLastExpandedRef: d,
onHeaderClick: u,
onContentClick: _
  } = e, I = a.useRef(l);
  a.useEffect(() => {
I.current = l;
  }, [l]);
  let E = (0, T.Z)('audit-log', I);
  return (0, s.jsx)(o.bG, {
navigator: E,
children: (0, s.jsx)(o.SJ, {
  children: e => {
    let {
      ref: a,
      ...l
    } = e;
    return (0, s.jsx)('div', {
      ref: a,
      ...l,
      className: f.listContainer,
      children: null == t ? void 0 : t.map(e => {
        let t = i === e.id,
          a = r === e.id;
        return (0, s.jsx)(x.Z, {
          guildId: n,
          ref: t ? c : a ? d : null,
          className: f.row,
          onHeaderClick: u,
          onContentClick: _,
          log: e,
          expanded: t
        }, e.id);
      })
    });
  }
})
  });
}

function D() {
  let e, t;
  let {
guildId: n,
guild: i,
isInitialLoading: o,
isLoading: T,
isLoadingNextPage: x,
showLoadMore: D,
hasError: v,
hasOlderLogs: j,
rawLogs: Z,
theme: b,
hide: U
  } = (0, d.cj)([
N.Z,
h.Z,
m.Z,
g.Z,
S.Z
  ], () => {
let e = N.Z.getGuildId(),
  t = h.Z.getGuild(e),
  n = m.Z.logs;
return {
  guildId: e,
  guild: t,
  isInitialLoading: m.Z.isInitialLoading,
  isLoading: m.Z.isLoading,
  isLoadingNextPage: m.Z.isLoadingNextPage,
  showLoadMore: m.Z.groupedFetchCount > 2,
  hasError: m.Z.hasError,
  hasOlderLogs: m.Z.hasOlderLogs,
  rawLogs: null != n && null != t ? n : [],
  theme: S.Z.theme,
  hide: g.Z.enabled
};
  }), [G, P] = a.useState({
expandedId: null,
lastExpandedId: null,
actionFilterQuery: ''
  }), B = C._$(Z, i), y = !1, F = a.useRef(null), k = (0, E.Z)(G), w = (0, E.Z)(B), H = () => {
var e;
return (null === (e = F.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1;
  }, V = !D && (null == B ? void 0 : B.length) !== (null == w ? void 0 : w.length) && null != F && H(), Y = () => {
let n = {
  expanded: null,
  lastExpanded: null
};
if (null != t) {
  let e = l.findDOMNode(t);
  null != e && (0, c.k)(e) && (n.lastExpanded = e.getBoundingClientRect());
}
if (null != e) {
  let t = l.findDOMNode(e);
  null != t && (0, c.k)(t) && (n.expanded = t.getBoundingClientRect());
}
return n;
  }, W = Y(), z = (0, I.Z)(null, () => {
let {
  expandedId: n
} = G;
null == n || y ? null != n && (y = !1) : (e = null, t = null, P(e => ({
  ...e,
  expandedId: null,
  lastExpandedId: null
})), W = Y());
  });
  a.useEffect(() => {
G.expandedId !== (null == k ? void 0 : k.expandedId) && K();
  }, []);
  let K = () => {
  let e = F.current;
  if (null == e)
    return;
  let t = Y(),
    n = W;
  if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
    return;
  let s = n.expanded.height - t.lastExpanded.height,
    a = e.getScrollerState().scrollTop - s;
  e.scrollTo({
    to: a
  });
},
q = n => {
  let {
    expandedId: s
  } = G;
  s !== n.id ? (y = !0, P(e => ({
    ...e,
    expandedId: null == n ? void 0 : n.id,
    lastExpandedId: s
  })), W = Y()) : (e = null, t = null, null != s && (W = Y()), P(e => ({
    ...e,
    expandedId: null,
    lastExpandedId: null
  })));
},
X = e => {
  y = !0, e.stopPropagation();
},
Q = () => {},
J = t => {
  e = t;
},
$ = e => {
  t = e;
},
ee = () => (0, s.jsx)(u.Spinner, {
  type: u.Spinner.Type.SPINNING_CIRCLE,
  className: f.spinner
});
  return (0, s.jsx)('div', {
ref: z,
className: L.customColumn,
children: (0, s.jsx)('div', {
  className: L.customContainer,
  children: (0, s.jsx)(u.AdvancedScrollerAuto, {
    className: r()(L.customScroller, f.scroller),
    onScroll: () => {
      H() && Q();
    },
    ref: F,
    children: (0, s.jsxs)('div', {
      className: f.content,
      children: [
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)('div', {
              className: f.customHeader,
              children: (0, s.jsx)(u.FormTitle, {
                tag: u.FormTitleTags.H1,
                className: f.formTitle,
                children: R.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
              })
            }),
            (0, s.jsx)(u.FormDivider, {
              className: f.divider
            })
          ]
        }),
        (0, s.jsx)(p.M, {
          className: f.__invalid_search
        }),
        (() => {
          if (U)
            return (0, s.jsx)(_.Z, {});
          if (T || o)
            return ee();
          if ((null == B ? void 0 : B.length) === 0) {
            let e = v ? R.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : R.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
              t = v ? R.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : R.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
            return (0, s.jsxs)(u.EmptyState, {
              theme: b,
              className: f.__invalid_empty,
              children: [
                (0, s.jsx)(u.EmptyStateImage, {
                  darkSrc: O,
                  lightSrc: A,
                  width: 272,
                  height: 130
                }),
                (0, s.jsx)(u.EmptyStateText, {
                  note: e,
                  style: {
                    maxWidth: 300
                  },
                  children: t
                })
              ]
            });
          }
          let {
            expandedId: e,
            lastExpandedId: t
          } = G;
          return (0, s.jsx)(M, {
            logs: B,
            guildId: n,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: J,
            setLastExpandedRef: $,
            onHeaderClick: q,
            onContentClick: X,
            scroller: F.current
          });
        })(),
        (() => {
          if (D && j && !U)
            return (0, s.jsx)(u.Button, {
              color: u.Button.Colors.PRIMARY,
              className: f.__invalid_loadMore,
              onClick: Q,
              children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
            });
        })(),
        !x || U || T ? null : ee()
      ]
    })
  })
})
  });
}