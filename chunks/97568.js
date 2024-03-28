"use strict";
i.r(t), i.d(t, {
  ClassificationEvidence: function() {
    return r
  }
});
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("219230"),
  s = i("205752"),
  o = i("621145"),
  c = i("689938"),
  d = i("411202");
let r = e => {
  let {
    flaggedContent: t,
    actions: i,
    guildMetadata: r
  } = e, u = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence");
  return 0 !== t.length || u && null != r ? (0, a.jsxs)("div", {
    className: d.classificationEvidenceContainer,
    children: [(0, a.jsx)(n.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: c.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), u && null != r ? (0, a.jsx)(s.default, {
      guildMetadata: r,
      actions: i
    }) : (0, a.jsx)(o.default, {
      flaggedContent: t
    })]
  }) : null
}