"use strict";
n.r(t), n.d(t, {
  doGuildOnboardingForPostAuthInvite: function() {
    return i
  }
});
var a = n("970728"),
  s = n("487946"),
  l = n("305961");
async function i(e) {
  let {
    code: t
  } = e, i = await (0, s.default)(t), r = i.invite;
  if (null == r || null == r.guild) return;
  if (await
    function() {
      return new Promise(e => {
        l.default.addConditionalChangeListener(() => !l.default.isLoaded() || (e(), !1))
      })
    }(), null == l.default.getGuild(r.guild.id)) return;
  let {
    default: o
  } = await n.el("937692").then(n.bind(n, "937692"));
  await o({
    guildId: r.guild.id
  }), a.default.transitionToInvite(r)
}