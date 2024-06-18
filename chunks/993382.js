"use strict";
a.r(s), a(47120);
var t = a(735250),
  i = a(470079),
  r = a(442837),
  l = a(481060),
  n = a(367907),
  o = a(434404),
  d = a(999382),
  c = a(416162),
  E = a(153124),
  R = a(296386),
  S = a(919947),
  m = a(506491),
  x = a(957783),
  _ = a(753583),
  u = a(219369),
  h = a(731455),
  I = a(981631),
  C = a(689938),
  g = a(353964),
  N = a(438825);
s.default = e => {
  let {
    transitionState: s,
    onClose: T
  } = e, {
    guild: p,
    guildMetadata: v
  } = (0, r.cj)([d.Z], () => d.Z.getProps()), O = (0, E.Dt)(), [D, j] = i.useState(!1), [V, A] = i.useState(0), [M, L] = i.useState(!1);
  if (i.useEffect(() => {
      n.ZP.trackWithMetadata(I.rMx.OPEN_MODAL, {
        type: I.jXE.DISCOVERY_SETUP_SUCCESS_MODAL
      })
    }, []), null == p) return null;
  let Z = (0, t.jsx)(m.Z, {
      guild: p,
      headerId: O
    }),
    b = (0, t.jsx)(S.Z, {
      guild: p,
      guildMetadata: v,
      headerId: O
    }),
    y = (0, t.jsx)(_.Z, {
      guild: p,
      guildMetadata: v,
      headerId: O
    }),
    P = (0, t.jsx)(x.Z, {
      guild: p,
      headerId: O,
      onAgreedChange: L
    }),
    f = (0, t.jsx)("img", {
      alt: "",
      src: N,
      className: g.footerImage,
      width: 240
    }),
    Y = async () => {
      if (0 === V) {
        j(!0);
        try {
          await o.Z.saveGuild(p.id, {
            description: p.description
          }, {
            isForDiscovery: !0,
            throwErr: !0
          }), A(V + 1), (0, u.Nx)(u.tK.DESCRIPTION, u.tK.CATEGORIES, p.id)
        } catch (e) {}
      } else if (1 === V) A(V + 1), (0, u.Nx)(u.tK.CATEGORIES, u.tK.TAGS, p.id);
      else if (2 === V) {
        j(!0);
        try {
          await (0, R.Vv)({
            guildId: p.id,
            primaryCategoryId: v.primaryCategoryId,
            keywords: v.keywords,
            emojiDiscoverabilityEnabled: v.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: v.partnerActionedTimestamp,
            partnerApplicationTimestamp: v.partnerApplicationTimestamp,
            isPublished: v.isPublished,
            reasonsToJoin: v.reasonsToJoin,
            socialLinks: v.socialLinks,
            about: v.about
          }), A(V + 1), (0, u.Nx)(u.tK.TAGS, u.tK.AGREE_TO_RULES, p.id)
        } catch (e) {}
      }
      j(!1)
    }, G = [{
      modalContent: Z,
      disableNextStep: null == p.description,
      overviewTitle: C.Z.Messages.SERVER_DISCOVERY_DESCRIPTION
    }, {
      modalContent: b,
      disableNextStep: v.primaryCategoryId === h.o3 || null == v.primaryCategoryId,
      overviewTitle: C.Z.Messages.SERVER_DISCOVERY_CATEGORY
    }, {
      modalContent: y,
      disableNextStep: 0 === v.keywords.length,
      overviewTitle: C.Z.Messages.SERVER_DISCOVERY_TAGS
    }, {
      modalContent: P,
      disableNextStep: !M,
      overviewTitle: C.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
    }];
  return (0, t.jsx)(c.Z, {
    stepData: G,
    title: C.Z.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
    transitionState: s,
    onClose: T,
    completeButtonText: C.Z.Messages.ALL_DONE,
    onNextPressed: Y,
    onPrevPressed: () => {
      A(V - 1)
    },
    forceStep: V,
    onComplete: () => {
      let e = p.features;
      !p.hasFeature(I.oNc.DISCOVERABLE) && e.add(I.oNc.DISCOVERABLE), o.Z.saveGuild(p.id, {
        features: e,
        description: p.description
      }), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("89069")]).then(a.bind(a, 646364));
        return s => (0, t.jsx)(e, {
          ...s,
          guild: p
        })
      })
    },
    overviewFooter: f,
    submitting: D,
    sequencerClassName: g.container
  })
}