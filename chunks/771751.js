"use strict";
t.r(r), t.d(r, {
  default: function() {
    return A
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("544891"),
  s = t("524437"),
  c = t("481060"),
  d = t("937579"),
  u = t("675478"),
  h = t("295226"),
  p = t("757206"),
  m = t("525241"),
  g = t("740727"),
  f = t("572004"),
  b = t("74538"),
  y = t("246992"),
  x = t("981631"),
  k = t("474936"),
  v = t("779869"),
  C = t("534477");
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
  } = e, [y, x] = n.useState(!1), [v, S] = n.useState(!1), [j, N] = n.useState(!1), [E, L] = n.useState(!1);
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
    redeemed_at: P,
    trial_id: R,
    subscription_trial: O
  } = s, M = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === R
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", I = null != A, B = null != A && new Date(A).getTime() < Date.now(), D = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, G = async () => {
    N(!0), I ? await w(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), N(!1)
  };
  n.useEffect(() => {
    if (y) {
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
  }, [y, v]);
  let H = "Active";
  return I && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: o()(C.card, D ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: o()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: M
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          N(!0), await T(_, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: o()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), y ? (0, a.jsx)(m.default, {
        className: o()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(R), S(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", R]
      }), v ? (0, a.jsx)(m.default, {
        className: o()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, b.formatIntervalDuration)({
          intervalType: null !== (i = null == O ? void 0 : O.interval) && void 0 !== i ? i : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (l = null == O ? void 0 : O.interval_count) && void 0 !== l ? l : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: G,
        className: o()(C.badge, C.clickable, {
          [C.acked]: I,
          [C.expired]: B
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != P && (0, a.jsx)("div", {
        className: o()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o()(C.loadingContainer, {
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
  } = e, [u, h] = n.useState(!1), [b, y] = n.useState(!1), [x, k] = n.useState(!1), [v, S] = n.useState(!1);
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
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", P = null != N, R = null != N && new Date(N).getTime() < Date.now(), O = async () => {
    k(!0), P ? await w(j, "discount") : await (0, d.acknowledgeUserOffer)(void 0, i), s(), k(!1)
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
    if (b) {
      let e = setTimeout(() => {
        y(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, b]);
  let M = "Active";
  return R && (M = "Expired"), P && (M = "Acknowledged"), (0, a.jsxs)("div", {
    className: o()(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: o()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: A
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await T(j, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: o()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(j), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", j]
      }), u ? (0, a.jsx)(m.default, {
        className: o()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: o()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(L), y(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", L]
      }), b ? (0, a.jsx)(m.default, {
        className: o()(C.icon, C.noMargin)
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
        onClick: O,
        className: o()(C.badge, C.clickable, {
          [C.acked]: P,
          [C.expired]: R
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === M ? void 0 : "always-white",
          children: M
        })
      }), null != E && (0, a.jsx)("div", {
        className: o()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o()(C.loadingContainer, {
        [C.isLoading]: x || v
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function A() {
  let [e, r] = n.useState([]), [t, i] = n.useState([]), [l, p] = n.useState(), [m, g] = n.useState(), [f, b] = n.useState([]), [x, k] = n.useState([]), [T, w] = n.useState(!0);
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
      b(e.trial.sort((e, r) => e.id.localeCompare(r.id))), k(e.discount.sort((e, r) => e.id.localeCompare(r.id)))
    }))
  }, [T]);
  let A = async () => {
    null != l && (await j(l, "trial"), w(!0))
  }, P = async () => {
    null != m && (await j(m, "discount"), w(!0))
  }, R = async () => {
    await E(), w(!0)
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: o()(v.panel),
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
            onClick: R,
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
            popoutLayerContext: y.devToolsLayerContext
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
            popoutLayerContext: y.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: P,
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