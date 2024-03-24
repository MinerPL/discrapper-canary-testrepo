"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("37983");
l("884691");
var s = l("969176"),
  n = l.n(s),
  o = l("866227"),
  i = l.n(o),
  r = l("65597"),
  d = l("178406"),
  u = l("645266"),
  C = l("731612"),
  c = l("782340");

function m(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getSearchStateByGuildId(t), [t], n), {
    selectedAccountAgeOption: o
  } = s, {
    afterDate: m,
    beforeDate: E,
    optionId: f
  } = o, M = f === C.DATE_OPTION.CUSTOM, h = M && null != m ? i(m).format(C.MENU_DATE_FORMAT) : null, _ = M && null != E ? i(E).format(C.MENU_DATE_FORMAT) : null;
  return (0, a.jsx)(C.default, {
    startDateLabel: h,
    endDateLabel: _,
    afterDate: m,
    beforeDate: E,
    selectedOption: f,
    isCustomDateRange: M,
    menuName: "account-age",
    accessibilityLabel: c.default.Messages.MEMBER_SAFETY_ACCOUNT_AGE_LABEL,
    onClose: l,
    onSelectDateOption: function(e, l) {
      let a = null != l ? i().subtract(l.input, l.unit).valueOf() : null;
      (0, u.updateSearchState)(t, {
        ...s,
        selectedAccountAgeOption: {
          optionId: e,
          afterDate: a,
          beforeDate: null
        }
      })
    },
    onToggleCustomDateRange: function() {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedAccountAgeOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: M ? m : null,
          beforeDate: M ? E : null
        }
      })
    },
    onSelectStartDate: function(e) {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedAccountAgeOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: E
        }
      })
    },
    onSelectEndDate: function(e) {
      (0, u.updateSearchState)(t, {
        ...s,
        selectedAccountAgeOption: {
          optionId: C.DATE_OPTION.CUSTOM,
          afterDate: m,
          beforeDate: e.valueOf()
        }
      })
    }
  })
}