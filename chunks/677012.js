t.r(n), t.d(n, {
  default: function() {
return x;
  }
});
var a = t(735250),
  i = t(470079),
  o = t(477690),
  r = t(481060),
  s = t(208156),
  l = t(385499),
  c = t(264165),
  d = t(962250),
  u = t(624138),
  h = t(293979),
  _ = t(674563),
  m = t(689938),
  M = t(443785);
let I = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  v = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  N = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  b = (0, u.Mg)(o.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function x(e) {
  var n;
  let {
title: t,
onClose: o
  } = e, {
applicationIconURL: u,
applicationName: x,
queryParams: A,
iframeUrl: f
  } = (0, h.b8)(e), {
width: p,
height: w
  } = (0, d.b)(), T = i.useMemo(() => {
let e = Math.min((w - b - 2 * N) * 16 / 9, v);
return Math.max(I, Math.min(p - 2 * N, e));
  }, [
p,
w
  ]);
  return (0, a.jsx)(r.ModalRoot, {
...e,
size: r.ModalSize.DYNAMIC,
className: M.root,
children: (0, a.jsxs)('div', {
  style: {
    width: T
  },
  children: [
    (0, a.jsxs)(r.ModalHeader, {
      separator: !1,
      className: M.modalHeader,
      children: [
        (0, a.jsx)(r.Avatar, {
          src: u,
          size: r.AvatarSizes.SIZE_32,
          'aria-label': x,
          className: M.applicationIcon
        }),
        (0, a.jsxs)('div', {
          className: M.flexRow,
          children: [
            (0, a.jsxs)('div', {
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: 'heading-sm/bold',
                  children: x
                }),
                (0, a.jsx)(r.Text, {
                  variant: 'text-xs/medium',
                  color: 'interactive-normal',
                  children: t
                })
              ]
            }),
            (0, a.jsx)(l.Z, {
              type: _.Hb.BOT,
              className: M.botTag,
              verified: null === (n = e.application.bot) || void 0 === n ? void 0 : n.verified
            })
          ]
        }),
        (0, a.jsx)(r.Button, {
          onClick: o,
          innerClassName: M.closeButton,
          className: M.closeButtonContainer,
          look: r.Button.Looks.BLANK,
          size: r.Button.Sizes.NONE,
          'aria-label': m.Z.Messages.DISMISS,
          children: (0, a.jsx)(r.XSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: M.closeIcon
          })
        })
      ]
    }),
    (0, a.jsx)(c.Z, {
      aspectRatio: 16 / 9,
      children: (0, a.jsx)(s.J, {
        url: f,
        shouldRefocus: !0,
        className: M.iframe,
        queryParams: A
      })
    })
  ]
})
  });
}