"use strict";
t.r(s), t.d(s, {
  default: function() {
    return v
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  i = t("77078"),
  n = t("531470"),
  d = t("538137"),
  r = t("36694"),
  c = t("599110"),
  o = t("699668"),
  u = t("203657"),
  h = t("397516"),
  x = t("71941"),
  N = t("276345"),
  I = t("380353"),
  T = t("49111"),
  m = t("782340"),
  f = t("406617");

function v(e) {
  let {
    onClose: s,
    transitionState: t,
    dismissable: u,
    guildPain: v,
    myUsage: j
  } = e, [g, M] = l.useState(x.Tab.Intro), {
    submitted: O,
    submitting: C,
    saveSettings: A
  } = (0, o.useSaveSettings)(s), {
    guildPlans: R,
    overrideGuild: p,
    getDebug: E
  } = (0, o.useGuildMigrationSteps)(v, j), b = l.useRef(null);
  return l.useEffect(() => {
    c.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, a.jsxs)(i.ModalRoot, {
    className: f.modal,
    transitionState: t,
    "aria-label": m.default.Messages.NOTIFICATIONS,
    size: i.ModalSize.DYNAMIC,
    children: [(0, a.jsx)(x.default, {
      selectedTab: g,
      onClick: M,
      submitted: O
    }), g === x.Tab.Intro ? (0, a.jsx)(h.default, {
      ref: b
    }) : g === x.Tab.Customize ? (0, a.jsx)(_, {
      guildPlans: R,
      overrideGuild: p,
      getDebug: E
    }) : (0, a.jsx)(N.default, {
      count: Object.values(R).filter(e => {
        var s;
        return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === I.Mode.UseGreyDot
      }).length
    }), (0, a.jsxs)(i.ModalFooter, {
      className: f.buttons,
      children: [(0, a.jsxs)("div", {
        className: f.left,
        children: [u || g !== x.Tab.Tips && g !== x.Tab.Customize ? null : (0, a.jsx)(i.Anchor, {
          className: f.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.LEARN_MORE
          })
        }), u && g === x.Tab.Intro ? (0, a.jsx)(i.Clickable, {
          className: f.dismiss,
          onClick: s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.DISMISS
          })
        }) : null, u && g === x.Tab.Customize ? (0, a.jsx)(i.Clickable, {
          className: f.dismiss,
          onClick: s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: m.default.Messages.CANCEL
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: f.right,
        children: [g === x.Tab.Customize ? (0, a.jsx)(i.Text, {
          className: f.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: m.default.Messages.NOTIF_MIGRATION_BACKUP
        }) : null, g !== x.Tab.Customize || O ? null : (0, a.jsxs)(i.Button, {
          onClick: () => M(x.Tab.Intro),
          color: i.Button.Colors.TRANSPARENT,
          children: [(0, a.jsx)(n.default, {
            width: 16,
            height: 16
          }), " ", m.default.Messages.BACK]
        }), g === x.Tab.Intro ? (0, a.jsxs)(i.Button, {
          onClick: () => {
            var e;
            (null === (e = b.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) && M(x.Tab.Customize)
          },
          children: [m.default.Messages.TRY_IT_OUT, " ", (0, a.jsx)(d.default, {
            width: 16,
            height: 16
          })]
        }) : g === x.Tab.Customize ? (0, a.jsxs)(i.Button, {
          onClick: () => {
            M(x.Tab.Tips), A(R)
          },
          children: [m.default.Messages.APPLY, " ", (0, a.jsx)(r.default, {
            width: 16,
            height: 16
          })]
        }) : (0, a.jsx)(i.Button, {
          submitting: C,
          onClick: s,
          children: m.default.Messages.CLOSE
        })]
      })]
    })]
  })
}

function _(e) {
  let {
    guildPlans: s,
    overrideGuild: t
  } = e;
  return (0, a.jsxs)(i.Scroller, {
    className: f.content,
    children: [(0, a.jsxs)("div", {
      className: f.header,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
      }), (0, a.jsx)(i.Text, {
        className: f.subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: m.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE
      })]
    }), (0, a.jsx)(u.default, {
      guildPlans: s,
      overrideGuild: t
    })]
  })
}