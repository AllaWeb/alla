// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'Flat or House n0.?' to shipping address form
ec.order.extraFields.flat = {
    'title': 'Flat or House n0.',
    'textPlaceholder': 'Flat or House n0.',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.street = {
    'title': 'Street?',
    'textPlaceholder': 'Street no.',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.block = {
    'title': 'Block',
    'textPlaceholder': 'Block no.',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.fname = {
    'title': 'Block',
    'textPlaceholder': 'First Name.',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.mname = {
    'title': 'Block',
    'textPlaceholder': 'Middle Name',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.lname = {
    'title': 'Block',
    'textPlaceholder': 'Last Name',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

Ecwid.refreshConfig && Ecwid.refreshConfig();