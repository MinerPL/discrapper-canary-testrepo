"use strict";
s.r(t), s.d(t, {
  showPermissionLockoutModal: function() {
    return r
  }
});
var l = s("668781"),
  a = s("63063"),
  n = s("981631"),
  i = s("689938");

function r(e) {
  l.default.show({
    title: i.default.Messages.SELF_DENY_PERMISSION_TITLE,
    body: i.default.Messages.SELF_DENY_PERMISSION_BODY.format({
      name: e
    }),
    cancelText: i.default.Messages.HELP_DESK,
    onCancel() {
      window.open(a.default.getArticleURL(n.HelpdeskArticles.PERMISSIONS_LOCKOUT))
    }
  })
}