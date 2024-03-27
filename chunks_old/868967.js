"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("37983"),
  s = l("884691"),
  n = l("969176"),
  o = l.n(n),
  i = l("65597"),
  r = l("77078"),
  d = l("4845"),
  u = l("635731"),
  C = l("491401"),
  c = l("864982"),
  m = l("130037"),
  E = l("178406"),
  f = l("645266"),
  M = l("49111"),
  h = l("782340"),
  _ = l("262793");

function T(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, i.useStateFromStores)([E.default], () => E.default.getSearchStateByGuildId(t), [t], o), T = (0, m.useTrackMemberFilterSafetyFlagsUsed)(t), S = s.useCallback(() => {
    !n.requireUnusualDmActivity && T(m.MemberSafetyFlagType.UNUSUAL_DM_ACTIVITY), (0, f.updateSearchState)(t, {
      ...n,
      requireUnusualDmActivity: !n.requireUnusualDmActivity
    })
  }, [t, n, T]), x = s.useCallback(() => {
    !n.requireCommunicationDisabled && T(m.MemberSafetyFlagType.COMMUNICATION_DISABLED), (0, f.updateSearchState)(t, {
      ...n,
      requireCommunicationDisabled: !n.requireCommunicationDisabled
    })
  }, [t, n, T]), A = s.useCallback(() => {
    !n.requireUnusualAccountActivity && T(m.MemberSafetyFlagType.UNUSUAL_ACCOUNT_ACTIVITY), (0, f.updateSearchState)(t, {
      ...n,
      requireUnusualAccountActivity: !n.requireUnusualAccountActivity
    })
  }, [t, n, T]), p = s.useCallback(() => {
    !n.requireUsernameQuarantined && T(m.MemberSafetyFlagType.USERNAME_QUARANTINED), (0, f.updateSearchState)(t, {
      ...n,
      requireUsernameQuarantined: !n.requireUsernameQuarantined
    })
  }, [t, n, T]);
  return (0, a.jsx)(r.Menu, {
    navId: "member-safety-flags",
    onClose: l,
    "aria-label": h.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: M.NOOP,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [(0, a.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, a.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, a.jsx)(d.default, {
            width: 16,
            height: 16,
            className: _.unusualDMLabelIcon
          }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
        }),
        action: S,
        checked: n.requireUnusualDmActivity
      }), (0, a.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-communication-disabled",
        label: (0, a.jsxs)("div", {
          className: _.checkboxLabel,
          children: [(0, a.jsx)(C.default, {
            width: 16,
            height: 16,
            className: _.timeoutLabelIcon
          }), h.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
        }),
        action: x,
        checked: n.requireCommunicationDisabled
      }), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-unusual-account-activity",
          label: (0, a.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, a.jsx)(c.default, {
              width: 16,
              height: 16,
              className: _.unusualAccountActivityLabelIcon
            }), h.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
          }),
          action: A,
          checked: n.requireUnusualAccountActivity
        }), (0, a.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-username-quarantined",
          label: (0, a.jsxs)("div", {
            className: _.checkboxLabel,
            children: [(0, a.jsx)(u.default, {
              width: 16,
              height: 16,
              className: _.quarantinedLabelIcon
            }), h.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
          }),
          action: p,
          checked: n.requireUsernameQuarantined
        })]
      })]
    })
  })
}