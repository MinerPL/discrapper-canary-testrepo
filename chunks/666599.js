"use strict";
s.r(a);
var r = s("735250");
s("470079");
var l = s("718017"),
  t = s("692547"),
  n = s("481060"),
  i = s("153124"),
  d = s("154921"),
  _ = s("731455"),
  I = s("689938"),
  c = s("458999");
let o = e => {
  let {
    currentNumber: a,
    thresholdNumber: s,
    currentLabel: i,
    isPercent: _ = !1
  } = e, o = null != s ? Math.floor(a / s * 100) : 0, T = I.default.Messages.NUMBERS_ONLY.format({
    count: a
  }), E = null != s ? I.default.Messages.NUMBERS_ONLY.format({
    count: s
  }) : "--", S = (0, n.useToken)(t.default.unsafe_rawColors.RED_400).hex(), N = (0, n.useToken)(t.default.unsafe_rawColors.YELLOW_300).hex();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.progressWrapper,
      children: [(0, r.jsx)("div", {
        className: c.progressBackground
      }), (0, r.jsx)(l.Spring, {
        from: {
          width: 0
        },
        to: {
          width: o
        },
        config: {
          tension: 200,
          friction: 20,
          mass: 50,
          clamp: !0
        },
        children: e => {
          let {
            width: a
          } = e;
          return (0, r.jsx)(l.animated.div, {
            className: c.progressBar,
            style: {
              width: a.interpolate(e => "".concat(e, "%")),
              backgroundColor: a.interpolate(e => e < 33 ? S : N)
            }
          })
        }
      })]
    }), (0, r.jsxs)("div", {
      className: c.labelWrapper,
      children: [(0, r.jsxs)("div", {
        className: c.__invalid_current,
        children: [(0, r.jsx)(d.default, {
          color: o < 33 ? d.default.Colors.ERROR : d.default.Colors.STATUS_YELLOW,
          className: c.bold,
          children: _ ? "".concat(T, "%") : T
        }), (0, r.jsxs)(n.Text, {
          "aria-describedby": "health-score-details-score-explain",
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [i, (0, r.jsx)("sup", {
            "aria-hidden": !0,
            children: "1"
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: c.requirement,
        children: [(0, r.jsx)(n.Text, {
          className: c.bold,
          variant: "text-sm/semibold",
          children: _ ? "".concat(E, "%") : E
        }), (0, r.jsx)(n.Text, {
          "aria-describedby": "health-score-details-requirement-explain",
          variant: "text-xs/normal",
          color: "header-secondary",
          children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_PROGRESS_REQUIREMENT_LABEL
        })]
      })]
    })]
  })
};
a.default = e => {
  let a, s, l, {
      guildChecklist: t,
      transitionState: d,
      onClose: T
    } = e,
    E = (0, i.useUID)(),
    {
      retentionHealthy: S,
      engagementHealthy: N,
      healthScore: m
    } = t,
    {
      avg_nonnew_participators: C,
      avg_nonnew_communicators: u,
      perc_ret_w1_intentful: h
    } = m;
  return !N && null != C && C < _.DISCOVERY_PARTICIPATOR_REQUIREMENT && (s = (0, r.jsxs)("div", {
    className: c.failingBlock,
    children: [(0, r.jsx)(n.Heading, {
      className: c.marginAfter,
      variant: "heading-md/semibold",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION
    }), (0, r.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_FAILING_ACTION_DETAILS
    }), (0, r.jsx)(o, {
      currentNumber: C,
      thresholdNumber: 40,
      currentLabel: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_VISITOR_PROGRESS_LABEL
    })]
  })), !N && null != u && u < _.DISCOVERY_COMMUNICATOR_REQUIREMENT && (l = (0, r.jsxs)("div", {
    className: c.failingBlock,
    children: [(0, r.jsx)(n.Heading, {
      className: c.marginAfter,
      variant: "heading-md/semibold",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION
    }), (0, r.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_FAILING_ACTION_DETAILS
    }), (0, r.jsx)(o, {
      currentNumber: u,
      thresholdNumber: 20,
      currentLabel: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_COMMUNICATOR_PROGRESS_LABEL
    })]
  })), !S && null != h && (a = (0, r.jsxs)("div", {
    className: c.failingBlock,
    children: [(0, r.jsx)(n.Heading, {
      className: c.marginAfter,
      variant: "heading-md/semibold",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION
    }), (0, r.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING_ACTION_DETAILS_UPDATED.format()
    }), (0, r.jsx)(o, {
      currentNumber: Math.floor(100 * h),
      thresholdNumber: 10,
      currentLabel: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_PROGRESS_LABEL,
      isPercent: !0
    })]
  })), (0, r.jsxs)(n.ModalRoot, {
    transitionState: d,
    size: n.ModalSize.MEDIUM,
    className: c.__invalid_modal,
    "aria-labelledby": E,
    children: [(0, r.jsxs)(n.ModalContent, {
      className: c.content,
      children: [(0, r.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        className: c.modalHeader,
        id: E,
        children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING
      }), (0, r.jsx)(n.Text, {
        className: c.marginAfter,
        variant: "text-sm/normal",
        children: I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_DEFINITIONS_INTRO
      }), (0, r.jsx)("div", {
        className: c.separator
      }), s, l, a, (0, r.jsx)("div", {
        className: c.separator
      }), (0, r.jsxs)(n.Text, {
        className: c.marginAfter,
        color: "header-secondary",
        id: "health-score-details-score-explain",
        variant: "text-sm/normal",
        children: [(0, r.jsx)("sup", {
          "aria-hidden": !0,
          children: "1 "
        }), I.default.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SCORE_EXPLAIN]
      })]
    }), (0, r.jsx)(n.ModalCloseButton, {
      onClick: T,
      className: c.closeButton
    })]
  })
}