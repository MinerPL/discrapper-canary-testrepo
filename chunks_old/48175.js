"use strict";
A.r(t), A.d(t, {
  GuildProductEditModalContent: function() {
    return eA
  },
  default: function() {
    return ea
  }
}), A("222007");
var a, l, n = A("37983"),
  r = A("884691"),
  s = A("414456"),
  i = A.n(s),
  o = A("627445"),
  d = A.n(o),
  u = A("171210"),
  c = A("65597"),
  f = A("266491"),
  g = A("77078"),
  C = A("851387"),
  h = A("45299"),
  m = A("206230"),
  p = A("986399"),
  T = A("741515"),
  v = A("435032"),
  U = A("465869"),
  I = A("424960"),
  E = A("845579"),
  x = A("305961"),
  N = A("181114"),
  D = A("965397"),
  L = A("191814"),
  q = A("476765"),
  O = A("578706"),
  R = A("153160"),
  P = A("271560"),
  j = A("866190"),
  V = A("949435"),
  b = A("565559"),
  M = A("757515"),
  S = A("740259"),
  F = A("492724"),
  _ = A("155539"),
  G = A("959875"),
  K = A("669297"),
  B = A("836312"),
  W = A("795785"),
  X = A("850861"),
  z = A("570114"),
  Z = A("307785"),
  Q = A("49111"),
  y = A("988268"),
  H = A("782340"),
  k = A("365415");
let w = (0, q.uid)(),
  Y = (0, q.uid)(),
  J = (0, q.uid)();

function $(e) {
  let {
    text: t,
    onChange: A,
    value: a,
    disabled: l,
    warning: r
  } = e, s = (0, q.useUID)(), o = l ? "text-muted" : "text-normal";
  return (0, n.jsxs)("label", {
    className: i(k.benefitToggleContainer, {
      [k.disabled]: l
    }),
    htmlFor: s,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: o,
      children: t
    }), null != r && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(L.default, {
        size: 4,
        horizontal: !0
      }), r]
    }), (0, n.jsx)(L.default, {
      size: 16,
      horizontal: !0
    }), (0, n.jsx)(g.Switch, {
      onChange: A,
      checked: a,
      disabled: l,
      id: s
    })]
  })
}

function ee(e, t) {
  return e.filter(e => {
    let {
      value: A,
      label: a
    } = e;
    return A.toString().includes(t) || a.includes(t)
  })
}

function et(e) {
  let {
    guildId: t,
    selectedPriceTier: A,
    setPriceTier: a
  } = e, {
    priceTiers: l
  } = (0, T.usePriceTiers)(t, Q.PriceTierTypes.GUILD_PRODUCTS), s = r.useMemo(() => (null != l ? l : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, R.formatPrice)(e, Q.CurrencyCodes.USD)
  })), [l, A]);
  return (0, n.jsx)(g.SearchableSelect, {
    value: A,
    placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: ee,
    "aria-required": !0
  })
}

