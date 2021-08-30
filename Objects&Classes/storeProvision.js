function stores(current, items) {

    let store = [];

    for (let i = 0; i < current.length - 1; i += 2) {
        let item = current[i];
        let quantity = Number(current[i + 1]);

        let storage = {
            item,
            quantity
        };

        store.push(storage);
    }

    for (let i = 0; i < items.length - 1; i += 2) {
        let item = items[i];
        let quantity = Number(items[i + 1]);

        let storage = {
            item,
            quantity
        };

        let index = store.findIndex(x => x.item === item);

        if (index === -1) {
            store.push(storage);
        } else {
            store[index].quantity += quantity;
        }
    }

    for (let info of store) {
        console.log(`${info.item} -> ${info.quantity}`);
    }
}