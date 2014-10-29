<?php
define('SITE_TREE_ICON', basename(dirname(__FILE__)));

Config::inst()->update('LeftAndMain', 'extra_requirements_css', array(SITE_TREE_ICON . "/css/style.css" => array('media' => null)));
Config::inst()->update('LeftAndMain', 'extra_requirements_javascript', array(SITE_TREE_ICON . "/javascript/chicon.js" => array()));

SiteTree::add_extension('SiteTreeIconExtension');
