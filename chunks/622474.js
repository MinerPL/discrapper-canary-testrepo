"use strict";
s.r(t), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("913527"),
  o = s.n(r),
  d = s("374470"),
  u = s("399606"),
  c = s("481060"),
  S = s("570140"),
  E = s("37234"),
  T = s("960359"),
  _ = s("853197"),
  f = s("430492"),
  m = s("688465"),
  g = s("594174"),
  h = s("55935"),
  N = s("702512"),
  I = s("689938"),
  p = s("561997");
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
    endDate: f,
    dropsQuestId: m,
    assets: g,
    articleUrl: h
  } = t, N = (0, _.getDropByQuestId)(m);
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
                endDate: o()(f, "YYYY-MM-DD HH:mm").format("MMMM Do, YYYY")
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
  } = e, [r, d] = n.useState(!1), u = void 0 !== s, S = (0, h.dateFormat)(o()(t.endDate), "LL"), E = I.default.Messages.DROPS_CARD_REDEEM_UNTIL.format({
    endDate: S
  }), T = u ? I.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : I.default.Messages.PROMOTION_CARD_ACTION_CLAIM, _ = n.useCallback(() => d(!1), []);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(p.skuCard, p.promotionCard),
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
              className: p.__invalid_promotionText,
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
      renderModal: e => (0, a.jsx)(f.default, {
        ...e,
        onClose: _,
        code: s,
        drop: t,
        platform: l
      }),
      onCloseRequest: _
    })]
  })
}
t.default = function(e) {
  var t;
  let {
    dropsOptedOut: s,
    dropsStatuses: n
  } = e, l = [], i = [], r = (0, u.useStateFromStores)([g.default], () => g.default.getCurrentUser()), d = !1;
  if (null == n) return null;
  for (let e of Object.keys(n)) {
    let t = (0, _.getDropByQuestId)(e);
    if (null == t) continue;
    let s = n[e],
      a = (0, _.getDropsPartnerGameNameByQuestId)(e);
    if (null == a) continue;
    let u = (0, _.getEligibilityByRunningGameDetection)(a),
      c = s.eligible && u,
      S = (0, _.getDropsExperiment)(a);
    if (null == S) continue;
    c && S.trackExposure({
      location: "ENTITLEMENT_GIFTS"
    });
    let E = !!((null == r ? void 0 : r.isStaff()) && S.getCurrentConfig({
      location: "076035_2"
    }, {
      autoTrackExposure: !1
    }).showUnenroll);
    if (!S.getCurrentConfig({
        location: "076035_3"
      }, {
        autoTrackExposure: !1
      }).dropsEnabled) continue;
    d = !0;
    let T = o()(t.endDate, C),
      f = o()();
    c && null == s.completed_at || null != s.enrolled_at && null == s.completed_at && s.eligible ? f < T && l.push({
      dropsQuestId: e,
      dropsStatus: s,
      showUnenroll: E,
      experiment: S
    }) : (null != s.code || null != s.completed_at) && f < o()(t.finalClaimDate, C) && i.push({
      dropsQuestId: e,
      dropsStatus: s,
      showUnenroll: E,
      experiment: S
    })
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
      let t = (0, _.getDropByQuestId)(e.dropsQuestId),
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
      let n = (0, _.getDropByQuestId)(e.dropsQuestId);
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