
(function($) {
	
	/**
	 * This plugin adds image preview to the publish index.
	 *
	 * @author: Nils Hörrmann, post@nilshoerrmann.de
	 * @source: http://github.com/nilshoerrmann/image_index_preview
	 */
	$(document).ready(function() {
		$('table td.field-upload a').each(function() {
			var link = $(this).text(''),
				href = link.attr('href'),
				file = href.replace(Symphony.Context.get('root') + '/workspace/', '');

			// Append preview	
			$('<img />', {
				src: Symphony.Context.get('root') + '/image/2/40/40/5/' + file
			}).prependTo(link);
		});
	});
		
})(jQuery.noConflict());
