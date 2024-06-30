s.r(t);
var a = s(735250), n = s(470079), i = s(481060), o = s(689938), d = s(241343);
t.default = e => {
    let {
        transitionState: t,
        processFiles: s,
        onClose: l
    } = e;
    return n.useEffect(() => {
        (async () => {
            t === i.ModalTransitionState.ENTERED && (await s(), l());
        })();
    }, [
        l,
        s,
        t
    ]), (0, a.jsx)(i.ModalRoot, {
        transitionState: t,
        size: i.ModalSize.SMALL,
        'aria-label': o.Z.Messages.UPLOADING_FILES_TITLE,
        children: (0, a.jsxs)(i.ModalContent, {
            className: d.modalContent,
            children: [
                (0, a.jsx)(i.Spinner, { className: d.spinner }),
                (0, a.jsx)(i.FormSection, {
                    tag: i.FormTitleTags.H1,
                    titleClassName: d.title,
                    title: o.Z.Messages.UPLOADING_FILES_TITLE,
                    className: d.__invalid_content,
                    children: (0, a.jsx)(i.FormText, {
                        type: i.FormTextTypes.DESCRIPTION,
                        className: d.description,
                        children: o.Z.Messages.UPLOADING_LOADING_TEXT
                    })
                })
            ]
        })
    });
};
