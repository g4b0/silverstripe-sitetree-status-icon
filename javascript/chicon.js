jQuery(document).ready(function() {

	jQuery("body").on("click", "#Form_EditForm_action_publish",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		_el.removeClass("status-status_draft");
		_el.removeClass("status-status_draft_published");
		_el.addClass('status-status_published');

		return;
	});

	jQuery("body").on("click", "#Form_EditForm_action_save",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		/* se è in stato bozza e salvo rimane così */
		if(_el.hasClass('status-status_draft'))
			return;

		_el.removeClass('status-status_published');
		_el.addClass("status-status_draft_published");

		return;
	})


	jQuery("body").on("click", "#Form_EditForm_action_unpublish",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		_el.removeClass('status-status_published');
		_el.removeClass("status-status_draft_published");
		_el.removeClass("status-wfstatus_pub");
		_el.removeClass("status-wfstatus_att_pub");
		_el.removeClass("status-wfstatus_att_sup");
		_el.addClass("status-status_draft");

		var _el = jQuery("#record-"+_id+" li");
		_el.removeClass('status-status_published');
		_el.removeClass("status-status-status_draft_published");
		_el.removeClass("status-wfstatus_pub");
		_el.removeClass("status-wfstatus_att_pub");
		_el.removeClass("status-wfstatus_att_sup");
		_el.addClass("status-status_draft");

		return;
	})

	jQuery("body").on("click", "#Form_EditForm_action_rollback",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		_el.removeClass("status-status_draft");
		_el.removeClass("status-status_draft_published");
		_el.addClass('status-status_published');
	});

});