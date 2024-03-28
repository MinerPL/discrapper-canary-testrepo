"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("82950"),
  l = n("63063"),
  i = n("981631"),
  r = n("921944"),
  o = n("689938"),
  u = n("157476");

function d(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsx)(s.default, {
    image: u,
    guild: t,
    onDismissed: () => n(r.ContentDismissActionType.UNKNOWN),
    onClick: () => {
      open(l.default.getArticleURL(i.HelpdeskArticles.CONNECTION_DETAILS)), n(r.ContentDismissActionType.UNKNOWN)
    },
    title: o.default.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
    message: o.default.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
    cta: o.default.Messages.LEARN_MORE,
    trackingSource: i.ChannelNoticeCtaSources.LINKED_ROLES_ADMIN_NUX,
    type: i.ChannelNoticeTypes.LINKED_ROLES_ADMIN
  })
}