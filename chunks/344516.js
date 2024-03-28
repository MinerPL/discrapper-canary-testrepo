"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120");
var n = s("735250"),
  l = s("470079"),
  i = s("392711"),
  a = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("846027"),
  u = s("825209"),
  h = s("382577"),
  c = s("131951"),
  m = s("285952"),
  p = s("153124"),
  f = s("36703"),
  g = s("981631"),
  E = s("65154"),
  _ = s("689938"),
  R = s("515731"),
  T = s("794711");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let O = (0, p.uid)(),
  M = (0, p.uid)(),
  D = (0, p.uid)();
class b extends l.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, n.jsx)(p.UID, {
      children: t => (0, n.jsxs)(m.default, {
        className: T.marginBottom4,
        children: [(0, n.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H3,
          children: (0, n.jsx)("label", {
            htmlFor: t,
            children: _.default.Messages.FORM_LABEL_AUTOMATIC_VAD
          })
        }), (0, n.jsx)(o.Switch, {
          id: t,
          checked: e,
          onChange: this.handleAutoThresholdChange
        })]
      })
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!e) return (0, n.jsx)(o.Slider, {
      initialValue: t + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      "aria-label": _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    })
  }
  render() {
    return (0, n.jsxs)(o.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      className: T.marginBottom8,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), C(this, "handleAutoThresholdChange", e => {
      let {
        onThresholdChange: t,
        threshold: s
      } = this.props;
      null == t || t(s, e)
    }), C(this, "handleSensitivityChange", e => {
      let {
        onThresholdChange: t,
        autoThreshold: s
      } = this.props;
      null == t || t(-((100 - e) * 1), s)
    })
  }
}
let I = r.default.connectStores([c.default], e => {
  let {
    mediaEngineContext: t
  } = e;
  return {
    inputVolume: c.default.getInputVolume(),
    outputVolume: c.default.getOutputVolume(),
    inputDeviceId: c.default.getInputDeviceId(),
    inputDevices: c.default.getInputDevices(),
    outputDevices: c.default.getOutputDevices(),
    outputDeviceId: c.default.getOutputDeviceId(),
    inputMode: c.default.getMode(t),
    shortcut: c.default.getModeOptions(t).shortcut,
    vadThreshold: c.default.getModeOptions(t).threshold,
    vadAutoThreshold: c.default.getModeOptions(t).autoThreshold,
    delay: c.default.getModeOptions(t).delay
  }
})(e => {
  let t, {
      mediaEngineContext: s,
      inputMode: i,
      shortcut: r,
      delay: h,
      vadThreshold: c,
      vadAutoThreshold: m,
      inputDevices: p,
      inputDeviceId: E,
      inputVolume: R,
      outputDeviceId: C,
      outputDevices: I,
      outputVolume: v,
      speaking: x = !1
    } = e,
    N = a().first(p),
    S = null != N && N.disabled,
    j = a().first(I),
    U = null != j && j.disabled,
    A = [{
      value: g.InputModes.VOICE_ACTIVITY,
      name: _.default.Messages.INPUT_MODE_VAD
    }, {
      value: g.InputModes.PUSH_TO_TALK,
      name: _.default.Messages.INPUT_MODE_PTT
    }];
  return t = i === g.InputModes.PUSH_TO_TALK ? (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(o.FormItem, {
      title: _.default.Messages.FORM_LABEL_SHORTCUT,
      className: T.marginBottom20,
      children: (0, n.jsx)(u.default, {
        defaultValue: r,
        onChange: e => d.default.setMode(i, {
          shortcut: e
        }, s)
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: T.marginBottom8,
      children: [(0, n.jsx)(o.FormTitle, {
        id: O,
        children: _.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
      }), (0, n.jsx)(o.Slider, {
        initialValue: h,
        onValueChange: e => d.default.setMode(i, {
          delay: e
        }, s),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: g.MAX_PTT_RELEASE_DELAY,
        "aria-labelledby": O
      })]
    })]
  }) : (0, n.jsx)(b, {
    speaking: x,
    inputMode: i,
    threshold: c,
    autoThreshold: m,
    onThresholdChange: (e, t) => d.default.setMode(i, {
      threshold: e,
      autoThreshold: t
    }, s)
  }), (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(o.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(o.SingleSelect, {
        value: E,
        onChange: e => d.default.setInputDevice(e, "Voice Settings"),
        options: a().map(p, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: S
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(o.FormTitle, {
        id: M,
        children: _.default.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(o.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(R),
        asValueChanges: e => d.default.setInputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": M
      })]
    }), (0, n.jsx)(o.FormItem, {
      title: _.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(o.SingleSelect, {
        value: C,
        onChange: e => d.default.setOutputDevice(e, "Voice Settings"),
        options: a().map(I, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: U
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(o.FormTitle, {
        id: D,
        children: _.default.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(o.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(v),
        maxValue: 200,
        asValueChanges: e => d.default.setOutputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": D
      })]
    }), (0, n.jsx)(o.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_MODE,
      className: T.marginBottom20,
      children: (0, n.jsx)(o.RadioGroup, {
        onChange: e => {
          let {
            value: t
          } = e;
          return d.default.setMode(t, {}, s)
        },
        options: A,
        value: i
      })
    }), t]
  })
});

function v(e) {
  var t;
  return (0, h.default)(() => {
    null != g.CURRENT_APP_CONTEXT && e.onClose()
  }), (0, n.jsxs)(o.ModalRoot, {
    transitionState: e.transitionState,
    "aria-label": _.default.Messages.VOICE_SETTINGS,
    children: [(0, n.jsxs)(o.ModalHeader, {
      children: [(0, n.jsxs)(m.default.Child, {
        children: [(0, n.jsx)(o.FormTitle, {
          tag: "h1",
          className: T.marginReset,
          children: _.default.Messages.VOICE_SETTINGS
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: R.title,
          children: e.title
        })]
      }), (0, n.jsx)(m.default.Child, {
        grow: 0,
        children: (0, n.jsx)(o.ModalCloseButton, {
          onClick: e.onClose
        })
      })]
    }), (0, n.jsx)(o.ModalContent, {
      children: (0, n.jsx)(I, {
        mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : E.MediaEngineContextTypes.DEFAULT
      })
    })]
  })
}