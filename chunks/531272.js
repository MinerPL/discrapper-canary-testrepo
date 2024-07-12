var n = r(887109),
  i = r(379846),
  o = r(172213),
  a = r(482789);
t.exports = function(t) {
  if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
if (t._blockSelectEvents) {
  var e = t.props.editorState.getSelection();
  n.logBlockedSelectionEvent({
    anonymizedDom: 'N/A',
    extraParams: JSON.stringify({
      stacktrace: Error().stack
    }),
    selectionState: JSON.stringify(e.toJS())
  });
}
return;
  }
  var r = t.props.editorState,
u = a(r, o(t)),
s = u.selectionState;
  s !== r.getSelection() && (r = u.needsRecovery ? i.forceSelection(r, s) : i.acceptSelection(r, s), t.update(r));
};