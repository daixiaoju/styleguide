angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div ng-show=\"!displayPopup()\">\n" +
    "  <div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "    <div class=\"sub-header\">\n" +
    "      <span>From</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "    </div>\n" +
    "    <uib-datepicker\n" +
    "	    ng-model=\"startDate\"\n" +
    "	    show-weeks=\"true\"\n" +
    "	    custom-class=\"setRangeClass(date, mode)\"\n" +
    "	    min-date=\"dummyMinDate\"\n" +
    "	    class=\"wfm-datepicker\"></uib-datepicker>  \n" +
    "  </div>\n" +
    "  <div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "    <div class=\"sub-header\">\n" +
    "      <span>To</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "    </div>\n" +
    "    <uib-datepicker\n" +
    "	    ng-model=\"endDate\"\n" +
    "	    show-weeks=\"true\"\n" +
    "	    custom-class=\"setRangeClass(date, mode)\"\n" +
    "	    min-date=\"dummyMinDate\"\n" +
    "	    class=\"wfm-datepicker\"></uib-datepicker>  \n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateMustBeEqualToOrEarlierThanEndDate</span>\n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container ng-invalid-empty alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateAndEndDateMustBeSet</span>\n" +
    "  </div>  \n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"displayPopup()\">\n" +
    "  <label translate class=\"hor-m-5 inline-vertical-fix\">From</label>\n" +
    "  <div class=\"inline-datepicker-wrap date-range-start-date\">\n" +
    "    <input class=\"pointer start-date-input\"\n" +
    "	    type=\"text\"\n" +
    "	    ng-click=\"dropDownState.showStartDatePicker = !dropDownState.showStartDatePicker\"\n" +
    "	    ng-model=\"startDate\"\n" +
    "	    uib-datepicker-popup=\"{{dateFormat}}\"\n" +
    "	    on-open-focus=\"false\"\n" +
    "	    custom-class=\"setRangeClass(date, mode)\"\n" +
    "	    show-weeks=\"true\"\n" +
    "	    is-open=\"dropDownState.showStartDatePicker\"\n" +
    "	    ng-required=\"true\"\n" +
    "	    show-button-bar=\"false\"\n" +
    "	    min-date=\"dummyMinDate\"\n" +
    "	    close-on-date-selection=\"false\" />\n" +
    "  </div>\n" +
    "  <label translate class=\"hor-m-5 inline-vertical-fix\">To</label>\n" +
    "  <div class=\"inline-datepicker-wrap date-range-end-date\">\n" +
    "    <input class=\"pointer end-date-input\"\n" +
    "	    type=\"text\"\n" +
    "	    ng-click=\"dropDownState.showEndDatePicker = !dropDownState.showEndDatePicker\"\n" +
    "	    ng-model=\"endDate\"\n" +
    "	    uib-datepicker-popup=\"{{dateFormat}}\"\n" +
    "	    on-open-focus=\"false\"\n" +
    "	    show-weeks=\"true\"\n" +
    "	    custom-class=\"setRangeClass(date, mode)\"\n" +
    "	    is-open=\"dropDownState.showEndDatePicker\"\n" +
    "	    ng-required=\"true\"\n" +
    "	    show-button-bar=\"false\"\n" +
    "	    min-date=\"dummyMinDate\"\n" +
    "	    close-on-date-selection=\"false\" />\n" +
    "  </div>\n" +
    "  <span class='popup-control'\n" +
    "	  ng-mouseenter=\"hoverShow=true\"\n" +
    "	  ng-mouseleave=\"hoverShow=false\"\n" +
    "	  ng-click=\"onClickShowAllDates()\"\n" +
    "	  ng-class='{\"pin-down\" : dropDownState.showAllDatePickers}'>\n" +
    "    <i class=\"mdi mdi-calendar middle inline-vertical-fix\"></i>\n" +
    "  </span>\n" +
    "  \n" +
    "  <div class=\"error-msg-container error-msg-popup-container ng-invalid-order alert-error notice-spacer\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateMustBeEqualToOrEarlierThanEndDate</span>\n" +
    "  </div>\n" +
    "  <div class=\"error-msg-container error-msg-popup-container ng-invalid-empty alert-error notice-spacer\" ng-if=\"hoverShow\">\n" +
    "    <i class='mdi mdi-alert-octagon'></i> <span>StartDateAndEndDateMustBeSet</span>\n" +
    "  </div>  \n" +
    " \n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('directives/date-range-picker/wfm-date-range-picker.tpl.html',
    "<div ng-show=\"templateType==='inline'\" class=\"wfm-block clearfix picker-template-inline\">\n" +
    "	<div ng-class=\"{ 'ng-valid': !isInvalid(), 'ng-invalid': isInvalid(), 'ng-invalid-order': isInvalid('order'), 'ng-invalid-empty': isInvalid('empty')}\">\n" +
    "		<div class=\"wfm-datepicker-wrap no-boxshadow\">\n" +
    "			<div class=\"sub-header\">\n" +
    "				<span translate>From</span> <strong>{{ startDate | date: \"shortDate\" }}</strong>\n" +
    "				<div class=\"icon-set form-validation-sign datepickerfix\">\n" +
    "					<i class=\"mdi mdi-check right-sign \"></i>\n" +
    "					<i class=\"mdi mdi-close wrong-sign\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<datepicker name=\"startDatePicker\" show-weeks=\"true\" class=\"wfm-datepicker datepicker-start-date\" ng-model=\"startDate\" ng-disabled=\"disabled\"\n" +
    "						custom-class=\"setRangeClass(date, mode)\"></datepicker>\n" +
    "		</div>\n" +
    "		<div class=\"wfm-datepicker-wrap no-boxshadow\">\n" +
    "			<div class=\"sub-header\">\n" +
    "				<span translate>To</span> <strong>{{ endDate | date: \"shortDate\" }}</strong>\n" +
    "				<div class=\"icon-set form-validation-sign datepickerfix\">\n" +
    "					<i class=\"mdi mdi-check right-sign\"></i>\n" +
    "					<i class=\"mdi mdi-close wrong-sign\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<datepicker show-weeks=\"true\" class=\"wfm-datepicker datepicker-end-date\" ng-model=\"endDate\" ng-disabled=\"disabled\" custom-class=\"setRangeClass(date, mode)\"></datepicker>\n" +
    "		</div>\n" +
    "		<div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\" ng-if=\"showMessage\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateMustBeEqualToOrEarlierThanEndDate</span></div>\n" +
    "		<div class=\"error-msg-container ng-invalid-empty alert-error notice-spacer\" ng-if=\"showMessage\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateAndEndDateMustBeSet</span></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div ng-show=\"templateType==='dropdown'\" class=\"inline-block picker-template-dropdown\" >\n" +
    "	<div ng-class=\"{'ng-valid': !isInvalid(), 'ng-invalid': isInvalid(), 'ng-invalid-order': isInvalid('order'), 'ng-invalid-empty': isInvalid('empty')}\">\n" +
    "		<span translate class=\"hor-m-5\">From</span>\n" +
    "		<div class=\"inline-block relative\">\n" +
    "			<input class=\"pointer start-date-input\"\n" +
    "				   type=\"text\"\n" +
    "				   ng-click=\"onClickStartDateInput()\"\n" +
    "				   ng-model=\"startDate\"\n" +
    "				   uib-datepicker-popup=\"{{shortDate}}\"\n" +
    "				   on-open-focus=\"false\"\n" +
    "				   custom-class=\"setRangeClass(date, mode)\"\n" +
    "				   show-weeks=\"true\"\n" +
    "				   is-open=\"dropDownState.showStartDatePicker\"\n" +
    "				   ng-required=\"true\"\n" +
    "				   show-button-bar=\"false\"\n" +
    "				   close-on-date-selection=\"false\" />\n" +
    "		</div>\n" +
    "		<span translate class=\"hor-m-5\">To</span>\n" +
    "		<div class=\"inline-block relative\">\n" +
    "			<input class=\"pointer end-date-input\"\n" +
    "				   type=\"text\"\n" +
    "				   ng-click=\"onClickEndDateInput()\"\n" +
    "				   ng-model=\"endDate\"\n" +
    "				   uib-datepicker-popup=\"{{shortDate}}\"\n" +
    "				   on-open-focus=\"false\"\n" +
    "				   show-weeks=\"true\"\n" +
    "				   custom-class=\"setRangeClass(date, mode)\"\n" +
    "				   is-open=\"dropDownState.showEndDatePicker\"\n" +
    "				   ng-required=\"true\"\n" +
    "				   show-button-bar=\"false\"\n" +
    "				   close-on-date-selection=\"false\" />\n" +
    "		</div>\n" +
    "		<span class='pointer iconfix' ng-mouseenter=\"hoverShow=true\" ng-mouseleave=\"hoverShow=false\" ng-click=\"onClickShowAllDates()\"\n" +
    "			  ng-class='{\"pin-down\" : dropDownState.showAllDatePickers}'><i class=\"mdi mdi-calendar middle\"></i></span>\n" +
    "		<div class=\"error-msg-container invalid-order alert-error notice-spacer\" ng-if=\"hoverShow\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateMustBeEqualToOrEarlierThanEndDate</span></div>\n" +
    "		<div class=\"error-msg-container invalid-empty alert-error notice-spacer\" ng-if=\"hoverShow\"><i class='mdi mdi-alert-octagon'></i> <span translate>StartDateAndEndDateMustBeSet</span></div>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/time-range-picker/time-range-picker.tpl.html',
    "<div>\n" +
    "    <table>\n" +
    "	<tr>\n" +
    "	    <td><ng-transclude></ng-transclude></td>\n" +
    "	    <td><timepicker-wrap ng-model=\"startTime\"></timepicker-wrap></td>\n" +
    "	    <td><i class=\"mdi mdi-minus\"> </i> </td>\n" +
    "	    <td><timepicker-wrap ng-model=\"endTime\"></timepicker-wrap></td>\n" +
    "	    <td>\n" +
    "		<div class=\"next-day-toggle\"  ng-show=\"!disableNextDay || nextDay\" >\n" +
    "		    <button class=\"wfm-btn wfm-btn-invis-default\"\n" +
    "			    ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\"\n" +
    "			    ng-click=\"toggleNextDay()\">\n" +
    "			{{ nextDay ? \"+ 1\" : \"+ 0\"}}\n" +
    "		    </button>\n" +
    "		</div>\n" +
    "	    </td>\n" +
    "	</tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\">\n" +
    "    <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "    <span translate>EndTimeMustBeGreaterOrEqualToStartTime</span>\n" +
    "</div> 		\n" +
    "<div class=\"error-msg-container ng-invalid-parse alert-error notice-spacer\">\n" +
    "    <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "    <span translate>StartTimeAndEndTimeMustBeSet</span>\n" +
    "</div>\n"
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
    "		<div class=\"wfm-block\">\n" +
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
