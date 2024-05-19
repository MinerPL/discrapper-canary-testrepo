"use strict";
s.r(t);
var n = s("735250");
s("470079");
var o = s("442837"),
  i = s("481060"),
  l = s("418632"),
  a = s("594174"),
  r = s("285952"),
  d = s("689938"),
  u = s("468074");

function c(e) {
  let {
    onClose: t
  } = e, r = (0, o.useStateFromStores)([a.default], () => a.default.getCurrentUser());

  function u() {
    null == t || t()
  }

  function c() {
    u(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("9343"), s.e("81247")]).then(s.bind(s, "642298"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }
  return (null == r ? void 0 : r.email) == null ? (0, n.jsx)(i.Button, {
    onClick: c,
    color: i.Button.Colors.BRAND,
    look: i.Button.Looks.FILLED,
    children: d.default.Messages.ADD_EMAIL_SHORT
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.Button, {
      onClick: c,
      color: i.Button.Colors.PRIMARY,
      look: i.Button.Looks.LINK,
      children: d.default.Messages.CHANGE_EMAIL_SHORT
    }), (0, n.jsx)(l.default, {
      color: i.Button.Colors.BRAND,
      onClick: u
    })]
  })
}
t.default = function(e) {
  let {
    onClose: t,
    transitionState: s
  } = e;
  return (0, n.jsxs)(i.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsx)(i.ModalHeader, {
      children: (0, n.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H4,
        children: d.default.Messages.PREMIUM_NOT_VERIFIED
      })
    }), (0, n.jsxs)(i.ModalContent, {
      children: [(0, n.jsx)("div", {
        className: u.imageUnverified
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        className: u.message,
        children: d.default.Messages.PREMIUM_NOT_VERIFIED_BODY
      })]
    }), (0, n.jsx)(i.ModalFooter, {
      children: (0, n.jsx)(r.default, {
        justify: r.default.Justify.END,
        children: (0, n.jsx)(c, {
          onClose: t
        })
      })
    })]
  })
}