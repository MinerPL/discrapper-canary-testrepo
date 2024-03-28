"use strict";
a.r(s), a("47120");
var t = a("735250"),
  l = a("470079"),
  i = a("442837"),
  r = a("481060"),
  d = a("367907"),
  n = a("434404"),
  o = a("999382"),
  c = a("416162"),
  E = a("153124"),
  u = a("296386"),
  S = a("919947"),
  R = a("506491"),
  m = a("957783"),
  _ = a("753583"),
  x = a("219369"),
  C = a("731455"),
  p = a("981631"),
  I = a("689938"),
  g = a("190500"),
  T = a("438825");
s.default = e => {
  let {
    transitionState: s,
    onClose: h
  } = e, {
    guild: v,
    guildMetadata: f
  } = (0, i.useStateFromStoresObject)([o.default], () => o.default.getProps()), D = (0, E.useUID)(), [N, O] = l.useState(!1), [A, M] = l.useState(0), [V, j] = l.useState(!1);
  if (l.useEffect(() => {
      d.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
        type: p.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
      })
    }, []), null == v) return null;
  let y = (0, t.jsx)(R.default, {
      guild: v,
      headerId: D
    }),
    L = (0, t.jsx)(S.default, {
      guild: v,
      guildMetadata: f,
      headerId: D
    }),
    k = (0, t.jsx)(_.default, {
      guild: v,
      guildMetadata: f,
      headerId: D
    }),
    Y = (0, t.jsx)(m.default, {
      guild: v,
      headerId: D,
      onAgreedChange: j
    }),
    G = (0, t.jsx)("img", {
      alt: "",
      src: T,
      className: g.footerImage,
      width: 240
    }),
    b = async () => {
      if (0 === A) {
        O(!0);
        try {
          await n.default.saveGuild(v.id, {
            description: v.description
          }, {
            isForDiscovery: !0,
            throwErr: !0
          }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.DESCRIPTION, x.DiscoverySetupModalSteps.CATEGORIES, v.id)
        } catch (e) {}
      } else if (1 === A) M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.CATEGORIES, x.DiscoverySetupModalSteps.TAGS, v.id);
      else if (2 === A) {
        O(!0);
        try {
          await (0, u.saveGuildMetadata)({
            guildId: v.id,
            primaryCategoryId: f.primaryCategoryId,
            keywords: f.keywords,
            emojiDiscoverabilityEnabled: f.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: f.partnerActionedTimestamp,
            partnerApplicationTimestamp: f.partnerApplicationTimestamp,
            isPublished: f.isPublished,
            reasonsToJoin: f.reasonsToJoin,
            socialLinks: f.socialLinks,
            about: f.about
          }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.TAGS, x.DiscoverySetupModalSteps.AGREE_TO_RULES, v.id)
        } catch (e) {}
      }
      O(!1)
    }, P = [{
      modalContent: y,
      disableNextStep: null == v.description,
      overviewTitle: I.default.Messages.SERVER_DISCOVERY_DESCRIPTION
    }, {
      modalContent: L,
      disableNextStep: f.primaryCategoryId === C.DEFAULT_DISCOVERY_CATEGORY_ID || null == f.primaryCategoryId,
      overviewTitle: I.default.Messages.SERVER_DISCOVERY_CATEGORY
    }, {
      modalContent: k,
      disableNextStep: 0 === f.keywords.length,
      overviewTitle: I.default.Messages.SERVER_DISCOVERY_TAGS
    }, {
      modalContent: Y,
      disableNextStep: !V,
      overviewTitle: I.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
    }];
  return (0, t.jsx)(c.default, {
    stepData: P,
    title: I.default.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
    transitionState: s,
    onClose: h,
    completeButtonText: I.default.Messages.ALL_DONE,
    onNextPressed: b,
    onPrevPressed: () => {
      M(A - 1)
    },
    forceStep: A,
    onComplete: () => {
      let e = v.features;
      !v.hasFeature(p.GuildFeatures.DISCOVERABLE) && e.add(p.GuildFeatures.DISCOVERABLE), n.default.saveGuild(v.id, {
        features: e,
        description: v.description
      }), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("89069")]).then(a.bind(a, "646364"));
        return s => (0, t.jsx)(e, {
          ...s,
          guild: v
        })
      })
    },
    overviewFooter: G,
    submitting: N,
    sequencerClassName: g.container
  })
}