"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("481060"),
  o = a("367907"),
  r = a("369994"),
  u = a("177862"),
  _ = a("981631"),
  R = a("689938"),
  c = a("329778");

function I(e) {
  let {
    guildId: t,
    messageId: s,
    transitionState: I,
    onClose: A
  } = e, [E, T] = n.useState([]), [D, N] = n.useState(), h = n.useCallback(() => {
    let e = {
      raid_alert_type: u.RaidAlertType.JOIN_RAID,
      raid_alert_id: s,
      false_alarm_type: E.map(e => e.toString()),
      false_alarm_other_reason: D,
      guild_id: t
    };
    (0, o.trackWithMetadata)(_.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, r.handleResolveRaid)(t, s, (0, u.getMostImportantRaidResolutionType)(E)), A(), (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("37564")]).then(a.bind(a, "969214"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, [A, s, t, D, E]), O = [{
    text: R.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
    value: u.RaidResolutionType.LEGITIMATE_ACTIVITY
  }, {
    text: R.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
    value: u.RaidResolutionType.DM_SPAM
  }, {
    text: R.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
    value: u.RaidResolutionType.JOIN_RAID
  }, {
    text: R.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
    value: u.RaidResolutionType.OTHER
  }];

  function L(e) {
    E.includes(e) ? T(t => t.filter(t => t !== e)) : T(t => [...t, e])
  }
  return (0, l.jsxs)(d.ModalRoot, {
    transitionState: I,
    size: d.ModalSize.SMALL,
    children: [(0, l.jsx)(d.ModalHeader, {
      separator: !1,
      className: c.center,
      children: (0, l.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: R.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
      })
    }), (0, l.jsxs)(d.ModalContent, {
      className: c.center,
      children: [(0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: c.textCenter,
        children: R.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: c.options,
        children: O.map(e => {
          let {
            text: t,
            value: a
          } = e;
          return (0, l.jsxs)("div", {
            className: i()(c.optionContainer, {
              [c.optionContainerOther]: a === u.RaidResolutionType.OTHER
            }),
            children: [(0, l.jsxs)(d.Clickable, {
              className: c.optionText,
              onClick: () => L(a),
              children: [(0, l.jsx)("div", {
                children: (0, l.jsx)(d.Checkbox, {
                  type: d.Checkbox.Types.INVERTED,
                  size: 20,
                  value: E.includes(a),
                  onChange: () => L(a)
                })
              }), (0, l.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: t
              })]
            }), a === u.RaidResolutionType.OTHER && E.includes(u.RaidResolutionType.OTHER) && (0, l.jsx)("div", {
              className: c.textboxContainer,
              children: (0, l.jsx)(d.TextArea, {
                className: c.falseAlarmReasonText,
                placeholder: R.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => N(e),
                value: D,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, a)
        })
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      className: c.__invalid_modalFooter,
      children: [(0, l.jsx)("div", {
        className: c.button,
        children: (0, l.jsx)(d.Button, {
          onClick: h,
          color: d.Button.Colors.BRAND_NEW,
          look: d.Button.Looks.FILLED,
          children: R.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
        })
      }), (0, l.jsx)(d.Button, {
        onClick: A,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: R.default.Messages.CANCEL
      })]
    })]
  })
}