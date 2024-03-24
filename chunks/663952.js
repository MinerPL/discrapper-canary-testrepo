"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("222007"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("866227"),
  o = s.n(r),
  d = s("118810"),
  u = s("65597"),
  c = s("77078"),
  S = s("913144"),
  E = s("54239"),
  T = s("376152"),
  f = s("579565"),
  _ = s("778695"),
  m = s("298878"),
  g = s("697218"),
  h = s("888400"),
  N = s("411511"),
  I = s("782340"),
  p = s("399953");
let C = "YYYY-MM-DD HH:mm";

function A(e) {
  let {
    drop: t,
    enrolled: s,
    completed: l
  } = e, i = n.useRef(null), r = e => {
    let t = e.target;
    (0, d.isElement)(t, HTMLAnchorElement) && (0, E.popLayer)()
  };
  (0, n.useEffect)(() => {
    let e = i.current;
    return null != e && e.addEventListener("click", r), () => {
      null != e && e.removeEventListener("click", r)
    }
  }, []);
  let {
    title: u,
    endDate: _,
    dropsQuestId: m,
    assets: g,
    articleUrl: h
  } = t, N = (0, f.getDropByQuestId)(m);
  if (null == N) return null;
  let C = () => {
    (0, T.enrollDropsUser)(m).then(() => {
      S.default.wait(async () => {
        await (0, T.fetchDropsUserStatus)()
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: p.dropContainer,
    children: [(0, a.jsx)("div", {
      className: p.dropCard,
      children: (0, a.jsxs)("div", {
        className: p.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: p.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: p.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: g.iconSrc,
              className: p.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: u
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-normal",
              className: p.availableUntil,
              children: I.default.Messages.DROPS_CARD_REDEEM_UNTIL.format({
                endDate: o(_, "YYYY-MM-DD HH:mm").format("MMMM Do, YYYY")
              })
            })]
          })]
        }), (0, a.jsx)(c.Tooltip, {
          text: s && !l ? I.default.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
          tooltipContentClassName: p.redeemTooltipContent,
          children: e => (0, a.jsx)(c.Button, {
            className: p.promotionCardButton,
            color: c.Button.Colors.BRAND,
            size: c.Button.Sizes.SMALL,
            onClick: C,
            disabled: s && !l,
            ...e,
            children: s ? I.default.Messages.REDEEM : I.default.Messages.DROPS_GIFT_INVENTORY_ENROLL
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: p.dropCriteria,
      children: [(0, a.jsx)("img", {
        alt: "",
        src: g.rewardSrc,
        className: p.dropRewardImage
      }), (0, a.jsx)("div", {
        ref: i,
        children: (0, a.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          className: p.dropCriteriaText,
          children: N.messages.giftInfo()
        })
      }), (0, a.jsx)(c.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        className: p.dropLearnMore,
        children: I.default.Messages.DROPS_LEARN_MORE.format({
          faqUrl: h
        })
      })]
    })]
  })
}

