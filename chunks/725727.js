"use strict";
n.d(t, {
  YO: function() {
    return S
  },
  lG: function() {
    return h
  },
  mq: function() {
    return f
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(570140),
  o = n(594174),
  a = n(295226),
  l = n(74538),
  u = n(775412),
  _ = n(163684),
  d = n(518638),
  c = n(748770),
  E = n(1844),
  I = n(474936);

function T() {
  let e = (0, r.Wu)([E.Z], () => E.Z.outboundPromotions),
    t = (0, r.e7)([E.Z], () => E.Z.consumedInboundPromotionId);
  return i.useMemo(() => e.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  }), [e, t])
}

function h() {
  let e = (0, r.e7)([E.Z], () => E.Z.lastFetchedActivePromotions),
    t = T(),
    n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    h = (0, u._O)(),
    S = (0, r.e7)([a.Z], () => a.Z.hasAnyUnexpiredOffer()),
    [f, N] = i.useState(!1),
    [A, m] = i.useState([]);
  i.useEffect(() => {
    null != e && s.Z.wait(() => c.ZP.markOutboundPromotionsSeen())
  }, [e]);
  let O = i.useCallback(e => {
      m(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    R = l.ZP.isPremium(n),
    C = _.g.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: !R,
      disable: R
    }).enabled || l.ZP.isPremiumExactly(n, I.p9.TIER_2);
  i.useEffect(() => {
    s.Z.wait(() => {
      C && null == e && c.ZP.fetchActiveOutboundPromotions()
    })
  }, [e, C]), i.useEffect(() => {
    s.Z.wait(() => {
      (0, d.t8)().then(e => {
        m(e), N(!0)
      }).catch(() => {
        m([]), N(!0)
      })
    })
  }, []);
  let p = {};
  for (let {
      code: e,
      promotion: t
    }
    of A) p[t.id] = e;
  let g = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    L = A.filter(e => {
      let {
        promotion: t
      } = e;
      return !g.has(t.id)
    });
  return {
    promotionsLoaded: f && (!C || null != e),
    activeOutboundPromotions: t.filter(e => (0, d.ZC)(e) && (!(h || S) || (0, d.Qf)(e, p))),
    claimedEndedOutboundPromotions: L.filter(e => (0, d.ZC)(e.promotion)),
    claimedOutboundPromotionCodeMap: p,
    addClaimedOutboundPromotionCode: O
  }
}

function S() {
  let e = (0, r.e7)([E.Z], () => E.Z.lastSeenOutboundPromotionStartDate),
    t = (0, u._O)(),
    n = (0, r.e7)([a.Z], () => a.Z.hasAnyUnexpiredOffer()),
    s = t || n,
    o = T();
  return i.useMemo(() => {
    if (null == e) return s ? o.filter(e => (0, d.Nw)(e)) : o;
    let t = o.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    });
    return s ? t.filter(e => (0, d.Nw)(e)) : t
  }, [o, e, s]).filter(e => (0, d.ZC)(e))
}

function f() {
  return {
    promotion: (0, r.e7)([E.Z], () => E.Z.bogoPromotion)
  }
}