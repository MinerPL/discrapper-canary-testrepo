"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("746379"),
  i = n.n(s),
  r = n("77078"),
  u = n("716241"),
  o = n("685665"),
  d = n("368639"),
  c = n("33942"),
  f = n("506885"),
  h = n("401642"),
  m = n("315102"),
  p = n("701909"),
  E = n("253981"),
  g = n("252063"),
  S = n("49111"),
  C = n("782340"),
  _ = n("473240"),
  I = n("271861");
let T = new Set(["Spacebar", " ", "Enter"]);

function v(e) {
  let {
    channelId: t,
    transitionState: n,
    onClose: s
  } = e, {
    analyticsLocations: v
  } = (0, o.default)(), {
    fetched: x,
    applicationsShelf: N,
    installedIntegrations: A
  } = (0, g.usePrivateChannelIntegrationState)({
    channelId: t
  });
  l.useEffect(() => {
    (0, u.trackWithMetadata)(S.AnalyticEvents.GDM_STARTER_APPS_VIEWED)
  }, []);
  let M = e => {
      var t;
      (0, f.default)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    R = (e, t) => {
      T.has(e.key) && M(t)
    },
    j = l.useCallback(e => {
      let {
        application: t,
        location: n
      } = e;
      if (null == n) return !1;
      let {
        host: a,
        path: l
      } = i.parse(n, !0), r = E.default.isDiscordHostname(a) || window.location.host === a;
      return !!r && l === S.Routes.OAUTH2_AUTHORIZED && (null != t && s(), !0)
    }, [s]);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: n,
    size: r.ModalSize.DYNAMIC,
    className: _.modal,
    children: [(0, a.jsx)(r.ModalContent, {
      className: _.modalContent,
      children: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          src: I,
          alt: "",
          className: _.image
        }), (0, a.jsxs)("div", {
          className: _.headingContainer,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-xl/bold",
            className: _.modalHeader,
            children: C.default.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            className: _.modalHeader,
            children: C.default.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: p.default.getArticleURL(S.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, a.jsx)("div", {
          className: _.applicationRowContainer,
          children: x ? N.map(e => {
            if (null != A.find(t => t.application.id === e.id)) return null;
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
                        scopes: [S.OAuth2Scopes.APPLICATIONS_COMMANDS],
                        channelId: t,
                        disableGuildSelect: !0,
                        callback: j
                      })
                    },
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    children: C.default.Messages.ADD
                  })]
                })]
              }),
              {
                bot: i
              } = e;
            return null != i ? (0, a.jsx)(r.ClickableContainer, {
              onMouseDown: () => M(i),
              onKeyDown: e => R(e, i),
              className: _.applicationRow,
              onClick: () => {
                (0, h.openUserProfileModal)({
                  channelId: t,
                  userId: i.id,
                  sourceAnalyticsLocations: v,
                  analyticsLocation: {
                    section: S.AnalyticsSections.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": C.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
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
        onClick: s,
        children: C.default.Messages.DONE
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: s,
        color: r.Button.Colors.PRIMARY,
        children: C.default.Messages.CANCEL
      })]
    })]
  })
}