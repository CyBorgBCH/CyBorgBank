function approve() {
    // if not connected reload page
    if (!zombieMaster) location.reload(true);
    var amount1 = $("#amount1").val();
    // var amount2 = amount1 *100000000;
    // ZOMBIE has 0 decimals
    var amount2 = amount1 *1;
    var amount3 = amount2.toString();
    var content = "<p><br><br>Approving transaction...<br></p>";
    content += zombieMaster;
    $("#lang").html(content);
    var event = contractZombie.methods.approve("0xc48A5414F012318a227BbBd2AB00b0751c621676", amount3).send({ from: zombieMaster, gas: 65000, gasPrice: 1047000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "<p><br><br>Approved!<br></p>";
            alert("Done. The horde is ready!")
    content += JSON.stringify(receipt.transactionHash);
    $("#lang").html(content);
        });;
    };
