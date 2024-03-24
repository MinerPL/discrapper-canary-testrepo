"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("667963"),
  s = n("211546"),
  r = n("19861"),
  o = n("782340"),
  u = n("386672");
let c = e => {
  let {
    flaggedContent: t,
    actions: n,
    guildMetadata: c
  } = e, d = (0, l.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence");
  return 0 !== t.length || d && null != c ? (0, i.jsxs)("div", {
    className: u.classificationEvidenceContainer,
    children: [(0, i.jsx)(a.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: o.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
    }), d && null != c ? (0, i.jsx)(s.default, {
      guildMetadata: c,
      actions: n
    }) : (0, i.jsx)(r.default, {
      flaggedContent: t
    })]
  }) : null
}