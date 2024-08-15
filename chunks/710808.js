t.d(s, {
  Z: function() {
return h;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(846027),
  l = t(304680),
  c = t(579806),
  d = t(600164),
  _ = t(729345),
  E = t(921801),
  u = t(131951),
  I = t(226961),
  T = t(12647),
  S = t(726985),
  N = t(981631),
  C = t(65154),
  m = t(689938),
  A = t(224499);
async function g() {
  let e = await c.Z.fileManager.getModulePath(),
s = c.Z.fileManager.join(e, 'discord_voice');
  c.Z.fileManager.showItemInFolder(s);
}

function O(e) {
  (0, r.openModal)(s => (0, n.jsx)(r.ConfirmModal, {
header: m.Z.Messages.SET_DEBUG_LOGGING,
confirmText: m.Z.Messages.OKAY,
cancelText: m.Z.Messages.CANCEL,
onCancel: s.onClose,
onConfirm: () => o.Z.setDebugLogging(e),
...s,
children: (0, n.jsx)(r.Text, {
  variant: 'text-md/normal',
  children: m.Z.Messages.SET_DEBUG_LOGGING_BODY
})
  }));
}

function h() {
  let [e, s] = a.useState(!1), {
debugLogging: t,
aecDumpEnabled: c
  } = (0, i.cj)([u.Z], () => ({
aecDumpSupported: u.Z.isAecDumpSupported(),
debugLogging: u.Z.getDebugLogging(),
aecDumpEnabled: u.Z.getAecDump(),
supportsConnectionReplay: u.Z.supports(C.AN.CONNECTION_REPLAY)
  })), h = (0, i.e7)([I.ZP], () => I.ZP.shouldRecordNextConnection());
  async function p() {
s(!0);
try {
  await u.Z.getMediaEngine().writeAudioDebugState(), await T.Z.submitLiveCrashReport({
    message: {
      message: 'User Live Dump'
    }
  }), await (0, _.E)(N.GU0.RTC), ! function() {
    let e = m.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
      s = m.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
    (0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
      header: e,
      confirmButtonColor: r.Button.Colors.BRAND,
      confirmText: m.Z.Messages.OKAY,
      ...t,
      children: (0, n.jsx)(r.Text, {
        variant: 'text-md/normal',
        children: s
      })
    }));
  }();
} catch (e) {
  ! function(e) {
    let s = m.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
      t = null != e ? e : m.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
    (0, r.openModal)(e => (0, n.jsx)(r.ConfirmModal, {
      header: s,
      confirmButtonColor: r.Button.Colors.BRAND,
      confirmText: m.Z.Messages.OKAY,
      ...e,
      children: (0, n.jsx)(r.Text, {
        variant: 'text-md/normal',
        children: t
      })
    }));
  }(e.displayMessage);
}
  }
  return (0, n.jsxs)(r.FormSection, {
className: A.marginBottom40,
title: m.Z.Messages.FORM_LABEL_DEBUG,
children: [
  (0, n.jsx)(E.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
    children: (0, n.jsx)(r.FormSwitch, {
      value: c,
      onChange: e => o.Z.setAecDump(e),
      note: m.Z.Messages.FORM_HELP_AEC_DUMP,
      children: m.Z.Messages.FORM_CHECKBOX_AEC_DUMP
    })
  }),
  (0, n.jsxs)(E.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
    children: [
      (0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        value: h,
        onChange: e => l.TC(e),
        note: m.Z.Messages.FORM_HELP_CONNECTION_LOG,
        children: m.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }),
      (0, n.jsx)(r.FormItem, {
        children: (0, n.jsx)(d.Z, {
          className: A.marginBottom20,
          children: (0, n.jsx)(d.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, n.jsx)(r.Button, {
              size: r.Button.Sizes.SMALL,
              onClick: () => l.z4(),
              children: m.Z.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      }),
      (0, n.jsx)(r.FormDivider, {
        className: A.marginBottom20
      })
    ]
  }),
  (0, n.jsxs)(E.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
    children: [
      (0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: O,
        note: m.Z.Messages.FORM_HELP_DEBUG_LOGGING,
        children: m.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING
      }),
      (0, n.jsx)(r.FormItem, {
        children: (0, n.jsxs)(d.Z, {
          children: [
            (0, n.jsx)(d.Z.Child, {
              grow: 0,
              shrink: 0,
              children: (0, n.jsx)(r.Button, {
                disabled: e,
                size: r.Button.Sizes.SMALL,
                onClick: p,
                children: m.Z.Messages.UPLOAD
              })
            }),
            (0, n.jsx)(d.Z.Child, {
              grow: 0,
              shrink: 0,
              children: (0, n.jsx)(r.Button, {
                size: r.Button.Sizes.SMALL,
                onClick: g,
                children: m.Z.Messages.SHOW_FOLDER
              })
            })
          ]
        })
      })
    ]
  })
]
  });
}