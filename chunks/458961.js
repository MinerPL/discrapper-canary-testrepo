"use strict";
A.r(t), A.d(t, {
  GuildProductEditModalContent: function() {
    return eA
  },
  default: function() {
    return ea
  }
}), A("47120");
var a, l, s = A("735250"),
  n = A("470079"),
  r = A("803997"),
  i = A.n(r),
  o = A("512722"),
  d = A.n(o),
  u = A("831209"),
  c = A("399606"),
  f = A("215569"),
  g = A("481060"),
  C = A("749210"),
  h = A("852860"),
  m = A("607070"),
  T = A("725803"),
  p = A("76535"),
  U = A("215388"),
  v = A("674180"),
  I = A("884858"),
  E = A("695346"),
  x = A("430824"),
  N = A("976644"),
  D = A("864293"),
  q = A("682864"),
  L = A("153124"),
  O = A("441674"),
  R = A("937615"),
  P = A("73346"),
  V = A("506071"),
  j = A("587123"),
  b = A("240864"),
  M = A("863663"),
  S = A("923400"),
  F = A("623488"),
  _ = A("152980"),
  G = A("120651"),
  K = A("871388"),
  B = A("412110"),
  W = A("513669"),
  X = A("972797"),
  z = A("943516"),
  Z = A("302463"),
  Q = A("981631"),
  H = A("674563"),
  y = A("689938"),
  w = A("180797");
let k = (0, L.uid)(),
  Y = (0, L.uid)(),
  J = (0, L.uid)();

