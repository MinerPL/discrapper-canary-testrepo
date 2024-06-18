"use strict";
var i = n(570140),
  r = n(496675),
  s = n(751189),
  o = n(981631);
t.Z = {
  async checkGuildTemplateDirty(e) {
    if (!r.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, {
        guildId: e
      })) return;
    let t = await s.Z.loadTemplatesForGuild(e);
    t.body.length > 0 && i.Z.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
      guildTemplate: t.body[0]
    })
  },
  hideGuildTemplateDirtyTooltip(e) {
    i.Z.dispatch({
      type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
      guildId: e
    })
  },
  hideGuildTemplatePromotionTooltip() {
    i.Z.dispatch({
      type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
    })
  }
}