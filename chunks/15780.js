"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("481060"),
  o = s("630388"),
  d = s("88658"),
  u = s("695346"),
  c = s("981631"),
  S = s("689938"),
  E = s("794711");

function T() {
  let e = u.FriendSourceFlagsSetting.useSetting(),
    t = n.useMemo(() => (0, d.computeFlags)(e), [e]);
  return (0, a.jsx)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: S.default.Messages.FRIEND_REQUESTS,
    children: (0, a.jsxs)(r.FormSection, {
      title: S.default.Messages.FRIEND_PERMITTED_SOURCE,
      className: E.marginBottom40,
      children: [(0, a.jsx)(r.FormSwitch, {
        className: i()(E.marginTop8, E.marginBottom20),
        value: t.all,
        onChange: e => u.FriendSourceFlagsSetting.updateSetting(e ? c.AllFriendSourceFlags : c.AllFriendSourceFlags & ~c.FriendSourceFlags.NO_RELATION),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_ALL
      }), (0, a.jsx)(r.FormSwitch, {
        value: t.all || t.mutualFriends,
        onChange: t => u.FriendSourceFlagsSetting.updateSetting(t ? o.addFlag(e, c.FriendSourceFlags.MUTUAL_FRIENDS) : o.removeFlags(e, c.FriendSourceFlags.MUTUAL_FRIENDS, c.FriendSourceFlags.NO_RELATION)),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
      }), (0, a.jsx)(r.FormSwitch, {
        value: t.all || t.mutualGuilds,
        onChange: t => u.FriendSourceFlagsSetting.updateSetting(t ? o.addFlag(e, c.FriendSourceFlags.MUTUAL_GUILDS) : o.removeFlags(e, c.FriendSourceFlags.MUTUAL_GUILDS, c.FriendSourceFlags.NO_RELATION)),
        children: S.default.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
      })]
    })
  })
}