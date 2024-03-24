"use strict";
l.r(t), l.d(t, {
  MENU_DATE_FORMAT: function() {
    return T
  },
  DATE_OPTION: function() {
    return a
  },
  default: function() {
    return A
  }
}), l("222007");
var a, s, n = l("37983"),
  o = l("884691"),
  i = l("414456"),
  r = l.n(i),
  d = l("866227"),
  u = l.n(d),
  C = l("868233"),
  c = l("77078"),
  m = l("980428"),
  E = l("875436"),
  f = l("772280"),
  M = l("49111"),
  h = l("782340"),
  _ = l("470869");
let T = "MMM Do, YYYY",
  S = u("2015-05-15").local(),
  x = (0, C.makeLazy)({
    createPromise: () => l.el("201959").then(l.bind(l, "201959")),
    webpackId: "201959"
  });
(s = a || (a = {}))[s.ALL = 0] = "ALL", s[s["1_HOUR"] = 1] = "1_HOUR", s[s["24_HOURS"] = 2] = "24_HOURS", s[s["7_DAYS"] = 3] = "7_DAYS", s[s["2_WEEKS"] = 4] = "2_WEEKS", s[s["4_WEEKS"] = 5] = "4_WEEKS", s[s["3_MONTHS"] = 6] = "3_MONTHS", s[s.CUSTOM = 7] = "CUSTOM";

function A(e) {
  let {
    startDateLabel: t,
    endDateLabel: l,
    afterDate: a,
    beforeDate: s,
    selectedOption: i,
    isCustomDateRange: d,
    menuName: C,
    onClose: T,
    onSelectDateOption: A,
    onToggleCustomDateRange: p,
    onSelectStartDate: L,
    onSelectEndDate: H
  } = e, N = [{
    id: 0,
    option: null,
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
  }, {
    id: 1,
    option: {
      input: 1,
      unit: "h"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
  }, {
    id: 2,
    option: {
      input: 24,
      unit: "h"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
  }, {
    id: 3,
    option: {
      input: 7,
      unit: "d"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
  }, {
    id: 4,
    option: {
      input: 2,
      unit: "w"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
  }, {
    id: 5,
    option: {
      input: 4,
      unit: "w"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
  }, {
    id: 6,
    option: {
      input: 3,
      unit: "M"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
  }], [g, I] = o.useState(!1), R = function() {
    if (7 !== i) return null;
    if (null != t && null != l) return "".concat(t, " - ").concat(l);
    if (null != t) return h.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER_ONLY.format({
      date: t
    });
    if (null != l) return h.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE_ONLY.format({
      date: l
    });
    return null
  }(), j = o.useCallback(() => {
    I(!0), p()
  }, [p]), v = o.useCallback(e => {
    L(e)
  }, [L]), D = o.useCallback(e => {
    H(e)
  }, [H]), b = o.useCallback(() => {
    null == s && null == a && A(0, null), I(!1)
  }, [a, s, A]);
  return (0, n.jsx)(c.Menu, {
    navId: "member-safety-guild-member-".concat(C, "-menu"),
    onClose: T,
    "aria-label": h.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: M.NOOP,
    children: (0, n.jsx)(c.MenuGroup, {
      children: g ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.MenuItem, {
          id: "back",
          action: b,
          render: e => (0, n.jsxs)("span", {
            ...e,
            className: _.nagivateBackContainer,
            children: [(0, n.jsx)(m.default, {
              width: 16,
              height: 16
            }), (0, n.jsx)(c.Text, {
              variant: "eyebrow",
              color: "header-primary",
              children: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
            })]
          })
        }), (0, n.jsx)(c.MenuItem, {
          id: "after-date-menu-item",
          label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
          subtext: t,
          subMenuClassName: _.calendarContainer,
          children: (0, n.jsx)(c.MenuItem, {
            id: "after-date-picker",
            render: e => (0, n.jsx)(x, {
              ...e,
              calendarClassName: _.calendar,
              value: d && null != a ? u(a) : void 0,
              onSelect: v,
              maxDate: u().local(),
              minDate: S
            })
          })
        }), (0, n.jsx)(c.MenuItem, {
          id: "before-date-menu-item",
          label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
          subtext: l,
          subMenuClassName: _.calendarContainer,
          children: (0, n.jsx)(c.MenuItem, {
            id: "before-date-picker",
            render: e => (0, n.jsx)(x, {
              ...e,
              calendarClassName: _.calendar,
              value: d && null != s ? u(s) : void 0,
              onSelect: D,
              maxDate: u().local(),
              minDate: d && null != a ? u(a) : S
            })
          })
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [N.map(e => {
          let {
            id: t,
            option: l,
            label: a
          } = e;
          return (0, n.jsx)(c.MenuRadioItem, {
            group: "member-safety-guild-member-".concat(C, "-menu"),
            id: "guild-member-".concat(C, "-option-").concat(t),
            label: a,
            action: () => A(t, l),
            checked: t === i
          }, "option-".concat(t))
        }), (0, n.jsx)(c.MenuSeparator, {}), (0, n.jsx)(c.MenuItem, {
          id: "guild-member-".concat(C, "-custom-option}"),
          action: j,
          render: e => (0, n.jsxs)("div", {
            className: r(_.otherDatesContainer, {
              [_.focused]: e.isFocused
            }),
            children: [(0, n.jsxs)("div", {
              className: _.leftContainer,
              children: [(0, n.jsx)(c.Text, {
                className: r(_.otherDateLabel, {
                  [_.focused]: e.isFocused
                }),
                variant: "text-sm/medium",
                children: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
              }), null != R && (0, n.jsx)(c.Text, {
                className: r(_.otherDateLabel, {
                  [_.focused]: e.isFocused
                }),
                color: "text-muted",
                variant: "text-xxs/medium",
                children: R
              })]
            }), 7 === i ? (0, n.jsx)(E.default, {
              foreground: _.radioSelection,
              width: 18,
              height: 18
            }) : (0, n.jsx)(f.default, {
              width: 16,
              height: 16,
              className: r(_.otherDateLabel, {
                [_.focused]: e.isFocused
              })
            })]
          })
        })]
      })
    })
  })
}