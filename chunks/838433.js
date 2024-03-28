"use strict";
u.r(e), u.d(e, {
  openGuildProductLink: function() {
    return o
  }
});
var l = u("735250");
u("470079");
var n = u("481060"),
  i = u("336197"),
  d = u("430824"),
  r = u("240864"),
  a = u("981631");

function o(t, e) {
  var o;
  let c = d.default.getGuild(t);
  r.default.getGuildProductFetchState(e) === r.FetchState.FETCHED && (null === (o = r.default.getGuildProduct(e)) || void 0 === o ? void 0 : o.published) !== !0 && null != c ? (0, n.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([u.e("99387"), u.e("29396")]).then(u.bind(u, "513239"));
    return e => (0, l.jsx)(t, {
      ...e
    })
  }) : (null == c ? void 0 : c.hasFeature(a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? (0, i.default)(a.Routes.GUILD_PRODUCT(t, e)) : (0, i.default)(a.Routes.CHANNEL(t))
}