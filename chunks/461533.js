"use strict";
t.r(s), t.d(s, {
  default: function() {
    return M
  }
}), t("47120");
var a = t("735250"),
  S = t("470079"),
  r = t("481060"),
  _ = t("369994"),
  n = t("781208"),
  o = t("689938"),
  l = t("949049");

function M(e) {
  let {
    guildId: s,
    transitionState: t,
    onClose: M
  } = e, [c, i] = S.useState([]), E = S.useCallback(() => {
    (0, _.trackReportRaidViewed)(s, c), (0, _.handleReportRaid)(s), M()
  }, [s, M, c]), I = S.useCallback(e => () => {
    i(s => s.includes(e) ? s.filter(s => s !== e) : [...s, e])
  }, []), d = S.useCallback(() => {
    open(n.COMMUNITY_PORTAL_SERVER_SAFETY_PAGE)
  }, []);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    size: r.ModalSize.SMALL,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: o.default.Messages.GUILD_REPORT_RAID_MODAL_TITLE
      })
    }), (0, a.jsxs)(r.ModalContent, {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.default.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format({
          onClick: d
        })
      }), (0, a.jsx)("div", {
        className: l.mainCheckboxContainer,
        children: n.REPORT_RAID_OPTIONS.map(e => (0, a.jsxs)(r.Clickable, {
          className: l.checkboxContainer,
          onClick: I(e),
          children: [(0, a.jsx)(r.Checkbox, {
            type: r.Checkbox.Types.INVERTED,
            className: l.checkbox,
            value: c.includes(e),
            displayOnly: !0
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: (0, n.getReportRaidTypeLabel)(e)
          })]
        }, e))
      })]
    }), (0, a.jsxs)(r.ModalFooter, {
      children: [(0, a.jsx)(r.Button, {
        onClick: E,
        color: r.Button.Colors.BRAND_NEW,
        look: r.Button.Looks.FILLED,
        children: o.default.Messages.SUBMIT
      }), (0, a.jsx)(r.Button, {
        onClick: M,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: o.default.Messages.CANCEL
      })]
    })]
  })
}