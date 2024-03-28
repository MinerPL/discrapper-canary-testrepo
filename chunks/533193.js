"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("47120"), s("724458");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("895070"),
  u = s("322282"),
  c = s("790472"),
  S = s("442837"),
  E = s("846519"),
  T = s("730592"),
  _ = s("481060"),
  f = s("607070"),
  m = s("100527"),
  g = s("906732"),
  h = s("776980"),
  N = s("386346"),
  I = s("641826"),
  p = s("875667"),
  C = s("266983"),
  A = s("601469"),
  O = s("488269"),
  x = s("635869"),
  R = s("451478"),
  M = s("976644"),
  v = s("147507"),
  D = s("626135"),
  L = s("70956"),
  P = s("981631"),
  j = s("232700"),
  b = s("689938"),
  U = s("344979");

function y() {
  let [e, t] = i.useState(!1), s = (0, S.useStateFromStores)([R.default], () => R.default.isFocused()), a = (0, S.useStateFromStores)([f.default], () => f.default.useReducedMotion), [n, r] = i.useState(0), o = -1 === n, d = async e => {
    e.stopPropagation(), t(!0);
    try {
      await (0, h.openLootbox)()
    } finally {
      t(!1)
    }
  };
  return (0, l.jsxs)(_.Clickable, {
    className: U.headerContainer,
    onClick: o ? void 0 : () => {
      D.default.track(P.AnalyticEvents.EASTER_EGG_INTERACTED, {
        type: "packages_header_click",
        position: n
      }), n > 0 && (n + 1) % 5 == 0 ? r(-1) : r(n + 1)
    },
    children: [(0, l.jsx)(x.default, {
      className: U.headerBackground,
      pageMultiplier: 10
    }), (0, l.jsx)(_.Heading, {
      variant: "display-md",
      className: U.header,
      color: "always-white",
      children: b.default.Messages.PACKAGES
    }), (0, l.jsx)("div", {
      className: U.headerCTA,
      children: (0, l.jsxs)(M.default, {
        className: U.headerButton,
        innerClassName: U.innerButton,
        pauseAnimation: !s || a,
        onClick: d,
        size: _.ButtonSizes.SMALL,
        color: _.ButtonColors.CUSTOM,
        submitting: e,
        children: [(0, l.jsx)(C.default, {
          className: U.buttonIcon,
          color: _.tokens.colors.WHITE
        }), b.default.Messages.USER_SETTINGS_PACKAGES_HEADER_CTA]
      })
    }), o ? (0, l.jsx)("div", {
      className: U.headerEasterEgg,
      children: (0, l.jsx)(v.EasterEggAnimation, {
        position: v.EasterEggPosition.BOTTOM_LEFT,
        onAnimationComplete: () => {
          r(0)
        },
        size: 120
      })
    }) : null]
  })
}

function B(e) {
  let {
    icon: t,
    text: s,
    count: a,
    fetchState: n
  } = e;
  return (0, l.jsxs)("div", {
    className: U.stat,
    children: [(0, l.jsx)(t, {
      color: _.tokens.colors.TEXT_MUTED
    }), (0, l.jsx)(_.Text, {
      className: U.statText,
      variant: "text-xs/bold",
      color: "text-muted",
      children: s
    }), (0, l.jsx)(_.Text, {
      variant: "text-lg/bold",
      color: "text-primary",
      children: n === N.FetchState.FETCHED ? a.toLocaleString() : (0, l.jsx)(_.Spinner, {})
    })]
  })
}
let F = L.default.Millis.SECOND,
  G = 2 * L.default.Millis.SECOND;

function k() {
  let e = (0, j.getLootboxes)(),
    [t, s, a, n, r, o, d] = (0, S.useStateFromStoresArray)([N.default], () => [N.default.userDataFetchState, N.default.globalOpenedCountFetchState, N.default.openedItems, N.default.globalOpenedCount, N.default.lastGlobalOpenedCount, N.default.globalOpenedCountFetchTime, N.default.nextGlobalOpenedCountFetchDelay]),
    T = i.useMemo(() => Object.values(a).reduce((e, t) => e + t, 0), [a]),
    [_] = i.useState(() => new E.Timeout),
    [f, m] = i.useState(0),
    g = Math.floor((0, p.default)(r, n, f));
  return i.useEffect(() => {
    m(0)
  }, [n, r]), i.useEffect(() => (_.start((0, I.randomBetween)(F, G), () => {
    f < 1 && m(Math.min((Date.now() - o) / d, 1))
  }), () => _.stop()), [r, d, n, o, _, f]), (0, l.jsxs)("div", {
    className: U.stats,
    children: [(0, l.jsx)(B, {
      icon: c.TicketIcon,
      text: b.default.Messages.PACKAGES_PACKAGES_OPENED,
      count: T,
      fetchState: t
    }), (0, l.jsx)(B, {
      icon: C.default,
      text: b.default.Messages.PACKAGES_UNIQUE_PACKAGES_OPENED,
      count: b.default.Messages.PACKAGES_OPENED_OUT_OF.format({
        count: Object.keys(a).filter(e => a[e] > 0).length,
        total: Object.keys(e).length
      }),
      fetchState: t
    }), (0, l.jsx)(B, {
      icon: u.GlobeEarthIcon,
      text: b.default.Messages.PACKAGES_GLOBAL_PACKAGES_OPENED,
      count: g,
      fetchState: s
    })]
  })
}

