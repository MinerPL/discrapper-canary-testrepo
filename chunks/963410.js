n.r(t), n.d(t, {
  default: function() {
return g;
  }
}), n(642549);
var o = n(735250),
  r = n(470079),
  a = n(442837),
  s = n(481060),
  i = n(377171),
  c = n(592125),
  l = n(594174),
  E = n(153124),
  u = n(5192),
  d = n(571826),
  _ = n(630759),
  I = n(210975),
  f = n(436055),
  h = n(785792),
  R = n(190054),
  S = n(760373),
  C = n(981631),
  M = n(689938),
  m = n(846045);

function g(e) {
  let {
transitionState: t,
userId: n,
channelId: g,
onClose: N
  } = e, T = (0, E.Dt)(), A = (0, a.e7)([l.default], () => l.default.getUser(n)), x = (0, a.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getChannel(g)) || void 0 === e ? void 0 : e.getGuildId();
  }), D = u.ZP.useName(x, null, A), Z = btoa('12345'.repeat(12)), O = (0, f.E)({
codeBase64: btoa('12345'.repeat(12)),
chunkSize: S.iQ,
desiredLength: S.KN
  }), F = r.useCallback(() => {
(0, _.TQ)(n, Z, g, C.Sbl.E2EE_USER_VERIFY_MODAL), N();
  }, [
n,
Z,
g,
N
  ]), k = r.useCallback(() => {
(0, _.KF)(n, Z), N();
  }, [
N,
Z,
n
  ]), v = r.useCallback(() => {
(0, d.s$)({
  userId: n,
  channelId: g
});
  }, [
g,
n
  ]), p = (0, I.wV)({
userId: n,
channelId: g,
location: 'WebSecureFramesUserVerificationModal'
  });
  return r.useEffect(() => {
(0, d.Rq)({
  userId: n,
  channelId: g
});
  }, [
g,
n
  ]), (0, o.jsxs)(s.ModalRoot, {
transitionState: t,
'aria-labelledby': T,
children: [
  (0, o.jsx)('div', {
    className: m.shieldIconContainer,
    children: (0, o.jsx)('div', {
      className: m.shieldIcon,
      children: (0, o.jsx)(s.ShieldLockIcon, {
        size: 'custom',
        width: 55,
        height: 55,
        color: s.tokens.colors.HEADER_SECONDARY
      })
    })
  }),
  (0, o.jsxs)(s.ModalContent, {
    className: m.content,
    children: [
      (0, o.jsx)(s.Heading, {
        className: m.title,
        variant: 'heading-lg/bold',
        color: 'header-primary',
        children: M.Z.Messages.E2EE_VERIFICATION_CODE
      }),
      (0, o.jsx)(s.Text, {
        className: m.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: M.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: D
        })
      }),
      (0, o.jsxs)('div', {
        className: m.verification,
        children: [
          (0, o.jsxs)('div', {
            className: m.header,
            children: [
              (0, o.jsx)(s.Heading, {
                variant: 'text-sm/bold',
                color: 'header-primary',
                children: M.Z.Messages.E2EE_VOICE_PRIVACY_CODE
              }),
              null != O && (0, o.jsx)(R.H, {
                className: m.copyIcon,
                chunks: O,
                color: s.tokens.colors.INTERACTIVE_NORMAL,
                onCopy: v
              }),
              (0, o.jsx)(s.TextBadge, {
                text: M.Z.Messages.NEW,
                color: i.Z.STATUS_DANGER
              })
            ]
          }),
          (0, o.jsx)(h.b, {
            className: m.code,
            chunks: O,
            columns: S.ak
          })
        ]
      }),
      (0, o.jsx)(s.Text, {
        className: m.details,
        variant: 'text-sm/normal',
        color: 'text-muted',
        children: M.Z.Messages.E2EE_USER_VERIFICATION_FOOTER_TEXT.format({
          helpArticle: S.l4
        })
      }),
      (0, o.jsx)(s.Button, {
        fullWidth: !0,
        className: m.verifiedButton,
        color: p ? s.ButtonColors.RED : s.ButtonColors.BRAND,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: p ? k : F,
        children: p ? M.Z.Messages.E2EE_CLEAR_VERIFICATION : M.Z.Messages.E2EE_MARK_AS_VERIFIED
      }),
      (0, o.jsx)(s.Button, {
        fullWidth: !0,
        color: s.ButtonColors.PRIMARY,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: N,
        children: M.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}