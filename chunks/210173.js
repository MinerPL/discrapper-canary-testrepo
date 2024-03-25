"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("355262"),
  o = n("77078"),
  u = n("302437"),
  d = n("826684"),
  c = n("368874"),
  f = n("652126"),
  E = n("775032"),
  h = n("25132"),
  _ = n("424373"),
  C = n("806468"),
  S = n("863023"),
  I = n("299387"),
  m = n("154640"),
  p = n("922832"),
  T = n("782340"),
  g = n("575650"),
  A = n("890957"),
  N = n("371997");

function R(e) {
  let {
    header: t,
    description: n,
    stepNumber: s
  } = e;
  return (0, a.jsxs)("div", {
    className: g.step,
    children: [(0, a.jsx)("div", {
      className: g.stepNumber,
      children: (0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: s
        })
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: t
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function O() {
  return (0, a.jsxs)("div", {
    className: i(g.box, g.linkingBanner, g.linkingBannerParent),
    children: [(0, a.jsxs)("div", {
      className: i(g.linkingBannerUpper),
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsx)(o.Heading, {
          className: A.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, a.jsx)(o.HeadingLevel, {
            children: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
          })
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: A.marginBottom20,
          children: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
        })]
      }), (0, a.jsx)("img", {
        className: g.bannerArt,
        src: N,
        alt: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })]
    }), (0, a.jsxs)("div", {
      className: g.steps,
      children: [(0, a.jsx)(R, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, a.jsx)(R, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, a.jsx)(R, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function v() {
  let e = (0, h.useHasMaxConnections)();
  return (0, a.jsxs)("div", {
    className: i(g.box, g.linkingBanner),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        className: A.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: A.marginBottom20,
        children: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, a.jsx)(C.default, {})]
    }), (0, a.jsx)("img", {
      className: g.bannerArt,
      src: N,
      alt: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
    })]
  })
}

function L(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: l
  } = e, i = s.useRef(null), c = "".concat(t, "-list"), f = (0, u.default)(c), E = s.useCallback(e => {
    let {
      row: n,
      listIndex: s
    } = e, i = l[n], r = s === l.length;
    return null == i ? null : (0, a.jsx)(m.default, {
      userId: i.id,
      isLast: r,
      children: () => t === p.UserLinkStatus.ACTIVE ? (0, a.jsx)(S.UserLinkAcceptedRequestRow, {
        user: i
      }) : (0, a.jsx)(I.UserLinkPendingRequestRow, {
        user: i
      })
    }, i.id)
  }, [l, t]), h = s.useCallback(() => (0, a.jsx)(d.default, {
    className: g.sectionTitle,
    children: (0, a.jsx)(o.Text, {
      className: A.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: n
    })
  }, "title"), [n]);
  return (0, a.jsx)("div", {
    className: g.section,
    children: (0, a.jsx)(r.ListNavigatorProvider, {
      navigator: f,
      children: (0, a.jsx)(r.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            role: s,
            ...r
          } = e;
          return (0, a.jsx)(o.List, {
            className: g.list,
            innerRole: s,
            innerAriaLabel: n,
            ref: e => {
              var n;
              i.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            sectionHeight: p.FAMILY_CENTER_REQUEST_SECTION_HEIGHT,
            rowHeight: p.FAMILY_CENTER_REQUEST_ROW_HEIGHT,
            renderSection: h,
            renderRow: E,
            sections: [l.length],
            chunkSize: 30,
            fade: !0,
            ...r
          }, c)
        }
      })
    })
  })
}
let M = () => {
    let e = (0, E.default)(),
      t = (0, h.useUserForLinkStatus)(p.UserLinkStatus.ACTIVE),
      n = e ? p.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : p.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      s = {
        count: t.length,
        max: n
      },
      l = (0, c.useAgeSpecificText)(T.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(s), T.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(s));
    return (0, a.jsx)(a.Fragment, {
      children: t.length > 0 ? (0, a.jsx)(L, {
        sectionType: p.UserLinkStatus.ACTIVE,
        sectionTitle: l,
        requests: t
      }) : (0, a.jsxs)("div", {
        className: g.section,
        children: [(0, a.jsx)(o.Text, {
          className: A.marginBottom8,
          variant: "eyebrow",
          color: "header-secondary",
          children: l
        }), (0, a.jsx)("div", {
          className: g.box,
          children: (0, a.jsx)(_.default, {
            text: T.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
          })
        })]
      })
    })
  },
  P = () => {
    let e = (0, h.useHasMaxConnections)(),
      t = (0, E.default)(),
      n = t ? p.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : p.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      s = (0, c.useAgeSpecificText)(T.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: n
      }), T.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: n
      }));
    return e ? (0, a.jsx)("div", {
      className: g.maxConnectionInfo,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: s
      })
    }) : null
  },
  y = () => {
    let e = (0, f.useShouldShowHelplineLink)();
    return e ? (0, a.jsxs)("div", {
      className: i(g.helpLineInfo, A.marginTop20),
      children: [(0, a.jsx)(o.Heading, {
        className: g.supportHeader,
        variant: "heading-sm/semibold",
        children: (0, a.jsx)(o.HeadingLevel, {
          children: T.default.Messages.FAMILY_CENTER_HELP_LINE_HEADER
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: T.default.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
          helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
        })
      })]
    }) : null
  },
  D = () => {
    let e = (0, h.useUserForLinkStatus)(p.UserLinkStatus.PENDING),
      t = (0, c.useAgeSpecificText)(T.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
        count: e.length
      }), T.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
        count: e.length
      }));
    return 0 === e.length ? null : (0, a.jsx)(L, {
      sectionType: p.UserLinkStatus.PENDING,
      sectionTitle: t,
      requests: e
    })
  };
var x = () => {
  let e = (0, E.default)();
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [e ? (0, a.jsx)(O, {}) : (0, a.jsx)(v, {}), (0, a.jsx)(M, {}), (0, a.jsx)(D, {}), (0, a.jsx)(P, {}), (0, a.jsx)(y, {})]
  })
}