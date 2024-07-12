n(47120);
var i = n(735250),
  a = n(470079),
  l = n(481060),
  s = n(579185),
  r = n(420212),
  o = n(906570);

function c(e) {
  let {
renderPopout: t,
onMouseEnter: n,
onMouseLeave: l,
closePopout: s,
isHovered: r,
...o
  } = e;
  return a.useEffect(() => {
!r && s();
  }, [
s,
r
  ]), (0, i.jsx)('div', {
onMouseEnter: n,
onMouseLeave: l,
children: t({
  closePopout: s,
  ...o
})
  });
}
t.Z = a.forwardRef(function(e, t) {
  let {
renderPopout: n,
children: d
  } = e, [u, h] = a.useState(!1), {
isHovered: p,
setIsHovered: m,
onMouseEnter: _,
onMouseLeave: f,
cancelTimers: E
  } = (0, s.Z)(200, 300);

  function C(e) {
'focus' !== e.type && !u && _();
  }

  function g() {
!u && f();
  }

  function I(e) {
E(), h(!u), (!p || u) && e();
  }
  a.useImperativeHandle(t, () => ({
hidePopout() {
  m(!1), h(!1);
}
  }), [
m,
h
  ]);
  let x = p || u;
  return (0, i.jsx)(l.Popout, {
animation: l.Popout.Animation.FADE,
shouldShow: x,
animationPosition: 'top',
position: 'top',
align: 'left',
spacing: 16,
onRequestClose: () => {
  m(!1), h(!1);
},
renderPopout: e => (0, i.jsx)(c, {
  isHovered: x,
  onFocus: () => h(!0),
  onMouseEnter: _,
  onMouseLeave: g,
  renderPopout: n,
  ...e
}),
children: e => {
  let {
    onClick: t,
    onKeyDown: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: d({
      onClick: e => I(() => t(e)),
      onKeyDown: e => {
        var t, i;
        return t = e, i = n, void((t.key === r.vn.ENTER || t.key === r.vn.SPACE) && I(() => i(t)));
      },
      className: o.actionBarButton,
      onMouseEnter: C,
      onMouseLeave: g,
      isActive: x
    })
  });
}
  });
});