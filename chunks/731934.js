"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("91192"),
  o = n("481060"),
  u = n("209613"),
  d = n("151827"),
  c = n("785681"),
  f = n("485664"),
  E = n("880257"),
  h = n("631885"),
  _ = n("895328"),
  C = n("568671"),
  m = n("419821"),
  S = n("367515"),
  I = n("250285"),
  p = n("292352"),
  T = n("689938"),
  g = n("954830"),
  A = n("794711"),
  N = n("926895");

function v(e) {
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
    className: i()(g.box, g.linkingBanner, g.linkingBannerParent),
    children: [(0, a.jsxs)("div", {
      className: i()(g.linkingBannerUpper),
      children: [(0, a.jsxs)("div", {
        className: g.__invalid_header,
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
      children: [(0, a.jsx)(v, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }), (0, a.jsx)(v, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }), (0, a.jsx)(v, {
        header: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: T.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })]
    })]
  })
}

function R() {
  let e = (0, h.useHasMaxConnections)();
  return (0, a.jsxs)("div", {
    className: i()(g.box, g.linkingBanner),
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
    return null == i ? null : (0, a.jsx)(I.default, {
      userId: i.id,
      isLast: r,
      children: () => t === p.UserLinkStatus.ACTIVE ? (0, a.jsx)(m.UserLinkAcceptedRequestRow, {
        user: i
      }) : (0, a.jsx)(S.UserLinkPendingRequestRow, {
        user: i
      })
    }, i.id)
  }, [l, t]), h = s.useCallback(() => (0, a.jsx)(d.default, {
    className: g.__invalid_sectionTitle,
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
            className: g.__invalid_list,
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
let P = () => {
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
  M = () => {
    let e = (0, h.useHasMaxConnections)(),
      t = (0, E.default)() ? p.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : p.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
      n = (0, c.useAgeSpecificText)(T.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
        maxConnections: t
      }), T.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
        maxConnections: t
      }));
    return e ? (0, a.jsx)("div", {
      className: g.maxConnectionInfo,
      children: (0, a.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  y = () => (0, f.useShouldShowHelplineLink)() ? (0, a.jsxs)("div", {
    className: i()(g.__invalid_helpLineInfo, A.marginTop20),
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
  }) : null,
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
t.default = () => {
  let e = (0, E.default)();
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [e ? (0, a.jsx)(O, {}) : (0, a.jsx)(R, {}), (0, a.jsx)(P, {}), (0, a.jsx)(D, {}), (0, a.jsx)(M, {}), (0, a.jsx)(y, {})]
  })
}