i.d(n, {
  Z: function() {
return I;
  }
}), i(653041), i(627341);
var s = i(278074),
  l = i(442837),
  o = i(199902),
  t = i(158776),
  r = i(726059),
  a = i(162267),
  d = i(228168),
  c = i(981631),
  u = i(689938);

function I(e) {
  var n, i;
  let {
user: I,
currentUser: _
  } = e, f = (0, l.e7)([o.Z], () => o.Z.getAnyStreamForUser(I.id)), E = (0, l.e7)([t.Z], () => t.Z.findActivity(I.id, e => {
let {
  type: n
} = e;
return n !== c.IIU.CUSTOM_STATUS;
  })), m = null === (n = (0, r.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length, S = null === (i = (0, a.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === i ? void 0 : i.length, Z = [{
section: d.oh.USER_INFO,
text: u.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != f || null != E) && Z.push({
section: d.oh.ACTIVITY,
text: u.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == _ ? void 0 : _.id) && (Z.push({
section: d.oh.MUTUAL_FRIENDS,
text: (0, s.EQ)(m).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
  count: e
}))
  }), Z.push({
section: d.oh.MUTUAL_GUILDS,
text: (0, s.EQ)(S).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
  count: e
}))
  })), Z;
}