"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  useCreateForumPost: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("143927"),
  i = n("481060"),
  r = n("570140"),
  o = n("668781"),
  u = n("966390"),
  d = n("680287"),
  c = n("470623"),
  f = n("957730"),
  h = n("3148"),
  m = n("703558"),
  p = n("403182"),
  E = n("928477"),
  C = n("981631"),
  g = n("689938");

function S(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: s,
    location: i,
    onThreadCreated: r,
    useDefaultThreadName: o
  } = e, d = l.useCallback((e, t, n, a) => {
    u.default.uploadFiles({
      channelId: e.id,
      uploads: t,
      draftType: m.DraftType.FirstThreadMessage,
      options: {
        stickerIds: a
      },
      parsedMessage: f.default.parse(e, n)
    })
  }, []);
  return (0, E.useCreateThreadCommon)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: s,
    location: i,
    onThreadCreated: r,
    useDefaultThreadName: o,
    uploadHandler: d
  })
}

function _(e) {
  let {
    parentChannel: t
  } = e, {
    name: l,
    appliedTags: u
  } = (0, c.useForumPostComposerStore)(e => {
    let {
      name: t,
      appliedTags: n
    } = e;
    return {
      name: t,
      appliedTags: n
    }
  }, s.default);
  return (0, E.useCreateForumPostCommon)({
    parentChannel: t,
    name: l,
    appliedTags: u,
    upload: function(e, l, s) {
      return new Promise((u, c) => {
        let f = new d.default(e);
        f.on("error", (e, l, s) => {
          if (l === C.AbortCodes.EXPLICIT_CONTENT) {
            let e = (0, h.createNonce)();
            null != s && null != s.attachments && s.attachments.length > 0 && (r.default.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
              messageId: e,
              channelId: t.id,
              attachments: s.attachments
            }), (0, i.openModalLazy)(async () => {
              let {
                default: l
              } = await Promise.all([n.e("99387"), n.e("57539")]).then(n.bind(n, "924188"));
              return n => (0, a.jsx)(l, {
                ...n,
                channelId: t.id,
                messageId: e
              })
            }))
          } else if (l === C.AbortCodes.ENTITY_TOO_LARGE) {
            let e = (0, p.maxFileSize)(t.getGuildId());
            o.default.show({
              title: g.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              body: g.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, p.sizeString)(e)
              })
            })
          } else l === C.AbortCodes.TOO_MANY_ATTACHMENTS && o.default.show({
            title: g.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            body: g.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: C.MAX_UPLOAD_COUNT
            })
          });
          c({
            body: s
          })
        }), f.on("complete", (e, t) => {
          u({
            body: t
          })
        }), f.uploadFiles(s, l, {
          addFilesTo: "message.attachments"
        })
      })
    }
  })
}