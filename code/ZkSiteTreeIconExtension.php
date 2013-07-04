<?php

class ZkSiteTreeIconExtension extends DataExtension {
	
	public function updateStatusFlags(&$flags) {

		static $prepop = true;
		if ($prepop) {
			Versioned::prepopulate_versionnumber_cache('SiteTree', 'Stage');
			Versioned::prepopulate_versionnumber_cache('SiteTree', 'Live');
			$prepop = false;
		}

		$stageVersion = intval(Versioned::get_versionnumber_by_stage('SiteTree', 'Stage', $this->owner->ID));
		$liveVersion = intval(Versioned::get_versionnumber_by_stage('SiteTree', 'Live', $this->owner->ID));
					
		if ($liveVersion == 0 /*isset($flags['addedtodraft'])*/) {
			$flags['status_draft'] = '';
		} elseif ($stageVersion > $liveVersion /*$this->stagesDiffer('Stage', 'Live')*//*isset($flags['modified']*/) {
			$flags['status_draft_published'] = '';
		}	else {
			$flags['status_published'] = '';
		}
	}

}