"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("579185"),
  r = n("420212"),
  o = n("831404");

function u(e) {
  let {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: s,
    closePopout: i,
    isHovered: r,
    ...o
  } = e;
  return l.useEffect(() => {
    !r && i()
  }, [i, r]), (0, a.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: s,
    children: t({
      closePopout: i,
      ...o
    })
  })
}
t.default = l.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    children: d
  } = e, [c, f] = l.useState(!1), {
    isHovered: h,
    setIsHovered: m,
    onMouseEnter: p,
    onMouseLeave: E,
    cancelTimers: C
  } = (0, i.default)(200, 300);

  function g(e) {
    "focus" !== e.type && !c && p()
  }

  function S() {
    !c && E()
  }

  function _(e) {
    C(), f(!c), (!h || c) && e()
  }
  l.useImperativeHandle(t, () => ({
    hidePopout() {
      m(!1), f(!1)
    }
  }), [m, f]);
  let T = h || c;
  return (0, a.jsx)(s.Popout, {
    shouldShow: T,
    animationPosition: "top",
    position: "top",
    align: "left",
    spacing: 16,
    onRequestClose: () => {
      m(!1), f(!1)
    },
    renderPopout: e => (0, a.jsx)(u, {
      isHovered: T,
      onFocus: () => f(!0),
      onMouseEnter: p,
      onMouseLeave: S,
      renderPopout: n,
      ...e
    }),
    children: e => {
      let {
        onClick: t,
        onKeyDown: n
      } = e;
      return (0, a.jsx)(a.Fragment, {
        children: d({
          onClick: e => _(() => t(e)),
          onKeyDown: e => {
            var t, a;
            return t = e, a = n, void((t.key === r.KeyboardKeysUpdated.ENTER || t.key === r.KeyboardKeysUpdated.SPACE) && _(() => a(t)))
          },
          className: o.actionBarButton,
          onMouseEnter: g,
          onMouseLeave: S,
          isActive: T
        })
      })
    }
  })
})