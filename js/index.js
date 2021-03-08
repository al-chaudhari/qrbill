import SwissQRBill from "swissqrbill/lib/browser";

function $(id) {
  return document.getElementById(id);
}

function $class(cls, value) {
  let el = document.querySelectorAll(`.${cls}`);
  for (let i = 0; i < el.length; i++) {
    el[i].innerHTML = value;
  }
}

function main(paymentinfo) {
  const data = {
    currency: paymentinfo.currency,
    amount: parseInt(paymentinfo.amount),
    reference: paymentinfo.reference,
    creditor: {
      name: paymentinfo.acfullname,
      address: `${paymentinfo.achousenum} ${paymentinfo.acstreet}`,
      zip: parseInt(paymentinfo.aczipcode),
      city: paymentinfo.actown,
      account: paymentinfo.iban,
      country: paymentinfo.accountry,
    },
    debtor: {
      name: paymentinfo.payfullname,
      address: `${paymentinfo.payhousenum} ${paymentinfo.paystreet}`,
      zip: parseInt(paymentinfo.payzipcode),
      city: paymentinfo.paytown,
      country: paymentinfo.paycountry,
    },
  };

  const stream = new SwissQRBill.BlobStream();

  const pdf = new SwissQRBill.PDF(data, stream, {
    language: paymentinfo.language,
    size: paymentinfo.papersize,
  });

  pdf.on("finish", () => {
    const url = stream.toBlobURL("application/pdf");
    triggerDownload(url);
  });
}

function triggerDownload(uri) {
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });
  var a = document.createElement("a");
  a.setAttribute("download", "recipt.pdf");
  a.setAttribute("href", uri);
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
    this.papersize = "A4";

    reactor("acfullname", this);
    reactor("acstreet", this);
    reactor("achousenum", this);
    reactor("aczipcode", this);
    reactor("actown", this);
    reactor("accountry", this);
    reactor("payfullname", this);
    reactor("paystreet", this);
    reactor("payhousenum", this);
    reactor("payzipcode", this);
    reactor("paytown", this);
    reactor("paycountry", this);
    reactor("language", this);
    reactor("iban", this);
    reactor("amount", this);
    reactor("currency", this);
    reactor("reference", this);
    reactor("papersize", this);
  }
}

function reactor(id, obj) {
  $(id).onchange = (el) => {
    obj[id] = el.target.value;
  };
}

const payment = new PaymentInfo();

$("download").onclick = () => main(payment);
