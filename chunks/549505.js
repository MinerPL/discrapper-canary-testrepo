"use strict";
a.r(s), a.d(s, {
  default: function() {
    return _
  }
});
var t = a("735250");
a("470079");
var l = a("176743"),
  i = a("621937"),
  n = a("149020"),
  c = a("481060"),
  d = a("230711"),
  r = a("63063"),
  N = a("981631"),
  E = a("689938"),
  o = a("641758"),
  T = a("83173");

function _(e) {
  let {
    transitionState: s,
    onClose: a
  } = e;
  return (0, t.jsxs)(c.ModalRoot, {
    transitionState: s,
    size: c.ModalSize.DYNAMIC,
    className: o.modalRoot,
    children: [(0, t.jsxs)(c.ModalHeader, {
      separator: !1,
      className: o.modalHeader,
      children: [(0, t.jsx)("div", {
        className: o.imageFrame,
        children: (0, t.jsx)("img", {
          alt: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
          src: T,
          className: o.heroImage
        })
      }), (0, t.jsxs)("div", {
        className: o.headerWrapper,
        children: [(0, t.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
        }), (0, t.jsx)("div", {
          className: o.betaTag,
          children: (0, t.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: E.default.Messages.BETA
          })
        })]
      })]
    }), (0, t.jsxs)(c.ModalContent, {
      className: o.modalContent,
      children: [(0, t.jsxs)("div", {
        className: o.modalContentFrame,
        children: [(0, t.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
        }), (0, t.jsx)(R, {})]
      }), (0, t.jsxs)("div", {
        className: o.modalFooter,
        children: [(0, t.jsx)(c.Button, {
          onClick: a,
          className: o.button,
          children: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
        }), (0, t.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: o.disclosureText,
          children: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
            recentActivityURL: r.default.getArticleURL(N.HelpdeskArticles.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              a(), d.default.open(N.UserSettingsSections.ACTIVITY_PRIVACY)
            }
          })
        })]
      })]
    })]
  })
}
let R = () => {
  let e = [{
    icon: (0, t.jsx)(i.FriendsIcon, {
      className: o.icon
    }),
    text: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
  }, {
    icon: (0, t.jsx)(n.GameControllerIcon, {
      className: o.icon
    }),
    text: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
  }, {
    icon: (0, t.jsx)(l.ChatIcon, {
      className: o.icon
    }),
    text: E.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
  }];
  return (0, t.jsx)("div", {
    className: o.notes,
    children: e.map((e, s) => {
      let {
        icon: a,
        text: l
      } = e;
      return (0, t.jsxs)("div", {
        className: o.badgeNote,
        children: [(0, t.jsx)("div", {
          className: o.badge,
          children: a
        }), (0, t.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: l
        })]
      }, "memberlist-learn-more-note-".concat(s))
    })
  })
}