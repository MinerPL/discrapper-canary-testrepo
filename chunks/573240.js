"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("432710"),
  s = n("669491"),
  r = n("748802"),
  o = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("132206"),
  h = n("698609"),
  S = n("422671"),
  m = n("57242"),
  p = n("380676"),
  v = n("170213"),
  A = n("49111"),
  C = n("782340"),
  T = n("765516");
let g = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: T.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: a && null != n ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  I = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: T.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: T.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(N, {
          action: e
        }, e.id))
      })]
    })
  },
  N = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: T.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  x = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: T.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: T.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: T.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: T.classificationPolicyLinkIcon,
        children: (0, i.jsx)(r.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  y = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  b = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  L = e => (0, i.jsx)("div", {
    className: T.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(y, {}) : (0, i.jsx)(b, {
      appealLink: v.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  R = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, i.jsxs)("div", {
      className: T.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(u.Text, {
        className: T.guidelinesExplanation,
        variant: "text-sm/normal",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(x, {
        classificationTypeText: a,
        policyExplainerLink: l
      }), s]
    })
  };
var M = e => {
  var t, n;
  let {
    classificationId: s,
    source: r,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: C,
    isDsaEligible: N
  } = (0, h.useSafetyHubClassification)(s), x = (0, _.useSafetyHubAccountStanding)(), y = null != u && null != u.flagged_content && u.flagged_content.length > 0, b = (0, S.useSafetyHubInitialized)();
  return (a.useEffect(() => {
    b && d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: v.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: x.state,
      classification_ids: [Number(s)],
      source: r,
      is_violative_content_shown: y,
      is_dsa_eligible: N
    })
  }, [b]), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: T.classificationContainer,
    children: [(0, i.jsx)(g, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), (0, i.jsx)(p.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : [],
      actions: u.actions,
      guildMetadata: u.guild_metadata
    }), (0, i.jsx)(I, {
      actions: u.actions
    }), (0, i.jsx)(R, {
      classificationTypeText: u.description,
      tosLink: v.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: v.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(L, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: v.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: x.state,
            classification_ids: [Number(s)],
            source: r,
            is_violative_content_shown: y,
            is_dsa_eligible: N
          }), C && (c.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), m.default.open(s))
        },
        isAppealEligible: C
      })
    })]
  })
}