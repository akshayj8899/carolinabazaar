import fetch from 'node-fetch';

//create escrow
//returns id of escrow - very important
export const createEscrow = () => {
    return createCustomer("ESCROW", "ESCROW", "ESCROW", "ESCROW", "ESCROW", "NA", "00000");
}


export const getEscrow = () => {
    fetch(`http://api.reimaginebanking.com/merchants/ESCROW?key=e11057297c6bb0535b4ffa00cdd87052`).then(
        response => response.json()
        ).then(data => { 
            return data;
        });
}
    
export const sendMoneyToEscrow = (id, escrow_id, amount) => {
    fetch(`http://api.reimaginebanking.com/accounts/${id}/transfers?key=e11057297c6bb0535b4ffa00cdd87052`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            "medium": "balance",
            "amount": `${amount}`,
            "payee_id": `${escrow_id}`,
            "transaction_date": Date.toString(),
            "status": "completed",
            "description": "string"
        })
    });

    
}

export const sendMoneyToCustomer = (id, escrow_id, amount) => {
    fetch(`http://api.reimaginebanking.com/accounts/${escrow_id}/transfers?key=e11057297c6bb0535b4ffa00cdd87052`, {
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

export const completeTransaction = (transfer_id, receiver_id) => {
    //calls sendmoneytocustomer and sends what 
    transaction_data = getTransaction(transfer_id);
    sendMoneyToCustomer("ESCROW", transaction_data.amount);
}

export const cancelTransaction = (transfer_id) => {
    transaction_data = getTransaction(transfer_id);
    sendMoneyToCustomer(transaction_data.payer_id, transaction_data.amount)
}

// returns the id of the created customer
export const createCustomer = (firstName, lastName, street_number, street_name, city, state, zip) => {
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
    }).then((response) => response.json()).then((result) => {return result.objectCreated._id});
}