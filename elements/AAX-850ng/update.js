function(instance, properties, context) {

  let elementId = properties.elementId;

  if (elementId) {
    let value, color = properties.color;
    if (!color) {
      color = "#000000";
    }
    color += " !important";
    value1 = "<style>#" + elementId + "::placeholder{color: " + color + ";}#" + elementId + ":-ms-input-placeholder{color: " + color + ";}#" + elementId + "::-ms-input-placeholder{color: " + color + ";}#" + elementId + "::-webkit-input-placeholder{color: " + color + ";}#" + elementId + ":-moz-placeholder{color: " + color + ";}#" + elementId + "::-moz-placeholder{color: " + color + ";}";
    value2 = "#" + elementId + " .tt-input::placeholder{color: " + color + ";}#" + elementId + " .tt-input:-ms-input-placeholder{color: " + color + ";}#" + elementId + " .tt-input::-ms-input-placeholder{color: " + color + ";}#" + elementId + " .tt-input::-webkit-input-placeholder{color: " + color + ";}#" + elementId + " .tt-input:-moz-placeholder{color: " + color + ";}#" + elementId + " .tt-input::-moz-placeholder{color: " + color + ";}</style>";
    $('head').append(value1 + value2);
  }

}