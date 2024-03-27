"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("745633"),
  l = n("11056"),
  i = n("447621"),
  r = n("782340"),
  o = n("791666"),
  u = e => {
    let {
      handleCategorySelect: t,
      shouldDisplaySelectedCategory: n,
      currentCategoryId: u
    } = e;
    return (0, a.jsx)(l.default, {
      avatar: (0, a.jsx)(s.default, {}),
      name: r.default.Messages.HUB_SCHOOL_HUBS,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => {
        t(i.DISCORD_HUB_ID)
      },
      wrapContent: !0,
      selected: n && i.DISCORD_HUB_ID === u,
      className: o.categoryItem,
      selectedClassName: o.selectedCategoryItem,
      innerClassName: o.itemInner
    }, i.DISCORD_HUB_ID)
  }