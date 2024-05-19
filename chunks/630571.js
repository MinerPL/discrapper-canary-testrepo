"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var a = n("735250");
n("470079");
var s = n("924826"),
  l = n("844099"),
  i = n("524437"),
  r = n("515753"),
  o = n("100527"),
  u = n("377171"),
  d = n("243778"),
  c = n("26290"),
  f = n("709158"),
  E = n("981631"),
  h = n("921944"),
  _ = n("689938"),
  C = n("981079");
let m = e => {
  let {
    color: t
  } = e;
  return (0, a.jsx)(c.TextBadge, {
    className: C.newBadge,
    color: null != t ? t : u.default.BG_BRAND,
    text: _.default.Messages.NEW
  })
};

function S(e) {
  let {
    selected: t,
    locationState: n
  } = e, u = (0, s.useListItem)("quest-home"), c = o.default.HOME_PAGE_QUEST_HOME_TAB, [C, S] = (0, d.useSelectedDismissibleContent)([i.DismissibleContent.QUEST_HOME_FRIENDS_LIST_NEW_BADGE]), p = (0, f.default)(c);
  return p ? (0, a.jsx)(r.LinkButton, {
    icon: l.QuestsIcon,
    locationState: n,
    route: E.Routes.QUEST_HOME,
    selected: t,
    text: _.default.Messages.QUESTS,
    onClick: () => {
      S(h.ContentDismissActionType.TAKE_ACTION)
    },
    ...u,
    children: C === i.DismissibleContent.QUEST_HOME_FRIENDS_LIST_NEW_BADGE && (0, a.jsx)(m, {})
  }) : null
}