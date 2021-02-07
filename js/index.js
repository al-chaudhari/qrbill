function $(id) {
  return document.getElementById(id);
}

function $class(cls, value) {
  let el = document.querySelectorAll(`.${cls}`);
  for (let i = 0; i < el.length; i++) {
    el[i].innerHTML = value;
  }
}

function trigger() {
  let svg = $("svg982");
  let canvas = document.createElement("canvas");
  canvas.width = 793.7007874;
  canvas.height = 396.8503937;
  var ctx = canvas.getContext("2d");

  var data = new XMLSerializer().serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });

  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);

    var imgURI = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    triggerDownload(imgURI);
  };

  img.src = url;
}

function triggerDownload(imgURI) {
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });

  var a = document.createElement("a");
  a.setAttribute("download", "MY_COOL_IMAGE.png");
  a.setAttribute("href", imgURI);
  a.setAttribute("target", "_blank");

  a.dispatchEvent(evt);
}

class PaymentInfo {
  constructor() {
    // Account Information
    this.acfullname = "";
    this.acstreet = "";
    this.achousenum = "";
    this.aczipcode = "";
    this.actown = "";

    // Payee Information
    this.payfullname = "";
    this.paystreet = "";
    this.payhousenum = "";
    this.payzipcode = "";
    this.paytown = "";

    // General Information
    this.iban = "";
    this.account = "";
    this.reference = "";
    this.currency = "CHF";
    this.amount = 0;
    this.adinfo = "";

    reactor("acfullname", this);
    reactor("acstreet", this);
    reactor("achousenum", this);
    reactor("aczipcode", this);
    reactor("actown", this);
    reactor("payfullname", this);
    reactor("paystreet", this);
    reactor("payhousenum", this);
    reactor("payzipcode", this);
    reactor("paytown", this);
    reactor("payfullname", this);
    reactor("iban", this);
    reactor("adinfo", this);
    reactor("amount", this);
    reactor("currency", this);
    reactor("reference", this);
  }

  update() {
    $class("svg-account", this.iban);
    $class("svg-acfullname", this.acfullname);
    $class("svg-acstreet", `${this.acstreet} ${this.achousenum}`);
    $class("svg-actown", `${this.actown} ${this.aczipcode}`);

    $class("svg-payfullname", this.payfullname);
    $class("svg-paystreet", `${this.paystreet} ${this.payhousenum}`);
    $class("svg-paytown", `${this.paytown} ${this.payzipcode}`);

    $class("svg-reference", this.reference);
    $class("svg-currency", this.currency);
    $class("svg-amount", this.amount);
    $class("svg-adinfo", this.adinfo);
  }
}

function reactor(id, obj) {
  $(id).onchange = (el) => {
    obj[id] = el.target.value;
    obj.update();
  };
}

new PaymentInfo();

$("download").onclick = trigger;
