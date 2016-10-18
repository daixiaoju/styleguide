angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div ng-show=\"!displayPopup()\">\n" +
    "    <div class=\"con-row\">\n" +
    "        <div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "            <div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "                <div class=\"sub-header\">\n" +
    "                    <span>From</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "                </div>\n" +
    "                <div uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "            <div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "                <div class=\"sub-header\">\n" +
    "                    <span>From</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "                </div>\n" +
    "                <persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker\">\n" +
    "                </persian-datepicker>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "            <div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "                <div class=\"sub-header\">\n" +
    "                    <span>To</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "                </div>\n" +
    "                <div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "            <div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "                <div class=\"sub-header\">\n" +
    "                    <span>To</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "                </div>\n" +
    "                <persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker\">\n" +
    "                </persian-datepicker>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container alert-error notice-spacer\">\n" +
    "        <i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"displayPopup()\">\n" +
    "    <div class=\"con-row\">\n" +
    "        <div tabindex=0 class=\"context-menu card-context popup-control\" ng-click=\"onClickShowAllDates()\" ng-class='{\"pin-down\" : dropDownState.showAllDatePickers}'>\n" +
    "            <i class=\"mdi mdi-calendar\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex line-center\">\n" +
    "            <input id=\"popupFromId\" class=\"date-range-start-date pointer start-date-input\" type=\"text\" ng-click=\"dropDownState.showStartDatePicker = !dropDownState.showStartDatePicker\" ng-model=\"startDate\" uib-datepicker-popup=\"{{dateFormat}}\" on-open-focus=\"false\"\n" +
    "                is-open=\"dropDownState.showStartDatePicker\" ng-required=\"true\" show-button-bar=\"false\" datepicker-options=\"datepickerOptions\" close-on-date-selection=\"false\" />\n" +
    "        </div>\n" +
    "        <div class=\"con-flex line-center\">\n" +
    "            <input id=\"popupToId\" class=\"pointer end-date-input date-range-end-date\" type=\"text\" ng-click=\"dropDownState.showEndDatePicker = !dropDownState.showEndDatePicker\" ng-model=\"endDate\" uib-datepicker-popup=\"{{dateFormat}}\" on-open-focus=\"false\" is-open=\"dropDownState.showEndDatePicker\"\n" +
    "                ng-required=\"true\" show-button-bar=\"false\" datepicker-options=\"datepickerOptions\" close-on-date-selection=\"false\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container alert-error notice-spacer\">\n" +
    "        <i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('directives/time-range-picker/time-range-picker.tpl.html',
    "<div class=\"con-row\">\n" +
    "  <div class=\"con-flex\">\n" +
    "    <timepicker-wrap ng-model=\"startTime\"></timepicker-wrap>\n" +
    "  </div>\n" +
    "  <div class=\"con-flex\">\n" +
    "    <timepicker-wrap ng-model=\"endTime\"></timepicker-wrap>\n" +
    "  </div>\n" +
    "  <div class=\"con-flex\" ng-show=\"!disableNextDay || nextDay\">\n" +
    "    <div tabindex=0 class=\"context-menu card-context\" style=\"margin:0;\" ng-click=\"toggleNextDay()\">\n" +
    "      <i ng-if=\"!nextDay\" class=\"mdi mdi-weather-sunny\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "        <md-tooltip><span translate>Today</span></md-tooltip>\n" +
    "      </i>\n" +
    "      <i ng-if=\"nextDay\" class=\"mdi mdi-weather-night\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "        <md-tooltip><span translate>OverMidnight</span></md-tooltip> \n" +
    "      </i>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\">\n" +
    "  <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "  <span translate>EndTimeMustBeGreaterOrEqualToStartTime</span>\n" +
    "</div>\n" +
    "<div class=\"error-msg-container ng-invalid-parse alert-error notice-spacer\">\n" +
    "  <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "  <span translate>StartTimeAndEndTimeMustBeSet</span>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/wfm-multiple-search/wfm-multiple-search-input.tpl.html',
    "<label for=\"advanced-search\" class=\"input-prepend wfm-multiple-search-wrapper\">\n" +
    "	<i class=\"mdi mdi-magnify\">\n" +
    "		<md-tooltip>{{ vm.title }}</md-tooltip>\n" +
    "	</i>\n" +
    "	<input id=\"advanced-search\" class=\"advanced-input\" type=\"text\" placeholder=\"{{vm.title}}\" ng-class=\"{'expand-advanced-input': vm.showAdvancedSearchOption}\"\n" +
    "	ng-model=\"vm.searchOptions.keyword\" ng-keydown=\"$event.which === 13 && vm.searchCallback(vm.searchOptions.keyword) || vm.turnOffAdvancedSearch()\" ng-change=\"vm.validateSearchKeywordChanged()\"\n" +
    "	ng-click=\"vm.toggleAdvancedSearchOption($event)\" keyword-format/>\n" +
    "	<div class=\"advanced-input-dropdown\" ng-cloak ng-if=\"vm.showAdvancedSearchOption\" outside-click=\"vm.turnOffAdvancedSearch()\">\n" +
    "		<div class=\"con-row\">\n" +
    "			<div class=\"con-flex\">\n" +
    "				<div class=\"panel material-depth-1\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<h2>Searchcl</h2>\n" +
    "					</div>\n" +
    "					<form name=\"form\" class=\"wfm-form\" novalidate>\n" +
    "						<div class=\"con-row\" ng-repeat=\"searchField in vm.searchOptions.searchFields\" ng-if=\"$even\">\n" +
    "							<div class=\"full-padding\" >\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index]\" id=\"criteria-{{vm.searchOptions.searchFields[$index]}}\" class=\"con-flex\" type=\"text\" ng-keydown=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{vm.searchOptions.searchFields[$index]}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index]]\"/>\n" +
    "							</div>\n" +
    "							<div class=\"full-padding\">\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index + 1]\" id=\"criteria-{{vm.searchOptions.searchFields[$index + 1]}}\" class=\"con-flex\" type=\"text\" ng-keydown=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{vm.searchOptions.searchFields[$index + 1]}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index + 1]]\" />\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"con-footer\">\n" +
    "							<button id=\"go-advanced-search\" class=\"wfm-btn wfm-btn-invis-primary\" ng-click=\"vm.advancedSearch()\">Search</button>\n" +
    "						</div>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</label>\n"
  );


  $templateCache.put('directives/workinghourspicker/working-hours-picker.tpl.html',
    "<div class=\"row toolbar\">\n" +
    "	<div class=\"wfm-block\">\n" +
    "		<ul class=\"wfm-list\">\n" +
    "			<li>\n" +
    "				<span class=\"list-item-container list-header\">\n" +
    "					&nbsp;\n" +
    "				</span>\n" +
    "				<span class=\"list-item-container\">\n" +
    "					<div ng-repeat-start=\"weekday in weekDays\" ng-repeat-end>\n" +
    "						<span translate>{{weekday | showWeekdays}}</span>\n" +
    "					</div>\n" +
    "				</span>\n" +
    "			</li>\n" +
    "\n" +
    "			<li ng-repeat=\"WorkingPeriod in workingHours\"\n" +
    "				ng-click=\"$parent.toggleWorkingPeriodSelect(WorkingPeriod)\">\n" +
    "				<span class=\"list-item-container list-header\">\n" +
    "					<md-tooltip>{{getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</md-tooltip>\n" +
    "					{{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}\n" +
    "				</span>\n" +
    "\n" +
    "				<span class=\"list-item-container\">\n" +
    "					<div ng-repeat-start=\"WeekDay in WorkingPeriod.WeekDaySelections\" ng-repeat-end>\n" +
    "						<div class=\"wfm-checkbox wfm-checkbox-inline \">\n" +
    "							<input type=\"checkbox\" id=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-model=\"WeekDay.Checked\" />\n" +
    "							<label for=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-click=\"enforceRadioBehavior($parent.$index, WeekDay.WeekDay)\">\n" +
    "								<span class=\"wfm-checkbox-toggle\"></span>\n" +
    "								<span class=\"wfm-checkbox-label\"></span>\n" +
    "							</label>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</span>\n" +
    "\n" +
    "				<div class=\"wfm-leave-behind wfm-leave-behind-2\">\n" +
    "					<span>\n" +
    "						<i class=\"mdi mdi-check\" ng-click=\"$parent.toggleAllChecks($index)\">\n" +
    "							<md-tooltip>\n" +
    "								{{'ToggleAll' | translate}}\n" +
    "							</md-tooltip>\n" +
    "						</i>\n" +
    "						<i class=\"mdi mdi-delete\" ng-click=\"$parent.removeWorkingPeriod($index)\">\n" +
    "							<md-tooltip>\n" +
    "								{{'DeletePeriod' | translate}}\n" +
    "							</md-tooltip>\n" +
    "						</i>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<div class=\"con-row\">\n" +
    "			<time-range-picker ng-model=\"newWorkingPeriod\"  disable-next-day=\"disableNextDay\">\n" +
    "				<button type=\"button\" class=\"wfm-fab mini success\" ng-click=\"addEmptyWorkingPeriod()\">\n" +
    "					<i class=\"mdi mdi-plus\"></i>\n" +
    "					<md-tooltip>{{'AddEmptyPeriod' | translate}}</md-tooltip>\n" +
    "				</button>\n" +
    "			</time-range-picker>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n"
  );

}]);
