"use strict";
n.d(t, {
  ZP: function() {
    return Z
  },
  dz: function() {
    return k
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  d = n(442837),
  c = n(952265),
  E = n(780384),
  I = n(481060),
  T = n(410030),
  h = n(607070),
  S = n(238302),
  f = n(703656),
  N = n(465670),
  A = n(483444),
  m = n(599250),
  O = n(466111),
  R = n(74538),
  C = n(960048),
  p = n(98278),
  g = n(639119),
  L = n(197115),
  v = n(823188),
  D = n(474936),
  M = n(981631),
  P = n(689938),
  y = n(59494),
  U = n(867250);

function b(e) {
  if (null == e) return null;
  let t = _()(e),
    n = t.diff(_()(), "h");
  if (n > 24) {
    let e = t.diff(_()(), "d");
    return P.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
      numDays: e
    })
  }
  if (n > 1) return P.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
    numHours: n
  });
  let i = t.diff(_()(), "minutes");
  return P.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
    numMinutes: i
  })
}

function G(e) {
  var t, n, r;
  let {
    className: s,
    children: a,
    withBottomMargin: l,
    discountOffer: u,
    trialOffer: _
  } = e, d = null !== (t = null == _ ? void 0 : _.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, c = null == _ ? void 0 : _.subscription_trial, E = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == c ? void 0 : c.sku_id) && void 0 !== r ? r : D.Si.TIER_2;
  return (0, i.jsxs)("div", {
    className: o()(s, y.gradientUpsellWrapper, {
      [y.gradientUpsellWrapperTier0]: E === D.Si.TIER_0,
      [y.gradientUpsellWrapperTier2]: E === D.Si.TIER_2,
      [y.gradientUpsellWrapperWithBottomMargin]: l
    }),
    children: [(0, i.jsxs)("div", {
      className: y.logo,
      children: [(0, i.jsx)(O.Z, {
        className: y.logoIcon
      }), E === D.Si.TIER_0 && (0, i.jsx)(m.Z, {
        className: y.logoWordmark
      }), E === D.Si.TIER_2 && (0, i.jsx)(A.Z, {
        className: y.logoWordmark
      })]
    }), (0, i.jsx)(I.Text, {
      variant: "text-md/medium",
      className: y.copy,
      color: "none",
      children: a
    }), (0, i.jsx)(v.Cy, {
      text: null != u ? P.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: u.discount.amount
      }) : P.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
      colorOptions: E === D.Si.TIER_0 ? v.VE.PREMIUM_TIER_0_WHITE_FILL : v.VE.PREMIUM_TIER_2_WHITE_FILL
    }), (0, i.jsx)(I.Text, {
      variant: "eyebrow",
      className: y.countdownText,
      children: b(d)
    })]
  })
}

function w(e) {
  var t, n;
  let {
    className: s,
    onClose: o,
    subscriptionTier: a,
    analyticsLocationObject: l,
    trialOffer: u,
    discountOffer: _
  } = e, [d, c] = r.useState(!1), E = null != _ ? P.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: _.discount.amount
  }) : (0, R.Rt)({
    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, i.jsx)(L.Z, {
    className: s,
    subscriptionTier: a,
    trialId: null == u ? void 0 : u.trial_id,
    submitting: d,
    premiumModalAnalyticsLocation: l,
    size: I.Button.Sizes.MEDIUM,
    color: I.Button.Colors.GREEN,
    onClick: () => {
      c(!0)
    },
    onSubscribeModalClose: e => {
      c(!1), e && (null == o || o())
    },
    buttonText: E
  })
}

function k(e) {
  var t, n;
  let r = null === (t = (0, g.N)()) || void 0 === t ? void 0 : t.subscription_trial,
    s = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : D.Si.TIER_2;
  return (0, i.jsx)(I.Text, {
    variant: "text-xs/bold",
    className: o()(y.trialBadge, e.className, {
      [y.trialBadgeGradientTier0]: s === D.Si.TIER_0,
      [y.trialBadgeGradientTier2]: s === D.Si.TIER_2
    }),
    color: "none",
    children: (0, R.a5)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    })
  })
}

