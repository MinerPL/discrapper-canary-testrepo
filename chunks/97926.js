"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("63063"),
  i = s("113434"),
  r = s("497505"),
  o = s("37303"),
  d = s("981631"),
  u = s("689938"),
  c = s("719023");
t.default = () => {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = (0, i.useQuests)(void 0, {
    fetch: !0
  });
  return ((0, i.useDismissNewQuestBadge)(), t) ? (0, a.jsx)(n.Spinner, {
    className: c.spinner
  }) : 0 === e.length ? null : (0, a.jsx)(n.FormSection, {
    className: c.questsContainer,
    children: (0, a.jsxs)(n.HeadingLevel, {
      component: (0, a.jsxs)("div", {
        className: c.questsHeading,
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-md/semibold",
          className: c.questsHeading,
          children: u.default.Messages.QUESTS
        }), (0, a.jsx)(n.Text, {
          variant: "text-xs/normal",
          className: c.questsHeadingLearnMore,
          children: u.default.Messages.QUESTS_LEARN_MORE_LINK.format({
            questsLearnMoreLink: l.default.getArticleURL(d.HelpdeskArticles.QUESTS_LEARN_MORE)
          })
        })]
      }),
      children: [(0, a.jsx)(n.FormDivider, {
        className: c.divider
      }), e.map(e => (0, a.jsx)(o.QuestsCard, {
        quest: e,
        location: r.QuestContent.QUEST_INVENTORY_CARD
      }, e.id))]
    })
  })
}