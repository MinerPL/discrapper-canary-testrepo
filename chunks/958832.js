"use strict";
s.r(t);
var a = s("442837"),
  l = s("570140");
let n = {};
class i extends a.default.Store {
  hasFetched(e) {
    return null != n[e]
  }
  getTopChannelIds(e) {
    return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : n[e]
  }
}
t.default = new i(l.default, {
  GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topChannelIds: s
    } = e;
    n[t] = s
  }
})