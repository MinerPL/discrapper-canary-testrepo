s.d(t, {
  c: function() {
return n;
  }
}), s(47120);
var n, a, i = s(735250),
  r = s(470079),
  o = s(120356),
  l = s.n(o),
  c = s(879443),
  d = s.n(c),
  _ = s(392711),
  E = s.n(_),
  u = s(481060),
  T = s(285952),
  I = s(13140),
  S = s(689938),
  N = s(252499);

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
(a = n || (n = {})).DEFAULT = 'DEFAULT', a.RECORDING = 'RECORDING';
let m = {
  DEFAULT: N.__invalid_default,
  RECORDING: N.recording
};
class A extends r.PureComponent {
  componentWillUnmount() {
null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
  }
  componentDidUpdate(e) {
let {
  mode: t
} = this.props, {
  mode: s
} = e;
if (s === t)
  return;
let {
  _inputRef: n
} = this;
if (null == n.current)
  return;
let {
  activeElement: a
} = document;
'DEFAULT' === t && n.current === a && n.current.blur(), 'RECORDING' === t && n.current !== a && n.current.focus();
  }
  render() {
let e;
let {
  mode: t,
  value: s,
  disabled: n
} = this.props, a = (0, I.BB)(s, !0);
e = 'RECORDING' === t ? S.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? S.Z.Messages.SHORTCUT_RECORDER_BUTTON : S.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
let r = 'DEFAULT' === t && s.length > 0;
return (0, i.jsx)(u.FocusRing, {
  focusTarget: this._inputRef,
  ringTarget: this._containerRef,
  children: (0, i.jsx)('div', {
    onClick: this.handleClick,
    onMouseDown: this.handleMouseDown,
    ref: this._containerRef,
    className: l()(N.recorderContainer, m[t], {
      [N.hasValue]: r,
      [N.containerDisabled]: n
    }),
    children: (0, i.jsxs)(T.Z, {
      className: N.recorderLayout,
      children: [
        (0, i.jsx)(T.Z.Child, {
          className: N.keybindInput,
          children: (0, i.jsx)('input', {
            id: this._inputId,
            placeholder: S.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
            type: 'text',
            ref: this.setInputRef,
            readOnly: !0,
            value: a,
            disabled: 'RECORDING' !== this.props.mode || n
          })
        }),
        (0, i.jsx)(T.Z, {
          shrink: 1,
          grow: 0,
          style: {
            margin: 0
          },
          children: (0, i.jsxs)(u.Button, {
            className: N.addKeybindButton,
            disabled: n,
            onClick: e => {
              e.stopPropagation(), e.preventDefault(), this.handleClick(e);
            },
            size: u.Button.Sizes.MIN,
            color: u.ButtonColors.PRIMARY,
            children: [
              (0, i.jsx)('span', {
                className: N.text,
                children: e
              }),
              (0, i.jsx)('span', {
                className: N.editIcon
              })
            ]
          })
        })
      ]
    })
  })
});
  }
  constructor(...e) {
super(...e), C(this, '_inputId', E().uniqueId('key-recorder-')), C(this, '_unregisterNativeRecorder', null), C(this, '_mousedownMode', null), C(this, '_inputRef', r.createRef()), C(this, '_containerRef', r.createRef()), C(this, 'setInputRef', e => {
  var t;
  let {
    registerNativeRecorder: s,
    onChange: n
  } = this.props;
  this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != s && null != n ? this._unregisterNativeRecorder = s(e.id, n) : null != n && (new(d())(e).handleKey = n));
}), C(this, 'handleClick', e => {
  e.stopPropagation(), e.preventDefault();
  let {
    onClick: t,
    disableOnClickWhileRecording: s
  } = this.props;
  if (!s || 'RECORDING' !== this._mousedownMode)
    t();
}), C(this, 'handleMouseDown', () => {
  this._mousedownMode = this.props.mode;
});
  }
}
t.Z = A;