"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("815496");

function r(e) {
  let {
    quest: t,
    location: r
  } = e;
  return l.useCallback(() => {
    null != t && ((0, i.trackQuestContentClicked)(t.id, r, i.QuestContentCTA.CLAIM_REWARD), (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("36170").then(n.bind(n, "36170"));
      return n => (0, a.jsx)(e, {
        ...n,
        quest: t,
        location: r
      })
    }))
  }, [t, r])
}