"use strict";
n.r(t), n.d(t, {
  doGuildOnboardingForPostAuthInvite: function() {
    return i
  }
});
var a = n("447543"),
  s = n("652898"),
  l = n("430824");
async function i(e) {
  let {
    code: t
  } = e, i = (await (0, s.default)(t)).invite;
  if (null == i || null == i.guild) return;
  if (await
    function() {
      return new Promise(e => {
        l.default.addConditionalChangeListener(() => !l.default.isLoaded() || (e(), !1))
      })
    }(), null == l.default.getGuild(i.guild.id)) return;
  let {
    default: r
  } = await Promise.resolve().then(n.bind(n, "17181"));
  await r({
    guildId: i.guild.id
  }), a.default.transitionToInvite(i)
}