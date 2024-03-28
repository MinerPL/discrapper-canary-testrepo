"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("113434"),
  i = n("497505"),
  r = n("37303"),
  o = n("683650"),
  u = n("392108");

function d(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: d
  } = (0, l.useQuests)([t], {
    fetch: !0
  });
  if (d) return (0, s.jsx)(a.Spinner, {
    className: u.spinner
  });
  if (0 === n.length) return (0, s.jsx)(o.InvalidQuestsEmbed, {});
  let [c] = n;
  return (0, s.jsx)(r.QuestsCard, {
    quest: c,
    location: i.QuestContent.QUESTS_EMBED
  }, c.id)
}