t.r(n), t.d(n, {
  default: function() {
return _;
  }
});
var s = t(735250);
t(470079);
var i = t(481060),
  r = t(153124),
  c = t(471253),
  a = t(930180),
  o = t(582019),
  l = t(939863),
  d = t(689938),
  u = t(956171);

function _(e) {
  let {
channel: n,
transitionState: t,
onClose: _,
...E
  } = e, I = (0, r.Dt)(), T = (0, a._d)(n.id), N = async () => {
await (0, c.yi)(n), _();
  }, h = async () => {
await (0, c.RK)(n, !1), _();
  };
  return (0, s.jsx)(i.ModalRoot, {
transitionState: t,
'aria-labelledby': I,
...E,
size: i.ModalSize.SMALL,
children: (0, s.jsxs)(i.ModalContent, {
  className: u.content,
  children: [
    (0, s.jsx)(l.Z, {
      children: (0, s.jsx)('div', {
        className: u.stageIconBackground,
        children: (0, s.jsx)(i.StageIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 40,
          height: 40,
          className: u.stageIcon
        })
      })
    }),
    (0, s.jsx)(i.Heading, {
      id: I,
      variant: 'heading-xl/semibold',
      color: 'header-primary',
      className: u.headerTitle,
      children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
    }),
    (0, s.jsx)(i.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: u.headerSubtitle,
      children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
    }),
    T > 0 && (0, s.jsx)(o.mv, {
      channelId: n.id
    }),
    (0, s.jsxs)('div', {
      className: u.buttonsContainer,
      children: [
        (0, s.jsxs)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          className: u.button,
          innerClassName: u.innerButton,
          onClick: h,
          children: [
            (0, s.jsx)('div', {
              className: u.icon,
              children: (0, s.jsx)(i.MicrophoneIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
              })
            }),
            d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER
          ]
        }),
        (0, s.jsxs)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          className: u.button,
          innerClassName: u.innerButton,
          onClick: N,
          children: [
            (0, s.jsx)('div', {
              className: u.icon,
              children: (0, s.jsx)(i.GroupIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
              })
            }),
            d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE
          ]
        })
      ]
    })
  ]
})
  });
}