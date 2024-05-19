"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("729594"),
  i = n("243814"),
  r = n("481060"),
  o = n("367907"),
  u = n("906732"),
  d = n("240991"),
  c = n("69580"),
  f = n("484459"),
  h = n("171368"),
  m = n("768581"),
  p = n("63063"),
  E = n("591759"),
  C = n("556084"),
  g = n("981631"),
  S = n("689938"),
  _ = n("101135"),
  T = n("367424");
let I = new Set(["Spacebar", " ", "Enter"]);

function A(e) {
  let {
    channelId: t,
    transitionState: n,
    onClose: A
  } = e, {
    analyticsLocations: N
  } = (0, u.default)(), {
    fetched: v,
    applicationsShelf: x,
    installedIntegrations: M
  } = (0, C.usePrivateChannelIntegrationState)({
    channelId: t
  });
  l.useEffect(() => {
    (0, o.trackWithMetadata)(g.AnalyticEvents.GDM_STARTER_APPS_VIEWED)
  }, []);
  let R = e => {
      var t;
      (0, f.default)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    y = (e, t) => {
      I.has(e.key) && R(t)
    },
    L = l.useCallback(e => {
      let {
        application: t,
        location: n
      } = e;
      if (null == n) return !1;
      let {
        host: a,
        path: l
      } = s.parse(n, !0);
      return (!!E.default.isDiscordHostname(a) || window.location.host === a) && l === g.Routes.OAUTH2_AUTHORIZED && (null != t && A(), !0)
    }, [A]);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: n,
    size: r.ModalSize.DYNAMIC,
    className: _.modal,
    children: [(0, a.jsx)(r.ModalContent, {
      className: _.modalContent,
      children: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          src: T,
          alt: "",
          className: _.image
        }), (0, a.jsxs)("div", {
          className: _.headingContainer,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-xl/bold",
            className: _.modalHeader,
            children: S.default.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            className: _.modalHeader,
            children: S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: p.default.getArticleURL(g.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, a.jsx)("div", {
          className: _.applicationRowContainer,
          children: v ? x.map(e => {
            if (null != M.find(t => t.application.id === e.id)) return null;
            let n = null != e.description ? (0, d.parseBioReact)(e.description) : null,
              l = m.default.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
              }),
              s = (0, a.jsxs)(a.Fragment, {
                children: [null != l && (0, a.jsx)("img", {
                  className: _.applicationIcon,
                  alt: "",
                  "aria-hidden": !0,
                  src: l,
                  width: 40,
                  height: 40
                }), (0, a.jsxs)("div", {
                  className: _.applicationRowContent,
                  children: [(0, a.jsxs)("div", {
                    className: _.applicationText,
                    children: [(0, a.jsx)(r.Heading, {
                      variant: "heading-md/medium",
                      children: e.name
                    }), null != e.description && (0, a.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      lineClamp: 1,
                      children: n
                    })]
                  }), (0, a.jsx)(r.Button, {
                    type: "button",
                    innerClassName: _.applicationButtonHack,
                    onClick: n => {
                      n.stopPropagation(), (0, c.openOAuth2Modal)({
                        clientId: e.id,
                        scopes: [i.OAuth2Scopes.APPLICATIONS_COMMANDS],
                        channelId: t,
                        disableGuildSelect: !0,
                        callback: L
                      })
                    },
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    children: S.default.Messages.ADD
                  })]
                })]
              }),
              {
                bot: o
              } = e;
            return null != o ? (0, a.jsx)(r.ClickableContainer, {
              onMouseDown: () => R(o),
              onKeyDown: e => y(e, o),
              className: _.applicationRow,
              onClick: () => {
                (0, h.openUserProfileModal)({
                  channelId: t,
                  userId: o.id,
                  sourceAnalyticsLocations: N,
                  analyticsLocation: {
                    section: g.AnalyticsSections.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                appName: e.name
              }),
              children: s
            }, e.id) : (0, a.jsx)("div", {
              className: _.applicationRow,
              children: s
            }, e.id)
          }) : (0, a.jsx)(r.Spinner, {
            className: _.spinner,
            type: r.Spinner.Type.SPINNING_CIRCLE
          })
        })]
      })
    }), (0, a.jsxs)(r.ModalFooter, {
      className: _.modalFooter,
      children: [(0, a.jsx)(r.Button, {
        onClick: A,
        children: S.default.Messages.DONE
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: A,
        color: r.Button.Colors.PRIMARY,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}