n.d(t, {
  r: function() {
return A;
  }
});
var s = n(735250),
  a = n(470079),
  r = n(442837),
  i = n(481060),
  o = n(239091),
  u = n(230711),
  _ = n(479531),
  l = n(390322),
  T = n(617136),
  E = n(272008),
  I = n(113434),
  c = n(569984),
  d = n(918701),
  R = n(341907),
  m = n(46140),
  S = n(981631),
  g = n(231338),
  N = n(689938);

function C(e) {
  var t;
  let n = (0, r.e7)([c.Z], () => c.Z.questDeliveryOverride, []),
l = (0, d.GN)(e.questContent),
C = (0, d.zK)(e.quest, m.S7.IN_HOUSE_CONSOLE_QUEST),
{
  handleComplete: A,
  handleResetDismissibilityClick: f,
  handleResetStatusClick: M,
  handleOverrideDeliveryClick: L
} = (0, I.kJ)(e.quest.id),
D = a.useCallback(() => {
  (0, d.FE)(e.quest, {
    content: e.questContent,
    ctaContent: T.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
O = a.useCallback(() => {
  (0, d.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: T.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
U = e => (0, i.showToast)((0, i.createToast)(new _.Z(e, e.status).message, i.ToastType.FAILURE));
  return (0, s.jsxs)(i.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, o.Zy)();
},
navId: 'quests-entry',
'aria-label': N.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : g.dG,
children: [
  (0, s.jsxs)(i.MenuGroup, {
    children: [
      !1 === C && (0, s.jsx)(i.MenuItem, {
        id: 'play-game',
        label: N.Z.Messages.QUESTS_GET_THIS_GAME,
        action: D,
        icon: i.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(i.MenuItem, {
        id: 'share-link',
        label: N.Z.Messages.COPY_LINK,
        action: O,
        icon: i.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(i.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(i.MenuItem, {
        id: 'learn-more',
        label: N.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, T._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: T.jZ.CONTEXT_MENU_LEARN_MORE
          }), u.Z.open(S.oAB.INVENTORY);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(i.MenuItem, {
        id: 'display-disclosure',
        label: N.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, R.az)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: T.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      l && (0, s.jsx)(i.MenuItem, {
        id: 'hide-entrypoint',
        label: N.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, T._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: T.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, d.GN)(e.questContent) && (0, E.gl)(e.quest.id, e.questContent);
        },
        subtext: N.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, s.jsxs)(i.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, s.jsx)(i.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: L
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: f
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: M
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: A
      }),
      (0, d.$J)(e.quest) && (0, s.jsxs)(i.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(i.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, d.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(i.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, E.CS)(e.quest.id, !0).catch(U)
          }),
          (0, s.jsx)(i.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, E.is)(e.quest.id).catch(U)
          })
        ]
      })
    ]
  }, 'preview-controls')
]
  });
}

function A(e) {
  let {
children: t,
onOpen: n,
onClose: r,
preventIdle: o,
quest: u,
questContent: _,
questContentPosition: E,
...I
  } = e, c = a.useCallback(() => {
(0, T._3)({
  questId: u.id,
  questContent: _,
  questContentCTA: T.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: E
}), null != n && n();
  }, [
n,
u.id,
_,
E
  ]);
  return (0, s.jsx)(i.Popout, {
onRequestOpen: c,
onRequestClose: r,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return o ? (0, s.jsx)(l.Z, {
    children: (0, s.jsx)(C, {
      ...I,
      quest: u,
      questContent: _,
      questContentPosition: E,
      onClose: t
    })
  }) : (0, s.jsx)(C, {
    ...I,
    quest: u,
    questContent: _,
    questContentPosition: E,
    onClose: t
  });
},
animation: i.Popout.Animation.NONE,
children: e => t(e)
  });
}