var mesq, usew, emai, btn, messageBoot, idRoot;
mesq = document.getElementById("mess")
usew = document.getElementById("username")
emai = document.getElementById("email")
btn = document.getElementById("btn")
messageBoot = document.getElementById("messageBoot")
idRoot = document.getElementById("rootMain")
var wqz = "http://server.procesen.com/FeedMessage"
var tic = false
var aredSen = false
btn.addEventListener("click", e => {
    if (tic === false) {
        if (mesq.value.length > 0 && usew.value.length > 0 && emai.value.length > 0) {
            tic = true
            var ett = new XMLHttpRequest();
            ett.open("GET", wqz + "?name=" + usew.value + "&email=" + emai.value + "&mess=" + mesq.value + "&formNum=5100&sec=0")
            ett.addEventListener("load", e => {
                idRoot.innerHTML = `
                <div class="rootGreen">
                    <div class="rootLoogo"> <i class="material-icons" style="font-size : 30px;color:#3a6351; text-align: center">done_all</i> </div>
                    <div class="rootMess"> sent succesfully . </div>             
                </div>`
                aredSen = true
            });
            ett.addEventListener("error", e => {
                idRoot.innerHTML = `
                <div class="rootGreen">
                    <div class="rootLoogo"> <i class="material-icons" style="font-size : 30px;color:#3a6351; text-align: center">done_all</i> </div>
                    <div class="rootMess"> sent succesfully . </div>             
                </div>`
                aredSen = true
            });
            ett.send();

        } else {
            messageBoot.innerHTML = `<div class="messageGre redM"> Please check that the information is spelled correctly </div>`
            e.preventDefault()
        }
    } else {
        if (aredSen === false) {
            messageBoot.innerHTML = `<div class="messageGre greM"> Please wait for sending .. </div>`
        } else {
            idRoot.innerHTML = `
            <div class="rootGreen">
                <div class="rootLoogo"> <i class="material-icons" style="font-size : 30px;color:#3a6351; text-align: center">done_all</i> </div>
                <div class="rootMess"> sent succesfully . </div>             
            </div>`
        }
    }
})