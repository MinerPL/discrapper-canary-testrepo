s(47120), s(757143);
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(218872);

function o(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let l = /[^0-9]/g;
class c extends a.PureComponent {
  componentDidUpdate(e) {
let t = this._inputRef;
e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
  }
  render() {
return (0, n.jsx)(i.TextInput, {
  ...this.props,
  inputMode: 'numeric',
  onChange: this.handleChange,
  inputRef: this.setRef
});
  }
  constructor(...e) {
super(...e), o(this, '_inputRef', void 0), o(this, 'selectionStart', 0), o(this, 'setRef', e => {
  let {
    inputRef: t
  } = this.props;
  this._inputRef = e, null != t && t(e);
}), o(this, 'handleChange', (e, t) => {
  let {
    value: s,
    onChange: n
  } = this.props, a = this._inputRef;
  if (e === s || null == a || null == s)
    return;
  let i = (0, r.M)(e),
    o = a.selectionStart;
  i === s && i.length <= 3 && s.includes('/') && !e.includes('/') ? i = i.replace(l, '') : i === s && e.includes('/') && !s.includes('/') && (i += '/'), i.length > e.length && (o += i.length - e.length), this.selectionStart = o, null != n && n(i, t);
});
  }
}
t.Z = c;