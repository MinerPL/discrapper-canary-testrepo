"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("82950"),
  l = n("434404"),
  i = n("929507"),
  r = n("981631"),
  o = n("689938"),
  u = n("943935");

function d(e) {
  let {
    guild: t
  } = e, n = () => i.default.dismissNotice(t.id);
  return (0, a.jsx)(s.default, {
    guild: t,
    onDismissed: n,
    cta: o.default.Messages.CHECK_IT_OUT,
    message: o.default.Messages.COMMANDS_SCOPE_MIGRATION_ADMIN_NOTICE.format(),
    type: r.ChannelNoticeTypes.COMMANDS_MIGRATION,
    image: u,
    onClick: () => {
      n(), l.default.open(t.id, r.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}