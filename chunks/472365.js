"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("411104");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("399606"),
  o = n("481060"),
  u = n("588705"),
  d = n("100527"),
  c = n("906732"),
  f = n("792766"),
  h = n("451603"),
  p = n("885714"),
  m = n("973616"),
  C = n("594174"),
  g = n("285952"),
  E = n("672752"),
  _ = n("153124"),
  S = n("819570"),
  I = n("757698"),
  N = n("466111"),
  T = n("855981"),
  A = n("55543"),
  L = n("626135"),
  v = n("768581"),
  x = n("358085"),
  R = n("998502"),
  M = n("379164"),
  O = n("590965"),
  y = n("981631"),
  D = n("474936"),
  b = n("689938"),
  j = n("85407"),
  P = n("949086");

function G() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: t
  } = (0, c.default)(d.default.PREMIUM_UPSELL_TOOLTIP);
  return a.useEffect(() => {
    L.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: D.PremiumUpsellTypes.GUILD_CAP_INLINE_INVITE_MODAL,
      location: {
        page: y.AnalyticsPages.NATIVE_INVITE_MODAL
      },
      location_stack: t
    })
  }, [t]), (0, l.jsxs)(o.Clickable, {
    onClick: () => (0, p.default)({
      analyticsSource: {
        page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL
      },
      analyticsLocation: {
        page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL,
        section: y.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: e
    }),
    className: j.experimentUpsellError,
    children: [(0, l.jsx)(N.default, {
      width: 24,
      height: 24,
      className: j.experimentUpsellIcon,
      color: E.GradientCssUrls.PREMIUM_TIER_2
    }), (0, l.jsx)("span", {
      className: j.experimentUpsellText,
      children: b.default.Messages.GUILD_CAP_UPSELL_TOOLTIP
    }), (0, l.jsx)("span", {
      className: j.experimentGetNitro,
      children: b.default.Messages.GUILD_CAP_UPSELL_GET_NITRO
    })]
  })
}

function U(e) {
  let {
    className: t
  } = e;
  return (0, l.jsxs)("div", {
    "aria-hidden": "true",
    className: i()(j.iconContainer, t),
    children: [(0, l.jsx)(T.default, {
      className: j.iconSparklePlus
    }), (0, l.jsx)(I.default, {
      className: j.iconLink,
      width: 40,
      height: 40
    }), (0, l.jsx)(A.default, {
      className: j.iconSparkleStar
    })]
  })
}

function w(e) {
  let {
    transitionState: t
  } = e, n = (0, _.useUID)(), {
    analyticsLocations: a
  } = (0, c.default)(d.default.INVITE_MODAL);
  return (0, l.jsx)(c.AnalyticsLocationProvider, {
    value: a,
    children: (0, l.jsx)(o.ModalRoot, {
      size: o.ModalSize.DYNAMIC,
      "aria-labelledby": n,
      transitionState: t,
      children: (0, l.jsxs)(o.ModalContent, {
        className: j.errorContent,
        children: [(0, l.jsx)(U, {
          className: j.errorImage
        }), (0, l.jsx)(o.Heading, {
          id: n,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
        }), (0, l.jsx)("div", {
          className: j.errorBody,
          children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_BODY
        }), (0, l.jsx)(S.Button, {
          size: S.Button.Sizes.LARGE,
          onClick: () => M.default.close(),
          color: S.Button.Colors.BRAND,
          children: b.default.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
        })]
      })
    })
  })
}

