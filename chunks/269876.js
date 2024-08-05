s.d(t, {
  Z: function() {
return g;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(46973),
  c = s(846519),
  d = s(692547),
  _ = s(481060),
  E = s(846027),
  u = s(131951),
  T = s(153124),
  I = s(65154),
  S = s(689938),
  N = s(414976),
  C = s(483085),
  m = s(549856);
let A = (0, T.hQ)();

function g() {
  let [e, t] = a.useState(-100), [s, i] = a.useState(!1), {
threshold: g,
autoThreshold: h
  } = (0, o.cj)([u.Z], () => u.Z.getModeOptions()), {
inputMode: O,
automaticVADSupported: p,
isEnabled: R
  } = (0, o.cj)([u.Z], () => ({
inputMode: u.Z.getMode(),
automaticVADSupported: u.Z.supports(I.AN.AUTOMATIC_VAD),
isEnabled: u.Z.isEnabled()
  }));

  function x(e, s) {
t(e), i((s & I.Dg.VOICE) === I.Dg.VOICE);
  }

  function M(e, t) {
E.Z.setMode(O, {
  threshold: e,
  autoThreshold: t
});
  }
  a.useEffect(() => {
let e = new c.V7();
return e.start(1000, () => {
  u.Z.getMediaEngine().on(l.aB.VoiceActivity, x), e.stop();
}), () => {
  u.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, x), e.stop();
};
  }, []);
  let f = (0, n.jsx)('section', {
className: r()(N.inputSensitivityToggle, N.manual),
children: (0, n.jsx)(_.Slider, {
  initialValue: g + 100,
  onValueRender: e => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
  onValueChange: e => M(-((100 - e) * 1), h),
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
  return h && (f = (0, n.jsxs)('section', {
className: N.inputSensitivityToggle,
children: [
  (0, n.jsx)('div', {
    className: N.inputSensitivitySlider,
    children: (0, n.jsx)('div', {
      className: r()(N.inputSensitivityBar, N.sliderBar, {
        [N.speaking]: s
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
      p && (0, n.jsx)(T.FG, {
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
              checked: h,
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