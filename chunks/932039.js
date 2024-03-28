"use strict";
l.r(t), l.d(t, {
  DATE_OPTION: function() {
    return a
  },
  MENU_DATE_FORMAT: function() {
    return T
  },
  default: function() {
    return A
  }
}), l("47120");
var a, s, n = l("735250"),
  o = l("470079"),
  i = l("803997"),
  r = l.n(i),
  d = l("913527"),
  u = l.n(d),
  C = l("608787"),
  c = l("481060"),
  m = l("292937"),
  E = l("553826"),
  f = l("692437"),
  _ = l("981631"),
  M = l("689938"),
  h = l("913036");
let T = "MMM Do, YYYY",
  S = u()("2015-05-15").local(),
  x = (0, C.makeLazy)({
    createPromise: () => Promise.resolve().then(l.bind(l, "575535")),
    webpackId: "575535"
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
    onSelectEndDate: g
  } = e, H = [{
    id: 0,
    option: null,
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
  }, {
    id: 1,
    option: {
      input: 1,
      unit: "h"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
  }, {
    id: 2,
    option: {
      input: 24,
      unit: "h"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
  }, {
    id: 3,
    option: {
      input: 7,
      unit: "d"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
  }, {
    id: 4,
    option: {
      input: 2,
      unit: "w"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
  }, {
    id: 5,
    option: {
      input: 4,
      unit: "w"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
  }, {
    id: 6,
    option: {
      input: 3,
      unit: "M"
    },
    label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
  }], [N, I] = o.useState(!1), R = function() {
    if (7 !== i) return null;
    if (null != t && null != l) return "".concat(t, " - ").concat(l);
    if (null != t) return M.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER_ONLY.format({
      date: t
    });
    if (null != l) return M.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE_ONLY.format({
      date: l
    });
    return null
  }(), v = o.useCallback(() => {
    I(!0), p()
  }, [p]), j = o.useCallback(e => {
    L(e)
  }, [L]), D = o.useCallback(e => {
    g(e)
  }, [g]), b = o.useCallback(() => {
    null == s && null == a && A(0, null), I(!1)
  }, [a, s, A]);
  return (0, n.jsx)(c.Menu, {
    navId: "member-safety-guild-member-".concat(C, "-menu"),
    onClose: T,
    "aria-label": M.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: _.NOOP,
    children: (0, n.jsx)(c.MenuGroup, {
      children: N ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.MenuItem, {
          id: "back",
          action: b,
          render: e => (0, n.jsxs)("span", {
            ...e,
            className: h.nagivateBackContainer,
            children: [(0, n.jsx)(m.default, {
              width: 16,
              height: 16
            }), (0, n.jsx)(c.Text, {
              variant: "eyebrow",
              color: "header-primary",
              children: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
            })]
          })
        }), (0, n.jsx)(c.MenuItem, {
          id: "after-date-menu-item",
          label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
          subtext: t,
          subMenuClassName: h.calendarContainer,
          children: (0, n.jsx)(c.MenuItem, {
            id: "after-date-picker",
            render: e => (0, n.jsx)(x, {
              ...e,
              calendarClassName: h.calendar,
              value: d && null != a ? u()(a) : void 0,
              onSelect: j,
              maxDate: u()().local(),
              minDate: S
            })
          })
        }), (0, n.jsx)(c.MenuItem, {
          id: "before-date-menu-item",
          label: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
          subtext: l,
          subMenuClassName: h.calendarContainer,
          children: (0, n.jsx)(c.MenuItem, {
            id: "before-date-picker",
            render: e => (0, n.jsx)(x, {
              ...e,
              calendarClassName: h.calendar,
              value: d && null != s ? u()(s) : void 0,
              onSelect: D,
              maxDate: u()().local(),
              minDate: d && null != a ? u()(a) : S
            })
          })
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [H.map(e => {
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
          action: v,
          render: e => (0, n.jsxs)("div", {
            className: r()(h.otherDatesContainer, {
              [h.focused]: e.isFocused
            }),
            children: [(0, n.jsxs)("div", {
              className: h.leftContainer,
              children: [(0, n.jsx)(c.Text, {
                className: r()(h.otherDateLabel, {
                  [h.focused]: e.isFocused
                }),
                variant: "text-sm/medium",
                children: M.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
              }), null != R && (0, n.jsx)(c.Text, {
                className: r()(h.otherDateLabel, {
                  [h.focused]: e.isFocused
                }),
                color: "text-muted",
                variant: "text-xxs/medium",
                children: R
              })]
            }), 7 === i ? (0, n.jsx)(E.default, {
              foreground: h.radioSelection,
              width: 18,
              height: 18
            }) : (0, n.jsx)(f.default, {
              width: 16,
              height: 16,
              className: r()(h.otherDateLabel, {
                [h.focused]: e.isFocused
              })
            })]
          })
        })]
      })
    })
  })
}