"use strict";
t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(36082),
  r = t(614149),
  o = t(467319),
  c = t(456677),
  d = t(55889),
  u = t(300453),
  E = t(620436),
  _ = t(273504),
  I = t(689938),
  T = t(477620);

function N(e) {
  var s, t;
  let {
    rule: N,
    onChangeRule: m
  } = e, [S, h] = i.useState(null === (s = N.triggerMetadata) || void 0 === s ? void 0 : s.mentionTotalLimit), g = (0, o.a)(N.guildId, !1);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: T.cardContentsContainer,
      children: [(0, n.jsxs)(u.Z, {
        step: 1,
        header: I.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
        children: [(0, n.jsxs)("div", {
          className: T.mentionLimitContainer,
          children: [(0, n.jsx)("div", {
            className: T.mentionLimitIconContainer,
            children: (0, n.jsx)(a.Z, {
              width: 24,
              height: 24,
              className: T.mentionLimitIcon
            })
          }), (0, n.jsxs)("div", {
            className: T.mentionLimitTextContainer,
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-sm/semibold",
              children: I.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
            }), (0, n.jsx)(l.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: I.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
            })]
          }), (0, n.jsx)("div", {
            className: T.stepperContainer,
            children: (0, n.jsx)(l.NumberInputStepper, {
              value: S,
              onChange: e => {
                h(e), m({
                  ...N,
                  triggerMetadata: {
                    ...N.triggerMetadata,
                    mentionTotalLimit: e
                  }
                })
              },
              minValue: _.Vg,
              maxValue: _.Lg,
              className: T.stepper
            })
          })]
        }), g ? (0, n.jsxs)("div", {
          className: T.mentionLimitContainer,
          children: [(0, n.jsx)("div", {
            className: T.mentionLimitIconContainer,
            children: (0, n.jsx)(r.Z, {
              width: 24,
              height: 24,
              className: T.mentionLimitIcon
            })
          }), (0, n.jsxs)("div", {
            className: T.mentionLimitTextContainer,
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-sm/semibold",
              children: I.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
            }), (0, n.jsx)(l.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: T.descriptionHint,
              children: I.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
            })]
          }), (0, n.jsx)("div", {
            children: (0, n.jsx)(l.Checkbox, {
              type: l.Checkbox.Types.INVERTED,
              value: null === (t = N.triggerMetadata) || void 0 === t ? void 0 : t.mentionRaidProtectionEnabled,
              onChange: (e, s) => {
                m({
                  ...N,
                  triggerMetadata: {
                    ...N.triggerMetadata,
                    mentionRaidProtectionEnabled: s
                  }
                })
              },
              className: T.__invalid_actionCheckbox
            })
          })]
        }) : null]
      }), (0, n.jsx)(E.Z, {
        type: E.Z.Type.ARROW_DOWN
      }), (0, n.jsx)(u.Z, {
        step: 2,
        header: I.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, n.jsx)(c.Z, {
          rule: N,
          onChangeRule: m
        })
      }), (0, n.jsx)(E.Z, {
        type: E.Z.Type.CROSS
      }), (0, n.jsx)(u.Z, {
        step: 3,
        header: I.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, n.jsx)(d.Z, {
          rule: N,
          onChangeRule: m
        })
      })]
    })
  })
}