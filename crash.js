async function crash() {
    try {
        await (async () => {throw new Error('dead');})();
    } catch (e) {
        throw new Error('rethrow');
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
