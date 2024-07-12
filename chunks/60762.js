n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(990547),
  a = n(481060),
  r = n(230711),
  l = n(730417),
  o = n(981631),
  c = n(921944),
  d = n(689938),
  u = n(157460);
let _ = (e, t) => ({
  body: e.messages.completionTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: u.defaultDropImage
});

function h(e) {
  let {
markAsDismissed: t,
partnerGame: n
  } = e;
  (0, l.hs)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_COMPLETION);
  let h = (0, l.au)(n);
  if (null == h)
return null;
  let {
body: E,
imgSrc: I,
imgStyle: m
  } = _(h.drop, h.config.streamLengthRequirement), g = () => {
t(c.L.DISMISS);
  };
  return (0, i.jsxs)('div', {
className: u.container,
children: [
  (0, i.jsx)('img', {
    src: I,
    alt: '',
    className: m
  }),
  (0, i.jsx)(a.Clickable, {
    className: u.__invalid_buttonClose,
    'aria-label': d.Z.Messages.CLOSE,
    onClick: g,
    children: (0, i.jsx)(a.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor',
      className: u.closeIcon
    })
  }),
  (0, i.jsx)(a.Heading, {
    className: u.title,
    variant: 'heading-md/extrabold',
    children: d.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
  }),
  (0, i.jsx)(a.Text, {
    variant: 'text-sm/medium',
    className: u.subTitle,
    children: E
  }),
  (0, i.jsx)(a.Button, {
    color: a.Button.Colors.BRAND_INVERTED,
    fullWidth: !0,
    onClick: () => {
      r.Z.open(o.oAB.INVENTORY), t(c.L.PRIMARY);
    },
    children: d.Z.Messages.REDEEM
  }),
  (0, i.jsx)(a.Button, {
    className: u.linkButtonContainer,
    innerClassName: u.linkButton,
    onClick: g,
    look: a.Button.Looks.LINK,
    fullWidth: !0,
    color: a.Button.Colors.WHITE,
    children: d.Z.Messages.NOT_NOW
  }),
  (0, i.jsx)('div', {
    className: u.pointer
  })
]
  });
}