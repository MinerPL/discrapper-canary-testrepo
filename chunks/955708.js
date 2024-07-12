n.r(t), n.d(t, {
  InappropriateConversationModalSlideKeys: function() {
return s;
  }
}), n(47120);
var s, o, r = n(735250),
  a = n(470079),
  i = n(481060),
  c = n(378298),
  E = n(473092),
  N = n(684471),
  u = n(745982),
  I = n(463439),
  T = n(689938),
  l = n(567214);
(o = s || (s = {}))[o.INTRO = 0] = 'INTRO', o[o.SAFETY_TIPS = 1] = 'SAFETY_TIPS', o[o.TAKE_ACTION = 2] = 'TAKE_ACTION';
t.default = e => {
  let {
warningId: t,
warningType: n,
senderId: s,
modalProps: o,
channelId: _
  } = e, [A, d] = a.useState(0), R = a.useMemo(() => ({
channelId: _,
senderId: s,
warningId: t,
warningType: n,
isNudgeWarning: !1
  }), [
_,
s,
t,
n
  ]);
  a.useEffect(() => {
(0, E.KQ)({
  ...R,
  viewName: E.pb.SAFETY_TAKEOVER_MODAL
});
  }, [R]);
  let O = a.useCallback(e => {
  (0, E.qc)({
    ...R,
    cta: e
  });
}, [R]),
[C, S] = a.useState(!1);

  function P(e) {
d(e);
  }
  return (0, r.jsxs)(i.ModalRoot, {
transitionState: o.transitionState,
children: [
  (0, r.jsx)('div', {
    className: l.container,
    children: (0, r.jsxs)(i.Slides, {
      width: 440,
      activeSlide: A,
      centered: !1,
      overflow: 'visible',
      contentDisplay: 'flex',
      children: [
        (0, r.jsx)(i.Slide, {
          id: 0,
          children: (0, r.jsx)(N.Z, {
            warningId: t,
            senderId: s,
            trackAnalyticsEvent: O,
            onNavigate: P
          })
        }),
        (0, r.jsx)(i.Slide, {
          id: 1,
          children: (0, r.jsx)(u.Z, {
            warningId: t,
            senderId: s,
            trackAnalyticsEvent: O
          })
        }),
        (0, r.jsx)(i.Slide, {
          id: 2,
          children: (0, r.jsx)(I.Z, {
            warningId: t,
            senderId: s,
            trackAnalyticsEvent: O,
            channelId: _,
            hasReported: C,
            onReport: function() {
              S(!0);
            }
          })
        })
      ]
    })
  }),
  (0, r.jsxs)(i.ModalFooter, {
    className: l.footer,
    children: [
      (0, r.jsx)(i.Button, {
        className: l.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: function() {
          o.onClose(), (0, c.T)(_, [t]), O(E.NM.USER_TAKEOVER_MODAL_DISMISS);
        },
        children: T.Z.Messages.CLOSE
      }),
      0 !== A && (0, r.jsx)(i.Button, {
        className: l.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: () => P(0),
        children: T.Z.Messages.BACK
      })
    ]
  })
]
  });
};