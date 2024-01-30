"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("432710"),
  a = n("669491"),
  o = n("748802"),
  s = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("132206"),
  p = n("698609"),
  S = n("57242"),
  I = n("380676"),
  T = n("170213"),
  h = n("49111"),
  C = n("782340"),
  g = n("383496");
let A = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, l = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: g.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: l && null != n ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
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
  v = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: g.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
      }), (0, i.jsx)("ul", {
        className: g.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(m, {
          action: e
        }, e.id))
      })]
    })
  },
  m = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: g.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  N = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: g.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: g.classificationPolicyCardIcon,
        children: (0, i.jsx)(s.ShieldIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: g.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: g.classificationPolicyLinkIcon,
        children: (0, i.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  L = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  U = e => (0, i.jsx)(u.Text, {
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
  R = e => (0, i.jsx)("div", {
    className: g.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(L, {}) : (0, i.jsx)(U, {
      appealLink: T.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  y = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: l,
      policyExplainerLink: r,
      appealComponent: a
    } = e;
    return (0, i.jsxs)("div", {
      className: g.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
      }), (0, i.jsx)(u.Text, {
        className: g.guidelinesExplanation,
        variant: "text-sm/normal",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(N, {
        classificationTypeText: l,
        policyExplainerLink: r
      }), a]
    })
  };
var P = e => {
  var t, n;
  let {
    classificationId: a,
    source: o,
    onError: s
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: C,
    isDsaEligible: m
  } = (0, p.useSafetyHubClassification)(a), N = (0, _.useSafetyHubAccountStanding)(), L = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (l.useEffect(() => {
    d.default.track(h.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: T.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: N.state,
      classification_ids: [Number(a)],
      source: o,
      is_violative_content_shown: L,
      is_dsa_eligible: m
    })
  }, []), null == u && f === E.ClassificationRequestState.FAILED) ? (s(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: g.classificationContainer,
    children: [(0, i.jsx)(A, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), L && null == u.guild_metadata && (0, i.jsx)(I.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(v, {
      actions: u.actions
    }), (0, i.jsx)(y, {
      classificationTypeText: u.description,
      tosLink: T.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: T.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(R, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(h.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: T.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: N.state,
            classification_ids: [Number(a)],
            source: o,
            is_violative_content_shown: L,
            is_dsa_eligible: m
          }), C && (c.default.increment({
            name: r.MetricEvents.APPEAL_INGESTION_VIEW
          }), S.default.open(a))
        },
        isAppealEligible: C
      })
    })]
  })
}