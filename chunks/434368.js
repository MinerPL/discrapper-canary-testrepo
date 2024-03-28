"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("735250"),
  s = l("470079"),
  n = l("498607"),
  o = l.n(n),
  i = l("399606"),
  r = l("481060"),
  d = l("725522"),
  u = l("862443"),
  C = l("789695"),
  c = l("203893"),
  m = l("910693"),
  E = l("893966"),
  f = l("527379"),
  _ = l("981631"),
  M = l("689938"),
  h = l("709502");

function T(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, i.useStateFromStores)([E.default], () => E.default.getSearchStateByGuildId(t), [t], o()), T = (0, m.useTrackMemberFilterSafetyFlagsUsed)(t), S = s.useCallback(() => {
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
    "aria-label": M.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: _.NOOP,
    children: (0, a.jsxs)(r.MenuGroup, {
      children: [(0, a.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, a.jsxs)("div", {
          className: h.checkboxLabel,
          children: [(0, a.jsx)(d.default, {
            width: 16,
            height: 16,
            className: h.unusualDMLabelIcon
          }), M.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY]
        }),
        action: S,
        checked: n.requireUnusualDmActivity
      }), (0, a.jsx)(r.MenuCheckboxItem, {
        id: "toggle-require-communication-disabled",
        label: (0, a.jsxs)("div", {
          className: h.checkboxLabel,
          children: [(0, a.jsx)(C.default, {
            width: 16,
            height: 16,
            className: h.timeoutLabelIcon
          }), M.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED]
        }),
        action: x,
        checked: n.requireCommunicationDisabled
      }), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-unusual-account-activity",
          label: (0, a.jsxs)("div", {
            className: h.checkboxLabel,
            children: [(0, a.jsx)(c.default, {
              width: 16,
              height: 16,
              className: h.unusualAccountActivityLabelIcon
            }), M.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY]
          }),
          action: A,
          checked: n.requireUnusualAccountActivity
        }), (0, a.jsx)(r.MenuCheckboxItem, {
          id: "toggle-require-username-quarantined",
          label: (0, a.jsxs)("div", {
            className: h.checkboxLabel,
            children: [(0, a.jsx)(u.default, {
              width: 16,
              height: 16,
              className: h.quarantinedLabelIcon
            }), M.default.Messages.MEMBER_SAFETY_USERNAME_QUARANTINED]
          }),
          action: p,
          checked: n.requireUsernameQuarantined
        })]
      })]
    })
  })
}