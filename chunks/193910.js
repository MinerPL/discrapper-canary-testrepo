"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  S = n("375954"),
  _ = n("26290"),
  T = n("626135"),
  I = n("585483"),
  A = n("403182"),
  N = n("127654"),
  v = n("752305"),
  x = n("951211"),
  M = n("981631"),
  R = n("921944"),
  L = n("489887"),
  y = n("689938"),
  O = n("34382");

function j(e, t, l, s) {
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
let P = /(.*)```(\w+)\n(.*)```(.*)/s;

function D() {
  let e = (0, i.useStateFromStores)([S.default], () => S.default.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, m.useGetDismissibleContent)(t);
  return l.useEffect(() => () => {
    n === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: R.ContentDismissActionType.TAKE_ACTION
    })
  }, [n]), (0, a.jsx)(p.default, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === r.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, a.jsx)(_.TextBadge, {
        text: y.default.Messages.NEW,
        color: s.default.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function b(e) {
  let {
    channel: t,
    options: i,
    onFileUpload: u,
    onClose: m,
    onSelect: p,
    draftType: S,
    editorTextContent: b,
    setValue: U,
    openClips: F
  } = e;
  (0, E.useMaybeFetchPremiumLikelihood)(C.default);
  let {
    analyticsLocations: w
  } = (0, f.default)();
  l.useEffect(() => {
    T.default.track(M.AnalyticEvents.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]);

  function k() {
    (0, g.openThreadSidebarForCreating)(t, void 0, "Plus Button")
  }

  function H() {
    T.default.track(M.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), U("/", (0, v.toRichValue)("/"))
  }

  function B() {
    F()
  }

  function G() {
    (0, h.markDismissibleContentAsDismissed)(r.DismissibleContent.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: R.ContentDismissActionType.TAKE_ACTION
    }), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("68784")]).then(n.bind(n, "611611"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    }, {
      modalKey: L.POLL_CREATION_MODAL_KEY
    })
  }

  function V() {
    T.default.track(M.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, c.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? M.AnalyticsPages.DM_CHANNEL : M.AnalyticsPages.GUILD_CHANNEL,
        section: M.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: M.AnalyticsObjects.CONTEXT_MENU_ITEM,
        objectType: M.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: w
    }), (0, d.fetchShelf)({
      guildId: t.guild_id
    })
  }

  function W() {
    let e = b,
      n = "txt",
      a = "",
      l = b.match(P);
    null != l && (a = l[1], n = l[2], e = l[3], a += l[4]), (0, N.promptToUpload)([(0, A.makeFile)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, S), I.ComponentDispatch.dispatchToLastSubscribed(M.ComponentActions.CLEAR_TEXT), "" !== a && I.ComponentDispatch.dispatchToLastSubscribed(M.ComponentActions.INSERT_TEXT, {
      plainText: a
    })
  }
  return (0, a.jsx)(o.Menu, {
    onSelect: p,
    navId: "channel-attach",
    onClose: m,
    "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    className: O.menu,
    children: i.map(function(e) {
      var n;
      let l = (0, a.jsxs)("div", {
        className: O.optionLabel,
        children: [(0, a.jsx)(e.icon, {
          className: O.optionIcon
        }), (0, a.jsx)("div", {
          className: O.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(_.NumberBadge, {
          className: O.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : s.default.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case x.AttachmentTypes.UPLOAD_A_FILE:
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-file",
            label: l,
            action: u
          }, "upload-file");
        case x.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
          if ("" === b) return null;
          return (0, a.jsx)(o.MenuItem, {
            id: "upload-text-as-file",
            label: l,
            action: W
          }, "upload-text-as-file");
        case x.AttachmentTypes.CLIPS:
          return (0, a.jsx)(o.MenuItem, {
            id: "clips",
            label: l,
            action: B
          }, "clips");
        case x.AttachmentTypes.POLL:
          return (0, a.jsx)(o.MenuItem, {
            id: "poll",
            label: l,
            action: G
          }, "poll");
        case x.AttachmentTypes.INVITE_TO_PLAY_GAME:
          return (0, a.jsx)(o.MenuItem, {
            id: "play",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(T.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: n.application_id,
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), j(n, t, M.ActivityActionTypes.JOIN, w))
            }
          }, "play");
        case x.AttachmentTypes.INVITE_TO_LISTEN:
          return (0, a.jsx)(o.MenuItem, {
            id: "listen",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(T.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Listen Invite",
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), j(n, t, M.ActivityActionTypes.LISTEN, w))
            }
          }, "listen");
        case x.AttachmentTypes.INVITE_TO_WATCH:
          return (0, a.jsx)(o.MenuItem, {
            id: "watch",
            label: l,
            action: () => {
              var n;
              return n = e.activity, void(T.default.track(M.AnalyticEvents.OPEN_MODAL, {
                type: "Send Watch Invite",
                location: M.AnalyticsSections.CHANNEL_TEXT_AREA
              }), j(n, t, M.ActivityActionTypes.WATCH, w))
            }
          }, "watch");
        case x.AttachmentTypes.CREATE_THREAD:
          return (0, a.jsx)(o.MenuItem, {
            id: "THREAD",
            label: l,
            action: k
          }, "THREAD");
        case x.AttachmentTypes.SLASH_COMMAND:
          return (0, a.jsx)(o.MenuItem, {
            id: "SLASH_COMMAND",
            label: l,
            action: H
          }, "SLASH_COMMAND");
        case x.AttachmentTypes.ACTIVITY:
          return (0, a.jsx)(o.MenuItem, {
            id: "activity",
            label: l,
            action: V,
            hint: (0, a.jsx)(D, {})
          }, "activity");
        default:
          return null
      }
    })
  })
}