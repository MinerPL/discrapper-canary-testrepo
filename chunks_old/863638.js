"use strict";
t.r(s), t.d(s, {
  default: function() {
    return T
  }
});
var a = t("37983");
t("884691");
var l = t("733154"),
  n = t("907572"),
  r = t("823527"),
  c = t("77078"),
  i = t("79112"),
  o = t("701909"),
  d = t("49111"),
  N = t("782340"),
  E = t("638005"),
  u = t("766826");

function T(e) {
  let {
    transitionState: s,
    onClose: t
  } = e;
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: s,
    size: c.ModalSize.DYNAMIC,
    className: E.modalRoot,
    children: [(0, a.jsxs)(c.ModalHeader, {
      separator: !1,
      className: E.modalHeader,
      children: [(0, a.jsx)("div", {
        className: E.imageFrame,
        children: (0, a.jsx)("img", {
          alt: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
          src: u,
          className: E.heroImage
        })
      }), (0, a.jsxs)("div", {
        className: E.headerWrapper,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
        }), (0, a.jsx)("div", {
          className: E.betaTag,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: N.default.Messages.BETA
          })
        })]
      })]
    }), (0, a.jsxs)(c.ModalContent, {
      className: E.modalContent,
      children: [(0, a.jsxs)("div", {
        className: E.modalContentFrame,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
        }), (0, a.jsx)(_, {})]
      }), (0, a.jsxs)("div", {
        className: E.modalFooter,
        children: [(0, a.jsx)(c.Button, {
          onClick: t,
          className: E.button,
          children: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: E.disclosureText,
          children: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
            recentActivityURL: o.default.getArticleURL(d.HelpdeskArticles.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              t(), i.default.open(d.UserSettingsSections.ACTIVITY_PRIVACY)
            }
          })
        })]
      })]
    })]
  })
}
let _ = () => {
  let e = [{
    icon: (0, a.jsx)(n.FriendsIcon, {
      className: E.icon
    }),
    text: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
  }, {
    icon: (0, a.jsx)(r.GameControllerIcon, {
      className: E.icon
    }),
    text: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
  }, {
    icon: (0, a.jsx)(l.ChatIcon, {
      className: E.icon
    }),
    text: N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
  }];
  return (0, a.jsx)("div", {
    className: E.notes,
    children: e.map((e, s) => {
      let {
        icon: t,
        text: l
      } = e;
      return (0, a.jsxs)("div", {
        className: E.badgeNote,
        children: [(0, a.jsx)("div", {
          className: E.badge,
          children: t
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: l
        })]
      }, "memberlist-learn-more-note-".concat(s))
    })
  })
}