function B(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: r,
    trialOffer: s,
    discountOffer: o
  } = e;
  return (0, i.jsxs)("div", {
    className: y.footer,
    children: [(0, i.jsx)(I.Button, {
      onClick: n,
      size: I.Button.Sizes.SMALL,
      look: I.ButtonLooks.BLANK,
      className: y.cancelButton,
      children: P.Z.Messages.CLOSE
    }), (0, i.jsx)(w, {
      className: y.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: r,
      onClose: n,
      discountOffer: o,
      trialOffer: s
    })]
  })
}

function x(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, r = (0, g.N)();
  return (0, i.jsxs)("div", {
    className: y.tryOutUpsellContainer,
    children: [(0, i.jsx)(v.Cy, {
      className: y.topRimPill,
      text: P.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
      colorOptions: v.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, i.jsx)(I.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: P.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
        onClick: p.z
      })
    }), (0, i.jsx)(w, {
      trialOffer: r,
      className: y.subscribeButtonWide,
      subscriptionTier: D.Si.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, i.jsx)(I.Text, {
      variant: "eyebrow",
      className: y.countdownTextInSetting,
      children: b(null == r ? void 0 : r.expires_at)
    })]
  })
}

function V(e) {
  let {
    headingText: t,
    context: n,
    children: r,
    trialOffer: s,
    discountOffer: o
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(I.Heading, {
      className: y.__invalid_header,
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, i.jsx)(I.Text, {
      className: y.context,
      variant: "text-md/normal",
      children: n
    }), (0, i.jsx)(G, {
      trialOffer: s,
      discountOffer: o,
      children: r
    })]
  })
}

