// ==UserScript==
// @name           break check
// @namespace      whatever
// @include        http://ww*.erepublik.com/en/exchange/myOffers*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==



function editOffer_1(object) {
	var offer_id_array = object.id.split('_');
	var offer_id = offer_id_array[3];
	var submit_amount_form = $j('#form_amount_edit_' + offer_id).val();
	var submit_exchange_rate_form = $j('#form_exchange_rate_edit_' + offer_id).val();
	var submit_amount = $j('#form_amount');
	var submit_exchange_rate = $j('#form_exchange_rate');
	var account_type = $j('#account_type').val()
	var edit_message_confirm = $j('#edit_message_confirm').val();
	var accept_button = $j('#submit_form_edit_' + offer_id);

	submit_amount.val(submit_amount_form);
	submit_exchange_rate.val(submit_exchange_rate_form);
	
		if (confirm(edit_message_confirm)) {
			accept_button.hide();
			sendEdit(object);
		}

}

var newline='<td><input type="button" onclick="editOffer_1(this);" class="marketbtn" value="Update" id="submit_form_edit_5232388"></td>';


// var newline='<td><div class="textalign flag"><span class="special">1</span> <span class="currency">HRK</span> =</div><input type="text" onblur="exchangeRateEditValidate_onBlur(this)" onkeyup="upkey(event, this)" onkeypress="return checkNumber('float', event)" class="ammount" value="0.018" id="form_exchange_rate_edit_5232388" name="form_exchange_rate_edit_5232388"><input type="text" value="0.018" id="old_exchange_rate_offer_5232388" name="old_exchange_rate_offer_5232388"><span class="currency forminfo">GOLD</span></td>';

function addCheckButton(){
    $('#table_list_offers td:eq(15)').replaceWith(newline);
}

window.addEventListener('load', function(){var checker=setInterval(function(){
    if(typeof ($ = jQuery.noConflict()) != "undefined") {
        clearInterval(checker);
        addCheckButton();
    }
},100);}, false);


function sendEditz(object) {
	var offer_id_array = object.id.split('_');
	var offer_id = offer_id_array[3];
	var url_for_edit = $j('a#url_for_edit').attr('href');
	var account_type = $j('#account_type').val();
	var amount_to_edit = $j('#form_amount').val();
	var exchange_rate_to_edit = $j('#form_exchange_rate').val();
	var old_amount_value = $j('#old_amount_offer_' + offer_id).val();
	// var old_exchange_rate_value = $j('#old_exchange_rate_offer_' + offer_id).val();
	var old_exchange_rate_value = 1;
	var sell_currency = $j('#sell_currency_id_' + offer_id).val();
	var buy_currency = $j('#buy_currency_id_' + offer_id).val();
	var _token = $j('#_token').val();
	var buy_currency_history_id = $j('a#buy_selector').attr('title');
	var sell_currency_history_id = $j('a#sell_selector').attr('title');
	var company_id = $j('#company_id').val();
	var select_page = $j('#select_page').val();
	var action_path = $j('#action_path').val();
	var page = $j('#page_in_list').val();

	$j.ajax({
      type: 'POST',
      url: url_for_edit,
      dataType: 'html',
      data: { select_page: select_page, account_type: account_type, page: page, form_amount: amount_to_edit, form_exchange_rate: exchange_rate_to_edit,
					_token: _token,	buy_currency_history_id: buy_currency_id, sell_currency_history_id: sell_currency_id, buy_currency: buy_currency, sell_currency: sell_currency,
					old_amount_value: old_amount_value, old_exchange_rate_value: old_exchange_rate_value, offer_id: offer_id
      },
      beforeSend: function() {
      },
      success: function(html) {
        $j('#populateOffers').replaceWith(html);
      },
      error: function() {
	//jalert("An error has occurred. Please try again.");
      },
      complete: function() {
      }
    });
}
