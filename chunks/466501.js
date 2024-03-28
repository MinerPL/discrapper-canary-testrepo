"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250"),
  a = n("470079"),
  o = n("481060"),
  l = n("651711"),
  s = n("434404"),
  r = n("202858"),
  d = n("587431"),
  c = n("400842"),
  u = n("271267"),
  E = n("981631"),
  _ = n("689938"),
  f = n("721126"),
  M = n("653904");

function A() {
  return (0, i.jsxs)("div", {
    className: f.eligibilityHeader,
    children: [(0, i.jsx)(o.Heading, {
      className: f.eligibilityHeaderText,
      variant: "heading-lg/extrabold",
      color: "header-primary",
      children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
    }), (0, i.jsx)("img", {
      className: f.eligibilityHeaderImage,
      src: M,
      alt: ""
    }), (0, i.jsx)(o.ModalCloseButton, {
      className: f.eligibilityHeaderCloseButton,
      onClick: () => {
        (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY)
      }
    })]
  })
}

function S(e) {
  let {
    eligibility: t,
    eligibilityLoading: n,
    eligibilityError: _,
    guildId: M,
    onEligibilityBecameStale: A
  } = e, S = a.useMemo(() => ({
    onEligibilityBecameStale: A,
    sortedByIneligible: !0,
    actions: {
      onEnableMFAClick: r.default.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY), s.default.open(M, E.GuildSettingsSections.SAFETY, void 0, E.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }
    }
  }), [M, A]), p = (0, l.default)(t, S);
  return null != _ ? (0, i.jsx)("div", {
    className: f.paddedContainer,
    children: (0, i.jsx)(d.default, {
      children: _.message
    })
  }) : null == p || n ? (0, i.jsx)("div", {
    className: f.paddedContainer,
    children: (0, i.jsx)(o.Spinner, {})
  }) : (0, i.jsx)("div", {
    children: p.map((e, t) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(c.ChecklistItem, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < p.length - 1 ? (0, i.jsx)(o.FormDivider, {}) : null]
    }, e.checkedLabel))
  })
}

function p(e) {
  let {
    eligibility: t,
    eligibilityLoading: n,
    eligibilityError: a,
    refreshEligibility: l,
    guildId: s,
    transitionState: r
  } = e;
  return (0, i.jsxs)(o.ModalRoot, {
    className: f.eligibilityModal,
    size: o.ModalSize.MEDIUM,
    transitionState: r,
    children: [(0, i.jsx)(A, {}), (0, i.jsx)(o.ModalContent, {
      children: (0, i.jsx)(S, {
        eligibility: t,
        eligibilityLoading: n,
        eligibilityError: a,
        guildId: s,
        onEligibilityBecameStale: l
      })
    })]
  })
}