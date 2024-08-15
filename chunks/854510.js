n.r(s), n.d(s, {
  default: function() {
return d;
  }
});
var c = n(735250);
n(470079);
var r = n(481060),
  o = n(313201),
  t = n(930180),
  a = n(582019),
  l = n(689938),
  i = n(783451);

function d(e) {
  let {
channel: s,
onAccept: n,
transitionState: d,
onClose: u,
..._
  } = e, x = (0, o.Dt)(), h = (0, t.z)(s.id);
  return (0, c.jsxs)(r.ModalRoot, {
transitionState: d,
'aria-labelledby': x,
..._,
size: r.ModalSize.SMALL,
children: [
  (0, c.jsxs)(r.ModalHeader, {
    className: i.header,
    children: [
      (0, c.jsx)(r.Heading, {
        variant: 'heading-xl/semibold',
        children: l.Z.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: h.length
        })
      }),
      (0, c.jsx)(r.Text, {
        color: 'header-secondary',
        className: i.description,
        variant: 'text-sm/normal',
        children: l.Z.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: h.length
        })
      })
    ]
  }),
  (0, c.jsx)(r.ModalContent, {
    className: i.content,
    children: h.map(e => {
      let {
        user: n,
        id: r,
        speaker: o
      } = e;
      return (0, c.jsx)(a.Xd, {
        user: n,
        speaker: o,
        showStatus: !0,
        channelId: s.id
      }, r);
    })
  }),
  (0, c.jsxs)(r.ModalFooter, {
    className: i.footer,
    children: [
      (0, c.jsx)(r.Button, {
        onClick: () => {
          n(s), u();
        },
        color: r.Button.Colors.BRAND,
        children: l.Z.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }),
      (0, c.jsx)(r.Button, {
        onClick: () => {
          u();
        },
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: l.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
      })
    ]
  })
]
  });
}