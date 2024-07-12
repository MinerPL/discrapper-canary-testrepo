s.d(t, {
  Z: function() {
return O;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(780384),
  c = s(481060),
  d = s(846027),
  _ = s(921801),
  E = s(131951),
  u = s(285952),
  T = s(210887),
  I = s(996073),
  S = s(526761),
  N = s(726985),
  C = s(689938),
  m = s(549856);
let A = s(651714),
  h = s(297166);

function g() {
  let {
experimentalEncoders: e
  } = (0, o.cj)([E.Z], () => ({
experimentalEncoders: E.Z.getExperimentalEncoders()
  }));
  return (0, n.jsx)(_.F, {
setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
children: (0, n.jsx)(c.FormSwitch, {
  className: r()(m.marginTop8, m.marginBottom20),
  value: e,
  onChange: e => d.Z.setExperimentalEncoders(e),
  disabled: !1,
  children: C.Z.Messages.EXPERIMENTAL_ENCODERS
})
  });
}

function O() {
  let e = (0, o.e7)([T.Z], () => T.Z.theme),
{
  openH264: t,
  hardwareEncoding: s
} = (0, o.cj)([E.Z], () => ({
  openH264: E.Z.getOpenH264(),
  hardwareEncoding: E.Z.getHardwareEncoding()
})),
i = a.useRef(null);
  return (0, I.Z)(i, S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(_.F, {
    setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
    children: (0, n.jsx)(c.FormSection, {
      className: m.marginBottom20,
      title: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
      children: (0, n.jsx)(c.FormNotice, {
        className: m.marginBottom20,
        type: c.FormNoticeTypes.PRIMARY,
        imageData: {
          src: (0, l.ap)(e) ? A : h,
          width: 70,
          height: 40
        },
        align: u.Z.Align.CENTER,
        body: C.Z.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
      })
    })
  }),
  (0, n.jsx)(_.F, {
    setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    children: (0, n.jsxs)(c.FormSection, {
      className: m.marginBottom20,
      title: C.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
      children: [
        (0, n.jsx)(_.F, {
          setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
          children: (0, n.jsx)(c.FormSwitch, {
            className: r()(m.marginTop8, m.marginBottom20),
            value: t,
            onChange: e => d.Z.setOpenH264(e),
            disabled: !1,
            children: C.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264
          })
        }),
        (0, n.jsx)('div', {
          style: {
            scrollMarginTop: '48px'
          },
          ref: i
        }),
        (0, n.jsx)(_.F, {
          setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
          children: (0, n.jsx)(c.FormSwitch, {
            className: r()(m.marginTop8, m.marginBottom20),
            value: s,
            onChange: e => d.Z.setHardwareEncoding(e),
            note: C.Z.Messages.FORM_HELP_HARDWARE_ENCODING,
            children: C.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING
          })
        }),
        (0, n.jsx)(g, {})
      ]
    })
  })
]
  });
}