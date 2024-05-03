"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("430824"),
  o = n("725568"),
  u = n("963202"),
  d = n("603839"),
  c = n("308083"),
  f = n("689938"),
  E = n("422906");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(t)), {
    enableClanCreation: h,
    defaultGameId: _
  } = (0, u.useClanPrepilotExperiment)(n, "ClanUpsellNotice"), C = s.useCallback(() => {
    (0, o.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, a.jsx)(d.default, {
        onClose: n,
        guildId: t,
        gameId: _
      })
    }, {
      layerKey: c.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [_, t]);
  return h ? (0, a.jsxs)(i.Clickable, {
    onClick: C,
    className: E.upsellContainer,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/bold",
      color: "text-warning",
      className: E.exclusive,
      children: f.default.Messages.CLAN_UPSELL_INVITE
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      children: _ === c.VALORANT_ID ? f.default.Messages.CLAN_UPSELL_CONTENT_VALORANT : _ === c.GENSHIN_ID ? f.default.Messages.CLAN_UPSELL_CONTENT_GENSHIN : f.default.Messages.CLAN_UPSELL_CONTENT
    })]
  }) : null
}