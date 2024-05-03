"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250");
s("470079");
var n = s("176743"),
  i = s("621937"),
  r = s("149020"),
  c = s("481060"),
  l = s("547972"),
  o = s("63063"),
  d = s("981631"),
  E = s("332325"),
  T = s("689938"),
  N = s("358160"),
  _ = s("83173");

function m(e) {
  let {
    transitionState: t,
    onClose: s
  } = e;
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: t,
    size: c.ModalSize.DYNAMIC,
    className: N.modalRoot,
    children: [(0, a.jsxs)(c.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, a.jsx)("div", {
        className: N.imageFrame,
        children: (0, a.jsx)("img", {
          alt: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
          src: _,
          className: N.heroImage
        })
      }), (0, a.jsxs)("div", {
        className: N.headerWrapper,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
        }), (0, a.jsx)("div", {
          className: N.betaTag,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: T.default.Messages.BETA
          })
        })]
      })]
    }), (0, a.jsxs)(c.ModalContent, {
      className: N.modalContent,
      children: [(0, a.jsxs)("div", {
        className: N.modalContentFrame,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
        }), (0, a.jsx)(u, {})]
      }), (0, a.jsxs)("div", {
        className: N.modalFooter,
        children: [(0, a.jsx)(c.Button, {
          onClick: s,
          className: N.button,
          children: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: N.disclosureText,
          children: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
            recentActivityURL: o.default.getArticleURL(d.HelpdeskArticles.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              s(), (0, l.default)(E.GameSettingsTab.ACTIVITY_PRIVACY)
            }
          })
        })]
      })]
    })]
  })
}
let u = () => {
  let e = [{
    icon: (0, a.jsx)(i.FriendsIcon, {
      className: N.icon
    }),
    text: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
  }, {
    icon: (0, a.jsx)(r.GameControllerIcon, {
      className: N.icon
    }),
    text: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
  }, {
    icon: (0, a.jsx)(n.ChatIcon, {
      className: N.icon
    }),
    text: T.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
  }];
  return (0, a.jsx)("div", {
    className: N.notes,
    children: e.map((e, t) => {
      let {
        icon: s,
        text: n
      } = e;
      return (0, a.jsxs)("div", {
        className: N.badgeNote,
        children: [(0, a.jsx)("div", {
          className: N.badge,
          children: s
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: n
        })]
      }, "memberlist-learn-more-note-".concat(t))
    })
  })
}