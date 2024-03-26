"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return A
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("821455"),
  i = n("923748"),
  r = n("551042"),
  o = n("77078"),
  u = n("272030"),
  d = n("79112"),
  c = n("545158"),
  E = n("124824"),
  f = n("306160"),
  _ = n("128259"),
  T = n("815496"),
  I = n("448881"),
  m = n("227231"),
  N = n("49111"),
  p = n("843455"),
  S = n("782340");

function C(e) {
  var t;
  let a = (0, m.isDismissible)(e.questContent);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": S.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : p.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "get-game",
        label: S.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, _.handleClick)({
            href: e.quest.config.getGameLink,
            onConfirm: () => {
              (0, T.trackQuestContentClicked)({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentCTA: T.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
              }), (0, c.default)(e.quest.config.getGameLink)
            }
          })
        },
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: S.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_COPY_LINK
          }), (0, f.copy)((0, m.getQuestUrl)(e.quest.id))
        },
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: S.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(N.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: S.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          }), (0, r.openModalLazy)(async () => {
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
      }), a && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: S.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.isDismissible)(e.questContent) && (0, I.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: S.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function A(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: r,
    questContent: u,
    ...d
  } = e, c = a.useCallback(() => {
    (0, T.trackQuestContentClicked)({
      questId: r.id,
      questContent: u,
      questContentCTA: T.QuestContentCTA.OPEN_CONTEXT_MENU
    }), null != n && n()
  }, [n, r, u]);
  return (0, s.jsx)(o.Popout, {
    onRequestOpen: c,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(E.default, {
        children: (0, s.jsx)(C, {
          ...d,
          quest: r,
          questContent: u,
          onClose: t
        })
      }) : (0, s.jsx)(C, {
        ...d,
        quest: r,
        questContent: u,
        onClose: t
      })
    },
    animation: o.Popout.Animation.NONE,
    children: e => t(e)
  })
}