       
//template 
fetch('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=e11057297c6bb0535b4ffa00cdd87052').then(
    response => response.json()
    ).then(data => { 
        console.log(data);
    })
     
//create escrow
const createEscrow = () => {
    createCustomer("ESCROW", "ESCROW", "ESCROW", "ESCROW", "ESCROW", "ESCROW", "ESCROW")
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

const sendMoneyToCustomer = (id, amount) => {
    fetch(`http://api.reimaginebanking.com/accounts/ESCROW/transfers?key=e11057297c6bb0535b4ffa00cdd87052`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            "medium": "balance",
            "amount": `${amount}`,
            "payee_id": `${id}`,
            "transaction_date": Date.toString(),
            "status": "completed",
            "description": "string"
        })
    });
}

export const completeTransaction = (sender_id, receiver_id) => {
    //calls sendmoneytocustomer and sends what 
}

export const cancelTransaction = (sender_id) => {

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