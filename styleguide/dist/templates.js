angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div ng-show=\"!displayPopup()\">\n" +
    "	<div class=\"con-row\">\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "				<div class=\"sub-header\">\n" +
    "					<span>From</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "				</div>\n" +
    "				<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "				<div class=\"sub-header\">\n" +
    "					<span>From</span>: <strong>{{startDate | persianDate:'shortDate' }}</strong>\n" +
    "				</div>\n" +
    "				<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "				</persian-datepicker>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "				<div class=\"sub-header\">\n" +
    "					<span>To</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "				</div>\n" +
    "				<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "				<div class=\"sub-header\">\n" +
    "					<span>To</span>: <strong>{{ endDate | persianDate:'shortDate' }}</strong>\n" +
    "				</div>\n" +
    "				<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "				</persian-datepicker>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container alert-error notice-spacer\">\n" +
    "		<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"displayPopup()\">\n" +
    "<div class=\"wfm-datepicker-controllers-container\">\n" +
    "	<div tabindex=0 class=\"context-menu card-context popup-control\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "		<i class=\"mdi mdi-calendar\"></i>\n" +
    "	</div>\n" +
    "	<div tabindex=0 class=\"start-date-indicator\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "			<span class=\"pointer\">From: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ startDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ startDate | persianDate:'shortDate' }}</span>\n" +
    "	</div>\n" +
    "	<div tabindex=0 ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "			<span class=\"pointer\">To: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ endDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ endDate | persianDate:'shortDate' }}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"wfm-datepicker-container\" ng-show=\"displayCalendars\">\n" +
    "	<div class=\"con-row wfm-datepicker-popup-row\">\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "				<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "				<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "				</persian-datepicker>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "				<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "			<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "				<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "				</persian-datepicker>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container error-msg-popup alert-error notice-spacer\">\n" +
    "		<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('directives/time-range-picker/time-range-picker.tpl.html',
    "<div class=\"inline-flex\">\n" +
    "<timepicker-wrap ng-model=\"startTime\"></timepicker-wrap>\n" +
    "<timepicker-wrap ng-model=\"endTime\"></timepicker-wrap>\n" +
    "<div ng-show=\"!disableNextDay || nextDay\">\n" +
    "  <div tabindex=0 class=\"context-menu card-context\" style=\"margin:0;\" ng-click=\"toggleNextDay()\">\n" +
    "    <i ng-if=\"!nextDay\" class=\"mdi mdi-weather-sunny\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "      <md-tooltip><span translate>Today</span></md-tooltip>\n" +
    "    </i>\n" +
    "    <i ng-if=\"nextDay\" class=\"mdi mdi-weather-night\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "      <md-tooltip><span translate>OverMidnight</span></md-tooltip>\n" +
    "    </i>\n" +
    "  </div>\n" +
    "</div>\n" +
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
    "						<h2>{{ 'Searchcl' | translate }}</h2>\n" +
    "					</div>\n" +
    "					<form name=\"form\" class=\"wfm-form\" novalidate>\n" +
    "						<div class=\"con-row\" ng-repeat=\"searchField in vm.searchOptions.searchFields\" ng-if=\"$even\">\n" +
    "							<div class=\"full-padding\" >\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index]\" id=\"criteria-{{vm.searchOptions.searchFields[$index]}}\" class=\"con-flex\" type=\"text\" ng-keydown=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{vm.searchOptions.searchFields[$index]|translate}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index]]\"/>\n" +
    "							</div>\n" +
    "							<div class=\"full-padding\">\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index + 1]\" id=\"criteria-{{vm.searchOptions.searchFields[$index + 1]}}\" class=\"con-flex\" type=\"text\" ng-keydown=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{vm.searchOptions.searchFields[$index + 1]|translate}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index + 1]]\" />\n" +
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


  $templateCache.put('directives/wfm-right-panel/wfm-right-panel.tpl.html',
    "<md-backdrop class=\"md-sidenav-backdrop md-opaque ng-scope\" ng-if=\"vm.panelOptions.showBackdrop && vm.panelOptions.panelState\" ng-click=\"vm.panelOptions.panelState = false;\"></md-backdrop>\n" +
    "\n" +
    "<div class=\"head-actions panel-menu\">\n" +
    "	<div tabindex=0 class=\"context-menu card-context open-right-panel\" ng-if=\"vm.panelOptions.showPopupButton\" ng-click=\"vm.panelOptions.panelState = true\">\n" +
    "	 <i class=\"mdi mdi-chevron-double-left\"></i>\n" +
    "	 <md-tooltip>{{\"ShowRightPanel\" | translate}}</md-tooltip>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div resizable r-directions=\"['left']\" r-flex=\"false\" ng-show=\"vm.showPanel\">\n" +
    "	<md-sidenav class=\"md-sidenav-right wfm-right-panel drsElement\" md-component-id=\"right-panel\" md-is-open=\"vm.panelOptions.panelState\">\n" +
    "	<div class=\"sub-header\">\n" +
    "		<h2>{{vm.panelOptions.sidePanelTitle | translate}}</h2>\n" +
    "		<div class=\"head-actions panel-menu close-right-panel\" ng-click=\"vm.closePanel()\" ng-if=\"vm.panelOptions.showCloseButton\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context\">\n" +
    "				<i class=\"mdi mdi-arrow-right\"></i>\n" +
    "				<md-tooltip>{{\"HidePanel\" | translate}}</md-tooltip>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"panel-content\" ng-transclude></div>\n" +
    "	</md-sidenav>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/workinghourspicker/working-hours-picker.tpl.html',
    "<div class=\"con-row\">\n" +
    "	<div><!--No need for a con-flex here, its in the directive-->\n" +
    "		<button type=\"button\" class=\"wfm-fab mini\" ng-click=\"addEmptyWorkingPeriod()\">\n" +
    "			<i class=\"mdi mdi-plus\"></i>\n" +
    "			<md-tooltip>{{'AddEmptyPeriod' | translate}}</md-tooltip>\n" +
    "		</button>\n" +
    "		<time-range-picker ng-model=\"newWorkingPeriod\" disable-next-day=\"disableNextDay\"></time-range-picker>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"WorkingPeriod in workingHours\">\n" +
    "	<div class=\"con-row working-hours-row\">\n" +
    "		<div class=\"con-flex\">\n" +
    "			<h2>{{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</h2>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex\" ng-repeat=\"WeekDay in WorkingPeriod.WeekDaySelections\">\n" +
    "			<div class=\"wfm-checkbox working-hours-radio\">\n" +
    "				<input type=\"checkbox\" id=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-model=\"WeekDay.Checked\"/>\n" +
    "				<label for=\"check_workinghour_{{$parent.$index}}_weekday_{{WeekDay.WeekDay}}\" ng-click=\"enforceRadioBehavior($parent.$index, WeekDay.WeekDay)\">\n" +
    "					<span class=\"wfm-checkbox-toggle\"></span>\n" +
    "					<span class=\"wfm-checkbox-label\"><span translate>{{WeekDay | showWeekdays}}</span></span>\n" +
    "				</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context\" ng-click=\"$parent.removeWorkingPeriod($index)\">\n" +
    "				<i class=\"mdi mdi-delete\"></i>\n" +
    "				<md-tooltip>{{'DeletePeriod' | translate}} {{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</md-tooltip>\n" +
    "			</div>\n" +
    "			<div tabindex=0 class=\"context-menu card-context\" ng-click=\"$parent.toggleAllChecks($index)\">\n" +
    "				<i class=\"mdi mdi-check\"></i>\n" +
    "				<md-tooltip>{{'ToggleAll' | translate}}</md-tooltip>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n"
  );

}]);
