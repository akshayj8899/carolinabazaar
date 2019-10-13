function takePayment(accountId, amount, description) {
    return $.ajax({
        type: 'POST',
        url: "http://api.reimaginebanking.com/accounts/5da2a5293c8c2216c9fcb3ce/transfers?key=5e4c50ea359b3b55f96057d4bcc7a164",
        contentType: 'application/json',
        data: JSON.stringify(
            {
                medium: "balance",
                payee_id: `${accountId}`,
                transaction_date: "2019-10-13",
                status: "pending",
                description: description,
                amount: amount
            }
        )
    });
}

function payUser(accountId, amount, description) {
    return $.ajax({
        type: 'POST',
        url: `http://api.reimaginebanking.com/accounts/${accountId}/transfers?key=5e4c50ea359b3b55f96057d4bcc7a1641`,
        contentType: 'application/json',
        data: JSON.stringify(
            {
                medium: "balance",
                payee_id: "5da2a5293c8c2216c9fcb3ce",
                transaction_date: "2019-10-13",
                status: "pending",
                description: description,
                amount: amount
            }
        )
    });
}
