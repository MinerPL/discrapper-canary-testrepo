n.d(t, {
  r: function() {
return f;
  }
});
var s = n(735250),
  o = n(470079),
  i = n(442837),
  a = n(481060),
  r = n(239091),
  l = n(479531),
  u = n(390322),
  c = n(617136),
  d = n(272008),
  E = n(113434),
  b = n(569984),
  m = n(918701),
  C = n(341907),
  T = n(709158),
  p = n(46140),
  x = n(231338),
  _ = n(689938);

function v(e) {
  var t;
  let n = (0, i.e7)([b.Z], () => b.Z.questDeliveryOverride, []),
u = (0, m.GN)(e.questContent),
v = (0, m.zK)(e.quest, p.S7.IN_HOUSE_CONSOLE_QUEST),
f = (0, T.Z)(p.dr.QUEST_CONTEXT_MENU),
{
  handleComplete: q,
  handleResetDismissibilityClick: h,
  handleResetStatusClick: M,
  handleOverrideDeliveryClick: N
} = (0, E.kJ)(e.quest.id),
g = o.useCallback(() => {
  (0, m.FE)(e.quest, {
    content: e.questContent,
    ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
j = o.useCallback(() => {
  (0, m.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
S = e => (0, a.showToast)((0, a.createToast)(new l.Z(e, e.status).message, a.ToastType.FAILURE));
  return (0, s.jsxs)(a.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, r.Zy)();
},
navId: 'quests-entry',
'aria-label': _.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : x.dG,
children: [
  (0, s.jsxs)(a.MenuGroup, {
    children: [
      !1 === v && (0, s.jsx)(a.MenuItem, {
        id: 'play-game',
        label: _.Z.Messages.QUESTS_GET_THIS_GAME,
        action: g,
        icon: a.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(a.MenuItem, {
        id: 'share-link',
        label: _.Z.Messages.COPY_LINK,
        action: j,
        icon: a.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(a.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(a.MenuItem, {
        id: 'learn-more',
        label: _.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
          }), (0, C.navigateToQuestHome)(p.dr.QUEST_CONTEXT_MENU, e.quest.id);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: 'display-disclosure',
        label: _.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, C.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      u && (0, s.jsx)(a.MenuItem, {
        id: 'hide-entrypoint',
        label: _.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
        },
        subtext: f ? _.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME : _.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, s.jsxs)(a.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, s.jsx)(a.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: N
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: h
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: M
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: q
      }),
      (0, m.$J)(e.quest) && (0, s.jsxs)(a.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(a.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, m.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(a.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, d.CS)(e.quest.id, !0).catch(S)
          }),
          (0, s.jsx)(a.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, d.is)(e.quest.id).catch(S)
          })
        ]
      })
    ]
  }, 'preview-controls')
]
  });
}

function f(e) {
  let {
children: t,
onOpen: n,
onClose: i,
preventIdle: r,
quest: l,
questContent: d,
questContentPosition: E,
...b
  } = e, m = o.useCallback(() => {
(0, c._3)({
  questId: l.id,
  questContent: d,
  questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: E
}), null != n && n();
  }, [
n,
l.id,
d,
E
  ]);
  return (0, s.jsx)(a.Popout, {
onRequestOpen: m,
onRequestClose: i,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return r ? (0, s.jsx)(u.Z, {
    children: (0, s.jsx)(v, {
      ...b,
      quest: l,
      questContent: d,
      questContentPosition: E,
      onClose: t
    })
  }) : (0, s.jsx)(v, {
    ...b,
    quest: l,
    questContent: d,
    questContentPosition: E,
    onClose: t
  });
},
animation: a.Popout.Animation.NONE,
children: e => t(e)
  });
}