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
  i = n("565500"),
  r = n("38766"),
  o = n("782340"),
  u = n("203237"),
  d = () => {
    let e = (0, i.default)(),
      t = (0, r.default)({
        guild: e
      });
    return (0, a.jsx)(l.default, {
      isPremiumFeature: !0,
      shouldUseHorizontalButtons: !0,
      artClassName: u.coachmarkArt,
      headerClassName: u.coachmarkHeader,
      onTryFeature: t,
      tryItText: o.default.Messages.CHECK_IT_OUT,
      header: o.default.Messages.GUILD_IDENTITY_PFX_COACHMARK_TITLE,
      body: o.default.Messages.GUILD_IDENTITY_PFX_COACHMARK_BODY,
      dismissibleContent: s.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK,
      maxWidth: 320
    })
  }