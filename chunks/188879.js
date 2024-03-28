"use strict";
i.r(t);
var a = i("735250"),
  n = i("470079"),
  l = i("286379"),
  s = i("692547"),
  o = i("465270"),
  c = i("914576"),
  d = i("481060"),
  r = i("797614"),
  u = i("626135"),
  m = i("219230"),
  _ = i("531441"),
  f = i("451284"),
  A = i("613734"),
  h = i("846488"),
  E = i("384725"),
  I = i("97568"),
  T = i("800530"),
  p = i("981631"),
  g = i("689938"),
  x = i("78275");
let v = e => {
    let {
      classificationTypeText: t,
      guildName: i
    } = e, n = (0, m.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, a.jsx)("div", {
      className: x.classificationHeader,
      children: (0, a.jsx)(d.Heading, {
        variant: "heading-xl/normal",
        children: n && null != i ? g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: i,
          classification_type: t,
          classificationHook: (e, t) => (0, a.jsx)("strong", {
            children: e
          }, t)
        }) : g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format({
          classification_type: t,
          classificationHook: (e, t) => (0, a.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  C = e => {
    let {
      actions: t
    } = e;
    return 0 === t.filter(e => e.descriptions.length > 0).length ? null : (0, a.jsxs)("div", {
      className: x.classificationActionsTakenContainer,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, a.jsx)("ul", {
        className: x.classificationActionsTakenList,
        children: t.map(e => (0, a.jsx)(S, {
          action: e
        }, e.id))
      })]
    })
  },
  S = e => {
    let {
      action: t
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.descriptions.map((e, t) => (0, a.jsx)("li", {
        className: x.classificationActionsTakenRow,
        children: (0, a.jsx)(d.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  L = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: i
    } = e;
    return (0, a.jsxs)(d.Anchor, {
      href: i,
      className: x.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, a.jsx)("div", {
        className: x.classificationPolicyCardIcon,
        children: (0, a.jsx)(c.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: x.classificationPolicyDescriptionContainer,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, a.jsx)("div", {
        className: x.classificationPolicyLinkIcon,
        children: (0, a.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  N = () => (0, a.jsx)(d.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  D = e => (0, a.jsx)(d.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, i) => (0, a.jsx)(d.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, i)
    })
  }),
  y = e => (0, a.jsx)("div", {
    className: x.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, a.jsx)(N, {}) : (0, a.jsx)(D, {
      appealLink: T.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  j = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: i,
      classificationTypeText: n,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, a.jsxs)("div", {
      className: x.classificationActionExplanationContainer,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, a.jsx)(d.Text, {
        className: x.guidelinesExplanation,
        variant: "text-sm/normal",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: i
        })
      }), (0, a.jsx)(L, {
        classificationTypeText: n,
        policyExplainerLink: l
      }), s]
    })
  };
t.default = e => {
  var t, i;
  let {
    classificationId: s,
    source: o,
    onError: c
  } = e, {
    classification: d,
    classificationRequestState: m,
    isAppealEligible: g,
    isDsaEligible: S
  } = (0, A.useSafetyHubClassification)(s), L = (0, f.useSafetyHubAccountStanding)(), N = null != d && null != d.flagged_content && d.flagged_content.length > 0, D = (0, h.useSafetyHubInitialized)();
  return (n.useEffect(() => {
    D && u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: T.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: L.state,
      classification_ids: [Number(s)],
      source: o,
      is_violative_content_shown: N,
      is_dsa_eligible: S
    })
  }, [D]), null == d && m === _.ClassificationRequestState.FAILED) ? (c(), null) : null == d ? null : (0, a.jsxs)("div", {
    className: x.classificationContainer,
    children: [(0, a.jsx)(v, {
      classificationTypeText: d.description,
      guildName: null == d ? void 0 : null === (t = d.guild_metadata) || void 0 === t ? void 0 : t.name
    }), (0, a.jsx)(I.ClassificationEvidence, {
      flaggedContent: null !== (i = d.flagged_content) && void 0 !== i ? i : [],
      actions: d.actions,
      guildMetadata: d.guild_metadata
    }), (0, a.jsx)(C, {
      actions: d.actions
    }), (0, a.jsx)(j, {
      classificationTypeText: d.description,
      tosLink: T.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: T.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: d.explainer_link,
      appealComponent: (0, a.jsx)(y, {
        hasBeenAppealed: null != d.appeal_status,
        onLetUsKnowClick: () => {
          u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: T.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: L.state,
            classification_ids: [Number(s)],
            source: o,
            is_violative_content_shown: N,
            is_dsa_eligible: S
          }), g && (r.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), E.default.open(s))
        },
        isAppealEligible: g
      })
    })]
  })
}