function Z(e) {
  let {
    headingText: t,
    context: r,
    children: s,
    onClose: a,
    type: u,
    subscriptionTier: _,
    analyticsLocationObject: A,
    trialOffer: m,
    discountOffer: O
  } = e, p = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), g = (0, T.ZP)();
  switch (u) {
    case D.cd.EMPTY_STICKER_PICKER_UPSELL:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.Clickable, {
          className: y.upsellClose,
          onClick: a,
          children: (0, i.jsx)(N.Z, {})
        }), (0, i.jsxs)("div", {
          className: y.contentContainer,
          children: [(0, i.jsx)("img", {
            className: y.upsellImage,
            src: U,
            alt: P.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: P.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }), (0, i.jsx)(G, {
            trialOffer: m,
            discountOffer: O,
            children: P.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, R.jP)(_),
              onClick: () => (0, f.uL)(M.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: M.jXE.EXPRESSION_PICKER,
            object: M.qAy.BUTTON_CTA
          },
          trialOffer: m,
          discountOffer: O
        })]
      });
    case D.cd.STICKER_PICKER_UPSELL:
      return l()(null != s, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: y.contentContainer,
          children: [(0, i.jsx)("img", {
            className: y.upsellImage,
            src: U,
            alt: P.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: P.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }), (0, i.jsx)(G, {
            trialOffer: m,
            discountOffer: O,
            children: P.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, R.jP)(_),
              onClick: () => (0, f.uL)(M.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: M.jXE.EXPRESSION_PICKER,
            object: M.qAy.BUTTON_CTA
          },
          trialOffer: m,
          discountOffer: O
        })]
      });
    case D.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != s, "You must specify children for this upsell type");
      let L = (0, E.ap)(g) ? n(537381) : n(341048);
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: y.contentContainer,
          children: [(0, i.jsx)("img", {
            alt: "",
            className: y.upsellImage,
            src: L
          }), (0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: P.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, i.jsx)(G, {
            trialOffer: m,
            discountOffer: O,
            children: P.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, R.jP)(_),
              onClick: () => (0, f.uL)(M.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(B, {
          subscriptionTier: _,
          onClose: a,
          analyticsLocationObject: {
            section: M.jXE.EMOJI_PICKER_POPOUT,
            object: M.qAy.BUTTON_CTA
          },
          trialOffer: m,
          discountOffer: O
        })]
      });
    case D.cd.UPLOAD_ERROR_UPSELL:
    case D.cd.BURST_REACTION_UPSELL:
    case D.cd.STREAM_QUALITY_UPSELL:
    case D.cd.MESSAGE_LENGTH_UPSELL:
      let v;
      switch (u) {
        case D.cd.UPLOAD_ERROR_UPSELL:
          v = P.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
            planName: (0, R.jP)(_),
            premiumMaxSize: _ === D.Si.TIER_0 ? P.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : P.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
            onClick: () => {
              (0, f.uL)(M.Z5c.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case D.cd.BURST_REACTION_UPSELL:
          v = P.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, R.jP)(_),
            onClick: () => {
              (0, f.uL)(M.Z5c.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case D.cd.STREAM_QUALITY_UPSELL:
          v = P.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
            onClick: () => {
              (0, f.uL)(M.Z5c.APPLICATION_STORE), null == a || a(), (0, c.pT)()
            }
          });
          break;
        case D.cd.MESSAGE_LENGTH_UPSELL:
          v = P.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: M.en1,
            onClick: () => {
              (0, f.uL)(M.Z5c.APPLICATION_STORE), null == a || a()
            }
          })
      }
      return l()(null != v, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)("div", {
          className: y.contentContainer,
          children: [(0, i.jsx)(I.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: t
          }), (0, i.jsx)(I.Text, {
            variant: "text-md/normal",
            children: r
          }), (0, i.jsx)(G, {
            trialOffer: m,
            discountOffer: O,
            children: v
          })]
        })
      });
    case D.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, i.jsxs)("div", {
        className: y.contentContainer,
        children: [(0, i.jsx)(I.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, i.jsx)(I.Text, {
          variant: "text-md/normal",
          children: r
        }), (0, i.jsx)(G, {
          trialOffer: m,
          discountOffer: O,
          children: P.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, R.jP)(_),
            onClick: () => (0, f.uL)(M.Z5c.APPLICATION_STORE)
          })
        }), (0, i.jsx)(w, {
          className: y.upsellButton,
          subscriptionTier: _,
          analyticsLocationObject: A,
          onClose: a,
          trialOffer: m,
          discountOffer: O
        })]
      });
    case D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != s, "You must specify children for this upsell type"), (0, i.jsx)(G, {
        trialOffer: m,
        discountOffer: O,
        children: P.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
          onClick: () => {
            (0, f.uL)(M.Z5c.APPLICATION_STORE), (0, S.my)()
          }
        })
      });
    case D.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, i.jsxs)("div", {
        className: o()(y.messageLengthUpsellContainer, {
          [y.messageLengthUpsellAppearAnimation]: !p
        }),
        children: [(0, i.jsx)(I.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: r
        }), (0, i.jsx)(I.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: y.messageLengthUpsellHeader,
          children: P.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
        }), (0, i.jsx)("div", {
          className: y.divider
        }), (0, i.jsx)(G, {
          trialOffer: m,
          discountOffer: O,
          className: y.messageLengthBrandedContainer,
          subscriptionTier: _,
          children: P.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: M.en1,
            onClick: () => {
              (0, f.uL)(M.Z5c.APPLICATION_STORE), null == a || a()
            }
          })
        }), (0, i.jsx)(w, {
          subscriptionTier: _,
          analyticsLocationObject: A,
          onClose: a,
          trialOffer: m,
          discountOffer: O
        })]
      });
    case D.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case D.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, i.jsx)(x, {});
    case D.cd.GUILD_CAP_MODAL_UPSELL:
    case D.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case D.cd.CUSTOM_PROFILE_UPSELL:
    case D.cd.VIDEO_BACKGROUNDS_MODAL:
    case D.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case D.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case D.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case D.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
      return (0, i.jsx)(V, {
        trialOffer: m,
        discountOffer: O,
        headingText: t,
        context: r,
        children: s
      });
    default:
      return C.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(V, {
        headingText: t,
        context: r,
        children: s,
        trialOffer: m,
        discountOffer: O
      })
  }
}