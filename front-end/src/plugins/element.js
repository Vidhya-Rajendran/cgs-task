import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Table, TableColumn, Pagination, Loading, Popover, Notification, DatePicker, TimePicker, Button, Progress, Tabs,
  TabPane, Badge, Upload, Tooltip, Dropdown, DropdownItem, DropdownMenu, ButtonGroup, Checkbox, RadioGroup, Radio
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import { DataTables, DataTablesServer } from 'vue-data-tables';

Vue.use(Element);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(Loading.directive);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Button);
Vue.use(DataTables);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(DataTablesServer);
Vue.use(Tabs);
Vue.use(ButtonGroup);
Vue.use(TabPane);
Vue.use(Badge);
Vue.use(Upload);
Vue.use(Tooltip);
Vue.use(RadioGroup);
Vue.use(Radio);
locale.use(lang);
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
