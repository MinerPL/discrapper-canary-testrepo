"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("46973"),
  d = s("846519"),
  u = s("692547"),
  c = s("481060"),
  S = s("846027"),
  E = s("131951"),
  T = s("153124"),
  f = s("65154"),
  m = s("689938"),
  _ = s("756111"),
  g = s("26673"),
  h = s("949086");
let I = (0, T.uid)();

function N() {
  let [e, t] = n.useState(-100), [s, l] = n.useState(!1), {
    threshold: N,
    autoThreshold: p
  } = (0, r.useStateFromStoresObject)([E.default], () => E.default.getModeOptions()), {
    inputMode: C,
    automaticVADSupported: A,
    isEnabled: O
  } = (0, r.useStateFromStoresObject)([E.default], () => ({
    inputMode: E.default.getMode(),
    automaticVADSupported: E.default.supports(f.Features.AUTOMATIC_VAD),
    isEnabled: E.default.isEnabled()
  }));

  function x(e, s) {
    t(e), l((s & f.SpeakingFlags.VOICE) === f.SpeakingFlags.VOICE)
  }

  function R(e, t) {
    S.default.setMode(C, {
      threshold: e,
      autoThreshold: t
    })
  }
  n.useEffect(() => {
    let e = new d.Timeout;
    return e.start(1e3, () => {
      E.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, x), e.stop()
    }), () => {
      E.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, x), e.stop()
    }
  }, []);
  let M = (0, a.jsx)("section", {
    className: i()(_.inputSensitivityToggle, _.manual),
    children: (0, a.jsx)(c.Slider, {
      initialValue: N + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => R(-((100 - e) * 1), p),
      barStyles: {
        background: u.default.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: u.default.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": I,
      children: (0, a.jsxs)("div", {
        className: i()(_.sliderBar, _.microphone, _.inputSensitivityBar),
        children: [(0, a.jsx)("div", {
          className: i()(_.fill, _.inputSensitivityBarFill),
          style: {
            width: e + 100 + "%"
          }
        }), (0, a.jsx)("div", {
          className: "grow"
        })]
      })
    })
  });
  return p && (M = (0, a.jsxs)("section", {
    className: _.inputSensitivityToggle,
    children: [(0, a.jsx)("div", {
      className: _.inputSensitivitySlider,
      children: (0, a.jsx)("div", {
        className: i()(_.inputSensitivityBar, _.sliderBar, {
          [_.speaking]: s
        })
      })
    }), (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: h.marginBottom8,
      children: m.default.Messages.FORM_HELP_AUTOMATIC_VAD
    })]
  })), (0, a.jsxs)(c.FormItem, {
    className: _.sensitivity,
    children: [(0, a.jsx)(c.FormTitle, {
      id: I,
      tag: c.FormTitleTags.H5,
      className: h.marginBottom8,
      children: m.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    }), (0, a.jsxs)("div", {
      children: [A && (0, a.jsx)(T.UID, {
        children: e => (0, a.jsxs)("div", {
          className: i()(g.horizontal, h.marginBottom4),
          children: [(0, a.jsx)(c.FormTitle, {
            tag: c.FormTitleTags.H3,
            className: h.marginReset,
            children: (0, a.jsx)("label", {
              htmlFor: e,
              children: m.default.Messages.FORM_LABEL_AUTOMATIC_VAD
            })
          }), (0, a.jsx)(c.Switch, {
            id: e,
            checked: p,
            onChange: e => R(N, e)
          })]
        })
      }), M]
    }), !O && (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: i()(_.inputDisabledWarning, h.marginBottom8),
      children: m.default.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
        onEnableClick: S.default.enable
      })
    })]
  })
}