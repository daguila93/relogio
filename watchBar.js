window.addEventListener('load', (event) => {

    // ✅ Create element
    const el = document.createElement('div');

    // ✅ Set ID attribute on element
    el.setAttribute('id', 'initialDiv');

    var eElement = document.getElementsByTagName('body')[0]; // some E DOM instance

    eElement.insertBefore(el, eElement.firstChild);

    el.textContent = timer;

    function relogio() {
        var data = new Date();
        var hor = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();

        if (hor < 10) {
            hor = "0" + hor;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (seg < 10) {
            seg = "0" + seg;
        }

        var horas = hor + ":" + min + ":" + seg;

        document.getElementById("initialDiv").innerHTML = horas;
    }

    var timer = setInterval(relogio, 1000);

    el.setAttribute(
        "style", `font-size: 30px;
        color: #0F0;
        text-align: center;
        font-weight: bold;
        position:fixed !important;
        top:0 !important;
        width:100%;
        z-index:100 !important;
        background-image: url('https://i.ibb.co/ZTWMtcn/fundo-2.png') !important;
        background-repeat: no-repeat !important;
        background-position: center !important; `);    

});