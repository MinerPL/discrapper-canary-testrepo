"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("222007"), s("808653");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("166432"),
  u = s("768961"),
  c = s("300036"),
  S = s("446674"),
  E = s("862337"),
  T = s("225389"),
  f = s("998460"),
  _ = s("77078"),
  m = s("206230"),
  g = s("812204"),
  h = s("685665"),
  N = s("841026"),
  I = s("204062"),
  p = s("976028"),
  C = s("4452"),
  A = s("724001"),
  O = s("193694"),
  x = s("508577"),
  R = s("638131"),
  M = s("471671"),
  D = s("181114"),
  v = s("703712"),
  L = s("599110"),
  P = s("718517"),
  j = s("49111"),
  b = s("630615"),
  U = s("782340"),
  y = s("449617");

function B() {
  let e = (0, S.useStateFromStores)([M.default], () => M.default.isFocused()),
    t = (0, S.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    [s, a] = i.useState(0),
    n = -1 === s;
  return (0, l.jsxs)(_.Clickable, {
    className: y.headerContainer,
    onClick: n ? void 0 : () => {
      L.default.track(j.AnalyticEvents.EASTER_EGG_INTERACTED, {
        type: "packages_header_click",
        position: s
      }), s > 0 && (s + 1) % 5 == 0 ? a(-1) : a(s + 1)
    },
    children: [(0, l.jsx)(R.default, {
      className: y.headerBackground,
      pageMultiplier: 10
    }), (0, l.jsx)(_.Heading, {
      variant: "display-md",
      className: y.header,
      color: "always-white",
      children: U.default.Messages.PACKAGES
    }), (0, l.jsx)("div", {
      className: y.headerCTA,
      children: (0, l.jsxs)(D.default, {
        className: y.headerButton,
        innerClassName: y.innerButton,
        pauseAnimation: !e || t,
        onClick: e => {
          e.stopPropagation(), (0, N.openLootbox)()
        },
        size: _.ButtonSizes.SMALL,
        color: _.ButtonColors.CUSTOM,
        children: [(0, l.jsx)(A.default, {
          className: y.buttonIcon,
          color: _.tokens.colors.WHITE
        }), U.default.Messages.USER_SETTINGS_PACKAGES_HEADER_CTA]
      })
    }), n ? (0, l.jsx)("div", {
      className: y.headerEasterEgg,
      children: (0, l.jsx)(v.EasterEggAnimation, {
        position: v.EasterEggPosition.BOTTOM_LEFT,
        onAnimationComplete: () => {
          a(0)
        },
        size: 120
      })
    }) : null]
  })
}

function F(e) {
  let {
    icon: t,
    text: s,
    count: a,
    fetchState: n
  } = e;
  return (0, l.jsxs)("div", {
    className: y.stat,
    children: [(0, l.jsx)(t, {
      color: _.tokens.colors.TEXT_MUTED
    }), (0, l.jsx)(_.Text, {
      className: y.statText,
      variant: "text-xs/bold",
      color: "text-muted",
      children: s
    }), (0, l.jsx)(_.Text, {
      variant: "text-lg/bold",
      color: "text-primary",
      children: n === I.FetchState.FETCHED ? a.toLocaleString() : (0, l.jsx)(_.Spinner, {})
    })]
  })
}
let G = P.default.Millis.SECOND,
  k = 2 * P.default.Millis.SECOND;

function H() {
  let e = (0, b.getLootboxes)(),
    [t, s, a, n, r, o, d] = (0, S.useStateFromStoresArray)([I.default], () => [I.default.userDataFetchState, I.default.globalOpenedCountFetchState, I.default.openedItems, I.default.globalOpenedCount, I.default.lastGlobalOpenedCount, I.default.globalOpenedCountFetchTime, I.default.nextGlobalOpenedCountFetchDelay]),
    T = i.useMemo(() => Object.values(a).reduce((e, t) => e + t, 0), [a]),
    [f] = i.useState(() => new E.Timeout),
    [_, m] = i.useState(0),
    g = Math.floor((0, C.default)(r, n, _));
  return i.useEffect(() => {
    m(0)
  }, [n, r]), i.useEffect(() => (f.start((0, p.randomBetween)(G, k), () => {
    if (_ < 1) {
      let e = Math.min((Date.now() - o) / d, 1);
      m(e)
    }
  }), () => f.stop()), [r, d, n, o, f, _]), (0, l.jsxs)("div", {
    className: y.stats,
    children: [(0, l.jsx)(F, {
      icon: c.TicketIcon,
      text: U.default.Messages.PACKAGES_PACKAGES_OPENED,
      count: T,
      fetchState: t
    }), (0, l.jsx)(F, {
      icon: A.default,
      text: U.default.Messages.PACKAGES_UNIQUE_PACKAGES_OPENED,
      count: U.default.Messages.PACKAGES_OPENED_OUT_OF.format({
        count: Object.keys(a).filter(e => a[e] > 0).length,
        total: Object.keys(e).length
      }),
      fetchState: t
    }), (0, l.jsx)(F, {
      icon: u.GlobeEarthIcon,
      text: U.default.Messages.PACKAGES_GLOBAL_PACKAGES_OPENED,
      count: g,
      fetchState: s
    })]
  })
}

function w() {
  let [e, t] = (0, S.useStateFromStoresArray)([I.default], () => [I.default.openedItems, I.default.redeemedPrize]), a = (0, b.getLootboxes)(), n = i.useMemo(() => Object.keys(e).length === Object.keys(a).length && !Object.values(e).some(e => 0 === e), [e, a]), r = async () => {
    await (0, N.redeemPrize)(), (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("657437").then(s.bind(s, "657437"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  };
  return !t && n ? (0, l.jsxs)("div", {
    className: y.banner,
    children: [(0, l.jsxs)("div", {
      className: y.inline,
      children: [(0, l.jsx)(T.CircleInformationIcon, {
        className: y.infoIcon,
        color: _.tokens.colors.WHITE
      }), (0, l.jsx)(_.Text, {
        variant: "text-sm/bold",
        color: "always-white",
        children: U.default.Messages.USER_SETTINGS_PACKAGE_BANNER_DEFAULT
      })]
    }), (0, l.jsxs)(_.Button, {
      className: y.headerButton,
      innerClassName: y.innerButton,
      onClick: r,
      size: _.ButtonSizes.SMALL,
      color: _.ButtonColors.CUSTOM,
      children: [(0, l.jsx)(f.GiftIcon, {
        className: y.buttonIcon,
        color: _.tokens.colors.WHITE
      }), U.default.Messages.USER_SETTINGS_PACKAGE_BANNER_CTA]
    })]
  }) : null
}

function V() {
  let [e, t] = (0, S.useStateFromStoresArray)([I.default], () => [I.default.openedItems, I.default.userDataFetchState]), s = (0, b.getLootboxes)(), a = t === I.FetchState.FETCHED ? (0, l.jsx)("div", {
    className: y.inventoryItems,
    children: Object.keys(s).map((t, a) => {
      var n;
      let i = s[t];
      return (0, l.jsx)(x.default, {
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
      className: y.inventoryHeader,
      children: [U.default.Messages.USER_SETTINGS_PACKAGES_MAILBOX_HEADER, (0, l.jsx)(O.default, {
        className: y.inventoryHelpIcon
      })]
    }), (0, l.jsx)("div", {
      className: y.inventoryContainer,
      children: a
    })]
  })
}

function Y(e) {
  let {
    children: t,
    className: s,
    onClick: a
  } = e;
  return (0, l.jsx)(_.Clickable, {
    className: o(y.noTextToSpeechButton, s),
    onClick: a,
    children: t
  })
}

function K() {
  let [e, t] = i.useState(1), [s, a] = i.useState(!1), [n] = i.useState(new E.Timeout), r = () => {
    L.default.track(j.AnalyticEvents.EASTER_EGG_INTERACTED, {
      type: "packages_no_text_to_speech",
      position: e
    }), a(!0), n.start((0, p.randomBetween)(200, 1e3), () => {
      t(e + 1), a(!1)
    })
  };
  return i.useEffect(() => n.stop(), [n]), (0, l.jsx)("div", {
    className: y.noTextToSpeech,
    children: s ? (0, l.jsx)(_.Spinner, {
      className: y.noTextToSpeechSpinner
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(_.Text, {
        variant: "text-sm/bold",
        children: (() => {
          switch (e) {
            case 1:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_1;
            case 2:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2;
            case 3:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3;
            case 4:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_4;
            case 5:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_5;
            case 6:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6;
            case 7:
              return U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_7
          }
        })()
      }), (() => {
        switch (e) {
          case 1:
          case 4:
          case 5:
            return [U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_YES, U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_NO];
          case 2:
            return [U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_1, U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_2];
          case 3:
            return [U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_1, U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_2];
          case 6:
            return [U.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6_ANSWER_1];
          case 7:
            return []
        }
      })().map((e, t) => (0, l.jsx)(Y, {
        className: 0 === t ? y.noTextToSpeechButtonFirst : null,
        onClick: r,
        children: e
      }, t))]
    })
  })
}

function W() {
  return (0, l.jsxs)("div", {
    className: y.footer,
    children: [(0, l.jsx)(d.ClipsIcon, {}), (0, l.jsx)(_.Text, {
      variant: "text-xs/bold",
      color: "text-muted",
      children: U.default.Messages.PACKAGES_FOOTER_NOTE.format({
        url: b.LOOTBOX_VIDEO_URL
      })
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, h.default)(g.default.PACKAGES), t = (0, S.useStateFromStores)([I.default], () => I.default.nextGlobalOpenedCountFetchDelay), [s] = i.useState(() => new E.Timeout);
  return i.useEffect(() => {
    (0, N.fetchUserLootboxData)()
  }, []), i.useEffect(() => (s.start(t, N.fetchCountStat), () => s.stop()), [t, s]), (0, l.jsxs)(h.AnalyticsLocationProvider, {
    value: e,
    children: [(0, l.jsx)(B, {}), (0, l.jsx)(H, {}), (0, l.jsx)(w, {}), (0, l.jsx)(V, {}), (0, l.jsx)(K, {}), (0, l.jsx)(W, {})]
  })
}(n = a || (a = {}))[n.QUESTION_1 = 1] = "QUESTION_1", n[n.QUESTION_2 = 2] = "QUESTION_2", n[n.QUESTION_3 = 3] = "QUESTION_3", n[n.QUESTION_4 = 4] = "QUESTION_4", n[n.QUESTION_5 = 5] = "QUESTION_5", n[n.QUESTION_6 = 6] = "QUESTION_6", n[n.QUESTION_7 = 7] = "QUESTION_7"