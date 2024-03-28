"use strict";
a.r(t), a.d(t, {
  default: function() {
    return U
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("803997"),
  r = a.n(n),
  i = a("512722"),
  d = a.n(i),
  c = a("442837"),
  u = a("693789"),
  o = a("481060"),
  x = a("809086"),
  m = a("599456"),
  f = a("430824"),
  h = a("682864"),
  j = a("465670"),
  v = a("937615"),
  _ = a("495437"),
  N = a("240864"),
  O = a("942833"),
  I = a("598952"),
  C = a("392739"),
  M = a("400916"),
  T = a("916001"),
  g = a("689938"),
  D = a("127669");

function R(e) {
  let {
    guildProductListing: t,
    guildId: a,
    skuPricePreview: s
  } = e, n = (0, O.useProductType)(t), r = (0, v.formatPrice)(s.amount, s.currency), i = (0, c.useStateFromStores)([f.default], () => f.default.getGuild(a));
  return d()(null != i, "guild cannot be null"), (0, l.jsxs)("div", {
    className: D.purchaseSummaryContainer,
    children: [(0, l.jsx)(x.default, {
      alt: "",
      className: D.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, l.jsxs)("div", {
      className: D.purchaseSummarInfo,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t.name
      }), (0, l.jsx)(h.default, {
        size: 4
      }), (0, l.jsxs)("div", {
        className: D.productTypeContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: n
        }), (0, l.jsx)("div", {
          className: D.dotSeparator
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 2,
          children: i.name
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: D.purchaseSummaryPrice,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: r
      }), (0, l.jsx)(h.default, {
        size: 4
      }), (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.default.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
      })]
    })]
  })
}

function L(e) {
  var t;
  let {
    guildProductListing: a,
    guildId: s
  } = e, n = null !== (t = a.attachments) && void 0 !== t ? t : [], i = n.length > 1;
  return 0 === n.length ? null : (0, l.jsx)(C.default, {
    label: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
    children: (0, l.jsxs)("div", {
      className: r()(D.attachmentsContainer, {
        [D.attachmentsContainerMultiple]: i
      }),
      children: [(0, l.jsx)("div", {
        className: D.attachmentGrid,
        children: n.map(e => (0, l.jsx)(I.default, {
          attachment: e
        }, e.id))
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(M.default, {
          guildId: s,
          productId: a.id
        })
      })]
    })
  })
}

function p(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, l.jsx)(C.default, {
    label: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
    children: (0, l.jsx)(T.default, {
      role: t
    })
  })
}

function A(e) {
  return (0, l.jsx)(o.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-normal",
    children: e
  })
}

function U(e) {
  var t;
  let {
    onClose: a,
    transitionState: n,
    guildProductListingId: r,
    guildId: i,
    skuPricePreview: x
  } = e, v = (0, c.useStateFromStores)([N.default], () => N.default.getGuildProduct(r));
  d()(null != v, "guildProductListing cannot be null");
  let [O, I] = s.useState(!1);
  s.useEffect(() => {
    (async function e() {
      try {
        I(!0), await (0, _.fetchGuildProduct)(i, r), I(!1)
      } catch (e) {
        a(), (0, m.default)({
          body: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
          confirmText: g.default.Messages.GOT_IT,
          header: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
          confirmButtonColor: u.Button.Colors.BRAND
        })
      }
    })()
  }, [i, r, a]);
  let C = (null !== (t = v.attachments) && void 0 !== t ? t : []).length > 0,
    M = v.role_id,
    T = (0, c.useStateFromStores)([f.default], () => null != M ? f.default.getRole(i, M) : void 0);
  return (0, l.jsx)(o.ModalRoot, {
    className: D.modal,
    size: o.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": v.name,
    children: (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)("div", {
        className: D.container,
        children: O ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)("div", {
            className: D.header,
            children: [(0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              color: "header-primary",
              children: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
            }), (0, l.jsx)(o.Clickable, {
              onClick: a,
              children: (0, l.jsx)(j.default, {
                width: 24,
                height: 24,
                className: D.close
              })
            })]
          }), (0, l.jsx)(h.default, {
            size: 16
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
              productName: v.name,
              emphasisHook: A
            })
          }), (0, l.jsx)(h.default, {
            size: 12
          }), (0, l.jsxs)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: [C ? g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != T ? g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
              roleName: T.name,
              emphasisHook: A
            }) : ""]
          }), (0, l.jsx)(h.default, {
            size: 12
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: g.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
          }), (0, l.jsx)(h.default, {
            size: 24
          }), (0, l.jsx)(R, {
            guildProductListing: v,
            guildId: i,
            skuPricePreview: x
          }), (0, l.jsx)(h.default, {
            size: 32
          }), (0, l.jsx)("div", {
            className: D.divider
          }), (0, l.jsx)(h.default, {
            size: 32
          }), (0, l.jsxs)("ul", {
            className: D.benefitsContainer,
            children: [(0, l.jsx)(L, {
              guildProductListing: v,
              guildId: i
            }), (0, l.jsx)(p, {
              role: T
            })]
          })]
        })
      })
    })
  })
}