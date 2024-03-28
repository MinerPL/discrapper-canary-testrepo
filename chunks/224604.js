"use strict";
s.r(t), s.d(t, {
  ActivityAgeGateModal: function() {
    return r
  }
});
var i = s("735250");
s("470079");
var n = s("481060"),
  a = s("499371"),
  l = s("689938"),
  o = s("473884");

function r(e) {
  let {
    application: t,
    onAgree: s,
    onClose: r,
    onDisagree: d,
    ...u
  } = e;
  return (0, i.jsx)(n.ModalRoot, {
    ...u,
    children: (0, i.jsx)("div", {
      children: (0, i.jsx)(a.default, {
        onAgree: () => {
          s(), r()
        },
        onDisagree: () => {
          d(), r()
        },
        title: l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
        description: l.default.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
          applicationName: t.name
        }),
        agreement: l.default.Messages.NSFW_ACCEPT,
        disagreement: l.default.Messages.NSFW_DECLINE,
        imageClassName: o.image
      })
    })
  })
}