"use strict";
a.r(t), a.d(t, {
  getTemplates: function() {
    return r
  },
  stashTemplateChannels: function() {
    return i
  }
});
var s = a("544891"),
  l = a("570140"),
  n = a("981631");

function i(e, t) {
  l.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
    selectedTemplate: e,
    guildId: t
  })
}
async function r(e) {
  let t = (await s.HTTP.get({
    url: n.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e)
  })).body;
  null != t.templates && l.default.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
    templates: t.templates,
    guildId: e
  })
}