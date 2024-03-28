"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250");
l("470079");
var s = l("498607"),
  n = l.n(s),
  o = l("913527"),
  i = l.n(o),
  r = l("399606"),
  d = l("893966"),
  u = l("527379"),
  C = l("932039"),
  c = l("689938");

function m(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getSearchStateByGuildId(t), [t], n()), {
    selectedJoinDateOption: o
  } = s, {
    afterDate: m,
    beforeDate: E,
    optionId: f
  } = o, _ = f === C.DATE_OPTION.CUSTOM, M = _ && null != m ? i()(m).format(C.MENU_DATE_FORMAT) : null, h = _ && null != E ? i()(E).format(C.MENU_DATE_FORMAT) : null;
  return (0, a.jsx)(C.default, {
    startDateLabel: M,
    endDateLabel: h,
    afterDate: m,
    beforeDate: E,
    selectedOption: f,
    isCustomDateRange: _,
    menuName: "joined-date",
    accessibilityLabel: c.default.Messages.MEMBER_SAFETY_JOINED_DATE_LABEL,
    onClose: l,
    onSelectDateOption: function(e, l) {
      let a = null != l ? i()().subtract(l.input, l.unit).valueOf() : null;
      (0, u.updateSearchState)(t, {
        ...s,
        selectedJoinDateOption: {
          optionId: e,
          afterDate: a,
          beforeDate: null
        }
      })
    },
    onToggleCustomDateRange: function() {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedJoinDateOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: _ ? m : null,
          beforeDate: _ ? E : null
        }
      })
    },
    onSelectStartDate: function(e) {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedJoinDateOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: E
        }
      })
    },
    onSelectEndDate: function(e) {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedJoinDateOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: m,
          beforeDate: e.valueOf()
        }
      })
    }
  })
}