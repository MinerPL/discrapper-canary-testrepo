n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  o = n(699581),
  s = n(442837),
  l = n(481060),
  u = n(34854),
  c = n(702557),
  d = n(246946),
  _ = n(981631),
  E = n(689938),
  f = n(259133);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class p extends(r = a.PureComponent) {
  componentDidMount() {
if (this.props.autoFocus && !this.props.hideNote) {
  let e = o.findDOMNode(this.noteRef.current);
  null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length);
}
  }
  render() {
let {
  className: e,
  loading: t,
  note: n,
  hideNote: r
} = this.props;
return r ? null : (0, i.jsx)('div', {
  className: e,
  children: (0, i.jsx)(l.TextAreaAutosize, {
    ref: this.noteRef,
    className: f.textarea,
    disabled: t,
    placeholder: t ? E.Z.Messages.LOADING_NOTE : E.Z.Messages.NOTE_PLACEHOLDER,
    'aria-label': E.Z.Messages.NOTE,
    onBlur: this.handleBlur,
    onKeyPress: this.handleKeyPress,
    defaultValue: null != n ? n : void 0,
    maxLength: _.vuo
  })
});
  }
  constructor(...e) {
super(...e), h(this, 'noteRef', a.createRef()), h(this, 'handleBlur', e => {
  let t = e.currentTarget.value,
    {
      note: n,
      userId: r,
      onUpdate: i
    } = this.props;
  if ((null != n ? n : '') !== t)
    null == i || i(), u.Z.updateNote(r, t);
}), h(this, 'handleKeyPress', e => {
  if (13 === e.which) {
    if (e.shiftKey) {
      var t;
      (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault();
    } else
      e.preventDefault(), e.currentTarget.blur();
  } else
    e.which === _.yXg.SPACE && e.stopPropagation();
});
  }
}

function m(e) {
  let t = (0, s.e7)([d.Z], () => d.Z.hidePersonalInformation),
n = (0, c.Z)(e.userId);
  return (0, i.jsx)(p, {
...e,
...n,
hideNote: t
  });
}
h(p, 'defaultProps', {
  autoFocus: !1
});