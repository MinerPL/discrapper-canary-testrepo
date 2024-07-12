i.d(n, {
  Z: function() {
return r;
  }
}), i(627341);
var s = i(278074),
  l = i(162267),
  o = i(228168),
  t = i(689938);

function r(e) {
  var n;
  let i = null === (n = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
  return [{
  section: o.oh.BOT_INFO,
  text: t.Z.Messages.USER_PROFILE_ABOUT_ME
},
{
  section: o.oh.MUTUAL_GUILDS,
  text: (0, s.EQ)(i).with(void 0, () => t.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => t.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => t.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
    count: e
  }))
},
{
  section: o.oh.BOT_DATA_ACCESS,
  text: t.Z.Messages.BOTS_DATA_ACCESS_TAB
}
  ];
}