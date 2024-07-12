t.r(a), t.d(a, {
  default: function() {
return R;
  }
}), t(47120);
var n = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  c = t(512722),
  l = t.n(c),
  o = t(442837),
  d = t(693789),
  m = t(481060),
  u = t(809086),
  x = t(599456),
  h = t(430824),
  _ = t(937615),
  j = t(495437),
  p = t(240864),
  O = t(942833),
  f = t(598952),
  C = t(392739),
  N = t(400916),
  I = t(916001),
  T = t(689938),
  v = t(888594);

function D(e) {
  let {
guildProductListing: a,
guildId: t,
skuPricePreview: r
  } = e, s = (0, O.C)(a), i = (0, _.T4)(r.amount, r.currency), c = (0, o.e7)([h.Z], () => h.Z.getGuild(t));
  return l()(null != c, 'guild cannot be null'), (0, n.jsxs)('div', {
className: v.purchaseSummaryContainer,
children: [
  (0, n.jsx)(u.Z, {
    alt: '',
    className: v.purchaseSummaryImage,
    listing: a,
    imageSize: 100
  }),
  (0, n.jsxs)('div', {
    className: v.purchaseSummarInfo,
    children: [
      (0, n.jsx)(m.Text, {
        variant: 'text-md/medium',
        color: 'header-primary',
        children: a.name
      }),
      (0, n.jsx)(m.Spacer, {
        size: 4
      }),
      (0, n.jsxs)('div', {
        className: v.productTypeContainer,
        children: [
          (0, n.jsx)(m.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: s
          }),
          (0, n.jsx)('div', {
            className: v.dotSeparator
          }),
          (0, n.jsx)(m.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            lineClamp: 2,
            children: c.name
          })
        ]
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: v.purchaseSummaryPrice,
    children: [
      (0, n.jsx)(m.Text, {
        variant: 'text-md/medium',
        color: 'header-primary',
        children: i
      }),
      (0, n.jsx)(m.Spacer, {
        size: 4
      }),
      (0, n.jsx)(m.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: T.Z.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
      })
    ]
  })
]
  });
}

function M(e) {
  var a;
  let {
guildProductListing: t,
guildId: r
  } = e, s = null !== (a = t.attachments) && void 0 !== a ? a : [], c = s.length > 1;
  return 0 === s.length ? null : (0, n.jsx)(C.Z, {
label: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
children: (0, n.jsxs)('div', {
  className: i()(v.attachmentsContainer, {
    [v.attachmentsContainerMultiple]: c
  }),
  children: [
    (0, n.jsx)('div', {
      className: v.attachmentGrid,
      children: s.map(e => (0, n.jsx)(f.Z, {
        attachment: e
      }, e.id))
    }),
    (0, n.jsx)('div', {
      children: (0, n.jsx)(N.Z, {
        guildId: r,
        productId: t.id
      })
    })
  ]
})
  });
}

function b(e) {
  let {
role: a
  } = e;
  return null == a ? null : (0, n.jsx)(C.Z, {
label: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
children: (0, n.jsx)(I.Z, {
  role: a
})
  });
}

function g(e) {
  return (0, n.jsx)(m.Text, {
tag: 'span',
variant: 'text-md/semibold',
color: 'text-normal',
children: e
  });
}

function R(e) {
  var a;
  let {
onClose: t,
transitionState: s,
guildProductListingId: i,
guildId: c,
skuPricePreview: u
  } = e, _ = (0, o.e7)([p.Z], () => p.Z.getGuildProduct(i));
  l()(null != _, 'guildProductListing cannot be null');
  let [O, f] = r.useState(!1);
  r.useEffect(() => {
(async function e() {
  try {
    f(!0), await (0, j.cf)(c, i), f(!1);
  } catch (e) {
    t(), (0, x.Z)({
      body: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
      confirmText: T.Z.Messages.GOT_IT,
      header: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
      confirmButtonColor: d.zx.Colors.BRAND
    });
  }
}());
  }, [
c,
i,
t
  ]);
  let C = (null !== (a = _.attachments) && void 0 !== a ? a : []).length > 0,
N = _.role_id,
I = (0, o.e7)([h.Z], () => null != N ? h.Z.getRole(c, N) : void 0);
  return (0, n.jsx)(m.ModalRoot, {
className: v.modal,
size: m.ModalSize.DYNAMIC,
transitionState: s,
'aria-label': _.name,
children: (0, n.jsx)(m.ModalContent, {
  children: (0, n.jsx)('div', {
    className: v.container,
    children: O ? (0, n.jsx)(m.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)('div', {
          className: v.header,
          children: [
            (0, n.jsx)(m.Heading, {
              variant: 'heading-xl/semibold',
              color: 'header-primary',
              children: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
            }),
            (0, n.jsx)(m.Clickable, {
              onClick: t,
              children: (0, n.jsx)(m.CloseSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: v.close
              })
            })
          ]
        }),
        (0, n.jsx)(m.Spacer, {
          size: 16
        }),
        (0, n.jsx)(m.Text, {
          variant: 'text-md/normal',
          color: 'text-normal',
          children: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
            productName: _.name,
            emphasisHook: g
          })
        }),
        (0, n.jsx)(m.Spacer, {
          size: 12
        }),
        (0, n.jsxs)(m.Text, {
          variant: 'text-md/normal',
          color: 'text-normal',
          children: [
            C ? T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + ' ' : '',
            null != I ? T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
              roleName: I.name,
              emphasisHook: g
            }) : ''
          ]
        }),
        (0, n.jsx)(m.Spacer, {
          size: 12
        }),
        (0, n.jsx)(m.Text, {
          variant: 'text-md/normal',
          color: 'text-normal',
          children: T.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
        }),
        (0, n.jsx)(m.Spacer, {
          size: 24
        }),
        (0, n.jsx)(D, {
          guildProductListing: _,
          guildId: c,
          skuPricePreview: u
        }),
        (0, n.jsx)(m.Spacer, {
          size: 32
        }),
        (0, n.jsx)('div', {
          className: v.divider
        }),
        (0, n.jsx)(m.Spacer, {
          size: 32
        }),
        (0, n.jsxs)('ul', {
          className: v.benefitsContainer,
          children: [
            (0, n.jsx)(M, {
              guildProductListing: _,
              guildId: c
            }),
            (0, n.jsx)(b, {
              role: I
            })
          ]
        })
      ]
    })
  })
})
  });
}