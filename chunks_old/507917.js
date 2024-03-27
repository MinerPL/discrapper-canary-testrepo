"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  l = n("369964"),
  i = n("38766"),
  r = n("397336"),
  o = n("782340"),
  u = n("181456");

function d() {
  let e = (0, i.default)({
    scrollPosition: r.ProfileCustomizationScrollPositions.TRY_IT_OUT
  });
  return (0, a.jsx)(l.default, {
    isPremiumFeature: !0,
    shouldUseHorizontalButtons: !0,
    inlineArt: !0,
    artClassName: u.profileThemesArt,
    onTryFeature: e,
    header: o.default.Messages.PROFILE_THEMES_TOOLTIP_TITLE,
    body: o.default.Messages.PROFILE_THEMES_TOOLTIP_DESCRIPTION_PREMIUM,
    dismissibleContent: s.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2
  })
}