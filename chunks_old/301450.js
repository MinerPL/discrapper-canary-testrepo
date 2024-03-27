"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  i = s("917351"),
  a = s.n(i),
  r = s("446674"),
  o = s("77078"),
  d = s("629109"),
  u = s("278108"),
  h = s("996808"),
  c = s("42887"),
  m = s("145131"),
  p = s("476765"),
  f = s("829536"),
  g = s("49111"),
  E = s("353927"),
  R = s("782340"),
  T = s("519135"),
  _ = s("890957");
let C = (0, p.uid)(),
  M = (0, p.uid)(),
  O = (0, p.uid)();
class D extends l.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, n.jsx)(p.UID, {
      children: t => (0, n.jsxs)(m.default, {
        className: _.marginBottom4,
        children: [(0, n.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H3,
          children: (0, n.jsx)("label", {
            htmlFor: t,
            children: R.default.Messages.FORM_LABEL_AUTOMATIC_VAD
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
      "aria-label": R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    })
  }
  render() {
    return (0, n.jsxs)(o.FormItem, {
      title: R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      className: _.marginBottom8,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), this.handleAutoThresholdChange = e => {
      let {
        onThresholdChange: t,
        threshold: s
      } = this.props;
      null == t || t(s, e)
    }, this.handleSensitivityChange = e => {
      let {
        onThresholdChange: t,
        autoThreshold: s
      } = this.props;
      null == t || t(-((100 - e) * 1), s)
    }
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
      inputVolume: T,
      outputDeviceId: I,
      outputDevices: x,
      outputVolume: v,
      speaking: N = !1
    } = e,
    S = a.first(p),
    b = null != S && S.disabled,
    U = a.first(x),
    A = null != U && U.disabled,
    j = [{
      value: g.InputModes.VOICE_ACTIVITY,
      name: R.default.Messages.INPUT_MODE_VAD
    }, {
      value: g.InputModes.PUSH_TO_TALK,
      name: R.default.Messages.INPUT_MODE_PTT
    }];
  return t = i === g.InputModes.PUSH_TO_TALK ? (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(o.FormItem, {
      title: R.default.Messages.FORM_LABEL_SHORTCUT,
      className: _.marginBottom20,
      children: (0, n.jsx)(u.default, {
        defaultValue: r,
        onChange: e => d.default.setMode(i, {
          shortcut: e
        }, s)
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: _.marginBottom8,
      children: [(0, n.jsx)(o.FormTitle, {
        id: C,
        children: R.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
      }), (0, n.jsx)(o.Slider, {
        initialValue: h,
        onValueChange: e => d.default.setMode(i, {
          delay: e
        }, s),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: g.MAX_PTT_RELEASE_DELAY,
        "aria-labelledby": C
      })]
    })]
  }) : (0, n.jsx)(D, {
    speaking: N,
    inputMode: i,
    threshold: c,
    autoThreshold: m,
    onThresholdChange: (e, t) => d.default.setMode(i, {
      threshold: e,
      autoThreshold: t
    }, s)
  }), (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(o.FormItem, {
      title: R.default.Messages.FORM_LABEL_INPUT_DEVICE,
      className: _.marginBottom20,
      children: (0, n.jsx)(o.SingleSelect, {
        value: E,
        onChange: e => d.default.setInputDevice(e, "Voice Settings"),
        options: a.map(p, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: b
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: _.marginBottom20,
      children: [(0, n.jsx)(o.FormTitle, {
        id: M,
        children: R.default.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(o.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(T),
        asValueChanges: e => d.default.setInputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": M
      })]
    }), (0, n.jsx)(o.FormItem, {
      title: R.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
      className: _.marginBottom20,
      children: (0, n.jsx)(o.SingleSelect, {
        value: I,
        onChange: e => d.default.setOutputDevice(e, "Voice Settings"),
        options: a.map(x, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: A
      })
    }), (0, n.jsxs)(o.FormItem, {
      className: _.marginBottom20,
      children: [(0, n.jsx)(o.FormTitle, {
        id: O,
        children: R.default.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(o.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(v),
        maxValue: 200,
        asValueChanges: e => d.default.setOutputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": O
      })]
    }), (0, n.jsx)(o.FormItem, {
      title: R.default.Messages.FORM_LABEL_INPUT_MODE,
      className: _.marginBottom20,
      children: (0, n.jsx)(o.RadioGroup, {
        onChange: e => {
          let {
            value: t
          } = e;
          return d.default.setMode(t, {}, s)
        },
        options: j,
        value: i
      })
    }), t]
  })
});

function x(e) {
  var t;
  return (0, h.default)(() => {
    null != g.CURRENT_APP_CONTEXT && e.onClose()
  }), (0, n.jsxs)(o.ModalRoot, {
    transitionState: e.transitionState,
    "aria-label": R.default.Messages.VOICE_SETTINGS,
    children: [(0, n.jsxs)(o.ModalHeader, {
      children: [(0, n.jsxs)(m.default.Child, {
        children: [(0, n.jsx)(o.FormTitle, {
          tag: "h1",
          className: _.marginReset,
          children: R.default.Messages.VOICE_SETTINGS
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: T.title,
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