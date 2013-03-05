<?php

class ZkSiteTreeIconExtension extends DataExtension {

	public function updateStatusFlags(&$flags) {

		Requirements::css(ZK_SITE_TREE_ICON . "/css/style.css");
		Requirements::javascript(ZK_SITE_TREE_ICON . "/javascript/chicon.js");

//		if ($this->owner->Title == 'Faq') {
//			var_dump($this->owner->Title);
//			var_dump($flags);
//			exit;
//		}

		if (isset($flags['addedtodraft'])) {
			$flags['status_draft'] = '';
		} elseif ($this->stagesDiffer('Stage', 'Live') /*isset($flags['modified'])*/) {
			$flags['status_draft_published'] = '';
		} else {
			$flags['status_published'] = '';
		}
	}

}