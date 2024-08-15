a.r(n), a.d(n, {
  default: function() {
return E;
  }
});
var s = a(735250);
a(470079);
var t = a(481060),
  o = a(701488),
  r = a(689938),
  i = a(531508),
  c = a(221886);

function E(e) {
  let {
application: n,
onCancel: a,
onClose: E,
onConfirm: l,
...d
  } = e;
  return (0, s.jsxs)(t.ModalRoot, {
role: 'alertdialog',
transitionState: d.transitionState,
className: i.modalRoot,
children: [
  (0, s.jsx)('div', {
    className: i.birbContainer,
    children: (0, s.jsx)('img', {
      src: c,
      className: i.announcementBirb,
      alt: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_ANNOUNCEMENT_BIRD_A11Y_LABEL
    })
  }),
  (0, s.jsxs)(t.ModalContent, {
    className: i.modalContent,
    children: [
      (0, s.jsx)(t.Text, {
        variant: 'eyebrow',
        className: i.eyebrow,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_HEADS_UP
      }),
      (0, s.jsx)(t.Heading, {
        variant: 'heading-lg/bold',
        className: i.header,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_TITLE.format({
          activityName: n.name
        })
      }),
      (0, s.jsx)(t.Text, {
        variant: 'text-sm/normal',
        className: i.subHeader,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_SUBTITLE
      }),
      (0, s.jsxs)('div', {
        className: i.buttonContainer,
        children: [
          (0, s.jsx)(t.Button, {
            size: t.Button.Sizes.LARGE,
            onClick: () => {
              l(), E();
            },
            children: r.Z.Messages.CONTINUE
          }),
          (0, s.jsx)(t.Button, {
            size: t.Button.Sizes.LARGE,
            onClick: () => {
              a(), E();
            },
            color: t.Button.Colors.PRIMARY,
            children: r.Z.Messages.CANCEL
          }),
          (0, s.jsx)(t.Text, {
            variant: 'text-xs/normal',
            children: (0, s.jsx)(t.Anchor, {
              href: o.OF,
              children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_LEARN_MORE
            })
          })
        ]
      })
    ]
  })
]
  });
}