"use strict";
t.r(s), t.d(s, {
  default: function() {
    return f
  }
});
var a = t("37983");
t("884691");
var l = t("116788"),
  n = t("768961"),
  r = t("224701"),
  c = t("77078"),
  i = t("145131"),
  o = t("701909"),
  d = t("588025"),
  u = t("49111"),
  h = t("782340"),
  m = t("916183"),
  S = t("647924");

function f(e) {
  let {
    transitionState: s,
    onClose: t,
    questContent: l,
    questConfig: n
  } = e, r = l === d.QuestContent.QUEST_BAR ? h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({
    gamePublisher: n.messages.gamePublisher
  }) : h.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
    gamePublisher: n.messages.gamePublisher,
    gameTitle: n.messages.gameTitle
  });
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: s,
    size: c.ModalSize.DYNAMIC,
    className: m.modalRoot,
    children: [(0, a.jsxs)(c.ModalHeader, {
      direction: i.default.Direction.VERTICAL,
      separator: !1,
      className: m.modalHeader,
      children: [(0, a.jsxs)("div", {
        className: m.modalTop,
        children: [(0, a.jsx)("div", {
          className: m.iconFrame,
          children: (0, a.jsx)("img", {
            className: m.icon,
            alt: "",
            src: S
          })
        }), (0, a.jsx)(c.ModalCloseButton, {
          className: m.closeBtn,
          onClick: t
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: h.default.Messages.QUESTS_DISCLOSURE_LABEL
      })]
    }), (0, a.jsxs)(c.ModalContent, {
      className: m.modalContent,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: m.upperBodyText,
        children: r
      }), (0, a.jsx)(x, {
        questContent: l
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: h.default.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: o.default.getArticleURL(u.HelpdeskArticles.QUESTS_PRIVACY_CONTROLS)
        })
      })]
    }), (0, a.jsx)(c.ModalFooter, {
      className: m.footer,
      children: (0, a.jsx)(c.Button, {
        onClick: t,
        children: h.default.Messages.CLOSE
      })
    })]
  })
}

function x(e) {
  let {
    questContent: s
  } = e;
  switch (s) {
    case d.QuestContent.QUEST_BAR:
      return (0, a.jsxs)("ul", {
        className: m.targetList,
        children: [(0, a.jsx)(E, {
          icon: n.GlobeEarthIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_LOCATION
        }), (0, a.jsx)(E, {
          icon: r.UserIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_AGE
        }), (0, a.jsx)(E, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })]
      });
    case d.QuestContent.ACTIVITY_PANEL:
    case d.QuestContent.QUESTS_EMBED:
    case d.QuestContent.QUEST_LIVE_STREAM:
      return (0, a.jsx)("ul", {
        className: m.targetList,
        children: (0, a.jsx)(E, {
          icon: l.GameControllerIcon,
          children: h.default.Messages.QUESTS_DISCLOSURE_ACTIVITY
        })
      });
    default:
      return null
  }
}

function E(e) {
  let {
    icon: s,
    children: t
  } = e;
  return (0, a.jsxs)(c.Text, {
    variant: "text-sm/medium",
    tag: "li",
    className: m.targetItem,
    children: [(0, a.jsx)(s, {
      width: 16,
      height: 16
    }), t]
  })
}