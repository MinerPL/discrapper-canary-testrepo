"use strict";
n.r(t), n.d(t, {
  getQuestBarVariantConfig: function() {
    return d
  }
});
var a = n("497505"),
  s = n("977156"),
  l = n("909389"),
  i = n("941348"),
  r = n("743294");
let o = {
    component: l.default,
    getCollapsedHeight: () => 40,
    getPreEnrollmentExpandedHeight: () => 240,
    getPostEnrollmentBackgroundImage: e => "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
    getPreEnrollmentBackgroundColor: e => void 0,
    canCollapseOnBlur: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) == null
    },
    shouldExpandOnQuestComplete: e => !0
  },
  u = {
    component: i.default,
    getCollapsedHeight: e => {
      var t;
      return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null ? 66 : 40
    },
    getPreEnrollmentExpandedHeight: () => 270,
    getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(r.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(r.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")"),
    getPreEnrollmentBackgroundColor: e => "var(--background-secondary-alt)",
    canCollapseOnBlur: e => !0,
    shouldExpandOnQuestComplete: e => !1
  },
  d = (e, t, n) => {
    var l;
    let i = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null,
      r = !i && t === s.QuestBarExperimentVariants.V2 || i && n === s.QuestBarExperimentVariants.V2,
      d = r ? u : o;
    return {
      component: d.component,
      collapsedHeight: d.getCollapsedHeight(e),
      preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
      postEnrollmentBackgroundImage: d.getPostEnrollmentBackgroundImage(e),
      preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
      canCollapseOnBlur: d.canCollapseOnBlur(e),
      shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
      trackingCtx: {
        content: r ? a.QuestContent.QUEST_BAR_V2 : a.QuestContent.QUEST_BAR
      }
    }
  }