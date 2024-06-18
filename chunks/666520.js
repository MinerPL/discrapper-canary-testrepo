"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(699581),
  a = n(442837),
  l = n(481060),
  u = n(34854),
  _ = n(702557),
  d = n(246946),
  c = n(981631),
  E = n(689938),
  I = n(9601);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(i = s.PureComponent) {
  componentDidMount() {
    if (this.props.autoFocus && !this.props.hideNote) {
      let e = o.findDOMNode(this.noteRef.current);
      null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length)
    }
  }
  render() {
    let {
      className: e,
      loading: t,
      note: n,
      hideNote: i
    } = this.props;
    return i ? null : (0, r.jsx)("div", {
      className: e,
      children: (0, r.jsx)(l.TextAreaAutosize, {
        ref: this.noteRef,
        className: I.textarea,
        disabled: t,
        placeholder: t ? E.Z.Messages.LOADING_NOTE : E.Z.Messages.NOTE_PLACEHOLDER,
        "aria-label": E.Z.Messages.NOTE,
        onBlur: this.handleBlur,
        onKeyPress: this.handleKeyPress,
        defaultValue: null != n ? n : void 0,
        maxLength: c.vuo
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "noteRef", s.createRef()), T(this, "handleBlur", e => {
      let t = e.currentTarget.value,
        {
          note: n,
          userId: i,
          onUpdate: r
        } = this.props;
      if ((null != n ? n : "") !== t) null == r || r(), u.Z.updateNote(i, t)
    }), T(this, "handleKeyPress", e => {
      if (13 === e.which) {
        if (e.shiftKey) {
          var t;
          (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault()
        } else e.preventDefault(), e.currentTarget.blur()
      } else e.which === c.yXg.SPACE && e.stopPropagation()
    })
  }
}

function S(e) {
  let t = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
    n = (0, _.Z)(e.userId);
  return (0, r.jsx)(h, {
    ...e,
    ...n,
    hideNote: t
  })
}
T(h, "defaultProps", {
  autoFocus: !1
})