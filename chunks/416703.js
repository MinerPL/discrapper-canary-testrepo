var n = r(310176),
	i = r(379846),
	o = r(680444),
	a = r(574369),
	u = r(999368),
	s = r(118658),
	c = r(121868),
	l = r(608382),
	f = r(722661),
	p = r(225389),
	h = r(174076),
	d = r(71716),
	g = r(869045),
	y = r(110599),
	v = r(801539),
	m = r(887868),
	_ = r(869201),
	b = o.isOptionKeyCommand,
	S = s.isBrowser('Chrome');
t.exports = function (t, e) {
	var r = e.which,
		o = t._latestEditorState;
	function s(r) {
		var n = t.props[r];
		return !!n && (n(e), !0);
	}
	switch (r) {
		case a.RETURN:
			if ((e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o)))) return;
			break;
		case a.ESC:
			if ((e.preventDefault(), s('onEscape'))) return;
			break;
		case a.TAB:
			if (s('onTab')) return;
			break;
		case a.UP:
			if (s('onUpArrow')) return;
			break;
		case a.RIGHT:
			if (s('onRightArrow')) return;
			break;
		case a.DOWN:
			if (s('onDownArrow')) return;
			break;
		case a.LEFT:
			if (s('onLeftArrow')) return;
			break;
		case a.SPACE:
			S && b(e) && e.preventDefault();
	}
	var w = t.props.keyBindingFn(e);
	if (null == w || '' === w) {
		if (r === a.SPACE && S && b(e)) {
			var k = n.replaceText(o.getCurrentContent(), o.getSelection(), '\xA0');
			t.update(i.push(o, k, 'insert-characters'));
		}
		return;
	}
	if ('undo' === w) {
		_(e, o, t.update);
		return;
	}
	if ((e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp))))) {
		var x = (function (t, e, r) {
			switch (t) {
				case 'redo':
					return i.redo(e);
				case 'delete':
					return v(e);
				case 'delete-word':
					return p(e);
				case 'backspace':
					return y(e);
				case 'backspace-word':
					return f(e);
				case 'backspace-to-start-of-line':
					return l(e, r);
				case 'split-block':
					return h(e);
				case 'transpose-characters':
					return m(e);
				case 'move-selection-to-start-of-block':
					return g(e);
				case 'move-selection-to-end-of-block':
					return d(e);
				case 'secondary-cut':
					return u.cut(e);
				case 'secondary-paste':
					return u.paste(e);
				default:
					return e;
			}
		})(w, o, e);
		x !== o && t.update(x);
	}
};
