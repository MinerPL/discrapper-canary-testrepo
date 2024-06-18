"use strict";
t.d(s, {
  Z: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(699581),
  o = t(91192),
  c = t(374470),
  d = t(442837),
  u = t(481060),
  E = t(497321),
  _ = t(351773),
  I = t(110924),
  T = t(724757),
  N = t(987707),
  m = t(999382),
  S = t(210887),
  h = t(430824),
  g = t(246946),
  x = t(884737),
  C = t(770436),
  R = t(65226),
  L = t(689938),
  O = t(233324),
  A = t(84885);
let p = t(74773),
  M = t(210657);

function f(e) {
  let {
    logs: s,
    guildId: t,
    expandedId: l,
    lastExpandedId: a,
    scroller: r,
    setExpandedRef: c,
    setLastExpandedRef: d,
    onHeaderClick: u,
    onContentClick: E
  } = e, _ = i.useRef(r);
  i.useEffect(() => {
    _.current = r
  }, [r]);
  let I = (0, T.Z)("audit-log", _);
  return (0, n.jsx)(o.bG, {
    navigator: I,
    children: (0, n.jsx)(o.SJ, {
      children: e => {
        let {
          ref: i,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          ref: i,
          ...r,
          className: O.listContainer,
          children: null == s ? void 0 : s.map(e => {
            let s = l === e.id,
              i = a === e.id;
            return (0, n.jsx)(C.Z, {
              guildId: t,
              ref: s ? c : i ? d : null,
              className: O.row,
              onHeaderClick: u,
              onContentClick: E,
              log: e,
              expanded: s
            }, e.id)
          })
        })
      }
    })
  })
}

function v() {
  let e, s;
  let {
    guildId: t,
    guild: l,
    isInitialLoading: o,
    isLoading: T,
    isLoadingNextPage: C,
    showLoadMore: v,
    hasError: D,
    hasOlderLogs: Z,
    rawLogs: j,
    theme: U,
    hide: G
  } = (0, d.cj)([m.Z, h.Z, N.Z, g.Z, S.Z], () => {
    let e = m.Z.getGuildId(),
      s = h.Z.getGuild(e),
      t = N.Z.logs;
    return {
      guildId: e,
      guild: s,
      isInitialLoading: N.Z.isInitialLoading,
      isLoading: N.Z.isLoading,
      isLoadingNextPage: N.Z.isLoadingNextPage,
      showLoadMore: N.Z.groupedFetchCount > 2,
      hasError: N.Z.hasError,
      hasOlderLogs: N.Z.hasOlderLogs,
      rawLogs: null != t && null != s ? t : [],
      theme: S.Z.theme,
      hide: g.Z.enabled
    }
  }), [P, b] = i.useState({
    expandedId: null,
    lastExpandedId: null,
    actionFilterQuery: ""
  }), B = x._$(j, l), y = !1, F = i.useRef(null), w = (0, I.Z)(P), k = (0, I.Z)(B), H = () => {
    var e;
    return (null === (e = F.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  }, V = !v && (null == B ? void 0 : B.length) !== (null == k ? void 0 : k.length) && null != F && H(), Y = () => {
    let t = {
      expanded: null,
      lastExpanded: null
    };
    if (null != s) {
      let e = r.findDOMNode(s);
      null != e && (0, c.k)(e) && (t.lastExpanded = e.getBoundingClientRect())
    }
    if (null != e) {
      let s = r.findDOMNode(e);
      null != s && (0, c.k)(s) && (t.expanded = s.getBoundingClientRect())
    }
    return t
  }, W = Y(), K = (0, _.Z)(null, () => {
    let {
      expandedId: t
    } = P;
    null == t || y ? null != t && (y = !1) : (e = null, s = null, b(e => ({
      ...e,
      expandedId: null,
      lastExpandedId: null
    })), W = Y())
  });
  i.useEffect(() => {
    P.expandedId !== (null == w ? void 0 : w.expandedId) && z()
  }, []);
  let z = () => {
      let e = F.current;
      if (null == e) return;
      let s = Y(),
        t = W;
      if (null == s.expanded || null == s.lastExpanded || null == t.expanded || s.expanded.top < s.lastExpanded.top) return;
      let n = t.expanded.height - s.lastExpanded.height,
        i = e.getScrollerState().scrollTop - n;
      e.scrollTo({
        to: i
      })
    },
    q = t => {
      let {
        expandedId: n
      } = P;
      n !== t.id ? (y = !0, b(e => ({
        ...e,
        expandedId: null == t ? void 0 : t.id,
        lastExpandedId: n
      })), W = Y()) : (e = null, s = null, null != n && (W = Y()), b(e => ({
        ...e,
        expandedId: null,
        lastExpandedId: null
      })))
    },
    X = e => {
      y = !0, e.stopPropagation()
    },
    Q = () => {},
    J = s => {
      e = s
    },
    $ = e => {
      s = e
    },
    ee = () => (0, n.jsx)(u.Spinner, {
      type: u.Spinner.Type.SPINNING_CIRCLE,
      className: O.spinner
    });
  return (0, n.jsx)("div", {
    ref: K,
    className: A.customColumn,
    children: (0, n.jsx)("div", {
      className: A.customContainer,
      children: (0, n.jsx)(u.AdvancedScrollerAuto, {
        className: a()(A.customScroller, O.scroller),
        onScroll: () => {
          H() && Q()
        },
        ref: F,
        children: (0, n.jsxs)("div", {
          className: O.content,
          children: [(0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: O.customHeader,
              children: (0, n.jsx)(u.FormTitle, {
                tag: u.FormTitleTags.H1,
                className: O.formTitle,
                children: L.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
              })
            }), (0, n.jsx)(u.FormDivider, {
              className: O.divider
            })]
          }), (0, n.jsx)(R.M, {
            className: O.__invalid_search
          }), (() => {
            if (G) return (0, n.jsx)(E.Z, {});
            if (T || o) return ee();
            if ((null == B ? void 0 : B.length) === 0) {
              let e = D ? L.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : L.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
                s = D ? L.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : L.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
              return (0, n.jsxs)(u.EmptyState, {
                theme: U,
                className: O.__invalid_empty,
                children: [(0, n.jsx)(u.EmptyStateImage, {
                  darkSrc: p,
                  lightSrc: M,
                  width: 272,
                  height: 130
                }), (0, n.jsx)(u.EmptyStateText, {
                  note: e,
                  style: {
                    maxWidth: 300
                  },
                  children: s
                })]
              })
            }
            let {
              expandedId: e,
              lastExpandedId: s
            } = P;
            return (0, n.jsx)(f, {
              logs: B,
              guildId: t,
              expandedId: e,
              lastExpandedId: s,
              setExpandedRef: J,
              setLastExpandedRef: $,
              onHeaderClick: q,
              onContentClick: X,
              scroller: F.current
            })
          })(), (() => {
            if (v && Z && !G) return (0, n.jsx)(u.Button, {
              color: u.Button.Colors.PRIMARY,
              className: O.__invalid_loadMore,
              onClick: Q,
              children: L.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
            })
          })(), !C || G || T ? null : ee()]
        })
      })
    })
  })
}