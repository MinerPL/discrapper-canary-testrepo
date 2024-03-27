"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("424973"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("171210"),
  i = n("446674"),
  r = n("151426"),
  o = n("77078"),
  u = n("811475"),
  d = n("550766"),
  c = n("478272"),
  f = n("685665"),
  h = n("10641"),
  C = n("235145"),
  p = n("384997"),
  m = n("716849"),
  E = n("552917"),
  g = n("967241"),
  S = n("42203"),
  T = n("377253"),
  A = n("956089"),
  _ = n("599110"),
  M = n("659500"),
  I = n("254490"),
  N = n("412861"),
  v = n("149022"),
  x = n("891302"),
  L = n("64096"),
  y = n("49111"),
  R = n("994428"),
  O = n("491096"),
  D = n("782340"),
  P = n("245150");

function b(e, t, a, l) {
  (0, o.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("811475").then(n.bind(n, "811475"));
    return n => (0, s.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: a,
      analyticsLocations: l
    })
  }, {
    modalKey: u.activityInviteKey
  })
}
let j = /(.*)```(\w+)\n(.*)```(.*)/s;

function k(e) {
  let {
    channelId: t
  } = e, n = (0, i.useStateFromStores)([S.default], () => S.default.getChannel(t)), o = (0, i.useStateFromStores)([T.default], () => T.default.hasCurrentUserSentMessageSinceAppStart()), u = (0, x.useActivitiesInTextOnboardingVisibility)(n, "ChannelAttachMenu"), d = [];
  o && (null == u ? void 0 : u.desktopThrobberEnabled) && d.push(r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE);
  let [c] = (0, C.useGetDismissibleContent)(d);
  return a.useEffect(() => () => {
    c === r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE && (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE, {
      dismissAction: R.ContentDismissActionType.TAKE_ACTION
    })
  }, [c]), (0, s.jsx)(p.default, {
    contentTypes: d,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE ? (0, s.jsx)(A.TextBadge, {
        text: D.default.Messages.NEW,
        color: l.default.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function F(e) {
  let {
    channel: t,
    options: i,
    onFileUpload: u,
    onClose: C,
    onSelect: p,
    draftType: S,
    editorTextContent: T,
    setValue: x,
    openClips: F
  } = e;
  (0, m.useMaybeFetchPremiumLikelihood)(E.default);
  let {
    analyticsLocations: H
  } = (0, f.default)();
  a.useEffect(() => {
    _.default.track(y.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function U() {
    (0, g.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function G() {
    _.default.track(y.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), x("/", (0, v.toRichValue)("/"))
  }

  function B() {
    F()
  }

  function V() {
    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: R.ContentDismissActionType.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("487757").then(n.bind(n, "487757"));
      return n => (0, s.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: O.POLL_CREATION_MODAL_KEY
    })
  }

  function w() {
    _.default.track(y.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, c.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? y.AnalyticsPages.DM_CHANNEL : y.AnalyticsPages.GUILD_CHANNEL,
        section: y.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: y.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: y.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: H
    }), (0, d.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function W() {
    let e = T,
      n = "txt",
      s = "",
      a = T.match(j);
    null != a && (s = a[1], n = a[2], e = a[3], s += a[4]), (0, N.promptToUpload)([(0, I.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, S), M.ComponentDispatch.dispatchToLastSubscribed(y.ComponentActions.CLEAR_TEXT), "" !== s && M.ComponentDispatch.dispatchToLastSubscribed(y.ComponentActions.INSERT_TEXT, {
      plainText: s
    })
  }
  return (0, s.jsx)(o.Menu, {
    onSelect: p,
    navId: "channel-attach",
    onClose: C,
    "aria-label": D.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: P.menu,
    children: i.map(function(e) {
      var n;
      let a = (0, s.jsxs)("div", {
        className: P.optionLabel,
        children: [(0, s.jsx)(e.icon, {
          className: P.optionIcon
        }), (0, s.jsx)("div", {
          className: P.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, s.jsx)(A.NumberBadge, {
          className: P.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case L.AttachmentTypes.UPLOAD_A_FILE:
          return (0, s.jsx)(o.MenuItem, {
            id: "upload-file",
            label: a,
            action: u
          }, "upload-file");
        case L.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === T) return null;
          return (0, s.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: a,
            action: W
          }, "upload-text-as-file");
        case L.AttachmentTypes.CLIPS:
          return (0, s.jsx)(o.MenuItem, {
            id: "clips",
            label: a,
            action: B
          }, "clips");
        case L.AttachmentTypes.POLL:
          return (0, s.jsx)(o.MenuItem, {
            id: "poll",
            label: a,
            action: V
          }, "poll");
        case L.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, s.jsx)(o.MenuItem, {
            id: "play",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(_.default.track(y.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: y.AnalyticsSections.CHANNEL_TEXT_AREA
              }), b(n, t, y.ActivityActionTypes.JOIN, H))
            }
          }, "play");
        case L.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, s.jsx)(o.MenuItem, {
            id: "listen",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(_.default.track(y.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: y.AnalyticsSections.CHANNEL_TEXT_AREA
              }), b(n, t, y.ActivityActionTypes.LISTEN, H))
            }
          }, "listen");
        case L.AttachmentTypes.INVITE_TO_WATCH:
          return (0, s.jsx)(o.MenuItem, {
            id: "watch",
            label: a,
            action: () => {
              var n;
              return n = e.activity, void(_.default.track(y.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: y.AnalyticsSections.CHANNEL_TEXT_AREA
              }), b(n, t, y.ActivityActionTypes.WATCH, H))
            }
          }, "watch");
        case L.AttachmentTypes.CREATE_THREAD:
          return (0, s.jsx)(o.MenuItem, {
            id: "THREAD",
            label: a,
            action: U
          }, "THREAD");
        case L.AttachmentTypes.SLASH_COMMAND:
          return (0, s.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: a,
            action: G
          }, "SLASH_COMMAND");
        case L.AttachmentTypes.ACTIVITY:
          return (0, s.jsx)(o.MenuItem, {
            id: "activity",
            label: a,
            action: w,
            hint: (0, s.jsx)(k, {
              channelId: t.id
            })
          }, "activity");
        default:
          return null
      }
    })
  })
}