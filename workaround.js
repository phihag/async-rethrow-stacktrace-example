async function crash() {
    const err = new Error('rethrow');
    try {
        await (async () => {throw new Error('dead');})();
    } catch (e) {
        throw err;
    }
}

async function foo() {
    await crash();
}

async function entrypoint() {
    try {
        await foo();
    } catch(e) {
        console.log(e.stack);
    }
}

entrypoint();
