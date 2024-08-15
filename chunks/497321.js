t(47120);
var n, a = t(735250),
  o = t(470079),
  r = t(120356),
  i = t.n(r),
  c = t(481060),
  l = t(37234),
  u = t(230711),
  d = t(981631),
  f = t(689938),
  p = t(148240);

function g(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class x extends(n = o.Component) {
  render() {
return (0, a.jsxs)('div', {
  className: p.streamerModeEnabled,
  children: [
    (0, a.jsx)('div', {
      className: p.streamerModeEnabledImage
    }),
    (0, a.jsx)(c.Clickable, {
      className: i()(p.streamerModeEnabledBtn, {
        [p.disabled]: this.props.disableButton
      }),
      onClick: this.handleClick,
      children: f.Z.Messages.STREAMER_MODE_ENABLED
    })
  ]
});
  }
  constructor(...e) {
super(...e), g(this, 'handleClick', () => {
  !this.props.disableButton && ((0, l.jN)(d.S9g.USER_SETTINGS), u.Z.setSection(d.oAB.STREAMER_MODE));
});
  }
}
g(x, 'defaultProps', {
  disableButton: !1
}), s.Z = x;