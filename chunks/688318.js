"use strict";
r.r(e), r.d(e, {
  default: function() {
    return E
  }
}), r("222007");
var n = r("884691"),
  i = r("446674"),
  o = r("206230"),
  u = r("91653"),
  l = r("697218"),
  a = r("471671"),
  T = r("315102"),
  c = r("53708"),
  E = t => {
    let {
      user: e,
      size: r,
      animateOnHover: E = !1,
      showPending: s = !1,
      showTryItOut: _ = !1,
      avatarDecorationOverride: d
    } = t, [S, C] = n.useState(!1), I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), f = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), A = (0, i.useStateFromStores)([l.default], () => {
      var t;
      return null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id
    }), v = (0, i.useStateFromStores)([l.default], () => {
      var t;
      return null === (t = l.default.getUser(null == e ? void 0 : e.id)) || void 0 === t ? void 0 : t.avatarDecoration
    }), {
      pendingAvatarDecoration: N
    } = (0, u.default)({
      isTryItOut: _
    }), O = f && (S || !I && !E), R = s && void 0 !== N && void 0 !== A && A === (null == e ? void 0 : e.id) ? N : null != v ? v : null == e ? void 0 : e.avatarDecoration, P = n.useMemo(() => (0, T.getAvatarDecorationURL)({
      avatarDecoration: void 0 !== d ? d : R,
      canAnimate: O,
      size: r
    }), [R, O, r, d]), U = n.useCallback(() => C(!0), []), g = n.useCallback(() => C(!1), []);
    return {
      avatarPlaceholderSrc: c,
      avatarDecorationSrc: P,
      isAvatarDecorationAnimating: O,
      eventHandlers: {
        onMouseEnter: U,
        onMouseLeave: g
      }
    }
  }