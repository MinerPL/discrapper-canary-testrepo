s(47120), s(653041);
var n = s(735250),
  a = s(470079),
  i = s(921738),
  r = s.n(i),
  o = s(213005),
  l = s(455279),
  c = s(358085),
  d = s(998502),
  _ = s(981631);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let u = c.isPlatformEmbedded && null != d.ZP.getDiscordUtils().inputCaptureRegisterElement;
class T extends a.PureComponent {
  componentDidMount() {
this._mounted = !0;
  }
  componentWillUnmount() {
this._mounted = !1, this.cleanUp();
  }
  componentDidUpdate(e) {
this.props.defaultValue !== e.defaultValue && this.setState({
  codes: this.props.defaultValue
});
  }
  cleanUp() {
c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null);
  }
  handleComboChange(e) {
let {
  mode: t
} = this.state, {
  onChange: s
} = this.props;
t === l.c.RECORDING && (null != s && s(e), this.setState({
  codes: e
}));
  }
  render() {
let e, t;
let {
  codes: s,
  mode: a
} = this.state, {
  disabled: i
} = this.props;
return u ? (t = d.ZP.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !c.isPlatformEmbedded && (e = this.handleComboKeys), (0, n.jsx)(l.Z, {
  disabled: i,
  value: s,
  mode: a,
  onClick: this.toggleRecordMode,
  onChange: e,
  registerNativeRecorder: t,
  disableOnClickWhileRecording: u
});
  }
  constructor(e) {
super(e), E(this, '_input', void 0), E(this, 'gs', void 0), E(this, '_mounted', !1), E(this, 'recordStart', () => {
  c.isPlatformEmbedded && !u && (this.gs = new o.Z(), this.gs.on('change', this.handleGSChange)), this.setState({
    mode: l.c.RECORDING
  });
}), E(this, 'recordEnd', () => {
  this.cleanUp(), this.setState({
    mode: l.c.DEFAULT
  });
}), E(this, 'toggleRecordMode', () => {
  this.state.mode === l.c.DEFAULT ? this.recordStart() : this.recordEnd();
}), E(this, 'handleComboKeys', (e, t, s) => {
  if (s.preventDefault(), 'keydown' === s.type) {
    let e = t.map(e => [
        _.MoX.KEYBOARD_KEY,
        r()(e),
        _.CgE.BROWSER
      ]),
      {
        keyCode: n
      } = s;
    null == e.find(e => {
      let [, t] = e;
      return n === t;
    }) && e.push([
      _.MoX.KEYBOARD_KEY,
      n,
      _.CgE.BROWSER
    ]), this.handleComboChange(e);
  }
}), E(this, 'handleGSChange', e => {
  if (!1 === this._mounted)
    return;
  let t = [...e.combo];
  this.handleComboChange(t);
}), E(this, 'handleNativeChange', e => {
  e.length > 0 && this.handleComboChange(e), this.recordEnd();
});
let {
  defaultValue: t
} = e;
this.state = {
  codes: t,
  mode: l.c.DEFAULT
};
  }
}
t.Z = T;