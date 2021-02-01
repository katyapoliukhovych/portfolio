var change = {
	resume: document.querySelector('.resume'),
	about_main: document.querySelector('.about_main'),
	resume_button: document.querySelector('.resume_button'),
	about_button: document.querySelector('.person_link'),
	start: function () {
		var self = this;

		function init_data() {
			self.off_class = 'off';
		}

		function event_listener() {
			self.resume_button.addEventListener('click', function(event) {
				self.onclickResume(event);
			})

			self.about_button.addEventListener('click', function(event) {
				self.onclickAbout(event);
			})

		}

		init_data();
		event_listener();
	},

	onclickResume: function (event) {
		this.about_main.classList.add(this.off_class);
		this.resume.classList.remove(this.off_class);
	}, 

	onclickAbout: function (event) {
		this.about_main.classList.remove(this.off_class);
		this.resume.classList.add(this.off_class);
	}
}