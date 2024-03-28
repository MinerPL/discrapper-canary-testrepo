"use strict";
a.r(t), a("47120");
var l = a("536402"),
  n = a("570140"),
  s = a("317770"),
  i = a("601410"),
  d = a("897473"),
  r = a("314897"),
  u = a("433355"),
  o = a("592125"),
  c = a("944486"),
  f = a("914010"),
  m = a("626135"),
  h = a("709054"),
  g = a("276438"),
  E = a("642101"),
  _ = a("971930"),
  I = a("330249"),
  x = a("313531"),
  S = a("369701"),
  v = a("981631"),
  C = a("176505");
class N extends s.default {
  _initialize() {
    n.default.subscribe("MESSAGE_REACTION_ADD", this.handleReaction), n.default.subscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), n.default.subscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), n.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
  }
  _terminate() {
    n.default.unsubscribe("MESSAGE_REACTION_ADD", this.handleReaction), n.default.unsubscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), n.default.unsubscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), n.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
  }
  handleReaction(e) {
    let {
      type: t,
      userId: a,
      messageId: l,
      optimistic: n
    } = e;
    if (a !== r.default.getId() || !n) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let d = c.default.getChannelId();
    if (!(0, C.isGuildHomeChannel)(d)) return;
    let u = E.default.getItemForMessageId(s, l);
    if (null == u) return;
    let o = (0, I.default)(u);
    (0, g.trackFeedItemInteracted)({
      feed_item_type: (0, x.getFeedItemTypeFromId)(u.id),
      feed_item_id: u.id,
      load_id: E.default.getLoadId(s),
      action_type: "MESSAGE_REACTION_ADD" === t ? S.FeedItemInteractionType.REACTION_ADDED : S.FeedItemInteractionType.REACTION_REMOVED,
      guild_id: s,
      channel_id: o.channel_id,
      message_id: l,
      home_session_id: i.default.getHomeSessionId(s)
    })
  }
  handleSidebarViewChannel(e) {
    let {
      channelId: t,
      baseChannelId: a,
      sidebarType: n
    } = e;
    if (n !== d.SidebarType.VIEW_THREAD || !(0, C.isGuildHomeChannel)(a)) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let r = E.default.getItemForMessageId(s, h.default.castChannelIdAsMessageId(t));
    if (null != r) r.type !== l.GuildFeedItemTypes.FORUM_POST && (0, g.trackFeedItemInteracted)({
      feed_item_type: (0, x.getFeedItemTypeFromId)(r.id),
      feed_item_id: r.id,
      load_id: E.default.getLoadId(s),
      action_type: S.FeedItemInteractionType.THREAD_EMBED_CLICKED,
      guild_id: s,
      channel_id: (0, _.getChannelIdForItem)(r),
      message_id: h.default.castChannelIdAsMessageId(t),
      home_session_id: i.default.getHomeSessionId(s)
    })
  }
  handleMessageCreate(e) {
    let t, a, {
      optimistic: l,
      message: n
    } = e;
    if (!l || n.state !== v.MessageStates.SENDING) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let d = u.default.getSidebarState(C.StaticChannelRoute.GUILD_HOME);
    if (null == d || !(0, u.isViewChannelSidebar)(d)) return;
    let r = o.default.getChannel(d.channelId),
      c = (0, _.getSidebarMessageId)(d, r);
    if (null == c) return;
    let m = E.default.getItemForMessageId(s, c);
    if (null != m) {
      if (n.type === v.MessageTypes.DEFAULT) t = S.FeedItemInteractionType.MESSAGED_IN_SIDEBAR, a = c;
      else if (n.type === v.MessageTypes.REPLY) {
        var h, I;
        a = null === (h = n.message_reference) || void 0 === h ? void 0 : h.message_id, t = (null === (I = n.message_reference) || void 0 === I ? void 0 : I.message_id) === c ? S.FeedItemInteractionType.REPLIED_TO_MESSAGE : S.FeedItemInteractionType.REPLIED_IN_SIDEBAR
      }
      null != t && (0, g.trackFeedItemInteracted)({
        feed_item_type: (0, x.getFeedItemTypeFromId)(m.id),
        feed_item_id: m.id,
        load_id: E.default.getLoadId(s),
        action_type: t,
        guild_id: s,
        channel_id: n.channel_id,
        message_id: a,
        home_session_id: i.default.getHomeSessionId(s)
      })
    }
  }
  handleAppStateUpdate(e) {
    let {
      state: t
    } = e;
    if ("background" !== t) return;
    let a = f.default.getGuildId();
    null != a && m.default.track(v.AnalyticEvents.HOME_BACKGROUNDED, {
      guild_id: a,
      home_session_id: i.default.getHomeSessionId(a),
      load_id: E.default.getLoadId(a)
    })
  }
  constructor(...e) {
    var t, a, l;
    super(...e), t = this, l = void 0, (a = "mobileSelectedContentDetails") in t ? Object.defineProperty(t, a, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = l
  }
}
t.default = new N