function $(e) {
  let {
    text: t,
    onChange: A,
    value: a,
    disabled: l,
    warning: n
  } = e, r = (0, L.useUID)(), o = l ? "text-muted" : "text-normal";
  return (0, s.jsxs)("label", {
    className: i()(w.benefitToggleContainer, {
      [w.disabled]: l
    }),
    htmlFor: r,
    children: [(0, s.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: o,
      children: t
    }), null != n && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(q.default, {
        size: 4,
        horizontal: !0
      }), n]
    }), (0, s.jsx)(q.default, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(g.Switch, {
      onChange: A,
      checked: a,
      disabled: l,
      id: r
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
  } = (0, p.usePriceTiers)(t, Q.PriceTierTypes.GUILD_PRODUCTS), r = n.useMemo(() => (null != l ? l : null != A ? [A] : []).map(e => ({
    value: e,
    label: (0, R.formatPrice)(e, Q.CurrencyCodes.USD)
  })), [l, A]);
  return (0, s.jsx)(g.SearchableSelect, {
    value: A,
    placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: r,
    onChange: a,
    filter: ee,
    "aria-required": !0
  })
}

function eA(e) {
  var t, a, l, r, i, o, p, I;
  let {
    guildId: L,
    productId: ee,
    transitionState: eA,
    onClose: el
  } = e, [es, en] = n.useState(ee), er = (0, c.useStateFromStores)([b.default], () => null == es ? null : b.default.getGuildProduct(es), [es]), ei = (null == er ? void 0 : er.published) === !0, {
    application: eo
  } = (0, T.default)(L, H.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), ed = S.PRODUCT_IMAGE_PRESETS["0"], eu = (0, c.useStateFromStores)([m.default], () => m.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), ef = (0, V.useIsWindowFocused)(), eg = n.useCallback(() => {
    var e;
    return (null == er ? void 0 : null === (e = er.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ed.data : (0, P.getAssetURL)(er.image_asset.application_id, er.image_asset, 600, ef && ec ? void 0 : "webp")
  }, [ed, er, ef, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eC
  } = (0, v.useShouldRestrictUpdatingCreatorMonetizationSettings)(L);
  n.useEffect(() => {
    eC && (el(), (0, K.openErrorDialog)(y.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, y.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [eC, el]);
  let [eh, em] = n.useState(null !== (l = null == er ? void 0 : er.name) && void 0 !== l ? l : ""), [eT, ep] = n.useState(null !== (r = null == er ? void 0 : er.description) && void 0 !== r ? r : ""), [eU, ev] = n.useState(null !== (i = null == er ? void 0 : er.price_tier) && void 0 !== i ? i : void 0), [eI, eE] = n.useState(eg), [ex, eN] = n.useState(null !== (o = null == er ? void 0 : null === (t = er.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== o ? o : ed.name), [eD, eq] = n.useState(!1), [eL, eO] = n.useState(), eR = n.useMemo(() => null != eU ? (0, R.formatPrice)(eU, Q.CurrencyCodes.USD) : void 0, [eU]), [eP, eV] = n.useState(!0), {
    changesSaving: ej,
    saveError: eb,
    saveProductWithAttachments: eM,
    hasUnsavedAttachmentChanges: eS,
    cancelUnusedUploads: eF
  } = (0, j.useGuildProductAttachmentManagerContext)(), e_ = (null == er ? void 0 : er.attachments) != null && (null == er ? void 0 : er.attachments.length) > 0, eG = null != eb ? eb : eL, eK = null != ej && "published" in ej, eB = null != ej && !eK, eW = null !== (p = null == er ? void 0 : er.role_id) && void 0 !== p ? p : null, [eX, ez] = n.useState(), eZ = null != eX || null != eW, eQ = (0, c.useStateFromStores)([x.default], () => null != eW && null !== eX ? x.default.getRole(L, eW) : null != eX ? eX : void 0, [eX, eW, L]), eH = "";
  eZ && eP ? eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eZ ? eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let ey = () => {
      eV(!1), eF()
    },
    [ew, ek] = n.useState(),
    {
      changes: eY,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = n.useMemo(() => (0, M.computeProductChanges)({
      guildProductListing: er,
      name: eh,
      priceTier: eU,
      description: eT,
      image: eI,
      imageName: ex,
      isImageChanged: eD,
      newRoleParams: eX,
      hasSavedAttachments: e_,
      hasUnsavedAttachmentChanges: eS
    }), [er, eh, eU, eT, eI, ex, eD, eX, e_, eS]),
    e3 = n.useMemo(() => eJ || null == ew || "publish" === ew || null != eG ? null : (0, s.jsx)(D.default, {
      className: w.successNotice,
      children: (0, s.jsx)(h.default, {
        message: (0, s.jsxs)("div", {
          className: w.successNoticeMessage,
          children: [(0, s.jsx)(O.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, s.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === ew ? y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ew ? y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => ek(void 0),
        onResetText: y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [eG, eJ, ew]),
    e6 = n.useCallback(() => {
      eJ ? (0, G.default)({
        title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          el()
        }
      }) : el()
    }, [el, eJ]);
  n.useEffect(() => {
    (0, g.updateModal)(Z.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, s.jsx)(ea, {
      guildId: L,
      productId: es,
      ...e
    }), e6)
  }, [L, e6, es]);
  let e9 = async e => {
    let t = (0, M.describeProductChangeValidation)({
      newRoleParams: eX
    });
    if (eO(t), null != t) return;
    let A = await eM(e);
    if (eq(!1), null != A) {
      if (null != e.name && em(A.name), null != e.description && ep(A.description), null != eX) {
        let e = A.role_id;
        d()(null != e, "Cannot update role without role ID"), await C.default.updateRole(L, e, eX)
      }
      ez(void 0), en(A.id), "published" in e && !0 === e.published && el()
    }
  };
  n.useEffect(() => {
    if (null != eG) {
      var e;
      (0, B.showPublishErrorDialog)(eG, L, null == eo ? void 0 : null === (e = eo.team) || void 0 === e ? void 0 : e.id)
    }
  }, [eG, L, eo]), n.useEffect(() => {
    eJ && ek(void 0)
  }, [eJ]);
  let e2 = n.useRef(null);
  return (0, s.jsxs)(g.ModalRoot, {
    transitionState: eA,
    size: g.ModalSize.DYNAMIC,
    className: w.modalRoot,
    "aria-labelledby": k,
    children: [(0, s.jsxs)(g.ModalHeader, {
      className: w.modalHeader,
      separator: !1,
      children: [(0, s.jsxs)("div", {
        className: w.headerText,
        children: [(0, s.jsx)(g.Heading, {
          id: k,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, s.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, s.jsx)(g.ModalCloseButton, {
        onClick: e6,
        className: w.__invalid_modalCloseButton
      })]
    }), (0, s.jsxs)(g.ModalContent, {
      className: w.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(g.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: w.productFieldsSection,
          ref: e2,
          children: [(0, s.jsx)(g.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: Y,
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("name"),
            children: (0, s.jsx)(g.TextArea, {
              value: eh,
              onChange: em,
              id: Y,
              maxLength: 100,
              placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eh.length > 0,
              showRemainingCharacterCount: eh.length > 0,
              required: !0,
              className: eh.length > 0 ? w.nameArea : void 0
            })
          }), (0, s.jsx)(g.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("description"),
            htmlFor: J,
            children: (0, s.jsx)(U.default, {
              id: J,
              className: w.descriptionArea,
              value: eT,
              onChange: ep,
              maxLength: 1500,
              placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: eT.length > 0,
              parentModalKey: Z.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, s.jsx)(g.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("price_tier"),
            children: (0, s.jsx)(et, {
              guildId: L,
              selectedPriceTier: eU,
              setPriceTier: ev
            })
          }), (0, s.jsxs)(g.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("image"),
            titleClassName: w.thumbnailLabel,
            children: [(0, s.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, s.jsx)(q.default, {
              size: 10
            }), (0, s.jsx)(W.default, {
              presetImages: S.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: eI,
              imageName: ex,
              savedImageName: null == er ? void 0 : null === (a = er.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, t) => {
                if (null != e) {
                  var A;
                  eE(e), eN(t), eq(e.startsWith("data:") || t !== (null == er ? void 0 : null === (A = er.image_asset) || void 0 === A ? void 0 : A.filename))
                }
              }
            })]
          }), eP ? (0, s.jsx)(g.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("attachments"),
            children: (0, s.jsx)(_.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eZ ? (0, s.jsx)(z.default, {
            error: null !== (I = null == eG ? void 0 : eG.getFirstFieldErrorMessage(M.ROLE_FIELD_NAME)) && void 0 !== I ? I : void 0,
            newRoleParams: eX,
            setNewRoleParams: ez,
            guildId: L,
            listingRoleId: eW,
            productId: es
          }) : null]
        })
      }), (0, s.jsx)("div", {
        className: w.horizontalSeparator
      }), (0, s.jsx)(g.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: w.productPreview,
          children: [(0, s.jsx)(X.default, {
            disabled: !e1,
            disabledTooltip: ei ? y.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : y.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: ei,
            onClick: () => {
              d()(e1, "Attempting to publish/unpublish when not allowed"), ek(ei ? "unpublish" : "publish"), e9({
                ...eY,
                published: !ei
              })
            },
            submitting: eK
          }), (0, s.jsx)("div", {
            className: w.verticalSeparator
          }), (0, s.jsx)(g.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: w.previewHeading,
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, s.jsx)(q.default, {
            size: 4
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, s.jsx)(q.default, {
            size: 16
          }), (0, s.jsx)(F.default, {
            imageUrl: eI,
            name: "" === eh ? y.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eh,
            description: "" === eT ? y.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eT,
            formattedPrice: eR,
            role: eQ,
            productType: eH,
            ctaComponent: (0, s.jsx)(N.default, {
              shineSize: N.default.ShineSizes.SMALL,
              pauseAnimation: eu || !ef,
              className: w.productPreviewCtaButton,
              children: y.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, s.jsx)(g.ModalFooter, {
      children: (0, s.jsxs)("div", {
        className: w.footerActionButtons,
        children: [(0, s.jsxs)("div", {
          className: w.footerActionLeftButtons,
          children: [(0, s.jsx)($, {
            text: y.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eZ,
            onChange: e => {
              e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
            },
            warning: null === eX ? (0, s.jsx)(z.WarningIcon, {}) : void 0,
            disabled: null != eW
          }), (0, s.jsx)($, {
            text: y.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eP,
            onChange: e => {
              e ? eV(!0) : eS ? (0, g.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(A.bind(A, "481060"));
                return t => (0, s.jsx)(e, {
                  ...t,
                  header: y.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: y.default.Messages.REMOVE,
                  cancelText: y.default.Messages.CANCEL,
                  onConfirm: ey,
                  children: (0, s.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: y.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : ey()
            },
            disabled: e_
          })]
        }), (0, s.jsx)("div", {
          className: w.footerActionRightButtons,
          children: ei ? (0, s.jsx)(g.Button, {
            color: g.Button.Colors.PRIMARY,
            disabled: !e0,
            submitting: eB,
            onClick: () => {
              d()(e0, "cannot save changes for published product without adding all fields"), ek("update_publish"), e9(eY)
            },
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(g.Button, {
              color: g.Button.Colors.PRIMARY,
              disabled: !e$,
              submitting: eB,
              onClick: () => {
                d()(e$, "cannot save changes without name or price tier"), ek("draft"), e9(eY)
              },
              children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, s.jsx)(f.TransitionGroup, {
      component: "div",
      className: w.successNoticeContainer,
      children: e3
    })]
  })
}

function ea(e) {
  var t;
  return (0, s.jsx)(j.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (t = e.productId) && void 0 !== t ? t : void 0,
    onFileSizeError: () => (0, I.default)(Z.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, s.jsx)(eA, {
      ...e
    })
  })
}(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"