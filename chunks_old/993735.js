"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("879364"),
  i = n("588025"),
  r = n("301259"),
  o = n("987099"),
  u = n("571777");

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