"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("298193"),
  r = s("36082"),
  o = s("614149"),
  d = s("467319"),
  u = s("456677"),
  c = s("55889"),
  E = s("300453"),
  _ = s("620436"),
  I = s("273504"),
  T = s("689938"),
  S = s("393072");

function f(e) {
  var t, s;
  let {
    rule: f,
    onChangeRule: m
  } = e, [N, g] = l.useState(null === (t = f.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit), h = (0, d.useIsMentionRaidExperimentEnabled)(f.guildId, !1);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: S.cardContentsContainer,
      children: [(0, a.jsxs)(E.default, {
        step: 1,
        header: T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
        children: [(0, a.jsxs)("div", {
          className: S.mentionLimitContainer,
          children: [(0, a.jsx)("div", {
            className: S.mentionLimitIconContainer,
            children: (0, a.jsx)(r.default, {
              width: 24,
              height: 24,
              className: S.mentionLimitIcon
            })
          }), (0, a.jsxs)("div", {
            className: S.mentionLimitTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-sm/semibold",
              children: T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: S.descriptionHint,
              children: T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            className: S.stepperContainer,
            children: (0, a.jsx)(i.default, {
              value: N,
              onChange: e => {
                g(e), m({
                  ...f,
                  triggerMetadata: {
                    ...f.triggerMetadata,
                    mentionTotalLimit: e
                  }
                })
              },
              minValue: I.MIN_MENTION_SPAM_LIMIT,
              maxValue: I.MAX_MENTION_SPAM_LIMIT,
              className: S.stepper
            })
          })]
        }), h ? (0, a.jsxs)("div", {
          className: S.mentionLimitContainer,
          children: [(0, a.jsx)("div", {
            className: S.mentionLimitIconContainer,
            children: (0, a.jsx)(o.default, {
              width: 24,
              height: 24,
              className: S.mentionLimitIcon
            })
          }), (0, a.jsxs)("div", {
            className: S.mentionLimitTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-sm/semibold",
              children: T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
            }), (0, a.jsx)(n.Text, {
              color: "interactive-normal",
              variant: "text-xs/medium",
              className: S.descriptionHint,
              children: T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(n.Checkbox, {
              type: n.Checkbox.Types.INVERTED,
              value: null === (s = f.triggerMetadata) || void 0 === s ? void 0 : s.mentionRaidProtectionEnabled,
              onChange: (e, t) => {
                m({
                  ...f,
                  triggerMetadata: {
                    ...f.triggerMetadata,
                    mentionRaidProtectionEnabled: t
                  }
                })
              },
              className: S.__invalid_actionCheckbox
            })
          })]
        }) : null]
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.ARROW_DOWN
      }), (0, a.jsx)(E.default, {
        step: 2,
        header: T.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(u.default, {
          rule: f,
          onChangeRule: m
        })
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.CROSS
      }), (0, a.jsx)(E.default, {
        step: 3,
        header: T.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(c.default, {
          rule: f,
          onChangeRule: m
        })
      })]
    })
  })
}