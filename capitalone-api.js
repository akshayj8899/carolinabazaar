function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
}

function takePayment(accountId, amount, description) {
    return $.ajax({
        type: 'POST',
        url: `http://api.reimaginebanking.com/accounts/${accountId}/purchases?key=5e4c50ea359b3b55f96057d4bcc7a164`,
        contentType: 'application/json',
        data: JSON.stringify(
            {
                "merchant_id": "5da2a0e73c8c2216c9fcb3c8",
                "medium": "balance",
                "purchase_date": getCurrentDate(),
                "amount": amount,
                "status": "pending",
                "description": description
            }
        )
    });
}

function payUser(accountId, amount, description) {
    return $.ajax({
        type: 'POST',
        url: `http://api.reimaginebanking.com/accounts/${accountId}/deposits?key=5e4c50ea359b3b55f96057d4bcc7a164`,
        contentType: 'application/json',
        data: JSON.stringify(
            {
                "medium": "balance",
                "transaction_date": getCurrentDate(),
                "status": "pending",
                "description": description,
                "amount": amount
}
        )
    });
}
