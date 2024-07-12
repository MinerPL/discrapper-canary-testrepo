n(47120);
var s, r = n(735250),
  o = n(470079),
  i = n(120356),
  c = n.n(i),
  a = n(481060),
  l = n(37234),
  u = n(230711),
  d = n(981631),
  p = n(689938),
  f = n(500607);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class x extends(s = o.Component) {
  render() {
return (0, r.jsxs)('div', {
  className: f.streamerModeEnabled,
  children: [
    (0, r.jsx)('div', {
      className: f.streamerModeEnabledImage
    }),
    (0, r.jsx)(a.Clickable, {
      className: c()(f.streamerModeEnabledBtn, {
        [f.disabled]: this.props.disableButton
      }),
      onClick: this.handleClick,
      children: p.Z.Messages.STREAMER_MODE_ENABLED
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
}), t.Z = x;