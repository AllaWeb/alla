// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'House' to shipping address form
ec.order.extraFields.flat = {
    'title': 'House',
    'textPlaceholder': 'House',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info'
};

ec.order.extraFields.street = {
    'title': 'Street?',
    'textPlaceholder': 'Street no.',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info'
};

ec.order.extraFields.block = {
    'title': 'Block',
    'textPlaceholder': 'Block no.',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'shipping_info'
};

ec.order.extraFields.fname = {
    'title': 'First Name',
    'textPlaceholder': 'First Name.',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'customer_info'
};

ec.order.extraFields.mname = {
    'title': 'Middle Name',
    'textPlaceholder': 'Middle Name',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'customer_info'
};

ec.order.extraFields.lname = {
    'title': 'Last Name',
    'textPlaceholder': 'Last Name',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'customer_info'
};

Ecwid.refreshConfig && Ecwid.refreshConfig();

Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CHECKOUT_ADDRESS") {
       Ecwid.Cart.setAddress({
          "street": "N/A"
       });
       document.querySelector('div.ec-form__cell.ec-form__cell--street').style.display = 'none'
    }
});
