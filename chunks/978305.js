s.r(o), s(47120);
var r = s(735250),
  t = s(470079),
  n = s(120356),
  a = s.n(n),
  i = s(512722),
  c = s.n(i),
  l = s(481060),
  d = s(277390),
  C = s(626135),
  _ = s(985002),
  u = s(880257),
  f = s(631885),
  m = s(292352),
  E = s(981631),
  x = s(689938),
  N = s(167614),
  h = s(549856);
o.default = e => {
  let {
transitionState: o,
onClose: s
  } = e, n = (0, u.Z)(), [i, R] = t.useState(!1), {
getLinkCode: b,
isGetLinkCodeLoading: p
  } = (0, _.G)({}), I = (0, f.rW)(), g = (0, f.gU)(), M = t.useRef(g);
  c()(!n, 'FamilyCenterQRCodeModal should only be rendered for teens.');
  let O = () => {
R(e => (C.default.track(E.rMx.FAMILY_CENTER_ACTION, {
  action: i ? m.YC.HideQRCode : m.YC.RevealQRCode
}), !e)), !i && setTimeout(() => {
  s();
}, m.f2);
  };
  t.useEffect(() => {
b();
  }, []), t.useEffect(() => {
g > M.current && s();
  }, [
M,
g,
s
  ]);
  let v = i && !p && null != I;
  return (0, r.jsxs)(l.ModalRoot, {
className: N.modalRoot,
transitionState: o,
children: [
  (0, r.jsxs)(l.Notice, {
    className: N.notice,
    color: l.NoticeColors.WARNING,
    children: [
      (0, r.jsx)(l.CircleInformationIcon, {
        size: 'sm',
        color: 'currentColor',
        className: N.infoIcon
      }),
      x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE
    ]
  }),
  (0, r.jsxs)(l.ModalContent, {
    className: N.content,
    children: [
      (0, r.jsx)(l.Text, {
        className: h.marginBottom8,
        variant: 'text-lg/bold',
        color: 'header-primary',
        children: x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
      }),
      (0, r.jsx)(l.Text, {
        className: h.marginBottom20,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
          link: 'https://support.discord.com/hc/articles/14155060633623'
        })
      }),
      (0, r.jsx)('div', {
        className: N.qrCode,
        children: (0, r.jsx)(l.Clickable, {
          className: a()(N.qrCodeObscure, {
            [N.visible]: v
          }),
          onClick: O,
          children: (0, r.jsx)(d.c2, {
            size: 272,
            text: v ? I : m.vH,
            overlaySize: d.cK.SIZE_60
          })
        })
      }),
      (0, r.jsx)(l.Text, {
        className: N.reminder,
        variant: 'text-xs/semibold',
        color: 'header-secondary',
        children: x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
      }),
      (0, r.jsxs)('div', {
        className: a()(N.buttonContainer, h.marginTop20),
        children: [
          (0, r.jsx)(l.Button, {
            className: h.marginBottom8,
            grow: !0,
            size: l.Button.Sizes.LARGE,
            onClick: O,
            submitting: i && p,
            children: i ? x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : x.Z.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
          }),
          (0, r.jsx)(l.Button, {
            grow: !0,
            color: l.Button.Colors.PRIMARY,
            onClick: s,
            children: x.Z.Messages.CLOSE
          })
        ]
      })
    ]
  })
]
  });
};