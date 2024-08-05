i.d(s, {
  Z: function() {
return a;
  }
}), i(627341);
var n = i(278074),
  l = i(162267),
  t = i(228168),
  o = i(689938);

function a(e) {
  var s;
  let i = null === (s = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return [{
  section: t.oh.BOT_INFO,
  text: o.Z.Messages.USER_PROFILE_ABOUT_ME
},
{
  section: t.oh.MUTUAL_GUILDS,
  text: (0, n.EQ)(i).with(void 0, () => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => o.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
    count: e
  }))
},
{
  section: t.oh.BOT_DATA_ACCESS,
  text: o.Z.Messages.BOTS_DATA_ACCESS_TAB
}
  ];
}