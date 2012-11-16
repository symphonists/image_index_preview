(function($) {

	/**
	 * This plugin adds image preview to the publish pages.
	 *
	 * @author: Symphony Community
	 * @source: https://github.com/symphonists/image_index_preview
	 */

	$(function() {

		var root, page, link, path, file, size;

		root = Symphony.Context.get('root');
		page = Symphony.Context.get('env')['page'];

		$('table td[class*="upload"] a, fieldset div[class*="upload"] a', '#contents').each(function() {

			link = $(this);

			if (page == 'index') {

				path = link.data('path');
				size = '40/40';

			} else {

				path = link.attr('href');
				size = '0/150';
			}

			if (path) {

				file = path.replace(root + '/workspace/', '');

				if (file.match(/\.(?:bmp|gif|jpe?g|png)$/i)) {

					// remove file name

					link.text('');

					// add preview

					$('<img />', {

						src: root + '/image/2/' + size + '/5/' + file

					}).prependTo(link);
				}
			}
		});
	});

})(jQuery);