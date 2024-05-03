"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return S
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("204097"),
  i = n("80181"),
  r = n("952265"),
  o = n("481060"),
  u = n("239091"),
  d = n("230711"),
  c = n("390322"),
  f = n("572004"),
  E = n("617136"),
  _ = n("272008"),
  m = n("918701"),
  T = n("341907"),
  I = n("981631"),
  p = n("231338"),
  h = n("689938");

function N(e) {
  var t;
  let c = (0, m.isDismissible)(e.questContent),
    N = a.useCallback(() => {
      (0, T.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: E.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : p.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: h.default.Messages.QUESTS_PLAY_GAME,
        action: N,
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: h.default.Messages.COPY_LINK,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_COPY_LINK
          }), (0, f.copy)((0, m.getQuestUrl)(e.quest.id))
        },
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: h.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(I.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: h.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          }), (0, r.openModalLazy)(async () => {
            let {
              default: t
            } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, "316210"));
            return n => (0, s.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.quest.config
            })
          })
        }
      }), c && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: h.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.isDismissible)(e.questContent) && (0, _.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: h.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(o.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: () => {
          (0, _.resetQuestDismissibilityStatus)(e.quest.id)
        }
      }), (0, s.jsx)(o.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          (0, _.resetQuestPreviewStatus)(e.quest.id)
        }
      }), (0, s.jsx)(o.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: () => {
          (0, _.completeQuestPreview)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function S(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: r,
    questContent: u,
    ...d
  } = e, f = a.useCallback(() => {
    (0, E.trackQuestContentClicked)({
      questId: r.id,
      questContent: u,
      questContentCTA: E.QuestContentCTA.OPEN_CONTEXT_MENU
    }), null != n && n()
  }, [n, r, u]);
  return (0, s.jsx)(o.Popout, {
    onRequestOpen: f,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(c.default, {
        children: (0, s.jsx)(N, {
          ...d,
          quest: r,
          questContent: u,
          onClose: t
        })
      }) : (0, s.jsx)(N, {
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