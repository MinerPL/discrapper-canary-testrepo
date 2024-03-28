"use strict";
t.r(a), t.d(a, {
  default: function() {
    return r
  }
}), t("47120");
var n = t("735250"),
  d = t("470079"),
  o = t("803997"),
  s = t.n(o),
  _ = t("831209"),
  i = t("481060"),
  E = t("367907"),
  I = t("177862"),
  c = t("465670"),
  T = t("630641"),
  l = t("981631"),
  A = t("689938"),
  N = t("399101");

function r(e) {
  let {
    guildId: a,
    transitionState: t,
    onClose: o
  } = e, [r, M] = d.useState([]), [u, D] = d.useState(), R = [{
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
    value: I.RaidLockdownFeedbackType.DM_SPAM
  }, {
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
    value: I.RaidLockdownFeedbackType.MENTION_SPAM
  }, {
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
    value: I.RaidLockdownFeedbackType.CHANNEL_SPAM
  }, {
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
    value: I.RaidLockdownFeedbackType.SUS_NEW_MEMBERS
  }, {
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
    value: I.RaidLockdownFeedbackType.CHANGING_SETTINGS
  }, {
    text: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
    value: I.RaidLockdownFeedbackType.OTHER
  }];

  function O(e) {
    r.includes(e) ? M(a => a.filter(a => a !== e)) : M(a => [...a, e])
  }
  return null == a ? (o(), null) : (0, n.jsxs)(i.ModalRoot, {
    transitionState: t,
    size: i.ModalSize.MEDIUM,
    children: [(0, n.jsx)(i.ModalHeader, {
      separator: !0,
      children: (0, n.jsxs)("div", {
        className: N.headerContainer,
        children: [(0, n.jsxs)("div", {
          className: N.headerText,
          children: [(0, n.jsx)(T.default, {
            color: _.default.INTERACTIVE_NORMAL,
            width: 16,
            height: 16
          }), (0, n.jsx)(i.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: A.default.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, n.jsx)(i.Clickable, {
          onClick: o,
          children: (0, n.jsx)(c.default, {
            className: N.closeIcon,
            width: 16,
            height: 16
          })
        })]
      })
    }), (0, n.jsx)(i.ModalContent, {
      children: (0, n.jsx)("div", {
        className: N.options,
        children: R.map(e => {
          let {
            text: a,
            value: t
          } = e;
          return (0, n.jsxs)("div", {
            className: s()(N.optionContainer, {
              [N.optionContainerOther]: t === I.RaidLockdownFeedbackType.OTHER
            }),
            children: [(0, n.jsxs)(i.Clickable, {
              className: N.optionText,
              onClick: () => O(t),
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(i.Checkbox, {
                  type: i.Checkbox.Types.INVERTED,
                  size: 20,
                  value: r.includes(t),
                  onChange: () => O(t)
                })
              }), (0, n.jsx)(i.Text, {
                variant: "text-md/medium",
                color: r.includes(t) ? "interactive-active" : "interactive-normal",
                children: a
              })]
            }), t === I.RaidLockdownFeedbackType.OTHER && r.includes(I.RaidLockdownFeedbackType.OTHER) && (0, n.jsx)("div", {
              className: N.textboxContainer,
              children: (0, n.jsx)(i.TextArea, {
                className: N.serverLockdownReasonText,
                placeholder: A.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => D(e),
                value: u,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, t)
        })
      })
    }), (0, n.jsx)(i.ModalFooter, {
      children: (0, n.jsx)(i.Button, {
        onClick: function() {
          (0, E.trackWithMetadata)(l.AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: r,
            raid_lockdown_feedback_other_reason: u,
            guild_id: a
          }), o()
        },
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        submitting: !1,
        children: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}