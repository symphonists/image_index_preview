<?php

	Class extension_image_index_preview extends Extension {

		public function about() {
			return array(
				'name' => 'Image Index Preview',
				'version' => '1.0',
				'release-date' => '2011-01-27',
				'author' => array(
					'name' => 'Nils Hörrmann',
					'website' => 'http://nilshoerrmann.de',
					'email' => 'post@nilshoerrmann.de'
				),
				'description' => 'Display an image preview on the publish index.'
			);
		}

		public function getSubscribedDelegates(){
			return array(
				array(
					'page' => '/administration/',
					'delegate' => 'AdminPagePreGenerate',
					'callback' => '__appendAssets'
				)
			);
		}

		/**
		 * Append assets to the page head
		 *
		 * @param object $context
 		 */
 		public function __appendAssets($context) {
			$callback = Symphony::Engine()->getPageCallback();

			// Append styles for publish area
			if($callback['driver'] == 'publish' && $callback['context']['page'] == 'index') {
				Administration::instance()->Page->addScriptToHead(URL . '/extensions/image_index_preview/assets/image_index_preview.publish.js', 100, false);
				Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/image_index_preview/assets/image_index_preview.publish.css', 'screen', 101, false);
			}
		}

	}