n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(540026),
  c = n(689938),
  d = n(678032);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class E extends(r = a.PureComponent) {
  componentDidMount() {
this.updateMediaBar();
  }
  componentDidUpdate(e) {
(this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
  }
  updateMediaBar() {
let {
  muted: e,
  value: t,
  maxValue: n
} = this.props, r = this._mediaBar.current;
null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n));
  }
  render() {
let {
  iconClassName: e,
  iconColor: t,
  className: n,
  sliderWrapperClassName: r,
  sliderClassName: a,
  currentWindow: s,
  muted: _,
  minValue: E,
  maxValue: f,
  value: h,
  onVolumeShow: p,
  onVolumeHide: m
} = this.props, {
  hovered: I,
  focused: T,
  dragging: g
} = this.state, S = l.VoiceNormalIcon;
return _ || h === E ? S = l.VoiceXIcon : h < f / 2 && (S = l.VoiceLowIcon), (0, i.jsxs)('div', {
  className: o()(n, d.container),
  onMouseEnter: () => {
    clearTimeout(this._hoverTimeout), this.setState({
      hovered: !0
    }), null == p || p();
  },
  onMouseLeave: () => {
    clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
      this.setState({
        hovered: !1
      }), null == m || m();
    }, 150);
  },
  onFocus: () => this.setState({
    focused: !0
  }),
  onBlur: () => this.setState({
    focused: !1
  }),
  onKeyDown: this.handleKeyDown,
  children: [
    (0, i.jsx)('div', {
      className: o()(d.volumeButtonSlider, r, {
        [d.sliderVisible]: I || T || g
      }),
      onMouseEnter: () => {
        clearTimeout(this._hoverTimeout), this.setState({
          hovered: !0
        });
      },
      onMouseLeave: () => {
        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
          hovered: !1
        }), 150);
      },
      children: (0, i.jsx)(u.Z, {
        sliderClassName: a,
        type: u.Z.Types.VOLUME,
        value: h / f,
        onDrag: this.handleValueChange,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        currentWindow: s,
        ref: this._mediaBar
      })
    }),
    (0, i.jsx)(l.Button, {
      className: d.volumeButton,
      'aria-label': c.Z.Messages.CONTROL_VOLUME,
      size: l.Button.Sizes.NONE,
      look: l.Button.Looks.BLANK,
      onClick: this.handleToggleMute,
      children: (0, i.jsx)(S, {
        color: t,
        className: e
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), _(this, '_mediaBar', a.createRef()), _(this, '_hoverTimeout', void 0), _(this, 'state', {
  hovered: !1,
  focused: !1,
  dragging: !1
}), _(this, 'handleValueChange', e => {
  let {
    maxValue: t,
    onValueChange: n
  } = this.props;
  null == n || n(e * t);
}), _(this, 'handleToggleMute', () => {
  let {
    onToggleMute: e
  } = this.props;
  null == e || e();
}), _(this, 'handleKeyDown', e => {
  let {
    minValue: t,
    value: n,
    maxValue: r,
    onValueChange: i
  } = this.props, a = 0.05 * (r - t);
  switch (e.key) {
    case 'ArrowUp':
      e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(r, n + a));
      break;
    case 'ArrowDown':
      e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - a));
  }
}), _(this, 'handleDragStart', () => {
  this.setState({
    dragging: !0
  });
}), _(this, 'handleDragEnd', () => {
  this.setState({
    dragging: !1
  });
}), _(this, 'blur', () => {
  this.setState({
    focused: !1
  });
});
  }
}
_(E, 'defaultProps', {
  minValue: 0,
  maxValue: 100,
  handleSize: 16
}), t.Z = E;