function F(e) {
  let t, n, {
    transitionState: s
  } = e;
  (0, r.useStateFromStores)([C.default], () => {
    var e;
    return null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType
  });
  let {
    invite: p,
    error: E,
    submitting: I
  } = (0, r.useStateFromStoresObject)([O.default], () => O.default.getProps());
  a.useEffect(() => {
    !__OVERLAY__ && x.isPlatformEmbedded && ((0, x.isWindows)() ? R.default.minimize() : R.default.restore(), R.default.focus())
  }, []);
  let N = (0, _.useUID)(),
    {
      analyticsLocations: T
    } = (0, c.default)(d.default.INVITE_MODAL);
  if (null == p) return null;
  if (p.state === y.InviteStates.EXPIRED || p.state === y.InviteStates.BANNED || p.state === y.InviteStates.ERROR) return (0, l.jsx)(w, {
    transitionState: s
  });
  if (null == p.channel) return null;

  function A() {
    null != p && M.default.acceptInvite(p)
  }
  let {
    guild: L,
    channel: D,
    inviter: U,
    target_application: F
  } = p, B = null != p.stage_instance, V = null == p.guild && null == p.channel && null != p.inviter;
  if (null != F) t = null == L ? void 0 : L.name, n = m.default.createFromServer(F).getCoverImageURL(1024);
  else if (null != L) t = L.name, n = v.default.getGuildSplashURL({
    id: L.id,
    splash: L.splash
  });
  else if ((null == (t = D.name) || "" === t) && null != U && (t = U.username), null == t) throw Error("no name for group DM invite");
  let H = (0, h.isAtGuildCapAndNonPremium)(),
    k = B ? b.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : b.default.Messages.INVITE_MODAL_BUTTON.format({
      guildName: t
    });
  return V && (k = b.default.Messages.ACCEPT_INVITE_MODAL_BUTTON), (0, l.jsx)(c.AnalyticsLocationProvider, {
    value: T,
    children: (0, l.jsxs)(o.ModalRoot, {
      size: o.ModalSize.DYNAMIC,
      "aria-labelledby": N,
      transitionState: s,
      className: j.container,
      children: [(0, l.jsx)("div", {
        className: j.contentWrapper,
        children: (0, l.jsx)(o.Scroller, {
          className: j.scroller,
          children: (0, l.jsxs)(g.default, {
            className: j.inviteContent,
            direction: g.default.Direction.VERTICAL,
            justify: g.default.Justify.BETWEEN,
            children: [(0, l.jsx)("div", {
              id: N,
              className: P.marginBottom20,
              children: (0, l.jsx)(u.default, {
                invite: p,
                disableUser: null != L,
                error: E
              })
            }), B && null != L ? (0, l.jsx)("div", {
              className: i()(P.marginBottom20, j.stage),
              children: (0, l.jsx)(f.default, {
                isCard: !0,
                stageInstance: p.stage_instance,
                guild: L
              })
            }) : null, (0, l.jsxs)("div", {
              children: [H ? (0, l.jsx)(G, {}) : null, null == F ? (0, l.jsx)(o.Tooltip, {
                text: H ? b.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                position: "bottom",
                children: e => {
                  let {
                    onMouseEnter: t,
                    onMouseLeave: n
                  } = e;
                  return (0, l.jsx)(S.Button, {
                    size: S.Button.Sizes.LARGE,
                    onClick: A,
                    submitting: I,
                    disabled: H,
                    color: B ? S.Button.Colors.GREEN : S.Button.Colors.BRAND,
                    onMouseEnter: t,
                    onMouseLeave: n,
                    children: H ? b.default.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : k
                  })
                }
              }) : (0, l.jsxs)("div", {
                className: j.buttonGroup,
                children: [(0, l.jsx)(S.Button, {
                  size: S.Button.Sizes.LARGE,
                  onClick: A,
                  submitting: I,
                  children: b.default.Messages.PLAY
                }), (0, l.jsx)(S.Button, {
                  color: S.Button.Colors.PRIMARY,
                  size: S.Button.Sizes.LARGE,
                  onClick: A,
                  submitting: I,
                  children: b.default.Messages.SPECTATE
                })]
              }), (0, l.jsx)(g.default, {
                justify: g.default.Justify.CENTER,
                className: P.marginTop8,
                children: (0, l.jsx)(S.Button, {
                  look: S.Button.Looks.LINK,
                  className: j.noThanksButton,
                  onClick: function() {
                    M.default.close()
                  },
                  color: S.Button.Colors.TRANSPARENT,
                  children: b.default.Messages.INIVTE_MODAL_NO_THANKS
                })
              })]
            })]
          })
        })
      }), null != n && (0, l.jsx)("div", {
        className: j.inviteSplash,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      })]
    })
  })
}