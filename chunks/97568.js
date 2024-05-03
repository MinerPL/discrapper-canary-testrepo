"use strict";
i.r(t), i.d(t, {
  ClassificationEvidence: function() {
    return r
  }
});
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("621145"),
  s = i("689938"),
  o = i("579054");
let r = e => {
  let {
    flaggedContent: t
  } = e;
  return 0 === t.length ? null : (0, a.jsxs)("div", {
    className: o.classificationEvidenceContainer,
    children: [(0, a.jsx)(n.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: s.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), (0, a.jsx)(l.default, {
      flaggedContent: t
    })]
  })
}