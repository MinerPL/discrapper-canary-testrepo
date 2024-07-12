t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
return J;
  },
  default: function() {
return $;
  }
}), t(47120);
var n, a, r = t(735250),
  s = t(470079),
  o = t(120356),
  l = t.n(o),
  i = t(512722),
  d = t.n(i),
  c = t(831209),
  u = t(399606),
  C = t(215569),
  g = t(481060),
  T = t(749210),
  p = t(852860),
  h = t(607070),
  m = t(725803),
  I = t(76535),
  U = t(215388),
  f = t(674180),
  v = t(884858),
  q = t(695346),
  E = t(430824),
  N = t(153124),
  D = t(937615),
  O = t(73346),
  x = t(506071),
  R = t(587123),
  L = t(240864),
  b = t(863663),
  P = t(923400),
  V = t(623488),
  _ = t(152980),
  S = t(120651),
  Z = t(871388),
  j = t(412110),
  F = t(513669),
  M = t(972797),
  G = t(943516),
  B = t(302463),
  K = t(981631),
  W = t(674563),
  X = t(689938),
  z = t(935917);
let Q = (0, N.hQ)(),
  k = (0, N.hQ)(),
  H = (0, N.hQ)();

function y(e) {
  let {
text: A,
onChange: t,
value: n,
disabled: a,
warning: s
  } = e, o = (0, N.Dt)(), i = a ? 'text-muted' : 'text-normal';
  return (0, r.jsxs)('label', {
className: l()(z.benefitToggleContainer, {
  [z.disabled]: a
}),
htmlFor: o,
children: [
  (0, r.jsx)(g.Text, {
    variant: 'text-sm/medium',
    color: i,
    children: A
  }),
  null != s && (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(g.Spacer, {
        size: 4,
        horizontal: !0
      }),
      s
    ]
  }),
  (0, r.jsx)(g.Spacer, {
    size: 16,
    horizontal: !0
  }),
  (0, r.jsx)(g.Switch, {
    onChange: t,
    checked: n,
    disabled: a,
    id: o
  })
]
  });
}

function Y(e, A) {
  return e.filter(e => {
let {
  value: t,
  label: n
} = e;
return t.toString().includes(A) || n.includes(A);
  });
}

function w(e) {
  let {
guildId: A,
selectedPriceTier: t,
setPriceTier: n
  } = e, {
priceTiers: a
  } = (0, I.R)(A, K.RG5.GUILD_PRODUCTS), o = s.useMemo(() => (null != a ? a : null != t ? [t] : []).map(e => ({
value: e,
label: (0, D.T4)(e, K.pKx.USD)
  })), [
a,
t
  ]);
  return (0, r.jsx)(g.SearchableSelect, {
value: t,
placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
maxVisibleItems: 5,
options: o,
onChange: n,
filter: Y,
'aria-required': !0
  });
}

