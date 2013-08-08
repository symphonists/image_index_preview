jQuery(document).ready(function($) {

	 /**
		* This plugin adds image preview to the publish pages.
		*
		* @author: Symphony Community
		* @source: https://github.com/symphonists/image_index_preview
		*/
	 var root, page, link, path, file, size;
	 var defaultSize = 140;

	 root = Symphony.Context.get('root');
	 page = Symphony.Context.get('env')['page'];

	 function getDimensions(src, link) {
		var ratio, w, h;
		img = document.createElement('img');
		img.src = src;

		img.onload = function() {
			w = this.width;
			h = this.height;
			
			if (h > w) {
				 ratio = w / h;
				 size = parseInt(defaultSize * ratio) + '/' + 0;
			}
			else {
				 ratio = h / w;
				 size = 0 + '/' + parseInt(defaultSize * ratio);
			}

			// add preview
			$('<img />', {
				src: this.src.replace('workspace','image/1/'+size)
			}).prependTo(link);
		}
	 }

	 $('table td[class*="upload"] a, fieldset div[class*="upload"] a', '#contents').each(function() {
		link = $(this);

		if (page == 'index') {
			 path = link.data('path');
			 filename = link.text();
			 file = path.replace(root, '').replace('/workspace/','') + '/' + filename;
			 full_filepath = root + path + '/' + filename;
		}
		else {
			 path = link.attr('href');
			 file = path.replace(root, '').replace('/workspace/','');
			 full_filepath = path;
		}

		if (path && file.match(/\.(?:bmp|gif|jpe?g|png)$/i)) {
			// remove file name
			link.text('');
			// add image
			getDimensions(full_filepath, link);
		}
	 });
});
