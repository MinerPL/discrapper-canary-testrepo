t.d(s, {
  Z: function() {
return g;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(46973),
  c = t(846519),
  d = t(692547),
  _ = t(481060),
  E = t(846027),
  u = t(313201),
  I = t(131951),
  T = t(65154),
  S = t(689938),
  N = t(890755),
  C = t(257995),
  m = t(224499);
let A = (0, u.hQ)();

function g() {
  let [e, s] = a.useState(-100), [t, i] = a.useState(!1), {
threshold: g,
autoThreshold: O
  } = (0, o.cj)([I.Z], () => I.Z.getModeOptions()), {
inputMode: h,
automaticVADSupported: p,
isEnabled: R
  } = (0, o.cj)([I.Z], () => ({
inputMode: I.Z.getMode(),
automaticVADSupported: I.Z.supports(T.AN.AUTOMATIC_VAD),
isEnabled: I.Z.isEnabled()
  }));

  function x(e, t) {
s(e), i((t & T.Dg.VOICE) === T.Dg.VOICE);
  }

  function M(e, s) {
E.Z.setMode(h, {
  threshold: e,
  autoThreshold: s
});
  }
  a.useEffect(() => {
let e = new c.V7();
return e.start(1000, () => {
  I.Z.getMediaEngine().on(l.aB.VoiceActivity, x), e.stop();
}), () => {
  I.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, x), e.stop();
};
  }, []);
  let f = (0, n.jsx)('section', {
className: r()(N.inputSensitivityToggle, N.manual),
children: (0, n.jsx)(_.Slider, {
  initialValue: g + 100,
  onValueRender: e => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
  onValueChange: e => M(-((100 - e) * 1), O),
  barStyles: {
    background: d.Z.unsafe_rawColors.GREEN_360.css
  },
  fillStyles: {
    background: d.Z.unsafe_rawColors.YELLOW_300.css
  },
  'aria-labelledby': A,
  children: (0, n.jsxs)('div', {
    className: r()(N.sliderBar, N.microphone, N.inputSensitivityBar),
    children: [
      (0, n.jsx)('div', {
        className: r()(N.fill, N.inputSensitivityBarFill),
        style: {
          width: e + 100 + '%'
        }
      }),
      (0, n.jsx)('div', {
        className: 'grow'
      })
    ]
  })
})
  });
  return O && (f = (0, n.jsxs)('section', {
className: N.inputSensitivityToggle,
children: [
  (0, n.jsx)('div', {
    className: N.inputSensitivitySlider,
    children: (0, n.jsx)('div', {
      className: r()(N.inputSensitivityBar, N.sliderBar, {
        [N.speaking]: t
      })
    })
  }),
  (0, n.jsx)(_.FormText, {
    type: _.FormText.Types.DESCRIPTION,
    className: m.marginBottom8,
    children: S.Z.Messages.FORM_HELP_AUTOMATIC_VAD
  })
]
  })), (0, n.jsxs)(_.FormItem, {
className: N.sensitivity,
children: [
  (0, n.jsx)(_.FormTitle, {
    id: A,
    tag: _.FormTitleTags.H5,
    className: m.marginBottom8,
    children: S.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
  }),
  (0, n.jsxs)('div', {
    children: [
      p && (0, n.jsx)(u.FG, {
        children: e => (0, n.jsxs)('div', {
          className: r()(C.horizontal, m.marginBottom4),
          children: [
            (0, n.jsx)(_.FormTitle, {
              tag: _.FormTitleTags.H3,
              className: m.marginReset,
              children: (0, n.jsx)('label', {
                htmlFor: e,
                children: S.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
              })
            }),
            (0, n.jsx)(_.Switch, {
              id: e,
              checked: O,
              onChange: e => M(g, e)
            })
          ]
        })
      }),
      f
    ]
  }),
  !R && (0, n.jsx)(_.FormText, {
    type: _.FormText.Types.DESCRIPTION,
    className: r()(N.inputDisabledWarning, m.marginBottom8),
    children: S.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
      onEnableClick: E.Z.enable
    })
  })
]
  });
}