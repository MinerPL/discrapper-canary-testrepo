"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("774078"),
  d = n("579185"),
  c = n("272929"),
  f = n("456631"),
  h = n("643720"),
  m = n("981631"),
  p = n("984324");
t.default = e => {
  let {
    channel: t,
    className: n
  } = e, {
    isHovered: s,
    setIsHovered: E,
    onMouseEnter: C,
    onMouseLeave: g,
    cancelTimers: S
  } = (0, d.default)(200, 300), [_, T] = l.useState(!1), I = (0, r.useStateFromStores)([f.default], () => f.default.effectCooldownEndTime), A = l.useMemo(() => null != I ? (I.getTime() - Date.now()) / 1e3 : 0, [I]), {
    seconds: v
  } = (0, u.default)(null != I ? I : new Date), N = v > 0, x = l.useCallback(e => {
    if ("focus" !== e.type) !_ && !N && C()
  }, [_, N, C]), M = l.useCallback(() => {
    !_ && g()
  }, [g, _]), R = l.useCallback((e, t) => {
    S(), T(!_), (!s || _) && (null == t || t(e))
  }, [S, _, s]), L = s || _;
  return (0, a.jsx)(o.Popout, {
    shouldShow: L,
    animationPosition: "bottom",
    position: "bottom",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      E(!1), T(!1)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(h.default, {
        isHovered: L,
        channel: t,
        closePopout: n,
        onMouseEnter: C,
        onMouseLeave: M,
        onFocus: () => T(!0)
      })
    },
    children: e => {
      let {
        onClick: t,
        onKeyDown: l
      } = e;
      return (0, a.jsx)(c.default, {
        isCenterButton: !0,
        totalCooldownSeconds: A,
        remainingCooldownSeconds: v,
        className: i()(p.controlButton, n),
        onKeyDown: e => {
          var t, n;
          return t = e, n = l, void(t.keyCode === m.KeyboardKeys.ENTER && t.keyCode === m.KeyboardKeys.SPACE && R(t, n))
        },
        onClick: e => {
          R(e, t)
        },
        onMouseEnter: x,
        onMouseLeave: M,
        isActive: L
      })
    }
  })
}