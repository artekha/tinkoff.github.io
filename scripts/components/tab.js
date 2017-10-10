'use strict';

// Tab

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tab = function () {
	function Tab(options) {
		_classCallCheck(this, Tab);

		this.element = options.element;
		this.close = this.element.querySelector('.tab-close');
		this.link = this.element.querySelector('.tab-link');
		this.content = this.element.querySelector('.tab-content');

		this.close.addEventListener('click', this.remove.bind(this));
		this.link.addEventListener('click', this.render.bind(this));
	}

	_createClass(Tab, [{
		key: 'remove',
		value: function remove() {
			this.element.classList.add('tab_hidden');
		}
	}, {
		key: 'render',
		value: function render(event) {
			event.preventDefault();

			var target = event.target;

			while (target != this.link) {
				if (target.classList.contains('tab-link__item')) {
					if (target.classList.contains('active')) return false;

					var links = this.link.children;
					for (var i = 0; i < links.length; i++) {
						this.link.children[i].classList.remove('active');
						this.content.children[i].classList.remove('active');
						if (target == links[i]) {
							target.classList.add('active');
							this.content.children[i].classList.add('active');
						}
					}
					return;
				}
				target = target.parentNode;
			}
		}
	}]);

	return Tab;
}();