function J(e) {
  var A, n, a, o, l, i, I, v;
  let {
guildId: N,
productId: Y,
transitionState: J,
onClose: ee
  } = e, [eA, et] = s.useState(Y), en = (0, u.e7)([L.Z], () => null == eA ? null : L.Z.getGuildProduct(eA), [eA]), ea = (null == en ? void 0 : en.published) === !0, {
application: er
  } = (0, m.Z)(N, W.wW.GUILD_ROLE_SUBSCRIPTIONS), es = P.M['0'], eo = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), el = q.QK.useSetting(), ei = (0, x.n)(), ed = s.useCallback(() => {
var e;
return (null == en ? void 0 : null === (e = en.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? es.data : (0, O._W)(en.image_asset.application_id, en.image_asset, 600, ei && el ? void 0 : 'webp');
  }, [
es,
en,
ei,
el
  ]), {
shouldRestrictUpdatingCreatorMonetizationSettings: ec
  } = (0, f.gX)(N);
  s.useEffect(() => {
ec && (ee(), (0, Z.B)(X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY));
  }, [
ec,
ee
  ]);
  let [eu, eC] = s.useState(null !== (a = null == en ? void 0 : en.name) && void 0 !== a ? a : ''), [eg, eT] = s.useState(null !== (o = null == en ? void 0 : en.description) && void 0 !== o ? o : ''), [ep, eh] = s.useState(null !== (l = null == en ? void 0 : en.price_tier) && void 0 !== l ? l : void 0), [em, eI] = s.useState(ed), [eU, ef] = s.useState(null !== (i = null == en ? void 0 : null === (A = en.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== i ? i : es.name), [ev, eq] = s.useState(!1), [eE, eN] = s.useState(), eD = s.useMemo(() => null != ep ? (0, D.T4)(ep, K.pKx.USD) : void 0, [ep]), [eO, ex] = s.useState(!0), {
changesSaving: eR,
saveError: eL,
saveProductWithAttachments: eb,
hasUnsavedAttachmentChanges: eP,
cancelUnusedUploads: eV
  } = (0, R.P)(), e_ = (null == en ? void 0 : en.attachments) != null && (null == en ? void 0 : en.attachments.length) > 0, eS = null != eL ? eL : eE, eZ = null != eR && 'published' in eR, ej = null != eR && !eZ, eF = null !== (I = null == en ? void 0 : en.role_id) && void 0 !== I ? I : null, [eM, eG] = s.useState(), eB = null != eM || null != eF, eK = (0, u.e7)([E.Z], () => null != eF && null !== eM ? E.Z.getRole(N, eF) : null != eM ? eM : void 0, [
eM,
eF,
N
  ]), eW = '';
  eB && eO ? eW = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eB ? eW = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eO && (eW = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eX = () => {
  ex(!1), eV();
},
[ez, eQ] = s.useState(),
{
  changes: ek,
  hasUnsavedChanges: eH,
  canSaveForDraft: ey,
  canSaveForPublished: eY,
  canPublishOrUnpublish: ew
} = s.useMemo(() => (0, b.fG)({
  guildProductListing: en,
  name: eu,
  priceTier: ep,
  description: eg,
  image: em,
  imageName: eU,
  isImageChanged: ev,
  newRoleParams: eM,
  hasSavedAttachments: e_,
  hasUnsavedAttachmentChanges: eP
}), [
  en,
  eu,
  ep,
  eg,
  em,
  eU,
  ev,
  eM,
  e_,
  eP
]),
eJ = s.useMemo(() => eH || null == ez || 'publish' === ez || null != eS ? null : (0, r.jsx)(g.SlideIn, {
  className: z.successNotice,
  children: (0, r.jsx)(p.Z, {
    message: (0, r.jsxs)('div', {
      className: z.successNoticeMessage,
      children: [
        (0, r.jsx)(g.CircleCheckIcon, {
          size: 'md',
          color: c.Z.BUTTON_POSITIVE_BACKGROUND,
          secondaryColor: c.Z.WHITE
        }),
        (0, r.jsx)(g.Text, {
          variant: 'text-md/medium',
          children: 'draft' === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : 'update_publish' === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
        })
      ]
    }),
    onReset: () => eQ(void 0),
    onResetText: X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
  })
}), [
  eS,
  eH,
  ez
]),
e$ = s.useCallback(() => {
  eH ? (0, S.Z)({
    title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
    body: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
    cta: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
    closeLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
    onConfirm: () => {
      ee();
    }
  }) : ee();
}, [
  ee,
  eH
]);
  s.useEffect(() => {
(0, g.updateModal)(B.Yz, e => (0, r.jsx)($, {
  guildId: N,
  productId: eA,
  ...e
}), e$);
  }, [
N,
e$,
eA
  ]);
  let e0 = async e => {
let A = (0, b.pM)({
  newRoleParams: eM
});
if (eN(A), null != A)
  return;
let t = await eb(e);
if (eq(!1), null != t) {
  if (null != e.name && eC(t.name), null != e.description && eT(t.description), null != eM) {
    let e = t.role_id;
    d()(null != e, 'Cannot update role without role ID'), await T.Z.updateRole(N, e, eM);
  }
  eG(void 0), et(t.id), 'published' in e && !0 === e.published && ee();
}
  };
  s.useEffect(() => {
if (null != eS) {
  var e;
  (0, j.V)(eS, N, null == er ? void 0 : null === (e = er.team) || void 0 === e ? void 0 : e.id);
}
  }, [
eS,
N,
er
  ]), s.useEffect(() => {
eH && eQ(void 0);
  }, [eH]);
  let e1 = s.useRef(null);
  return (0, r.jsxs)(g.ModalRoot, {
transitionState: J,
size: g.ModalSize.DYNAMIC,
className: z.modalRoot,
'aria-labelledby': Q,
children: [
  (0, r.jsxs)(g.ModalHeader, {
    className: z.modalHeader,
    separator: !1,
    children: [
      (0, r.jsxs)('div', {
        className: z.headerText,
        children: [
          (0, r.jsx)(g.Heading, {
            id: Q,
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
          }),
          (0, r.jsx)(g.Text, {
            variant: 'text-sm/normal',
            color: 'header-secondary',
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
          })
        ]
      }),
      (0, r.jsx)(g.ModalCloseButton, {
        onClick: e$,
        className: z.__invalid_modalCloseButton
      })
    ]
  }),
  (0, r.jsxs)(g.ModalContent, {
    className: z.modalContent,
    scrollbarType: 'none',
    children: [
      (0, r.jsx)(g.ScrollerThin, {
        children: (0, r.jsxs)('div', {
          className: z.productFieldsSection,
          ref: e1,
          children: [
            (0, r.jsx)(g.FormItem, {
              title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
              tag: 'label',
              htmlFor: k,
              error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('name'),
              children: (0, r.jsx)(g.TextArea, {
                value: eu,
                onChange: eC,
                id: k,
                maxLength: 100,
                placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
                rows: 1,
                autosize: !0,
                showCharacterCount: eu.length > 0,
                showRemainingCharacterCount: eu.length > 0,
                required: !0,
                className: eu.length > 0 ? z.nameArea : void 0
              })
            }),
            (0, r.jsx)(g.FormItem, {
              title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
              tag: 'label',
              error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('description'),
              htmlFor: H,
              children: (0, r.jsx)(U.Z, {
                id: H,
                className: z.descriptionArea,
                value: eg,
                onChange: eT,
                maxLength: 1500,
                placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
                showCharacterCount: eg.length > 0,
                parentModalKey: B.Yz,
                required: !0
              })
            }),
            (0, r.jsx)(g.FormItem, {
              title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
              tag: 'label',
              error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('price_tier'),
              children: (0, r.jsx)(w, {
                guildId: N,
                selectedPriceTier: ep,
                setPriceTier: eh
              })
            }),
            (0, r.jsxs)(g.FormItem, {
              title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
              tag: 'label',
              error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('image'),
              titleClassName: z.thumbnailLabel,
              children: [
                (0, r.jsx)(g.Text, {
                  variant: 'text-xs/normal',
                  color: 'text-muted',
                  children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
                }),
                (0, r.jsx)(g.Spacer, {
                  size: 10
                }),
                (0, r.jsx)(F.Z, {
                  presetImages: P.M,
                  radioGroupAriaLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
                  image: em,
                  imageName: eU,
                  savedImageName: null == en ? void 0 : null === (n = en.image_asset) || void 0 === n ? void 0 : n.filename,
                  onChange: (e, A) => {
                    if (null != e) {
                      var t;
                      eI(e), ef(A), eq(e.startsWith('data:') || A !== (null == en ? void 0 : null === (t = en.image_asset) || void 0 === t ? void 0 : t.filename));
                    }
                  }
                })
              ]
            }),
            eO ? (0, r.jsx)(g.FormItem, {
              title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
              error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('attachments'),
              children: (0, r.jsx)(_.s, {
                onFileAdded: () => {
                  var e;
                  null === (e = e1.current) || void 0 === e || e.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                  });
                }
              })
            }) : null,
            eB ? (0, r.jsx)(G.ZP, {
              error: null !== (v = null == eS ? void 0 : eS.getFirstFieldErrorMessage(b.NB)) && void 0 !== v ? v : void 0,
              newRoleParams: eM,
              setNewRoleParams: eG,
              guildId: N,
              listingRoleId: eF,
              productId: eA
            }) : null
          ]
        })
      }),
      (0, r.jsx)('div', {
        className: z.horizontalSeparator
      }),
      (0, r.jsx)(g.ScrollerThin, {
        children: (0, r.jsxs)('div', {
          className: z.productPreview,
          children: [
            (0, r.jsx)(M.Z, {
              disabled: !ew,
              disabledTooltip: ea ? X.Z.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : X.Z.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
              published: ea,
              onClick: () => {
                d()(ew, 'Attempting to publish/unpublish when not allowed'), eQ(ea ? 'unpublish' : 'publish'), e0({
                  ...ek,
                  published: !ea
                });
              },
              submitting: eZ
            }),
            (0, r.jsx)('div', {
              className: z.verticalSeparator
            }),
            (0, r.jsx)(g.Heading, {
              variant: 'text-xs/bold',
              color: 'header-secondary',
              className: z.previewHeading,
              children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
            }),
            (0, r.jsx)(g.Spacer, {
              size: 4
            }),
            (0, r.jsx)(g.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
            }),
            (0, r.jsx)(g.Spacer, {
              size: 16
            }),
            (0, r.jsx)(V.Z, {
              imageUrl: em,
              name: '' === eu ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eu,
              description: '' === eg ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eg,
              formattedPrice: eD,
              role: eK,
              productType: eW,
              ctaComponent: (0, r.jsx)(g.ShinyButton, {
                shineSize: g.ShinyButton.ShineSizes.SMALL,
                pauseAnimation: eo || !ei,
                className: z.productPreviewCtaButton,
                children: X.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
              }),
              cardWidth: 340,
              thumbnailHeight: 190
            })
          ]
        })
      })
    ]
  }),
  (0, r.jsx)(g.ModalFooter, {
    children: (0, r.jsxs)('div', {
      className: z.footerActionButtons,
      children: [
        (0, r.jsxs)('div', {
          className: z.footerActionLeftButtons,
          children: [
            (0, r.jsx)(y, {
              text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
              value: eB,
              onChange: e => {
                e ? eG((0, G.YP)()) : eG(void 0);
              },
              warning: null === eM ? (0, r.jsx)(G.aN, {}) : void 0,
              disabled: null != eF
            }),
            (0, r.jsx)(y, {
              text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
              value: eO,
              onChange: e => {
                e ? ex(!0) : eP ? (0, g.openModalLazy)(async () => {
                  let {
                    ConfirmModal: e
                  } = await Promise.resolve().then(t.bind(t, 481060));
                  return A => (0, r.jsx)(e, {
                    ...A,
                    header: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                    confirmText: X.Z.Messages.REMOVE,
                    cancelText: X.Z.Messages.CANCEL,
                    onConfirm: eX,
                    children: (0, r.jsx)(g.Text, {
                      variant: 'text-md/normal',
                      children: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                    })
                  });
                }) : eX();
              },
              disabled: e_
            })
          ]
        }),
        (0, r.jsx)('div', {
          className: z.footerActionRightButtons,
          children: ea ? (0, r.jsx)(g.Button, {
            color: g.Button.Colors.PRIMARY,
            disabled: !eY,
            submitting: ej,
            onClick: () => {
              d()(eY, 'cannot save changes for published product without adding all fields'), eQ('update_publish'), e0(ek);
            },
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(g.Button, {
              color: g.Button.Colors.PRIMARY,
              disabled: !ey,
              submitting: ej,
              onClick: () => {
                d()(ey, 'cannot save changes without name or price tier'), eQ('draft'), e0(ek);
              },
              children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })
      ]
    })
  }),
  (0, r.jsx)(C.W, {
    component: 'div',
    className: z.successNoticeContainer,
    children: eJ
  })
]
  });
}

function $(e) {
  var A;
  return (0, r.jsx)(R.W, {
guildId: e.guildId,
editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
onFileSizeError: () => (0, v.Z)(B.ve),
children: (0, r.jsx)(J, {
  ...e
})
  });
}
(a = n || (n = {})).DRAFT = 'draft', a.PUBLISH = 'publish', a.UPDATE_PUBLISH = 'update_publish', a.UNPUBLISH = 'unpublish';