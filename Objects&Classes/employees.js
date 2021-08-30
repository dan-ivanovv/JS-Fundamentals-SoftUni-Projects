function empoyees(list) {

    for (let employee of list) {
        let data = {
            name: employee,
            personalNumber: employee.length
        };

        console.log(`Name: ${data.name} -- Personal Number: ${data.personalNumber}`);

    }
}