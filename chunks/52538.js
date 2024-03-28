"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("524437"),
  l = n("765585"),
  i = n("16703"),
  r = n("300284"),
  o = n("689938"),
  u = n("303498");
t.default = () => {
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