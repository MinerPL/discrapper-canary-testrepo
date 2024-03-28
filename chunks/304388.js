"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("579185"),
  r = n("420212"),
  o = n("785998");

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

function d(e) {
  let {
    renderPopout: t,
    children: n
  } = e, [d, c] = l.useState(!1), {
    isHovered: f,
    setIsHovered: h,
    onMouseEnter: m,
    onMouseLeave: p,
    cancelTimers: E
  } = (0, i.default)(200, 300);

  function C(e) {
    "focus" !== e.type && !d && m()
  }

  function g() {
    !d && p()
  }

  function S(e) {
    E(), c(!d), (!f || d) && e()
  }
  let _ = f || d;
  return (0, a.jsx)(s.Popout, {
    shouldShow: _,
    animationPosition: "top",
    position: "top",
    align: "left",
    spacing: 16,
    onRequestClose: () => {
      h(!1), c(!1)
    },
    renderPopout: e => (0, a.jsx)(u, {
      isHovered: _,
      onFocus: () => c(!0),
      onMouseEnter: m,
      onMouseLeave: g,
      renderPopout: t,
      ...e
    }),
    children: e => {
      let {
        onClick: t,
        onKeyDown: l
      } = e;
      return (0, a.jsx)(a.Fragment, {
        children: n({
          onClick: e => S(() => t(e)),
          onKeyDown: e => {
            var t, n;
            return t = e, n = l, void((t.key === r.KeyboardKeysUpdated.ENTER || t.key === r.KeyboardKeysUpdated.SPACE) && S(() => n(t)))
          },
          className: o.actionBarButton,
          onMouseEnter: C,
          onMouseLeave: g,
          isActive: _
        })
      })
    }
  })
}