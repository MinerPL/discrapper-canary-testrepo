"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  a = n("884691"),
  o = n("77078"),
  l = n("357412"),
  r = n("592407"),
  s = n("803163"),
  d = n("395905"),
  c = n("338807"),
  u = n("219772"),
  E = n("49111"),
  _ = n("782340"),
  f = n("306671"),
  M = n("246369");

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
      onEnableMFAClick: s.default.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY), r.default.open(M, E.GuildSettingsSections.SAFETY, void 0, E.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }
    }
  }), [M, A]), h = (0, l.default)(t, S);
  return null != _ ? (0, i.jsx)("div", {
    className: f.paddedContainer,
    children: (0, i.jsx)(d.default, {
      children: _.message
    })
  }) : null == h || n ? (0, i.jsx)("div", {
    className: f.paddedContainer,
    children: (0, i.jsx)(o.Spinner, {})
  }) : (0, i.jsx)("div", {
    children: h.map((e, t) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(c.ChecklistItem, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), t < h.length - 1 ? (0, i.jsx)(o.FormDivider, {}) : null]
    }, e.checkedLabel))
  })
}

function h(e) {
  let {
    eligibility: t,
    eligibilityLoading: n,
    eligibilityError: a,
    refreshEligibility: l,
    guildId: r,
    transitionState: s
  } = e;
  return (0, i.jsxs)(o.ModalRoot, {
    className: f.eligibilityModal,
    size: o.ModalSize.MEDIUM,
    transitionState: s,
    children: [(0, i.jsx)(A, {}), (0, i.jsx)(o.ModalContent, {
      children: (0, i.jsx)(S, {
        eligibility: t,
        eligibilityLoading: n,
        eligibilityError: a,
        guildId: r,
        onEligibilityBecameStale: l
      })
    })]
  })
}