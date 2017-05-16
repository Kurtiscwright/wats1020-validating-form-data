/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on("ready", function() {

    $("#order-form").validate({ //This is validating that the order-form class is being submitted
      submitHandler: function(form) {
        form.submit();
      },

      rules: { //This is an object set that defines the rules of how the above form is allowed to be submitted
        "your-name": { //This object is strictly for the your-name class
          required: true, //This requirement is that it has to be filled
          maxlength: 128, //This is stating how long the field can/needs to be
          lettersonly: true //This is not working with the current version, but it is suppose to require that only letters can be submitted in this field
        },
        "your-state": { //This is for the your-state class
          required: true, //This requirement is that it has to be filled
          maxlength: 2 //This is stating how long the field can/needs to be
        },
        "your-zip": {
          required: true, //This requirement is that it has to be filled
          maxlength: 5, //This is stating how long the field can/needs to be
          digits: true //This is forcing digits only to be entered
        },
        "card-holder-name": {
          required: true, //This requirement is that it has to be filled
          maxlength: 128 //This is stating how long the field can/needs to be
        },
        "card-number": {
          required: true, //This requirement is that it has to be filled
          creditcard: true //This defines that the set of numbers entered has to fit a creditcard length number
        },
        "cvv": {
          required: true, //This requirement is that it has to be filled
          maxlength: 3, //This is stating how long the field can/needs to be
          digits: true //This is forcing digits only to be entered
        },

      }
    });
    $("label span.glyphicon").tooltip(); //This is what creates the drop down tooltip explaining what each section does.
});
