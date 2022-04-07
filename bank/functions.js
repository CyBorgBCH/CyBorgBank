function stakeTokens() {
// if not connected reload page
if (!zombieMaster) location.reload(true);
var amount1 = $("#amount1").val();
// var amount2 = amount1 *100000000;
// ZOMBIE has 0 decimals
var amount2 = amount1 *1;
var amount3 = amount2.toString();
var content = "<p><br>Sending transaction...<br></p>";
content += zombieMaster;
$("#lang1").html(content);
var event = contractBank.methods.stakeTokens(amount3).send({ from: zombieMaster, gasPrice: 1047000000 })
    .then(function (receipt) {
        console.log(receipt);
var content = "<p><br>Transaction sent!<br></p>";
        alert("Done. Zombies are in the Vandals Bank now!");
content += JSON.stringify(receipt.transactionHash);
$("#lang1").html(content);
    });;
};

function stakingBalance() {
// if not connected reload page
if (!zombieMaster) location.reload(true);
var content = "<p><br>Check your balance staked<br></p>";
content += zombieMaster;
$("#lang2").html(content);
var event = contractBank.methods.stakingBalance(zombieMaster).call()
    .then(function (result) {
var content = "<p><br>Your balance staked is:<br></p>";
        alert(result);
content += JSON.stringify(result.toString());
$("#lang2").html(content);
    });;
};

function claimTokens() {
// if not connected reload page
if (!zombieMaster) location.reload(true);
// Calculate reward amount (defaultAPR) in contract if stake token and reward token decimals are different
// E.g. ZOMBIE has 0 decimals, VANDALS has 8 decimals, so defaultAPR is 700000000000 (7000 and 8 zeros)
var content = "<p><br>Sending transaction...<br></p>";
content += zombieMaster;
$("#lang3").html(content);
var event = contractBank.methods.harvestTokens(zombieMaster).send({ from: zombieMaster, gasPrice: 1047000000 })
    .then(function (receipt) {
        console.log(receipt);
var content = "<p><br>Transaction sent!<br></p>";
        alert("Done. Long live CyBorg!");
content += JSON.stringify(receipt.transactionHash);
$("#lang3").html(content);
    });;
};

function lockTime() {
// if not connected reload page
if (!zombieMaster) location.reload(true);
var content = "<p><br>Your address<br></p>";
content += zombieMaster;
$("#lang4").html(content);
var event = contractBank.methods.lockTime(zombieMaster).call()
    .then(function (result) {
var content = "<p><br>Unix_timestamp<br></p>";
        alert(result);
content += JSON.stringify(result.toString());
$("#lang4").html(content);
    });;
};

function unstakeTokens() {
// if not connected reload page
if (!zombieMaster) location.reload(true);
var content = "<p><br>Sending transaction...<br></p>";
content += zombieMaster;
$("#lang5").html(content);
var event = contractBank.methods.unstakeTokens().send({ from: zombieMaster, gasPrice: 1047000000 })
    .then(function (receipt) {
        console.log(receipt);
var content = "<p><br>Transaction sent!<br></p>";
        alert("Done. You`ve been CyBorged again!");
content += JSON.stringify(receipt.transactionHash);
$("#lang5").html(content);
    });;
};
