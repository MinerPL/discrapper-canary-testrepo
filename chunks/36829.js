"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var i = n("536402"),
  l = n("442837"),
  s = n("481060"),
  u = n("915639"),
  r = n("642101"),
  o = n("971930"),
  d = n("181855"),
  c = n("689938");

function f(e, t, f) {
  let E = t.getGuildId(),
    M = (0, l.useStateFromStores)([r.default], () => null !== E && r.default.getIsItemFeatured({
      guildId: E,
      entity: e,
      entityType: i.GuildFeedItemTypes.MESSAGE
    }), [e, E]),
    m = (0, u.default)(t, f);
  return e.isFirstMessageInForumPost(t) ? m : (0, d.canGuildFeedFeatureMessage)(t, e) ? M ? (0, a.jsx)(s.MenuItem, {
    id: "guild-feed-unfeature",
    label: c.default.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
    action: () => null == E ? null : (0, s.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: t
      } = await Promise.all([n.e("99387"), n.e("11345")]).then(n.bind(n, "560454"));
      return n => (0, a.jsx)(t, {
        ...n,
        featureableItem: {
          guildId: E,
          entity: e,
          entityType: i.GuildFeedItemTypes.MESSAGE
        },
        header: c.default.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,
        body: c.default.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY
      })
    })
  }) : (0, a.jsx)(s.MenuItem, {
    id: "guild-feed-feature",
    label: c.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
    children: (0, o.getFeatureItemsTimes)().map(i => {
      let {
        value: l,
        timePeriod: u
      } = i;
      return (0, a.jsx)(s.MenuItem, {
        id: "".concat(l),
        label: (0, o.createFeatureItemsTimeLabel)(u),
        action: () => null == E ? null : (0, s.openModalLazy)(async () => {
          let {
            FeatureMessageConfirmationModal: i
          } = await Promise.all([n.e("99387"), n.e("11345")]).then(n.bind(n, "560454"));
          return n => (0, a.jsx)(i, {
            ...n,
            message: e,
            channel: t,
            guildId: E,
            expiresSeconds: l,
            timePeriod: u,
            options: f
          })
        })
      }, l)
    })
  }) : null
}