function eA(e) {
  var t, a, l, s, i, o, T, I;
  let {
    guildId: q,
    productId: ee,
    transitionState: eA,
    onClose: el
  } = e, [en, er] = r.useState(ee), es = (0, c.useStateFromStores)([b.default], () => null == en ? null : b.default.getGuildProduct(en), [en]), ei = (null == es ? void 0 : es.published) === !0, {
    application: eo
  } = (0, p.default)(q, y.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), ed = S.PRODUCT_IMAGE_PRESETS[0], eu = (0, c.useStateFromStores)([m.default], () => m.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), ef = (0, j.useIsWindowFocused)(), eg = r.useCallback(() => {
    var e;
    return (null == es ? void 0 : null === (e = es.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ed.data : (0, P.getAssetURL)(es.image_asset.application_id, es.image_asset, 600, ef && ec ? void 0 : "webp")
  }, [ed, es, ef, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eC
  } = (0, U.useShouldRestrictUpdatingCreatorMonetizationSettings)(q);
  r.useEffect(() => {
    eC && (el(), (0, K.openErrorDialog)(H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [eC, el]);
  let [eh, em] = r.useState(null !== (l = null == es ? void 0 : es.name) && void 0 !== l ? l : ""), [ep, eT] = r.useState(null !== (s = null == es ? void 0 : es.description) && void 0 !== s ? s : ""), [ev, eU] = r.useState(null !== (i = null == es ? void 0 : es.price_tier) && void 0 !== i ? i : void 0), [eI, eE] = r.useState(eg), [ex, eN] = r.useState(null !== (o = null == es ? void 0 : null === (t = es.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== o ? o : ed.name), [eD, eL] = r.useState(!1), [eq, eO] = r.useState(), eR = r.useMemo(() => null != ev ? (0, R.formatPrice)(ev, Q.CurrencyCodes.USD) : void 0, [ev]), [eP, ej] = r.useState(!0), {
    changesSaving: eV,
    saveError: eb,
    saveProductWithAttachments: eM,
    hasUnsavedAttachmentChanges: eS,
    cancelUnusedUploads: eF
  } = (0, V.useGuildProductAttachmentManagerContext)(), e_ = (null == es ? void 0 : es.attachments) != null && (null == es ? void 0 : es.attachments.length) > 0, eG = null != eb ? eb : eq, eK = null != eV && "published" in eV, eB = null != eV && !eK, eW = null !== (T = null == es ? void 0 : es.role_id) && void 0 !== T ? T : null, [eX, ez] = r.useState(), eZ = null != eX || null != eW, eQ = (0, c.useStateFromStores)([x.default], () => null != eW && null !== eX ? x.default.getRole(q, eW) : null != eX ? eX : void 0, [eX, eW, q]), ey = "";
  eZ && eP ? ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eZ ? ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eH = () => {
      ej(!1), eF()
    },
    [ek, ew] = r.useState(),
    {
      changes: eY,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = r.useMemo(() => (0, M.computeProductChanges)({
      guildProductListing: es,
      name: eh,
      priceTier: ev,
      description: ep,
      image: eI,
      imageName: ex,
      isImageChanged: eD,
      newRoleParams: eX,
      hasSavedAttachments: e_,
      hasUnsavedAttachmentChanges: eS
    }), [es, eh, ev, ep, eI, ex, eD, eX, e_, eS]),
    e3 = r.useMemo(() => eJ || null == ek || "publish" === ek || null != eG ? null : (0, n.jsx)(D.default, {
      className: k.successNotice,
      children: (0, n.jsx)(h.default, {
        message: (0, n.jsxs)("div", {
          className: k.successNoticeMessage,
          children: [(0, n.jsx)(O.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, n.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === ek ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ek ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => ew(void 0),
        onResetText: H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [eG, eJ, ek]),
    e6 = r.useCallback(() => {
      eJ ? (0, G.default)({
        title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          el()
        }
      }) : el()
    }, [el, eJ]);
  r.useEffect(() => {
    (0, g.updateModal)(Z.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, n.jsx)(ea, {
      guildId: q,
      productId: en,
      ...e
    }), e6)
  }, [q, e6, en]);
  let e9 = async e => {
    let t = (0, M.describeProductChangeValidation)({
      newRoleParams: eX
    });
    if (eO(t), null != t) return;
    let A = await eM(e);
    if (eL(!1), null != A) {
      if (null != e.name && em(A.name), null != e.description && eT(A.description), null != eX) {
        let e = A.role_id;
        d(null != e, "Cannot update role without role ID"), await C.default.updateRole(q, e, eX)
      }
      ez(void 0), er(A.id), "published" in e && !0 === e.published && el()
    }
  };
  r.useEffect(() => {
    if (null != eG) {
      var e;
      (0, B.showPublishErrorDialog)(eG, q, null == eo ? void 0 : null === (e = eo.team) || void 0 === e ? void 0 : e.id)
    }
  }, [eG, q, eo]), r.useEffect(() => {
    eJ && ew(void 0)
  }, [eJ]);
  let e2 = r.useRef(null);
  return (0, n.jsxs)(g.ModalRoot, {
    transitionState: eA,
    size: g.ModalSize.DYNAMIC,
    className: k.modalRoot,
    "aria-labelledby": w,
    children: [(0, n.jsxs)(g.ModalHeader, {
      className: k.modalHeader,
      separator: !1,
      children: [(0, n.jsxs)("div", {
        className: k.headerText,
        children: [(0, n.jsx)(g.Heading, {
          id: w,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, n.jsx)(g.ModalCloseButton, {
        onClick: e6,
        className: k.modalCloseButton
      })]
    }), (0, n.jsxs)(g.ModalContent, {
      className: k.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.ScrollerThin, {
        children: (0, n.jsxs)("div", {
          className: k.productFieldsSection,
          ref: e2,
          children: [(0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: Y,
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(g.TextArea, {
              value: eh,
              onChange: em,
              id: Y,
              maxLength: 100,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eh.length > 0,
              showRemainingCharacterCount: eh.length > 0,
              required: !0,
              className: eh.length > 0 ? k.nameArea : void 0
            })
          }), (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("description"),
            htmlFor: J,
            children: (0, n.jsx)(v.default, {
              id: J,
              className: k.descriptionArea,
              value: ep,
              onChange: eT,
              maxLength: 1500,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: ep.length > 0,
              parentModalKey: Z.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(et, {
              guildId: q,
              selectedPriceTier: ev,
              setPriceTier: eU
            })
          }), (0, n.jsxs)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("image"),
            titleClassName: k.thumbnailLabel,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, n.jsx)(L.default, {
              size: 10
            }), (0, n.jsx)(W.default, {
              presetImages: S.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: eI,
              imageName: ex,
              savedImageName: null == es ? void 0 : null === (a = es.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eE(e), eN(t), eL(e.startsWith("data:") || t !== (null == es ? void 0 : null === (A = es.image_asset) || void 0 === A ? void 0 : A.filename))
                }
              }
            })]
          }), eP ? (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(_.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eZ ? (0, n.jsx)(z.default, {
            error: null !== (I = null == eG ? void 0 : eG.getFirstFieldErrorMessage(M.ROLE_FIELD_NAME)) && void 0 !== I ? I : void 0,
            newRoleParams: eX,
            setNewRoleParams: ez,
            guildId: q,
            listingRoleId: eW,
            productId: en
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, n.jsx)(g.ScrollerThin, {
        children: (0, n.jsxs)("div", {
          className: k.productPreview,
          children: [(0, n.jsx)(X.default, {
            disabled: !e1,
            disabledTooltip: ei ? H.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : H.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: ei,
            onClick: () => {
              d(e1, "Attempting to publish/unpublish when not allowed"), ew(ei ? "unpublish" : "publish"), e9({
                ...eY,
                published: !ei
              })
            },
            submitting: eK
          }), (0, n.jsx)("div", {
            className: k.verticalSeparator
          }), (0, n.jsx)(g.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: k.previewHeading,
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, n.jsx)(L.default, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, n.jsx)(L.default, {
            size: 16
          }), (0, n.jsx)(F.default, {
            imageUrl: eI,
            name: "" === eh ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eh,
            description: "" === ep ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : ep,
            formattedPrice: eR,
            role: eQ,
            productType: ey,
            ctaComponent: (0, n.jsx)(N.default, {
              shineSize: N.default.ShineSizes.SMALL,
              pauseAnimation: eu || !ef,
              className: k.productPreviewCtaButton,
              children: H.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(g.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: k.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: k.footerActionLeftButtons,
          children: [(0, n.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eZ,
            onChange: e => {
              e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
            },
            warning: null === eX ? (0, n.jsx)(z.WarningIcon, {}) : void 0,
            disabled: null != eW
          }), (0, n.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eP,
            onChange: e => {
              e ? ej(!0) : eS ? (0, g.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await A.el("77078").then(A.bind(A, "77078"));
                return t => (0, n.jsx)(e, {
                  ...t,
                  header: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: H.default.Messages.REMOVE,
                  cancelText: H.default.Messages.CANCEL,
                  onConfirm: eH,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : eH()
            },
            disabled: e_
          })]
        }), (0, n.jsx)("div", {
          className: k.footerActionRightButtons,
          children: ei ? (0, n.jsx)(g.Button, {
            color: g.Button.Colors.PRIMARY,
            disabled: !e0,
            submitting: eB,
            onClick: () => {
              d(e0, "cannot save changes for published product without adding all fields"), ew("update_publish"), e9(eY)
            },
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(g.Button, {
              color: g.Button.Colors.PRIMARY,
              disabled: !e$,
              submitting: eB,
              onClick: () => {
                d(e$, "cannot save changes without name or price tier"), ew("draft"), e9(eY)
              },
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, n.jsx)(f.TransitionGroup, {
      component: "div",
      className: k.successNoticeContainer,
      children: e3
    })]
  })
}

function ea(e) {
  var t;
  return (0, n.jsx)(V.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (t = e.productId) && void 0 !== t ? t : void 0,
    onFileSizeError: () => (0, I.default)(Z.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, n.jsx)(eA, {
      ...e
    })
  })
}(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"