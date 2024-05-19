"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("411104");
var i = n("592125"),
  r = n("19780"),
  a = n("981631"),
  s = n("176505");

function o(e, t) {
  let n;
  switch (e) {
    case a.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM:
      var o, l;
      let u = (n = t).channelId;
      switch (u) {
        case s.StaticChannelRoute.CHANNEL_BROWSER:
        case s.StaticChannelRoute.GUILD_HOME:
        case s.StaticChannelRoute.GUILD_SHOP:
        case s.StaticChannelRoute.MEMBER_APPLICATIONS:
        case s.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        case s.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        case s.StaticChannelRoute.MEMBER_SAFETY:
        case s.StaticChannelRoute.GUILD_ONBOARDING:
          return
      }
      let d = null !== (l = null === (o = i.default.getChannel(u)) || void 0 === o ? void 0 : o.type) && void 0 !== l ? l : a.ChannelTypes.UNKNOWN;
      return {
        timestamp: new Date, rtc_state: r.default.getState(), channelId: u, channelType: d
      };
    case a.AnalyticEvents.GUILD_VIEWED_CLICKSTREAM:
      let _ = (n = t).guildId;
      return {
        timestamp: new Date, rtc_state: r.default.getState(), guildId: _
      };
    case a.AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: r.default.getState(),
        tab_opened: n.tab_opened,
        num_friends: n.num_friends,
        now_playing_visible: n.now_playing_visible,
        now_playing_num_cards: n.now_playing_num_cards
      };
    default:
      throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
  }
}