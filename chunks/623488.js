t.d(A, {
  Z: function() {
return T;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  s = t(481060),
  o = t(240657),
  l = t(765400),
  i = t(153124),
  d = t(916001),
  c = t(689938),
  u = t(690326);

function C(e) {
  let {
hidePurchaseToUnlockBadge: A,
showDraftBadge: t,
className: a,
children: o
  } = e;
  return (0, n.jsxs)('div', {
className: r()(u.productThumbnailContainer, a),
children: [
  o,
  !A && (0, n.jsxs)('div', {
    className: u.purchaseToUnlockBadge,
    children: [
      (0, n.jsx)(s.LockIcon, {
        size: 'xs',
        className: u.lockIcon,
        color: 'currentColor',
        'aria-hidden': !0
      }),
      (0, n.jsx)(s.Text, {
        variant: 'text-sm/normal',
        color: 'always-white',
        className: u.__invalid_unlockText,
        children: c.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })
    ]
  }),
  t && (0, n.jsx)('div', {
    className: u.draftBadge,
    children: (0, n.jsx)(l.v, {})
  })
]
  });
}

function g(e) {
  let {
onShowFullDescription: A,
variant: t
  } = e, a = (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(s.Text, {
    variant: t,
    color: null != A ? 'text-link' : 'interactive-hover',
    children: c.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
  }),
  (0, n.jsx)(s.ArrowSmallRightIcon, {
    size: 'xs',
    color: 'currentColor',
    className: u.arrowIcon
  })
]
  });
  return null == A ? (0, n.jsx)('div', {
className: u.showMoreButton,
children: a
  }) : (0, n.jsx)(s.Clickable, {
className: r()(u.showMoreButton, u.hasAction),
onClick: e => {
  e.stopPropagation(), null != A && A();
},
children: a
  });
}

function T(e) {
  let {
imageUrl: A,
name: t,
description: a,
formattedPrice: l,
role: T,
ctaComponent: p,
shouldShowFullDescriptionButton: h = !0,
onShowFullDescription: m,
productType: I,
onTapCard: U,
actionMenu: f,
showOpaqueBackground: v = !1,
hideRoleTag: q = !1,
lineClamp: E = 1,
cardWidth: N = 332,
cardHeight: D,
thumbnailHeight: O = 187,
descriptionTextVariant: x = 'text-sm/normal',
isDraft: R = !1
  } = e, L = (0, i.hQ)(), b = (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(C, {
    showDraftBadge: R,
    hidePurchaseToUnlockBadge: !0,
    children: (0, n.jsx)('img', {
      alt: '',
      src: A,
      className: u.productThumbnail,
      style: {
        height: O
      }
    })
  }),
  (0, n.jsxs)('div', {
    className: u.productDetails,
    children: [
      (0, n.jsxs)('div', {
        className: u.productDetailContent,
        children: [
          (0, n.jsx)(s.Heading, {
            variant: 'text-md/medium',
            color: 'header-primary',
            className: u.productName,
            id: L,
            children: t
          }),
          (0, n.jsx)(s.FocusBlock, {
            children: (0, n.jsx)(o.Z, {
              variant: x,
              color: 'text-muted',
              lineClamp: E,
              text: a
            })
          }),
          h && (0, n.jsx)(g, {
            onShowFullDescription: m,
            variant: x
          }),
          q || null == T || '' === T.name ? null : (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(s.Spacer, {
                size: 16
              }),
              (0, n.jsx)(d.Z, {
                role: T
              })
            ]
          })
        ]
      }),
      f
    ]
  }),
  (0, n.jsxs)('div', {
    className: u.purchaseDetails,
    children: [
      (0, n.jsx)(s.Text, {
        variant: 'text-md/medium',
        color: 'interactive-active',
        className: u.__invalid_productPrice,
        children: null != l ? l : c.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }),
      (0, n.jsx)(s.Text, {
        variant: 'text-xxs/normal',
        color: 'text-normal',
        className: u.__invalid_productType,
        children: I
      }),
      (0, n.jsx)('div', {
        className: u.productActionButton,
        onClick: e => {
          e.stopPropagation();
        },
        children: p
      })
    ]
  })
]
  });
  return null == U ? (0, n.jsx)('article', {
className: r()(u.productCard, v ? u.opaqueBackground : u.solidBackground),
'aria-labelledby': L,
children: b
  }) : (0, n.jsx)('div', {
style: {
  width: N,
  height: D
},
children: (0, n.jsx)(s.ClickableContainer, {
  tag: 'article',
  'aria-label': c.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
    productName: t
  }),
  className: r()(u.productCard, v ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
  onClick: U,
  children: b
})
  });
}