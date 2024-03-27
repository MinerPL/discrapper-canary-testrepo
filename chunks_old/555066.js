"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("773364"),
  d = s("862337"),
  u = s("669491"),
  c = s("77078"),
  S = s("629109"),
  E = s("42887"),
  T = s("476765"),
  f = s("353927"),
  _ = s("782340"),
  m = s("579944"),
  g = s("125047"),
  h = s("890957");
let N = (0, T.uid)();

function I() {
  let [e, t] = n.useState(-100), [s, l] = n.useState(!1), {
    threshold: I,
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
    className: i(m.inputSensitivityToggle, m.manual),
    children: (0, a.jsx)(c.Slider, {
      initialValue: I + 100,
      onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
      onValueChange: e => R(-((100 - e) * 1), p),
      barStyles: {
        background: u.default.unsafe_rawColors.GREEN_360.css
      },
      fillStyles: {
        background: u.default.unsafe_rawColors.YELLOW_300.css
      },
      "aria-labelledby": N,
      children: (0, a.jsxs)("div", {
        className: i(m.sliderBar, m.microphone, m.inputSensitivityBar),
        children: [(0, a.jsx)("div", {
          className: i(m.fill, m.inputSensitivityBarFill),
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
    className: m.inputSensitivityToggle,
    children: [(0, a.jsx)("div", {
      className: m.inputSensitivitySlider,
      children: (0, a.jsx)("div", {
        className: i(m.inputSensitivityBar, m.sliderBar, {
          [m.speaking]: s
        })
      })
    }), (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: h.marginBottom8,
      children: _.default.Messages.FORM_HELP_AUTOMATIC_VAD
    })]
  })), (0, a.jsxs)(c.FormItem, {
    className: m.sensitivity,
    children: [(0, a.jsx)(c.FormTitle, {
      id: N,
      tag: c.FormTitleTags.H5,
      className: h.marginBottom8,
      children: _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    }), (0, a.jsxs)("div", {
      children: [A && (0, a.jsx)(T.UID, {
        children: e => (0, a.jsxs)("div", {
          className: i(g.horizontal, h.marginBottom4),
          children: [(0, a.jsx)(c.FormTitle, {
            tag: c.FormTitleTags.H3,
            className: h.marginReset,
            children: (0, a.jsx)("label", {
              htmlFor: e,
              children: _.default.Messages.FORM_LABEL_AUTOMATIC_VAD
            })
          }), (0, a.jsx)(c.Switch, {
            id: e,
            checked: p,
            onChange: e => R(I, e)
          })]
        })
      }), M]
    }), !O && (0, a.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      className: i(m.inputDisabledWarning, h.marginBottom8),
      children: _.default.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
        onEnableClick: S.default.enable
      })
    })]
  })
}