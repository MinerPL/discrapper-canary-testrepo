"use strict";
t.r(s), t.d(s, {
  default: function() {
    return E
  }
}), t("47120");
var a = t("735250");
t("470079");
var l = t("481060"),
  r = t("935369"),
  i = t("682864"),
  d = t("53365"),
  n = t("689938"),
  o = t("534561"),
  _ = t("490962"),
  T = t("221870");

function c(e) {
  let {
    header: s,
    body: t
  } = e;
  return (0, a.jsxs)("div", {
    className: o.bulletItem,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: o.bulletImage,
      src: _
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "text-normal",
        children: s
      }), (0, a.jsx)(i.default, {
        size: 4
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: t
      })]
    })]
  })
}

function E(e) {
  let {
    guildId: s,
    demonetized: t,
    transitionState: _,
    onClose: E
  } = e, [u, {
    loading: x,
    error: C
  }] = (0, r.default)(t ? d.acceptNewTermsDemonetized : d.acceptNewTerms), N = async () => {
    try {
      let e = await u(s);
      null != e && (null == E || E())
    } catch (e) {}
  };
  return (0, a.jsxs)(l.ModalRoot, {
    className: o.__invalid_container,
    size: l.ModalSize.SMALL,
    transitionState: _,
    "aria-label": n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE,
    children: [(0, a.jsx)(l.ModalHeader, {
      separator: !1,
      className: o.header,
      children: (0, a.jsx)("div", {
        className: o.imageContainer,
        children: (0, a.jsx)("img", {
          alt: "",
          className: o.__invalid_image,
          src: T
        })
      })
    }), (0, a.jsx)(l.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: o.content,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_TITLE
        }), (0, a.jsx)(i.default, {
          size: 12
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY.format({
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
          })
        }), (0, a.jsx)(i.default, {
          size: 24
        }), (0, a.jsx)(c, {
          header: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_HEADER,
          body: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_1_BODY
        }), (0, a.jsx)(i.default, {
          size: 16
        }), (0, a.jsx)(c, {
          header: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_HEADER,
          body: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_BODY_POINT_2_BODY
        })]
      })
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: o.footer,
        children: [(0, a.jsx)(l.Button, {
          fullWidth: !0,
          onClick: N,
          submitting: x,
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_CTA
        }), (0, a.jsx)(i.default, {
          size: 4
        }), (0, a.jsx)(l.Button, {
          color: l.Button.Colors.CUSTOM,
          innerClassName: o.remindMeLater,
          look: l.Button.Looks.LINK,
          fullWidth: !0,
          onClick: E,
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_REMIND_ME_LATER
        }), null == C ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(i.default, {
            size: 8
          }), (0, a.jsxs)(l.Text, {
            variant: "text-xs/normal",
            color: "status-danger",
            children: ["Error: ", C.message]
          })]
        }), (0, a.jsx)(i.default, {
          size: 10
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: n.default.Messages.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_ACCEPT_DISCLAIMER.format({
            termsURL: "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms"
          })
        })]
      })
    })]
  })
}