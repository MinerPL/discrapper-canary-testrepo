s.r(t), s.d(t, {
  ActivityAgeGateModal: function() {
return r;
  }
});
var i = s(735250);
s(470079);
var n = s(481060),
  a = s(986035),
  o = s(689938),
  c = s(231490);

function r(e) {
  let {
application: t,
onAgree: s,
onClose: r,
onDisagree: l,
...d
  } = e;
  return (0, i.jsx)(n.ModalRoot, {
...d,
children: (0, i.jsx)('div', {
  children: (0, i.jsx)(a.Z, {
    onAgree: () => {
      s(), r();
    },
    onDisagree: () => {
      l(), r();
    },
    title: o.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
    description: o.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
      applicationName: t.name
    }),
    agreement: o.Z.Messages.NSFW_ACCEPT,
    disagreement: o.Z.Messages.NSFW_DECLINE,
    imageClassName: c.image
  })
})
  });
}