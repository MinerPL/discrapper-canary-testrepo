"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var l = t("37983");
t("884691");
var u = t("281071"),
  o = t("65597"),
  i = t("77078"),
  c = t("867965"),
  s = t("42203"),
  r = t("404008"),
  a = t("49111"),
  d = t("782340");

function f(e, n, t) {
  let f = (0, o.useStateFromStores)([s.default], () => s.default.getChannel(e.parent_id));
  return (0, l.jsx)(i.MenuItem, {
    id: "channel-copy-link",
    label: d.default.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, c.trackForumPostLinkCopied)({
        postId: e.id,
        location: {
          section: a.AnalyticsSections.CONTEXT_MENU
        }
      }), (0, u.copy)((0, r.getChannelLinkToCopy)(e, f, n, t))
    }
  })
}