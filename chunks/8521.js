"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("949389"),
  i = n("63063"),
  r = n("82950"),
  o = n("981631"),
  u = n("689938"),
  d = n("511189");
t.default = e => {
  let {
    guild: t
  } = e, n = s.useCallback(() => {
    (0, l.hideMaxMemberCountChannelNotice)(t.id)
  }, [t.id]);
  return (0, a.jsx)(r.default, {
    guild: t,
    onDismissed: n,
    message: u.default.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
      maxMemberCount: t.maxMembers,
      maxMembersUrl: i.default.getArticleURL(o.HelpdeskArticles.MAX_MEMBERS)
    }),
    type: o.ChannelNoticeTypes.MAX_MEMBER_COUNT,
    image: d,
    imageMarginX: 61
  })
}