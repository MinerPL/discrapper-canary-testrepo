"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("729594"),
  i = n("481060"),
  r = n("367907"),
  o = n("906732"),
  u = n("240991"),
  d = n("69580"),
  c = n("484459"),
  f = n("171368"),
  h = n("768581"),
  m = n("63063"),
  p = n("591759"),
  E = n("556084"),
  C = n("981631"),
  g = n("689938"),
  S = n("367388"),
  _ = n("367424");
let T = new Set(["Spacebar", " ", "Enter"]);

function I(e) {
  let {
    channelId: t,
    transitionState: n,
    onClose: I
  } = e, {
    analyticsLocations: A
  } = (0, o.default)(), {
    fetched: v,
    applicationsShelf: N,
    installedIntegrations: x
  } = (0, E.usePrivateChannelIntegrationState)({
    channelId: t
  });
  l.useEffect(() => {
    (0, r.trackWithMetadata)(C.AnalyticEvents.GDM_STARTER_APPS_VIEWED)
  }, []);
  let M = e => {
      var t;
      (0, c.default)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
    },
    R = (e, t) => {
      T.has(e.key) && M(t)
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
      return (!!p.default.isDiscordHostname(a) || window.location.host === a) && l === C.Routes.OAUTH2_AUTHORIZED && (null != t && I(), !0)
    }, [I]);
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: n,
    size: i.ModalSize.DYNAMIC,
    className: S.modal,
    children: [(0, a.jsx)(i.ModalContent, {
      className: S.modalContent,
      children: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          src: _,
          alt: "",
          className: S.image
        }), (0, a.jsxs)("div", {
          className: S.headingContainer,
          children: [(0, a.jsx)(i.Heading, {
            variant: "heading-xl/bold",
            className: S.modalHeader,
            children: g.default.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/medium",
            className: S.modalHeader,
            children: g.default.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
              helpCenterLink: m.default.getArticleURL(C.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
            })
          })]
        }), (0, a.jsx)("div", {
          className: S.applicationRowContainer,
          children: v ? N.map(e => {
            if (null != x.find(t => t.application.id === e.id)) return null;
            let n = null != e.description ? (0, u.parseBioReact)(e.description) : null,
              l = h.default.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
              }),
              s = (0, a.jsxs)(a.Fragment, {
                children: [null != l && (0, a.jsx)("img", {
                  className: S.applicationIcon,
                  alt: "",
                  "aria-hidden": !0,
                  src: l,
                  width: 40,
                  height: 40
                }), (0, a.jsxs)("div", {
                  className: S.applicationRowContent,
                  children: [(0, a.jsxs)("div", {
                    className: S.applicationText,
                    children: [(0, a.jsx)(i.Heading, {
                      variant: "heading-md/medium",
                      children: e.name
                    }), null != e.description && (0, a.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      lineClamp: 1,
                      children: n
                    })]
                  }), (0, a.jsx)(i.Button, {
                    type: "button",
                    innerClassName: S.applicationButtonHack,
                    onClick: n => {
                      n.stopPropagation(), (0, d.openOAuth2Modal)({
                        clientId: e.id,
                        scopes: [C.OAuth2Scopes.APPLICATIONS_COMMANDS],
                        channelId: t,
                        disableGuildSelect: !0,
                        callback: L
                      })
                    },
                    size: i.Button.Sizes.SMALL,
                    color: i.Button.Colors.PRIMARY,
                    children: g.default.Messages.ADD
                  })]
                })]
              }),
              {
                bot: r
              } = e;
            return null != r ? (0, a.jsx)(i.ClickableContainer, {
              onMouseDown: () => M(r),
              onKeyDown: e => R(e, r),
              className: S.applicationRow,
              onClick: () => {
                (0, f.openUserProfileModal)({
                  channelId: t,
                  userId: r.id,
                  sourceAnalyticsLocations: A,
                  analyticsLocation: {
                    section: C.AnalyticsSections.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                  }
                })
              },
              "aria-label": g.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                appName: e.name
              }),
              children: s
            }, e.id) : (0, a.jsx)("div", {
              className: S.applicationRow,
              children: s
            }, e.id)
          }) : (0, a.jsx)(i.Spinner, {
            className: S.spinner,
            type: i.Spinner.Type.SPINNING_CIRCLE
          })
        })]
      })
    }), (0, a.jsxs)(i.ModalFooter, {
      className: S.modalFooter,
      children: [(0, a.jsx)(i.Button, {
        onClick: I,
        children: g.default.Messages.DONE
      }), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        onClick: I,
        color: i.Button.Colors.PRIMARY,
        children: g.default.Messages.CANCEL
      })]
    })]
  })
}