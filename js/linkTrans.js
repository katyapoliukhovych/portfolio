var linkTrans = {
	nav_links: document.querySelectorAll('.nav_link'),
	social_links: document.querySelectorAll('.social_link'),
	link_trans_class: 'link_trans',

	start: function() {
		for (var i = 0; i < this.nav_links.length; i++) {
			this.nav_links[i].classList.add(this.link_trans_class);
		};

		for (var i = 0; i < this.social_links.length; i++) {
			this.social_links[i].classList.add(this.link_trans_class);
		}
	}
}