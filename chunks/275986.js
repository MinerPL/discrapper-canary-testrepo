"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenu: function() {
    return S
  },
  QuestsEntryContextMenuPopout: function() {
    return p
  }
});
var s = n("37983"),
  u = n("884691"),
  o = n("821455"),
  i = n("923748"),
  l = n("551042"),
  a = n("77078"),
  r = n("272030"),
  c = n("79112"),
  d = n("545158"),
  C = n("124824"),
  E = n("306160"),
  _ = n("128259"),
  f = n("815496"),
  M = n("448881"),
  N = n("227231"),
  T = n("49111"),
  h = n("843455"),
  q = n("782340");

function S(e) {
  var t;
  let u = (0, N.isDismissible)(e.questContent);
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": q.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : h.NOOP,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [(0, s.jsx)(a.MenuItem, {
        id: "get-game",
        label: q.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, _.handleClick)({
            href: e.quest.config.getGameLink,
            onConfirm: () => {
              (0, f.trackQuestContentClicked)(e.quest.id, e.questContent, f.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK), (0, d.default)(e.quest.config.getGameLink)
            }
          })
        },
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: q.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, f.trackQuestContentClicked)(e.quest.id, e.questContent, f.QuestContentCTA.CONTEXT_MENU_COPY_LINK), (0, E.copy)((0, N.getQuestUrl)(e.quest.id))
        },
        icon: o.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(a.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(a.MenuItem, {
        id: "learn-more",
        label: q.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, f.trackQuestContentClicked)(e.quest.id, e.questContent, f.QuestContentCTA.CONTEXT_MENU_LEARN_MORE), c.default.open(T.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: q.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, f.trackQuestContentClicked)(e.quest.id, e.questContent, f.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE), (0, l.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("970143").then(n.bind(n, "970143"));
            return n => (0, s.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.quest.config
            })
          })
        }
      }), u && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: q.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, f.trackQuestContentClicked)(e.quest.id, e.questContent, f.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT), (0, N.isDismissible)(e.questContent) && (0, M.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: q.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function p(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    preventIdle: i,
    quest: l,
    questContent: r,
    ...c
  } = e, d = u.useCallback(() => {
    (0, f.trackQuestContentClicked)(l.id, r, f.QuestContentCTA.OPEN_CONTEXT_MENU), null != n && n()
  }, [n, l, r]);
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: d,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(C.default, {
        children: (0, s.jsx)(S, {
          ...c,
          quest: l,
          questContent: r,
          onClose: t
        })
      }) : (0, s.jsx)(S, {
        ...c,
        quest: l,
        questContent: r,
        onClose: t
      })
    },
    animation: a.Popout.Animation.NONE,
    children: e => t(e)
  })
}