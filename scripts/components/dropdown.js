'use strict';

// Dropdawn

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dropdawn = function () {
		function Dropdawn(options) {
				_classCallCheck(this, Dropdawn);

				this.link = options.link;

				for (var i = 0; i < this.link.length; i++) {
						this.link[i].addEventListener('click', this.render.bind(this));
				}
		}

		_createClass(Dropdawn, [{
				key: 'render',
				value: function render(event) {
						event.preventDefault();

						var target = event.target;

						// If dropdown list - return
						if (target.closest('.dropdawn-list')) return false;

						var currentTarget = event.currentTarget,
						    id = currentTarget.getAttribute('data-dropdown-id'),
						    dropdawn = document.getElementById(id),
						    link = currentTarget.querySelector('.field-select__arrow');

						link.classList.toggle('field-select__arrow_open');
						dropdawn.classList.toggle('dropdawn-list_show');
				}
		}]);

		return Dropdawn;
}();