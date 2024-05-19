"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("183249"),
  o = a("824385"),
  c = a("481060"),
  d = a("442837"),
  u = a("210753"),
  f = a("77498"),
  m = a("441674"),
  h = a("689938"),
  p = a("75387");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: s,
    selected: E,
    locked: T = !1,
    remainingGame: C = 0
  } = e, x = (0, c.useToken)(c.tokens.colors.WHITE), {
    isFetching: _,
    coverImageUrl: g
  } = (0, u.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), I = (0, d.useStateFromStores)([f.default], () => {
    var e, a;
    return null !== (a = null === (e = f.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), N = r.useCallback(() => {
    null == s || s(t)
  }, [t, s]), v = r.useMemo(() => _ ? null : null == g ? (0, n.jsx)("div", {
    className: p.gameUnknownImage,
    children: (0, n.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: p.gameImage,
    alt: I,
    src: g
  }), [g, _, I]);
  return (0, n.jsxs)("div", {
    className: p.selectedGame,
    children: [(0, n.jsxs)(c.Clickable, {
      onClick: N,
      className: i()(a, _ ? p.gameImageLoading : void 0, p.gameImageBackground),
      children: [E && (0, n.jsx)("div", {
        className: p.checkBackground,
        children: (0, n.jsx)(m.default, {
          backgroundColor: x.hex(),
          className: i()(p.selectedGameCheck, {
            [p.selectedGameCheckLocked]: T
          })
        })
      }), v, C > 0 && (0, n.jsx)("div", {
        className: p.remainingGame,
        children: (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: h.default.Messages.COUNT_REMAINING.format({
            count: C
          })
        })
      })]
    }), (0, n.jsxs)(c.Text, {
      className: p.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [I, T && (0, n.jsx)(o.LockIcon, {
        width: 12,
        height: 12
      })]
    })]
  })
}