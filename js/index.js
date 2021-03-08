const QRCode = require("qrcode");

function createCanvas(width, height) {
  let canvas = document.createElement("canvas");
  canvas.width = 793.7007874;
  canvas.height = 396.8503937;
  return canvas;
}

function create(dataForQRcode, imgurl, width, cwidth) {
  const canvas = createCanvas(width, width);
  QRCode.toCanvas(canvas, dataForQRcode, {
    errorCorrectionLevel: "H",
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = imgurl;
  const center = (width - cwidth) / 2;
  ctx.drawImage(img, center, center, cwidth, cwidth);
  return canvas.toDataURL("image/png");
}

function $(id) {
  return document.getElementById(id);
}

function main() {
  let qr = create(
    "QR",
    "data:image/jpeg;base64,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",
    150,
    50
  );

  console.log(qr);
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

$("download").onclick = main;
