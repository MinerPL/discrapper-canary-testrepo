"use strict";
n.r(e), n.d(e, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  l = n("414456"),
  i = n.n(l),
  s = n("627445"),
  u = n.n(s),
  d = n("446674"),
  o = n("271841"),
  c = n("77078"),
  f = n("750482"),
  h = n("194247"),
  x = n("305961"),
  _ = n("191814"),
  m = n("945330"),
  T = n("153160"),
  D = n("359366"),
  I = n("565559"),
  C = n("928576"),
  L = n("911029"),
  O = n("856246"),
  v = n("407417"),
  g = n("246421"),
  R = n("782340"),
  j = n("585649");

function N(t) {
  let {
    guildProductListing: e,
    guildId: n,
    skuPricePreview: r
  } = t, l = (0, C.useProductType)(e), i = (0, T.formatPrice)(r.amount, r.currency), s = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(n));
  return u(null != s, "guild cannot be null"), (0, a.jsxs)("div", {
    className: j.purchaseSummaryContainer,
    children: [(0, a.jsx)(f.default, {
      alt: "",
      className: j.purchaseSummaryImage,
      listing: e,
      imageSize: 100
    }), (0, a.jsxs)("div", {
      className: j.purchaseSummarInfo,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: e.name
      }), (0, a.jsx)(_.default, {
        size: 4
      }), (0, a.jsxs)("div", {
        className: j.productTypeContainer,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: l
        }), (0, a.jsx)("div", {
          className: j.dotSeparator
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 2,
          children: s.name
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: j.purchaseSummaryPrice,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: i
      }), (0, a.jsx)(_.default, {
        size: 4
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: R.default.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
      })]
    })]
  })
}

function U(t) {
  var e;
  let {
    guildProductListing: n,
    guildId: r
  } = t, l = null !== (e = n.attachments) && void 0 !== e ? e : [], s = l.length > 1;
  return 0 === l.length ? null : (0, a.jsx)(O.default, {
    label: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
    children: (0, a.jsxs)("div", {
      className: i(j.attachmentsContainer, {
        [j.attachmentsContainerMultiple]: s
      }),
      children: [(0, a.jsx)("div", {
        className: j.attachmentGrid,
        children: l.map(t => (0, a.jsx)(L.default, {
          attachment: t
        }, t.id))
      }), (0, a.jsx)("div", {
        children: (0, a.jsx)(v.default, {
          guildId: r,
          productId: n.id
        })
      })]
    })
  })
}

function P(t) {
  let {
    role: e
  } = t;
  return null == e ? null : (0, a.jsx)(O.default, {
    label: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
    children: (0, a.jsx)(g.default, {
      role: e
    })
  })
}

function E(t) {
  return (0, a.jsx)(c.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-normal",
    children: t
  })
}

function p(t) {
  var e;
  let {
    onClose: n,
    transitionState: l,
    guildProductListingId: i,
    guildId: s,
    skuPricePreview: f
  } = t, T = (0, d.useStateFromStores)([I.default], () => I.default.getGuildProduct(i));
  u(null != T, "guildProductListing cannot be null");
  let [C, L] = r.useState(!1);
  r.useEffect(() => {
    (async function t() {
      try {
        L(!0), await (0, D.fetchGuildProduct)(s, i), L(!1)
      } catch (t) {
        n(), (0, h.default)({
          body: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
          confirmText: R.default.Messages.GOT_IT,
          header: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
          confirmButtonColor: o.Button.Colors.BRAND
        })
      }
    })()
  }, [s, i, n]);
  let O = (null !== (e = T.attachments) && void 0 !== e ? e : []).length > 0,
    v = T.role_id,
    g = (0, d.useStateFromStores)([x.default], () => null != v ? x.default.getRole(s, v) : void 0);
  return (0, a.jsx)(c.ModalRoot, {
    className: j.modal,
    size: c.ModalSize.DYNAMIC,
    transitionState: l,
    "aria-label": T.name,
    children: (0, a.jsx)(c.ModalContent, {
      children: (0, a.jsx)("div", {
        className: j.container,
        children: C ? (0, a.jsx)(c.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: j.header,
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-xl/semibold",
              color: "header-primary",
              children: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
            }), (0, a.jsx)(c.Clickable, {
              onClick: n,
              children: (0, a.jsx)(m.default, {
                width: 24,
                height: 24,
                className: j.close
              })
            })]
          }), (0, a.jsx)(_.default, {
            size: 16
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
              productName: T.name,
              emphasisHook: E
            })
          }), (0, a.jsx)(_.default, {
            size: 12
          }), (0, a.jsxs)(c.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: [O ? R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != g ? R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
              roleName: g.name,
              emphasisHook: E
            }) : ""]
          }), (0, a.jsx)(_.default, {
            size: 12
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: R.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
          }), (0, a.jsx)(_.default, {
            size: 24
          }), (0, a.jsx)(N, {
            guildProductListing: T,
            guildId: s,
            skuPricePreview: f
          }), (0, a.jsx)(_.default, {
            size: 32
          }), (0, a.jsx)("div", {
            className: j.divider
          }), (0, a.jsx)(_.default, {
            size: 32
          }), (0, a.jsxs)("ul", {
            className: j.benefitsContainer,
            children: [(0, a.jsx)(U, {
              guildProductListing: T,
              guildId: s
            }), (0, a.jsx)(P, {
              role: g
            })]
          })]
        })
      })
    })
  })
}