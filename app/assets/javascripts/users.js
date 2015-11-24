$(document).ready(function() {
  //grab Stripe public key for permission
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  $('#form-submit-btn').click(function(e){
    e.preventDefault();
    //disable submit button to prevent additional clicks
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    if(!error) {
      //send card information to Stripe
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
    return false;
  });

  function stripeResponseHandler(status, response) {
    var f = $("#new_user");
    var token = response.id;
    //add token as a hidden field in form
    f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
    f.get(0).submit();
  }
});