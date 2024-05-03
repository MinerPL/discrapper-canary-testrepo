"use strict";
i.r(t);
var a = i("735250"),
  n = i("470079"),
  l = i("286379"),
  s = i("692547"),
  o = i("465270"),
  r = i("914576"),
  c = i("481060"),
  d = i("442837"),
  u = i("797614"),
  m = i("706454"),
  A = i("626135"),
  _ = i("219230"),
  h = i("531441"),
  f = i("788080"),
  I = i("451284"),
  E = i("613734"),
  T = i("846488"),
  p = i("384725"),
  g = i("97568"),
  x = i("800530"),
  S = i("981631"),
  C = i("689938"),
  v = i("977656");
let L = e => {
    let {
      classificationTypeText: t,
      guildMetadata: i
    } = e, l = (0, _.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail"), s = n.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, a.jsx)("strong", {
          children: e
        }, t)
      };
      return l && null != i ? (null == i ? void 0 : i.member_type) === h.MemberType.OWNER ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
        ...e,
        guildName: null == i ? void 0 : i.name
      }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        ...e,
        guildName: null == i ? void 0 : i.name
      }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(e)
    }, [t, i, l]);
    return (0, a.jsx)("div", {
      className: v.classificationHeader,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/normal",
        children: s
      })
    })
  },
  N = e => {
    let {
      actions: t,
      classificationExpiration: i
    } = e, n = (0, d.useStateFromStores)([m.default], () => m.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == i ? null : (0, a.jsxs)("div", {
      className: v.classificationActionsTakenContainer,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, a.jsxs)("ul", {
        className: v.classificationActionsTakenList,
        children: [t.map(e => (0, a.jsx)(y, {
          action: e
        }, e.id)), null != i ? (0, a.jsx)("li", {
          className: v.classificationActionsTakenRow,
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-normal",
            children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format({
              expirationDate: i.toLocaleDateString(n)
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  y = e => {
    let {
      action: t
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.descriptions.map((e, t) => (0, a.jsx)("li", {
        className: v.classificationActionsTakenRow,
        children: (0, a.jsx)(c.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  F = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: i
    } = e;
    return (0, a.jsxs)(c.Anchor, {
      href: i,
      className: v.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, a.jsx)("div", {
        className: v.classificationPolicyCardIcon,
        children: (0, a.jsx)(r.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: v.classificationPolicyDescriptionContainer,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, a.jsx)("div", {
        className: v.classificationPolicyLinkIcon,
        children: (0, a.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  M = () => (0, a.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  D = e => (0, a.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, i) => (0, a.jsx)(c.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, i)
    })
  }),
  j = e => (0, a.jsx)("div", {
    className: v.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, a.jsx)(M, {}) : (0, a.jsx)(D, {
      appealLink: x.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  H = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: i,
      classificationTypeText: n,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, a.jsxs)("div", {
      className: v.classificationActionExplanationContainer,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, a.jsx)(c.Text, {
        className: v.guidelinesExplanation,
        variant: "text-sm/normal",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: i
        })
      }), (0, a.jsx)(F, {
        classificationTypeText: n,
        policyExplainerLink: l
      }), s]
    })
  };
t.default = e => {
  var t;
  let {
    classificationId: i,
    source: s,
    onError: o
  } = e, {
    classification: r,
    classificationRequestState: c,
    isAppealEligible: d,
    isDsaEligible: m,
    violationType: _
  } = (0, E.useSafetyHubClassification)(i), C = (0, I.useSafetyHubAccountStanding)(), y = null != r && null != r.flagged_content && r.flagged_content.length > 0, F = (0, T.useSafetyHubInitialized)();
  return (n.useEffect(() => {
    F && A.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: x.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: C.state,
      classification_ids: [Number(i)],
      source: s,
      is_violative_content_shown: y,
      is_dsa_eligible: m,
      violation_type: _
    })
  }, [F]), null == r && c === h.ClassificationRequestState.FAILED) ? (o(), null) : null == r ? null : (0, a.jsxs)("div", {
    className: v.classificationContainer,
    children: [(0, a.jsx)(L, {
      classificationTypeText: r.description,
      guildMetadata: null == r ? void 0 : r.guild_metadata
    }), (0, a.jsx)(g.ClassificationEvidence, {
      flaggedContent: null !== (t = r.flagged_content) && void 0 !== t ? t : []
    }), (0, a.jsx)(N, {
      actions: r.actions,
      classificationExpiration: (0, f.getClassificationExpiration)(r)
    }), (0, a.jsx)(H, {
      classificationTypeText: r.description,
      tosLink: x.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: x.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: r.explainer_link,
      appealComponent: (0, a.jsx)(j, {
        hasBeenAppealed: null != r.appeal_status,
        onLetUsKnowClick: () => {
          A.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: x.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: C.state,
            classification_ids: [Number(i)],
            source: s,
            is_violative_content_shown: y,
            is_dsa_eligible: m,
            violation_type: _
          }), d && (u.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), p.default.open(i))
        },
        isAppealEligible: d
      })
    })]
  })
}