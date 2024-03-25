"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  u = n("146606"),
  r = n("65597"),
  o = n("77078"),
  d = n("804160"),
  c = n("178406"),
  f = n("553275"),
  h = n("691307"),
  m = n("314143"),
  S = n("721302"),
  g = n("194112");

function x(e) {
  let {
    guild: t
  } = e, n = (0, d.useIsMakingRequest)(t.id), a = (0, u.useSpring)({
    height: n ? 3 : 0,
    config: u.config.stiff
  });
  return (0, l.jsx)("div", {
    className: g.loaderContainer,
    children: (0, l.jsx)(u.animated.div, {
      className: g.loaderBar,
      style: a
    })
  })
}

function E(e) {
  let {
    guild: t,
    className: n,
    onPageChange: s,
    onMemberSelect: u
  } = e, E = t.id, T = (0, r.useStateFromStores)([c.default], () => c.default.getEstimatedMemberSearchCountByGuildId(E), [E]), p = (0, d.useIsMakingRequest)(E), C = (0, d.useIsStillIndexing)(E), A = a.useCallback(e => {
    null != e && (null == u || u(e))
  }, [u]), I = (0, f.getSearchState)(C, p, T), M = a.useRef(null), N = a.useRef(null), b = a.useCallback(() => {
    var e;
    null === (e = M.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: i(g.mainTableContainer, n),
    children: (0, l.jsxs)(o.AdvancedScroller, {
      className: i(g.horizatonalScroller),
      ref: N,
      orientation: "horizontal",
      children: [(0, l.jsx)(S.default, {
        guild: t,
        ref: M
      }), (0, l.jsx)(x, {
        guild: t
      }), (0, l.jsx)(h.default, {
        guild: t,
        onSelectRow: A,
        searchState: I,
        onResetForNewMembers: b
      }), I !== f.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(m.default, {
        guildId: t.id,
        onPageChange: s
      })]
    })
  })
}