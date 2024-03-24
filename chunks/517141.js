"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  },
  useCreateForumPost: function() {
    return _
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("16470"),
  i = n("77078"),
  r = n("913144"),
  u = n("404118"),
  o = n("783480"),
  d = n("681736"),
  c = n("578198"),
  f = n("884351"),
  h = n("815297"),
  m = n("474643"),
  p = n("254490"),
  E = n("730498"),
  g = n("49111"),
  S = n("782340");

function C(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: s,
    location: i,
    onThreadCreated: r,
    useDefaultThreadName: u
  } = e, d = l.useCallback((e, t, n, a) => {
    o.default.uploadFiles({
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
    useDefaultThreadName: u,
    uploadHandler: d
  })
}

function _(e) {
  let {
    parentChannel: t
  } = e, {
    name: l,
    appliedTags: o
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
    appliedTags: o,
    upload: function(e, l, s) {
      return new Promise((o, c) => {
        let f = new d.default(e);
        f.on("error", (e, l, s) => {
          if (l === g.AbortCodes.EXPLICIT_CONTENT) {
            let e = (0, h.createNonce)();
            null != s && null != s.attachments && s.attachments.length > 0 && (r.default.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
              messageId: e,
              channelId: t.id,
              attachments: s.attachments
            }), (0, i.openModalLazy)(async () => {
              let {
                default: l
              } = await n.el("234235").then(n.bind(n, "234235"));
              return n => (0, a.jsx)(l, {
                ...n,
                channelId: t.id,
                messageId: e
              })
            }))
          } else if (l === g.AbortCodes.ENTITY_TOO_LARGE) {
            let e = (0, p.maxFileSize)(t.getGuildId());
            u.default.show({
              title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              body: S.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, p.sizeString)(e)
              })
            })
          } else l === g.AbortCodes.TOO_MANY_ATTACHMENTS && u.default.show({
            title: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            body: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: g.MAX_UPLOAD_COUNT
            })
          });
          c({
            body: s
          })
        }), f.on("complete", (e, t) => {
          o({
            body: t
          })
        }), f.uploadFiles(s, l, {
          addFilesTo: "message.attachments"
        })
      })
    }
  })
}