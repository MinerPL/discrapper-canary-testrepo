var i = n(735250),
  s = n(470079),
  a = n(949389),
  r = n(63063),
  l = n(82950),
  o = n(981631),
  c = n(689938),
  d = n(511189);
t.Z = e => {
  let {
guild: t
  } = e, n = s.useCallback(() => {
(0, a.xm)(t.id);
  }, [t.id]);
  return (0, i.jsx)(l.Z, {
guild: t,
onDismissed: n,
message: c.Z.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
  maxMemberCount: t.maxMembers,
  maxMembersUrl: r.Z.getArticleURL(o.BhN.MAX_MEMBERS)
}),
type: o.vID.MAX_MEMBER_COUNT,
image: d,
imageMarginX: 61
  });
};