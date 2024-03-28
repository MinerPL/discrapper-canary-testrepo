"use strict";
a.r(s);
var t = a("735250"),
  i = a("470079"),
  n = a("481060"),
  l = a("689938"),
  o = a("154143");
s.default = e => {
  let {
    transitionState: s,
    processFiles: a,
    onClose: r
  } = e;
  return i.useEffect(() => {
    (async () => {
      s === n.ModalTransitionState.ENTERED && (await a(), r())
    })()
  }, [r, a, s]), (0, t.jsx)(n.ModalRoot, {
    transitionState: s,
    size: n.ModalSize.SMALL,
    "aria-label": l.default.Messages.UPLOADING_FILES_TITLE,
    children: (0, t.jsxs)(n.ModalContent, {
      className: o.modalContent,
      children: [(0, t.jsx)(n.Spinner, {
        className: o.spinner
      }), (0, t.jsx)(n.FormSection, {
        tag: n.FormTitleTags.H1,
        titleClassName: o.title,
        title: l.default.Messages.UPLOADING_FILES_TITLE,
        className: o.__invalid_content,
        children: (0, t.jsx)(n.FormText, {
          type: n.FormTextTypes.DESCRIPTION,
          className: o.description,
          children: l.default.Messages.UPLOADING_LOADING_TEXT
        })
      })]
    })
  })
}