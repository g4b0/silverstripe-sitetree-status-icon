jQuery(document).ready(function() {
	//alert('ciao');
	
	jQuery("body").on("click", "#Form_EditForm_action_publish",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		_el.removeClass("status_draft");
		_el.removeClass("status_draft_published");
		_el.removeClass('status_unpublished');
		_el.addClass('status_published');

		return;
	});

	jQuery("body").on("click", "#Form_EditForm_action_save",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);

		_el.removeClass('status_unpublished');
		_el.removeClass("status_draft");
		_el.removeClass('status_published');
		_el.addClass("status_draft_published");

		return;
	})


	jQuery("body").on("click", "#Form_EditForm_action_unpublish",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);
		
		_el.removeClass('status_published');
		_el.removeClass('status_unpublished');
		_el.removeClass("status_draft_published");
		_el.addClass("status_draft");
		
		var _el = jQuery("#record-"+_id+" li");
		
		_el.removeClass('status_published');
		_el.removeClass('status_unpublished');
		_el.removeClass("status_draft_published");
		_el.addClass("status_draft");		
		
		return;
	})

	jQuery("body").on("click", "#Form_EditForm_action_rollback",  function() {
		var _id = jQuery("#Form_EditForm_ID").val();
		var _el = jQuery("#record-"+_id);
		
		_el.removeClass("status_draft");
		_el.removeClass("status_draft_published");
		_el.removeClass('status_unpublished');
		_el.addClass('status_published');	
		
		return;
	});

});