"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("47120");
var i = l("470079"),
  a = l("434650"),
  n = l("626135"),
  s = l("132871"),
  r = l("981631");

function c(e) {
  let {
    collection: t
  } = e, [l, c] = i.useState(!1), o = (0, s.useApplicationDirectoryHistory)(e => e.guildId), d = (0, a.useIsVisible)(e => {
    e && c(!0)
  });
  return i.useEffect(() => {
    l && n.default.track(r.AnalyticEvents.APP_DIRECTORY_COLLECTION_VIEWED, {
      collection_id: t.id,
      guild_id: o
    })
  }, [l, t, o]), d
}