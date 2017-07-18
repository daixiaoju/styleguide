angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/badge/badge.tpl.html',
    "<span class=\"wfm-badge material-depth-1 grow-out\" ng-class=\"$ctrl.status\"  ng-if=\"$ctrl.badgeModel>0\">{{$ctrl.badgeModel}}</span>\n"
  );


  $templateCache.put('directives/cultural-datepicker/cultural-datepicker.tpl.html',
    "<div ng-if=\"isJalaali\" class=\"wfm-datepicker-wrap\" style=\"display:inline-block; min-height:290px;\">\n" +
    "  <persian-datepicker ng-model=\"dt\" show-weeks=\"true\" class=\"wfm-datepicker\"></persian-datepicker>\n" +
    "</div>\n" +
    "<div ng-if=\"isGregorian\" class=\"wfm-datepicker-wrap\" style=\"display:inline-block; min-height:290px;\">\n" +
    "  <div uib-datepicker show-weeks=\"true\" ng-model=\"dt\" class=\"wfm-datepicker\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div class=\"wfm-date-range-picker\">\n" +
    "	<div ng-show=\"!displayPopup()\">\n" +
    "		<div class=\"con-row\">\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxFrom}}</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "					</div>\n" +
    "					<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxFrom}}</span>: <strong>{{startDate | persianDate:'shortDate' }}</strong>\n" +
    "					</div>\n" +
    "					<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</persian-datepicker>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxTo}}</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "					</div>\n" +
    "					<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxTo}}</span>: <strong>{{ endDate | persianDate:'shortDate' }}</strong>\n" +
    "					</div>\n" +
    "					<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</persian-datepicker>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container alert-error notice-spacer\">\n" +
    "			<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-show=\"displayPopup()\">\n" +
    "		<div class=\"wfm-datepicker-controllers-container\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context popup-control\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "				<i class=\"mdi mdi-calendar\"></i>\n" +
    "			</div>\n" +
    "			<div tabindex=0 class=\"start-date-indicator\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "					<span class=\"pointer\">{{::xxFrom}}: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ startDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ startDate | persianDate:'shortDate' }}</span>\n" +
    "			</div>\n" +
    "			<div tabindex=0 ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "					<span class=\"pointer\">{{::xxTo}}: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ endDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ endDate | persianDate:'shortDate' }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"wfm-datepicker-container modal-box\" ng-show=\"displayCalendars\">\n" +
    "			<div class=\"modalbg\" ng-click=\"hideDateRangePicker()\"></div>\n" +
    "			<div class=\"con-row wfm-datepicker-popup-row\">\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "						<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "						<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</persian-datepicker>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "						<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "						<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</persian-datepicker>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container error-msg-popup alert-error notice-spacer\">\n" +
    "				<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"
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
    "<div class=\"wfm-multiple-search-wrapper\">\n" +
    "	<input id=\"advanced-search\" class=\"advanced-input\" type=\"text\" placeholder=\"{{vm.title}}\" ng-class=\"{'expand-advanced-input': vm.showAdvancedSearchOption}\"\n" +
    "	ng-model=\"vm.searchOptions.keyword\" ng-keyup=\"vm.searchTextInputKeyup($event)\" ng-focus=\"vm.openAdvancedSearchOption($event)\" ng-change=\"vm.searchTextChange()\" ng-click=\"vm.openAdvancedSearchOption($event)\" keyword-format/>\n" +
    "	<div class=\"advanced-input-dropdown\" ng-cloak ng-if=\"vm.showAdvancedSearchOption\" outside-click=\"vm.turnOffAdvancedSearch();\">\n" +
    "				<div class=\"panel material-depth-1\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<h2>{{ 'Search' | translate }}</h2>\n" +
    "					</div>\n" +
    "					<form name=\"form\" class=\"wfm-form\" novalidate>\n" +
    "						<div class=\"con-row\" ng-repeat=\"searchField in vm.searchOptions.searchFields\" ng-if=\"$even\">\n" +
    "							<div class=\"full-padding\" >\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index]\" id=\"criteria-{{vm.searchOptions.searchFields[$index]}}\" class=\"con-flex\" type=\"text\" ng-keyup=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{'PersonFinderField'+ vm.searchOptions.searchFields[$index]|translate}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index]]\"/>\n" +
    "							</div>\n" +
    "							<div class=\"full-padding\">\n" +
    "								<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index + 1]\" id=\"criteria-{{vm.searchOptions.searchFields[$index + 1]}}\" class=\"con-flex\" type=\"text\" ng-keyup=\"$event.which === 13 && vm.advancedSearch()\" placeholder=\"{{'PersonFinderField'+ vm.searchOptions.searchFields[$index + 1]|translate}}\" ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index + 1]]\" />\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"con-footer\">\n" +
    "							<button id=\"go-advanced-search\" class=\"wfm-btn wfm-btn-invis-primary\" ng-click=\"vm.advancedSearch()\">{{'Search' | translate}}</button>\n" +
    "						</div>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"search-button\">\n" +
    "		<span class=\"cursor-pointer search-icon\" ng-focus=\"vm.turnOffAdvancedSearch()\" ng-click=\"vm.searchCallback(vm.searchOptions.keyword);vm.turnOffAdvancedSearch();vm.resetFocusSearch()\">\n" +
    "			<i class=\"mdi mdi-magnify\" ng-class=\"{'focusing-search': vm.searchOptions.focusingSearch}\"></i>\n" +
    "			<md-tooltip>{{'Search' | translate}}</md-tooltip>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('directives/wfm-right-panel/wfm-right-panel.tpl.html',
    "<md-backdrop class=\"md-sidenav-backdrop md-opaque ng-scope\" ng-if=\"vm.panelOptions.showBackdrop && vm.panelOptions.panelState\" ng-click=\"vm.panelOptions.panelState = false;\"></md-backdrop>\n" +
    "\n" +
    "<div class=\"head-actions panel-menu\">\n" +
    "	<div tabindex=0 class=\"context-menu card-context open-right-panel\" ng-if=\"vm.panelOptions.showPopupButton\" ng-click=\"vm.panelOptions.panelState = true\">\n" +
    "	 <i class=\"mdi mdi-arrow-left-box\"></i>\n" +
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
    "				<i class=\"mdi mdi-arrow-right-box\"></i>\n" +
    "				<md-tooltip>{{\"HidePanel\" | translate}}</md-tooltip>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"panel-content\" ng-transclude></div>\n" +
    "	</md-sidenav>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/work-hour-picker/work-hour-picker.tpl.html',
    "<div class=\"relative working-hour-picker\">\n" +
    "  <div class=\"con-row day-row\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <button tabindex=\"0\" class=\"wfm-fab mini grow-out\" ng-click=\"$ctrl.openPicker(form)\"\n" +
    "      ng-class=\"{'mini-active': $ctrl.showSummary}\">\n" +
    "      <i class=\"mdi\" ng-class=\"{'mdi-close':$ctrl.showSummary, 'mdi-table-large':!$ctrl.showSummary}\"></i>\n" +
    "      <md-tooltip ng-if=\"!$ctrl.showSummary\">{{'OpenHours' | translate}}</md-tooltip>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "  <div class=\"con-flex line-center animate work-day\" ng-repeat=\"day in $ctrl.weekdays\" ng-show=\"$ctrl.showSummary\" ng-class=\"{'inactive-work-day':!$ctrl.showSummary}\">\n" +
    "    <button tabindex=\"0\" class=\"wfm-fab mini\" ng-click=\"$ctrl.selectDay(day)\"\n" +
    "    ng-class=\"{'mini-success': day.IsSelected}\">\n" +
    "    <span style=\"text-transform:uppercase;\">{{day.Name | limitTo:1}}</span>\n" +
    "    <md-tooltip>{{day.Name}}</md-tooltip>\n" +
    "  </button>\n" +
    "</div>\n" +
    "\n" +
    "<form ng-cloak name=\"form\" class=\"wfm-form working-hour-dropdown panel material-depth-2 animate-show\" novalidate ng-show=\"$ctrl.showSummary\">\n" +
    "  <div class=\"sub-header\">\n" +
    "    <h2>{{'OpenHours' | translate}}</h2>\n" +
    "    <div class=\"head-actions panel-menu\">\n" +
    "      <div tabindex=0 class=\"context-menu card-context grow-out\" ng-click=\"$ctrl.overNight = !$ctrl.overNight\" ng-show=\"$ctrl.selectedDays.length > 0\" ng-if=\"$ctrl.overNightSwitch\">\n" +
    "        <i class=\"mdi\" ng-class=\"{'mdi-weather-night':$ctrl.overNight, 'mdi-weather-sunny':!$ctrl.overNight}\"></i>\n" +
    "        <md-tooltip ng-if=\"$ctrl.overNight\">{{'OverMidnight'|translate}}</md-tooltip>\n" +
    "        <md-tooltip ng-if=\"!$ctrl.overNight\">{{'Today'|translate}}</md-tooltip>\n" +
    "      </div>\n" +
    "      <div tabindex=0 class=\"context-menu card-context\" ng-click=\"$ctrl.toggleTimeFormat()\" ng-if=\"$ctrl.timeFormatSwitch\">\n" +
    "        <i class=\"mdi\" ng-class=\"{'mdi-alarm':$ctrl.timeFormat.Meridian, 'mdi-alarm-off':!$ctrl.timeFormat.Meridian}\"></i>\n" +
    "        <md-tooltip ng-if=\"!$ctrl.timeFormat.Meridian\">{{'FormatColon'|translate}} 24</md-tooltip>\n" +
    "        <md-tooltip ng-if=\"$ctrl.timeFormat.Meridian\">{{'FormatColon'|translate}} 12</md-tooltip>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"con-row animate-show\" ng-show=\"$ctrl.selectedDays.length > 0\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <div class=\"form-input-wrap\">\n" +
    "        <label for=\"open\">{{'StartColon' | translate}}</label>\n" +
    "        <div uib-timepicker ng-model=\"form.openHour\" name=\"open\" id=\"open\" show-meridian=\"$ctrl.timeFormat.Meridian\" required=\"\"></div>\n" +
    "        <div ng-cloak class=\"animate-input-message\" ng-show=\"form.$submitted || form.open.$error.required.$touched\">\n" +
    "          <div class=\"form-input-message\" ng-class=\"{formInvalidInput:form.$invalid}\">{{$ctrl.errorMessage}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"con-flex\">\n" +
    "      <div class=\"form-input-wrap\">\n" +
    "        <label for=\"close\">{{'EndColon'|translate}}</label>\n" +
    "        <div uib-timepicker ng-model=\"form.closeHour\" name=\"close\" id=\"close\" show-meridian=\"$ctrl.timeFormat.Meridian\" required=\"\"></div>\n" +
    "        <div ng-cloak class=\"animate-input-message\" ng-show=\"form.$submitted || form.close.$error.required.$touched\">\n" +
    "          <div class=\"form-input-message\" ng-class=\"{formInvalidInput:form.$invalid}\">{{$ctrl.errorMessage}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"con-row animate-show\" ng-show=\"$ctrl.showSummary\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <table class=\"wfm-table\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>{{'Day'|translate}}</th>\n" +
    "            <th>{{'Start' | translate}}</th>\n" +
    "            <th>{{'End' | translate}}</th>\n" +
    "            <th>{{'Clear' | translate}}</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"day in $ctrl.weekdays\">\n" +
    "            <td>\n" +
    "              {{day.Name}}\n" +
    "              <i class=\"mdi pull-right\" ng-class=\"{'mdi-weather-night':day.OverNight == true, 'mdi-weather-sunny':day.OverNight == false}\" ng-if=\"$ctrl.overNightSwitch\">\n" +
    "                <md-tooltip ng-if=\"day.OverNight\">{{'OverNight'|translate}}</md-tooltip>\n" +
    "                <md-tooltip ng-if=\"!day.OverNight\">{{'Today'|translate}}</md-tooltip>\n" +
    "              </i>\n" +
    "            </td>\n" +
    "            <td class=\"number-cell\">{{day.OpenHour | date: $ctrl.timeFormat.Format}}</td>\n" +
    "            <td class=\"number-cell\">{{day.CloseHour | date: $ctrl.timeFormat.Format}}</td>\n" +
    "            <td class=\"line-center\">\n" +
    "              <i class=\"mdi mdi-delete pointer\" ng-click=\"$ctrl.clearDay(day);\"></i>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"panel\">\n" +
    "    <div class=\"con-footer animate-show\" ng-show=\"$ctrl.selectedDays.length > 0\">\n" +
    "      <button class=\"wfm-btn wfm-btn-invis-default\" type=\"submit\" ng-click=\"$ctrl.saveHours(form)\">{{'Apply'|translate}}</button>\n" +
    "      <button class=\"wfm-btn wfm-btn-invis-primary\" type=\"submit\" ng-click=\"$ctrl.saveAndClose(form)\"><md-tooltip>{{'SaveClose'|translate}}</md-tooltip>{{'Save'|translate}}</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</form>\n" +
    "</div>\n" +
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
