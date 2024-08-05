i.d(s, {
  Z: function() {
return d;
  }
}), i(653041), i(627341);
var n = i(278074),
  l = i(726059),
  t = i(162267),
  o = i(929498),
  a = i(228168),
  r = i(689938);

function d(e) {
  var s, i;
  let {
user: d,
currentUser: c
  } = e, {
live: u,
recent: I,
stream: _
  } = (0, o.Z)(d.id), f = null === (s = (0, l.Z)(d.id, d.id !== (null == c ? void 0 : c.id)).mutualFriends) || void 0 === s ? void 0 : s.length, m = null === (i = (0, t.Z)(d.id, d.id !== (null == c ? void 0 : c.id)).mutualGuilds) || void 0 === i ? void 0 : i.length, E = [{
section: a.oh.USER_INFO,
text: r.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (u.length > 0 || I.length > 0 || null != _) && E.push({
section: a.oh.ACTIVITY,
text: r.Z.Messages.USER_PROFILE_ACTIVITY
  }), d.id !== (null == c ? void 0 : c.id) && (E.push({
section: a.oh.MUTUAL_FRIENDS,
text: (0, n.EQ)(f).with(void 0, () => r.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => r.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => r.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
  count: e
}))
  }), E.push({
section: a.oh.MUTUAL_GUILDS,
text: (0, n.EQ)(m).with(void 0, () => r.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => r.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => r.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
  count: e
}))
  })), E;
}