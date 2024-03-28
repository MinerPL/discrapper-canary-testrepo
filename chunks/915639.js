"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var n = l("735250"),
  u = l("470079"),
  a = l("536402"),
  i = l("442837"),
  s = l("481060"),
  d = l("642101"),
  r = l("971930"),
  o = l("665906"),
  c = l("638471"),
  m = l("689938");

function p(e, t) {
  let p = e.guild_id,
    f = u.useMemo(() => ({
      guildId: p,
      entity: e,
      entityType: a.GuildFeedItemTypes.FORUM_POST
    }), [p, e]),
    I = (0, i.useStateFromStores)([d.default], () => d.default.getIsItemFeatured(f), [f]),
    M = (0, o.useIsThreadModerator)(e),
    _ = (0, c.useCanGuildFeedFeatureChannel)(e);
  return M && _ ? I ? (0, n.jsx)(s.MenuItem, {
    id: "guild-feed-unfeature",
    label: m.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
    action: () => (0, s.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: e
      } = await Promise.all([l.e("99387"), l.e("11345")]).then(l.bind(l, "560454"));
      return t => (0, n.jsx)(e, {
        featureableItem: f,
        header: m.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
        body: m.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
        ...t
      })
    })
  }) : (0, n.jsx)(s.MenuItem, {
    id: "guild-feed-feature",
    label: m.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
    children: (0, r.getFeatureItemsTimes)().map(u => {
      let {
        value: a,
        timePeriod: i
      } = u;
      return (0, n.jsx)(s.MenuItem, {
        id: "".concat(a),
        label: (0, r.createFeatureItemsTimeLabel)(i),
        action: () => (0, s.openModalLazy)(async () => {
          let {
            FeatureForumPostConfirmationModal: u
          } = await Promise.all([l.e("99387"), l.e("11345")]).then(l.bind(l, "560454"));
          return l => (0, n.jsx)(u, {
            thread: e,
            guildId: p,
            expiresSeconds: a,
            timePeriod: i,
            options: t,
            ...l
          })
        })
      }, a)
    })
  }) : null
}