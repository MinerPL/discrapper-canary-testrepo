"use strict";
t.r(r), t.d(r, {
  default: function() {
    return A
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("872717"),
  s = t("151426"),
  c = t("77078"),
  d = t("456015"),
  u = t("872173"),
  h = t("340412"),
  p = t("413709"),
  m = t("830031"),
  g = t("228220"),
  f = t("306160"),
  y = t("719923"),
  b = t("811199"),
  x = t("49111"),
  k = t("646718"),
  v = t("699412"),
  C = t("961295");
let S = async () => {
  try {
    let {
      body: e
    } = await l.HTTP.get({
      url: x.Endpoints.USER_OFFER_IDS
    });
    return e
  } catch (e) {
    return []
  }
}, j = async (e, r) => {
  try {
    await l.HTTP.post({
      url: x.Endpoints.CREATE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, T = async (e, r) => {
  try {
    await l.HTTP.del({
      url: x.Endpoints.DELETE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, w = async (e, r) => {
  try {
    await l.HTTP.post({
      url: x.Endpoints.UNACK_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, N = async () => {
  try {
    let {
      body: e
    } = await l.HTTP.get({
      url: x.Endpoints.USER_OFFERS
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, E = async () => {
  try {
    await l.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function L(e) {
  var r, t, i, l;
  let {
    offer: s,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = n.useState(!1), [v, S] = n.useState(!1), [j, N] = n.useState(!1), [E, L] = n.useState(!1);
  n.useEffect(() => {
    j && L(!0);
    let e = setTimeout(() => {
      L(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [j]);
  let {
    id: _,
    expires_at: A,
    redeemed_at: R,
    trial_id: P,
    subscription_trial: M
  } = s, O = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === P
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", I = null != A, B = null != A && new Date(A).getTime() < Date.now(), D = (null == M ? void 0 : M.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, G = async () => {
    N(!0), I ? await w(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), N(!1)
  };
  n.useEffect(() => {
    if (b) {
      let e = setTimeout(() => {
        x(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (v) {
      let e = setTimeout(() => {
        S(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, v]);
  let H = "Active";
  return I && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: o(C.card, D ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: o(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: O
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          N(!0), await T(_, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: o(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), b ? (0, a.jsx)(m.default, {
        className: o(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(P), S(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", P]
      }), v ? (0, a.jsx)(m.default, {
        className: o(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (i = null == M ? void 0 : M.interval) && void 0 !== i ? i : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (l = null == M ? void 0 : M.interval_count) && void 0 !== l ? l : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: G,
        className: o(C.badge, C.clickable, {
          [C.acked]: I,
          [C.expired]: B
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != R && (0, a.jsx)("div", {
        className: o(C.badge, C.badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o(C.loadingContainer, {
        [C.isLoading]: j || E
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function _(e) {
  var r, t;
  let {
    offer: i,
    offerOptions: l,
    forceRefetch: s
  } = e, [u, h] = n.useState(!1), [y, b] = n.useState(!1), [x, k] = n.useState(!1), [v, S] = n.useState(!1);
  n.useEffect(() => {
    x && S(!0);
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [x]);
  let {
    id: j,
    expires_at: N,
    applied_at: E,
    discount_id: L,
    discount: _
  } = i, A = null !== (t = null === (r = l.find(e => {
    let {
      value: r
    } = e;
    return r === L
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", R = null != N, P = null != N && new Date(N).getTime() < Date.now(), M = async () => {
    k(!0), R ? await w(j, "discount") : await (0, d.acknowledgeUserOffer)(void 0, i), s(), k(!1)
  };
  n.useEffect(() => {
    if (u) {
      let e = setTimeout(() => {
        h(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (y) {
      let e = setTimeout(() => {
        b(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, y]);
  let O = "Active";
  return P && (O = "Expired"), R && (O = "Acknowledged"), (0, a.jsxs)("div", {
    className: o(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: o(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: A
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await T(j, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: o(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(j), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", j]
      }), u ? (0, a.jsx)(m.default, {
        className: o(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(L), b(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", L]
      }), y ? (0, a.jsx)(m.default, {
        className: o(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [_.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: M,
        className: o(C.badge, C.clickable, {
          [C.acked]: R,
          [C.expired]: P
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === O ? void 0 : "always-white",
          children: O
        })
      }), null != E && (0, a.jsx)("div", {
        className: o(C.badge, C.badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o(C.loadingContainer, {
        [C.isLoading]: x || v
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function A() {
  let [e, r] = n.useState([]), [t, i] = n.useState([]), [l, p] = n.useState(), [m, g] = n.useState(), [f, y] = n.useState([]), [x, k] = n.useState([]), [T, w] = n.useState(!0);
  n.useEffect(() => {
    (0 === e.length || 0 === t.length || T) && S().then(e => {
      let t = Object.keys(e.trial).map(r => ({
          label: r,
          value: e.trial[r]
        })),
        a = Object.keys(e.discount).map(r => ({
          label: r,
          value: e.discount[r]
        }));
      r(t), i(a), null == l && p(t[0].value), null == m && g(a[0].value)
    })
  }, [e, t, l, m, T]), n.useEffect(() => {
    T && (w(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), N().then(e => {
      let r = e.trial.sort((e, r) => e.id.localeCompare(r.id));
      y(r);
      let t = e.discount.sort((e, r) => e.id.localeCompare(r.id));
      k(t)
    }))
  }, [T]);
  let A = async () => {
    null != l && (await j(l, "trial"), w(!0))
  }, R = async () => {
    null != m && (await j(m, "discount"), w(!0))
  }, P = async () => {
    await E(), w(!0)
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: o(v.panel),
    children: (0, a.jsxs)("div", {
      className: C.panelInner,
      children: [(0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: C.buttons,
          children: [(0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: P,
            children: "Clear all User Offers"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => (0, u.removeDismissedContent)(s.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => w(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: C.input,
            options: e,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: A,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: C.input,
            options: t,
            isSelected: e => m === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: R,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(r => (0, a.jsx)(L, {
          offer: r,
          offerOptions: e,
          forceRefetch: () => w(!0)
        }, r.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(_, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => w(!0)
        }, e.id))]
      })]
    })
  })
}