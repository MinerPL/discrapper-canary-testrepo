t.r(s), t.d(s, {
  default: function() {
return m;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  o = t(990547),
  l = t(442837),
  r = t(481060),
  i = t(809206),
  d = t(594174),
  c = t(264119),
  u = t(75788),
  _ = t(22150),
  E = t(361833),
  N = t(526761),
  C = t(660817),
  A = t(800010);

function m(e) {
  var s;
  let {
transitionState: t,
onClose: m
  } = e, S = (0, l.e7)([d.default], () => d.default.getCurrentUser()), T = a.useRef(null !== (s = null == S ? void 0 : S.verified) && void 0 !== s && s);
  a.useEffect(() => () => (0, i.Zy)(), []);
  let M = null == S ? void 0 : S.verified,
x = M ? N.Ax.CONFIRM_START : N.Ax.EMAIL_AND_PASSWORD,
[I, R] = a.useState(x),
[h, v] = a.useState(null),
[O, f] = a.useState(null),
[p, j] = a.useState(null),
[U, L] = a.useState(''),
g = {
  impression_group: o.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
};
  return (0, n.jsxs)(r.ModalRoot, {
transitionState: t,
disableTrack: !0,
children: [
  (0, n.jsx)('img', {
    alt: '',
    className: C.headerImage,
    src: A
  }),
  (0, n.jsxs)(r.Slides, {
    activeSlide: I,
    width: 440,
    onSlideReady: e => v(e),
    children: [
      (0, n.jsx)(r.Slide, {
        id: N.Ax.CONFIRM_START,
        impressionName: o.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: g,
        children: (0, n.jsx)(_.Z, {
          onNext: () => R(N.Ax.CONFIRM_CODE),
          onClose: m
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: N.Ax.CONFIRM_CODE,
        impressionName: o.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: g,
        children: (0, n.jsx)(u.Z, {
          error: p,
          setError: j,
          setEmailToken: f,
          isSlideReady: h === N.Ax.CONFIRM_CODE,
          onNext: () => R(N.Ax.EMAIL_AND_PASSWORD),
          onClose: m
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: N.Ax.EMAIL_AND_PASSWORD,
        impressionName: o.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...g,
          email_verified: T.current
        },
        children: (0, n.jsx)(E.Z, {
          emailToken: O,
          isSlideReady: h === N.Ax.EMAIL_AND_PASSWORD,
          onBack: M ? () => R(N.Ax.CONFIRM_CODE) : null,
          onNext: e => {
            L(e), R(N.Ax.COMPLETE);
          },
          onClose: m
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: N.Ax.COMPLETE,
        impressionName: o.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: g,
        children: (0, n.jsx)(c.Z, {
          email: U,
          onClose: m
        })
      })
    ]
  })
]
  });
}