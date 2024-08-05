n.d(t, {
  k: function() {
return h;
  },
  u: function() {
return f;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(285952),
  c = n(153066),
  d = n(689938),
  _ = n(129281);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error'
};
class h extends(r = a.PureComponent) {
  select() {
var e;
null === (e = this.inputRef.current) || void 0 === e || e.select();
  }
  renderInput(e) {
var t;
let {
  value: n,
  mode: r
} = this.props, a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
return (0, i.jsx)('input', {
  className: o()((0, c.l)(_, 'input', r), {
    [_.inputHidden]: e
  }),
  ref: this.inputRef,
  type: 'text',
  value: n,
  onClick: this.handleInputClick,
  readOnly: !0,
  'aria-labelledby': a
});
  }
  render() {
let e;
let {
  text: t = d.Z.Messages.COPY,
  mode: n,
  hideMessage: r,
  className: a,
  buttonLook: s
} = this.props, E = null != r;
switch (n) {
  case f.SUCCESS:
    e = l.ButtonColors.GREEN;
    break;
  case f.ERROR:
    e = l.ButtonColors.RED;
    break;
  default:
    e = this.props.buttonColor;
}
return (0, i.jsx)(l.FocusRing, {
  focusTarget: this.inputRef,
  ringTarget: this.containerRef,
  children: (0, i.jsx)('div', {
    className: o()((0, c.l)(_, 'copyInput', n), a),
    ref: this.containerRef,
    children: (0, i.jsxs)(u.Z, {
      className: _.layout,
      children: [
        (0, i.jsxs)(u.Z, {
          className: _.inputWrapper,
          children: [
            this.renderInput(E),
            E ? (0, i.jsx)('div', {
              className: _.hiddenMessage,
              children: r
            }) : null
          ]
        }),
        (0, i.jsx)(u.Z, {
          shrink: 1,
          grow: 0,
          style: {
            margin: 0
          },
          children: (0, i.jsx)(l.Button, {
            className: _.button,
            onClick: this.handleButtonClick,
            size: l.ButtonSizes.MIN,
            color: e,
            look: s,
            children: t
          })
        })
      ]
    })
  })
});
  }
  constructor(...e) {
super(...e), E(this, 'inputRef', a.createRef()), E(this, 'containerRef', a.createRef()), E(this, 'handleButtonClick', () => {
  this.select();
  let {
    onCopy: e,
    value: t
  } = this.props;
  e(t);
}), E(this, 'handleInputClick', () => {
  this.select();
});
  }
}
E(h, 'contextType', l.FormContext), E(h, 'defaultProps', {
  supportsCopy: !0,
  buttonColor: l.ButtonColors.PRIMARY,
  buttonLook: l.ButtonLooks.FILLED,
  mode: f.DEFAULT
}), E(h, 'Modes', f), E(h, 'ButtonColors', l.ButtonColors), E(h, 'ButtonLooks', l.ButtonLooks);