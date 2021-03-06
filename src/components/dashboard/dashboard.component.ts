import { Component } from '@angular/core';
import {MdIcon} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';

import {LeftSidenavContentComponent} from '../shared/left-sidenav-content.component';

import {TemplateCompiler} from '../../utils/template-compiler';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    template: TemplateCompiler.compile(
        require('../shared/sidenav.template.html'),{
        toolbarTitle:   'Dashboard',
        toolbarContent: '',
        content:        require('./dashboard.component.html')
    }),
    styles: [],
    directives: [
        MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_PROGRESS_BAR_DIRECTIVES, MdIcon,
        LeftSidenavContentComponent
    ],
    providers: [
    ]
})
export class DashboardComponent{
}
