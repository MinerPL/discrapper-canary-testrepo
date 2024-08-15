n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(313201),
  o = n(240657),
  c = n(765400),
  u = n(916001),
  d = n(689938),
  _ = n(389026);

function E(e) {
  let {
hidePurchaseToUnlockBadge: t,
showDraftBadge: n,
className: a,
children: l
  } = e;
  return (0, i.jsxs)('div', {
className: s()(_.productThumbnailContainer, a),
children: [
  l,
  !t && (0, i.jsxs)('div', {
    className: _.purchaseToUnlockBadge,
    children: [
      (0, i.jsx)(r.LockIcon, {
        size: 'xs',
        className: _.lockIcon,
        color: 'currentColor',
        'aria-hidden': !0
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'always-white',
        className: _.__invalid_unlockText,
        children: d.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })
    ]
  }),
  n && (0, i.jsx)('div', {
    className: _.draftBadge,
    children: (0, i.jsx)(c.v, {})
  })
]
  });
}

function I(e) {
  let {
onShowFullDescription: t,
variant: n
  } = e, a = (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(r.Text, {
    variant: n,
    color: null != t ? 'text-link' : 'interactive-hover',
    children: d.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
  }),
  (0, i.jsx)(r.ArrowSmallRightIcon, {
    size: 'xs',
    color: 'currentColor',
    className: _.arrowIcon
  })
]
  });
  return null == t ? (0, i.jsx)('div', {
className: _.showMoreButton,
children: a
  }) : (0, i.jsx)(r.Clickable, {
className: s()(_.showMoreButton, _.hasAction),
onClick: e => {
  e.stopPropagation(), null != t && t();
},
children: a
  });
}

function m(e) {
  let {
imageUrl: t,
name: n,
description: a,
formattedPrice: c,
role: m,
ctaComponent: T,
shouldShowFullDescriptionButton: h = !0,
onShowFullDescription: N,
productType: f,
onTapCard: C,
actionMenu: p,
showOpaqueBackground: g = !1,
hideRoleTag: S = !1,
lineClamp: A = 1,
cardWidth: R = 332,
cardHeight: x,
thumbnailHeight: O = 187,
descriptionTextVariant: M = 'text-sm/normal',
isDraft: v = !1
  } = e, L = (0, l.hQ)(), Z = (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(E, {
    showDraftBadge: v,
    hidePurchaseToUnlockBadge: !0,
    children: (0, i.jsx)('img', {
      alt: '',
      src: t,
      className: _.productThumbnail,
      style: {
        height: O
      }
    })
  }),
  (0, i.jsxs)('div', {
    className: _.productDetails,
    children: [
      (0, i.jsxs)('div', {
        className: _.productDetailContent,
        children: [
          (0, i.jsx)(r.Heading, {
            variant: 'text-md/medium',
            color: 'header-primary',
            className: _.productName,
            id: L,
            children: n
          }),
          (0, i.jsx)(r.FocusBlock, {
            children: (0, i.jsx)(o.Z, {
              variant: M,
              color: 'text-muted',
              lineClamp: A,
              text: a
            })
          }),
          h && (0, i.jsx)(I, {
            onShowFullDescription: N,
            variant: M
          }),
          S || null == m || '' === m.name ? null : (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(r.Spacer, {
                size: 16
              }),
              (0, i.jsx)(u.Z, {
                role: m
              })
            ]
          })
        ]
      }),
      p
    ]
  }),
  (0, i.jsxs)('div', {
    className: _.purchaseDetails,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/medium',
        color: 'interactive-active',
        className: _.__invalid_productPrice,
        children: null != c ? c : d.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-xxs/normal',
        color: 'text-normal',
        className: _.__invalid_productType,
        children: f
      }),
      (0, i.jsx)('div', {
        className: _.productActionButton,
        onClick: e => {
          e.stopPropagation();
        },
        children: T
      })
    ]
  })
]
  });
  return null == C ? (0, i.jsx)('article', {
className: s()(_.productCard, g ? _.opaqueBackground : _.solidBackground),
'aria-labelledby': L,
children: Z
  }) : (0, i.jsx)('div', {
style: {
  width: R,
  height: x
},
children: (0, i.jsx)(r.ClickableContainer, {
  tag: 'article',
  'aria-label': d.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
    productName: n
  }),
  className: s()(_.productCard, g ? _.opaqueBackground : _.solidBackground, _.cardClickableContainer),
  onClick: C,
  children: Z
})
  });
}