function H() {
  let [e, t] = i.useState(!1), [a, n] = (0, S.useStateFromStoresArray)([N.default], () => [N.default.openedItems, N.default.redeemedPrize]), r = (0, j.getLootboxes)(), o = i.useMemo(() => Object.keys(a).length === Object.keys(r).length && !Object.values(a).some(e => 0 === e), [a, r]), d = async () => {
    t(!0);
    try {
      await (0, h.redeemPrize)()
    } finally {
      t(!1)
    }(0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("65907")]).then(s.bind(s, "283054"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  };
  return !n && o ? (0, l.jsxs)("div", {
    className: U.banner,
    children: [(0, l.jsx)(_.Text, {
      variant: "text-sm/bold",
      color: "always-white",
      children: b.default.Messages.USER_SETTINGS_PACKAGE_BANNER_DEFAULT
    }), (0, l.jsxs)(_.Button, {
      className: U.headerButton,
      innerClassName: U.innerButton,
      onClick: d,
      size: _.ButtonSizes.SMALL,
      color: _.ButtonColors.CUSTOM,
      submitting: e,
      children: [(0, l.jsx)(T.GiftIcon, {
        className: U.buttonIcon,
        color: _.tokens.colors.WHITE
      }), b.default.Messages.USER_SETTINGS_PACKAGE_BANNER_CTA]
    })]
  }) : null
}

function w() {
  let [e, t] = (0, S.useStateFromStoresArray)([N.default], () => [N.default.openedItems, N.default.userDataFetchState]), s = (0, j.getLootboxes)(), a = t === N.FetchState.FETCHED ? (0, l.jsx)("div", {
    className: U.inventoryItems,
    children: Object.keys(s).map((t, a) => {
      var n;
      let i = s[t];
      return (0, l.jsx)(O.default, {
        image: i.image,
        name: i.name,
        sound: i.sound,
        openedCount: null !== (n = null == e ? void 0 : e[t]) && void 0 !== n ? n : 0,
        index: a
      }, t)
    })
  }) : (0, l.jsx)(_.Spinner, {});
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(_.Heading, {
      variant: "heading-md/semibold",
      className: U.inventoryHeader,
      children: [b.default.Messages.USER_SETTINGS_PACKAGES_MAILBOX_HEADER, (0, l.jsx)(A.default, {
        className: U.inventoryHelpIcon
      })]
    }), (0, l.jsx)("div", {
      className: U.inventoryContainer,
      children: a
    })]
  })
}

function V(e) {
  let {
    children: t,
    className: s,
    onClick: a
  } = e;
  return (0, l.jsx)(_.Clickable, {
    className: o()(U.noTextToSpeechButton, s),
    onClick: a,
    children: t
  })
}

function Y() {
  let [e, t] = i.useState(1), [s, a] = i.useState(!1), [n] = i.useState(new E.Timeout), r = () => {
    D.default.track(P.AnalyticEvents.EASTER_EGG_INTERACTED, {
      type: "packages_no_text_to_speech",
      position: e
    }), a(!0), n.start((0, I.randomBetween)(200, 1e3), () => {
      t(e + 1), a(!1)
    })
  };
  return i.useEffect(() => n.stop(), [n]), (0, l.jsx)("div", {
    className: U.noTextToSpeech,
    children: s ? (0, l.jsx)(_.Spinner, {
      className: U.noTextToSpeechSpinner
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(_.Text, {
        variant: "text-sm/bold",
        children: (() => {
          switch (e) {
            case 1:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_1;
            case 2:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2;
            case 3:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3;
            case 4:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_4;
            case 5:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_5;
            case 6:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6;
            case 7:
              return b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_7
          }
        })()
      }), (() => {
        switch (e) {
          case 1:
          case 4:
          case 5:
            return [b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_YES, b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_NO];
          case 2:
            return [b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_1, b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_2];
          case 3:
            return [b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_1, b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_2];
          case 6:
            return [b.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6_ANSWER_1];
          case 7:
            return []
        }
      })().map((e, t) => (0, l.jsx)(V, {
        className: 0 === t ? U.noTextToSpeechButtonFirst : null,
        onClick: r,
        children: e
      }, t))]
    })
  })
}

function K() {
  return (0, l.jsxs)("div", {
    className: U.footer,
    children: [(0, l.jsx)(d.ClipsIcon, {}), (0, l.jsx)(_.Text, {
      variant: "text-xs/bold",
      color: "text-muted",
      children: b.default.Messages.PACKAGES_FOOTER_NOTE.format({
        url: j.LOOTBOX_VIDEO_URL
      })
    })]
  })
}

function W() {
  let {
    analyticsLocations: e
  } = (0, g.default)(m.default.PACKAGES), t = (0, S.useStateFromStores)([N.default], () => N.default.nextGlobalOpenedCountFetchDelay), [s] = i.useState(() => new E.Timeout);
  return i.useEffect(() => {
    (0, h.fetchUserLootboxData)()
  }, []), i.useEffect(() => (s.start(t, h.fetchCountStat), () => s.stop()), [t, s]), (0, l.jsxs)(g.AnalyticsLocationProvider, {
    value: e,
    children: [(0, l.jsx)(y, {}), (0, l.jsx)(k, {}), (0, l.jsx)(H, {}), (0, l.jsx)(w, {}), (0, l.jsx)(Y, {}), (0, l.jsx)(K, {})]
  })
}(n = a || (a = {}))[n.QUESTION_1 = 1] = "QUESTION_1", n[n.QUESTION_2 = 2] = "QUESTION_2", n[n.QUESTION_3 = 3] = "QUESTION_3", n[n.QUESTION_4 = 4] = "QUESTION_4", n[n.QUESTION_5 = 5] = "QUESTION_5", n[n.QUESTION_6 = 6] = "QUESTION_6", n[n.QUESTION_7 = 7] = "QUESTION_7"