"use strict";
s.r(t), s("47120"), s("653041");
var n = s("735250"),
  l = s("470079"),
  i = s("921738"),
  a = s.n(i),
  r = s("213005"),
  o = s("504884"),
  d = s("358085"),
  u = s("998502"),
  h = s("981631");

function c(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let m = d.isPlatformEmbedded && null != u.default.getDiscordUtils().inputCaptureRegisterElement;
class p extends l.PureComponent {
  componentDidMount() {
    this._mounted = !0
  }
  componentWillUnmount() {
    this._mounted = !1, this.cleanUp()
  }
  componentDidUpdate(e) {
    this.props.defaultValue !== e.defaultValue && this.setState({
      codes: this.props.defaultValue
    })
  }
  cleanUp() {
    d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
  }
  handleComboChange(e) {
    let {
      mode: t
    } = this.state, {
      onChange: s
    } = this.props;
    t === o.RecordModes.RECORDING && (null != s && s(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t;
    let {
      codes: s,
      mode: l
    } = this.state, {
      disabled: i
    } = this.props;
    return m ? (t = u.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !d.isPlatformEmbedded && (e = this.handleComboKeys), (0, n.jsx)(o.default, {
      disabled: i,
      value: s,
      mode: l,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: m
    })
  }
  constructor(e) {
    super(e), c(this, "_input", void 0), c(this, "gs", void 0), c(this, "_mounted", !1), c(this, "recordStart", () => {
      d.isPlatformEmbedded && !m && (this.gs = new r.default, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: o.RecordModes.RECORDING
      })
    }), c(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: o.RecordModes.DEFAULT
      })
    }), c(this, "toggleRecordMode", () => {
      this.state.mode === o.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
    }), c(this, "handleComboKeys", (e, t, s) => {
      if (s.preventDefault(), "keydown" === s.type) {
        let e = t.map(e => [h.KeyboardDeviceTypes.KEYBOARD_KEY, a()(e), h.KeyboardEnvs.BROWSER]),
          {
            keyCode: n
          } = s;
        null == e.find(e => {
          let [, t] = e;
          return n === t
        }) && e.push([h.KeyboardDeviceTypes.KEYBOARD_KEY, n, h.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
      }
    }), c(this, "handleGSChange", e => {
      if (!1 === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), c(this, "handleNativeChange", e => {
      e.length > 0 && this.handleComboChange(e), this.recordEnd()
    });
    let {
      defaultValue: t
    } = e;
    this.state = {
      codes: t,
      mode: o.RecordModes.DEFAULT
    }
  }
}
t.default = p