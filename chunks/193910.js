"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("831209"),
  i = n("442837"),
  r = n("524437"),
  o = n("481060"),
  u = n("538239"),
  d = n("566620"),
  c = n("403404"),
  f = n("906732"),
  h = n("605236"),
  m = n("706140"),
  p = n("243778"),
  E = n("857185"),
  C = n("911200"),
  g = n("488131"),
  S = n("592125"),
  _ = n("375954"),
  T = n("26290"),
  I = n("626135"),
  A = n("585483"),
  v = n("403182"),
  N = n("127654"),
  x = n("752305"),
  M = n("423490"),
  R = n("951211"),
  L = n("981631"),
  y = n("921944"),
  O = n("489887"),
  j = n("689938"),
  P = n("604613");

function D(e, t, l, s) {
  (0, o.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.resolve().then(n.bind(n, "538239"));
    return n => (0, a.jsx)(i, {
      ...n,
      activity: e,
      channel: t,
      activityActionType: l,
      analyticsLocations: s
    })
  }, {
    modalKey: u.activityInviteKey
  })
}
let b = /(.*)```(\w+)\n(.*)```(.*)/s;

function U(e) {
  let {
    channelId: t
  } = e, n = (0, i.useStateFromStores)([S.default], () => S.default.getChannel(t)), o = (0, i.useStateFromStores)([_.default], () => _.default.hasCurrentUserSentMessageSinceAppStart()), u = (0, M.useActivitiesInTextOnboardingVisibility)(n, "ChannelAttachMenu"), d = [];
  o && (null == u ? void 0 : u.desktopThrobberEnabled) && d.push(r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE);
  let [c] = (0, m.useGetDismissibleContent)(d);
  return l.useEffect(() => () => {
    c === r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE && (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE, {
      dismissAction: y.ContentDismissActionType.TAKE_ACTION
    })
  }, [c]), (0, a.jsx)(p.default, {
    contentTypes: d,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE ? (0, a.jsx)(T.TextBadge, {
        text: j.default.Messages.NEW,
        color: s.default.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function F(e) {
  let {
    channel: t,
    options: i,
    onFileUpload: u,
    onClose: m,
    onSelect: p,
    draftType: S,
    editorTextContent: _,
    setValue: M,
    openClips: F
  } = e;
  (0, E.useMaybeFetchPremiumLikelihood)(C.default);
  let {
    analyticsLocations: w
  } = (0, f.default)();
  l.useEffect(() => {
    I.default.track(L.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function k() {
    (0, g.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function H() {
    I.default.track(L.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), M("/", (0, x.toRichValue)("/"))
  }

  function B() {
    F()
  }

  function G() {
    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: y.ContentDismissActionType.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("68784")]).then(n.bind(n, "611611"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: O.POLL_CREATION_MODAL_KEY
    })
  }

  function V() {
    I.default.track(L.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, c.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? L.AnalyticsPages.DM_CHANNEL : L.AnalyticsPages.GUILD_CHANNEL,
        section: L.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: L.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: L.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: w
    }), (0, d.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function W() {
    let e = _,
      n = "txt",
      a = "",
      l = _.match(b);
    null != l && (a = l[1], n = l[2], e = l[3], a += l[4]), (0, N.promptToUpload)([(0, v.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, S), A.ComponentDispatch.dispatchToLastSubscribed(L.ComponentActions.CLEAR_TEXT), "" !== a && A.ComponentDispatch.dispatchToLastSubscribed(L.ComponentActions.INSERT_TEXT, {
      plainText: a
    })
  }
  return (0, a.jsx)(o.Menu, {
    onSelect: p,
    navId: "channel-attach",
    onClose: m,
    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: P.menu,
    children: i.map(function(e) {
      var n;
      let l = (0, a.jsxs)("div", {
        className: P.optionLabel,
        children: [(0, a.jsx)(e.icon, {
          className: P.optionIcon
        }), (0, a.jsx)("div", {
          className: P.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(T.NumberBadge, {
          className: P.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case R.AttachmentTypes.UPLOAD_A_FILE:
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-file",
            label: l,
            action: u
          }, "upload-file");
        case R.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === _) return null;
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: l,
            action: W
          }, "upload-text-as-file");
        case R.AttachmentTypes.CLIPS:
          return (0, a.jsx)(o.MenuItem, {
            id: "clips",
            label: l,
            action: B
          }, "clips");
        case R.AttachmentTypes.POLL:
          return (0, a.jsx)(o.MenuItem, {
            id: "poll",
            label: l,
            action: G
          }, "poll");
        case R.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, a.jsx)(o.MenuItem, {
            id: "play",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(I.default.track(L.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: L.AnalyticsSections.CHANNEL_TEXT_AREA
              }), D(n, t, L.ActivityActionTypes.JOIN, w))
            }
          }, "play");
        case R.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, a.jsx)(o.MenuItem, {
            id: "listen",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(I.default.track(L.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: L.AnalyticsSections.CHANNEL_TEXT_AREA
              }), D(n, t, L.ActivityActionTypes.LISTEN, w))
            }
          }, "listen");
        case R.AttachmentTypes.INVITE_TO_WATCH:
          return (0, a.jsx)(o.MenuItem, {
            id: "watch",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(I.default.track(L.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: L.AnalyticsSections.CHANNEL_TEXT_AREA
              }), D(n, t, L.ActivityActionTypes.WATCH, w))
            }
          }, "watch");
        case R.AttachmentTypes.CREATE_THREAD:
          return (0, a.jsx)(o.MenuItem, {
            id: "THREAD",
            label: l,
            action: k
          }, "THREAD");
        case R.AttachmentTypes.SLASH_COMMAND:
          return (0, a.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: l,
            action: H
          }, "SLASH_COMMAND");
        case R.AttachmentTypes.ACTIVITY:
          return (0, a.jsx)(o.MenuItem, {
            id: "activity",
            label: l,
            action: V,
            hint: (0, a.jsx)(U, {
              channelId: t.id
            })
          }, "activity");
        default:
          return null
      }
    })
  })
}