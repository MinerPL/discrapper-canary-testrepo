s(47120), s(653041);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(913527),
  l = s.n(o),
  c = s(374470),
  d = s(399606),
  _ = s(481060),
  E = s(570140),
  u = s(37234),
  T = s(960359),
  I = s(853197),
  S = s(430492),
  N = s(688465),
  C = s(594174),
  m = s(55935),
  A = s(702512),
  h = s(689938),
  g = s(979031);
let O = 'YYYY-MM-DD HH:mm';

function p(e) {
  let {
drop: t,
enrolled: s,
completed: i
  } = e, r = a.useRef(null), o = e => {
let t = e.target;
(0, c.k)(t, HTMLAnchorElement) && (0, u.xf)();
  };
  (0, a.useEffect)(() => {
let e = r.current;
return null != e && e.addEventListener('click', o), () => {
  null != e && e.removeEventListener('click', o);
};
  }, []);
  let {
title: d,
endDate: S,
dropsQuestId: N,
assets: C,
articleUrl: m
  } = t, A = (0, I.EW)(N);
  if (null == A)
return null;
  let O = () => {
(0, T.RJ)(N).then(() => {
  E.Z.wait(async () => {
    await (0, T.R5)();
  });
});
  };
  return (0, n.jsxs)('div', {
className: g.dropContainer,
children: [
  (0, n.jsx)('div', {
    className: g.dropCard,
    children: (0, n.jsxs)('div', {
      className: g.mainPromotionCardContainer,
      children: [
        (0, n.jsxs)('div', {
          className: g.promotionCardLeftContainer,
          children: [
            (0, n.jsx)('div', {
              className: g.promotionIcon,
              children: (0, n.jsx)('img', {
                alt: '',
                src: C.iconSrc,
                className: g.promotionIconImage
              })
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(_.Heading, {
                  variant: 'heading-md/semibold',
                  children: d
                }),
                (0, n.jsx)(_.Text, {
                  variant: 'text-xs/medium',
                  color: 'text-normal',
                  className: g.availableUntil,
                  children: h.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({
                    endDate: l()(S, 'YYYY-MM-DD HH:mm').format('MMMM Do, YYYY')
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(_.Tooltip, {
          text: s && !i ? h.Z.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
          tooltipContentClassName: g.redeemTooltipContent,
          children: e => (0, n.jsx)(_.Button, {
            className: g.promotionCardButton,
            color: _.Button.Colors.BRAND,
            size: _.Button.Sizes.SMALL,
            onClick: O,
            disabled: s && !i,
            ...e,
            children: s ? h.Z.Messages.REDEEM : h.Z.Messages.DROPS_GIFT_INVENTORY_ENROLL
          })
        })
      ]
    })
  }),
  (0, n.jsxs)('div', {
    className: g.dropCriteria,
    children: [
      (0, n.jsx)('img', {
        alt: '',
        src: C.rewardSrc,
        className: g.dropRewardImage
      }),
      (0, n.jsx)('div', {
        ref: r,
        children: (0, n.jsx)(_.Text, {
          color: 'text-muted',
          variant: 'text-sm/normal',
          className: g.dropCriteriaText,
          children: A.messages.giftInfo()
        })
      }),
      (0, n.jsx)(_.Text, {
        color: 'text-muted',
        variant: 'text-sm/normal',
        className: g.dropLearnMore,
        children: h.Z.Messages.DROPS_LEARN_MORE.format({
          faqUrl: m
        })
      })
    ]
  })
]
  });
}

function R(e) {
  let {
drop: t,
code: s,
platform: i
  } = e, [o, c] = a.useState(!1), d = void 0 !== s, E = (0, m.vc)(l()(t.endDate), 'LL'), u = h.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({
endDate: E
  }), T = d ? h.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : h.Z.Messages.PROMOTION_CARD_ACTION_CLAIM, I = a.useCallback(() => c(!1), []);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)('div', {
    className: r()(g.skuCard, g.promotionCard),
    children: (0, n.jsxs)('div', {
      className: g.mainPromotionCardContainer,
      children: [
        (0, n.jsxs)('div', {
          className: g.promotionCardLeftContainer,
          children: [
            (0, n.jsx)('div', {
              className: g.promotionIcon,
              children: (0, n.jsx)('img', {
                alt: '',
                src: t.assets.iconSrc,
                className: g.promotionIconImage
              })
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(_.Heading, {
                  variant: 'heading-md/semibold',
                  children: t.title
                }),
                (0, n.jsx)(_.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  className: g.__invalid_promotionText,
                  children: u
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(_.Button, {
          color: _.Button.Colors.BRAND,
          size: _.Button.Sizes.SMALL,
          onClick: () => c(!0),
          children: T
        })
      ]
    })
  }),
  o && (0, n.jsx)(_.Modal, {
    renderModal: e => (0, n.jsx)(S.ZP, {
      ...e,
      onClose: I,
      code: s,
      drop: t,
      platform: i
    }),
    onCloseRequest: I
  })
]
  });
}
t.Z = function(e) {
  var t;
  let {
dropsOptedOut: s,
dropsStatuses: a
  } = e, i = [], r = [], o = (0, d.e7)([C.default], () => C.default.getCurrentUser()), c = !1;
  if (null == a)
return null;
  for (let e of Object.keys(a)) {
let t = (0, I.EW)(e);
if (null == t)
  continue;
let s = a[e],
  n = (0, I.x8)(e);
if (null == n)
  continue;
let d = (0, I.Xt)(n),
  _ = s.eligible && d,
  E = (0, I.A5)(n);
if (null == E)
  continue;
_ && E.trackExposure({
  location: 'ENTITLEMENT_GIFTS'
});
let u = !!((null == o ? void 0 : o.isStaff()) && E.getCurrentConfig({
  location: '076035_2'
}, {
  autoTrackExposure: !1
}).showUnenroll);
if (!E.getCurrentConfig({
    location: '076035_3'
  }, {
    autoTrackExposure: !1
  }).dropsEnabled)
  continue;
c = !0;
let T = l()(t.endDate, O),
  S = l()();
_ && null == s.completed_at || null != s.enrolled_at && null == s.completed_at && s.eligible ? S < T && i.push({
  dropsQuestId: e,
  dropsStatus: s,
  showUnenroll: u,
  experiment: E
}) : (null != s.code || null != s.completed_at) && S < l()(t.finalClaimDate, O) && r.push({
  dropsQuestId: e,
  dropsStatus: s,
  showUnenroll: u,
  experiment: E
});
  }
  let E = (0, n.jsxs)('div', {
className: g.dropsHeaderContainer,
children: [
  (0, n.jsx)(_.Heading, {
    variant: 'heading-md/semibold',
    children: h.Z.Messages.DROPS_GIFT_INVENTORY_TITLE
  }),
  (0, n.jsx)(N.Z, {
    className: g.betaTagIcon
  })
]
  });
  return c && 0 === i.length && 0 === r.length && s ? (0, n.jsxs)(_.FormSection, {
children: [
  E,
  (0, n.jsx)(_.FormDivider, {
    className: g.divider
  }),
  (0, n.jsx)('div', {
    className: g.dropsHelpText,
    children: h.Z.Messages.DROPS_READ_BLOG_TO_ENABLE.format({
      blogURL: A.n4
    })
  })
]
  }) : 0 === i.length && 0 === r.length ? null : (0, n.jsxs)(_.FormSection, {
children: [
  E,
  (0, n.jsx)(_.FormDivider, {
    className: g.divider
  }),
  i.map(e => {
    let t = (0, I.EW)(e.dropsQuestId),
      s = null != e.dropsStatus.enrolled_at,
      a = null != e.dropsStatus.completed_at;
    return null != t ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(p, {
          drop: {
            ...t
          },
          enrolled: s,
          completed: a
        }, t.dropsQuestId),
        e.showUnenroll && (0, n.jsx)(_.Button, {
          size: _.Button.Sizes.SMALL,
          onClick: () => (0, T.VT)(e.dropsQuestId),
          children: 'UNENROLL'
        })
      ]
    }) : null;
  }),
  r.map(e => {
    var t, s;
    let a = (0, I.EW)(e.dropsQuestId);
    return null != a ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(R, {
          drop: a,
          code: null !== (t = e.dropsStatus.code) && void 0 !== t ? t : void 0,
          platform: null !== (s = e.dropsStatus.platform) && void 0 !== s ? s : void 0
        }, e.dropsQuestId),
        e.showUnenroll && (0, n.jsx)(_.Button, {
          size: _.Button.Sizes.SMALL,
          onClick: () => (0, T.VT)(e.dropsQuestId),
          children: 'UNENROLL'
        })
      ]
    }) : null;
  }),
  'string' == typeof(null == o ? void 0 : o.id) && r.length > 0 ? (0, n.jsx)('div', {
    className: g.feedback,
    children: h.Z.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({
      feedbackURL: 'https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id='.concat(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : '')
    })
  }) : null
]
  });
};