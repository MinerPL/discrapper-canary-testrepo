"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
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
  L = s("718517"),
  P = s("630615"),
  j = s("782340"),
  b = s("449617");

function U() {
  let e = (0, S.useStateFromStores)([M.default], () => M.default.isFocused()),
    t = (0, S.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    [s, a] = i.useState(0),
    n = -1 === s;
  return (0, l.jsxs)(_.Clickable, {
    className: b.headerContainer,
    onClick: n ? void 0 : () => {
      s > 0 && (s + 1) % 5 == 0 ? a(-1) : a(s + 1)
    },
    children: [(0, l.jsx)(R.default, {
      className: b.headerBackground,
      pageMultiplier: 10
    }), (0, l.jsx)(_.Heading, {
      variant: "display-md",
      className: b.header,
      color: "always-white",
      children: j.default.Messages.PACKAGES
    }), (0, l.jsx)("div", {
      className: b.headerCTA,
      children: (0, l.jsxs)(D.default, {
        className: b.headerButton,
        innerClassName: b.innerButton,
        pauseAnimation: !e || t,
        onClick: e => {
          e.stopPropagation(), (0, N.openLootbox)()
        },
        size: _.ButtonSizes.SMALL,
        color: _.ButtonColors.CUSTOM,
        children: [(0, l.jsx)(A.default, {
          className: b.buttonIconLarge,
          color: _.tokens.colors.WHITE
        }), j.default.Messages.USER_SETTINGS_PACKAGES_HEADER_CTA]
      })
    }), n ? (0, l.jsx)("div", {
      className: b.headerEasterEgg,
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

function y(e) {
  let {
    icon: t,
    text: s,
    count: a,
    fetchState: n
  } = e;
  return (0, l.jsxs)("div", {
    className: b.stat,
    children: [(0, l.jsx)(t, {
      color: _.tokens.colors.TEXT_MUTED
    }), (0, l.jsx)(_.Text, {
      className: b.statText,
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
let B = L.default.Millis.SECOND,
  F = 2 * L.default.Millis.SECOND;

function G() {
  let e = (0, P.getLootboxes)(),
    [t, s, a, n, r, o, d] = (0, S.useStateFromStoresArray)([I.default], () => [I.default.userDataFetchState, I.default.globalOpenedCountFetchState, I.default.openedItems, I.default.globalOpenedCount, I.default.lastGlobalOpenedCount, I.default.globalOpenedCountFetchTime, I.default.nextGlobalOpenedCountFetchDelay]),
    T = i.useMemo(() => Object.values(a).reduce((e, t) => e + t, 0), [a]),
    [f] = i.useState(() => new E.Timeout),
    [_, m] = i.useState(0),
    g = Math.floor((0, C.default)(r, n, _));
  return i.useEffect(() => {
    m(0)
  }, [n, r]), i.useEffect(() => (f.start((0, p.randomBetween)(B, F), () => {
    if (_ < 1) {
      let e = Math.min((Date.now() - o) / d, 1);
      m(e)
    }
  }), () => f.stop()), [r, d, n, o, f, _]), (0, l.jsxs)("div", {
    className: b.stats,
    children: [(0, l.jsx)(y, {
      icon: c.TicketIcon,
      text: j.default.Messages.PACKAGES_PACKAGES_OPENED,
      count: T,
      fetchState: t
    }), (0, l.jsx)(y, {
      icon: A.default,
      text: j.default.Messages.PACKAGES_UNIQUE_PACKAGES_OPENED,
      count: j.default.Messages.PACKAGES_OPENED_OUT_OF.format({
        count: Object.keys(a).filter(e => a[e] > 0).length,
        total: Object.keys(e).length
      }),
      fetchState: t
    }), (0, l.jsx)(y, {
      icon: u.GlobeEarthIcon,
      text: j.default.Messages.PACKAGES_GLOBAL_PACKAGES_OPENED,
      count: g,
      fetchState: s
    })]
  })
}

function k() {
  let [e, t, a] = (0, S.useStateFromStoresArray)([I.default], () => [I.default.openedItems, I.default.redeemedPrize, I.default.userDataFetchState]), n = (0, P.getLootboxes)(), r = i.useMemo(() => Object.keys(e).length === Object.keys(n).length && !Object.values(e).some(e => 0 === e), [e, n]), o = async () => {
    await (0, N.redeemPrize)(), (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("657437").then(s.bind(s, "657437"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, d = a === I.FetchState.FETCHED ? (0, l.jsxs)(l.Fragment, {
    children: [!t && r && (0, l.jsxs)("div", {
      className: b.banner,
      children: [(0, l.jsxs)("div", {
        className: b.inline,
        children: [(0, l.jsx)(T.CircleInformationIcon, {
          width: 16,
          height: 16,
          color: _.tokens.colors.WHITE
        }), (0, l.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: j.default.Messages.USER_SETTINGS_PACKAGE_BANNER_DEFAULT
        })]
      }), (0, l.jsxs)(_.Button, {
        className: b.headerButton,
        innerClassName: b.innerButton,
        onClick: o,
        size: _.ButtonSizes.SMALL,
        color: _.ButtonColors.CUSTOM,
        children: [(0, l.jsx)(f.GiftIcon, {
          className: b.buttonIconSmall,
          color: _.tokens.colors.WHITE
        }), j.default.Messages.USER_SETTINGS_PACKAGE_BANNER_CTA]
      })]
    }), (0, l.jsx)("div", {
      className: b.inventoryItems,
      children: Object.keys(n).map(t => {
        var s;
        let a = n[t];
        return (0, l.jsx)(x.default, {
          image: a.image,
          name: a.name,
          sound: a.sound,
          openedCount: null !== (s = null == e ? void 0 : e[t]) && void 0 !== s ? s : 0
        }, t)
      })
    })]
  }) : (0, l.jsx)(_.Spinner, {});
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(_.Heading, {
      variant: "heading-md/semibold",
      className: b.inventoryHeader,
      children: [j.default.Messages.USER_SETTINGS_PACKAGES_MAILBOX_HEADER, (0, l.jsx)(O.default, {
        className: b.inventoryHelpIcon
      })]
    }), (0, l.jsx)("div", {
      className: b.inventoryContainer,
      children: d
    })]
  })
}

function H(e) {
  let {
    children: t,
    className: s,
    onClick: a
  } = e;
  return (0, l.jsx)(_.Clickable, {
    className: o(b.noTextToSpeechButton, s),
    onClick: a,
    children: t
  })
}

function w() {
  let [e, t] = i.useState(1), [s, a] = i.useState(!1), [n] = i.useState(new E.Timeout), r = () => {
    a(!0), n.start((0, p.randomBetween)(200, 1e3), () => {
      t(e + 1), a(!1)
    })
  };
  return i.useEffect(() => n.stop(), [n]), (0, l.jsx)("div", {
    className: b.noTextToSpeech,
    children: s ? (0, l.jsx)(_.Spinner, {
      className: b.noTextToSpeechSpinner
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(_.Text, {
        variant: "text-sm/bold",
        children: (() => {
          switch (e) {
            case 1:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_1;
            case 2:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2;
            case 3:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3;
            case 4:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_4;
            case 5:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_5;
            case 6:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6;
            case 7:
              return j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_7
          }
        })()
      }), (() => {
        switch (e) {
          case 1:
          case 4:
          case 5:
            return [j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_YES, j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_NO];
          case 2:
            return [j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_1, j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_2];
          case 3:
            return [j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_1, j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_2];
          case 6:
            return [j.default.Messages.PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6_ANSWER_1];
          case 7:
            return []
        }
      })().map((e, t) => (0, l.jsx)(H, {
        className: 0 === t ? b.noTextToSpeechButtonFirst : null,
        onClick: r,
        children: e
      }, t))]
    })
  })
}

function V() {
  return (0, l.jsxs)("div", {
    className: b.footer,
    children: [(0, l.jsx)(d.ClipsIcon, {}), (0, l.jsx)(_.Text, {
      variant: "text-xs/bold",
      color: "text-muted",
      children: j.default.Messages.PACKAGES_FOOTER_NOTE.format({
        url: P.LOOTBOX_VIDEO_URL
      })
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, h.default)(g.default.PACKAGES), t = (0, S.useStateFromStores)([I.default], () => I.default.nextGlobalOpenedCountFetchDelay), [s] = i.useState(() => new E.Timeout);
  return i.useEffect(() => {
    (0, N.fetchUserLootboxData)()
  }, []), i.useEffect(() => (s.start(t, N.fetchCountStat), () => s.stop()), [t, s]), (0, l.jsxs)(h.AnalyticsLocationProvider, {
    value: e,
    children: [(0, l.jsx)(U, {}), (0, l.jsx)(G, {}), (0, l.jsx)(k, {}), (0, l.jsx)(w, {}), (0, l.jsx)(V, {})]
  })
}(n = a || (a = {}))[n.QUESTION_1 = 1] = "QUESTION_1", n[n.QUESTION_2 = 2] = "QUESTION_2", n[n.QUESTION_3 = 3] = "QUESTION_3", n[n.QUESTION_4 = 4] = "QUESTION_4", n[n.QUESTION_5 = 5] = "QUESTION_5", n[n.QUESTION_6 = 6] = "QUESTION_6", n[n.QUESTION_7 = 7] = "QUESTION_7"