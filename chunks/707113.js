"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  u = n("718017"),
  r = n("399606"),
  o = n("481060"),
  d = n("201070"),
  c = n("893966"),
  f = n("472596"),
  h = n("598948"),
  m = n("428936"),
  S = n("41586"),
  g = n("851953");

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
  } = e, E = t.id, T = (0, r.useStateFromStores)([c.default], () => c.default.getEstimatedMemberSearchCountByGuildId(E), [E]), p = (0, d.useIsMakingRequest)(E), C = (0, d.useIsStillIndexing)(E), b = a.useCallback(e => {
    null != e && (null == u || u(e))
  }, [u]), A = (0, f.getSearchState)(C, p, T), I = a.useRef(null), M = a.useRef(null), N = a.useCallback(() => {
    var e;
    null === (e = I.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: i()(g.mainTableContainer, n),
    children: (0, l.jsxs)(o.AdvancedScroller, {
      className: i()(g.horizatonalScroller),
      ref: M,
      orientation: "horizontal",
      children: [(0, l.jsx)(S.default, {
        guild: t,
        ref: I
      }), (0, l.jsx)(x, {
        guild: t
      }), (0, l.jsx)(h.default, {
        guild: t,
        onSelectRow: b,
        searchState: A,
        onResetForNewMembers: N
      }), A !== f.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(m.default, {
        guildId: t.id,
        onPageChange: s
      })]
    })
  })
}