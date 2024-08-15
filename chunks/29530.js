n.d(s, {
  Z: function() {
return a;
  }
}), n(627341);
var i = n(278074),
  t = n(162267),
  l = n(228168),
  o = n(689938);

function a(e) {
  var s;
  let n = null === (s = (0, t.Z)(e.id, !0).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return [{
  section: l.oh.BOT_INFO,
  text: o.Z.Messages.USER_PROFILE_ABOUT_ME
},
{
  section: l.oh.MUTUAL_GUILDS,
  text: (0, i.EQ)(n).with(void 0, () => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => o.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
    count: e
  }))
},
{
  section: l.oh.BOT_DATA_ACCESS,
  text: o.Z.Messages.BOTS_DATA_ACCESS_TAB
}
  ];
}