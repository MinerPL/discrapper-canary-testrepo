"use strict";
s.r(a), s.d(a, {
  default: function() {
    return A
  },
  useCreationIntentSlide: function() {
    return I
  }
});
var n = s("735250");
s("470079");
var t = s("803997"),
  l = s.n(t),
  E = s("481060"),
  _ = s("285952"),
  d = s("626135"),
  i = s("109983"),
  T = s("675999"),
  r = s("981631"),
  u = s("689938"),
  L = s("248815"),
  M = s("43236"),
  C = s("142390");
let o = .5 > Math.random();

function I(e) {
  let {
    onClose: a,
    onBack: s,
    onCreationIntentChosen: t,
    hasFooter: I = !0
  } = e, A = (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(E.Button, {
      className: L.backButton,
      look: E.Button.Looks.BLANK,
      size: E.Button.Sizes.MIN,
      onClick: s,
      children: u.default.Messages.BACK
    })
  });

  function c(e) {
    d.default.track(r.AnalyticEvents.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == e,
      is_community: e === T.GuildCreationIntents.COMMUNITY
    }), t(e)
  }
  return {
    content: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(E.ModalHeader, {
        direction: _.default.Direction.VERTICAL,
        className: L.header,
        separator: !1,
        children: [(0, n.jsx)(E.Heading, {
          className: l()(L.title),
          variant: "heading-xl/semibold",
          children: u.default.Messages.CREATION_INTENT_TITLE
        }), (0, n.jsx)(E.Text, {
          className: L.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: u.default.Messages.CREATION_INTENT_DESCRIPTION
        }), null != a && (0, n.jsx)(E.ModalCloseButton, {
          className: L.closeButton,
          onClick: a
        })]
      }), (0, n.jsxs)(E.ModalContent, {
        className: L.optionsList,
        children: [o ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(i.default, {
            icon: M,
            message: u.default.Messages.CREATION_INTENT_OPTION_FRIENDS,
            onClick: () => c(T.GuildCreationIntents.FRIENDS)
          }), (0, n.jsx)(i.default, {
            icon: C,
            message: u.default.Messages.CREATION_INTENT_OPTION_COMMUNITY,
            onClick: () => c(T.GuildCreationIntents.COMMUNITY)
          })]
        }) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(i.default, {
            icon: C,
            message: u.default.Messages.CREATION_INTENT_OPTION_COMMUNITY,
            onClick: () => c(T.GuildCreationIntents.COMMUNITY)
          }), (0, n.jsx)(i.default, {
            icon: M,
            message: u.default.Messages.CREATION_INTENT_OPTION_FRIENDS,
            onClick: () => c(T.GuildCreationIntents.FRIENDS)
          })]
        }), (0, n.jsx)(E.Text, {
          className: L.skip,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: u.default.Messages.CREATION_INTENT_SKIP.format({
            onSkip: () => c(null)
          })
        })]
      }), I && (0, n.jsx)(E.ModalFooter, {
        justify: _.default.Justify.BETWEEN,
        children: A
      })]
    }),
    footer: A
  }
}

function A(e) {
  let {
    content: a
  } = I(e);
  return a
}