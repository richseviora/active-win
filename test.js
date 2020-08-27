import util from 'util';
import test from 'ava';
import activeWin from '.';

function asserter(t, result) {
	t.log(util.inspect(result));
	t.is(typeof result, 'object');
	t.is(typeof result.title, 'string');
	t.is(typeof result.id, 'number');
	t.is(typeof result.owner, 'object');
	t.is(typeof result.owner.name, 'string');
}

function arrayAsserter(t, result) {
	t.log(util.inspect(result));
	t.is(typeof result, 'object');
	const firstResult = result[0];
	asserter(t, firstResult);
}

test('async', async (t) => {
	asserter(t, await activeWin());
});

test('sync', (t) => {
	asserter(t, activeWin.sync());
});

test('allWindowsAsync', async (t) => {
	arrayAsserter(t, await activeWin.allWindowsAsync());
});

test('allWindowsSync', (t) => {
	arrayAsserter(t, activeWin.allWindowsSync());
});
