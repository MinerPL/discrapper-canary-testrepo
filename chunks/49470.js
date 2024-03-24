"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("701909"),
  i = s("879364"),
  r = s("588025"),
  o = s("301259"),
  d = s("49111"),
  u = s("782340"),
  c = s("38845"),
  S = () => {
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