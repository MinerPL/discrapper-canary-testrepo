"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n(411104);
var i = n(592125),
  r = n(19780),
  s = n(981631),
  o = n(176505);

function a(e, t) {
  let n;
  switch (e) {
    case s.rMx.CHANNEL_OPENED_CLICKSTREAM:
      var a, l;
      let u = (n = t).channelId;
      switch (u) {
        case o.oC.CHANNEL_BROWSER:
        case o.oC.GUILD_HOME:
        case o.oC.GUILD_SHOP:
        case o.oC.MEMBER_APPLICATIONS:
        case o.oC.ROLE_SUBSCRIPTIONS:
        case o.oC.CUSTOMIZE_COMMUNITY:
        case o.oC.MEMBER_SAFETY:
        case o.oC.GUILD_ONBOARDING:
          return
      }
      let _ = null !== (l = null === (a = i.Z.getChannel(u)) || void 0 === a ? void 0 : a.type) && void 0 !== l ? l : s.d4z.UNKNOWN;
      return {
        timestamp: new Date, rtc_state: r.Z.getState(), channelId: u, channelType: _
      };
    case s.rMx.GUILD_VIEWED_CLICKSTREAM:
      let d = (n = t).guildId;
      return {
        timestamp: new Date, rtc_state: r.Z.getState(), guildId: d
      };
    case s.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: r.Z.getState(),
        tab_opened: n.tab_opened,
        num_friends: n.num_friends,
        now_playing_visible: n.now_playing_visible,
        now_playing_num_cards: n.now_playing_num_cards
      };
    default:
      throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
  }
}