import test from 'ava';
import webpackQs from '.';

test('title', t => {
	t.throws(() => {
		webpackQs(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(webpackQs('unicorns'), 'unicorns & rainbows');
});
