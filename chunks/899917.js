"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var n = s("37983");
s("884691");
var o = s("446674"),
  i = s("77078"),
  a = s("387225"),
  l = s("697218"),
  r = s("145131"),
  d = s("782340"),
  u = s("557573");

function c(e) {
  let {
    onClose: t
  } = e, r = (0, o.useStateFromStores)([l.default], () => l.default.getCurrentUser());

  function u() {
    null == t || t()
  }

  function c() {
    u(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("867693").then(s.bind(s, "867693"));
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
    }), (0, n.jsx)(a.default, {
      color: i.Button.Colors.BRAND,
      onClick: u
    })]
  })
}
var f = function(e) {
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