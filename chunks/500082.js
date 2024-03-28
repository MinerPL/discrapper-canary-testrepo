"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("524437"),
  i = a("243778"),
  d = a("799148"),
  r = a("921944");
let u = [s.DismissibleContent.GUILD_FEED_NUX_CARD];
t.default = n.memo(function(e) {
  let {
    guild: t
  } = e;
  return (0, l.jsx)(i.default, {
    contentTypes: u,
    groupName: r.DismissibleContentGroupName.GUILD_FEED_TOP,
    children: e => {
      let {
        visibleContent: a,
        markAsDismissed: n
      } = e;
      if (a === s.DismissibleContent.GUILD_FEED_NUX_CARD) return (0, l.jsx)(d.default, {
        guild: t,
        onClose: () => n(r.ContentDismissActionType.UNKNOWN)
      });
      return null
    }
  })
})