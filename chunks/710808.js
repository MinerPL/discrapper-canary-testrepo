s.d(t, {
  Z: function() {
return O;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(846027),
  l = s(304680),
  c = s(579806),
  d = s(729345),
  _ = s(921801),
  E = s(131951),
  u = s(226961),
  T = s(285952),
  I = s(12647),
  S = s(726985),
  N = s(981631),
  C = s(65154),
  m = s(689938),
  A = s(549856);
async function h() {
  let e = await c.Z.fileManager.getModulePath(),
t = c.Z.fileManager.join(e, 'discord_voice');
  c.Z.fileManager.showItemInFolder(t);
}

function g(e) {
  (0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
header: m.Z.Messages.SET_DEBUG_LOGGING,
confirmText: m.Z.Messages.OKAY,
cancelText: m.Z.Messages.CANCEL,
onCancel: t.onClose,
onConfirm: () => o.Z.setDebugLogging(e),
...t,
children: (0, n.jsx)(r.Text, {
  variant: 'text-md/normal',
  children: m.Z.Messages.SET_DEBUG_LOGGING_BODY
})
  }));
}

function O() {
  let [e, t] = a.useState(!1), {
debugLogging: s,
aecDumpEnabled: c
  } = (0, i.cj)([E.Z], () => ({
aecDumpSupported: E.Z.isAecDumpSupported(),
debugLogging: E.Z.getDebugLogging(),
aecDumpEnabled: E.Z.getAecDump(),
supportsConnectionReplay: E.Z.supports(C.AN.CONNECTION_REPLAY)
  })), O = (0, i.e7)([u.ZP], () => u.ZP.shouldRecordNextConnection());
  async function p() {
t(!0);
try {
  await E.Z.getMediaEngine().writeAudioDebugState(), await I.Z.submitLiveCrashReport({
    message: {
      message: 'User Live Dump'
    }
  }), await (0, d.E)(N.GU0.RTC), ! function() {
    let e = m.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
      t = m.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
    (0, r.openModal)(s => (0, n.jsx)(r.ConfirmModal, {
      header: e,
      confirmButtonColor: r.Button.Colors.BRAND,
      confirmText: m.Z.Messages.OKAY,
      ...s,
      children: (0, n.jsx)(r.Text, {
        variant: 'text-md/normal',
        children: t
      })
    }));
  }();
} catch (e) {
  ! function(e) {
    let t = m.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
      s = null != e ? e : m.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
    (0, r.openModal)(e => (0, n.jsx)(r.ConfirmModal, {
      header: t,
      confirmButtonColor: r.Button.Colors.BRAND,
      confirmText: m.Z.Messages.OKAY,
      ...e,
      children: (0, n.jsx)(r.Text, {
        variant: 'text-md/normal',
        children: s
      })
    }));
  }(e.displayMessage);
}
  }
  return (0, n.jsxs)(r.FormSection, {
className: A.marginBottom40,
title: m.Z.Messages.FORM_LABEL_DEBUG,
children: [
  (0, n.jsx)(_.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
    children: (0, n.jsx)(r.FormSwitch, {
      value: c,
      onChange: e => o.Z.setAecDump(e),
      note: m.Z.Messages.FORM_HELP_AEC_DUMP,
      children: m.Z.Messages.FORM_CHECKBOX_AEC_DUMP
    })
  }),
  (0, n.jsxs)(_.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
    children: [
      (0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        value: O,
        onChange: e => l.TC(e),
        note: m.Z.Messages.FORM_HELP_CONNECTION_LOG,
        children: m.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }),
      (0, n.jsx)(r.FormItem, {
        children: (0, n.jsx)(T.Z, {
          className: A.marginBottom20,
          children: (0, n.jsx)(T.Z.Child, {
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
  (0, n.jsxs)(_.F, {
    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
    children: [
      (0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        value: s,
        onChange: g,
        note: m.Z.Messages.FORM_HELP_DEBUG_LOGGING,
        children: m.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING
      }),
      (0, n.jsx)(r.FormItem, {
        children: (0, n.jsxs)(T.Z, {
          children: [
            (0, n.jsx)(T.Z.Child, {
              grow: 0,
              shrink: 0,
              children: (0, n.jsx)(r.Button, {
                disabled: e,
                size: r.Button.Sizes.SMALL,
                onClick: p,
                children: m.Z.Messages.UPLOAD
              })
            }),
            (0, n.jsx)(T.Z.Child, {
              grow: 0,
              shrink: 0,
              children: (0, n.jsx)(r.Button, {
                size: r.Button.Sizes.SMALL,
                onClick: h,
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