"use strict";
s.r(t), s.d(t, {
  RecordModes: function() {
    return n
  }
}), s("47120");
var n, l, i = s("735250"),
  a = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("879443"),
  u = s.n(d),
  h = s("392711"),
  c = s.n(h),
  m = s("481060"),
  p = s("13140"),
  f = s("285952"),
  g = s("689938"),
  E = s("831945");

function _(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(l = n || (n = {})).DEFAULT = "DEFAULT", l.RECORDING = "RECORDING";
let R = {
  DEFAULT: E.__invalid_default,
  RECORDING: E.recording
};
class T extends a.PureComponent {
  componentWillUnmount() {
    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: s
    } = e;
    if (s === t) return;
    let {
      _inputRef: n
    } = this;
    if (null == n.current) return;
    let {
      activeElement: l
    } = document;
    "DEFAULT" === t && n.current === l && n.current.blur(), "RECORDING" === t && n.current !== l && n.current.focus()
  }
  render() {
    let e;
    let {
      mode: t,
      value: s,
      disabled: n
    } = this.props, l = (0, p.toString)(s, !0);
    e = "RECORDING" === t ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? g.default.Messages.SHORTCUT_RECORDER_BUTTON : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let a = "DEFAULT" === t && s.length > 0;
    return (0, i.jsx)(m.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, i.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: o()(E.container, R[t], {
          [E.hasValue]: a,
          [E.disabled]: n
        }),
        children: (0, i.jsxs)(f.default, {
          className: E.layout,
          children: [(0, i.jsx)(f.default.Child, {
            className: E.input,
            children: (0, i.jsx)("input", {
              id: this._inputId,
              placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: l,
              disabled: "RECORDING" !== this.props.mode || n
            })
          }), (0, i.jsx)(f.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsxs)(m.Button, {
              className: E.button,
              disabled: n,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: m.Button.Sizes.MIN,
              color: m.ButtonColors.PRIMARY,
              children: [(0, i.jsx)("span", {
                className: E.text,
                children: e
              }), (0, i.jsx)("span", {
                className: E.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "_inputId", c().uniqueId("key-recorder-")), _(this, "_unregisterNativeRecorder", null), _(this, "_mousedownMode", null), _(this, "_inputRef", a.createRef()), _(this, "_containerRef", a.createRef()), _(this, "setInputRef", e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: n
      } = this.props;
      this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != s && null != n ? this._unregisterNativeRecorder = s(e.id, n) : null != n && (new(u())(e).handleKey = n))
    }), _(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: s
      } = this.props;
      (!s || "RECORDING" !== this._mousedownMode) && t()
    }), _(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
t.default = T