function O(e) {
  let {
    drop: t,
    code: s,
    platform: l
  } = e, [r, d] = n.useState(!1), u = void 0 !== s, S = (0, h.dateFormat)(o(t.endDate), "LL"), E = I.default.Messages.DROPS_CARD_REDEEM_UNTIL.format({
    endDate: S
  }), T = u ? I.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : I.default.Messages.PROMOTION_CARD_ACTION_CLAIM, f = n.useCallback(() => d(!1), []);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i(p.skuCard, p.promotionCard),
      children: (0, a.jsxs)("div", {
        className: p.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: p.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: p.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: t.assets.iconSrc,
              className: p.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: t.title
            }), (0, a.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: p.promotionText,
              children: E
            })]
          })]
        }), (0, a.jsx)(c.Button, {
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.SMALL,
          onClick: () => d(!0),
          children: T
        })]
      })
    }), r && (0, a.jsx)(c.Modal, {
      renderModal: e => (0, a.jsx)(_.default, {
        ...e,
        onClose: f,
        code: s,
        drop: t,
        platform: l
      }),
      onCloseRequest: f
    })]
  })
}
var x = function(e) {
  var t;
  let {
    dropsOptedOut: s,
    dropsStatuses: n
  } = e, l = [], i = [], r = (0, u.useStateFromStores)([g.default], () => g.default.getCurrentUser()), d = !1;
  if (null == n) return null;
  for (let e of Object.keys(n)) {
    let t = (0, f.getDropByQuestId)(e);
    if (null == t) continue;
    let s = n[e],
      a = (0, f.getDropsPartnerGameNameByQuestId)(e);
    if (null == a) continue;
    let u = (0, f.getEligibilityByRunningGameDetection)(a),
      c = s.eligible && u,
      S = (0, f.getDropsExperiment)(a);
    if (null == S) continue;
    c && S.trackExposure({
      location: "ENTITLEMENT_GIFTS"
    });
    let E = !!((null == r ? void 0 : r.isStaff()) && S.getCurrentConfig({
        location: "076035_2"
      }, {
        autoTrackExposure: !1
      }).showUnenroll),
      T = S.getCurrentConfig({
        location: "076035_3"
      }, {
        autoTrackExposure: !1
      }).dropsEnabled;
    if (!T) continue;
    d = !0;
    let _ = o(t.endDate, C),
      m = o();
    if (c && null == s.completed_at || null != s.enrolled_at && null == s.completed_at && s.eligible) m < _ && l.push({
      dropsQuestId: e,
      dropsStatus: s,
      showUnenroll: E,
      experiment: S
    });
    else if (null != s.code || null != s.completed_at) {
      let a = o(t.finalClaimDate, C);
      m < a && i.push({
        dropsQuestId: e,
        dropsStatus: s,
        showUnenroll: E,
        experiment: S
      })
    }
  }
  let S = (0, a.jsxs)("div", {
    className: p.dropsHeaderContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      children: I.default.Messages.DROPS_GIFT_INVENTORY_TITLE
    }), (0, a.jsx)(m.default, {
      className: p.betaTagIcon
    })]
  });
  return d && 0 === l.length && 0 === i.length && s ? (0, a.jsxs)(c.FormSection, {
    children: [S, (0, a.jsx)(c.FormDivider, {
      className: p.divider
    }), (0, a.jsx)("div", {
      className: p.dropsHelpText,
      children: I.default.Messages.DROPS_READ_BLOG_TO_ENABLE.format({
        blogURL: N.DropsFaqUrl
      })
    })]
  }) : 0 === l.length && 0 === i.length ? null : (0, a.jsxs)(c.FormSection, {
    children: [S, (0, a.jsx)(c.FormDivider, {
      className: p.divider
    }), l.map(e => {
      let t = (0, f.getDropByQuestId)(e.dropsQuestId),
        s = null != e.dropsStatus.enrolled_at,
        n = null != e.dropsStatus.completed_at;
      return null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(A, {
          drop: {
            ...t
          },
          enrolled: s,
          completed: n
        }, t.dropsQuestId), e.showUnenroll && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: () => (0, T.unenrollDropsUser)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), i.map(e => {
      var t, s;
      let n = (0, f.getDropByQuestId)(e.dropsQuestId);
      return null != n ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(O, {
          drop: n,
          code: null !== (t = e.dropsStatus.code) && void 0 !== t ? t : void 0,
          platform: null !== (s = e.dropsStatus.platform) && void 0 !== s ? s : void 0
        }, e.dropsQuestId), e.showUnenroll && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: () => (0, T.unenrollDropsUser)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), "string" == typeof(null == r ? void 0 : r.id) && i.length > 0 ? (0, a.jsx)("div", {
      className: p.feedback,
      children: I.default.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({
        feedbackURL: "https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id=".concat(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "")
      })
    }) : null]
  })
}