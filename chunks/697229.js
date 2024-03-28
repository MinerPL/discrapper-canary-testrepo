"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  s = a("914010"),
  d = a("151785"),
  r = a("362658"),
  i = a("981631"),
  o = a("689938");

function c(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getGuildId()),
    c = e.type === i.ChannelTypes.GUILD_CATEGORY,
    {
      isFavoritesPerk: f
    } = (0, r.useFavoritesServerExperiment)("useCategoryAddChannelItem");
  return !__OVERLAY__ && t === i.FAVORITES && f && c ? (0, n.jsx)(u.MenuItem, {
    id: "add-channel-to-category",
    icon: d.default,
    color: "brand",
    label: o.default.Messages.FAVORITES_ADD_A_CHANNEL,
    action: function() {
      (0, u.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("95257")]).then(a.bind(a, "610617"));
        return a => (0, n.jsx)(t, {
          ...a,
          parentId: e.id
        })
      })
    }
  }) : null
}