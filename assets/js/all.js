$(function () {
  $('[data-toggle="popover"]').popover();
});

var input = document.querySelector("#phone"),
  iti = intlTelInput(input, {
    initialCountry: "in",
    nationalMode: !0,
    autoPlaceholder: "polite",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.11/js/utils.js"
  });

$(document).on("click", ".btn-next", function () {
  $(this)
    .closest(".steps")
    .removeClass("active");
  $(this)
    .closest(".steps")
    .next(".steps")
    .addClass("active");
  $('.desktop-logo').hide();
  $('.back-links-list').show();
  $('.back-links-list li').removeClass('active');
  $('#' + $(this).data('id')).addClass('active');
});

$('.back-links-list .btn-back').click(function () {
  $('.steps').removeClass('active');
  $('#' + $(this).data('id')).addClass('active');
  $(this).closest('li').removeClass('active');
  $(this).closest('li').prev('li').addClass('active');
});

$('.back-links-list li:first-child .btn-back').click(function () {
  $('.desktop-logo').show();
  $('.back-links-list').hide();
});

function OnLanguageChange(optLanguage) {
  if (optLanguage == "Türkçe") {
    document.getElementById("idDocInfo").innerHTML = "Belge bilgisi";
    document.getElementById("idLang").innerHTML = "Dil";
    document.getElementById("idTurk").innerHTML = "Türkçe";
    document.getElementById("idContInfo").innerHTML =
      "İletişim Bilgileri";
    document.getElementById("idDocIdPhoto").innerHTML =
      "Fotoğraflı Belgeniz";
    // document.getElementById("idDocIdPhoto2").innerHTML = "xxx";
    document.getElementById("idPassport").innerHTML = "Pasaport";
    document.getElementById("idNatID").innerHTML = "Kimlik Kartınız";
    document.getElementById("idDocument").innerHTML = "Belgeniz";
    document.getElementById("idDocument2").innerHTML = "Belgeniz";
    document.getElementById("idPhoto").innerHTML = "Fotoğraf";
    document.getElementById("idDocAddress").innerHTML =
      "Adresinizin olduğu Belge";
    document.getElementById("idAddressinDoc").innerHTML =
      "Address in document";
    document.getElementById("idSend").innerHTML = "Gönder";
    document.getElementById("idBack").innerHTML = "Önceki";
    document.getElementById("idDocInfoHelp01").innerHTML =
      "Lütfen seçilen belgenin resimlerini yükleyin. Yüklenen resimlerin kabul edilebilir kalitede olduğundan emin olun.";
    document.getElementById("idDocInfoHelp02").innerHTML =
      "Bir özçekim (selfie) yapın veya kendi fotoğrafınızı yükleyin. Fotoğraf çekerken, güneş gözlüğü veya yüz doğrulamasını engelleyen herhangi bir şey kullanmaktan kaçının.";
  } else if (optLanguage == "English") {
    document.getElementById("idDocInfo").innerHTML =
      "Document Information";
    document.getElementById("idLang").innerHTML = "Language";
    document.getElementById("idTurk").innerHTML = "Turkish";
    document.getElementById("idContInfo").innerHTML =
      "Contact Information";
    document.getElementById("idDocIdPhoto").innerHTML =
      "Document with your photo";
    document.getElementById("idDocIdPhoto2").innerHTML =
      "Upload photo of me";
    document.getElementById("idDocIdPhoto3").innerHTML =
      "Take selfie of me";
    document.getElementById("idPassport").innerHTML = "Passport";
    document.getElementById("idNatID").innerHTML = "National ID";
    document.getElementById("idDocument").innerHTML = "Document";
    document.getElementById("idDocument2").innerHTML = "Document";
    document.getElementById("idPhoto").innerHTML = "Photo";
    document.getElementById("idDocAddress").innerHTML =
      "Document with your address";
    document.getElementById("idAddressinDoc").innerHTML =
      "Address in document";
    document.getElementById("idSend").innerHTML = "Send";
    document.getElementById("idBack").innerHTML = "Back";
    document.getElementById("idDocInfoHelp01").innerHTML =
      "Please upload the images of chosen document. Make sure that the uploaded images is are of acceptable quality.";
    document.getElementById("idDocInfoHelp02").innerHTML =
      "Make a selfie or upload a photo of yourself. When taking photo please avoid using sunglasses or anything else that hinders face verification.";
  } else if (optLanguage == "Latviski") {
    document.getElementById("idDocInfo").innerHTML =
      "Dokumenta informācija";
    document.getElementById("idLang").innerHTML = "Valoda";
    document.getElementById("idTurk").innerHTML = "Turciski";
    document.getElementById("idContInfo").innerHTML =
      "Kontaktinformācija";
    document.getElementById("idDocIdPhoto").innerHTML =
      "Dokuments are jūsu bildi";
    document.getElementById("idDocAddress").innerHTML =
      "Dokuments ar jūsu adresi";
    document.getElementById("idAddressinDoc").innerHTML =
      "Dokuments ar jūsu adresi";
    document.getElementById("idDocIdPhoto2").innerHTML =
      "Augšuplādējiet jūsu fotoattēlu";
    document.getElementById("idDocIdPhoto3").innerHTML =
      "Uzņemt jūsu attēlu";
    document.getElementById("idPassport").innerHTML = "Pase";
    document.getElementById("idNatID").innerHTML = "National ID";
    document.getElementById("idDocument").innerHTML = "Dokuments";
    document.getElementById("idDocument2").innerHTML = "Dokuments";
    document.getElementById("idPhoto").innerHTML = "Foto";
    document.getElementById("idSend").innerHTML = "Sūtīt";
    document.getElementById("idBack").innerHTML = "Atpakaļ";
    document.getElementById("idDocInfoHelp01").innerHTML =
      "Lūdzu, augšuplādējiet izvēlētā dokumenta fotoattēlus. Pirms augšupielādes, lūdzu, pārliecinaties, ka fotoattēli ir labā kvalitātē.";
    document.getElementById("idDocInfoHelp02").innerHTML =
      "Uzņemiet pašportretu vai augšupielādējiet savu fotoattēlu. Izvairieties no saulesbriļļu vai citu priekšmetu, kas varētu apgrūtināt jūsu atpazīšanu, lietošanas fotoattēlos.";
  }
}
OnLanguageChange("English");

$("#show_docWithPhoto1").hide();
$("#show_docWithPhoto2").hide();
$("#show_docWithPhoto3").hide();

$("#show_docWithAddress").hide();

function selectDocWithPhoto() {
  var docWithPhoto = document.getElementById("docWithPhoto").value;
  if (docWithPhoto === "passport" || docWithPhoto === "driverLicence") {
    $("#show_docWithPhoto1").css("display", "flex");
    $("#show_docWithPhoto2").hide();
    $("#show_docWithPhoto3").hide();
  }
  if (docWithPhoto === "nationalId") {
    $("#show_docWithPhoto2").css("display", "flex");
    $("#show_docWithPhoto3").css("display", "flex");
    $("#show_docWithPhoto1").hide();
  }

  console.log(">> : ", docWithPhoto);
}

function selectDocWithAddress() {
  var docWithAddress = document.getElementById("docWithAddress").value;

  if (docWithAddress === "bankStatement") {
    document.getElementById("uploadAddressLbl").innerHTML =
      "Upload bank statement image";
  } else {
    document.getElementById("uploadAddressLbl").innerHTML =
      "Upload rent agreement image";
  }

  if (docWithAddress) {
    $("#show_docWithAddress").css("display", "flex");
  } else {
    $("#show_docWithAddress").hide();
  }

  console.log(">> : ", docWithPhoto);
}