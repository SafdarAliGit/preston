frappe.ui.form.on("Payment Entry", {
  set_total_allocated_amount: function(frm) {
    calculate_total_outstanding_amount(frm);
  },
  references_remove: function(frm) {
    calculate_total_outstanding_amount(frm);
  }
});


function calculate_total_outstanding_amount(frm) {
  let total_outstanding_amount = 0;
  $.each(frm.doc.references || [], function (i, row) {
    total_outstanding_amount += flt(row.outstanding_amount);
  });
  frm.set_value("custom_total_outstanding_amount", total_outstanding_amount);
  frm.refresh_field("custom_total_outstanding_amount");
}
  
