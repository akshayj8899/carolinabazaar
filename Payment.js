       
//template 
fetch('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=e11057297c6bb0535b4ffa00cdd87052').then(
    response => response.json()
    ).then(data => { 
        console.log(data);
    })
     
//create escrow
const createEscrow = () => {
    fetch('http://api.reimaginebanking.com/merchants?key=e11057297c6bb0535b4ffa00cdd87052', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            "_id": "ESCROW",
            "first_name": "ESCROW",
            "last_name": "ESCROW",
            "address": {
                "street_number": "ESCROW",
                "street_name": "ESCROW",
                "city": "ESCROW",
                "state": "ESCROW",
                "zip": "ESCROW"
            }
        })
    })
}

export const getEscrow = () => {
    fetch(`http://api.reimaginebanking.com/merchants/ESCROW?key=e11057297c6bb0535b4ffa00cdd87052`).then(
        response => response.json()
        ).then(data => { 
            return data;
        });
}
    
export const sendMoneyToEscrow = (id, amount) => {
    fetch(`http://api.reimaginebanking.com/accounts/${id}/transfers?key=e11057297c6bb0535b4ffa00cdd87052`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            "medium": "balance",
            "amount": `${amount}`,
            "payee_id": "ESCROW",
            "transaction_date": Date.toString(),
            "status": "completed",
            "description": "string"
        })
    });
}

const sendMoneyToCustomer = () => {

}

export const completeTransaction = (id) => {
    
}

//create customer
const createCustomer = (firstName, lastName, street_number, street_name, city, state, zip) => {
    fetch('http://api.reimaginebanking.com/customers?key=e11057297c6bb0535b4ffa00cdd87052', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            "first_name": `${firstName}`,
            "last_name": `${lastName}`,
            "address": {
                "street_number": `${street_number}`,
                "street_name": `${street_name}`,
                "city": `${city}`,
                "state": `${state}`,
                "zip": `${zip}`
            }
        })
    })
}