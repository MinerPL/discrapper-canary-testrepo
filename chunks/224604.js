i.r(t), i.d(t, {
  ActivityAgeGateModal: function() {
return r;
  }
});
var n = i(735250);
i(470079);
var s = i(481060),
  a = i(499371),
  o = i(689938),
  c = i(231490);

function r(e) {
  let {
application: t,
onAgree: i,
onClose: r,
onDisagree: l,
...d
  } = e;
  return (0, n.jsx)(s.ModalRoot, {
...d,
children: (0, n.jsx)('div', {
  children: (0, n.jsx)(a.Z, {
    onAgree: () => {
      i(), r();
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