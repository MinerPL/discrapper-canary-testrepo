t.d(s, {
  Z: function() {
return m;
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(392711),
  i = t.n(a),
  r = t(442837),
  o = t(780384),
  l = t(481060),
  c = t(846027),
  d = t(600164),
  _ = t(463395),
  E = t(131951),
  u = t(210887),
  I = t(962100),
  T = t(65154),
  S = t(689938),
  N = t(107246),
  C = t(224499);

function m() {
  let e, s;
  let a = (0, r.e7)([u.Z], () => u.Z.theme),
{
  canSetInputDevice: m,
  canSetOutputDevice: A,
  inputDeviceId: g,
  outputDeviceId: O
} = (0, r.cj)([E.Z], () => ({
  canSetInputDevice: E.Z.supports(T.AN.AUDIO_INPUT_DEVICE),
  canSetOutputDevice: E.Z.supports(T.AN.AUDIO_OUTPUT_DEVICE),
  inputDeviceId: E.Z.getInputDeviceId(),
  outputDeviceId: E.Z.getOutputDeviceId()
})),
h = (0, r.e7)([E.Z], () => E.Z.getInputDevices()),
p = (0, r.e7)([E.Z], () => E.Z.getOutputDevices());
  !m && (e = (0, n.jsx)(l.FormText, {
type: l.FormText.Types.DESCRIPTION,
className: C.marginTop8,
children: S.Z.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
  onDownloadClick: () => (0, I.y)('Help Text Input Devices')
})
  })), !A && (s = (0, n.jsx)(l.FormText, {
type: l.FormText.Types.DESCRIPTION,
className: C.marginTop8,
children: S.Z.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
  onDownloadClick: () => (0, I.y)('Help Text Output Devices')
})
  }));
  let R = i()(h).values().first(),
x = null != R ? R.disabled : null != e,
M = i()(p).values().first(),
f = null != M ? M.disabled : null != s;

  function D(e) {
let s, {
  label: i,
  value: r
} = e;
if (_.Z.isCertified(r)) {
  let e = (0, o.ap)(a) ? t(561259) : t(887695);
  s = (0, n.jsx)('img', {
    src: e,
    alt: 'Certified',
    className: N.deviceOptionCertified
  });
}
return (0, n.jsxs)('span', {
  className: N.deviceOption,
  children: [
    (0, n.jsx)('span', {
      className: N.deviceOptionLabel,
      children: _.Z.getCertifiedDeviceName(r, i)
    }),
    s
  ]
}, r);
  }

  function P(e) {
return D(e[0]);
  }
  return (0, n.jsxs)(d.Z, {
className: C.marginBottom20,
children: [
  (0, n.jsxs)(d.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: C.marginBottom8,
        children: S.Z.Messages.FORM_LABEL_INPUT_DEVICE
      }),
      (0, n.jsx)(l.SingleSelect, {
        value: g,
        onChange: e => c.Z.setInputDevice(e, 'Settings'),
        options: i().map(h, e => {
          let {
            id: s,
            name: t
          } = e;
          return {
            value: s,
            label: t
          };
        }),
        isDisabled: x,
        renderOptionValue: P,
        renderOptionLabel: D
      }),
      e
    ]
  }),
  (0, n.jsxs)(d.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: C.marginBottom8,
        children: S.Z.Messages.FORM_LABEL_OUTPUT_DEVICE
      }),
      (0, n.jsx)(l.SingleSelect, {
        value: O,
        onChange: e => c.Z.setOutputDevice(e, 'Settings'),
        options: i().map(p, e => {
          let {
            id: s,
            name: t
          } = e;
          return {
            value: s,
            label: t
          };
        }),
        isDisabled: f,
        renderOptionValue: P,
        renderOptionLabel: D
      }),
      s
    ]
  })
]
  });
}