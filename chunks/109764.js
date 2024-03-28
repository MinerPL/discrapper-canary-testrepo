"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var u = a("852229"),
  r = a("399606"),
  i = a("481060"),
  s = a("228392"),
  d = a("592125"),
  l = a("934415"),
  o = a("981631"),
  f = a("689938");

function c(e, t, a) {
  let c = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(e.parent_id));
  return (0, n.jsx)(i.MenuItem, {
    id: "channel-copy-link",
    label: f.default.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, s.trackForumPostLinkCopied)({
        postId: e.id,
        location: {
          section: o.AnalyticsSections.CONTEXT_MENU
        }
      }), (0, u.copy)((0, l.getChannelLinkToCopy)(e, c, t, a))
    }
  })
}