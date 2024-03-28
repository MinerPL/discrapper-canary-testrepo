"use strict";
n.r(t), n.d(t, {
  NotchBackground: function() {
    return h.NotchBackground
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("46973"),
  u = n("846519"),
  d = n("481060"),
  c = n("846027"),
  f = n("131951"),
  E = n("19780"),
  h = n("233304"),
  _ = n("626135"),
  C = n("981631"),
  m = n("689938"),
  S = n("519161");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends s.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), f.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: a,
      outputVolume: s,
      inputMode: l,
      vadAutoThreshold: i,
      vadThreshold: r,
      location: o,
      isDeafened: u
    } = this.props, d = !1;
    e && !u && (c.default.toggleSelfDeaf(), d = !0), c.default.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: d
    }), _.default.track(C.AnalyticEvents.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: a,
      output_device_volume: s,
      input_mode: l,
      input_sensitivity_is_automatic: i,
      input_sensitivity_threshold: Math.round(r),
      location: o
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: n,
      isDeafened: a
    } = this.props;
    if (!!t) n && a && e && c.default.toggleSelfDeaf(), c.default.setLoopback(!1), this.setState({
      isMicTesting: !1,
      didDeafenUser: !1
    }), null != this._micTestStartTime && _.default.track(C.AnalyticEvents.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    })
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: n,
      isDetectingInput: s
    } = this.state;
    return (0, a.jsx)(d.FormText, {
      className: S.micTestCaption,
      type: d.FormText.Types.DESCRIPTION,
      children: n ? s ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: s,
      buttonTest: l,
      buttonStop: i,
      buttonClassName: r,
      buttonColor: o,
      isDeafened: u
    } = this.props, {
      isMicTesting: c,
      volume: f
    } = this.state, E = e && !c ? m.default.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return c && e && !u && this._micTestStop(), (0, a.jsxs)("div", {
      className: S.container,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: S.title,
        children: t
      }), null != n && (0, a.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: S.description,
        children: n
      }), (0, a.jsxs)("div", {
        className: S.micTest,
        children: [(0, a.jsx)(d.Tooltip, {
          text: E,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: n,
              size: d.Button.Sizes.SMALL,
              className: r,
              color: o,
              children: c ? i : l
            })
          }
        }), (0, a.jsx)(h.default, {
          progress: c ? f + 100 : 0,
          notchBackground: s
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "_initTimeout", new u.Timeout), I(this, "_silenceTimeout", new u.Timeout), I(this, "_messageTimeout", new u.Timeout), I(this, "_micTestStartTime", void 0), I(this, "state", {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }), I(this, "setupVoiceActivity", () => {
      f.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
    }), I(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= -100) {
        !this._silenceTimeout.isStarted() && this._silenceTimeout.start(2e3, () => {
          this.setState({
            isDetectingInput: !1
          })
        }), this.setState({
          volume: -100
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: !0
      })
    }), I(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}
t.default = r.default.connectStores([E.default, f.default], () => {
  let e = f.default.getInputDeviceId(),
    t = f.default.getInputDevices(),
    n = i().find(t, t => {
      let {
        id: n
      } = t;
      return n === e
    }),
    a = f.default.getOutputDeviceId(),
    s = f.default.getOutputDevices(),
    l = i().find(s, e => {
      let {
        id: t
      } = e;
      return t === a
    }),
    r = f.default.getModeOptions();
  return {
    isVoiceConnected: E.default.isConnected(),
    inputVolume: f.default.getInputVolume(),
    outputVolume: f.default.getOutputVolume(),
    inputMode: f.default.getMode(),
    vadThreshold: r.threshold,
    isDeafened: f.default.isSelfDeaf(),
    vadAutoThreshold: r.autoThreshold,
    inputDeviceName: null != n ? n.name : "",
    outputDeviceName: null != l ? l.name : ""
  }
})(p)