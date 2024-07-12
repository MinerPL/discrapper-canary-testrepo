var r, s = n(735250),
  a = n(470079),
  o = n(120356),
  l = n.n(o),
  i = n(846519),
  d = n(481060),
  c = n(572004),
  u = n(689938),
  p = n(71062);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class C extends(r = a.PureComponent) {
  componentWillUnmount() {
this._timeout.stop();
  }
  render() {
let {
  isVertical: e,
  value: t,
  text: n,
  className: r,
  inputClassName: a
} = this.props, {
  mode: o
} = this.state, i = o === d.CopyInput.Modes.SUCCESS ? u.Z.Messages.COPIED : n;
return e ? (0, s.jsxs)('div', {
  className: l()(r, o),
  children: [
    (0, s.jsx)(d.TextInput, {
      value: t,
      inputClassName: a
    }),
    (0, s.jsx)(d.Button, {
      className: p.button,
      onClick: this.handleCopy,
      size: d.Button.Sizes.MIN,
      color: this.getVerticalButtonColor(o),
      look: d.Button.Looks.FILLED,
      children: i
    })
  ]
}) : (0, s.jsx)(d.CopyInput, {
  ...this.props,
  onCopy: this.handleCopy,
  mode: o,
  text: i
});
  }
  handleCopy() {
let {
  onCopy: e,
  value: t,
  delay: n
} = this.props, r = (0, c.JG)(t);
this.setState({
  mode: r ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR
}), this._timeout.start(n, () => this.setState({
  mode: d.CopyInput.Modes.DEFAULT
})), null == e || e();
  }
  getVerticalButtonColor(e) {
switch (e) {
  case d.CopyInput.Modes.SUCCESS:
    return d.Button.Colors.GREEN;
  case d.CopyInput.Modes.ERROR:
    return d.Button.Colors.RED;
  default:
    return d.Button.Colors.BRAND;
}
  }
  constructor(e) {
super(e), m(this, '_timeout', void 0), this.state = {
  mode: d.CopyInput.Modes.DEFAULT
}, this._timeout = new i.V7(), this.handleCopy = this.handleCopy.bind(this);
  }
}
m(C, 'defaultProps', {
  isVertical: !1,
  delay: 300
}), t.Z = C;